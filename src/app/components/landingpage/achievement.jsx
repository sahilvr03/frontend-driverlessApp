"use client";
import React, { useState, useEffect, useRef } from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import Image from "next/image";

const Achievements = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animationClasses, setAnimationClasses] = useState([]);
  const [isVisible, setIsVisible] = useState(false); // Track visibility
  const achievementsPerPage = 4;
  const scrollRef = useRef(null);
  const achievementsSectionRef = useRef(null); // Ref for the achievements section

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
  const maxIndex = Math.max(0, achievementsData.length - achievementsPerPage);

  const handleResize = () => {
    setIsMobile(window.innerWidth < 768);
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleNext = () => {
    setCurrentIndex((prev) =>
      Math.min(prev + achievementsPerPage, maxIndex)
    );
  };

  const handlePrevious = () => {
    setCurrentIndex((prev) => Math.max(prev - achievementsPerPage, 0));
  };

  // Detect visibility of the achievements section using IntersectionObserver
  useEffect(() => {
    const options = {
      root: null, // Observe in the viewport
      rootMargin: "0px",
      threshold: 0.5, // Trigger when 50% of the section is in view
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      options
    );

    if (achievementsSectionRef.current) {
      observer.observe(achievementsSectionRef.current);
    }

    return () => {
      if (achievementsSectionRef.current) {
        observer.unobserve(achievementsSectionRef.current);
      }
    };
  }, []);

  // Handle animation classes when section becomes visible
  useEffect(() => {
    if (!isMobile && isVisible) {
      setAnimationClasses([
        "animate-slide-right",
        "animate-slide-top",
        "animate-slide-bottom",
        "animate-slide-left",
      ]);
    } else {
      setAnimationClasses([]);
    }
  }, [isVisible, isMobile, currentIndex]);

  return (
    <section
      ref={achievementsSectionRef}
      className="bg-gray-100 py-8"
    >
      <h2 className="text-3xl font-bold text-center mb-8">Our Achievements</h2>
      <div className="relative">
        {isMobile ? (
          // Mobile Layout: Scrollable
          <div
            ref={scrollRef}
            className="flex space-x-4 overflow-x-auto scrollbar-hide p-4"
            style={{ scrollBehavior: "smooth" }}
          >
            {achievementsData.map((achievement, index) => (
              <div
                key={index}
                className="max-w-[300px] bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow flex-shrink-0"
              >
                <Image
                  src={achievement.image}
                  alt={`${achievement.title} Image`}
                  className="w-full h-40 object-cover rounded-md mb-4"
                  height={92}
                  width={82}
                />
                <h3 className="text-xl font-semibold mb-4">
                  {achievement.title}
                </h3>
                <p className="text-gray-700 mb-4">{achievement.description}</p>
                <div className="flex">
                {Array.from({ length: 5 }).map((_, starIndex) => {
                  const filled = starIndex < (achievement.rating || 0);  // Default to 0 if rating is undefined
                  return (
                    <svg
                      key={starIndex}
                      xmlns="http://www.w3.org/2000/svg"
                      fill={filled ? "gold" : "none"}
                      viewBox="0 0 24 24"
                      stroke="gold"
                      strokeWidth={2}
                      className="w-5 h-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 17.75l-5.447 2.86c-.563.296-1.232-.17-1.122-.776l1.034-5.723L2.11 8.932c-.516-.515-.246-1.384.495-1.522l5.771-.838L9.5.694c.262-.533.896-.533 1.157 0l2.412 5.877 5.771.838c.741.138 1.011 1.007.495 1.522l-4.477 4.97 1.034 5.723c.11.605-.559 1.072-1.122.776L12 17.75z"
                      />
                    </svg>
                  );
                })}
              </div>

              </div>
            ))}
          </div>
        ) : (
          // Desktop Layout: Paginated with Transitions
          <div className="flex items-center">
            <button
              className="p-2 bg-gray-200 rounded-full hover:bg-gray-300"
              onClick={handlePrevious}
              disabled={currentIndex === 0}
            >
              <AiOutlineLeft className="text-gray-600 text-xl" />
            </button>
            <div className="grid grid-cols-4 gap-4 flex-grow p-4">
              {achievementsData
                .slice(currentIndex, currentIndex + achievementsPerPage)
                .map((achievement, index) => (
                  <div
                    key={index}
                    className={`bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow ${
                      isVisible ? animationClasses[index] : ""
                    }`}
                  >
                    <Image
                      src={achievement.image}
                      alt={`${achievement.title} Image`}
                      className="w-full h-40 object-cover rounded-md mb-4"
                        height={92}
                  width={82}
                    />
                    <h3 className="text-xl font-semibold mb-4">
                      {achievement.title}
                    </h3>
                    <p className="text-gray-700 mb-4">
                      {achievement.description}
                    </p>
                    <div className="flex">
                    {Array.from({ length: 5 }).map((_, starIndex) => {
                      const filled = starIndex < (achievement.rating || 0);  // Default to 0 if rating is undefined
                      return (
                        <svg
                          key={starIndex}
                          xmlns="http://www.w3.org/2000/svg"
                          fill={filled ? "gold" : "none"}
                          viewBox="0 0 24 24"
                          stroke="gold"
                          strokeWidth={2}
                          className="w-5 h-5"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 17.75l-5.447 2.86c-.563.296-1.232-.17-1.122-.776l1.034-5.723L2.11 8.932c-.516-.515-.246-1.384.495-1.522l5.771-.838L9.5.694c.262-.533.896-.533 1.157 0l2.412 5.877 5.771.838c.741.138 1.011 1.007.495 1.522l-4.477 4.97 1.034 5.723c.11.605-.559 1.072-1.122.776L12 17.75z"
                          />
                        </svg>
                      );
                    })}
                  </div>

                  </div>
                ))}
            </div>
            <button
              className="p-2 bg-gray-200 rounded-full hover:bg-gray-300"
              onClick={handleNext}
              disabled={currentIndex === maxIndex}
            >
              <AiOutlineRight className="text-gray-600 text-xl" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Achievements;
