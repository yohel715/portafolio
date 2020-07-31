import React from "react";

const Skills = () => {
  return (
    <div className="skills_content">
      <h1
        class="skills_tittle_movile text-center text-uppercase"
        style={{ display: "none" }}
      >
        Habilidades
      </h1>
      <div className="row">
        <div className="skills_column skills_column_left">
          <div class="skills_info_right">
            <ul className="skills_list">
              <h1 class="skills_tittle text-center mb-3 text-uppercase">
                Habilidades
              </h1>
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
        <div className="skills_column skills_column_right">
          <div class="skills_info">
            {/* Desarrollo Web */}
            <div
              id="parrafo5"
              class="skills_text my-2"
              style={{ display: "none" }}
            >
              <h3 className="font-weight-bold text-center">Dessarrollo Web</h3>
              <p class="descripcion mb-6">
                Manejo de distintos lenguajes de programación y etiquetados como
                Java, Javascript, PHP, C++, HTML5, además de usos de distintos
                frameworks como React, Laravel, Bootstrap, React-Boostrap, SASS
                y DJango.
              </p>
              <div className="skills_contentIcon">
                <div className="skills_icon">
                  <p className="skills_iconIndividual">
                    <span
                      class="iconify"
                      data-icon="cib:javascript"
                      data-inline="false"
                      data-width="24"
                      data-height="24"
                    ></span>
                    Java
                  </p>
                  <p className="skills_iconIndividual">
                    <span
                      class="iconify"
                      data-icon="simple-icons:php"
                      data-inline="false"
                      data-width="24"
                      data-height="24"
                    ></span>
                    PHP
                  </p>
                  <p className="skills_iconIndividual">
                    <span
                      class="iconify"
                      data-icon="gg:c-plus-plus"
                      data-inline="false"
                      data-width="24"
                      data-height="24"
                    ></span>
                    Dev-C++
                  </p>
                  <p className="skills_iconIndividual">
                    <span
                      class="iconify"
                      data-icon="typcn:html5"
                      data-inline="false"
                      data-width="24"
                      data-height="24"
                    ></span>
                    HTML5
                  </p>
                  <p className="skills_iconIndividual">
                    <span
                      class="iconify"
                      data-icon="simple-icons:react"
                      data-inline="false"
                      data-width="24"
                      data-height="24"
                    ></span>
                    React
                  </p>
                  <p className="skills_iconIndividual">
                    <span
                      class="iconify"
                      data-icon="simple-icons:bootstrap"
                      data-inline="false"
                      data-width="24"
                      data-height="24"
                    ></span>
                    Bootstrap
                  </p>
                  <p className="skills_iconIndividual">
                    <span
                      class="iconify"
                      data-icon="cib:sass-alt"
                      data-inline="false"
                      data-width="24"
                      data-height="24"
                    ></span>
                    SASS
                  </p>
                  <p className="skills_iconIndividual">
                    <span
                      class="iconify"
                      data-icon="cib:django"
                      data-inline="false"
                      data-width="24"
                      data-height="24"
                    ></span>
                    Django
                  </p>
                </div>
              </div>
            </div>

            {/* Protitopado Web */}
            <div
              id="parrafo4"
              class="skills_text my-2"
              style={{ display: "none" }}
            >
              <h3 className="font-weight-bold text-center">
                Diagramación y Prototipado Web
              </h3>
              <p class="descripcion mb-6">
                Conocimientos desarrollados de la mano de Figma y Adobe XD para
                la creación de layouts como WireFrames de baja fidelidad, alta
                fidelidad, Mockups y prototipado.
                <br /> Además de la teoría de composicion, diagramación para
                adquirir la mayor y mejor experiencia de usuario posible.
              </p>
              <div className="skills_contentIcon">
                <div className="skills_icon">
                  <p className="skills_iconIndividual">
                    <span
                      class="iconify"
                      data-icon="cib:adobe-xd"
                      data-inline="false"
                      data-width="24"
                      data-height="24"
                    ></span>
                    Adobe XD
                  </p>
                  <p className="skills_iconIndividual">
                    <span
                      class="iconify"
                      data-icon="gg:figma"
                      data-inline="false"
                      data-width="24"
                      data-height="24"
                    ></span>
                    Figma
                  </p>
                </div>
              </div>
            </div>

            {/* Manipulación de Imagenes */}
            <div
              id="parrafo3"
              class="skills_text my-2"
              style={{ display: "none" }}
            >
              <h3 className="font-weight-bold text-center">
                Manipulación de Imagenes
              </h3>
              <p class="descripcion mb-6">
                Con conocimientos técnicos y prácticos en la utilización de
                softwares como Adobe Photoshop, Ligthroom. <br />
                Gracias a esto puedo elaborar distintas ediciones de imágenes,
                recuadres, matte paitings, y composiciones, productos como
                afiches y posters. Así como mockups de páginas web, pruebas de
                paletas de colores, tipografias y visualizaciones para el
                proceso previo a la elaboración del Frontend.
              </p>
              <div className="skills_contentIcon">
                <div className="skills_icon">
                  <p className="skills_iconIndividual">
                    <span
                      class="iconify"
                      data-icon="simple-icons:adobephotoshop"
                      data-inline="false"
                      data-width="24"
                      data-height="24"
                    ></span>
                    Adobe Photoshop CC2020
                  </p>
                  <p className="skills_iconIndividual">
                    <span
                      class="iconify"
                      data-icon="simple-icons:adobelightroomcc"
                      data-inline="false"
                      data-width="24"
                      data-height="24"
                    ></span>
                    Adobe Lightroom Classic CC2020
                  </p>
                </div>
              </div>
            </div>

            {/* Creacción de Ilustraciones Vectoriales */}
            <div
              id="parrafo2"
              class="skills_text my-2"
              style={{ display: "none" }}
            >
              <h3 className="font-weight-bold text-center">
                Creacción de Ilustraciones Vectoriales
              </h3>
              <p class="descripcion mb-6">
                De la mano de softwares cómo Adobe Illustrator, Animate,
                InDesign y After Effects puedo elaborar elementos vectoriales
                cómo logos, logotipos, isotipos, elementos gráficos varios del
                motion gráphics, así como la construcciones de material visual
                tipo SVG para desarrollo web y prototipado.
              </p>
              <div className="skills_contentIcon">
                <div className="skills_icon">
                  <p className="skills_iconIndividual">
                    <span
                      class="iconify"
                      data-icon="cib:adobe-illustrator"
                      data-inline="false"
                      data-width="24"
                      data-height="24"
                    ></span>
                    Adobe Illustrator CC2020
                  </p>
                  <p className="skills_iconIndividual">
                    <span
                      class="iconify"
                      data-icon="cib:adobe-after-effects"
                      data-inline="false"
                      data-width="24"
                      data-height="24"
                    ></span>
                    Adobe After Effetcs CC2020
                  </p>
                  <p className="skills_iconIndividual">
                    <span
                      class="iconify"
                      data-icon="simple-icons:adobeindesign"
                      data-inline="false"
                      data-width="24"
                      data-height="24"
                    ></span>
                    Adobe InDesing CC2020
                  </p>
                </div>
              </div>
            </div>

            {/* Manipulación de Audio y Video */}
            <div
              id="parrafo1"
              class="skills_text my-2"
              style={{ display: "none" }}
            >
              <h2 className="font-weight-bold text-center">
                Manipulación de Audio y Video
              </h2>
              <p class="descripcion mb-6">
                Tengo altos conocimientos técnicos y prácticos en la utilización
                de softwares como Adobe Premiere Pro, After Effetcs y Media
                Encoder. De esta manera consigo hacer efectos de video generales
                como transiciones, planos, encuadres, construcciones de cintas
                audiovisuales, calibrado de colores, correción de imágenes,
                creación de videos promocionales para un producto en específico
                o material promocional.
                <br />
                Además de usar distintos softwares para conseguir la mejor
                calidad en imágenes y videos para un tema específico.
              </p>
              <div className="skills_contentIcon">
                <div className="skills_icon">
                  <p className="skills_iconIndividual">
                    <span
                      class="iconify"
                      data-icon="cib:adobe-premiere"
                      data-inline="false"
                      data-width="24"
                      data-height="24"
                    ></span>
                    Adobe Premiere Pro CC2020
                  </p>
                  <p className="skills_iconIndividual">
                    <span
                      class="iconify"
                      data-icon="cib:adobe-after-effects"
                      data-inline="false"
                      data-width="24"
                      data-height="24"
                    ></span>
                    Adobe After Effetcs CC2020
                  </p>
                </div>
              </div>
            </div>

            {/* Captura de imagenes digitales */}
            <div
              id="parrafo6"
              class="skills_text my-2"
              style={{ display: "none" }}
            >
              <h3 className="font-weight-bold text-center">
                Captura de Imagenes Digitales
              </h3>
              <p class="descripcion mb-6">
                Capacidad para utilizar diferentes equipos fotográficos para
                producir contenido audiovisual, conocimiento profundo en la
                manipulación de cámaras profesionales Nikon y Canon, además de
                herramientas cómo distintos lentes, flashes, reflectores para
                equipo de iluminación. Alto desempeño en la elaboración de
                composiciones visuales con conocimientos técnicos para conseguir
                la mejor y más agradable imagen. He hecho procesos de sesiones
                fotográficas a personas, fotoproductos para la elaboración de
                publicidad y photobooks.
              </p>
            </div>

            {/* Identidad Gráfica */}
            <div
              id="parrafo7"
              class="skills_text my-2"
              style={{ display: "none" }}
            >
              <h3 className="font-weight-bold text-center">
                Elaboración de Identidad Gráfica
              </h3>
              <p class="descripcion mb-6">
                Poseo conocimientos en el proceso de creacción de una
                identifiación gráfica, de la mano del cliente mediante
                Breathings y entrevistas, para así conseguir generar uno o
                varios elementos que funcionaran como identificadores de una
                marca o empresa, esto para generar una línea gráfica de la mano
                de un libro de marca para futuros diseñadores, incluyedo el
                portafolio, documentos de oficinistas, mockups y demás cosas
                dependiendo de casa caso.
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
