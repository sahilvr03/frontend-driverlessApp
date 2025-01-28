'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';


export default function Home() {
    const [activeTab, setActiveTab] = useState('image');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const activeType = types.find((type) => type.id === activeTab);
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        contactNumber: '',
        organization: '',
        url: '',
        purpose: '',
      });
      const [status, setStatus] = useState(null);
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('loading');
    
        try {
          const response = await fetch('/api/email', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData),
          });
    
          if (response.ok) {
            setStatus('success');
            setFormData({
              firstName: '',
              lastName: '',
              email: '',
              contactNumber: '',
              organization: '',
              url: '',
              purpose: '',
            });
          } else {
            setStatus('error');
          }
        } catch (error) {
          console.error('Error submitting form:', error);
          setStatus('error');
        }
      };
      const handleCloseModal = () => setIsModalOpen(false);

    return (
        <div className="bg-gray-50 text-gray-800">
            {/* Modal */}
            {isModalOpen && (
   <div
   className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
   onClick={handleCloseModal} // Close modal when clicking outside
 >
   <div
     className="bg-white p-8 rounded-2xl shadow-2xl w-[90%] md:w-[40%] relative"
     onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal
   >
     <button
       onClick={handleCloseModal}
       className="absolute top-3 right-3 text-gray-500 hover:text-gray-800"
     >
       ✕
     </button>
     <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
       Contact Us
     </h2>
     <p className="mb-6 text-sm text-gray-600 text-center">
       Fill out the form below to get started.
     </p>
     <form onSubmit={handleSubmit} className="space-y-4">
       <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
         <input
           type="text"
           placeholder="First Name"
           value={formData.firstName}
           onChange={(e) =>
             setFormData({ ...formData, firstName: e.target.value })
           }
           className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
         />
         <input
           type="text"
           placeholder="Last Name"
           value={formData.lastName}
           onChange={(e) =>
             setFormData({ ...formData, lastName: e.target.value })
           }
           className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
         />
       </div>
       <input
         type="email"
         placeholder="Email"
         value={formData.email}
         onChange={(e) =>
           setFormData({ ...formData, email: e.target.value })
         }
         className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
       />
       <input
         type="text"
         placeholder="Contact Number"
         value={formData.contactNumber}
         onChange={(e) =>
           setFormData({ ...formData, contactNumber: e.target.value })
         }
         className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
       />
       <input
         type="text"
         placeholder="Organization"
         value={formData.organization}
         onChange={(e) =>
           setFormData({ ...formData, organization: e.target.value })
         }
         className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
       />
       <input
         type="text"
         placeholder="Website URL"
         value={formData.url}
         onChange={(e) =>
           setFormData({ ...formData, url: e.target.value })
         }
         className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
       />
       <textarea
         placeholder="Purpose"
         value={formData.purpose}
         onChange={(e) =>
           setFormData({ ...formData, purpose: e.target.value })
         }
         className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
         rows="4"
       ></textarea>
       <button
         type="submit"
         className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold py-2 rounded-lg hover:scale-105 transform transition duration-300"
       >
         Submit
       </button>
     </form>
     <div className="mt-4 text-center">
       {status === 'loading' && <p className="text-blue-500">Sending...</p>}
       {status === 'success' && (
         <p className="text-green-500">Message sent successfully!</p>
       )}
       {status === 'error' && (
         <p className="text-red-500">Failed to send message.</p>
       )}
     </div>
   </div>
 </div>
)}


            {/* Hero Section */}
            <section className="flex flex-col md:flex-row items-center justify-between px-6 py-12 md:px-16 bg-blue-100">
                <motion.div
                    className="md:w-1/2 text-center md:text-left"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">
                        Data Annotation Services for AI and ML Models
                    </h1>
                    <p className="text-lg md:text-xl mb-6 m-2">
                    In today rapidly evolving landscape of artificial intelligence and machine learning, high-quality data serves as 
                    the foundation for building efficient and reliable models. Whether you are developing innovative AI applications or 
                    refining existing models, our comprehensive data annotation services can empower your success. With our team deep 
                    experience in the field, we ensure the accuracy and precision necessary to maximize the potential of your AI 
                    initiatives.                    </p>
                    <motion.button
                        className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-all"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => {
                            const targetDiv = document.getElementById("get-service");
                            targetDiv?.scrollIntoView({ behavior: "smooth" });
                        }}
                    >
                        Get Services
                    </motion.button>

                </motion.div>
                <motion.div
                    className="md:w-1/2 mt-8 md:mt-0"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <Image
                        width={1000}
                        height={1000}
                        src="/images/car4.png"
                        alt="Data Annotation"
                        className="w-full rounded-lg shadow-lg"
                    />
                </motion.div>
            </section>

            {/* What is Data Annotation Section */}
            <section className="px-6 py-12 md:px-16 text-center">
                <motion.h2
                    className="text-3xl md:text-4xl font-bold mb-6"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    What is Data Annotation?
                </motion.h2>
                <motion.p
                    className="text-lg md:text-xl max-w-4xl mx-auto"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                        Data annotation is the process of categorizing and labeling data, a fundamental step for AI and machine learning applications. High-quality annotated data enables models to comprehend, interpret, and learn from the information captured during the annotation process. Our process emphasizes using expert human annotators supported by advanced technology, to provide powerful and consistent data.                  
                        
                </motion.p>
            </section>

            {/* Why Data Annotation is Important */}
            <section className="px-6 py-12 md:px-16 bg-white">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                    Why is Data Annotation Important?
                </h2>
                <div className="flex flex-wrap justify-center gap-6">
                    {benefits.map((benefit, index) => (
                        <motion.div
                            key={index}
                            className="w-full md:w-1/3 bg-gray-100 p-6 rounded-lg shadow-lg text-center"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: index * 0.2 }}
                        >
                            <div className="text-4xl mb-4">{benefit.icon}</div>
                            <h3 className="text-xl font-semibold mb-2">
                                {benefit.title}
                            </h3>
                            <p>{benefit.description}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Types of Data Annotation */}
              {/* Types of Data Annotation */}
              <section className="bg-[#1c2536] px-6 py-12 md:px-16 text-white" id="get-service">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
                    Types of AI Data Annotation
                </h2>
                <p className="text-center text-gray-400 mb-8">
                    From text and audio to image and video, each data type requires specific annotation techniques to build deployment-ready applications.
                </p>

                {/* Tabs */}
                <div className="flex justify-center space-x-4 mb-8 border-b border-gray-600">
                    {types.map((type) => (
                        <button
                            key={type.id}
                            onClick={() => setActiveTab(type.id)}
                            className={`px-4 py-2 font-medium text-sm md:text-base ${
                                activeTab === type.id
                                    ? 'text-blue-400 border-b-2 border-blue-400'
                                    : 'text-gray-400 hover:text-white'
                            }`}
                        >
                            {type.title}
                        </button>
                    ))}
                </div>

                {/* Active Tab Content */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    {/* Text Content */}
                    <div>
                        <h3 className="text-2xl font-semibold mb-4">
                            {activeType.title}
                        </h3>
                        <p className="text-gray-300 mb-4">{activeType.description}</p>
                        <ul className="list-disc list-inside space-y-2 text-gray-400">
                            {activeType.useCases.map((useCase, index) => (
                                <li key={index}>{useCase}</li>
                            ))}
                        </ul>
                        <motion.button
                            className="px-6 py-3 mt-8 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-all"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => setIsModalOpen(true)}
                        >
                            Get Services
                        </motion.button>
                    </div>

                    {/* Image */}
                    <div className="relative">
                        <Image
                            height={400}
                            width={400}
                            src={activeType.image}
                            alt={activeType.title}
                            className="w-[600px] h-[400px] rounded-lg shadow-lg object-cover"
                        />
                    </div>
                </div>
            </section>

        <main className="flex flex-col items-center flex-1 px-4 py-10">
    {/* Animation Section */}
    <div className="flex justify-center items-center mb-10 cursor-pointer">
      <div className="bg-blue-100 rounded-xl shadow-lg text-center p-6 w-80 relative overflow-hidden">
        <div className="bg-white rounded-full w-20 h-20 flex justify-center items-center mx-auto mb-6 shadow-md">
          <span role="img" aria-label="insights" className="text-4xl text-blue-600">🤖</span>
        </div>
        <h2 className="text-2xl font-bold text-blue-800 mb-4">AI-Driven Data Annotation</h2>
        <p className="text-blue-700 text-base leading-6">
          Harness the power of automation and human expertise to create high-quality, actionable datasets tailored to your AI needs.
        </p>
      </div>
    </div>

    {/* Why Choose Us Section */}
    <section className="text-center">
      <h2 className="text-3xl font-semibold mb-6">Why Choose Us?</h2>
      <div className="flex flex-wrap justify-center gap-6">
        <div className="bg-white rounded-lg shadow-md text-center p-6 w-60 cursor-pointer">
          <span role="img" aria-label="precise" className="text-3xl mb-4 inline-block">✅</span>
          <h3 className="text-xl font-semibold mb-2">Precision</h3>
          <p className="text-gray-600">We ensure data is labeled with the highest level of accuracy, helping you build models you can trust.</p>
        </div>
        <div className="bg-white rounded-lg shadow-md text-center p-6 w-60 cursor-pointer">
          <span role="img" aria-label="efficiency" className="text-3xl mb-4 inline-block">⚡</span>
          <h3 className="text-xl font-semibold mb-2">Efficiency</h3>
          <p className="text-gray-600">Accelerate your AI training with timely delivery of annotated datasets.</p>
        </div>
        <div className="bg-white rounded-lg shadow-md text-center p-6 w-60 cursor-pointer">
          <span role="img" aria-label="scalable" className="text-3xl mb-4 inline-block">🌎</span>
          <h3 className="text-xl font-semibold mb-2">Scalability</h3>
          <p className="text-gray-600">Adapt to your growing project needs with our scalable services.</p>
        </div>
        <div className="bg-white rounded-lg shadow-md text-center p-6 w-60 cursor-pointer">
          <span role="img" aria-label="secure" className="text-3xl mb-4 inline-block">🔒</span>
          <h3 className="text-xl font-semibold mb-2">Data Security</h3>
          <p className="text-gray-600">Your data is safe with us, thanks to robust privacy and security protocols.</p>
        </div>
      </div>
    </section>
  </main>

            
        </div>
    );
}

// Dummy data for benefits and types
const benefits = [
    {
        icon: '⚙️',
        title: 'Enhance Model Performance',
        description: 'Improve the accuracy and efficiency of your machine learning models with high-quality data.',
    },
    {
        icon: '⚡',
        title: 'Increase Efficiency',
        description: 'Save time with expertly labeled data, ensuring timely delivery for your projects.',
    },
    {
        icon: '🌟',
        title: 'Make Data your Differentiator',
        description: 'Stand out with customized annotations that give your AI solutions a competitive edge.',
    },
];

const types = [
    {
        id: 'image',
        title: 'Image Annotation',
        description:
            'Image annotation is one of the most vital responsibilities a computer has in the digital age. It is vital for training models for computer vision, facial recognition, and other visual AI applications. Detailed labeling of images ensures precise and accurate model training.',
        useCases: [
            'Object Detection: Identify and label objects within images for applications like autonomous driving and security systems.',
            'Facial Recognition: Annotate facial features to improve identification and verification processes.',
            'Image Classification: Label and categorize images for organizing e-commerce product catalogs and recommending social media content.',
        ],
        image: '/images/achieve.jpg', // Replace with your actual image path
    },
    {
        id: 'frame',
        title: 'Frame Annotation',
        description:
            'Frame annotation focuses on labeling objects across video frames for tasks like motion tracking and temporal analysis. This ensures models learn object behavior over time.',
        useCases: [
            'Motion Tracking: Label objects across sequential video frames for behavior recognition.',
            'Event Detection: Identify specific events in videos, such as accidents or unusual activities.',
        ],
        image: '/images/item2.jpg', // Replace with your actual image path
    },
];
