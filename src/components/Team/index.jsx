import React from "react";
import profile1 from "../../assets/images/e1.png";
import profile2 from "../../assets/images/e2.png";
import profile3 from "../../assets/images/e3.jpg";
import profile4 from "../../assets/images/e4.jpg";
import { Link } from "react-router-dom";
const teamMembers = [
  {
    name: "John Doe",
    role: "CEO & Founder",
    image: profile1, // Replace with actual image path
  },
  {
    name: "Jane Smith",
    role: "Lead Developer",
    image: profile4, // Replace with actual image path
  },
  {
    name: "Emily Johnson",
    role: "UI/UX Designer",
    image: profile2, // Replace with actual image path
  },
  {
    name: "Michael Lee",
    role: "Marketing Strategist",
    image: profile3, // Replace with actual image path
  },
];

const Team = () => {
  return (
    <section id="team" className="py-12 px-4">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold text-slate-50">Meet Our Team</h2>
        <p className="mt-2 text-slate-300">Our dedicated team of professionals</p>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <Link
              to=""
              key={index}
              className="bg-slate-900 rounded-lg shadow-lg p-6 text-center transform hover:scale-105 transition duration-300 ease-in-out"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-32 h-32 rounded-full mx-auto"
              />
              <h3 className="mt-4 text-lg font-medium text-slate-50">{member.name}</h3>
              <p className="text-slate-300">{member.role}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
