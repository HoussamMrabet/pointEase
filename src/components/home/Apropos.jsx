import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import aboutLogo from "../../assets/home/bg-home.svg";


function Apropos() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
            À propos de<span className="purple">   nous</span> 
            </h1>
            <p className="home-about-body">
            Notre entreprise a été créée avec une mission claire : aider les entreprises à gérer leurs ventes et leurs stocks de manière plus efficace. Depuis lors, nous avons travaillé avec des centaines de clients pour leur fournir les outils dont ils ont besoin pour réussir.
              <br />
              <br />
              Notre équipe est composée de professionnels expérimentés dans les domaines de la vente au détail, de la gestion des stocks et du développement de logiciels. Nous travaillons dur pour fournir des produits de qualité supérieure à nos clients et nous sommes fiers de notre engagement envers le service client,Notre objectif est de rendre votre expérience de point de vente
              <i>
                <b className="purple"> aussi efficace et conviviale que possible </b>
              </i>
              <br />
              <br />
              <b className="purple">Nous </b> 
              sommes convaincus que notre expertise et notre engagement envers nos clients nous permettent de fournir les meilleures solutions de point de vente disponibles sur le marché.<br/><br/><br/><br/>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
          <img
                src={aboutLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
          </Col>
          
        </Row>
      </Container>
    </Container>

  );
}
export default Apropos;
