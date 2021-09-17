import React from "react";
import { skills } from "../Data";
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
      <ul className="skills-list">
        <li>
          <SiHtml5 /> HTML5
        </li>
        <li>
          <SiCss3 /> CSS3
        </li>
        <li>
          <SiJavascript /> JavaScript
        </li>
        <li>
          <SiReact /> React
        </li>
        <li>
          <SiMysql /> MySQL
        </li>
        <li>
          <SiNodeDotJs /> Node
        </li>
        <li>
          <SiGraphql /> GraphQL
        </li>
        <li>
          <SiMongodb /> MongoDB
        </li>
      </ul>

      <div>
        <div>
          <h2 id="about">
            Skills &amp; Technologies
          </h2>
          <hr />
        </div>
        <div >
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
      </div>
    </section>
  );
}

export default Skills;
