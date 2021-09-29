import React from "react";

function Projects(props) {
  const { categories = [], setCurrentCategory, currentCategory } = props;

  return (
    <section id="projects">
      <h2 id="about">My Projects</h2>
      <hr />
      {categories.map((category) => (
        <svg
          className={`mx-1 ${currentCategory.image === category.image}`}
          key={category.image}
          viewBox="0 0 100 100"
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
              <image href={category.image} x="5" width="90" height="100" />
            </pattern>
          </defs>
          <polygon
            id="hex"
            points="50 1 95 25 95 75 50 99 5 75 5 25"
            fill="url(#img)"
          />
          <text id="text" fontSize="12" x="50" y="50" textAnchor="middle">
            Show more...
          </text>
          <span
            onClick={() => {
              setCurrentCategory(category);
            }}
          ></span>
        </svg>
      ))}
    </section>
  );
}

export default Projects;
