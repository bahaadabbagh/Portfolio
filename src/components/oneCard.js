import React from "react";
import {MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol, MDBRow, MDBIcon, MDBContainer} from "mdbreact";
import movieProject from "../images/movieProject.jpg";
import madlib from "../images/madlib.jpg";
import learngo from "../images/learnGo.png";
import portfolioScreenshot from "../images/portfolio.jpg";

export default function OneCard(props) {
  return (
    <MDBContainer>
      <MDBRow>
        <MDBCol  sm="6">
          <MDBCard className="oneCard">
            <MDBCardImage className="img-fluid" src={movieProject} waves />
            <MDBCardBody>
              <MDBCardTitle>CinemaBox</MDBCardTitle>
              <MDBCardText>
                {/* Here's a website that fetches an API from TMDB to show you
                movies or help you search for an actor!. */}
                This project uses the TMDB API to search for movie and actor details.
                <br />
                <br/>
                <strong>HTML, CSS, JavaScript, Bootstrap, API</strong>
              </MDBCardText>
              <div className="cardButtons">
                <a
                  href="https://github.com/bahaadabbagh/cinemabox"
                  target="_blank"
                  className="px-2 fa-lg fb-ic"
                >
                  <MDBIcon fab icon="github-square" size="3x" />
                </a>
                <MDBBtn
                  color="purple"
                  href="https://bahaadabbagh.github.io/cinemabox/"
                  target="_blank"
                >
                  Visit Website
                </MDBBtn>
              </div>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol  sm="6">
          <MDBCard className="oneCard">
            <MDBCardImage className="img-fluid" src={madlib} waves />
            <MDBCardBody>
              <MDBCardTitle>Madlibs</MDBCardTitle>
              <MDBCardText>
              Madlibs has never been MADDER with this rendition of the classic mad libs .
                <br/>
                <br/>
                <strong>HTML, CSS, JavaScript</strong>
              </MDBCardText>
              <div className="cardButtons">
                <a
                  href="https://github.com/bahaadabbagh/Madlibs"
                  target="_blank"
                  className="px-2 fa-lg fb-ic"
                >
                  <MDBIcon fab icon="github-square" size="3x" />
                </a>
                <MDBBtn
                  color="purple"
                  href="https://bahaadabbagh.github.io/Madlibs/"
                  target="_blank"
                >
                  Visit Website
                </MDBBtn>
              </div>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol sm="6">
          <MDBCard className="oneCard">
            <MDBCardImage className="img-fluid" src={learngo} waves />
            <MDBCardBody>
              <MDBCardTitle>LearnGo</MDBCardTitle>
              <MDBCardText>
              A task organizing app to help students in the Re:Coded bootcamp.
              <br />
              <br/>
                <strong>CSS, JSX, React, Bootstrap, FireBase</strong>
              </MDBCardText>
              <div className="cardButtons">
                <a
                  href="https://github.com/bahaadabbagh/learnGo/tree/master/public"
                  target="_blank"
                  className="px-2 fa-lg fb-ic"
                >
                  <MDBIcon fab icon="github-square" size="3x" />
                </a>
                <MDBBtn
                  color="purple"
                  href="https://hungry-lichterman-b823f1.netlify.app/"
                  target="_blank"
                >
                  Visit Website
                </MDBBtn>
              </div>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol  sm="6">
          <MDBCard className="oneCard">
            <MDBCardImage
              className="img-fluid"
              src={portfolioScreenshot}
              waves
            />
            <MDBCardBody>
              <MDBCardTitle>My Portfolio</MDBCardTitle>
              <MDBCardText>
                The website you're already on! intoriducing you to who I am 
                <br />
                <br/>
                <strong>JSX, React, Bootstrap</strong>
              </MDBCardText>
              <div className="cardButtons">
                <a
                  href="https://github.com/bahaadabbagh/portfolio"
                  target="_blank"
                  className="px-2 fa-lg fb-ic"
                >
                  <MDBIcon fab icon="github-square" size="3x" />
                </a>
                <MDBBtn color="purple" href="#">
                  Already Here!
                </MDBBtn>
              </div>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}
