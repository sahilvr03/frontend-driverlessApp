"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBadgeCheck, faShieldHalved, faMicrochip, faChartColumn,faVialVirus,faMagnifyingGlassArrowRight } from '@fortawesome/free-solid-svg-icons';

const Technologies = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
          <div className="space-y-8">
            <h2 className="text-5xl font-bold bg-gradient-to-r from-green-600 to-cyan-500 bg-clip-text text-transparent">
              Redefining Mobility with Autonomous Innovation
            </h2>
            <p className="text-xl text-gray-600">
              Experience the next generation of transportation with our AI-powered autonomous vehicles. 
              Safer, smarter, and sustainable mobility solutions engineered for tomorrow's cities.
            </p>
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <FontAwesomeIcon icon={faBadgeCheck} className="h-8 w-8 text-emerald-500" />
                <span className="text-lg font-semibold text-gray-800">24/7 Autonomous Operations</span>
              </div>
              <div className="flex items-center space-x-4">
                <FontAwesomeIcon icon={faShieldHalved} className="h-8 w-8 text-blue-500" />
                <span className="text-lg font-semibold text-gray-800">Military-grade Security Systems</span>
              </div>
              <div className="flex items-center space-x-4">
                <FontAwesomeIcon icon={faMicrochip} className="h-8 w-8 text-purple-500" />
                <span className="text-lg font-semibold text-gray-800">Deep Learning Navigation</span>
              </div>
            </div>
            <button className="bg-green-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
              Schedule a Demo →
            </button>
          </div>

          <div className="relative h-96 rounded-3xl overflow-hidden shadow-2xl">
            <Swiper
              pagination={{ clickable: true }}
              autoplay={{ delay: 3000 }}
              modules={[Pagination, Autoplay]}
              className="h-full"
            >
              <SwiperSlide>
                <Image 
                  src="/images/car.webp"
                  alt="Vehicle Interior"
                  fill
                  className="object-cover"
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image 
                  src="/images/car2.webp"
                  alt="AI Control Panel"
                  fill
                  className="object-cover"
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image 
                  src="/images/car1.webp"
                  alt="Night Driving"
                  fill
                  className="object-cover"
                />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <div className="bg-gradient-to-br from-white to-blue-50 p-8 rounded-2xl shadow-xl border border-blue-100">
            <FontAwesomeIcon icon={faChartColumn} className="h-12 w-12 text-blue-600 mb-6" />
            <h3 className="text-2xl font-bold mb-4">Proven Performance</h3>
            <p className="text-gray-600">
              99.99% operational accuracy with over 2 million autonomous miles logged 
              in urban environments
            </p>
          </div>

          <div className="bg-gradient-to-br from-white to-blue-50 p-8 rounded-2xl shadow-xl border border-blue-100">
          <FontAwesomeIcon icon={faMagnifyingGlassArrowRight} className="h-12 w-12 text-blue-600 mb-6" />

            <h3 className="text-2xl font-bold mb-4">Smart Infrastructure</h3>
            <p className="text-gray-600">
              Real-time V2X communication integrated with smart city ecosystems 
              for seamless navigation
            </p>
          </div>

          <div className="bg-gradient-to-br from-white to-blue-50 p-8 rounded-2xl shadow-xl border border-blue-100">
          <FontAwesomeIcon icon={faVialVirus} className="h-12 w-12 text-blue-600 mb-6" />

            <h3 className="text-2xl font-bold mb-4">Multi-sensor Fusion</h3>
            <p className="text-gray-600">
              LIDAR, RADAR, and 360° vision systems working in perfect harmony 
              for unmatched environmental awareness
            </p>
          </div>
        </div>

        {/* <div className="mt-24 border-t border-blue-100 pt-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Trusted by Industry Leaders
            </h3>
          </div>
          <div className="flex flex-wrap justify-center gap-16 items-center opacity-75">
            <Image src="/nvidia-logo.png" width={120} height={40} alt="NVIDIA" />
            <Image src="/bosch-logo.png" width={120} height={40} alt="Bosch" />
            <Image src="/aws-logo.png" width={120} height={40} alt="AWS" />
            <Image src="/here-maps-logo.png" width={120} height={40} alt="HERE Maps" />
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Technologies;