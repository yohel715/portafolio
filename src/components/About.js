import React from "react";
import Carousel from "react-bootstrap/Carousel";
// import avatar from "../img/avatar.png";
// import logo from "../img/ylogo_white.png";

const About = () => {
  return (
    <div className="about_content pt-5">
      <div className="container">
        <p>Take a look about me, my hobbies and passions</p>
        <Carousel fade interval={null}>
          <Carousel.Item className="d-flex justify-content-center py-5">
            <div className="card-group">

            <div class="card text-white bg-transparent mb-3" style={{ width: '30rem'}}>
              <div class="card-body">
                <h5 class="card-title">Dark card title</h5>
                <p class="card-text">Some quick example text to build on the</p>
              </div>
            </div>
              
            <div class="card text-white bg-transparent mb-3" style={{ width: '30rem'}}>
              <div class="card-body">
                <h5 class="card-title">Dark card title</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
            </div>
              
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
};

export default About;
