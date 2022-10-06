import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCards from "../Components/ProjectCards/ProjectCards";
import Particle from "../Components/Particles/Particle";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <Col md={6} className="project-card">
            <ProjectCards
              imgPath="https://github.com/shaansuraj/Instagram-Clone/blob/main/instaclone.jpg"
              title="Instagram-Clone"
              description="Instagram is the most used social media platform. The features it uses to connect people all around the world is amazing. Check this instagram clone developed by Suraj Sahu using MERN Stack and AWS IAM for security. The features and functions of this clone is comparable to the real one. The features like Reels and Add to story is still under development."              link="https://github.com/shaansuraj/Instagram-Clone"
            />
          </Col>
          <Col md={6} className="project-card">
            <ProjectCards
              imgPath="https://drive.google.com/file/d/1QADlqjaxC3YOFN-OvNvfeC0eoZZ5iGlC/view?usp=sharing"
              title="ChatApp"
              description="ChatApp is a realtime chatting web application where you can send messages to your friends and receive simultaneously. This was developed by Suraj Sahu using Php and Javascript."
              link="https://github.com/shaansuraj/ChatApp"
            />
          </Col>

          <Col md={6} className="project-card">
            <ProjectCards
              imgPath="https://github.com/shaansuraj/Magic-Notes/blob/main/magic-notes.png"
              title="Magic-Notes"
              description="It is a simple wesite where you can add and delete your notes. The notes will be stored in the local storage. Suraj Sahu has developed this website using Javascript and Php"              link="https://github.com/shaansuraj/Magic-Notes"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Projects;
