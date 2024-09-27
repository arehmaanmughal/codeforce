import React from "react";
import { Link } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";
import "./style.css";

const Hero = () => {
  return (
    <section className="h-screen sm:h-[600px] flex items-center justify-center text-center bg">
      <div className="bg-slate-800 bg-opacity-70 h-full w-full p-10 flex items-center justify-center">
        <div className="space-y-6 space-x-3 max-w-4xl">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[3rem] sm:leading-[4rem] md:leading-[5rem] lg:leading-[6rem] font-bold text-slate-50 inline-block capitalize">
            Empowering <span className="text-orange-500">Innovation</span> with
            Code<span className="text-orange-500">Force</span>
          </h2>
          <p className="text-lg text-slate-50 text-balance">
            Your trusted partner in delivering cutting-edge software solutions.
            From web development to cloud integration, we transform your
            business challenges into digital success.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-orange-500 hover:bg-slate-50 text-slate-50 hover:text-slate-950 text-xl capitalize font-medium px-8 py-4 rounded-full"
          >
            Let&apos;s Build Together
          </Link>
          <Link
            to="/projects"
            className="inline-block bg-transparent border-2 border-slate-50 hover:bg-slate-50 text-slate-50 hover:text-slate-950 text-xl capitalize font-medium px-8 py-4 rounded-full"
          >
            See Our Work
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
