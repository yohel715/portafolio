import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Card from "react-bootstrap/Card";

import matte from "../img/mattepaiting.jpg";
import matte2 from "../img/mattepaiting_elements.jpg";
import retrato from "../img/retrato.jpg";
import edicion1 from "../img/edicion1.jpg";
import edicion2 from "../img/edicion2.jpg";
import lc_logo from "../img/LimonCoral_Logo.jpg";
import lc_area from "../img/LimonCoral_AreaProteccion.jpg";
import lc_reticula from "../img/LimonCoral_Retícula.jpg";
import lc_dorado from "../img/LimonCoral_LogoDoradoFondoNegro.png";
import lc_afiche from "../img/LimonCoral_mockup.png";
import lc_afiche2 from "../img/LimonCoral_mockup02.png";
import landing from "../img/landing.jpeg";

const Projects = () => {
  return (
    <div className="projects_content">
      <h1 class="text-center mb-3 text-uppercase">Trabajos</h1>
      <Carousel interval={null}>
        <Carousel.Item>
          <Card>
            <Carousel interval={null}>
              <Carousel.Item>
                <div class="embed-responsive embed-responsive-16by9">
                  <img
                    alt="Card cap"
                    class="card-image-top embed-responsive-item"
                    src={matte}
                  />
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className="embed-responsive embed-responsive-16by9">
                  <img
                    alt="Card cap"
                    class="card-image-top embed-responsive-item"
                    height="400"
                    src={matte2}
                  />
                </div>
                <div className="carousel-caption d-none d-md-block">
                  <p className="font-weight-bold">
                    Elementos usados para el fotomontaje
                  </p>
                </div>
              </Carousel.Item>
            </Carousel>

            <Card.Body>
              <Card.Title>Matte Painting con Photoshop</Card.Title>
              <Card.Text>
                Fotomontaje con diferentes fotografías, utilizando distintas
                herramientas de Adobe Photoshop.
              </Card.Text>
            </Card.Body>
          </Card>
        </Carousel.Item>

        <Carousel.Item>
          <Card>
            <div class="embed-responsive embed-responsive-16by9">
              <img
                alt="Card cap"
                class="card-image-top embed-responsive-item"
                src={retrato}
              />
            </div>
            <Card.Body>
              <Card.Title>Vectorización de Imagenes</Card.Title>
              <Card.Text>
                Vectorizado de una imagen utilizando herramientas de Adobbe
                Illustrator
              </Card.Text>
            </Card.Body>
          </Card>
        </Carousel.Item>

        <Carousel.Item>
          <Card>
            <div class="embed-responsive embed-responsive-16by9">
              <img
                alt="Card cap"
                class="card-image-top embed-responsive-item"
                src={landing}
              />
            </div>
            <Card.Body>
              <Card.Title>Landing Page con Bootstrap</Card.Title>
              <Card.Text>Landing Page usando React y Bootstrap</Card.Text>
            </Card.Body>
          </Card>
        </Carousel.Item>

        <Carousel.Item>
          <Card>
            <Carousel interval={null}>
              <Carousel.Item>
                <div class="embed-responsive embed-responsive-16by9">
                  <img
                    alt="Card cap"
                    class="card-image-top embed-responsive-item"
                    src={edicion1}
                  />
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className="embed-responsive embed-responsive-16by9">
                  <img
                    alt="Card cap"
                    class="card-image-top embed-responsive-item"
                    height="400"
                    src={edicion2}
                  />
                </div>
              </Carousel.Item>
            </Carousel>

            <Card.Body>
              <Card.Title>Manipulación de Imágenes</Card.Title>
              <Card.Text>
                Retoques de fotografías usando Adobe Photoshop y Adobe Lightroom
              </Card.Text>
            </Card.Body>
          </Card>
        </Carousel.Item>

        <Carousel.Item>
          <Card>
            <div class="embed-responsive embed-responsive-16by9">
              <iframe
                title="video"
                class="card-image-top embed-responsive-item"
                width="560"
                height="315"
                src="https://www.youtube.com/embed/0_DBT3egRBE"
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
            <Card.Body>
              <Card.Title>Edición de Video con Adobe After Effetcs</Card.Title>
              <Card.Text>
                Proyecto de video usando máscaras de recortes con Adobe After
                Effects
              </Card.Text>
            </Card.Body>
          </Card>
        </Carousel.Item>

        <Carousel.Item>
          <Card>
            <Carousel interval={2000}>
              <Carousel.Item>
                <div className="embed-responsive embed-responsive-16by9">
                  <img
                    alt="Card cap"
                    class="card-image-top embed-responsive-item"
                    height="400"
                    src={lc_dorado}
                  />
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div class="embed-responsive embed-responsive-16by9">
                  <img
                    alt="Card cap"
                    class="card-image-top embed-responsive-item"
                    src={lc_logo}
                  />
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className="embed-responsive embed-responsive-16by9">
                  <img
                    alt="Card cap"
                    class="card-image-top embed-responsive-item"
                    height="400"
                    src={lc_area}
                  />
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className="embed-responsive embed-responsive-16by9">
                  <img
                    alt="Card cap"
                    class="card-image-top embed-responsive-item"
                    height="400"
                    src={lc_reticula}
                  />
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className="embed-responsive embed-responsive-16by9">
                  <img
                    alt="Card cap"
                    class="card-image-top embed-responsive-item"
                    height="400"
                    src={lc_afiche}
                  />
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className="embed-responsive embed-responsive-16by9">
                  <img
                    alt="Card cap"
                    class="card-image-top embed-responsive-item"
                    height="400"
                    src={lc_afiche2}
                  />
                </div>
              </Carousel.Item>
            </Carousel>

            <Card.Body>
              <Card.Title>
                Creación de la identidad gráfica Limón Coral
              </Card.Title>
              <Card.Text>
                Limón Coral, un grupo de coro y canto de la UCR necesitaban un
                identificador gráfico.
              </Card.Text>
            </Card.Body>
          </Card>
        </Carousel.Item>

        <Carousel.Item>
          <Card>
            <div class="embed-responsive embed-responsive-16by9">
              <iframe
                title="video"
                class="card-image-top embed-responsive-item"
                width="560"
                height="315"
                src="https://www.youtube.com/embed/7HE9yBvLzV0"
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
            <Card.Body>
              <Card.Title>Video Stop Motion</Card.Title>
              <Card.Text>
                Proyecto de video usando más de 500 fotografías con Adobe
                Premiere
              </Card.Text>
            </Card.Body>
          </Card>
        </Carousel.Item>

        <Carousel.Item>
          <Card>
            <div class="embed-responsive embed-responsive-16by9">
              <iframe
                title="video"
                class="card-image-top embed-responsive-item"
                width="560"
                height="315"
                src="https://www.youtube.com/embed/sAjB48uUVnY"
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
            <Card.Body>
              <Card.Title>Video Stop Motion</Card.Title>
              <Card.Text>
                Proyecto audiovisual con Adobe Premiere y Adobe After Effects
              </Card.Text>
            </Card.Body>
          </Card>
        </Carousel.Item>

        <Carousel.Item>
          <Card>
            <div class="embed-responsive embed-responsive-16by9">
              <iframe
                title="video"
                class="card-image-top embed-responsive-item"
                width="560"
                height="315"
                src="https://www.youtube.com/embed/uU60Or6j8mo"
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
            <Card.Body>
              <Card.Title>Video con Motion Tracking</Card.Title>
              <Card.Text>
                Textos en video con effectos de Motion Tracking hecho con Adobe
                After Effects
              </Card.Text>
            </Card.Body>
          </Card>
        </Carousel.Item>

        <Carousel.Item>
          <Card>
            <div class="embed-responsive embed-responsive-16by9">
              <iframe
                title="video"
                class="card-image-top embed-responsive-item"
                width="560"
                height="315"
                src="https://www.youtube.com/embed/tr_RirQLfEk"
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
            <Card.Body>
              <Card.Title>Juego hecho en Java</Card.Title>
              <Card.Text>
                Proyecto de universidad en el 2018 usando Java en NeatBeans
              </Card.Text>
            </Card.Body>
          </Card>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Projects;
