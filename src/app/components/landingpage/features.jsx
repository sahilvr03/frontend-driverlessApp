"use client";
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaCarSide, FaBrain, FaShieldAlt, FaMicrochip, FaMapMarkedAlt, FaSyncAlt } from 'react-icons/fa';

const Featured = () => {
  const { ref: contentRef, inView: contentInView } = useInView({ triggerOnce: true, threshold: 0.2 });
  const { ref: imageRef, inView: imageInView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section className="relative py-20 bg-[url('/images/item2.jpg')] bg-cover bg-center">
      <div className="absolute inset-0 bg-slate-900/80 z-0"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="items-center flex flex-wrap">
          {/* Content Section */}
          <div className="w-full md:w-5/12 ml-auto mr-auto px-4">
            <motion.div
              ref={contentRef}
              initial={{ opacity: 0, x: -50 }}
              animate={contentInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="md:pr-12"
            >
              <div className="text-blue-400 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white/10 backdrop-blur-sm">
                <motion.div 
                  animate={{ x: contentInView ? [0, 10, 0] : 0 }} 
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <FaCarSide className="text-2xl" />
                </motion.div>
              </div>
              <h3 className="text-4xl font-bold text-white mb-6">
                Pioneering Autonomous Mobility Solutions
              </h3>
              <p className="mt-4 text-lg leading-relaxed text-blue-100">
                Harnessing cutting-edge AI and sensor fusion technology to create safer, more efficient 
                self-driving systems. Our platform integrates real-time decision making with millimeter-wave 
                precision for seamless urban and highway autonomy.
              </p>

              <ul className="list-none mt-8 space-y-4">
                {[
                  { icon: FaBrain, text: "Deep Learning Navigation Systems" },
                  { icon: FaShieldAlt, text: "ASIL-D Certified Safety Architecture" },
                  { icon: FaMicrochip, text: "Multi-modal Sensor Fusion (LiDAR/Radar/Camera)" },
                  { icon: FaMapMarkedAlt, text: "HD Live Mapping & Localization" },
                  { icon: FaSyncAlt, text: "V2X Communication Integration" }
                ].map(({ icon: Icon, text }, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={contentInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.2 * index, duration: 0.5 }}
                    className="group"
                  >
                    <div className="flex items-center p-3 rounded-lg hover:bg-white/5 transition-all">
                      <span className="text-blue-400 text-xl p-2 rounded-full bg-white/10 mr-4">
                        <Icon />
                      </span>
                      <h4 className="text-lg font-medium text-white">{text}</h4>
                    </div>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Image Section */}
          <motion.div
            ref={imageRef}
            initial={{ opacity: 0, y: 30 }}
            animate={imageInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="w-full md:w-6/12 ml-auto mr-auto px-4 mt-12 md:mt-0"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white/20">
              <Image
                alt="Autonomous Vehicle System Interface"
                className="object-cover"
                src="/images/car1.webp"
                width={800}
                height={600}
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Featured;