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
              Developer, UX, UI Designer <br /> & Graphic Designer
            </h2>
          </div>
          <div className="col-sm-6">
            <div className="d-flex justify-content-center mb-2">
              <img src={me} height="400" class="d-inline-block" alt="me" />
            </div>
          </div>
        </div>
        <Button variant="outline-primary" type="link" href="">
          Check my curriculum
        </Button>
      </div>
    </div>
  );
};
export default Landing;
