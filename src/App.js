import React from "react";
import "./App.css";
import Nav from "./components/nav";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Projects from "./components/projects"
import { BrowserRouter as Router, Route } from "react-router-dom";

function App(props) {
  

  return (
    <div className="App">
      <Router>
        <Route path="/Portfolio/" component={Nav} />
        <Route path="/Portfolio/about" component={About} />
        <Route path="/Portfolio/contact" component={Contact} />
        <Route path="/Portfolio/projects" component={Projects} />
        <Route exact path="/Portfolio/" component={Home} />
      </Router>
    </div>
  );
}

export default App;
