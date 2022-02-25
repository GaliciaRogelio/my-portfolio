import React from "react";

function Navbar({ sections = [], setCurrentSection, currentSection }) {
  return (
    <nav>
      {sections.map((section) => (
        <nav
          key={section.id}
          className={currentSection.name === section.name}
          onClick={() => {
            setCurrentSection(section);
          }}
        >
          <span className="nav-btn hang-on-hover">{section.name}</span>
        </nav>
      ))}
    </nav>
  );
}

export default Navbar;
