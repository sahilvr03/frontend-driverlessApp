"use client";
// Import necessary dependencies
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaRocket, FaFingerprint, FaHtml5, FaPaperPlane } from 'react-icons/fa';

const Featured = () => {
  // Setup intersection observers for animations
  const { ref: contentRef, inView: contentInView } = useInView({ triggerOnce: true, threshold: 0.2 });
  const { ref: imageRef, inView: imageInView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <>
      <section className="relative py-20 bg-[url('/images/picture2.jpeg')] bg-cover bg-center">
        {/* Background overlay for opacity */}
        <div className="absolute inset-0 bg-black opacity-50 z-0"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="items-center flex flex-wrap">
            {/* Right Side - Content */}
            <div className="w-full md:w-5/12 ml-auto mr-auto px-4">
              <motion.div
                ref={contentRef}
                initial={{ opacity: 0, x: -50 }}
                animate={contentInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8 }}
                className="md:pr-12"
              >
                {/* Icon and Title */}
                <div className="text-black p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                  <motion.div animate={{ rotate: contentInView ? 360 : 0 }} transition={{ duration: 2, repeat: Infinity }}>
                    <FaRocket className="text-xl" />
                  </motion.div>
                </div>
                <h3 className="text-3xl font-semibold text-white">A growing company</h3>
                <p className="mt-4 text-lg leading-relaxed text-white">
                  The extension comes with three pre-built pages to help you get started faster. You can change the text and images and your good to go.
                </p>

                {/* Features List */}
                <ul className="list-none mt-6">
                  {[{ icon: FaFingerprint, text: "Carefully crafted components" },
                    { icon: FaHtml5, text: "Amazing page examples" },
                    { icon: FaPaperPlane, text: "Dynamic components" }].map(({ icon: Icon, text }, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={contentInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.3 * index, duration: 0.5 }}
                      className="py-2"
                    >
                      <div className="flex items-center">
                        <div>
                          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-black bg-white mr-3">
                            <Icon />
                          </span>
                        </div>
                        <div>
                          <h4 className="text-white">{text}</h4>
                        </div>
                      </div>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </div>

            {/* Left Side - Image */}
            <motion.div
              ref={imageRef}
              initial={{ opacity: 0, y: 30 }}
              animate={imageInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="w-full md:w-4/12 ml-auto mr-auto px-4"
            >
              <Image
                alt="Featured Image"
                className="max-w-full rounded-lg shadow-lg"
                src="/images/picture3.jpeg"
                width={500}
                height={350}
              />
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Featured;
