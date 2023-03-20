import React,{useState} from "react"
import Resume from "./components/Resume"
import Project from "./components/Projects"
import NavBar from"./components/NavBar"
import Contact from "./components/Contact"
import AboutMe from "./components/AboutMe"
import './App.css';

function App() {
  const [page,setPage]=useState("About Me")
  const renderPage = () => {
    if (page === 'About Me') {
      return <AboutMe />;
    }
    if (page === 'Project') {
      return <Project />;
    }
    if (page === 'Resume') {
      return <Resume />;
    }
    return <Contact />;
  };
  return (
    <div className="App">
    {/* <NavBar/>
      <h1>
        hi
      </h1> */}
      <button onClick={()=>setPage("Project")}>
        Project
      </button>
      <button onClick={()=>setPage("About Me")}>
        About Me
      </button>
      <button onClick={()=>setPage("Resume")}>
        Resume
      </button>
      <button onClick={()=>setPage("Contact")}>
        Contact
      </button>
     {
      renderPage()
     }
    </div>
  );
}

export default App;
