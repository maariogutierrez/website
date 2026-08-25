import './App.css'
import Portfolio from './components/Portfolio/Portfolio'
import Technologies from './components/Technologies/Technologies'
import Experience from './components/Experience/Experience'
import Footer from './components/Footer/Footer'
import GetInTouch from './components/GetInTouch/GetInTouch'
import Header from './components/Header/Header'
import Carousel from './components/Carousel/Carousel'
import { Toaster } from 'sonner'
import { useState, useEffect } from 'react'
import { useTheme } from './context/ThemeContext'

function App() {
  const [spinner, setSpinner] = useState(true)
  const { theme } = useTheme()
  const OPTIONS = { loop: true }
  const IMAGES = [
    '/media/gallery/first_year_award.jpg',
    '/media/gallery/indesiahack_group_winners.jpg',
    '/media/gallery/talent_arena.jpg'
  ]

  useEffect(() =>
    setTimeout(() => {
      setSpinner(false)
    }, 3000)
  , [])
  return (
    <>
      { spinner &&
        <div className='spinner-center'>
          <img
            src='https://raw.githubusercontent.com/maariogutierrez/maariogutierrez/main/asciifaster.svg'
            alt='Loading'
            className='spinner-logo'
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      }
      <>
        <Toaster position="top-center" theme={theme} />
        <Header></Header>
        <div id='content'>
          <Experience></Experience>
          <Technologies></Technologies>
          <Portfolio></Portfolio>
          <Carousel images={IMAGES} options={OPTIONS}></Carousel>          
          <GetInTouch></GetInTouch>
        </div>
        <Footer></Footer>
      </>
    </>
  )
}

export default App
