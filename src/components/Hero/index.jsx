import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
const Hero = () => {
  return (
    <section className="h-screen sm:h-[600px] flex items-center justify-center text-center bg">
      <div className="bg-black bg-opacity-60 h-full w-full p-10 flex items-center justify-center">
        <div>
          <h1 className="text-4xl lg:text-[60px] font-bold text-slate-50">
            Welcome to CodeForce
          </h1>
          <p className="mt-4 lg:mt-8 text-lg text-slate-50">
            We build modern web solutions for your business needs.
          </p>
          <Link
            to=""
            className="mt-6 inline-block bg-orange-600 text-slate-50 text-xl font-bold px-6 py-2 rounded-full hover:bg-slate-50 hover:text-slate-950"
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
