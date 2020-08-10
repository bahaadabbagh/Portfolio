import React, { Component } from "react";
import underConstruction from "../images/underConstruction.svg";

export default class Blog extends Component {
  render() {
    return (

        <div className="blog">
          <img src={underConstruction} alt='under contruction' width="70%"></img>
          <h1 display="flex" flex="column">
            Working on it
        </h1>

        </div>
    );
  }
}
