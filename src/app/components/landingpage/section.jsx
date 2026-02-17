"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

const Section = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setIsVisible(true);
    
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      
      // Calculate offset from center (max 20px movement)
      const moveX = (clientX - centerX) * 0.02;
      const moveY = (clientY - centerY) * 0.02;
      
      setMousePosition({ x: moveX, y: moveY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50">
      
      {/* Animated Background NCAI Text */}
      <div 
        className="absolute inset-0 flex items-center justify-center pointer-events-none "
        style={{
          transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
          transition: 'transform 0.1s ease-out'
        }}
      >
        <span className="text-[9rem] sm:text-[15rem] md:text-[25rem] lg:text-[35rem] xl:text-[45rem] font-extrabold text-blue-200 select-none animate-pulse-slow ">
          NCAI
        </span>
      </div>

      {/* Floating Particles Effect */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-blue-400/20 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${10 + Math.random() * 10}s`
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto  px-4 sm:px-6 lg:px-12 min-h-screen flex items-center">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-14 items-center w-full">

          {/* Left Text - Mobile Optimized */}
          <div
            className={`transform transition-all duration-1000 text-center lg:text-left ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "-translate-x-20 opacity-0"
            }`}
          >
            {/* Heading - Responsive Text Sizes */}
            <h1 className="text-5xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold   sm:mb-6 leading-tight">
              <span className="text-slate-900">Autonomous</span>
              <br />
              <span className="bg-gradient-to-r from-red-600 to-red-500 bg-clip-text text-transparent inline-block animate-gradient">
                Drive System
              </span>
            </h1>

            {/* Description - Adjusted for mobile */}
            <p className="text-base sm:text-lg md:text-xl text-slate-700 mb-6 sm:mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed px-2 sm:px-0">
              A next-generation autonomous driving platform powered by AI and
              advanced sensor fusion for unmatched safety and performance.
            </p>

            {/* CTA Buttons - Stack on mobile */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8 sm:mb-12 justify-center lg:justify-start px-4 sm:px-0">
              <button className="px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-red-600 text-white font-semibold transition-all duration-300 hover:bg-blue-700 hover:shadow-lg hover:scale-105 active:scale-95">
                Get Started
              </button>
              <button className="px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-white text-slate-800 font-semibold border border-slate-300 hover:bg-slate-100 transition-all duration-300 hover:scale-105 active:scale-95">
                Watch Demo
              </button>
            </div>

            {/* Stats - Responsive grid */}
            <div className="flex flex-wrap gap-6 sm:gap-10 justify-center lg:justify-start">
              <div className="text-center sm:text-left">
                <div className="text-2xl sm:text-3xl font-bold text-red-900">99.9%</div>
                <div className="text-xs sm:text-sm text-slate-500">Safety Rating</div>
              </div>

              <div className="text-center sm:text-left">
                <div className="text-2xl sm:text-3xl font-bold text-red-900">24/7</div>
                <div className="text-xs sm:text-sm text-slate-500">AI Monitoring</div>
              </div>

              <div className="text-center sm:text-left">
                <div className="text-2xl sm:text-3xl font-bold text-red-900">Zero</div>
                <div className="text-xs sm:text-sm text-slate-500">Emissions</div>
              </div>
            </div>
          </div>

          {/* Right Side - Mobile Optimized */}
          <div className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] xl:h-[700px] flex items-center justify-center overflow-hidden order-first lg:order-last mt-10">
            <div className="relative w-full h-full animate-float-slow">
              <Image
                src="/car3d.png"
                alt="3D Autonomous Car"
                width={600}
                height={600}
                className="object-contain w-full h-full p-4 sm:p-6 mix-blend-multiply hover:scale-105 transition-transform duration-500"
                priority
              />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator - Hidden on very small screens */}
      <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden sm:block">
        <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-slate-400 rounded-full flex justify-center">
          <div className="w-1 h-1.5 sm:h-2 bg-slate-500 rounded-full mt-2 animate-scroll"></div>
        </div>
      </div>

      {/* Global Styles for Animations */}
      <style jsx global>{`
        @keyframes scroll {
          0% { transform: translateY(0); opacity: 1; }
          100% { transform: translateY(15px); opacity: 0; }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0) translateX(0); }
          25% { transform: translateY(-20px) translateX(10px); }
          50% { transform: translateY(-10px) translateX(-10px); }
          75% { transform: translateY(-30px) translateX(5px); }
        }

        @keyframes float-slow {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(2deg); }
        }

        @keyframes pulse-slow {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.5; }
        }

        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        .animate-scroll {
          animation: scroll 2s ease-in-out infinite;
        }

        .animate-float {
          animation: float linear infinite;
        }

        .animate-float-slow {
          animation: float-slow 6s ease-in-out infinite;
        }

        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }

        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </section>
  );
};

export default Section;