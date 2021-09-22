import React from "react";
import { projects } from "../Data";

function Projects() {
  return (
    <section id="projects">
      <h2 id="about">My Projects</h2>
      <hr />
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
    </section>
  );
}

export default Projects;
