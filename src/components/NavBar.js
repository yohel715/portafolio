import React from "react";
import logo from "../img/SVG/logo.svg";

const NavBar = () => {
  return (
    <nav
      className="navbar navbar-expand-lg  navbar-fixed-top"
      style={{ height: "5vh" }}
    >
      <div className="container">
        <a className="navbar-brand" href="/">
          <img
            src={logo}
            height="20"
            class="d-inline-block"
            alt="logo"
          />
        </a>
        <div className="nav-list collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link text-uppercase" href="#about">
                About me
              </a>
            </li>

            <li className="nav-item ml-5">
              <a className="nav-link text-uppercase" href="#skills">
                Skills
              </a>
            </li>

            <li className="nav-item ml-5">
              <a className="nav-link text-uppercase" href="#projects">
                Portfolio
              </a>
            </li>

            <li className="nav-item ml-5">
              <a className="nav-link text-uppercase" href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  ); 
};
export default NavBar;
