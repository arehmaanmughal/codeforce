import React from "react";
import { Link } from "react-router-dom";
import servicesData from "../../data/services";
const Services = () => {
  return (
    <section id="services">
      <div className="container mx-auto text-center px-4">
        <h2 className="text-4xl font-bold text-slate-50">
          Our <span className="text-orange-600">Expertise</span>
        </h2>
        <p className="mt-4 text-lg text-slate-200 ">
          Empowering your business with cutting-edge technology solutions,
          tailored to drive innovation and growth.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {servicesData.map((service) => {
            const { id, title, description, icon: Icon, link } = service;
            return (
              <div
                key={id}
                className="p-6 bg-slate-800 text-slate-50 shadow-md rounded-md hover:bg-slate-50 hover:text-slate-800 flex items-center"
              >
                <Link to={link} className="space-y-3">
                  <Icon size={60} className="mx-auto" color="#f97316" />

                  <div>
                    <h3 className="text-2xl font-semibold">{title}</h3>
                    <p className="text-sm">{description}</p>
                  </div>
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
