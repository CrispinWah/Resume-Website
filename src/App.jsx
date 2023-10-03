import "./my-sass.scss"
import Home from "./components/Home"
import Project from "./components/Projects"
import Contact from "./components/Contact"
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";

export default function App() {


  return  (
  
    <>
    
  <header>
  <div className="pattern">
    <div className="container">
      <div className="pattern-inner"></div>
    </div>
  </div>
  
    

  <div className="container">

  </div>
</header>

<BrowserRouter>

<div style={{ paddingLeft: '54px', paddingBottom: '10px'}}>
  <NavLink to="/">
    <button style={{margin: '10px'}} type="button">
       Home
       </button>
  </NavLink>


  <NavLink to="/Projects">
  <button style={{ margin: '10px'}} type="button">
      Projects
      </button>
  </NavLink>

  <NavLink to="/Contact">
  <button style={{ margin: '10px'}} type="button">
      Contact
      </button>
  </NavLink>
</div>



      
<Routes>
   <Route exact path="/" element={<Home />} />
   <Route exact path="/Projects" element={<Project />} />         
   <Route exact path="/Contact" element={<Contact />} />        
</Routes>
      
</BrowserRouter>
  
  </>
 
  )
}

