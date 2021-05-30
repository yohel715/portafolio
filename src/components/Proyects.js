import React from "react";

const Projects = () => {
  return (
    <div className="proyect container pt-5">
      <h1>Portfolio</h1>

      <ul className="d-flex">
        <li className="px-2 active">All</li>
        <li className="px-2">Branding</li>
        <li className="px-2">Illustrations</li>
        <li className="px-2">Mobile & Web</li>
      </ul>

      {/* https://react-bootstrap.netlify.app/components/list-group/#tabbed-interfaces */}
      {/* https://getbootstrap.com/docs/4.0/components/list-group/#javascript-behavior */}
    </div>
  );
};

export default Projects;
