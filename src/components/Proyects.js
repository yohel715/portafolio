import React from "react";
import CardColumns from "react-bootstrap/CardColumns";
import Card from "react-bootstrap/Card";
import Carousel from "react-bootstrap/Carousel";

import sinwa from "../img/sinwa.png";
import ticovid from "../img/ticovid.png";
import ticovidmobile from "../img/ticovidmobile.png";

import magic from "../img/magic.png";
import magic2 from "../img/magic2.png";

import LC_logo from "../img/LimonCoral.png";
import LC_mockup from "../img/lc_mockup.png";
import TRCR_logo from "../img/tuanisridescr.png";
import nr from "../img/nr.png";

import mt from "../img/mattepaiting.jpg";

import diablitos from "../img/diablitos.png";
import diablitos2 from "../img/diablitos2.png";

const Proyects = () => {
  return (
    <div className="proyect container pt-5">
      <h1>Portfolio</h1>

      <ul className="d-flex">
        <li className="tabs px-2 active">All</li>
        <li className="tabs px-2">Branding</li>
        <li className="tabs px-2">Illustrations</li>
        <li className="tabs px-2">Mobile & Web</li>
      </ul>

      <CardColumns>
        <Card bg="dark">
          <Card.Img variant="top" src={sinwa} />
          <Card.Body>
            <Card.Title>Sinwa Tours</Card.Title>
            <Card.Text>
              Currently in development sinwatours.com is a website for the small
              entrepreneur company called Sinwa Tours located in Monteverde; The
              site is being made with WordPress. <br />{" "}
              <a
                target="_blank"
                href="https://www.figma.com/file/RBPRBt2Byf9R0xFvW9eE8D/Sinwa-Wireframes?node-id=0%3A1"
                rel="noopener noreferrer"
              >
                See the figma high fidelity wireframes here
              </a>
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">
              <span
                class="iconify mx-1"
                data-icon="simple-icons:figma"
                data-inline="false"
                data-width="24"
                data-height="24"
              ></span>
              <span
                class="iconify mx-1"
                data-icon="cib:wordpress"
                data-inline="false"
                data-width="24"
                data-height="24"
              ></span>
              <span
                class="iconify mx-1"
                data-icon="cib:php"
                data-inline="false"
                data-width="24"
                data-height="24"
              ></span>
              <span
                class="iconify mx-1"
                data-icon="ion:logo-css3"
                data-inline="false"
                data-width="24"
                data-height="24"
              ></span>
            </small>
          </Card.Footer>
        </Card>
        <Card bg="dark">
          <Carousel>
            <Carousel.Item>
              <Card.Img variant="top" src={magic2} />
            </Carousel.Item>
            <Carousel.Item>
              <Card.Img variant="top" src={magic} />
            </Carousel.Item>
          </Carousel>
          <Card.Body>
            <Card.Title>Magic The Gathering</Card.Title>
            <Card.Text>
              Prototype application, consumes the Magic: the gathering API.{" "}
              <br />
              <a
                target="_blank"
                href="https://www.figma.com/proto/6PcILCUMO2HzQM8dch4m1z/wireframes_app_moviles?node-id=1%3A6&scaling=scale-down"
                rel="noopener noreferrer"
              >
                See the figma prototype here
              </a>
              <br />
              <a
                target="_blank"
                href="https://github.com/yohel715/Magic-The-Gathering-API"
                rel="noopener noreferrer"
              >
                See repository on github here
              </a>
              <br />
              <a
                target="_blank"
                href="https://docs.magicthegathering.io/"
                rel="noopener noreferrer"
              >
                See the API documentation
              </a>
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">
              <span
                class="iconify mx-1"
                data-icon="akar-icons:figma-fill"
                data-inline="false"
                data-width="24"
                data-height="24"
              ></span>
              <span
                class="iconify mx-1"
                data-icon="cib:javascript"
                data-inline="false"
                data-width="24"
                data-height="24"
              ></span>
              <span
                class="iconify mx-1"
                data-icon="cib:expo"
                data-inline="false"
                data-width="24"
                data-height="24"
              ></span>
            </small>
          </Card.Footer>
        </Card>
        <Card bg="dark">
          <Card.Img variant="top" src={mt} />
          <Card.Body>
            <Card.Title>Photo montage</Card.Title>
            <Card.Text>
              A fantasy photo montage with bitmaps elements, using the technique
              mattepaiting.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">
              <span
                class="iconify mx-1"
                data-icon="simple-icons:adobephotoshop"
                data-inline="false"
                data-width="24"
                data-height="24"
              ></span>
            </small>
          </Card.Footer>
        </Card>
        <Card bg="dark">
          <Card.Img variant="top" src={ticovid} />
          <Card.Body>
            <Card.Title>Ticovid APP Wireframes</Card.Title>
            <Card.Text>
              Developed in conjunction with other classmates as a functional
              application to learn about the sars cov 2 virus situation in Costa
              Rica.
              <br />{" "}
              <a
                target="_blank"
                href="https://www.figma.com/file/d9veCWr9MQ6ieo6zd2qkEZ/Wireframes-IOS"
                rel="noopener noreferrer"
              >
                See the figma high fidelity wireframes here
              </a>
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">
              <span
                class="iconify mx-1"
                data-icon="simple-icons:figma"
                data-inline="false"
                data-width="24"
                data-height="24"
              ></span>
              <span
                class="iconify"
                data-icon="mdi:android-studio"
                data-inline="false"
                data-width="24"
                data-height="24"
              ></span>
              <span
                class="iconify"
                data-icon="cib:java"
                data-inline="false"
                data-width="24"
                data-height="24"
              ></span>
            </small>
          </Card.Footer>
        </Card>
        <Card bg="dark">
          <Card.Img variant="top" src={TRCR_logo} />
          <Card.Body>
            <Card.Title>Tuanis Rides CR</Card.Title>
            <Card.Text>
              Logo for an entrepreneur company called Tuanis Rides CR
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">
              <span
                class="iconify mx-1"
                data-icon="simple-icons:adobeillustrator"
                data-inline="false"
                data-width="24"
                data-height="24"
              ></span>
            </small>
          </Card.Footer>
        </Card>
        <Card bg="dark">
          <Card.Img variant="top" src={nr} />
          <Card.Body>
            <Card.Title>Night Runner</Card.Title>
            <Card.Text>Textured lettering</Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">
              <span
                class="iconify mx-1"
                data-icon="simple-icons:adobeillustrator"
                data-inline="false"
                data-width="24"
                data-height="24"
              ></span>
            </small>
          </Card.Footer>
        </Card>
        <Card bg="dark">
          <Card.Img variant="top" src={LC_logo} />
          <Card.Body>
            <Card.Title>Limon Coral Logo</Card.Title>
            <Card.Text>
              Identifier for corum "Limón Coral", a corum from the Universidad
              de Costa Rica, Sede del Atlántico in Limón, Costa Rica.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">
              <span
                class="iconify mx-1"
                data-icon="simple-icons:adobeillustrator"
                data-inline="false"
                data-width="24"
                data-height="24"
              ></span>
            </small>
          </Card.Footer>
        </Card>
        <Card bg="dark">
          <Card.Img variant="top" src={ticovidmobile} />
          <Card.Body>
            <Card.Title>Ticovid APP Prototype</Card.Title>
            <Card.Text>
              Fully functional prototype. <br />
              Mobile app to know about the sars cov 2 virus situation in Costa
              Rica.
              <br />{" "}
              <a
                target="_blank"
                href="https://www.figma.com/proto/d9veCWr9MQ6ieo6zd2qkEZ/Wireframes-IOS?scaling=scale-down&page-id=0%3A1&node-id=2%3A5"
                rel="noopener noreferrer"
              >
                See the figma prototype here
              </a>
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">
              <span
                class="iconify mx-1"
                data-icon="simple-icons:figma"
                data-inline="false"
                data-width="24"
                data-height="24"
              ></span>
              <span
                class="iconify"
                data-icon="mdi:android-studio"
                data-inline="false"
                data-width="24"
                data-height="24"
              ></span>
              <span
                class="iconify"
                data-icon="cib:java"
                data-inline="false"
                data-width="24"
                data-height="24"
              ></span>
            </small>
          </Card.Footer>
        </Card>
        <Card bg="dark">
          <Card.Img variant="top" src={LC_mockup} />
          <Card.Body>
            <Card.Title>Limon Coral Mockup</Card.Title>
            <Card.Text></Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">
              <span
                class="iconify mx-1"
                data-icon="simple-icons:adobephotoshop"
                data-inline="false"
                data-width="24"
                data-height="24"
              ></span>
            </small>
          </Card.Footer>
        </Card>
        <Card bg="dark">
          <Carousel>
            <Carousel.Item>
              <Card.Img variant="top" src={diablitos} />
            </Carousel.Item>
            <Carousel.Item>
              <Card.Img variant="top" src={diablitos2} />
            </Carousel.Item>
          </Carousel>
          <Card.Body>
            <Card.Title>The dance of the little devils</Card.Title>
            <Card.Text>
              Photomontage using aboriginal masks from Costa Rica
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">
              <span
                class="iconify mx-1"
                data-icon="simple-icons:adobephotoshop"
                data-inline="false"
                data-width="24"
                data-height="24"
              ></span>
            </small>
          </Card.Footer>
        </Card>
      </CardColumns>
    </div>
  );
};

export default Proyects;
