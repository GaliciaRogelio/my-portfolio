import React from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Skills from "./components/Skills";
import { ChakraProvider } from "@chakra-ui/react";

function App() {
  return;
  <ChakraProvider>
    <Navbar />
    <About />
    <Projects />
    <Skills />
    <Contact />
  </ChakraProvider>;
}

export default App;
