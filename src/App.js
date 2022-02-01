import React, { useState } from "react";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Section from "./components/Section";
import Footer from "./components/Footer";

function App() {
  const [sections] = useState([
    { name: "contact", id: 1 },
    { name: "about", id: 2 },
    { name: "skills", id: 3 },
    { name: "projects", id: 4 },
    { name: "resume", id: 5 },
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
