import React from "react";
import Onecard from "./oneCard";
import { MDBContainer } from "mdbreact";
import projectPhoto from "../images/teamproject.svg";
export default function projects() {
  return (
    <MDBContainer>
      <img
        className="projectPhoto"
        src={projectPhoto}
        alt="project Photos"
        width="70%"
      ></img>
      <h3 className="projectsH3">
        Here's a list of my favorite frontend projects that I worked on recently
      </h3>
      <Onecard />
    </MDBContainer>
  );
}
