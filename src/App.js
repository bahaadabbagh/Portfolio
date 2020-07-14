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
        <Route path="/Portflio/" component={Nav} />
        <Route path="/Portflio/about" component={About} />
        <Route path="/Portflio/contact" component={Contact} />
        <Route path="/Portflio/projects" component={Projects} />
        <Route exact path="/" component={Home} />
      </Router>
    </div>
  );
}

export default App;
