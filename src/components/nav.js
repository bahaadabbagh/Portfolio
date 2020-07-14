import React from "react";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBNavbarToggler,
  MDBCollapse,
} from "mdbreact";

const Nav = () => {
  return (

    <MDBNavbar color="purple" dark expand="md">
      <MDBNavbarBrand>
        <strong className="white-text">BAHAEDDIN DABBAGH</strong>
      </MDBNavbarBrand>
      <MDBNavbarToggler />
      <MDBCollapse id="navbarCollapse3" navbar>
        <MDBNavbarNav right>
          <MDBNavItem >
            <MDBNavLink  to="/Portflio/">Home</MDBNavLink>
          </MDBNavItem>
          <MDBNavItem>
            <MDBNavLink to="/Portflio/Projects">Front-End Projects</MDBNavLink>
          </MDBNavItem>
          <MDBNavItem>
            <MDBNavLink to="/Portflio/about">Blog</MDBNavLink>
          </MDBNavItem>
          <MDBNavItem>
            <MDBNavLink to="/Portflio/contact">Contact</MDBNavLink>
          </MDBNavItem>
        </MDBNavbarNav>
      </MDBCollapse>
    </MDBNavbar>
  );
};

export default Nav;
