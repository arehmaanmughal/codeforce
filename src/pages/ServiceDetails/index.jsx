import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import servicesData from "../../data/services";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const ServiceDetails = () => {
  const { serviceId } = useParams();
  const service = servicesData.find((service) => service.id === serviceId);

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

  const otherServices = servicesData.filter(
    (service) => service.id !== serviceId
  );

  return (
    <section id="service-details" className="pt-32 pb-12 px-4 px-sm-0">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-3">
          <div className="w-full order-2 lg:w-1/4 lg:order-1">
            <h2 className="text-slate-50 text-2xl text-center mb-6">
              Other Services
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-8">
              {otherServices.map((service) => {
                const { id, title, image, link } = service;
                return (
                  <div
                    key={id}
                    className="p-6 bg-slate-800 text-slate-50 shadow-md rounded-md hover:bg-orange-500"
                  >
                    <Link
                      to={link}
                      className="block"
                      onClick={() => window.scrollTo(0, 0)}
                    >
                      <LazyLoadImage
                        src={image}
                        alt="service-image"
                        className="rounded-xl mb-3"
                        effect="blur" // Adds a blur effect while the image is loading
                        width="100%"
                        height="auto"
                      />
                      <h3 className="text-xl text-center font-semibold">
                        {title}
                      </h3>
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="lg:w-3/4 w-full order-1 lg:order-2 lg:ml-8">
            <h2 className="text-3xl font-semibold text-slate-50">
              {service.title}
            </h2>
            <p className="mt-4 text-slate-300">{service.details}</p>
            <div className="lg:w-3/4 w-full mt-6">
              <LazyLoadImage
                src={service.image}
                alt={service.title}
                className="rounded-lg shadow-lg w-full h-auto"
                effect="blur" // Adds a blur effect while the image is loading
                width="100%"
                height="auto"
              />
            </div>
             {/* Features */}
             <div className="mt-6">
              <h3 className="text-2xl font-semibold text-slate-50">
                Features:
              </h3>
              <ul className="list-disc list-inside mt-4 text-slate-300">
                {service.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>

            {/* Pricing */}
            <div className="mt-6">
              <h3 className="text-2xl font-semibold text-slate-50">Pricing:</h3>
              <p className="mt-2 text-slate-300">{service.pricing}</p>
            </div>

            {/* Technologies */}
            <div className="mt-6">
              <h3 className="text-2xl font-semibold text-slate-50">
                Technologies Used:
              </h3>
              <ul className="list-disc list-inside mt-4 text-slate-300">
                {service.technologies.map((tech, index) => (
                  <li key={index}>{tech}</li>
                ))}
              </ul>
            </div>

            {/* Benefits */}
            <div className="mt-6">
              <h3 className="text-2xl font-semibold text-slate-50">
                Benefits:
              </h3>
              <ul className="list-disc list-inside mt-4 text-slate-300">
                {service.benefits.map((benefit, index) => (
                  <li key={index}>{benefit}</li>
                ))}
              </ul>
            </div>

            {/* Case Studies */}
            <div className="mt-6">
              <h3 className="text-2xl font-semibold text-slate-50">
                Case Studies:
              </h3>
              {service.caseStudies.map((caseStudy, index) => (
                <p key={index} className="mt-2 text-slate-300">
                  <strong>{caseStudy.client}: </strong>
                  {caseStudy.result}
                </p>
              ))}
            </div>

            {/* Testimonials */}
            <div className="mt-6">
              <h3 className="text-2xl font-semibold text-slate-50">
                Testimonials:
              </h3>
              {service.testimonials.map((testimonial, index) => (
                <p key={index} className="mt-2 text-slate-300">
                  <strong>{testimonial.client}: </strong>
                  {testimonial.feedback}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


export default ServiceDetails;