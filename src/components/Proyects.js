import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Card from 'react-bootstrap/Card'

import img from "../img/mattepaiting.jpg";
import img2 from "../img/contact_wallpaper.jpg";

const Projects = () => {
  return (
    <div className="projects_content">
      <Carousel>
        <Carousel.Item>
          <Card>
            <img className="card-img p-1" src={img} alt=""/>
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </Carousel.Item>
        <Carousel.Item>
        <Card>
            <Card.Img variant="top p-1" src={img2} />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </Carousel.Item>
        <Carousel.Item>
        <Card>
        <img className="card-img p-1" src={img} alt=""/>
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Projects;
