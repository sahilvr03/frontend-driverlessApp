"use client";
import React, { useState, useEffect, useRef } from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import Image from "next/image";
import { motion, useInView } from "framer-motion";

const Achievements = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStartX, setDragStartX] = useState(0);
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

  const achievementsPerPage = isMobile ? 1 : 3;
  const maxIndex = Math.max(0, achievementsData.length - achievementsPerPage);

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

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(prev + achievementsPerPage, maxIndex));
  };

  const handlePrevious = () => {
    setCurrentIndex((prev) => Math.max(prev - achievementsPerPage, 0));
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.6 },
    }),
  };

  return (
    <section
      ref={sectionRef}
      className="relative py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-400">
            Engineering Milestones
          </h2>
          <p className="text-lg text-gray-300 mt-2">
            Pioneering advancements in autonomous vehicle technology
          </p>
        </motion.div>

        <div className="relative">
          <div className="flex items-center justify-between">
            <button
              onClick={handlePrevious}
              className={`p-3 rounded-full bg-teal-500/20 hover:bg-teal-500/40 transition-all ${currentIndex === 0 ? "opacity-40 cursor-not-allowed" : ""}`}
              disabled={currentIndex === 0}
            >
              <AiOutlineLeft className="text-white text-2xl" />
            </button>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mx-4">
              {achievementsData
                .slice(currentIndex, currentIndex + achievementsPerPage)
                .map((achievement, i) => (
                  <motion.div
                    key={i}
                    custom={i}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    variants={cardVariants}
                    className="bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all"
                  >
                    <div className="relative h-48 rounded-lg overflow-hidden">
                      <Image
                        src={achievement.image}
                        alt={achievement.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <h3 className="text-xl font-semibold mt-4 text-teal-300">
                      {achievement.title}
                    </h3>
                    <p className="text-gray-400 mt-2 text-sm">
                      {achievement.description}
                    </p>
                    <div className="mt-4 flex items-center space-x-1">
                      {[...Array(5)].map((_, idx) => (
                        <div
                          key={idx}
                          className={`w-3 h-3 rounded-full ${idx < achievement.rating ? "bg-teal-400" : "bg-gray-600"}`}
                        />
                      ))}
                    </div>
                  </motion.div>
                ))}
            </div>
            <button
              onClick={handleNext}
              className={`p-3 rounded-full bg-teal-500/20 hover:bg-teal-500/40 transition-all ${currentIndex >= maxIndex ? "opacity-40 cursor-not-allowed" : ""}`}
              disabled={currentIndex >= maxIndex}
            >
              <AiOutlineRight className="text-white text-2xl" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
