import React, { useState, Fragment } from "react";
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol,MDBRow,MDBIcon } from "mdbreact";
import movieProject from  "../images/movieProject.jpg";
import madlib from "../images/madlib.jpg";
import learngo from "../images/learnGo.png";
import portfolioScreenshot from "../images/portfolio.jpg"
export default function OneCard(props) {


  return (
    <div>
            <MDBRow>

      <MDBCol className="oneCard" sm="6">
    <MDBCard style={{ width: "30rem" }}>
    <MDBCardImage className="img-fluid" src={movieProject} waves />
    <MDBCardBody>
      <MDBCardTitle>CinemaBox</MDBCardTitle>
      <MDBCardText>
        Here's a website that fteches an API from TMDB to give you the help you need to pick tonight's movie or search an actor!.
      </MDBCardText>
      <a href="https://github.com/bahaadabbagh/cinemabox" target="_blank" className="px-2 fa-lg fb-ic">
           <MDBIcon fab icon="github-square" />
      </a>
      <MDBBtn color="purple" href="https://bahaadabbagh.github.io/cinemabox/"target="_blank">Visi Website</MDBBtn>    </MDBCardBody>
  </MDBCard>
  </MDBCol>
  <MDBCol className="oneCard" sm="6">
    <MDBCard style={{ width: "30rem" }}>
    <MDBCardImage className="img-fluid" src={madlib} waves />
    <MDBCardBody>
      <MDBCardTitle>Madlibs</MDBCardTitle>
      <MDBCardText>
        Madlibs has never been madder with you writing your own story
      </MDBCardText>
      <a href="https://github.com/bahaadabbagh/Madlibs" target="_blank" className="px-2 fa-lg fb-ic">
           <MDBIcon fab icon="github-square" />
      </a>
      <MDBBtn color="purple" href="https://bahaadabbagh.github.io/Madlibs/"target="_blank">Visit Website</MDBBtn>
    </MDBCardBody>
  </MDBCard>
  </MDBCol>
  <MDBCol className="oneCard" sm="6">
    <MDBCard style={{ width: "30rem" }}>
    <MDBCardImage className="img-fluid" src={learngo} waves />
    <MDBCardBody>
      <MDBCardTitle>learnGo</MDBCardTitle>
      <MDBCardText>
        a todo app I worked on to help organize botcamp student organize their time
      </MDBCardText>
      <a href="https://github.com/bahaadabbagh/learnGo/tree/master/public" target="_blank" className="px-2 fa-lg fb-ic">
           <MDBIcon fab icon="github-square" />
      </a>
      <MDBBtn color="purple" href="https://hungry-lichterman-b823f1.netlify.app/"target="_blank">Visit Website</MDBBtn>
    </MDBCardBody>
  </MDBCard>
  </MDBCol>
  <MDBCol className="oneCard" sm="6">
    <MDBCard style={{ width: "30rem" }}>
    <MDBCardImage className="img-fluid" src={portfolioScreenshot} waves />
    <MDBCardBody>
      <MDBCardTitle>My Portfolio</MDBCardTitle>
      <MDBCardText>
        The website you're already on! serving the purpose of showing you who I am 
      </MDBCardText>
      <MDBBtn  color="purple"href="#">Github</MDBBtn>
    </MDBCardBody>
  </MDBCard>
  </MDBCol>
  </MDBRow>

</div>
  );
}
