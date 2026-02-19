import React, { useState } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Intro from "./components/Intro";
import Hero from "./components/Hero";
import About from "./components/About";
import Skill from "./components/Skill";
import Project from "./components/Project";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import OverlayMenu from "./components/OverlayMenu";
import ScrollToTop from "./components/ScrollToTop";
import MouseCursor from "./components/MouseCursor";

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  return (
    <div className="App">
      <MouseCursor />
      <Intro />

      <Header isOpen={isMenuOpen} onToggleMenu={toggleMenu} />

      <OverlayMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />

      <Main>
        <div id="hero">
          <Hero />
        </div>

        <div id="about">
          <About />
        </div>

        <div id="skill">
          <Skill />
        </div>

        <div id="project">
          <Project />
        </div>

        <div id="contact">
          <Contact />
        </div>
      </Main>

      <Footer />

      <ScrollToTop />
    </div>
  );
};

export default App;
