import React from "react";
import project1 from "../../assets/images/p2.jpg";
import project2 from "../../assets/images/p1.jpg";
import project3 from "../../assets/images/p3.jpg";
import { Link } from "react-router-dom";

const Portfolio = () => {
  // Create an array of project data
  const projects = [
    {
      id: 1,
      title: "Project One",
      description:
        "A modern web app designed to improve productivity and efficiency.",
      image: project1,
    },
    {
      id: 2,
      title: "Project Two",
      description:
        "An innovative e-commerce platform for seamless shopping.",
      image: project2,
    },
    {
      id: 3,
      title: "Project Three",
      description:
        "A mobile app solution for real-time collaboration and communication.",
      image: project3,
    },
  ];

  return (
    <section id="portfolio" className="py-12 px-4 px-sm-0">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold text-slate-50">Our Work</h2>
        <p className="mt-2 text-slate-300">
          A selection of projects we've worked on.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {/* Use map to render the projects */}
          {projects.map((project) => (
            <Link
              key={project.id}
              to=""
              className="bg-slate-800 p-6 shadow-md rounded-lg transform transition-transform duration-500 hover:scale-105"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-auto rounded-xl"
              />
              <div className="mt-4">
                <h3 className="text-xl font-semibold text-slate-50">
                  {project.title}
                </h3>
                <p className="text-slate-300 mt-2">{project.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
