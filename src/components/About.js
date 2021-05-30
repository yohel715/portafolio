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
            <div className="card-group">
              <div
                class="card text-white bg-transparent mb-3"
                style={{ height: "17rem" }}
              >
                <div class="card-body d-flex justify-content-center pt-3 mx-5">
                  <img src={Map} alt="map" height="250" class="d-block" />
                </div>
              </div>

              <div
                class="card text-white bg-transparent mb-3"
                style={{ height: "17rem" }}
              >
                <div class="card-body d-flex justify-content-center pt-3 mx-5">
                  <p class="card-text">
                    {" "}
                    I’m from Costa Rica; I was born on july 15 in the 2000 in
                    Puntarenas. Since childhood I've been living in Orotina an
                    Alajuela’s districts.
                    <br />
                    <br />
                    When I was a child I developed an incredible love for
                    technologíes and sciences, that passion led me to to grow as
                    a developer and designer.{" "}
                  </p>
                </div>
              </div>
            </div>
          </Carousel.Item>

          <Carousel.Item className="py-2">
            <div className="card-group">
              <div
                class="card text-white bg-transparent mb-3"
                style={{height: "17rem"}}
              >
                <div class="card-body d-flex justify-content-center pt-3 mx-5">
                  <h1 className="pt-3">About my knowledge</h1>
                </div>
              </div>

              <div
                class="card text-white bg-transparent mb-3"
                style={{height: "17rem"}}
              >
                <div class="card-body d-flex justify-content-center pt-3 mx-5">
                  <p class="card-text">
                    {" "}
                    In 2017 I completed my studies in bachillor at a bilingual
                    high school. Back then I started to create graphic design
                    material empirically learning from videos on internet.
                    <br />
                    <br />
                    Since 2018 I’ve been studying Informática y Tecnología Multimedia
                    major at the Univerdad de Costa Rica.{" "}
                  </p>
                </div>
              </div>
            </div>
          </Carousel.Item>

          <Carousel.Item className="py-2">
            <div className="card-group">
              <div
                class="card text-white bg-transparent mb-3"
                style={{height: "17rem"}}
              >
                <div class="card-body d-flex justify-content-center pt-3 mx-5">
                  <h1 className="pt-3">About my hobbies & passions</h1>
                </div>
              </div>

              <div
                class="card text-white bg-transparent mb-3"
                style={{height: "17rem"}}
              >
                <div class="card-body d-flex justify-content-center pt-3 mx-5">
                  <p class="card-text">
                    {" "}
                    When I was very young the challenges attracted my attention,
                    mainly those that test the ingenuity; Since then I play with
                    rubic cubes and puzzles.
                    <br />
                    <br />
                    I’m also a gamer maybe because I
                    have always enjoyed technology.
                    <br />
                    <br />
                    I consider myself as a
                    genuine passionate about solving situations through
                    attractive designs and I’m constantly looking to learn new
                    things everyday.{" "}
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
