"use client";

import { useState } from "react";
import Image from "next/image";
import { FaLinkedinIn } from "react-icons/fa";

const Team = () => {
  const teamMembers = [
    {
      name: "Dr. Muhammad Khurram",
      role: "Professor at NED University of Engineering and Technology - Startup Advisor - Change Specialist for AI",
      image: "/images/sir.png",
      linkedin: "https://www.linkedin.com/in/revelation-rsc/",
    },
    {
      name: "Ansharah Mobeen",
      role: "Team Lead | Expert in Spatial Analysis, Mapping Technologies & Data-Driven Decision-Making",
      image: "/images/ansharah.png",
      linkedin: "https://www.linkedin.com/in/ansharahmobeen",
    },
    {
      name: "Inzamam Khan",
      role: "Research & Development Engineer | Data Scientist | Embedded AI Hardware | Robotics | Machine Learning | IoT | Electronics | HW Design",
      image: "/images/inz.png",
      linkedin: "https://www.linkedin.com/in/inzamamkhan",
    },
    {
      name: "Fatima Saud",
      role: "Research Assistant @NCAI-NEDUET | Data Scientist | Autonomous Vehicle Project | Computer Vision | Generative AI",
      image: "/images/fatima.png",
      linkedin: "https://www.linkedin.com/in/fatimasaud",
    },
    {
      name: "Aleema Saleem",
      role: "AI Engineer | Research Assistant @NCAI-SCL | Intern @Sawayra | NEDUET'23",
      image: "/images/aleema.png",
      linkedin: "https://www.linkedin.com/in/aleemasaleem",
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-white via-red-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center mb-20 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-red-700 to-red-500 bg-clip-text text-transparent">
            Meet Our Team
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A collective of researchers and innovators driving intelligent mobility forward.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-10">
          {teamMembers.map((member, index) => (
            <TeamCard key={index} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
};

const TeamCard = ({ member }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="group relative bg-white rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-red-200 flex flex-col justify-between">

      {/* Soft Red Glow */}
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-red-100/40 to-red-200/20 opacity-0 group-hover:opacity-100 transition duration-500 pointer-events-none" />

      <div className="relative z-10 text-center">

        {/* Image */}
        <div className="relative w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-red-100 group-hover:border-red-400 transition-all duration-500">
          <Image
            alt={member.name}
            src={member.image}
            width={128}
            height={128}
            className="rounded-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>

        {/* Name */}
        <h3 className="text-xl font-semibold text-red-700 mb-2">
          {member.name}
        </h3>

        {/* Role */}
        <p
          className={`text-sm text-gray-600 leading-relaxed ${
            expanded ? "" : "line-clamp-4"
          }`}
        >
          {member.role}
        </p>

        {/* See More */}
        {member.role.length > 120 && (
          <button
            onClick={() => setExpanded(!expanded)}
            className="mt-2 text-red-600 text-sm font-medium hover:underline"
          >
            {expanded ? "See Less" : "See More"}
          </button>
        )}
      </div>

      {/* LinkedIn Button */}
      <div className="relative z-10 mt-6 flex justify-center">
        <a
          href={member.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-r from-red-600 to-red-500 text-white hover:scale-110 transition-transform duration-300 shadow-md hover:shadow-red-300/50"
        >
          <FaLinkedinIn className="w-4 h-4" />
        </a>
      </div>
    </div>
  );
};

export default Team;
