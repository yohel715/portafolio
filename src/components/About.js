import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Map from "../img/SVG/map.svg";

const About = () => {
  return (
    <div className="about_content pt-5">
      <div className="container">
        <p>Take a look at me, my hobbies, and passions:</p>
        <Carousel interval={null} className="mx-4">
          <Carousel.Item className="py-2">
            <div className="card-group  about_card">
              <div className="card text-white bg-transparent mb-3">
                <div className="d-flex justify-content-center pt-3 mx-5">
                  <img className="map" src={Map} height="200" alt="map" />
                </div>
              </div>

              <div className="card text-white bg-transparent mb-3">
                <div className="about_card_text pt-3 mx-5">
                  <p className="card-text">
                    {" "}
                    I’m from Costa Rica. On July 15th, 2000, I was born in
                    Puntarenas. I was raised and have lived in Orotina, a
                    district of Alajuela, since childhood.
                    <br />
                    <br />
                    When I was a child, I developed an incredible love for
                    technology and science. This event encouraged me to become a
                    developer and designer.{" "}
                  </p>
                </div>
              </div>
            </div>
          </Carousel.Item>

          <Carousel.Item className="py-2">
            <div className="card-group about_card">
              <div className="card text-white bg-transparent mb-3">
                <div className="pt-3 mx-5">
                  <h1 className="mx-2">About my knowledge</h1>
                </div>
              </div>

              <div className="card text-white bg-transparent mb-3">
                <div className="about_card_text pt-3 mx-5">
                  <p className="card-text">
                    {" "}
                    I am a postgraduate from a bilingual high school. Later on,
                    I started my higher education in graphic design.
                    <br />
                    <br />
                    Since 2018, I have been majoring in Informática y Tecnología
                    Multimedia in the University of Costa Rica (UCR).{" "}
                  </p>
                </div>
              </div>
            </div>
          </Carousel.Item>

          <Carousel.Item className="py-2">
            <div className="card-group about_card">
              <div className="card text-white bg-transparent mb-3">
                <div className="pt-3 mx-5">
                  <h1 className="mx-2">About my hobbies &amp; passions</h1>
                </div>
              </div>

              <div className="card text-white bg-transparent mb-3">
                <div className="about_card_text pt-3 mx-5">
                  <p className="card-text">
                    {" "}
                    Since childhood, I have enjoyed challenges that test my
                    ingenuity; in fact, I love Rubik’s Cubes and puzzles
                    overall.
                    <br />
                    <br />I am genuinely passionate about problem-solving,
                    creating attractive designs, and always learning new things
                    every day.{" "}
                  </p>
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
