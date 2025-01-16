"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";

const Technologies = () => {
  return (
    <section
      id="Technology"
      className="py-16 bg-gray-100 relative overflow-hidden"
    >
        <h2 className="text-5xl font-extrabold justify-self-center text-black mb-16">Technologies</h2>
      <div className="container mx-auto px-6 md:px-12 text-center relative z-10">
        
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          modules={[Pagination, Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="bg-white p-8 cursor-pointer mb-2 rounded-2xl shadow-lg transition-all duration-500 ease-in-out transform hover:scale-105 hover:shadow-2xl">
              <Image
                width={500}
                height={200}
                src="/images/lidar.jpeg"
                alt="LiDAR"
                className="w-full h-[200px] object-contain rounded-lg border-4 border-solid border-gray-200"
              />
              <h3 className="text-2xl font-semibold mt-6 text-gray-800">LiDAR</h3>
              <p className="text-gray-600 mt-2">
                Light Detection and Ranging technology for high precision mapping. Light Detection and Ranging technology.
              </p>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="bg-white p-8 rounded-2xl cursor-pointer shadow-lg transition-all duration-500 ease-in-out transform hover:scale-105 hover:shadow-2xl">
              <Image
                width={500}
                height={200}
                src="/images/zedi2.jpeg"
                alt="Zedi2 Camera"
                className="w-full h-[200px] object-contain rounded-lg border-4 border-solid border-gray-200"
              />
              <h3 className="text-2xl font-semibold mt-6 text-gray-800">Zedi2 Camera</h3>
              <p className="text-gray-600 mt-2">
                Lightweight Camera Stabilizer for Zed Mini camera - Video Stabilized Controllable Camera Stabilizer.
              </p>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="bg-white p-8 rounded-2xl cursor-pointer shadow-lg transition-all duration-500 ease-in-out transform hover:scale-105 hover:shadow-2xl">
              <Image
                width={500}
                height={200}
                src="/images/realsense.webp"
                alt="Intel RealSense Camera"
                className="w-full h-[200px] object-cover rounded-lg"
              />
              <h3 className="text-2xl font-semibold mt-6 text-gray-800">Intel RealSense Camera</h3>
              <p className="text-gray-600 mt-2">
                A camera intended for augmented reality applications, content creation, and object scanning.
              </p>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="bg-white p-8 rounded-2xl cursor-pointer shadow-lg  transition-all duration-500 ease-in-out transform hover:scale-105 hover:shadow-2xl">
              <Image
                width={500}
                height={200}
                src="/images/gps rs2.jpg"
                alt="GPS RS2"
                className="w-full h-[200px] object-cover rounded-lg"
              />
              <h3 className="text-2xl font-semibold mt-6 text-gray-800">GPS RS2</h3>
              <p className="text-gray-600 mt-2">
                Provides high-precision GPS data for accurate vehicle positioning, critical for navigation and geo-fencing.
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Technologies;
