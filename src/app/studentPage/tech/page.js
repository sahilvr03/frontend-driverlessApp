"use client";

import { faGlobe, faMicrochip, faChartBar, faPeopleLine, faDiagramPredecessor } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ArrowRight, ChevronDown } from 'lucide-react';

export default function TechnologyPage() {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.75;
    }
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-100 text-gray-900 ">
      {/* Hero Section */}
      <header className="relative h-screen overflow-hidden">
      <video
        autoPlay
        loop
        muted
        className="absolute inset-0 w-full h-full object-cover"
        src="/videos/video.mp4"
        />
 
        
        {/* Overlay with noise texture */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/90 via-slate-900/80 to-slate-900/90" 
           
        />

        {/* Content Container */}
        <div className="absolute inset-0 flex flex-col items-center justify-center px-4">
          {/* Floating Elements */}
          <div className="absolute top-20 left-20 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl animate-pulse"/>
          <div className="absolute bottom-20 right-20 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-700"/>
          
          {/* Main Content */}
          <div className="relative text-center max-w-7xl mx-auto">
            <p className="text-blue-400 font-medium mb-4 tracking-wider animate-fade-in-down">
              WELCOME TO THE FUTURE
            </p>
            
            <h1 className="text-6xl md:text-8xl font-bold mb-8 text-white tracking-tight">
              <span className="inline-block animate-fade-in-down [animation-delay:200ms]">
                Revolutionizing
              </span>
              <br />
              <span className="inline-block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient animate-fade-in-down [animation-delay:400ms]">
                Autonomous Tech
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in-down [animation-delay:600ms]">
              Experience the convergence of artificial intelligence and cutting-edge robotics, 
              creating a future where autonomous systems enhance every aspect of our lives.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in-down [animation-delay:800ms]">
              <a href="#explore" className="group">
                <div className="relative px-8 py-4 bg-white text-slate-900 rounded-full font-semibold 
                              flex items-center gap-2 transform hover:scale-105 transition-all duration-300
                              shadow-[0_0_40px_rgba(255,255,255,0.2)] hover:shadow-[0_0_80px_rgba(255,255,255,0.3)]">
                  Explore Technology
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform"/>
                </div>
              </a>
              
              <a href="#contact" className="px-8 py-4 text-white rounded-full font-semibold
                                         border border-white/20 hover:bg-white/10 backdrop-blur-sm
                                         transition-all duration-300">
                Get in Touch
              </a>
            </div>
          </div>
          
          {/* Scroll Indicator */}
          <div className="absolute bottom-12 flex flex-col items-center animate-fade-in-down [animation-delay:1000ms]">
            <p className="text-white/60 text-sm mb-2">Scroll to Explore</p>
            <ChevronDown className="text-white/60 w-6 h-6 animate-bounce"/>
          </div>
        </div>
      </header>
      {/* Core Technologies Section */}
      <section className="py-20 px-4 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-16 text-center">Our Technological Arsenal</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {[{ icon: faGlobe, title: "3D LiDAR Mapping", description: "360° environmental perception with millimeter-wave precision using next-gen LiDAR arrays" }, 
              { icon: faMicrochip, title: "Neural Processing Units", description: "Custom-designed AI chips delivering 250 TOPS for real-time decision making" }, 
              { icon: faDiagramPredecessor, title: "Deep Reinforcement Learning", description: "Self-improving AI models trained on 50+ million virtual miles" }, 
              { icon: faPeopleLine, title: "Cybersecurity Shield", description: "Military-grade encryption and intrusion prevention systems" }, 
              { icon: faChartBar, title: "Predictive Analytics", description: "Real-time traffic forecasting with 98.7% accuracy" }
            ].map((tech, index) => (
              <div
                key={index}
                className="p-8 rounded-2xl bg-white shadow-xl border border-gray-300 hover:border-blue-500 transition-all duration-300"
              >
                <FontAwesomeIcon icon={tech.icon} className="h-12 w-12 text-blue-500 mb-6" />
                <h3 className="text-2xl font-bold mb-4">{tech.title}</h3>
                <p className="text-gray-600">{tech.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Innovation Spotlight */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-teal-50">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl font-bold mb-6">Redefining Autonomous Navigation</h2>
              <p className="text-xl text-gray-700">
                Our proprietary FusionDrive™ system integrates multiple sensor modalities with advanced temporal analysis, enabling:
              </p>
              <ul className="space-y-6">
                <li className="flex items-center space-x-4">
                  <div className="h-2 w-2 bg-blue-500 rounded-full" />
                  <span className="text-lg">200ms reaction time in complex urban environments</span>
                </li>
                <li className="flex items-center space-x-4">
                  <div className="h-2 w-2 bg-blue-500 rounded-full" />
                  <span className="text-lg">Sub-10cm localization accuracy</span>
                </li>
                <li className="flex items-center space-x-4">
                  <div className="h-2 w-2 bg-blue-500 rounded-full" />
                  <span className="text-lg">Energy-efficient routing reducing consumption by 22%</span>
                </li>
              </ul>
            </div>
            <div className="relative h-96 bg-gray-300 rounded-3xl overflow-hidden shadow-lg">
              <video autoPlay muted loop playsInline className="h-full w-full object-cover">
                <source src="/videos/repo1.mp4" type="video/mp4" />
              </video>
              <div className="absolute inset-0 " /> {/* Add black opacity overlay */}
            </div>
          </div>
        </div>
      </section>

      {/* Safety & Reliability */}
      <section className="py-20 px-4 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Uncompromising Safety</h2>
          <p className="text-xl text-gray-700 mb-16 max-w-3xl mx-auto">
            Our multi-layered safety architecture exceeds automotive industry standards with redundant systems and continuous validation.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 bg-gray-100 rounded-2xl shadow-lg">
              <div className="text-5xl font-bold text-blue-500 mb-4">99.999%</div>
              <div className="text-gray-600">System uptime reliability</div>
            </div>
            <div className="p-8 bg-gray-100 rounded-2xl shadow-lg">
              <div className="text-5xl font-bold text-blue-500 mb-4">5.6M+</div>
              <div className="text-gray-600">Simulation hours validated</div>
            </div>
            <div className="p-8 bg-gray-100 rounded-2xl shadow-lg">
              <div className="text-5xl font-bold text-blue-500 mb-4">ISO 26262</div>
              <div className="text-gray-600">ASIL-D Certification</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
