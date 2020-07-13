import React, { Component } from "react";
import contcatImg from "../images/contract.svg"
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

export default class Contact extends Component {
  render() {
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

              <p className="font-weight-bold blue-text">
                Front-End Web Developer
              </p>

              <MDBCardText>
                Sed ut perspiciatis unde omnis iste natus sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam.{" "}
              </MDBCardText>

              <MDBCol md="12" className="d-flex justify-content-center">
                <a href="!#" className="px-2 fa-lg li-ic">
                  <MDBIcon fab icon="linkedin-in"></MDBIcon>
                </a>

                <a href="!#" className="px-2 fa-lg fb-ic">
                  <MDBIcon fab icon="facebook-f"></MDBIcon>
                </a>
                <a href="!#" className="px-2 fa-lg fb-ic">
                <MDBIcon fab icon="github-square" />
                </a>
              </MDBCol>
              <MDBBtn href="https://github.com/bahaadabbagh" color="unique">
                download CV
              </MDBBtn>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        
        </MDBRow>
    );
  }
}
