import './App.css'
import Portfolio from './components/Portfolio/Portfolio'
import Technologies from './components/Technologies/Technologies'
import AboutMe from './components/AboutMe/AboutMe'
import Experience from './components/Experience/Experience'
import Footer from './components/Footer/Footer'
import GetInTouch from './components/GetInTouch/GetInTouch'

function App() {

  return (
    <>
      {/* <Header></Header> */}
      <div id='content'>
        {/* <Me></Me> */}
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
