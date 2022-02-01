import React from "react";
import SectionContent from "../SectionContent";
import Contact from "../Contact";
import About from "../About";
import Skills from "../Skills";
import Project from "../Projects";
import Resume from "../Resume";

function Section(props) {
  const { currentSection } = props;
  const renderSection = () => {
    switch (currentSection.name) {
      case "contact":
        return <Contact />;
      case "about":
        return <About />;
      case "skills":
        return <Skills />;
      case "projects":
        return <Project />;
      case "resume":
        return <Resume />;
    }
  };
  return (
    <div>
      <h2>{currentSection.name}</h2>
      <SectionContent>{renderSection()}</SectionContent>
    </div>
  );
}

export default Section;
