---
name: screenshot
description: Screenshot this website at desktop and phone widths to check how it looks. Use after any visual change (CSS, layout, components, images, copy), before presenting a fix for review, or when asked to run, view, check or screenshot the site.
---

# Screenshot the website

`scripts/screenshot.mjs` starts the Vite dev server, opens the page in headless Chromium, saves screenshots, and shuts everything down. It also reports console errors and sideways scrolling, and exits with code 1 if it finds any.

## Run it

Save into the session scratchpad, not the repo:

```bash
npm run screenshot -- --out <scratchpad>/shots
```

Options:
- `--widths 1440,390`: viewport widths in px (the default is desktop 1440 and phone 390). Add `1024` when checking the tablet breakpoint, where the projects table stacks.
- `--selector '#portfolio'`: also save one element at full resolution. Useful section ids: `#experience`, `#portfolio`, `#photosTitle` (use `.photos` for the grid), `#getInTouch`, `.hero`, `.footer`.
- `--path /`: the route to open.

For each width it writes `<width>-fold.png` (the first screen) and `<width>-full.png` (the whole page), plus `<width>-<selector>.png` when a selector is given.

## Look at the results

Open the PNGs with the Read tool.
- **Start with the `-fold` images.** They're full resolution.
- **Full-page images get shrunk when read,** especially the phone one (about 4,600px tall). Use them for overall rhythm and alignment only, and use `--selector` to inspect any section in detail.
- **The page loads with reduced motion,** so the name shows in its final, settled weight.

## What to check on this site

- The name in the opening section reaches the grid's right edge without clipping.
- Section names in columns 1–3 and content from column 4 share one left edge with the header and footer.
- Nothing is centred or justified. Hairlines appear only between rows of data.
- Cobalt (`#1f3bd4`) is the only colour apart from greys and black.
- On phones, nothing scrolls sideways and inputs stay at 16px or larger.

Mention in the review what the screenshots showed. If the script reports problems, list them; don't hide them.
