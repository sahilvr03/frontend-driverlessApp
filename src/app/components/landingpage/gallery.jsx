"use client";
import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const galleryImages = [
  '/images/1.jpeg',
  '/images/2.jpeg',
  '/images/3.jpeg',
  '/images/picture1.jpeg',
  '/images/picture2.jpeg',
  '/images/picture3.jpeg'
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (src) => {
    setSelectedImage(src);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  return (
    <section className="py-2">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold  text-center mb-12">Gallery</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {galleryImages.map((src, index) => (
            <AnimatedImage key={index} src={src} onClick={() => handleImageClick(src)} />
          ))}
        </div>
      </div>

      {/* Modal for displaying image */}
      {selectedImage && (
        <motion.div
          className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            className="relative w-4/12 h-4/12 bg-transparent flex justify-center items-center rounded-lg shadow-lg"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            <button
              onClick={handleCloseModal}
              className="absolute top-0 right-0 p-2 w-8 h-8 rounded-full bg-white text-black flex items-center justify-center hover:bg-red-500 hover:text-white transition-colors duration-300"
            >
              &times;
            </button>
            <div className="max-w-[80vw] max-h-[80vh] overflow-hidden">
              <Image
                src={selectedImage}
                alt="Selected Image"
                width={400}
                height={300}
                className="object-contain w-full h-full"
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};

// Component for each animated image in the gallery
const AnimatedImage = ({ src, onClick }) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.6 }}
      className="relative overflow-hidden rounded-lg shadow-lg group cursor-pointer"
      onClick={onClick}
    >
      <Image
        src={src}
        alt="Project Image"
        width={400}
        height={300}
        className="w-full h-[40vh] object-cover transition-transform duration-300 ease-out group-hover:scale-105 group-hover:rotate-1"
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-60 transition-opacity duration-300 flex items-center justify-center">
        <p className="text-white text-lg font-semibold">View Project</p>
      </div>
    </motion.div>
  );
};

export default Gallery;
