import React from "react";

import Landing from "./Landing";
import NavBar from "./NavBar";
import About from "./About";
import Skill from "./Skills";
import Proyect from "./Proyects";
import Contact from "./Contact";

import ReactNotification from 'react-notifications-component';


class App extends React.Component {
  render = () => {
    return (
      <div className="app">
        <ReactNotification />
        <NavBar />
        <section id="landing" className="landing">
          <Landing />
        </section>
        <section id="about" className="about">
          <About />
        </section>
        <section id="skill" className="skill">
          <Skill />
        </section >
        <section id="proyect" className="proyect">
          <Proyect />
        </section>
        <section id="contact" className="contact">
          <Contact />
        </section>
      </div>
    );
  };
}

export default App;
