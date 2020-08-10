import React from "react";
import {MDBContainer, MDBCol} from "mdbreact"
import masthead from "../images/test4.svg";

export default function portfolio(props) {
  return (
    <MDBContainer>
    <div className="home">
      <MDBCol className="homeAllText" md="12">
        <h1 className="homeMainText">
          {" "}
          I'm Bahaa, I'm a <span className="changingContent"></span>
          <br />{" "}
        </h1>
        <h3>
          I'm a seasoned salesman and a digital marketing expert with a passion
          for programming.
          <br />
          <br />
          I'm an excellent team player that is result oriented with a dash of fun!
          {/* I'm always working on developing myself and learning something new.{" "} */}
          <br />
          {/* I am also very happy when I give training on technichal or soft skills */}
        </h3>
      </MDBCol>
      <MDBCol md="12">
        <img src={masthead} alt="masthead" className="masthead"></img>
      </MDBCol>
    </div>
    </MDBContainer>
  );
}
