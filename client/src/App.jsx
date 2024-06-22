import { BrowserRouter,Route,Routes } from "react-router-dom"
import Home from "./Components/Pages/Home"
import Dashboard from './Components/Pages/Dashboard'
import About from "./Components/Pages/About"
import Signin from './Components/Pages/Signin'
import Signup from './Components/Pages/Signup'
import Projects from './Components/Pages/Projects'


function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/dashboard" element={<Dashboard/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/sign-in" element={<Signin/>}/>
      <Route path="/sign-up" element={<Signup/>}/>
      <Route path="/projects" element={<Projects/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
