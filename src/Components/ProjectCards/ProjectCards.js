import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { BiLinkExternal } from "react-icons/bi";
import "./projectcards.css"

function ProjectCards({imgPath,title,description,link}) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {description}
        </Card.Text>
        <Button variant="primary" href={link} target="_blank">
          <BiLinkExternal /> &nbsp;
        </Button>
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;