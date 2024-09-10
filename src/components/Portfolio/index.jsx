import React from "react";
import project1 from "../../assets/p1.jpg";
import project2 from "../../assets/p2.jpg";
import project3 from "../../assets/p3.jpg";
const Portfolio = () => {
  return (
    <section id="portfolio" className="py-12 bg-white px-4 px-sm-0">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold text-gray-800">Our Work</h2>
        <p className="mt-2 text-gray-600">
          A selection of projects we've worked on.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          <div className="bg-gray-100 p-4 shadow-md rounded-md">
            <img
              src={project1}
              alt="Project 1"
              className="w-full"
              
            />
            <h3 className="mt-4 text-xl font-semibold text-gray-800">
              Project 1
            </h3>
          </div>
          <div className="bg-gray-100 p-4 shadow-md rounded-md">
            <img
              src={project2}
              alt="Project 2"
              className="w-full"
              
            />
            <h3 className="mt-4 text-xl font-semibold text-gray-800">
              Project 2
            </h3>
          </div>
          <div className="bg-gray-100 p-4 shadow-md rounded-md">
            <img
              src={project3}
              alt="Project 3"
              className="w-full"
              
            />
            <h3 className="mt-4 text-xl font-semibold text-gray-800">
              Project 3
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
