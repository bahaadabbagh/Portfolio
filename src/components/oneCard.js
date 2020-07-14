import React from "react";
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
    <MDBCard>
    <MDBCardImage className="img-fluid" src={movieProject} waves />
    <MDBCardBody>
      <MDBCardTitle>CinemaBox</MDBCardTitle>
      <MDBCardText>
        Here's a website that fetches an API from TMDB to give you the help you need to pick tonight's movie or search an actor!.<br/>
        <strong>HTML,CSS,JavaScript,Bootstrap,API</strong>
      </MDBCardText>
      <a href="https://github.com/bahaadabbagh/cinemabox" target="_blank" className="px-2 fa-lg fb-ic">
           <MDBIcon fab icon="github-square" />
      </a>
      <MDBBtn color="purple" href="https://bahaadabbagh.github.io/cinemabox/"target="_blank">Visit Website</MDBBtn>    </MDBCardBody>
  </MDBCard>
  </MDBCol>
  <MDBCol className="oneCard" sm="6">
    <MDBCard>
    <MDBCardImage className="img-fluid" src={madlib} waves />
    <MDBCardBody>
      <MDBCardTitle>Madlibs</MDBCardTitle>
      <MDBCardText>
        Madlibs has never been madder with you writing your own story<br/>
        <strong>HTML,CSS,JavaScript</strong>
      </MDBCardText>
      <a href="https://github.com/bahaadabbagh/Madlibs" target="_blank" className="px-2 fa-lg fb-ic">
           <MDBIcon fab icon="github-square" />
      </a>
      <MDBBtn color="purple" href="https://bahaadabbagh.github.io/Madlibs/"target="_blank">Visit Website</MDBBtn>
    </MDBCardBody>
  </MDBCard>
  </MDBCol>
  <MDBCol className="oneCard" sm="6">
    <MDBCard>
    <MDBCardImage className="img-fluid" src={learngo} waves />
    <MDBCardBody>
      <MDBCardTitle>learnGo</MDBCardTitle>
      <MDBCardText>
        A to-do app I worked on to help botcamp student organize their time <br/>
        <strong>CSS,JSX,React,Bootstrap,FireBase</strong>
      </MDBCardText>
      <a href="https://github.com/bahaadabbagh/learnGo/tree/master/public" target="_blank" className="px-2 fa-lg fb-ic">
           <MDBIcon fab icon="github-square" />
      </a>
      <MDBBtn color="purple" href="https://hungry-lichterman-b823f1.netlify.app/"target="_blank">Visit Website</MDBBtn>
    </MDBCardBody>
  </MDBCard>
  </MDBCol>
  <MDBCol className="oneCard" sm="6">
    <MDBCard>
    <MDBCardImage className="img-fluid" src={portfolioScreenshot} waves />
    <MDBCardBody>
      <MDBCardTitle>My Portfolio</MDBCardTitle>
      <MDBCardText>
        The website you're already on! serving the purpose of showing you who I am <br/>
        <strong>JSX,React,Bootstrap</strong>
      </MDBCardText>
      <a href="https://github.com/bahaadabbagh/portfolio" target="_blank" className="px-2 fa-lg fb-ic">
           <MDBIcon fab icon="github-square" />
      </a>
      <MDBBtn  color="purple"href="#">You're Already Here!</MDBBtn>
    </MDBCardBody>
  </MDBCard>
  </MDBCol>
  </MDBRow>

</div>
  );
}
