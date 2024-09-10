import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
const Hero = () => {
  return (
    <section
      className="h-screen sm:h-[600px] flex items-center justify-center text-center bg"
    >
      <div className="bg-black bg-opacity-40 h-full w-full p-10 flex items-center justify-center">
        <div>
        <h1 className="text-4xl font-bold text-white">
          Welcome to CodeForce
        </h1>
        <p className="mt-4 text-lg text-white">
          We build modern web solutions for your business needs.
        </p>
        <Link
          to=""
          className="mt-6 inline-block bg-blue-500 text-white px-6 py-3 rounded-lg"
        >
          Get in Touch
        </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
