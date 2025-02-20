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
      role: " Team Lead | Expert in Spatial Analysis, Mapping Technologies & Data-Driven Decision-Making | Agriculture & Agribusiness Integration",
      image: "/images/ansharah.png",
      linkedin: "https://www.linkedin.com/in/ansharahmobeen",
    },
    {
      name: "Fatima Saud",
      role: "Research Assistant @NCAI-NEDUET | Data Scientist | Autonomous Vehicle Project | Computer vision | Generative AI",
      image: "/images/fatima.png",
      linkedin: "https://www.linkedin.com/in/fatimasaud",
    },
    {
      name: "Inzamam Khan",
      role: "Research & Development Engineer | Data scientist| Embedded AI Hardware & Development | Embedded Systems | Robotic SW Development & Integration | OT | Machine Learning & Computer Vision | IoT | Electronics | HW Design",
      image: "/images/inz.png",
      linkedin: "https://www.linkedin.com/in/inzamamkhan",
    },
    {
      name: "Aleema Saleem",
      role: "AI Engineer | Research Assistant @NCAI-SCL | Intern @sawayra | NEDUET'23",
      image: "/images/aleema.png",
      linkedin: "https://www.linkedin.com/in/aleemasaleem",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-300">
            Meet Our Team
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            A collective of visionaries and specialists shaping tomorrows
            innovations.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8 px-2">
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
    <div className="group bg-gray-800/50 backdrop-blur-lg rounded-2xl p-6 cursor-pointer shadow-xl hover:shadow-2xl transition-all duration-300 hover:bg-gray-800/70 text-center flex flex-col justify-between h-full relative">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div>
        <div className="relative w-32 h-32 mx-auto mb-6 overflow-hidden rounded-full border-4 border-gray-700/50 group-hover:border-blue-400 transition-all duration-300">
          <Image
            alt={member.name}
            src={member.image}
            width={128}
            height={128}
            className="rounded-full group-hover:scale-105 transition-transform duration-300 object-cover"
          />
        </div>

        <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-purple-200 mb-2">
          {member.name}
        </h3>

        <p
          className={`text-sm text-gray-300/90 leading-relaxed ${
            expanded ? "" : "line-clamp-4"
          }`}
        >
          {member.role}
        </p>

        {/* "See More" Button */}
        {member.role.length > 150 && (
          <button
            className="text-blue-400 hover:text-blue-300 text-sm mt-2"
            onClick={() => setExpanded(!expanded)}
          >
            {expanded ? "See Less" : "See More"}
          </button>
        )}
      </div>

      {/* LinkedIn Section */}
      <div className="mt-auto flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-x-2 sm:space-y-0">
        <a
          href={member.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 flex items-center justify-center rounded-xl text-white bg-blue-700/90 hover:bg-blue-600 transition-all duration-300 hover:-translate-y-1 shadow-lg"
        >
          <FaLinkedinIn className="w-5 h-5" />
        </a>
        {/* <a
          href={member.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-gray-300 underline hover:text-blue-400 transition-all duration-300"
        >
          LinkedIn Profile
        </a> */}
      </div>
    </div>
  );
};

export default Team;
