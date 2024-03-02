import React from "react";
import Typewriter from "typewriter-effect";

function TypeWriter() {
  return (
    <Typewriter
      options={{
        strings: [
          "SEO Expert",
          "Backend Developer",
          "Prompt Engineer",
          "Cloud Enthusiast",
          "4 Tech Stack Developer",
          "CTO at BrandLadder",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default TypeWriter;
