import React from "react";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import logo from "../img/SVG/logo.svg";

import emailjs from "emailjs-com"; //emailjs-component
import { store } from "react-notifications-component"; //react-notifications-component
import "react-notifications-component/dist/theme.css"; //react-notifications-component

const initialState = {
  email: "",
  subject: "",
  name: "",
  message: "",

  emailError: "",
  subjectError: "",
  nameError: "",
  messageError: "",
};

class Contanct extends React.Component {
  state = initialState;

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  validate = () => {
    let nameError = "";
    let subjectError = "";
    let emailError = "";
    let messageError = "";

    if (!this.state.name) {
      nameError = "name cannot be blank";
    }

    if (!this.state.subject) {
      subjectError = "subject cannot be blank";
    }

    if (!this.state.email.includes("@")) {
      emailError = "email cannot be blank";
    }

    if (!this.state.subject) {
      messageError = "message cannot be blank";
    }

    if (nameError || subjectError || emailError || messageError) {
      this.setState({ nameError, subjectError, emailError, messageError });
      return false;
    }

    return true;
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const isValid = this.validate();
    if (isValid) {
      emailjs.sendForm( //emailjs
          "service_7sdf16h", //service_id
          "template_14r718o", //template_id
          event.target,
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

      store.addNotification({ //react-notifications-component
        title: "Email successfully sent!",
        message: "Thank you for writing me, I will contact you soon.",
        type: "success",
        insert: "top",
        container: "top-right",
        animationIn: ["animate__animated", "animate__fadeIn"],
        animationOut: ["animate__animated", "animate__fadeOut"],
        dismiss: {
          duration: 5000,
          onScreen: true,
          showIcon: true,
        },
      });

      // clear form
      this.setState(initialState);
    }
  };

  render() {
    return (
      <div className="container pt-5">
        <h1>Contact Me</h1>
        <p>Let's create something new!</p>

        <div className="row">
          <div className="col-sm-7">
            <h2>Text me</h2>

            <Form className="contact-form" onSubmit={this.handleSubmit}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter your email"
                  name="email"
                  value={this.state.email}
                  onChange={this.handleChange}
                />
                <Form.Text className="text-muted">
                  I'll never share your email with anyone else.
                </Form.Text>
                <p className="from_alert d-flex">{this.state.emailError}</p>
              </Form.Group>
              <Form.Group>
                <Form.Label>Subject</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your subject"
                  name="subject"
                  value={this.state.subject}
                  onChange={this.handleChange}
                />
                <p className="from_alert d-flex">{this.state.subjectError}</p>
              </Form.Group>
              <Form.Group>
                <Form.Label>What's your name?</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your name"
                  name="name"
                  value={this.state.name}
                  onChange={this.handleChange}
                />
                <p className="from_alert d-flex">{this.state.nameError}</p>
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
                  value={this.state.message}
                  onChange={this.handleChange}
                />
                <p className="from_alert d-flex">{this.state.messageError}</p>
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
                  className="iconify"
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
                  className="iconify"
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
                  className="iconify"
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
                  className="iconify"
                  data-icon="ant-design:instagram-filled"
                  data-inline="false"
                  data-width="24"
                  data-height="24"
                ></span>
                <h5 className="font-weight-regular ml-2">yohel.design</h5>
              </a>
              <div className="d-flex py-2">
                <span
                  className="iconify"
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
            className="footer_logo d-inline-block"
            alt="logo"
          />

          <a href="#landing" className="contact_icon">
            <span
              className="iconify"
              data-icon="bi:chevron-up"
              data-inline="false"
              data-width="24"
              data-height="24"
            ></span>
          </a>
        </div>
      </div>
    );
  }
}

export default Contanct;
