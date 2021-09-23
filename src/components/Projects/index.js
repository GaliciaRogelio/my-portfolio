import React from "react";
import { projects } from "../Data";
import TestImg from "../../assets/cover/profile-image.jpeg"

function Projects() {
  return (
    <section id="projects">
      <h2 id="about">My Projects</h2>
      <hr />
      {/* <div className="project-items">
        {projects.map((project) => (
          <a href={project.link} key={project.image}>
            <img alt="gallery" src={project.image} />
            <div>
              <h4>{project.subtitle}</h4>
              <h3>{project.title}</h3>
              <h4>{project.description}</h4>
            </div>
          </a>
        ))}
      </div> */}
      {projects.map((project) => (
      <svg
        viewbox="0 0 100 100"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="img"
            patternUnits="userSpaceOnUse"
            width="300"
            height="300"
          >
            <image
              href={project.link}
              key={project.image}
              x="-25"
              width="150"
              height="100"
            />
          </pattern>
        </defs>
        <polygon
          id="hex"
          points="50 1 95 25 95 75 50 99 5 75 5 25"
          fill="url(#img)"
        />
        <text id="text" font-size="20" x="50" y="50" text-anchor="middle">
          {project.title}
        </text>
      </svg>
      ))}
    </section>
  );
}

export default Projects;
