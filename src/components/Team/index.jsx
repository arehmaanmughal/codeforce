import React from "react";
import { Link } from "react-router-dom";
import teamData from "../../data/team";

const Team = () => {
  return (
    <section id="team" className="py-12 px-4">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-slate-50">
          Our <span className="text-orange-600">Leadership</span>
        </h2>
        <p className="mt-4 text-lg text-slate-200">
          Meet the talented professionals driving innovation and success at our
          company.
        </p>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {teamData.map((member, index) => (
            <Link
              to=""
              key={index}
              className="bg-slate-800 rounded-lg shadow-lg p-6 text-center transform hover:scale-105 transition duration-300 ease-in-out"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-32 h-32 rounded-full mx-auto"
              />
              <h3 className="mt-4 text-lg font-medium text-slate-50">
                {member.name}
              </h3>
              <p className="text-slate-300">{member.role}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
