import React from "react";
import Typewriter from "typewriter-effect";

function TypeWriter() {
  return (
    <Typewriter
      options={{
        strings: [
          "SEO Expert",
          "WordPress Developer",
          "Prompt Engineer",
          "Automation Engineer",
          "4 Tech Stack Developer",
          "AWS, Azure, GCP Cloud Practioner Trainee",
          "Founder, and CEO at ProGeeks",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default TypeWriter;
