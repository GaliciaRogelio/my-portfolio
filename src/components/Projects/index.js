import React from "react";
import { projects } from "../Data";

function Projects() {
  return (
    <section id="projects">
      <div>
        <div>
          <h2 id="about">
            My Projects
          </h2>
          <hr />
        </div>
        <div>
          {projects.map((project) => (
            <a
              href={project.link}
              key={project.image}
            >
              <div>
                <img
                  alt="gallery"
                  src={project.image}
                />
                <div>
                  <h4>
                    {project.subtitle}
                  </h4>
                  <h3>
                    {project.title}
                  </h3>
                  <p>{project.description}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
