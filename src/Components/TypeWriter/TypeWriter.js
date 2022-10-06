import React from "react";
import Typewriter from "typewriter-effect";

function TypeWriter() {
  return (
    <Typewriter
      options={{
        strings: [
          "Full-Stack Developer",
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