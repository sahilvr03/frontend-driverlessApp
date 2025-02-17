"use client";
import React, { useState, useEffect, useRef } from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import Image from "next/image";
import { motion, useInView } from 'framer-motion';

const Achievements = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animationClasses, setAnimationClasses] = useState([]);
  const [isVisible, setIsVisible] = useState(false); // Track visibility
  // const achievementsPerPage = 4;
  const scrollRef = useRef(null);
  const achievementsSectionRef = useRef(null); // Ref for the achievements section
 
  const [isDragging, setIsDragging] = useState(false);
  const [dragStartX, setDragStartX] = useState(0);
  const achievementsRef = useRef(null);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  

 



  

  const achievementsData = [
    {
      title: "Vehicle Control Integration",
      description:
        "Implemented MPC controllers for accurate path following and dynamic speed adjustments based on lane curvature.",
        image: "/images/achieve.jpg",
      rating: 4,
    },
    {
      title: "Lane Detection",
      description:
        "Integrated OpenVINO and PyTorch models for real-time lane detection, enabling the generation of trajectories for the vehicle to follow.",
      image: "/images/achieve.jpg",
      rating: 4,
    },
    {
      title: "Vehicle Localization",
      description:
        "Utilized CARLA waypoints and GPS GNSS, transforming them into the vehicle's reference frame for precise navigation.",
        image: "/images/achieve.jpg",
      rating: 4,
    },
    {
      title: "Emergency Features",
      description:
        "Integrated automatic vehicle stop features to ensure safety during lane detection failures or potential accidents.",
        image: "/images/achieve.jpg",
      rating: 3,
    },
    {
      title: "Model Predictive Control (MPC)",
      description:
        "Implemented an MPC controller for dynamic path tracking with receding horizon optimization.",
        image: "/images/achieve.jpg",
      rating: 4,
    },
    {
      title: "Real-Time Path Following",
      description:
        "Developed a system where the vehicle adjusts speed and steering to follow the reference path dynamically.",
        image: "/images/achieve.jpg",
      rating: 4,
    },
    {
      title: "Safe Overtaking Maneuvers (Lane change)",
      description:
        "Developed path adjustments for safe overtaking of stationary vehicles within the simulation.",
        image: "/images/achieve.jpg",
        rating: 3,
    },
    {
      title: "Waypoints & Path Visualization",
      description:
        "Visualized waypoints and paths in real-time within the simulation for enhanced user experience.",
        image: "/images/achieve.jpg",
        rating: 4,
    },
    {
      title: "Vehicle Control & Automatic Emergency Braking",
      description:
        "Implemented an MPC controller for smooth vehicle control and an Automatic Emergency Braking (AEB) system when the ego vehicle approaches a target too closely.",
        image: "/images/achieve.jpg",
        rating: 5,
    },
    {
      title: "GPS-based Navigation & Camera Integration",
      description:
        "Created a GPS-based navigation system using a semantic segmentation camera to collect environment data and adjust steering based on waypoints.",
        image: "/images/achieve.jpg",
        rating: 3,
    },
    {
      title: "Radar Integration",
      description:
        "Integrated a radar sensor to detect nearby obstacles, applying the brake on obstacle detection.",
        image: "/images/achieve.jpg",
        rating: 4,
    },
    {
      title: "Traffic Light Interaction",
      description:
        "Developed functional interaction logic with traffic lights, applying the brake when red signals are detected, steering on green, and slowing down on yellow light detection.",
        image: "/images/achieve.jpg",
        rating: 3,
    },
  ];
  const achievementsPerPage = isMobile ? 1 : 4;
  const maxIndex = Math.max(0, achievementsData.length - achievementsPerPage);

 

  // Responsive handling
  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      if (mobile !== isMobile) setCurrentIndex(0);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isMobile]);

  // Touch/drag handling
  const handleDragStart = (e) => {
    setIsDragging(true);
    setDragStartX(e.clientX || e.touches[0].clientX);
  };

  const handleDragEnd = (e) => {
    if (!isDragging) return;
    setIsDragging(false);
    
    const endX = e.clientX || e.changedTouches[0].clientX;
    const deltaX = dragStartX - endX;

    if (Math.abs(deltaX) > 30) {
      deltaX > 0 ? handleNext() : handlePrevious();
    }
  };

  // Navigation controls
  const handleNext = () => {
    setCurrentIndex(prev => Math.min(prev + achievementsPerPage, maxIndex));
  };

  const handlePrevious = () => {
    setCurrentIndex(prev => Math.max(prev - achievementsPerPage, 0));
  };

  // Animation variants
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.6 }
    })
  };

  return (
    <section 
      ref={sectionRef}
      className="relative py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400 mb-4">
            Engineering Milestones
          </h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Pioneering advancements in autonomous vehicle technology through innovative solutions
          </p>
        </motion.div>

        <div 
          className="relative group"
          onMouseDown={handleDragStart}
          onMouseUp={handleDragEnd}
          onTouchStart={handleDragStart}
          onTouchEnd={handleDragEnd}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/50 via-transparent to-slate-900/50 z-20 pointer-events-none" />

          <div 
            ref={achievementsRef}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative"
          >
            {achievementsData
              .slice(currentIndex, currentIndex + achievementsPerPage)
              .map((achievement, i) => (
                <motion.div
                  key={i}
                  custom={i}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                  variants={cardVariants}
                  className="relative bg-white/5 rounded-2xl p-6 border border-slate-700/50 hover:border-emerald-400/30 transition-all duration-300 shadow-2xl hover:shadow-emerald-500/10">
                <div className="relative h-52 rounded-xl overflow-hidden">
                  <Image
                    src={achievement.image}
                    alt={achievement.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent" />
                  <div className="absolute bottom-4 left-4 flex items-center space-x-1">
                    {[...Array(5)].map((_, idx) => (
                      <div
                        key={idx}
                        className={`w-2 h-2 rounded-full ${idx < achievement.rating ? 'bg-emerald-400' : 'bg-slate-600'}`}
                      />
                    ))}
                  </div>
                </div>
                <h3 className="text-xl font-semibold mt-5 mb-3 bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                  {achievement.title}
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed font-light">
                  {achievement.description}
                </p>
                <div className="absolute top-4 right-4 flex items-center justify-center w-10 h-10 rounded-full bg-slate-800/50 backdrop-blur-sm text-emerald-400 font-bold text-sm">
                  0{i + 1}
                </div>
              </motion.div>
            ))}
        </div>

       {/* Improved Navigation Buttons */}
       <div className="absolute top-1/2 -translate-y-1/2 w-full flex justify-between px-4 pointer-events-none">
            <button
              className={`p-3 rounded-full bg-emerald-400/10 backdrop-blur-lg hover:bg-emerald-400/20 transition-all pointer-events-auto 
                ${currentIndex === 0 ? 'opacity-40 cursor-not-allowed hover:bg-emerald-400/10' : 'hover:scale-110'}`}
              onClick={handlePrevious}
              disabled={currentIndex === 0}
              aria-label="Previous achievements"
            >
              <AiOutlineLeft className="text-2xl text-emerald-400" />
            </button>
            
            <button
              className={`p-3 rounded-full bg-emerald-400/10 backdrop-blur-lg hover:bg-emerald-400/20 transition-all pointer-events-auto 
                ${currentIndex === maxIndex ? 'opacity-40 cursor-not-allowed hover:bg-emerald-400/10' : 'hover:scale-110'}`}
              onClick={handleNext}
              disabled={currentIndex === maxIndex}
              aria-label="Next achievements"
            >
              <AiOutlineRight className="text-2xl text-emerald-400" />
            </button>
          </div>
        </div>

        {/* Enhanced Progress Indicators */}
        <div className="flex justify-center mt-12 space-x-2">
          {Array.from({ length: Math.ceil(achievementsData.length / achievementsPerPage) }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx * achievementsPerPage)}
              className={`h-2 rounded-full transition-all duration-300 ${
                currentIndex === idx * achievementsPerPage 
                  ? 'bg-emerald-400 w-8' 
                  : 'bg-slate-600 w-4 hover:w-6'
              }`}
              aria-label={`Go to page ${idx + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 -left-48 w-96 h-96 bg-emerald-400/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-32 -right-48 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>
    </section>
  );
};

export default Achievements;
