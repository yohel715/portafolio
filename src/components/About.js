import React from "react";
import avatar from "../img/avatar.png";
import logo from "../img/ylogo_white.png";

const About = () => {
  return (
    <div className="about_content">
      <div class="row">
        <div class="column about_column about_column__left">
          <div className="avatar">
            <img
              src={avatar}
              height="256"
              class="rounded mx-auto d-block mr-2"
              alt="avatar"
            />
          </div>
          <h1 className="about_title font-weight-bold text-center m-2 text-uppercase">
            Acerca
            <br />
            De mí
            <br />
          </h1>
        </div>
        <div class="column about_column">
          <div class="about_info">
            <p class="font-weight-bold m-2">
              <h3 class="font-weight-bold text-center m-3">¿Quién soy?</h3>
              Soy Yohel Ureña Mora, tengo 19 años, soy estudiante de tercer año
              en la carrera de Informática y Tecnología Multimedia en la
              Universidad de Costa Rica (UCR), Sede del Pácifico.
              <br />
              <br />
              Este es mi primer portafolio personal, es un proyecto en el curso
              Interactivas II, en el quinto bloque semestral.<br />
              Crecí y vivo en Orotina, Alajuela, pero por los estudios estoy
              viviendo temporalmente en Esparza, Puntarenas.
              <br />
              <br />
              Soy bilingüe, hablo español como lengua nativa e ingles
              norteaméricano, de este segundo idioma tengo un ingles escrito
              bastante desarrollado y un ingles oral lo suficientmente bueno
              para trasmitir mis ideas correctamente.
              <br />
              <br />
              <h3 class="font-weight-bold text-center m-3">
                Gustos y Pasatiempos
              </h3>
              Cuando me formé académicamente en el colegio a los 13 años me
              matriculé en un curso libre de introducción a Photosop básico, en
              este entonces era el CS6 y fue cuando inicié en el mundillo de la
              manipulación y diseño de imágenes.
              <br />
              Con el tiempo pasó a ser un hobby y a la larga un factor crítico
              al elegir mi carrera en la universidad.
              <br />
              <br />
              Desde pequeño siempre tuve una afición por la tecnología, además,
              los aparatos electrónicos se me daban bien (en más de una ocasión
              descompuse varias cosas) y eso desarrolló en mí un ínteres por la
              informática.
              <br />
              <br />
              <h3 class="font-weight-bold text-center m-3">
                Información Profesional
              </h3>
              Tengo conocimiento desarrollados en dos áreas generales, la
              informática y el contenido multimedia, en cuanto al área de
              informatica me desarrollo con java, javascript y php, además de
              ciertas herramientas como React, Bootstrap, Laravel y Django,
              además de tener conocimientos básicos en redes y comunicación de
              dispotivos (modelo osi y modelo tcp/ip), además poseo conocimientos en
              gestión de Base de Datos con SQL Benchmark y conocimientos básicos
              en seguridad informática.
              <br />
              Mientras tanto en multimedia he utilizado programas de la suite de
              Adobe como Photoshop, Illustrator, Lightroom, Premiere Pro,
              InDesing, Adobe XD y After Effects.
              <br />
              <br />
              Además me desempeño muy bien en el trabajo en equipo, tengo mucha
              capacidad a adaptarte, aceptar nuevos retos y siempre estoy
              dispuesto a aprender algo nuevo.
            </p>
          </div>
          <div className="about_logo">
            <img
              src={logo}
              height="32"
              class="rounded mx-auto d-block mt-5"
              alt="logo"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
