import React from "react";
import { Link } from "react-router-dom";
import { FaLaptopCode, FaMobileAlt, FaCloud, FaChartLine, FaDatabase, FaLock } from "react-icons/fa";

const Services = () => {
  return (
    <section id="services" className="py-12">
      <div className="container mx-auto text-center px-4 px-sm-0">
        <h2 className="text-3xl font-semibold text-slate-50">Our Services</h2>
        <p className="mt-2 text-slate-300">
          We offer a range of services to help you achieve your business goals.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {/* Web Development */}
          <Link to="" className="p-6 bg-slate-900 text-slate-50 shadow-md rounded-md hover:bg-slate-50 hover:text-slate-900">
            <FaLaptopCode size={32} className="mx-auto mb-4" />
            <h3 className="text-xl font-semibold">
              Web Development
            </h3>
            <p className="mt-2">
              We develop scalable web applications with modern technology.
            </p>
          </Link>

          {/* Mobile App Development */}
          <Link to="" className="p-6 bg-slate-900 text-slate-50 shadow-md rounded-md hover:bg-slate-50 hover:text-slate-900">
            <FaMobileAlt size={32} className="mx-auto mb-4" />
            <h3 className="text-xl font-semibold">
              Mobile App Development
            </h3>
            <p className="mt-2">
              We create mobile applications for both iOS and Android platforms.
            </p>
          </Link>

          {/* Cloud Solutions */}
          <Link to="" className="p-6 bg-slate-900 text-slate-50 shadow-md rounded-md hover:bg-slate-50 hover:text-slate-900">
            <FaCloud size={32} className="mx-auto mb-4" />
            <h3 className="text-xl font-semibold">
              Cloud Solutions
            </h3>
            <p className="mt-2">
              We offer cloud-based services and solutions to scale your business.
            </p>
          </Link>

          {/* Digital Marketing */}
          <Link to="" className="p-6 bg-slate-900 text-slate-50 shadow-md rounded-md hover:bg-slate-50 hover:text-slate-900">
            <FaChartLine size={32} className="mx-auto mb-4" />
            <h3 className="text-xl font-semibold">
              Digital Marketing
            </h3>
            <p className="mt-2">
              We provide data-driven marketing strategies to grow your business.
            </p>
          </Link>

          {/* Database Management */}
          <Link to="" className="p-6 bg-slate-900 text-slate-50 shadow-md rounded-md hover:bg-slate-50 hover:text-slate-900">
            <FaDatabase size={32} className="mx-auto mb-4" />
            <h3 className="text-xl font-semibold">
              Database Management
            </h3>
            <p className="mt-2">
              We offer secure and efficient database management solutions.
            </p>
          </Link>

          {/* Cybersecurity */}
          <Link to="" className="p-6 bg-slate-900 text-slate-50 shadow-md rounded-md hover:bg-slate-50 hover:text-slate-900">
            <FaLock size={32} className="mx-auto mb-4" />
            <h3 className="text-xl font-semibold">
              Cybersecurity
            </h3>
            <p className="mt-2">
              We provide cybersecurity solutions to protect your digital assets.
            </p>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;
