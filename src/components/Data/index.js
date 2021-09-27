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

export const projects = [
    {
      title: "What's for Dinner",
      subtitle: "Third Party API Application",
      description:
        "An application that will allow the user to get ideas for meals by searching for recipes either by category or keyword.",
      image: "../../assets/gifs/wfd.gif",
      link: "https://nicopetelo.github.io/whats-for-dinner/",
      github: "https://github.com/GaliciaRogelio/whats-for-dinner"
    },
    {
      title: "The Goodvice Blog",
      subtitle: "Interactive Full-Stack Application",
      description:
        "A small scale app, enabling users to get advice from their community on everyday things and allowing them to quickly search by categories or keywords.",
      image: "../assets/gifs/tgvb.gif",
      link: "https://the-goodvice-blog.herokuapp.com/",
      github: "https://github.com/GaliciaRogelio/the-goodvice-blog"
    },
    {
      title: "Budget Tracker",
      subtitle: "Progresive Web Application (PWA)",
      description:
        "This is a budget tracker application that allows offline access and functionality. The user is able to add expenses and deposits to their budget with or without internet connection.",
      image: "../assets/gifs/bt.gif",
      link: "https://rojos-budget-tracker.herokuapp.com/",
      github: "https://github.com/GaliciaRogelio/my-budget-tracker"
    },
    {
      title: "Your City Weather App",
      subtitle: "Third Party API",
      description:
        "This is a weather application where users are able to search a city and the app will look through a third party API for that specific city and return results incluiding humidity, wind speed, and UV index",
      image: "../assets/gifs/ycw.gif",
      link: "https://galiciarogelio.github.io/your-city-weather/",
      github: "https://github.com/GaliciaRogelio/your-city-weather"
    },
  ];
  
  export const skills = [
    "HTML5",
    "CSS3",
    "JavaScript",
    "React",
    "MySQL",
    "Node",
    "GraphQL",
    "MongoDB"
  ];

  export const logos = [
    <SiHtml5 />,
    <SiCss3 />,
    <SiJavascript />,
    <SiReact />,
    <SiMysql />,
    <SiNodeDotJs />,
    <SiGraphql />,
    <SiMongodb />
  ]
  