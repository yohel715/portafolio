import React from "react";
import logo from "../img/ylogo_white.png";

const Landing = () => {
  return (
    <div className="landing_content" id="landing">
      <p className="landing-uptitle text-center m-3">
        Desarrollador Web y Diseñador en Interfaz de Usuario
      </p>
      <h1 className="landing-title text-center m-3">Yohel Ureña Mora</h1>
      <div className="container landing__logo">
        <img
          src={logo}
          height="440"
          class="rounded mx-auto d-block mr-2"
          alt="logo"
        />
      </div>
      <h6 className="landing-uptitle text-center m-3">
        ¿Quieres saber más?
      </h6>
      <div className="icon d-flex justify-content-center">
        <a className="icon_landing" href="#about">
          <spam
            className="iconify"
            data-icon="bi:chevron-compact-down"
            data-inline="false"
            data-width="64"
            data-height="64"
          ></spam>
        </a>
      </div>
    </div>
  );
};
export default Landing;
