import React, { useState } from "react";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Section from "./components/Section";
import Footer from "./components/Footer";

function App() {
  const [sections] = useState([
    { name: "about", id: 1 },
    { name: "skills", id: 2 },
    { name: "projects", id: 3 },
    { name: "resume", id: 4 },
    { name: "contact", id: 5 },
  ]);

  const [currentSection, setCurrentSection] = useState(sections[0]);

  return (
    <>
      <Header />
      <Navbar 
      sections={sections}
      setCurrentSection={setCurrentSection}
      currentSection={currentSection}/>
      <div>
        <Section currentSection={currentSection} />
      </div>
      <Footer />
    </>
  );
}

export default App;
