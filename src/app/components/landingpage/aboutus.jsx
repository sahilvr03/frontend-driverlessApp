"use client"

import Image from 'next/image';

const Team = () => (
  <section className="pt-20 pb-20">
    <div className="container mx-auto px-4">
      <div className="flex flex-wrap justify-center text-center mb-24">
        <div className="w-full lg:w-6/12 px-4">
          <h2 className="text-4xl font-semibold">Here are our heroes</h2>
          <p className="text-lg leading-relaxed m-4 text-gray-600">
            According to the National Oceanic and Atmospheric Administration, Ted Scambos, NSIDC lead scientist, puts the potentially record maximum.
          </p>
        </div>
      </div>
      <div className="flex flex-wrap">
        {[
          { name: 'Ryan Tompson', role: 'Web Developer', image: '/images/boy.jpg', socials: ['twitter', 'facebook-f', 'dribbble'] },
          { name: 'Romina Hadid', role: 'Marketing Specialist', image: '/images/boy.jpg', socials: ['google', 'facebook-f'] },
          { name: 'Alexa Smith', role: 'UI/UX Designer', image: '/images/boy.jpg', socials: ['google', 'twitter', 'instagram'] },
          { name: 'Jenna Kardi', role: 'Founder and CEO', image: '/images/boy.jpg', socials: ['dribbble', 'google', 'twitter', 'instagram'] },
        ].map((member, index) => (
          <div key={index} className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
            <div className="px-6">
              <Image
                alt={member.name}
                src={member.image}
                className="shadow-lg rounded-full max-w-full mx-auto"
                width={120}
                height={120}
              />
              <div className="pt-6 text-center">
                <h5 className="text-xl font-bold">{member.name}</h5>
                <p className="mt-1 text-sm text-gray-500 uppercase font-semibold">{member.role}</p>
                <div className="mt-6 flex justify-center space-x-2">
                  {member.socials.map((social, idx) => (
                    <button
                      key={idx}
                      className={`w-8 h-8 rounded-full outline-none focus:outline-none ${
                        social === 'twitter' ? 'bg-blue-400' :
                        social === 'facebook-f' ? 'bg-blue-600' :
                        social === 'google' ? 'bg-red-600' :
                        social === 'dribbble' ? 'bg-pink-500' :
                        social === 'instagram' ? 'bg-gray-800' : ''
                      } text-white`}
                      type="button"
                    >
                      <i className={`fab fa-${social}`}></i>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Team;
