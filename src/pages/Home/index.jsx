import React from 'react'
import Hero from '../../components/Hero';
import Services from '../../components/Services';
import Projects from '../../components/Projects';
import About from '../../components/About';
import Contact from '../../components/Contact';
import Team from '../../components/Team';

const Home = () => {
  return (
    <div>
      <Hero />
      <Services />
      <Projects />
      <Team/>
      <About />
      <Contact />
    </div>
  )
}

export default Home;
