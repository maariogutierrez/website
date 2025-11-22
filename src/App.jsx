import './App.css'
import Portfolio from './components/Portfolio/Portfolio'
import Technologies from './components/Technologies/Technologies'
import AboutMe from './components/AboutMe/AboutMe'
import Experience from './components/Experience/Experience'
import Footer from './components/Footer/Footer'
import GetInTouch from './components/GetInTouch/GetInTouch'
import Header from './components/Header/Header'
import { Toaster } from 'sonner'

function App() {

  return (
    <>
      <Toaster position="top-center" />
      <Header></Header>
      <div id='content'>
        <Experience></Experience>
        <Technologies></Technologies>
        <Portfolio></Portfolio>
        <AboutMe></AboutMe>
        <GetInTouch></GetInTouch>
      </div>
      <Footer></Footer>
    </>
  )
}

export default App
