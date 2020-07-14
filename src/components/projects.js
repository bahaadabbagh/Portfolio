import React from 'react'
import Onecard from "./oneCard"
import { MDBContainer, MDBRow } from "mdbreact";
import projectPhoto from "../images/project.svg"
export default function projects() {
    return (
             <MDBContainer>
        <img className="projectPhoto" src={projectPhoto}alt="project Photos" width="70%"></img>
        <h3 className="projectsH3">Here's a list of my favorite front-end projects that I worked on recently</h3>
          <Onecard/>
        </MDBContainer> 
    )
}
