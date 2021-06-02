import React from "react";
import logo from "../img/SVG/logo.svg";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

const NavBar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <div className="container">
        <Navbar.Brand href=".">
          <a className="navbar-brand">
            <img src={logo} height="20" class="d-inline-block" alt="logo" />
          </a>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
        <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
          <Nav className="me-auto">
            <Nav.Link href="#landing">
              <a className="nav-link text-uppercase">About Me</a>
            </Nav.Link>
            <Nav.Link href="#skills">
              <a className="nav-link text-uppercase">Skills</a>
            </Nav.Link>
            <Nav.Link href="#projects">
              <a className="nav-link text-uppercase">Portfolio</a>
            </Nav.Link>
            <Nav.Link href="#contact">
              <a className="nav-link text-uppercase">Contact</a>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
};
export default NavBar;
