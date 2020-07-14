import React from 'react'
import Onecard from "./oneCard"
import { MDBContainer, MDBRow } from "mdbreact";
import projectPhoto from "../images/project.svg"
export default function projects() {
    return (
        <div>
             <MDBContainer>
          {" "}
        <img className="projectPhoto" src={projectPhoto}alt="project Photos"></img>
        <h3 className="projectsH3">Here's a list of my favorite front-end projects that I worked on recently</h3>
          <MDBRow>
          <Onecard/>
          </MDBRow>
    </MDBContainer>
        </div>
    )
}
