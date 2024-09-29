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
    <section id="service-details" className="space-y-12 pb-12 pt-16">
      <div className="bg-slate-800 min-h-80 text-center flex items-center justify-center">
        <div className="max-w-4xl mx-auto space-y-6 px-4">
          <h2 className="text-4xl sm:text-6xl font-semibold text-slate-50">
            {service.title}
          </h2>
          <p className="text-base text-slate-300">{service.details}</p>
        </div>
      </div>
      <div className="container mx-auto px-4">
        <div className="space-y-6">
          <div className="space-y-2">
            <h3 className="text-3xl font-semibold text-slate-50">
              Description
            </h3>
            <p className=" text-slate-300">{service.details}</p>
          </div>
          <div className="lg:w-3/4 w-full">
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
          <div className="space-y-2">
            <h3 className="text-3xl font-semibold text-slate-50">Features</h3>
            <ul className="list-disc list-inside text-slate-300">
              {service.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>

          {/* Pricing */}
          <div  className="space-y-2">
            <h3 className="text-3xl font-semibold text-slate-50">Pricing</h3>
            <p className="text-slate-300">{service.pricing}</p>
          </div>

          {/* Technologies */}
          <div className="space-y-2">
            <h3 className="text-3xl font-semibold text-slate-50">
              Technologies Used
            </h3>
            <ul className="list-disc list-inside text-slate-300">
              {service.technologies.map((tech, index) => (
                <li key={index}>{tech}</li>
              ))}
            </ul>
          </div>

          {/* Benefits */}
          <div className="space-y-2">
            <h3 className="text-3xl font-semibold text-slate-50">Benefits</h3>
            <ul className="list-disc list-inside text-slate-300">
              {service.benefits.map((benefit, index) => (
                <li key={index}>{benefit}</li>
              ))}
            </ul>
          </div>

          {/* Case Studies */}
          <div className="space-y-2">
            <h3 className="text-3xl font-semibold text-slate-50">
              Case Studies
            </h3>
            {service.caseStudies.map((caseStudy, index) => (
              <p key={index} className="text-slate-300">
                <strong>{caseStudy.client}: </strong>
                {caseStudy.result}
              </p>
            ))}
          </div>

          {/* Testimonials */}
          <div className="space-y-2">
            <h3 className="text-3xl font-semibold text-slate-50">
              Testimonials
            </h3>
            {service.testimonials.map((testimonial, index) => (
              <p key={index} className="text-slate-300">
                <strong className="text-slate-50">{testimonial.client}: </strong>
                {testimonial.feedback}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceDetails;
