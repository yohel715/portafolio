import React from "react";

import Landing from "./Landing";
import NavBar from "./NavBar";
import About from "./About";
import Skills from "./Skills";
// import Projects from "./Proyects";
// import Contact from "./Contact";


class App extends React.Component {
  render = () => {
    return (
      <div class="app">
        <NavBar />
        <section id="landing" className="landing">
          <Landing />
        </section>
        <section id="about" className="about">
          <About />
        </section>
        <section id="skills" className="skills">
          <Skills />
        </section >
        {/* <section id="projects" className="projects">
          <Projects />
        </section>
          <section id="contact" className="contact">
            <Contact />
          </section> */}
      </div>
    );
  };
}

export default App;
