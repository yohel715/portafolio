import React from "react";

const Skills = () => {
  return (
    <div className="skills container pt-5">
      <div className="row align-items-start">
        <div className="col-sm-6">
          <h1 className="text-center">Software Development</h1>
          <p>
            Management of different programming languages ​​such as Java,
            Javascript, PHP and Android Studio. In addition to uses of different
            frameworks such as React, Laravel, Bootstrap, SASS.
            <br /> <br />
            Besides the uses of CMS including WordPress and Drupal; Tools for
            control version with GitHub and dependency manager such as Composer,
            NPM and Node.js
          </p>

          {/* contenedor iconos */}
          <div className="d-flex">
            {/**/}
            <div className="d-flex px-2">
              <span
                class="iconify"
                data-icon="cib:javascript"
                data-inline="false"
                data-width="24"
                data-height="24"
              ></span>
              <p className="font-weight-bold ml-1">JavaScript</p>
            </div>
            {/**/}
            <div className="d-flex px-2">
              <span
                class="iconify"
                data-icon="cib:php"
                data-inline="false"
                data-width="24"
                data-height="24"
              ></span>
              <p className="font-weight-bold ml-1">PHP</p>
            </div>
            {/**/}
            <div className="d-flex px-2">
              <span
                class="iconify"
                data-icon="cib:html5"
                data-inline="false"
                data-width="24"
                data-height="24"
              ></span>
              <p className="font-weight-bold ml-1">HTML 5</p>
            </div>
            {/**/}
            <div className="d-flex px-2">
              <span
                class="iconify"
                data-icon="mdi:android-studio"
                data-inline="false"
                data-width="24"
                data-height="24"
              ></span>
              <p className="font-weight-bold ml-1">Android Studio</p>
            </div>
          </div>
          {/* contenedor iconos segunda linea*/}
          <div className="d-flex">
            {/**/}
            <div className="d-flex px-2">
              <span
                class="iconify"
                data-icon="simple-icons:react"
                data-inline="false"
                data-width="24"
                data-height="24"
              ></span>
              <p className="font-weight-bold ml-1">React Native</p>
            </div>
            {/**/}
            <div className="d-flex px-2">
              <span
                class="iconify"
                data-icon="cib:bootstrap"
                data-inline="false"
                data-width="24"
                data-height="24"
              ></span>
              <p className="font-weight-bold ml-1">Bootstrap</p>
            </div>
            {/**/}
            <div className="d-flex px-2">
              <span
                class="iconify"
                data-icon="cib:sass"
                data-inline="false"
                data-width="24"
                data-height="24"
              ></span>
              <p className="font-weight-bold ml-1">SASS</p>
            </div>
            {/**/}
            <div className="d-flex px-2">
              <span
                class="iconify"
                data-icon="cib:laravel"
                data-inline="false"
                data-width="24"
                data-height="24"
              ></span>
              <p className="font-weight-bold ml-1">Laravel</p>
            </div>
          </div>
          {/* contenedor de iconos tercera linea */}
          <div className="d-flex">
            {/**/}
            <div className="d-flex px-2">
              <span
                class="iconify"
                data-icon="cib:wordpress"
                data-inline="false"
                data-width="24"
                data-height="24"
              ></span>
              <p className="font-weight-bold ml-1">WordPress</p>
            </div>
            {/**/}
            <div className="d-flex px-2">
              <span
                class="iconify"
                data-icon="simple-icons:drupal"
                data-inline="false"
                data-width="24"
                data-height="24"
              ></span>
              <p className="font-weight-bold ml-1">Drupal</p>
            </div>
            {/**/}
            <div className="d-flex px-2">
              <span
                class="iconify"
                data-icon="cib:github"
                data-inline="false"
                data-width="24"
                data-height="24"
              ></span>
              <p className="font-weight-bold ml-1">Git Hub</p>
              {/**/}
              <div className="d-flex px-2">
                <span
                  class="iconify"
                  data-icon="file-icons:composer"
                  data-inline="false"
                  data-width="24"
                  data-height="24"
                ></span>
                <p className="font-weight-bold ml-1">Composer</p>
              </div>
            </div>
          </div>
          {/*Contenedor iconoso tercera linea */}
          <div className="d-flex">
            {/**/}
            <div className="d-flex px-2">
              <span
                class="iconify"
                data-icon="file-icons:npm"
                data-inline="false"
                data-width="24"
                data-height="24"
              ></span>
              <p className="font-weight-bold ml-1">NPM</p>
            </div>
            {/**/}
            <div className="d-flex px-2">
              <span
                class="iconify"
                data-icon="teenyicons:nodejs-solid"
                data-inline="false"
                data-width="24"
                data-height="24"
              ></span>
              <p className="font-weight-bold ml-1">Node.js</p>
            </div>
          </div>
        </div>

        <div className="col-sm-6">
          <h1 className="text-center mx-5">Design & Multimedia</h1>
          <p>
            Elaboration of identity and vector elements such as branding,
            various components of motion graphics, as well as the construction
            of visual material for web development and prototyping.
          </p>
          {/* contenedor iconos */}
          <div className="d-flex">
            {/**/}
            <div className="d-flex px-2">
              <span
                class="iconify"
                data-icon="akar-icons:figma-fill"
                data-inline="false"
                data-width="24"
                data-height="24"
              ></span>
              <p className="font-weight-bold ml-1">Figma</p>
            </div>
            {/**/}
            <div className="d-flex px-2">
              <span
                class="iconify"
                data-icon="simple-icons:adobeillustrator"
                data-inline="false"
                data-width="24"
                data-height="24"
              ></span>
              <p className="font-weight-bold ml-1">Illustrator</p>
            </div>
            {/**/}
            <div className="d-flex px-2">
              <span
                class="iconify"
                data-icon="simple-icons:adobephotoshop"
                data-inline="false"
                data-width="24"
                data-height="24"
              ></span>
              <p className="font-weight-bold ml-1">Photoshop</p>
            </div>
            {/**/}
            <div className="d-flex px-2">
              <span
                class="iconify"
                data-icon="simple-icons:adobeindesign"
                data-inline="false"
                data-width="24"
                data-height="24"
              ></span>
              <p className="font-weight-bold ml-1">InDesign</p>
            </div>
          </div>
          {/* contenedor iconos segunda linea*/}
          <div className="d-flex">
            {/**/}
            <div className="d-flex px-2">
              <span
                class="iconify"
                data-icon="simple-icons:adobeaftereffects"
                data-inline="false"
                data-width="24"
                data-height="24"
              ></span>
              <p className="font-weight-bold ml-1">After Effects</p>
            </div>
            {/**/}
            <div className="d-flex px-2">
              <span
                class="iconify"
                data-icon="simple-icons:adobepremierepro"
                data-inline="false"
                data-width="24"
                data-height="24"
              ></span>
              <p className="font-weight-bold ml-1">Premiere Pro</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
