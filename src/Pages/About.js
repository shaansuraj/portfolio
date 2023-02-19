import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Components/Particles/Particle";
import Techstack from "../Components/TechStack/TechStack";

import Toolstack from "../Components/ToolStack/ToolStack";
import laptopImg from "../Assets/about.png";
import AboutCard from "../Components/AboutCard/AboutCard";

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Know Who <strong className="purple">I'M</strong>
            </h1>
            <AboutCard/>
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col>
        </Row>
        <h1 className="project-heading">
          Professional <strong className="purple">Skillset </strong>
        </h1>

        <Techstack />

        <h1 className="project-heading">
          <strong className="purple">Tools</strong> I use
        </h1>
        <Toolstack />
            <div itemscope itemtype='http://schema.org/Person' class='fiverr-seller-widget' style='display: inline-block;'>
     <a itemprop='url' href=https://www.fiverr.com/shaansuraj rel="nofollow" target="_blank" style='display: inline-block;'>
        <div class='fiverr-seller-content' id='fiverr-seller-widget-content-820a8ebf-0b73-4b23-bd4b-eaff148cbb97' itemprop='contentURL' style='display: none;'></div>
        <div id='fiverr-widget-seller-data' style='display: none;'>
            <div itemprop='name' >shaansuraj</div>
            <div itemscope itemtype='http://schema.org/Organization'><span itemprop='name'>Fiverr</span></div>
            <div itemprop='jobtitle'>Seller</div>
            <div itemprop='description'>From the basics to the core, I am a self-taught full-stack web developer with hands-on experience in frontend and backend development and a hardcore programmer with a never-ending thirst to do better. I use the MERN Stack as my tech stack to develop websites and web applications. For building android application, I use Android Studio and Java. I am an AWS Solution Architecture Trainee.
My projects include the following:
1) Clones using MERN Stack: Instagram, Tinder, WhatsApp
2) Real-time Chat Web Application using PHP
3) Portfolio using ReactJS
4) Automation Script for Linkedin Connections
</div>
        </div>
    </a>
</div>

<script id='fiverr-seller-widget-script-820a8ebf-0b73-4b23-bd4b-eaff148cbb97' src='https://widgets.fiverr.com/api/v1/seller/shaansuraj?widget_id=820a8ebf-0b73-4b23-bd4b-eaff148cbb97' data-config='{"category_name":"Programming \u0026 Tech"}' async='true' defer='true'></script>
      </Container>
    </Container>
  );
}

export default About;
