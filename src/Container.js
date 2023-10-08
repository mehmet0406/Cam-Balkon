import Navbar from "./components/Navbar"
import FirstSection from "./components/FirstSection"
import About from "./components/About"
import Hizmet1 from "./components/Hizmet1"
import Hizmet2 from "./components/Hizmet2"
import Footer from "./components/Footer"

export default function Container() {
  return (
    <div>
        <Navbar/>
        <FirstSection/>
        <About/>
        <Hizmet1/>
        <Hizmet2/>
        <Footer/>
      
    </div>
  )
}
