import React from "react";
import logo from "../img/SVG/logo.svg";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

const NavBar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <div className="container">
        <Navbar.Brand href="."> 
          <span className="brand">
            <img src={logo} height="20" class="d-inline-block" alt="logo" />
          </span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse
          id="responsive-navbar-nav"
          className="justify-content-end">
          <Nav className="me-auto">
            <Nav.Link href="#landing" className="mx-3">About me</Nav.Link>
            <Nav.Link href="#skill" className="mx-3">Skills</Nav.Link>
            <Nav.Link href="#proyect" className="mx-3">Portfolio</Nav.Link>
            <Nav.Link href="#contact" className="mx-3">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
};
export default NavBar;
