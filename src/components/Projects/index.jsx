import React, { useState } from "react";
import { Link } from "react-router-dom";
import projectsData from "../../data/projects";

const Projects = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  const handleImageLoad = () => {
    setIsLoaded(true);
  };

  return (
    <section id="portfolio" className="py-12 px-4 px-sm-0">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold text-orange-500">Our Work</h2>
        <p className="mt-2 text-slate-300">
          A selection of projects we've worked on.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {projectsData.map((project) => (
            <div
              key={project.id}
              className="bg-slate-800 p-6 shadow-md rounded-lg transform transition-transform duration-500 hover:scale-105"
            >
              <Link to={`/projects/${project.id}`}>
                {/* Placeholder for loading state */}
                <div className="w-full h-auto relative">
                  <img
                    
                    src={project.image} // Fallback for unsupported browsers
                    alt={project.title}
                    loading="lazy"
                    className={`w-full h-auto rounded-xl transition-opacity duration-500 ${
                      isLoaded ? "opacity-100" : "opacity-0"
                    }`}
                    onLoad={handleImageLoad}
                  />
                  {!isLoaded && (
                    <div className="absolute inset-0 bg-gray-700 animate-pulse rounded-xl"></div>
                  )}
                </div>
                <div className="mt-4">
                  <h3 className="text-xl font-semibold text-slate-50">
                    {project.title}
                  </h3>
                  <p className="text-slate-300 mt-2">{project.description}</p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
