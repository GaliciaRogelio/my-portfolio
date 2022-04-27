import React from "react";
import { skills } from "../../utils/helpers";

function Skills() {
  return (
    <section id="skills">
      <h2 id="section-name">Skills</h2>
      <hr />
      {
        <div className="container">
          {(skills).map((skill) => (
            <div key={skill}>
              <div>
                <span className="skills-list">
                  {skill}
                </span>
              </div>
            </div>
          ))}
      </div> }
    </section>
  );
}

export default Skills;
