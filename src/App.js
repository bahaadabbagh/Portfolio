import React from "react";
import "./App.css";
import Nav from "./components/nav";
import Home from "./components/Home";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Projects from "./components/projects"
import { BrowserRouter as Router, Route } from "react-router-dom";
import About from "./components/About";

function App(props) {
  

  return (
    <div className="App">
      <Router>
        <Route path="/Portfolio/" component={Nav} />
        <Route path="/Portfolio/Blog" component={Blog} />
        <Route path="/Portfolio/contact" component={Contact} />
        <Route path="/Portfolio/projects" component={Projects} />
        <Route exact path="/Portfolio/" component={Home} />
        <Route exact path="/Portfolio/About" component={About} />

      </Router>
    </div>
  );
}

export default App;
