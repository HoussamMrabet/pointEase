import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import serviceLogo from "../../assets/home/bg-service.svg";


function Services() {
  return (
    <Container fluid className="home-about-section" id="services">
      <Container>
      <Row>
        <Col md={4} className="myAvtar">
          <img
                src={serviceLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
          </Col>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
            Nos  <span className="purple"> Service</span>
            </h1>
            <p className="home-about-body">
             <b className="purple"> Nos services </b> 
             sont conçus pour aider les gestionnaires à gérer efficacement leurs ventes et leurs stocks.
              <br />
              <br />Nous offrons une solution complète de point de vente qui permet aux entreprises de gérer facilement leurs produits, leur stock et leurs ventes,
              <i>
              tout en offrant des <b className="purple"> fonctionnalités avancées  </b>telles que le calcul du total et l'impression de tickets.
              </i>
              <br />
              <br />
              <i>
                <b className="purple"></b> Notre équipe est disponible pour vous aider à chaque étape du processus, que ce soit pour vous conseiller sur le choix des produits ou pour vous aider à configurer votre système de point de vente
                {" "}
                <b className="purple">
                Nous sommes là pour vous aider à optimiser votre entreprise et à améliorer votre expérience de vente.
                </b>
              </i>
            </p>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Services;