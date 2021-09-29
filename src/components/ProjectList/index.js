import React, { useState } from "react";
import Modal from "../Modal";

const ProjectList = ({ category }) => {
  const [currentProject, setCurrentProject] = useState();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [projects] = useState([
    {
      title: "What's for Dinner",
      subtitle: "Third Party API Application",
      description:
        "An application that will allow the user to get ideas for meals by searching for recipes either by category or keyword.",
      image: "../../assets/gifs/projects/0.gif",
      link: "https://nicopetelo.github.io/whats-for-dinner/",
      github: "https://github.com/GaliciaRogelio/whats-for-dinner",
    },
    {
      title: "The Goodvice Blog",
      subtitle: "Interactive Full-Stack Application",
      description:
        "A small scale app, enabling users to get advice from their community on everyday things and allowing them to quickly search by categories or keywords.",
      image: "../assets/gifs/projects/1.gif",
      link: "https://the-goodvice-blog.herokuapp.com/",
      github: "https://github.com/GaliciaRogelio/the-goodvice-blog",
    },
    {
      title: "Budget Tracker",
      subtitle: "Progresive Web Application (PWA)",
      description:
        "This is a budget tracker application that allows offline access and functionality. The user is able to add expenses and deposits to their budget with or without internet connection.",
      image: "../assets/gifs/projects/2.gif",
      link: "https://rojos-budget-tracker.herokuapp.com/",
      github: "https://github.com/GaliciaRogelio/my-budget-tracker",
    },
    {
      title: "Your City Weather App",
      subtitle: "Third Party API",
      description:
        "This is a weather application where users are able to search a city and the app will look through a third party API for that specific city and return results incluiding humidity, wind speed, and UV index",
      image: "../assets/gifs/projects/3.gif",
      link: "https://galiciarogelio.github.io/your-city-weather/",
      github: "https://github.com/GaliciaRogelio/your-city-weather",
    },
  ]);

  const currentProjects = projects.filter(
    (project) => project.category === category
  );
  const toggleModal = (gif, i) => {
    // current gif
    setCurrentProject({ ...gif, index: i });
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div>
      {isModalOpen && (
        <Modal currentProject={currentProject} onClose={toggleModal} />
      )}
      <div className="flex-row">
        {currentProjects.map((gif, i) => {
          <img
            src={require(`../../assets/${category}/${i}.gif`).default}
            alt={gif.name}
            className="img-thumbnail mx-1"
            onClick={() => toggleModal(gif, i)}
            key={gif.title}
          />;
        })}
      </div>
    </div>
  );
};

export default ProjectList;
