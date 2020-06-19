import React from "react";

import logo from "../img/ylogo_white.png";

const Landing = () => {
  return (
    <div className="landing_content" id="landing">
      <p className="landing-uptitle text-center m-4">
        Desarrollador Web y Diseñador de Interfaz de Usuario
      </p>
      <h1 className="landing_title text-center text-uppercase">
        Yohel Ureña Mora
      </h1>

      <div className="container landing__logo">
        <img
          src={logo}
          height="400"
          class="rounded mx-auto d-block mr-2"
          alt="logo"
        />
      </div>

      <h6 className="landing-subtitle text-center m-3">
        ¿Quieres saber más de mí?
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
