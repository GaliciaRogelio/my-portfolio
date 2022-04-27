import React from "react";
import ProfileImg from "../../assets/cover/profile-image.jpeg";

function About() {
  return (
    <section>
      <h2 id="section-name">About Me</h2>
      <hr />
      <div className="about-container">
        <img src={ProfileImg} alt="Portrait" />
        <p>
          Full stack web developer with a coding certificate from UC Berkeley. Born in Mexico City and raised in San Francisco, CA. Currently based in Chicago, IL. 
        </p>
      </div>
    </section>
  );
}

export default About;
