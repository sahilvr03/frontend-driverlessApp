// import Image from 'next/image';
// import carImage from '../assets/Image/bg.webp'; // Ensure this path is correct

// const Section = () => {
//   return (
//     <section className="relative h-[90vh] overflow-hidden bg-gray-900 text-white">
//       {/* Fullscreen Background Video */}
//       <video
//         className="absolute top-0 left-0 w-full h-full object-cover transition-transform duration-700 transform hover:scale-105"
//         src="/videos/video.mp4" // Ensure this path is correct and the file exists in /public/videos/
//         autoPlay
//         loop
//         muted
//         playsInline
//         preload="auto"
//         aria-hidden="true"
//       />

//       {/* Overlay to Darken the Video */}
//       <div className="absolute inset-0 bg-black bg-opacity-10"></div>

//       {/* Content Container */}
//       <div className="relative z-10 max-w-7xl mx-auto h-full px-8 flex flex-col lg:flex-row justify-between items-center gap-8">
//         {/* Column 1: Heading and Car Image */}
//         <div className="flex flex-col gap-8 w-full lg:w-1/2">
//           {/* Heading Section */}
//           <div className="p-2">
//             <h1 className="text-4xl lg:text-5xl font-bold">
//               SELF DRIVE <br /> WEB-APP
//             </h1>
//           </div>
//           {/* Maybach Info Section */}
//           <div className="p-4 bg-gray-800 bg-opacity-70 rounded-md">
//             <h2 className="text-2xl font-semibold mb-4">SELF DRIVE WEB-APP</h2>
//             <p className="text-lg">
//               Elevate your driving experience with our cutting-edge self-drive solutions.
//               Acceleration 0-60 mph at 4.1 sec. Its 649 hp combines power and efficiency
//               for a thrilling yet sustainable driving experience.
//             </p>
//             <button className="mt-6 bg-gray-100 text-gray-900 py-2 px-6 rounded-full hover:bg-gray-300 transition">
//               Explore &rarr;
//             </button>
//           </div>
//         </div>

//         {/* Column 2: Video Section */}
//         <div className="flex flex-col gap-8 w-full lg:w-1/2 relative cursor-pointer">
//           {/* Background Video Section */}
//           <div className="relative overflow-hidden rounded-lg shadow-lg transition-all duration-500 ease-in-out transform hover:scale-105">
//             <video
//               className="w-full h-full object-cover"
//               src="/videos/bg.mp4" // Ensure this path is correct and the file exists in /public/videos/
//               autoPlay
//               loop
//               muted
//               playsInline
//               preload="auto"
//               aria-hidden="true"
//             />
//             {/* Next Video Slide Button */}
//             <div className="absolute inset-0 flex justify-center items-center opacity-0 hover:opacity-100 transition-opacity duration-300">
//               <button className="text-white text-3xl bg-gray-800 bg-opacity-50 p-3 rounded-full">
//                 &#8594; {/* Right Arrow */}
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Section;
"use client";

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useEffect, useRef } from 'react';

const STATS = [
  { label: 'Speed', value: '60 mph' },
  { label: 'Battery', value: '89%' },
  { label: 'Range', value: '328 mi' }
];

const Section = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.75;
    }
  }, []);

  return (
    <div className="relative min-h-[90vh]  overflow-hidden bg-black flex items-center justify-center">
      {/* Background Video */}
      <div className="absolute inset-0 overflow-hidden">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="h-full w-full object-cover"
        >
          <source
            src="/videos/video.mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-black/60 backdrop-blur-[0px]" />
      </div>

      {/* Glow Effects */}
      <div className="absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-[#00ff9d] opacity-20 blur-[100px]" />
      <div className="absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full bg-[#00ff9d] opacity-20 blur-[100px]" />

      {/* Animated Lines */}
      <div className="absolute inset-0 opacity-30">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute h-[2px] w-full transform animate-[scan_2s_linear_infinite]"
            style={{
              top: `${i * 5}%`,
              left: '-100%',
              background: 'linear-gradient(90deg, transparent, #00ff9d, transparent)',
              animationDelay: `${i * 0.1}s`,
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center items-center ">
        <div className="grid min-h-full grid-cols-1 items-center gap-12 lg:grid-cols-2">
          {/* Left Side Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl"
            >
              SELF DRIVE
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="block text-[#00ff9d]"
              >
                WEB-APP
              </motion.span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-lg text-gray-300"
            >
              Elevate your driving experience with our cutting-edge self-drive solutions. 
              Acceleration 0-60 mph at 4.1 sec. Its 649 hp combines power and efficiency 
              for a thrilling yet sustainable driving experience.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <button className="group relative inline-flex items-center justify-center overflow-hidden rounded-lg bg-[#00ff9d] px-8 py-3 font-medium text-black transition duration-300 ease-out hover:scale-105">
                <span className="absolute inset-0 h-full w-full scale-0 transform bg-white transition-transform duration-300 ease-out group-hover:scale-100" />
                <span className="relative flex items-center gap-2">
                   <ArrowRight className="h-4 w-4" />
                </span>
              </button>
            </motion.div>
          </motion.div>

          {/* Right Side Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative h-[400px] w-full rounded-lg bg-gradient-to-r from-gray-900 to-black p-2"
          >
            <div className="relative h-full w-full overflow-hidden rounded-lg">
              <video
                autoPlay
                muted
                loop
                playsInline
                className="h-full w-full object-cover"
              >
                <source
                  src="/videos/repo1.mp4"
                  type="video/mp4"
                />
              </video>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1 }}
                className="absolute bottom-4 left-4 right-4"
              >
                <div className="mb-4 flex items-center gap-4">
                  <div className="h-3 w-3 animate-pulse rounded-full bg-[#00ff9d]" />
                  <span className="text-sm text-[#00ff9d]">System Active</span>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  {STATS.map((stat, index) => (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
                    >
                      <div className="rounded-md bg-black/40 p-3 backdrop-blur-sm">
                        <p className="text-xs text-gray-400">{stat.label}</p>
                        <p className="text-lg font-semibold text-white">{stat.value}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Section;
