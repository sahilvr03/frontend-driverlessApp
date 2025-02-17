"use client";

import Image from 'next/image';
import { FaLinkedinIn } from 'react-icons/fa';

const Team = () => (
  <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16 space-y-4">
        <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-300 mb-2">
          Meet Our Team
        </h2>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
          A collective of visionaries and specialists shaping tomorrows innovations
        </p>
      </div>
      
      <div className="flex pb-10 overflow-x-auto scrollbar-hide space-x-8 px-2 justify-center h-[500px] overflow-hidden">
        {[
          { name: 'Dr. Muhammad Khurram', role: 'Professor at NED University of Engineering and Technology - Co-Founder Crop2x pvt ltd - Startup Advisor - Change Specialist for AI', image: '/images/sir.png', linkedin: 'https://www.linkedin.com/in/revelation-rsc/' },
          { name: 'Ansharah Mobeen', role: 'GIS Specialist at Crop2x Ltd | Team Lead | Expert in Spatial Analysis, Mapping Technologies & Data-Driven Decision-Making | Agriculture & Agribusiness Integration ', image: '/images/ansharah.png', linkedin: 'https://www.linkedin.com/in/ansharahmobeen' },
          { name: 'Fatima Saud', role: 'Research Assistant @NCAI-NEDUET | Data Scientist | Autonomous Vehicle Project | Computer vision | Generative AI', image: '/images/fatima.png', linkedin: 'https://www.linkedin.com/in/fatimasaud' },
          { name: 'Inzamam Khan', role: 'Engineer | Data Scientist | Embedded AI Hardware & Development | Robotic Software Development | IoT | Power Electronics | Hardware Design', image: '/images/inz.png', linkedin: 'https://www.linkedin.com/in/inzamamkhan' },
          { name: 'Aleema Saleem', role:  "AI Engineer @Crop2x | xResearch.Assitant@NCAI-SCL | xIntern@sawayra | NEDUET'23 ", image: '/images/aleema.png', linkedin: 'https://www.linkedin.com/in/aleemasaleem' }
        ].map((member, index) => (
          <div 
            key={index} 
            className="group min-w-[250px]  bg-gray-800/50 backdrop-blur-lg rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 ease-out hover:bg-gray-800/70 text-center relative flex flex-col justify-between h-full"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            <div>
              <div className="relative w-32 h-32 mx-auto mb-6 overflow-hidden rounded-full border-4 border-gray-700/50 group-hover:border-blue-400 transition-all duration-300">
                <Image
                  alt={member.name}
                  src={member.image}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-full group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-purple-200 mb-2">
                {member.name}
              </h3>

              <p className="text-sm text-gray-300/90 mb-4 leading-relaxed">
                {member.role}
              </p>
            </div>

            {/* 🏆 LinkedIn Section Fixed at Bottom */}
            <div className="mt-auto flex justify-center items-center space-x-2">
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-xl text-white bg-blue-700/90 hover:bg-blue-600 transition-all duration-300 hover:-translate-y-1 shadow-lg"
              >
                <FaLinkedinIn className="w-5 h-5" />
              </a>
              <a 
                href={member.linkedin} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-sm text-gray-300 underline hover:text-blue-400 transition-all duration-300"
              >
                LinkedIn Profile
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Team;
