import React from "react";

const Skills = () => {
  return (
    <div className="skills_content">
      <div className="row">
        <div className="column skills_column skills_column_left">
          <div class="skills_info_right">
            <ul className="contact_list">
              <h1 class="text-center mb-3 text-uppercase">Habilidades</h1>
              {/*  Dessarrollo Web */}
              <li onClick={Display5}>
                <button
                  type="butto"
                  class="btn btn-outline-light btn-lg btn-block my-4"
                  data-toggle="button"
                  aria-pressed="false"
                >
                  Dessarrollo Web
                </button>
              </li>
              {/* Diagramación y Prototipado Web */}
              <li onClick={Display4}>
                <button
                  type="button"
                  class="btn btn-outline-light btn-lg btn-block my-4"
                  data-toggle="button"
                  aria-pressed="false"
                >
                  Diagramación y Prototipado Web
                </button>
              </li>
              {/* Manipulación de Imagenes */}
              <li onClick={Display3}>
                <button
                  type="button"
                  class="btn btn-outline-light btn-lg btn-block my-4"
                  data-toggle="button"
                  aria-pressed="false"
                >
                  Manipulación de Imagenes
                </button>
              </li>
              {/* Imagenes Vectoriales */}
              <li onClick={Display2}>
                <button
                  type="button"
                  class="btn btn-outline-light btn-lg btn-block my-4"
                  data-toggle="button"
                  aria-pressed="false"
                >
                  Imagenes Vectoriales
                </button>
              </li>
              {/*  Audio y Video */}
              <li onClick={Display1}>
                <button
                  type="button"
                  class="btn btn-outline-light btn-lg btn-block my-4"
                  data-toggle="button"
                  aria-pressed="false"
                >
                  Audio y Video
                </button>
              </li>
              {/* Captura de Imagenes Digitales */}
              <li onClick={Display6}>
                <button
                  type="button"
                  class="btn btn-outline-light btn-lg btn-block my-4"
                  data-toggle="button"
                  aria-pressed="false"
                >
                  Captura de Imagenes Digitales
                </button>
              </li>
              {/* Identidad Gráfica */}
              <li onClick={Display7}>
                <button
                  type="button"
                  class="btn btn-outline-light btn-lg btn-block my-4"
                  data-toggle="button"
                  aria-pressed="false"
                >
                  Identidad Gráfica
                </button>
              </li>
            </ul>
          </div>
        </div>
        <div className="column skills_column skills_column_right">
          <div class="skills_info">
            {/* Identidad Gráfica */}
            <div id="parrafo7" class="my-2" style={{ display: "none" }}>
              <h3 className="font-weight-bold text-center">
                Elaboración de Identidad Gráfica
              </h3>
              <p class="descripcion mb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
            {/* Captura de imagenes digitales */}
            <div id="parrafo6" class="my-2" style={{ display: "none" }}>
              <h3 className="font-weight-bold text-center">
                Captura de Imagenes Digitales
              </h3>
              <p class="descripcion mb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
            {/* Manipulación de Audio y Video */}
            <div id="parrafo1" class="my-2" style={{ display: "none" }}>
              <h3 className="font-weight-bold text-center">
                Manipulación de Audio y Video
              </h3>
              <p class="descripcion mb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
            {/* Creacción de Ilustraciones Vectoriales */}
            <div id="parrafo2" class="my-2" style={{ display: "none" }}>
              <h3 className="font-weight-bold text-center">
                Creacción de Ilustraciones Vectoriales
              </h3>
              <p class="descripcion mb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
            {/* Manipulación de Imagenes */}
            <div id="parrafo3" class="my-2" style={{ display: "none" }}>
              <h3 className="font-weight-bold text-center">
                Manipulación de Imagenes
              </h3>
              <p class="descripcion mb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
            {/* Protitopado Web */}
            <div id="parrafo4" class="my-2" style={{ display: "none" }}>
              <h3 className="font-weight-bold text-center">
                Diagramación y Prototipado Web
              </h3>
              <p class="descripcion mb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
            {/* Desarrollo Web */}
            <div id="parrafo5" class="my-2" style={{ display: "none" }}>
              <h3 className="font-weight-bold text-center">
                Dessarrollo Web
              </h3>
              <p class="descripcion mb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Display1 = () =>
  (document.getElementById("parrafo1").style.display = "block");
const Display2 = () =>
  (document.getElementById("parrafo2").style.display = "block");
const Display3 = () =>
  (document.getElementById("parrafo3").style.display = "block");
const Display4 = () =>
  (document.getElementById("parrafo4").style.display = "block");
const Display5 = () =>
  (document.getElementById("parrafo5").style.display = "block");
const Display6 = () =>
  (document.getElementById("parrafo6").style.display = "block");
const Display7 = () =>
  (document.getElementById("parrafo7").style.display = "block");

export default Skills;
