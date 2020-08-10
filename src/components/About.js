import React from "react";
import { MDBContainer, MDBCol, MDBRow } from "mdbreact";
import marketingImage from "../images/marketing.svg";
import developer from "../images/developer.svg";
import sales from "../images/sales.svg";
import management from "../images/management.svg"

export default function About() {
  return (
    <MDBContainer>
      <MDBRow className="aboutRow">
        <h1>Mechanical Engineering Graduate That Mastered Many Trades</h1>
      </MDBRow>
      <MDBRow className="aboutRow">
        <MDBCol md="5">
          <h2>
            <br />
            <br />
          </h2>
          <h3>Digital Marketing</h3>
          <ul>
            <li>
              <h5>5 years of digital marketing management</h5>{" "}
            </li>
            <li>
              <h5>Trained by Google product trainers</h5>
            </li>
            <li>
              <h5>Worked on more than 400 accounts</h5>
            </li>
            <li>
              <h5>More than 500K USD quarterly</h5>
            </li>
            <li>
              <h5>Always A/B testing</h5>
            </li>
          </ul>
        </MDBCol>
        <MDBCol md="5">
          <img src={marketingImage} width="100%" alt="marketing" />
        </MDBCol>
      </MDBRow>
      <MDBRow className="aboutRow">
        <MDBCol md="5">
          <img src={developer} width="100%" alt="developer" />
        </MDBCol>
        <MDBCol md="5">
        <h2>
            <br />
          </h2>
          <h3>Website Development</h3>
          <ul>
            <li>
              <h5>Responsive layouts</h5>{" "}
            </li>
            <li>
              <h5>HTML, CSS, JavaScript, React, Bootstarap</h5>
            </li>
            <li>
              <h5>API and database connections</h5>
            </li>
            <li>
              <h5>Optimized many websites for sales</h5>
            </li>

          </ul>
        </MDBCol>
      </MDBRow>
      <MDBRow className="aboutRow">
        <MDBCol md="5">
        <h2>
            <br />
          </h2>
          <h3>Sales </h3>
          <ul>
            <li>
              <h5>Managed startup & established sales ops</h5>
            </li>
            <li>
              <h5>4 years of sales management</h5>
            </li>
            <li>
              <h5>Always over the targets</h5>{" "}
            </li>
            <li>
              <h5>Consultative sales</h5>
            </li>
            <li>
              <h5>Happy cutomers and happy teams </h5>
            </li>
          </ul>
        </MDBCol>
        <MDBCol md="5">
          <img src={sales} width="100%"  alt="sales"/>
        </MDBCol>
      </MDBRow>
      <MDBRow className="aboutRow">
        <MDBCol md="5">
          <img src={management} width="100%" alt="management" />
        </MDBCol>
        <MDBCol md="5">
        <h2>
            <br />
          </h2>
          <h3>Management</h3>
          <ul>
          <li>
              <h5>8 years of management</h5>{" "}
            </li>
            <li>
              <h5>Managed teams of up to 20 people</h5>{" "}
            </li>
            <li>
              <h5>Happy teams & happy clients</h5>
            </li>
            <li>
              <h5>Lead by example is my motto</h5>
            </li>
            {/* <li>
              <h5>Optimized many websites for sales</h5>
            </li>
            <li>
              <h5>Always A/B testing</h5>
            </li> */}
          </ul>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}
