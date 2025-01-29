"use client";
import { motion, useInView } from "framer-motion";
import { FaCarAlt, FaRobot, FaSatelliteDish, FaShieldAlt, FaCodeBranch, FaBrain } from "react-icons/fa";
import Image from "next/image";

const Services = () => {
  const services = [
    {
      icon: FaRobot,
      title: "AI Navigation Systems",
      description: "Deep learning-powered path prediction and real-time decision making for complex urban environments",
      color: "bg-blue-500"
    },
    {
      icon: FaSatelliteDish,
      title: "Sensor Fusion Tech",
      description: "Multi-modal integration of LiDAR, radar, and camera systems for 360° environmental perception",
      color: "bg-emerald-500"
    },
    {
      icon: FaShieldAlt,
      title: "Safety Certifications",
      description: "ASIL-D certified control systems with fail-operational architecture for maximum reliability",
      color: "bg-purple-500"
    }
  ];

  return (
    <section className="relative py-20 bg-gradient-to-b from-slate-900 to-slate-800">
      <div className="container mx-auto px-4">
        {/* Animated Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:border-blue-400/30 transition-all duration-300 h-full">
                <div className={`${service.color} w-14 h-14 rounded-xl mb-6 flex items-center justify-center`}>
                  <service.icon className="text-2xl text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-gray-300 leading-relaxed">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Innovation Section */}
        <div className="flex flex-wrap items-center mt-20">
          <div className="w-full lg:w-5/12 px-4 lg:order-1">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="bg-blue-500/20 p-4 rounded-2xl inline-block mb-8">
                <FaCodeBranch className="text-3xl text-blue-400" />
              </div>
              <h2 className="text-4xl font-bold text-white mb-6 leading-tight">
                Next-Gen Autonomous Development Platform
              </h2>
              <p className="text-lg text-gray-300 mb-6">
                Our integrated ecosystem combines simulation-grade validation tools with real-world data pipelines, 
                accelerating your ADAS development cycle by 40%.
              </p>
              <div className="space-y-6">
                <div className="flex items-start">
                  <FaBrain className="text-blue-400 text-xl mt-1 mr-4" />
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-2">Neural Network Optimization</h4>
                    <p className="text-gray-300">Quantization-aware training and hardware-specific optimizations</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <FaCarAlt className="text-blue-400 text-xl mt-1 mr-4" />
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-2">Vehicle Dynamics Integration</h4>
                    <p className="text-gray-300">Real-time CAN bus communication with predictive control models</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="w-full lg:w-7/12 px-4 mt-12 lg:mt-0">
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}
    className="relative rounded-2xl overflow-hidden border border-white/10 h-[60vh] min-h-[400px] max-h-[700px]"
  >
    <div className="relative h-full w-full">
      <Image
        src="/images/picture2.jpeg"
        alt="Autonomous Vehicle Interface"
        fill
        className="object-cover object-center"
        sizes="(max-width: 768px) 100vw, 50vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/40 to-transparent" />
      
      <motion.div
        animate={{ y: [-5, 5] }}
        transition={{ duration: 3, repeat: Infinity, repeatType: "mirror" }}
        className="absolute bottom-8 left-8 right-8 bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10"
      >
        <h3 className="text-xl font-bold text-white mb-2">Live Perception Visualization</h3>
        <p className="text-gray-300">
          Real-time sensor fusion display showing object detection, path prediction, 
          and decision-making vectors
        </p>
      </motion.div>
    </div>
  </motion.div>
</div>
        </div>
      </div>

      {/* Animated background elements */}
      <div className="absolute inset-0 -z-1">
        <div className="absolute top-20 left-0 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-40 right-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>
    </section>
  );
};

export default Services;