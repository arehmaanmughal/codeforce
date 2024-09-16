import React from "react";
import { Link } from "react-router-dom";
import projectsData from "../../data/projects";

const Projects = () => {
  return (
    <section id="portfolio" className="py-12 px-4 px-sm-0">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold text-orange-500">Our Work</h2>
        <p className="mt-2 text-slate-300">A selection of projects we've worked on.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {projectsData.map((project) => (
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
                <h3 className="text-xl font-semibold text-slate-50">{project.title}</h3>
                <p className="text-slate-300 mt-2">{project.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
