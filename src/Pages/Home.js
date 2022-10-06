import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../Assets/home-main.svg";


import Particle from "../Components/Particles/Particle";
import SelfIntro from "../Components/SelfIntro/SelfIntro";
import TypeWriter from "../Components/TypeWriter/TypeWriter";

function Home() {
  return (
    <section >
      <Container fluid className="home-section" id="home">
        <Particle />
       
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There! <span className="wave" role="img" aria-labelledby="wave">👋🏻</span>
              </h1>

              <h1 className="heading-name ">
                I'M
                <strong className="main-name br"> Suraj Sahu</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <TypeWriter />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img src={homeLogo} alt="home pic" className="img-fluid" />
            </Col>
          </Row>
        </Container>    
      </Container>
      <SelfIntro/>
      
    </section>
  );
}

export default Home;
