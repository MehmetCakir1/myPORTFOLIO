import {BrowserRouter,Routes,Route} from "react-router-dom";
import Home from "../pages/Home"
import About from "../pages/About"
import Skills from "../pages/Skills"
import Projects from "../pages/Projects"
import Contact from "../pages/Contact"
import Navbar from "../components/Navbar"
import Resume from "../pages/Resume"

const AppRouter = () => {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/skills" element={<Skills/>}/>
        <Route path="/projects" element={<Projects/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/resume" element={<Resume/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default AppRouter