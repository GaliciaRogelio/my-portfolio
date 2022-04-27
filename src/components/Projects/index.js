import React, { useState } from "react";

function Project() {
  const [projects] = useState([
    {
      title: "What's for Dinner",
      subtitle: "Third Party API Application",
      category: "projects",
      description:
        "An application that will allow the user to get ideas for meals by searching for recipes either by category or keyword.",
      image: "0.gif",
      link: "https://nicopetelo.github.io/whats-for-dinner/",
      github: "https://github.com/GaliciaRogelio/whats-for-dinner",
    },
    {
      title: "The Goodvice Blog",
      subtitle: "Interactive Full-Stack Application",
      category: "projects",
      description:
        "A small scale app, enabling users to get advice from their community on everyday things and allowing them to quickly search by categories or keywords.",
      image: "1.gif",
      link: "https://the-goodvice-blog.herokuapp.com/",
      github: "https://github.com/GaliciaRogelio/the-goodvice-blog",
    },
    {
      title: "Budget Tracker",
      subtitle: "Progresive Web Application (PWA)",
      category: "projects",
      description:
        "This is a budget tracker application that allows offline access and functionality. The user is able to add expenses and deposits to their budget with or without internet connection.",
      image: "2.gif",
      link: "https://rojos-budget-tracker.herokuapp.com/",
      github: "https://github.com/GaliciaRogelio/my-budget-tracker",
    },
    {
      title: "Your City Weather App",
      subtitle: "Third Party API",
      category: "projects",
      description:
        "This is a weather application where users are able to search a city and the app will look through a third party API for that specific city and return results incluiding humidity, wind speed, and UV index",
      image: "3.gif",
      link: "https://galiciarogelio.github.io/your-city-weather/",
      github: "https://github.com/GaliciaRogelio/your-city-weather",
    },
  ]);

  return (
    <section id="projects">
      <h2 id="section-name">My Projects</h2>
      <hr />
      {projects.map((Project, i) => (
        <svg
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
              <img
                src={require(`../../assets/gifs/projects/${Project.image}`).default}
                x="3"
                width="117"
                height="100"
                alt={Project.title}
              />
            </pattern>
          </defs>
          <polygon
            id="hex"
            points="50 1 95 25 95 75 50 99 5 75 5 25"
            fill="url(#img)"
          />
        </svg>
      ))}
    </section>
  );
}

export default Project;
