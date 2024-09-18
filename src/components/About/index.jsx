import React from "react";

const About = () => {
  return (
    <section id="about" className="py-12 px-4 bg-slate-800">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold text-orange-500">About Us</h2>
        <p className="mt-2 text-slate-300 text-balance">
          We are a passionate team of developers, designers, and strategists dedicated to delivering top-notch solutions
          that drive innovation and creativity. With a customer-centric approach, we turn ideas into reality by blending
          technical expertise with creative problem-solving.
        </p>
        <p className="mt-4 text-slate-300 text-balance">
          Our mission is to empower businesses to achieve their goals through cutting-edge technology, user-focused design,
          and forward-thinking strategies. Whether it's building web applications, crafting compelling UI/UX, or 
          strategizing for growth, we take pride in our work and our clients' success.
        </p>
        <p className="mt-4 text-slate-300 text-balance">
          Founded on the principles of collaboration, integrity, and innovation, we believe in pushing boundaries and
          continuously evolving to stay ahead of the curve. Join us on this journey to create meaningful digital experiences
          that make a difference.
        </p>
        <p className="mt-4 text-slate-300 text-balance">
          Our team is global, but our mission is singular: delivering exceptional results that leave a lasting impact.
        </p>
      </div>
    </section>
  );
};

export default About;
