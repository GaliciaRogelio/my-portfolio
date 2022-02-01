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

// <ul>
//   <li>
//     <a href="#contact" className="nav-btn hang-on-hover">
//       Contact
//     </a>
//   </li>
//   <li>
//     <a href="#about" className="nav-btn hang-on-hover">
//       About
//     </a>
//   </li>
//   <li>
//     <a href="#skills" className="nav-btn hang-on-hover">
//       Skills
//     </a>
//   </li>
//   <li>
//     <a href="#projects" className="nav-btn hang-on-hover">
//       Projects
//     </a>
//   </li>
//   <li>
//     <a href="#resume" className="nav-btn hang-on-hover">
//       Resume
//     </a>
//   </li>
// </ul>

export default Navbar;
