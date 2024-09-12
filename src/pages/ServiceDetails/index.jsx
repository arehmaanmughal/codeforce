import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import servicesData from "../../data/services";

const ServiceDetails = () => {
  const { serviceId } = useParams(); // Get the service ID from the URL
  const service = servicesData.find((service) => service.id === serviceId);

  // Scroll to the top when the component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!service) {
    return (
      <div className="h-full flex justify-center items-center text-slate-50 text-2xl">
        <p>Service not found!</p>
      </div>
    );
  }

  return (
    <section id="service-details" className="py-12 pt-24 px-4 px-sm-0">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center lg:items-start">
          <div className="lg:w-1/2 w-full">
            <img
              src={service.image}
              alt={service.title}
              className="rounded-lg shadow-lg w-full h-auto"
              loading="lazy"
            />
          </div>
          <div className="lg:w-1/2 w-full mt-8 lg:mt-0 lg:ml-8">
            <h2 className="text-3xl font-semibold text-slate-50">
              {service.title}
            </h2>
            <p className="mt-4 text-slate-300">{service.details}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceDetails;
