// 'use client'; 
// import React from 'react';

// export default function DataCleaning() {
//     return (
//         <div style={styles.pageContainer}>
//             {/* Header */}
//             <header style={styles.header}>
//                 <h1 style={styles.heading}>Data Cleaning Services</h1>
//                 <p style={styles.subheading}>
//                     Transform raw, messy datasets into clean, structured data for actionable insights.
//                 </p>
//             </header>

            

//             {/* Footer */}
//             <footer style={styles.footer}>
//                 <p>&copy; {new Date().getFullYear()} DataCleaningPro. All Rights Reserved.</p>
//             </footer>

//            
//         </div>
//     );
// }

'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';

export default function DataCleaningServices() {
    const [activeTab, setActiveTab] = useState('deduplication');
    const activeService = services.find((service) => service.id === activeTab);

    return (
        <div className="bg-gray-50 text-gray-800">
            {/* Hero Section */}
            <section className="flex flex-col md:flex-row items-center justify-between px-6 py-12 md:px-16 bg-blue-100">
                <motion.div
                    className="md:w-1/2 text-center md:text-left"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">
                        Data Cleaning Services for Better Decision Making
                    </h1>
                    <p className="text-lg md:text-xl mb-6 m-2">
                        Accurate and reliable data is the backbone of informed decision-making. Our data cleaning services ensure your data is error-free, consistent, and ready for analysis. From deduplication to standardization, we help businesses turn raw data into actionable insights.
                    </p>
                    <motion.button
                        className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 transition-all"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Get Services
                    </motion.button>
                </motion.div>
                <motion.div
                    className="md:w-1/2  mt-8 md:mt-0"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <Image
                        width={1000}
                        height={1000}
                        src="/images/services.png" // Replace with your actual image
                        alt="Data Cleaning Services"
                        className="w-full rounded-lg shadow-lg"
                    />
                </motion.div>
            </section>

            {/* What is Data Cleaning Section */}
            <section className="px-6 py-12 md:px-16 text-center">
                <motion.h2
                    className="text-3xl md:text-4xl font-bold mb-6"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    What is Data Cleaning?
                </motion.h2>
                <motion.p
                    className="text-lg md:text-xl max-w-4xl mx-auto"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    Data cleaning is the process of identifying and correcting errors, inconsistencies, and inaccuracies in datasets. It ensures the integrity and reliability of your data for analysis, decision-making, and AI model training.
                </motion.p>
            </section>

            {/* Why Data Cleaning is Important */}
            <section className="px-6 py-12 md:px-16 bg-white">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                    Why is Data Cleaning Important?
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

            {/* Types of Data Cleaning Services */}
            <section className="bg-[#1c2536] px-6 py-12 md:px-16 text-white ">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 ">
                    Types of Data Cleaning Services
                </h2>
                <p className="text-center text-gray-400 mb-8">
                    From deduplication to standardization, our services ensure your data is clean, consistent, and ready for action.
                </p>

                {/* Tabs */}
                <div className="flex justify-center space-x-4 mb-8 border-b border-gray-600 ">
                    {services.map((service) => (
                        <button
                            key={service.id}
                            onClick={() => setActiveTab(service.id)}
                            className={`px-4 py-2 font-medium text-sm md:text-base ${
                                activeTab === service.id
                                    ? 'text-green-400 border-b-2 border-green-400'
                                    : 'text-gray-400 hover:text-white'
                            }`}
                        >
                            {service.title}
                        </button>
                    ))}
                </div>

                {/* Active Tab Content */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center ml-8">
                    {/* Text Content */}
                    <div>
                        <h3 className="text-2xl font-semibold mb-4">
                            {activeService.title}
                        </h3>
                        <p className="text-gray-300 mb-4 ">{activeService.description}</p>
                        <ul className="list-disc list-inside space-y-2 text-gray-400">
                            {activeService.useCases.map((useCase, index) => (
                                <li key={index}>{useCase}</li>
                            ))}
                        </ul>
                        <motion.button
                            className="px-6 py-3 mt-8 bg-green-600 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 transition-all"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Get Services
                        </motion.button>
                    </div>

                    {/* Image */}
                    <div className="relative">
                        <Image
                            height={400}
                            width={400}
                            src={activeService.image}
                            alt={activeService.title}
                            className="w-[600px] h-[400px] rounded-lg shadow-lg object-cover"
                        />
                    </div>
                </div>
            </section>
            {/* Main Content */}
<main className="flex flex-col items-center justify-center px-6 py-12 bg-gray-50 text-gray-800">
    {/* Smart Data Cleaning Card */}
    <div className="relative bg-white shadow-lg rounded-lg p-6 text-center transform hover:scale-105 transition-transform duration-300">
        <div className="flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mx-auto mb-4">
            <span role="img" aria-label="cleaning" className="text-4xl">
                🧹
            </span>
        </div>
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Smart Data Cleaning</h2>
        <p className="text-gray-600">
            Say goodbye to messy datasets! We ensure your data is clean, structured, and ready for actionable insights.
        </p>
    </div>

    {/* Benefits Section */}
    <section className="mt-12 w-full max-w-4xl">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Why Choose Our Services?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Benefit 1 */}
            <div className="bg-white shadow-md rounded-lg p-6 text-center hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mx-auto mb-4">
                    <span role="img" aria-label="accuracy" className="text-4xl">
                        🎯
                    </span>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Accuracy</h3>
                <p className="text-gray-600">
                    Our team ensures every piece of data meets your quality standards.
                </p>
            </div>
            {/* Benefit 2 */}
            <div className="bg-white shadow-md rounded-lg p-6 text-center hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center justify-center w-16 h-16 bg-yellow-100 rounded-full mx-auto mb-4">
                    <span role="img" aria-label="automation" className="text-4xl">
                        ⚙️
                    </span>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Automation</h3>
                <p className="text-gray-600">
                    We combine automated tools with manual validation for optimal results.
                </p>
            </div>
            {/* Benefit 3 */}
            <div className="bg-white shadow-md rounded-lg p-6 text-center hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mx-auto mb-4">
                    <span role="img" aria-label="efficiency" className="text-4xl">
                        🚀
                    </span>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Efficiency</h3>
                <p className="text-gray-600">
                    Fast turnaround times to keep your projects on track.
                </p>
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
        icon: '✅',
        title: 'Accurate Insights',
        description: 'Ensure accurate data analysis and better decision-making with clean datasets.',
    },
    {
        icon: '⚡',
        title: 'Improved Efficiency',
        description: 'Reduce manual errors and streamline your operations with clean data.',
    },
    {
        icon: '🔒',
        title: 'Data Security',
        description: 'Maintain data integrity and security throughout the cleaning process.',
    },
];

const services = [
    {
        id: 'deduplication',
        title: 'Deduplication',
        description: 'Identify and remove duplicate records to ensure data consistency and reliability.',
        useCases: [
            'Customer Records Cleanup',
            'Duplicate Transaction Removal',
            'Streamlined Reporting',
        ],
        image: '/images/achieve.jpg', // Replace with your actual image
    },
    {
        id: 'standardization',
        title: 'Standardization',
        description: 'Enforce consistent data formats, units, and naming conventions.',
        useCases: [
            'Address Standardization',
            'Date and Time Formatting',
            'Consistent Data Units',
        ],
        image: '/images/car2.webp', // Replace with your actual image
    },
    {
        id: 'validation',
        title: 'Validation',
        description: 'Ensure data accuracy by cross-checking entries against predefined rules and standards.',
        useCases: [
            'Email Validation',
            'Phone Number Formatting',
            'Range and Limit Checks',
        ],
        image: '/images/car.webp', // Replace with your actual image
    },
];
