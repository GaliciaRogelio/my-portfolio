import React from "react";
import ProfileImg from "../../assets/cover/profile-image.jpeg";

function About() {
  return (
    <section className="container">
      <h2 id="about">ABOUT ME</h2>
      <hr />
        <img src={ProfileImg} alt="Portrait" />
        <p>
          Full stack web developer with a coding certificate from UC Berkeley. Born in Mexico City and raised in San Francisco, CA. Currently based in Chicago, IL. 
        </p>
    </section>
  );
}

export default About;
