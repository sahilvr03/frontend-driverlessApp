"use client"

// pages/technology.js


import { faGlobe, faMicrochip, faSparkle, faShieldCheck, faChartBar,faPeopleLine,faDiagramPredecessor} from '@fortawesome/free-solid-svg-icons';
import { useEffect, useRef } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export default function TechnologyPage() {
    const videoRef = useRef(null);
    
      useEffect(() => {
        if (videoRef.current) {
          videoRef.current.playbackRate = 0.75;
        }
      }, []);


  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      {/* Hero Section */}
      <header className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-black/60 z-10" />
        <video 
          autoPlay 
          loop 
          muted 
          className="absolute inset-0 w-full h-full object-cover"
          src="/videos/video.mp4" // Replace with your video path
        />
        
        <div className="relative z-20 text-center px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in-up">
            Revolutionizing Mobility with 
            <span className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
              Autonomous Intelligence
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Pioneering the future of transportation through advanced AI, neural networks, and cutting-edge sensor technology
          </p>
        </div>
      </header>

      {/* Core Technologies Section */}
      <section className="py-20 px-4 lg:px-8 ">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-16 text-center">
            Our Technological Arsenal
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {[
              {
                icon: faGlobe,
                title: "3D LiDAR Mapping",
                description: "360° environmental perception with millimeter-wave precision using next-gen LiDAR arrays"
              },
              {
                icon: faMicrochip,
                title: "Neural Processing Units",
                description: "Custom-designed AI chips delivering 250 TOPS for real-time decision making"
              },
              {
                icon: faDiagramPredecessor,
                title: "Deep Reinforcement Learning",
                description: "Self-improving AI models trained on 50+ million virtual miles"
              },
              {
                icon: faPeopleLine,
                title: "Cybersecurity Shield",
                description: "Military-grade encryption and intrusion prevention systems"
              },
              {
                icon: faChartBar,
                title: "Predictive Analytics",
                description: "Real-time traffic forecasting with 98.7% accuracy"
              }
            ].map((tech, index) => (
              <div 
                key={index}
                className="p-8 rounded-2xl bg-gray-800/30 backdrop-blur-lg border border-gray-700 hover:border-blue-400 transition-all duration-300"
              >
                <FontAwesomeIcon 
                  icon={tech.icon} 
                  className="h-12 w-12 text-blue-400 mb-6" 
                />
                <h3 className="text-2xl font-bold mb-4">{tech.title}</h3>
                <p className="text-gray-400">{tech.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Innovation Spotlight */}
      <section className="py-20 bg-gradient-to-r from-gray-800 to-gray-900">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl font-bold mb-6">
                Redefining Autonomous Navigation
              </h2>
              <p className="text-xl text-gray-300">
                Our proprietary FusionDrive™ system integrates multiple sensor modalities with advanced temporal analysis, enabling:
              </p>
              <ul className="space-y-6">
                <li className="flex items-center space-x-4">
                  <div className="h-2 w-2 bg-blue-400 rounded-full" />
                  <span className="text-lg">200ms reaction time in complex urban environments</span>
                </li>
                <li className="flex items-center space-x-4">
                  <div className="h-2 w-2 bg-blue-400 rounded-full" />
                  <span className="text-lg">Sub-10cm localization accuracy</span>
                </li>
                <li className="flex items-center space-x-4">
                  <div className="h-2 w-2 bg-blue-400 rounded-full" />
                  <span className="text-lg">Energy-efficient routing reducing consumption by 22%</span>
                </li>
              </ul>
            </div>
            <div className="relative h-96 bg-gray-700 rounded-3xl overflow-hidden">
              {/* Add 3D visualization or interactive demo here */}
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
            </div>
          </div>
        </div>
      </section>

      {/* Safety & Reliability */} 
      <section className="py-20 px-4 lg:px-8 bg-gray-1000 ">
        <div className="max-w-7xl mx-auto text-center"> 
          <h2 className="text-4xl font-bold mb-6">Uncompromising Safety</h2>
          <p className="text-xl text-gray-300 mb-16 max-w-3xl mx-auto">
            Our multi-layered safety architecture exceeds automotive industry standards with redundant systems and continuous validation
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 ">
            <div className="p-8 bg-gray-800 rounded-2xl">
              <div className="text-5xl font-bold text-blue-400 mb-4">99.999%</div>
              <div className="text-gray-400">System uptime reliability</div>
            </div>
            <div className="p-8 bg-gray-800 rounded-2xl">
              <div className="text-5xl font-bold text-blue-400 mb-4">5.6M+</div>
              <div className="text-gray-400">Simulation hours validated</div>
            </div>
            <div className="p-8 bg-gray-800 rounded-2xl">
              <div className="text-5xl font-bold text-blue-400 mb-4">ISO 26262</div>
              <div className="text-gray-400">ASIL-D Certification</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      
    </div>
  );
}