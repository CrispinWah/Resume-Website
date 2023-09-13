import "./my-sass.scss"
import Projects from "./projects.jsx";
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
    <h1>
      <span> Portfolio </span>
      <small> Chance Leland Abenes</small>
    </h1>
  </div>
</header>

<BrowserRouter>

<main>
  <div className="container">
    <div className="content">
      <h2>
       Senior Project 2022-2023
      </h2>

      <p>
       Sept 15, 2022 Delvierable 1
      </p>
      <p>
      Project Management & Requirements Management
      </p>
      <NavLink to="/projects">
      <button type="button">Project Vision & Software Development Plan</button>
      </NavLink>
      <p></p>

      <a href="/posts">
      <button type="button">Product Backlog</button>
      </a>
      <p></p>

      <a href="/posts">
      <button type="button">Sprint Backlog</button>
      </a>
      <p></p>

      <a href="/posts">
      <button type="button">User Stories</button>
      </a>
      <p></p>

    </div>



    <div className="content">
    <p>
       Oct 13, 2022 Delvierable 2
      </p>
      <p>
      Requirements Management
      </p>

      <a href="/posts">
      <button type="button">Use Case Specification</button>
      </a>
      <p></p>

      <a href="/posts">
      <button type="button">Sketches & Wireframes</button>
      </a>
      <p></p>


      </div>

      <div className="content">
    <p>
       Nov 17, 2022 Delvierable 3
      </p>
      <p>
      Project Management, Requirements Management, Design and Analysis,
and Construction
      </p>

      <a href="/posts">
      <button type="button">Activity Diagram</button>
      </a>
      <p></p>

      <a href="/posts">
      <button type="button">Analysis Model</button>
      </a>
      <p></p>

      <a href="/posts">
      <button type="button">Sequence Diagram</button>
      </a>
      <p></p>

      <a href="/posts">
      <button type="button">Entity Relationship Diagram</button>
      </a>
      <p></p>

      </div>


      <div className="content">
    <p>
       Feb 1, 2023 Delvierable 4
      </p>
      <p>
      Design and Analysis, and Construction
      </p>

      <a href="/posts">
      <button type="button">Data Flow Diagram</button>
      </a>
      <p></p>

      <a href="/posts">
      <button type="button">Architecture Model</button>
      </a>
      <p></p>

      <a href="/posts">
      <button type="button">Package Diagram</button>
      </a>
      <p></p>

      <a href="/posts">
      <button type="button">className Diagrams</button>
      </a>
      <p></p>

      </div>


      <div className="content">
    <p>
       Mar 8, 2023 Delvierable 5
      </p>
      <p>
      Design and Analysis, and Construction
      </p>

      <a href="/posts">
      <button type="button">Database Design</button>
      </a>
      <p></p>

      <a href="/posts">
      <button type="button">Hardware and Software Specification</button>
      </a>
      <p></p>

      <a href="/posts">
      <button type="button">User Interface Design</button>
      </a>
      <p></p>

      </div>

      <div className="content">
    <p>
       April 5, 2023 Delvierable 6
      </p>
      <p>
      Design and Analysis, and Construction
      </p>

      <a href="/posts">
      <button type="button">Test Cases</button>
      </a>
      <p></p>

      <a href="/posts">
      <button type="button">Deployment Plan</button>
      </a>
      <p></p>

      <a href="/posts">
      <button type="button">Client Testing Summary Report</button>
      </a>
      <p></p>
      
      </div>

      <div className="content">
    <p>
       May 1, 2023 Delvierable 7
      </p>
      <p>
      Design and Analysis, and Construction
      </p>

      <a href="/posts">
      <button type="button">Final Report</button>
      </a>
      <p></p>

      <a href="/posts">
      <button type="button">Product Presentation</button>
      </a>
      <p></p>
      
      </div>

    <div className="content">
      <img src="https://basic-tutorials.de/wp-content/uploads/2016/08/NieR-Automata-Logo.jpg" width="300px"></img>
    </div>
  </div>
</main>

<div className="pattern">
  <div className="container">
    <div className="pattern-inner"></div>
  </div>
</div>
      
<Routes>

   <Route exact path="/projects" element={<Projects />} />                
</Routes>
      
</BrowserRouter>
  
  </>
 
  )
}

