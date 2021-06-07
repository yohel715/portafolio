import React from "react";

import Landing from "./Landing";
import NavBar from "./NavBar";
import About from "./About";
import Skill from "./Skills";
import Proyect from "./Proyects";
import Contact from "./Contact";

import ReactNotification from 'react-notifications-component';


class App extends React.Component {

  
  // fake authentication Promise
  authenticate(){
    return new Promise(resolve => setTimeout(resolve, 2000)) // 2 seconds
  }

  componentDidMount(){
    this.authenticate().then(() => {
      const ele = document.getElementById('loading-screen')
      if(ele){
        // fade out
        ele.classList.add('available')
        setTimeout(() => {
          // remove from DOM
          ele.outerHTML = ''
        }, 2000)
      }
    })
  }

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
