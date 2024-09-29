import React, { useEffect, lazy, Suspense } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

// Dynamically import components
const Hero = lazy(() => import("../../components/Hero"));
const Services = lazy(() => import("../../components/Services"));
const Projects = lazy(() => import("../../components/Projects"));
const About = lazy(() => import("../../components/About"));
const Contact = lazy(() => import("../../components/Contact"));
const Team = lazy(() => import("../../components/Team"));
const Technologies = lazy(() => import("../../components/Technologies"));

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Different animations for each section
  const heroAnimation = {
    initial: { y: -300, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: { duration: 2 },
  };

  const servicesAnimation = {
    initial: { y: 100, opacity: 0 },
    animate: { y: 1, opacity: 1 },
    transition: { duration: 1 },
  };

  const aboutAnimation = {
    initial: { y: 100, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: { duration: 1 },
  };

  const projectsAnimation = {
    initial: { y: 100, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: { duration: 1 },
  };

  const technologiesAnimation = {
    initial: { y: 100, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: { duration: 1 },
  };

  const teamAnimation = {
    initial: { y: 100, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: { duration: 1 },
  };

  const contactAnimation = {
    initial: { y: 100, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: { duration: 1 },
  };

  return (
    <div className="space-y-12">
      <Suspense fallback={<div>Loading...</div>}>
        <SectionAnimation {...heroAnimation}>
          <Hero />
        </SectionAnimation>

        <SectionAnimation {...servicesAnimation}>
          <Services />
        </SectionAnimation>

        <SectionAnimation {...aboutAnimation}>
          <About />
        </SectionAnimation>

        <SectionAnimation {...projectsAnimation}>
          <Projects />
        </SectionAnimation>

        <SectionAnimation {...technologiesAnimation}>
          <Technologies />
        </SectionAnimation>

        <SectionAnimation {...teamAnimation}>
          <Team />
        </SectionAnimation>

        <SectionAnimation {...contactAnimation}>
          <Contact />
        </SectionAnimation>
      </Suspense>
    </div>
  );
};

// Reusable SectionAnimation component that receives animation props
const SectionAnimation = ({ children, initial, animate, transition }) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <motion.div
      ref={ref}
      initial={initial}
      animate={inView ? animate : { opacity: 0 }}
      transition={transition}
    >
      {children}
    </motion.div>
  );
};

export default Home;
