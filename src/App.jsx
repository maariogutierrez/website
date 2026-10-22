import './App.css'
import Portfolio from './components/Portfolio/Portfolio'
import Technologies from './components/Technologies/Technologies'
import Experience from './components/Experience/Experience'
import Footer from './components/Footer/Footer'
import GetInTouch from './components/GetInTouch/GetInTouch'
import Header from './components/Header/Header'
import Photos from './components/Photos/Photos'
import { Toaster } from 'sonner'
import { useTheme } from './context/ThemeContext'

function App() {
  const { theme } = useTheme()

  return (
    <>
      <Toaster
        position="top-center"
        theme={theme}
        toastOptions={{
          style: {
            borderRadius: 0,
            boxShadow: 'none',
            border: '1px solid var(--color-border)',
            background: 'var(--color-bg)',
            color: 'var(--color-text)',
            fontFamily: 'var(--font-sans)'
          }
        }}
      />
      <Header></Header>
      <div id='content'>
        <Experience></Experience>
        {/* <Technologies></Technologies> */}
        <Portfolio></Portfolio>
        <Photos></Photos>
        <GetInTouch></GetInTouch>
      </div>
      <Footer></Footer>
    </>
  )
}

export default App
