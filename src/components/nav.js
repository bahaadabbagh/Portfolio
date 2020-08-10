import React, { Component } from 'react'
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBNavbarToggler,
  MDBCollapse,
} from "mdbreact";

export default class nav extends Component {
  state = {
    isOpen: false
  };
  
  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
  }
  
  render() {
    return (
            <MDBNavbar color="purple" dark expand="md"width="100%" >
      <MDBNavbarBrand  right>
        <strong className="white-text" >Bahaeddin Dabbagh</strong>
      </MDBNavbarBrand>
      <MDBNavbarToggler onClick={this.toggleCollapse} />
      <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar >
        <MDBNavbarNav center>
          <MDBNavItem >
            <MDBNavLink  to="/Portfolio/">Home</MDBNavLink>
          </MDBNavItem>
          <MDBNavItem>
            <MDBNavLink to="/Portfolio/About">About</MDBNavLink>
          </MDBNavItem>
          <MDBNavItem>
            <MDBNavLink to="/Portfolio/projects">Frontend Projects</MDBNavLink>
          </MDBNavItem>
          <MDBNavItem>
            <MDBNavLink to="/Portfolio/Blog">Blog</MDBNavLink>
          </MDBNavItem>
          <MDBNavItem>
            <MDBNavLink to="/Portfolio/contact">Contact</MDBNavLink>
          </MDBNavItem>

        </MDBNavbarNav>
      </MDBCollapse>
    </MDBNavbar>
    )
  }
}