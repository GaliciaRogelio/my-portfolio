import React from "react";
import { skills } from "../../utils/helpers";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiMysql,
  SiNodeDotJs,
  SiGraphql,
  SiMongodb,
} from "react-icons/si";

function Skills() {
  return (
    <section id="skills">
      <h2 id="about">SKILLS</h2>
      <hr />
      {/* <ul className="skills-list">
        <li className="skill-item">
          <SiHtml5 /> HTML5
        </li>
        <li className="skill-item">
          <SiCss3 /> CSS3
        </li>
        <li className="skill-item">
          <SiJavascript /> JavaScript
        </li>
        <li className="skill-item">
          <SiReact /> React
        </li>
        <li className="skill-item">
          <SiMysql /> MySQL
        </li>
        <li className="skill-item">
          <SiNodeDotJs /> Node
        </li>
        <li className="skill-item">
          <SiGraphql /> GraphQL
        </li>
        <li className="skill-item">
          <SiMongodb /> MongoDB
        </li> */}
      {/* </ul> */}

      {<div>
        <div>
          {/* <h2 id="about">
            Skills &amp; Technologies
          </h2> */}
          {/* <hr /> */}
        </div>
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
        </div>
      </div> }
    </section>
  );
}

export default Skills;
