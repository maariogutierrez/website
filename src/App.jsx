import './App.css'
import Portfolio from './components/Portfolio/Portfolio'
import Technologies from './components/Technologies/Technologies'
import AboutMe from './components/AboutMe/AboutMe'
import Experience from './components/Experience/Experience'
import Footer from './components/Footer/Footer'
import GetInTouch from './components/GetInTouch/GetInTouch'
import Header from './components/Header/Header'
import Carousel from './components/Carousel/Carousel'
import { Toaster } from 'sonner'

function App() {
  const OPTIONS = { loop: true }
  const IMAGES = [
    '/media/gallery/first_year_award.jpg',
    '/media/gallery/indesiahack_group_winners.jpg',
    '/media/gallery/first_year_award.jpg',
    '/media/gallery/indesiahack_group_winners.jpg'
  ]

  return (
    <>
      <Toaster position="top-center" />
      <Header></Header>
      <div id='content'>
        <Experience></Experience>
        <Carousel images={IMAGES} options={OPTIONS}></Carousel>
        <Portfolio></Portfolio>
        <Technologies></Technologies>
        <AboutMe></AboutMe>
        <GetInTouch></GetInTouch>
      </div>
      <Footer></Footer>
    </>
  )
}

export default App
