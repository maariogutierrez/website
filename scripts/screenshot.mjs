// Starts the Vite dev server, screenshots the site at several widths, then shuts everything down.
// Usage: node scripts/screenshot.mjs [--out <dir>] [--widths 1440,390] [--path /] [--selector <css>]
import { createServer } from 'vite'
import { chromium } from 'playwright'
import { mkdir } from 'node:fs/promises'
import { tmpdir } from 'node:os'
import { join, resolve } from 'node:path'

function readArgs(argv) {
  const args = { out: join(tmpdir(), 'website-screenshots'), widths: [1440, 390], path: '/', selector: null }

  for (let index = 0; index < argv.length; index += 1) {
    const value = argv[index + 1]

    if (argv[index] === '--out') args.out = resolve(value)
    if (argv[index] === '--widths') args.widths = value.split(',').map(Number)
    if (argv[index] === '--path') args.path = value
    if (argv[index] === '--selector') args.selector = value
  }

  return args
}

const args = readArgs(process.argv.slice(2))
await mkdir(args.out, { recursive: true })

const server = await createServer({ logLevel: 'error', server: { port: 5199, strictPort: false } })
await server.listen()
const baseUrl = server.resolvedUrls.local[0].replace(/\/$/, '')

const browser = await chromium.launch()
const problems = []

try {
  for (const width of args.widths) {
    const height = width < 768 ? 844 : 900
    // Reduced motion skips the name animation, so the screenshot shows the settled page.
    const context = await browser.newContext({ viewport: { width, height }, reducedMotion: 'reduce' })
    const page = await context.newPage()

    page.on('console', (message) => {
      if (message.type() === 'error') problems.push(`[${width}px] console error: ${message.text()}`)
    })
    page.on('pageerror', (error) => problems.push(`[${width}px] page error: ${error.message}`))

    await page.goto(baseUrl + args.path, { waitUntil: 'networkidle' })
    await page.evaluate(() => document.fonts.ready)

    const overflow = await page.evaluate(() => document.documentElement.scrollWidth - window.innerWidth)
    if (overflow > 0) problems.push(`[${width}px] page scrolls sideways by ${overflow}px`)

    const fold = join(args.out, `${width}-fold.png`)
    const full = join(args.out, `${width}-full.png`)
    await page.screenshot({ path: fold })
    await page.screenshot({ path: full, fullPage: true })
    console.log(`${width}px: ${fold}`)
    console.log(`${width}px: ${full}`)

    if (args.selector) {
      const name = args.selector.replace(/[^a-z0-9]+/gi, '-').replace(/^-|-$/g, '')
      const section = join(args.out, `${width}-${name}.png`)
      await page.locator(args.selector).first().screenshot({ path: section })
      console.log(`${width}px: ${section}`)
    }

    await context.close()
  }
} finally {
  await browser.close()
  await server.close()
}

if (problems.length > 0) {
  console.log('\nProblems found:')
  problems.forEach((problem) => console.log(`- ${problem}`))
  process.exitCode = 1
} else {
  console.log('\nNo console errors or sideways scrolling.')
}
