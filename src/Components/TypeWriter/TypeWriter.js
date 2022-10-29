import React from "react";
import Typewriter from "typewriter-effect";

function TypeWriter() {
  return (
    <Typewriter
      options={{
        strings: [
          "Blogger at lostpioneer.co",
          "MERN Stack Developer",
          "AWS Cloud Practioner Trainee",
          "CEO at The Homifiers",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default TypeWriter;
