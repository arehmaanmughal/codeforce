import React, { useEffect } from "react";
import Hero from "../../components/Hero";
import Services from "../../components/Services";
import Projects from "../../components/Projects";
import About from "../../components/About";
import Contact from "../../components/Contact";
import Team from "../../components/Team";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Hero />
      <Services />
      <About />
      <Projects />
      <Team />
      <Contact />
    </div>
  );
};

export default Home;
