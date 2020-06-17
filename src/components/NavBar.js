import React from "react";
import logo from "../img/ylogo_blue.png";

const NavBar = () => {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-light bg-light  navbar-fixed-top"
      style={{ height: "10vh" }}
    >
      <a className="navbar-brand pl-2" href="/">
        <img
          src={logo}
          height="40"
          class="d-inline-block align-top mr-2"
          alt=""
        />
      </a>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="container navbar-nav">
          <li className="nav-item">
            <a className="nav-link text-uppercase" href="#landing">
              Inicio
              {/* <span className="sr-only">(current)</span> */}
            </a>
          </li>

          <li className="nav-item">
            <a className="nav-link text-uppercase" href="#about">
              Acerca de mí
            </a>
          </li>

          <li className="nav-item">
            <a className="nav-link text-uppercase" href="#skills">
              Habilidades
            </a>
          </li>

          <li className="nav-item">
            <a className="nav-link text-uppercase" href="#projects">
              Trabajos
            </a>
          </li>

          <li className="nav-item">
            <a className="nav-link text-uppercase" href="#contact">
              Contáctame
            </a>
          </li>
        </ul>
      </div>
    </nav>
  ); 
};
export default NavBar;
