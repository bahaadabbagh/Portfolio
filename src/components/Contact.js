import React from "react";
import contcatImg from "../images/contract1.svg"
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBCardText,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdbreact";
import cv from "../BahaeddinDabbaghCV.pdf"

export default function Contact() {
  return (
    <MDBRow className="contactCard">
    <MDBCol md="4">
      <MDBCard>
        <MDBCardImage
          hover
          overlay="white-slight"
          className="card-img-top"
          src={contcatImg}
          alt="Bahaa"
        />

        <MDBCardBody className="text-center">
          <MDBCardTitle className="card-title">
            <strong>Bahaa Dabbagh</strong>
          </MDBCardTitle>

          {/* <p className="font-weight-bold blue-text">
            Front-End Web Developer
          </p> */}

          <MDBCardText>
            Weather it's for helpful advice or welcomed feedback or to hire me!<br/>
            Please Don't hesitate to contact me!
          </MDBCardText>

          <MDBCol md="12" className="d-flex justify-content-center">
            <a href="https://www.linkedin.com/in/bahaa-dabbagh-107a03101/" target="_blank" className="px-2 fa-lg li-ic">
              <MDBIcon fab icon="linkedin-in"></MDBIcon>
            </a>

            <a href="https://www.facebook.com/bahaa.dabbagh" target="_blank" className="px-2 fa-lg fb-ic">
              <MDBIcon fab icon="facebook-f"></MDBIcon>
            </a>
            <a href="https://github.com/bahaadabbagh/" target="_blank" className="px-2 fa-lg fb-ic">
            <MDBIcon fab icon="github-square" />
            </a>
          </MDBCol>
          <a href={cv} target="_blank">
          <MDBBtn  color="unique">
            download CV
          </MDBBtn></a>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
    
    </MDBRow>
  )
}


