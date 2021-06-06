import React from "react";
import emailjs from "emailjs-com";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import logo from "../img/SVG/logo.svg";

const Contanct = () => {
  
  function sendEmail(e) { //EmailJS envía el formularioo
    e.preventDefault();

    emailjs
      .sendForm(
        "service_7sdf16h", //service_id
        "template_14r718o", //template_id
        e.target,
        "user_IA86SbDUjhLZNfcLSCt8p" //user_id
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }
  
  return (
    <div className="container pt-5">
      <h1>Contact Me</h1>
      <p>Let's create something new!</p>

      <div className="row">
        <div className="col-sm-7">
          <h2>Text me</h2>

          
          <Form className="contact-form" onSubmit={sendEmail}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter your email" name="email"/>
              <Form.Text className="text-muted">
                I'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>
            <Form.Group>
              <Form.Label>Subject</Form.Label>
              <Form.Control type="text" placeholder="Enter your subject" name="subject"/>
            </Form.Group>
            <Form.Group>
              <Form.Label>What's your name?</Form.Label>
              <Form.Control type="text" placeholder="Enter your name" name="name"/>
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Type here your message</Form.Label>
              <Form.Control
                as="textarea"
                rows={4}
                placeholder="Enter your message"
                name="message"
              />
            </Form.Group>
            <Button variant="outline-primary  px-5 mb-4" type="submit"> 
              Send
            </Button>
          </Form>
        </div>
        <div className="col-sm-5">
          <div>
            <h2>My social networks</h2>
            <a
              className="d-flex py-2"
              target="_blank"
              href="mailto:yohel715@gmail.com"
              rel="noopener noreferrer"
            >
              <span
                class="iconify"
                data-icon="dashicons:email-alt"
                data-inline="false"
                data-width="24"
                data-height="24"
              ></span>
              <h5 className="font-weight-regular ml-2">yohel715@gmail.com</h5>
            </a>
            <a
              className="d-flex py-2"
              target="_blank"
              href="https://www.linkedin.com/in/yohel-ure%C3%B1a-mora-b8011b191/"
              rel="noopener noreferrer"
            >
              <span
                class="iconify"
                data-icon="akar-icons:linkedin-fill"
                data-inline="false"
                data-width="24"
                data-height="24"
              ></span>
              <h5 className="font-weight-regular ml-2">Yohel Ureña Mora</h5>
            </a>
            <a
              className="d-flex py-2"
              target="_blank"
              href="https://github.com/yohel715"
              rel="noopener noreferrer"
            >
              <span
                class="iconify"
                data-icon="ant-design:github"
                data-inline="false"
                data-width="24"
                data-height="24"
              ></span>
              <h5 className="font-weight-regular ml-2">yohel715</h5>
            </a>
            <a
              className="d-flex py-2"
              target="_blank"
              href="https://instagram.com/yohel.design"
              rel="noopener noreferrer"
            >
              <span
                class="iconify"
                data-icon="ant-design:instagram-filled"
                data-inline="false"
                data-width="24"
                data-height="24"
              ></span>
              <h5 className="font-weight-regular ml-2">yohel.design</h5>
            </a>
            <div className="d-flex py-2">
              <span
                class="iconify"
                data-icon="bi:phone-fill"
                data-inline="false"
                data-width="24"
                data-height="24"
              ></span>
              <h5 className="font-weight-regular ml-2">+506 7013-6924</h5>
            </div>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-between">
        <p className="caption">
          © yohelurena.com <br /> Alajuela, Costa Rica <br /> 2021
        </p>

        <img
          src={logo}
          height="30"
          class="footer_logo d-inline-block"
          alt="logo"
        />

        <a href="#landing" className="contact_icon">
          <span
            class="iconify"
            data-icon="bi:chevron-up"
            data-inline="false"
            data-width="24"
            data-height="24"
          ></span>
        </a>
      </div>
    </div>
  );
};

export default Contanct;
