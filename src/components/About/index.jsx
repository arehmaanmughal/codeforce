import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import office from "../../assets/images/office.jpg";
const About = () => {
  return (
    <section id="about" className="py-12">
      <div className="container mx-auto space-y-12 px-4">
        <h2 className="text-3xl font-semibold text-slate-50 text-center">
          Who <span className="text-orange-500">We </span>Are?
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <LazyLoadImage
            src={office} // Actual image source
            alt="project-image"
            className="rounded-xl"
            effect="blur" // Adds a blur effect while the image is loading
            width="100%"
            height="auto"
          />

          <div>
            <p className="mt-2 text-slate-300 text-justify">
              We are a passionate team of developers, designers, and strategists
              dedicated to delivering top-notch solutions that drive innovation
              and creativity. With a customer-centric approach, we turn ideas
              into reality by blending technical expertise with creative
              problem-solving.
            </p>
            <p className="mt-4 text-slate-300 text-justify">
              Our mission is to empower businesses to achieve their goals
              through cutting-edge technology, user-focused design, and
              forward-thinking strategies. Whether it's building web
              applications, crafting compelling UI/UX, or strategizing for
              growth, we take pride in our work and our clients' success.
            </p>
            <p className="mt-4 text-slate-300 text-justify">
              Founded on the principles of collaboration, integrity, and
              innovation, we believe in pushing boundaries and continuously
              evolving to stay ahead of the curve. Join us on this journey to
              create meaningful digital experiences that make a difference.
            </p>
            <p className="mt-4 text-slate-300 text-justify">
              Our team is global, but our mission is singular: delivering
              exceptional results that leave a lasting impact.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
