import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import "./loginform.css";

function Signup() {
  return (
    <div>
    <Container fluid className="about-section">
      <Particle />
       <Container>
        <Row style={{ justifyContent: "center", padding: "15px" }}>
          

     {/* form */}
          <Col
            md={5}
            style={{ paddingTop: "10px", paddingBottom: "50px" }}
            className=""
          > 

          <div class="container">
        <div class="card">
            <a class="singup">Sign Up</a>
            <div class="inputBox1">
                <input type="text" required="required" />
                <span class="user">Email</span>
            </div>

            <div class="inputBox">
                <input type="text" required="required" />
                <span>Username</span>
            </div>

            <div class="inputBox">
                <input type="password" required="required" />
                <span>Password</span>
            </div>

            <button class="enter">Enter</button>

        </div>
    </div>
          </Col>
          
          {/* opennanior */}
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "15px",
              paddingBottom: "50px",
            }}
          >
            <img
              src={ggggg}
              alt="open door pic"
              className="img-fluid"
              style={{ maxHeight: "450px" }}
            />
          </Col>

        </Row>
      </Container>
     </Container>
    </div>
  );
}

export default Signup;