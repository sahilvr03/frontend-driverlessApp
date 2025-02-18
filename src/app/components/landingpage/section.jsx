"use client";

import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer'; // Importing the hook

const Section = () => {
  const STATS = [
    { label: 'Speed', value: '60 mph' },
    { label: 'Battery', value: '89%' },
    { label: 'Range', value: '328 mi' }
  ];

  const { ref, inView } = useInView({
    triggerOnce: true,  // Only trigger once when in view
    threshold: 0.5,  // Only trigger when 50% of the section is visible
  });

  useEffect(() => {
    if (inView) {
      const script = document.createElement('script');
      script.src = "https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js";
      script.onload = () => {
        window.particlesJS('particles-container', {
          particles: {
            number: { value: 120, density: { enable: true, value_area: 1200 } },
            color: { value: "#00ff9d" },
            shape: { type: "circle" },
            opacity: { value: 0.6, random: true },
            size: { value: 2.5, random: { enable: true, minimumValue: 1 } },
            line_linked: {
              enable: true,
              distance: 140,
              color: "#00ff9d",
              opacity: 0.4,
              width: 1
            },
            move: {
              enable: true,
              speed: 12,
              direction: "none",
              random: true,
              straight: false,
              out_mode: "out",
              bounce: false,
            }
          },
          interactivity: {
            detect_on: "window",
            events: {
              onhover: { enable: true, mode: "repulse" },
              resize: true
            },
            modes: {
              repulse: { distance: 100, duration: 0.4 },
              push: { particles_nb: 9 }
            }
          },
          retina_detect: true
        });
      };
      document.body.appendChild(script);

      return () => document.body.removeChild(script);
    }
  }, [inView]);  // Trigger the effect when the section comes into view

  return (
    <div ref={ref} className="relative min-h-screen bg-black overflow-hidden">
      <div 
        id="particles-container" 
        className="absolute inset-0 bg-black"
        style={{ zIndex: 1 }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-24 h-screen flex flex-col lg:flex-row items-center justify-between gap-8">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="w-full lg:w-1/2 space-y-8 relative"
          style={{ pointerEvents: 'auto' }}
        >
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-[#00ff9d] rounded-full blur-3xl opacity-20" />
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              <span className="block mb-4">AUTONOMOUS</span>
              <span className="text-[#00ff9d] neon-pulse relative inline-block">
                DRIVE SYSTEM
                <span className="absolute -bottom-2 left-0 w-full h-1 bg-[#00ff9d] blur-md opacity-50" />
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 max-w-2xl leading-relaxed">
              Next-generation autonomous driving platform powered by AI and advanced sensor fusion.
              Experience unparalleled safety and performance with our neural network-driven technology.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="w-full lg:w-1/2 relative"
          style={{ pointerEvents: 'auto' }}
        >
          <div className="relative max-h-[200px] h-[200px] md:h-[400px] w-full md:max-h-[400px] rounded-2xl bg-gradient-to-br from-gray-900 via-black to-gray-900 p-1.5 shadow-2xl">
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#00ff9d]/30 to-[#00ff9d]/5 blur-xl" />
            <div className="relative h-full w-full overflow-hidden rounded-xl">
              <video
                autoPlay
                muted
                loop
                playsInline
                className="h-full w-full object-cover scale-105"
              >
                <source src="/videos/repo1.mp4" type="video/mp4" />
              </video>
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1 }}
                className="absolute bottom-6 left-6 right-6"
              >
                <div className="mb-4 flex items-center gap-4">
                  <div className="h-3 w-3 animate-pulse rounded-full bg-[#00ff9d] shadow-glow" />
                  <span className="text-sm text-[#00ff9d] font-medium tracking-wide">
                    System Active
                  </span>
                </div>
                <div className="grid grid-cols-3  md:grid-cols-3 gap-4">
                  {STATS.map((stat, index) => (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
                    >
                      <div className="rounded-xl bg-black/40 p-1 md:p-4 backdrop-blur-sm border border-[#00ff9d]/20 hover:border-[#00ff9d]/40 transition-all duration-300">
                        <p className="text-xs text-[#00ff9d]/80 mb-1">{stat.label}</p>
                        <p className="text-xs md:text-xl font-bold text-white">{stat.value}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="absolute top-1/2 -right-32 w-[800px] h-[800px] bg-[#00ff9d] rounded-full opacity-5 blur-[100px]" />

      <style jsx global>{`
        #particles-container {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }

        .neon-pulse {
          animation: neonPulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }

        .shadow-glow {
          filter: drop-shadow(0 0 6px #00ff9d);
        }

        @keyframes neonPulse {
          0%, 100% { text-shadow: 0 0 10px #00ff9d55; }
          50% { text-shadow: 0 0 20px #00ff9d, 0 0 30px #00ff9d; }
        }
      `}</style>
    </div>
  );
};

export default Section;
