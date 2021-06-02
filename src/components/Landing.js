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
          <div className="col-sm-6 pt-2">
            <div className=" landing_photome d-flex justify-content-center mb-2">
              <img src={me} alt="me" />
            </div>
          </div>
        </div>
        <Button variant="outline-primary" type="link" target="_blank" href="https://documentcloud.adobe.com/link/track?uri=urn:aaid:scds:US:414403fb-c7ae-4072-82a9-fa8d193ee68a">
          Check my curriculum
        </Button>
      </div>
    </div>
  );
};
export default Landing;
