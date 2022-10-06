import React from "react";
import Card from "react-bootstrap/Card";


function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, My Self <span className="purple">Suraj Sahu </span>
            I am a 2nd Year BTech Student from <span className="purple"> Bhubaneswar, India.</span>
            <br />
            
            <br />I am pursuing my Bachelor's degree in Computer Science and Engineering from Institute of Technical Education and Research <br /> <br />
           <br />
            
            ⚡ I am a MERN Stack Developer with hands-on experience in Cloud Computing with AWS. I have knowledge of DSA, OS, ML and Automation.
            <br />
           <br />
            <br />
            ⚡ Apart from this, I am a AWS Cloud Practiner Trainee and have done DevOPs with AWS.
 
          </p>
          
              </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;