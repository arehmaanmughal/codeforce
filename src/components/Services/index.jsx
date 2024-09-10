import React from "react";

const Services = () => {
  return (
    <section id="services" className="py-12 bg-gray-50">
      <div className="container mx-auto text-center px-4 px-sm-0">
        <h2 className="text-3xl font-semibold text-gray-800">Our Services</h2>
        <p className="mt-2 text-gray-600">
          We offer a range of services to help you achieve your business goals.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          <div className="p-6 bg-white shadow-md rounded-md">
            <i className="text-blue-500 fas fa-code text-4xl mb-4"></i>
            <h3 className="text-xl font-semibold text-gray-800">
              Web Development
            </h3>
            <p className="mt-2 text-gray-600">
              We develop scalable web applications with modern technology.
            </p>
          </div>
          <div className="p-6 bg-white shadow-md rounded-md">
            <i className="text-blue-500 fas fa-mobile-alt text-4xl mb-4"></i>
            <h3 className="text-xl font-semibold text-gray-800">
              Mobile App Development
            </h3>
            <p className="mt-2 text-gray-600">
              We create mobile applications for both iOS and Android platforms.
            </p>
          </div>
          <div className="p-6 bg-white shadow-md rounded-md">
            <i className="text-blue-500 fas fa-cloud text-4xl mb-4"></i>
            <h3 className="text-xl font-semibold text-gray-800">
              Cloud Solutions
            </h3>
            <p className="mt-2 text-gray-600">
              We offer cloud-based services and solutions to scale your
              business.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
