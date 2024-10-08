import React from "react";
import { Link } from "react-router-dom";
import projectsData from "../../data/projects";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
const Projects = () => {
  return (
    <section id="portfolio">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-slate-50 text-center">
          Our <span className="text-orange-600">Portfolio</span>
        </h2>
        <p className="mt-4 text-lg text-slate-200 text-center">
          Explore a curated collection of projects showcasing our expertise and
          innovative solutions.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {projectsData.map((project) => (
            <Link
              to=""
              key={project.id}
              className="text-slate-50 transform hover:scale-105 transition duration-700 ease-in-out"
            >
              {/* Lazy load image with blur effect and placeholder */}
              <div className="w-full h-auto relative">
                <LazyLoadImage
                  src={project.image} // Actual image source
                  alt="project-image"
                  className="rounded-xl"
                  effect="blur" // Adds a blur effect while the image is loading
                  width="100%"
                  height="auto"
                  placeholderSrc="../assets/images/placeholder.webp" // Placeholder image
                />
                {!project.image && (
                  <div className="absolute inset-0 bg-gray-700 animate-pulse rounded-xl"></div>
                )}
              </div>
              <div className="mt-2">
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <p className="text-slate-300">{project.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
