import React from "react";
import ProfileImg from "../../assets/cover/profile-image.jpeg";

function About() {
  return (
    <section>
      <h2 id="about">ABOUT ME</h2>
      <hr />
        <img src={ProfileImg} alt="Portrait" />
        <p>
          Full stack web developer with a coding certificate from UC Berkeley, Currently working on a mechanical engineering degree with a minor in computer science. 
        </p>
    </section>
  );
}

export default About;
