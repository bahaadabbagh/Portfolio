import React, { Component } from "react";
import underConstruction from "../images/underConstruction.svg"
export default class About extends Component {
  render() {
    return (
      <React.Fragment>

        <div className="about">
          <img src={underConstruction} alt='under contruction'></img>
          <h1 display="flex" flex="column">
            Working on it
        </h1>
        </div>
      </React.Fragment>
    );
  }
}
