import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import {
  AiOutlineTwitter,
  AiFillInstagram,
  AiFillGithub,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Contact() {
  return (
    <Container fluid className="home-about-section" id="contact">
      <Container>
        <Row>
          <Col md={12} className="home-about-social">
          <br/><br/>
            <h1>Cantactez nous </h1>
            <p>
               Nous somme valables <span className="purple"> 24/7 </span> sur
            </p>
            <ul className="home-about-social-links">

              <li className="social-icons">
                <Link
                  to="https://twitter.com"
                  rel="noopener noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </Link>
              </li>
              <li className="social-icons">
                <Link
                  to="https://www.linkedin.com"
                  rel="noopener noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </Link>
              </li>
              <li className="social-icons">
                <Link
                  to="https://www.instagram.com"
                  rel="noopener noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </Link>
              </li>
              <li className="social-icons">
                <Link
                  to="https://github.com"
                  rel="noopener noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </Link>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Contact;
