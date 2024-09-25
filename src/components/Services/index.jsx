import React from "react";
import { Link } from "react-router-dom";
import servicesData from "../../data/services";
const Services = () => {
  return (
    <section id="services" className="py-12">
      <div className="container mx-auto text-center px-4">
        <h2 className="text-4xl font-bold text-orange-600">Our Expertise</h2>
        <p className="mt-4 text-lg text-slate-200">
          Empowering your business with cutting-edge technology solutions,
          tailored to drive innovation and growth.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {servicesData.map((service) => {
            const { id, title, description, icon: Icon, link } = service;
            return (
              <div
                key={id}
                className="p-6 bg-slate-800 text-slate-50 shadow-md rounded-md hover:bg-slate-50 hover:text-slate-800"
              >
                <Link to={link} className="block">
                  <Icon size={32} className="mx-auto mb-4" color="#f97316" />
                  <h3 className="text-xl font-semibold">{title}</h3>
                  <p className="mt-2">{description}</p>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
