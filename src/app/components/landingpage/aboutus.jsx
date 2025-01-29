"use client"

import Image from 'next/image';
import { FaTwitter, FaLinkedinIn, FaGithub, FaInstagram, FaDribbble } from 'react-icons/fa';

const Team = () => (
  <section className="py-20 bg-white-900">
    <div className="container mx-auto px-4">
      <div className="flex flex-wrap justify-center text-center mb-16">
        <div className="w-full lg:w-6/12 px-4">
          <h2 className="text-5xl font-bold text-gray-600 mb-4">Meet Our Team</h2>
          
        </div>
      </div>
      <div className="flex flex-wrap justify-center -mx-4">
        {[
          { name: 'Ryan Tompson', role: 'Web Developer', image: '/images/boy.jpg', socials: ['twitter', 'linkedin-in', 'github'] },
          { name: 'Romina Hadid', role: 'Marketing Specialist', image: '/images/boy.jpg', socials: ['linkedin-in', 'instagram'] },
          { name: 'Alexa Smith', role: 'UI/UX Designer', image: '/images/boy.jpg', socials: ['dribbble', 'instagram', 'github'] },
          { name: 'Jenna Kardi', role: 'Founder and CEO', image: '/images/boy.jpg', socials: ['twitter', 'linkedin-in', 'github', 'dribbble'] },
        ].map((member, index) => (
          <div key={index} className="w-full md:w-6/12 lg:w-3/12 px-4 mb-8">
            <div className="relative bg-gray-800 rounded-lg p-6 transform transition-all duration-500 hover:scale-105 hover:bg-gray-700 group">
              <div className="relative w-32 h-32 mx-auto mb-6 overflow-hidden rounded-full group-hover:rounded-lg transition-all duration-500">
                <Image
                  alt={member.name}
                  src={member.image}
                  layout="fill"
                  objectFit="cover"
                  className="transition-all duration-500 group-hover:scale-110"
                />
              </div>
              <h3 className="text-2xl font-bold text-white text-center mb-2">{member.name}</h3>
              <p className="text-sm text-gray-400 text-center mb-4">{member.role}</p>
              <div className="flex justify-center space-x-4">
                {member.socials.map((social, idx) => (
                  <a
                    key={idx}
                    href="#"
                    className={`w-10 h-10 flex items-center justify-center rounded-full bg-gray-700 text-white hover:bg-white hover:text-gray-900 transition-all duration-300 ${
                      social === 'twitter' ? 'hover:bg-blue-400' :
                      social === 'linkedin-in' ? 'hover:bg-blue-600' :
                      social === 'github' ? 'hover:bg-gray-900' :
                      social === 'instagram' ? 'hover:bg-gradient-to-r from-purple-600 to-pink-600' :
                      social === 'dribbble' ? 'hover:bg-pink-500' : ''
                    }`}
                  >
                    {social === 'twitter' && <FaTwitter className="w-5 h-5" />}
                    {social === 'linkedin-in' && <FaLinkedinIn className="w-5 h-5" />}
                    {social === 'github' && <FaGithub className="w-5 h-5" />}
                    {social === 'instagram' && <FaInstagram className="w-5 h-5" />}
                    {social === 'dribbble' && <FaDribbble className="w-5 h-5" />}
                  </a>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Team;