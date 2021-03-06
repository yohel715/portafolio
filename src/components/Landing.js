import React from "react";
import me from "../img/me.png";
import Button from "react-bootstrap/Button";

const Landing = () => {
  return (
    <div className="landing_content pt-5" id="landing">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-sm-6">
            <h2 className="getting_up">Hi! I’m</h2>
            <h1 className="title">Yohel Ureña Mora</h1>
            <h2 className="getting_down">
              Developer, UX, UI Designer <br /> &amp; Graphic Designer
            </h2>
          </div>
          <div className="col-sm-6 pt-2">
            <div className="d-flex justify-content-center mb-2">
              <img src={me} height="400" alt="me" />
            </div>
          </div>
        </div>
        <div className="curriculum pt-2">
          <Button
            className="curriculum"
            variant="outline-primary"
            type="link"
            target="_blank"
            href="https://documentcloud.adobe.com/link/track?uri=urn:aaid:scds:US:00be7148-9fb8-4722-a3f9-c2cf02092c3b"
          >
            Check my curriculum
          </Button>
        </div>
      </div>
    </div>
  );
};
export default Landing;
