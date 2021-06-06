import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Map from "../img/SVG/map.svg";

const About = () => {
  return (
    <div className="about_content pt-5">
      <div className="container">
        <p>Take a look about me, my hobbies and passions</p>
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
                    I’m from Costa Rica;I was born on July 15th, 2000 in
                    Puntarenas. I was raised and have lived in Orotina, a
                    district of Alajuela, since childhood.
                    <br />
                    <br />
                    When I was a child I developed an incredible love for
                    technology and science, this passed fueled me to become a
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
                  <h1 className="mx-2" >About my knowledge</h1>
                </div>
              </div>

              <div className="card text-white bg-transparent mb-3">
                <div className="about_card_text pt-3 mx-5">
                  <p className="card-text">
                    {" "}
                    I graduated from a bilingual high school in 2017. From that
                    point on, I began my studies into graphic design.
                    <br />
                    <br />
                    Soon after and since 2018, I have been completing my
                    Bachelors Degree in Informátca y Tecnología Multimedia from
                    the Universidad de Costa Rica.{" "}
                  </p>
                </div>
              </div>
            </div>
          </Carousel.Item>

          <Carousel.Item className="py-2">
            <div className="card-group about_card">
              <div className="card text-white bg-transparent mb-3">
                <div className="pt-3 mx-5">
                  <h1 className="mx-2">About my hobbies & passions</h1>
                </div>
              </div>

              <div className="card text-white bg-transparent mb-3">
                <div className="about_card_text pt-3 mx-5">
                  <p className="card-text">
                    {" "}
                    From childhood, I enjoy challenges that test my ingenuity. I
                    thus love runic cubes and puzzles.
                    <br />
                    <br />I am genuinely passionate about problem solving,
                    creating attractive designs and always learning new things
                    everyday.{" "}
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
