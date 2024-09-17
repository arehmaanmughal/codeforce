import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

const Hero = () => {
  const title = "Welcome to CodeForce";

  return (
    <section className="h-screen sm:h-[600px] flex items-center justify-center text-center bg">
      <div className="bg-black bg-opacity-60 h-full w-full p-10 flex items-center justify-center">
        <div>
          <h2 className="text-4xl lg:text-[60px] lg:leading-[3.5rem] font-bold text-slate-50 o inline-block overflow-hidden sm:text-nowrap animate-typing">
            {title}
            <span className="animate-blink">&nbsp;</span>
          </h2>
          <p className="mt-4 lg:mt-8 text-lg text-slate-50">
            We build modern web solutions for your business needs.
          </p>
          <Link
            to="/contact"
            className="mt-6 inline-block bg-orange-500 text-slate-50 text-xl font-bold px-6 py-2 rounded-full link-animate"
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
