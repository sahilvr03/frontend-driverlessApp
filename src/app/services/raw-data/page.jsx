'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';
import MainProductList from "@/app/components/ProductpageComponents/MainProductList/page";
import ProtectedRoute from "@/app/protectedRoute/protectedRoute";
import DataPage from "@/app/studentPage/dataPage/page"

const ProductPage = () => {
    const [activeTab, setActiveTab] = useState('image');
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <ProtectedRoute allowedRoles={['user', 'admin']}>
            <div className="bg-gray-50 text-gray-800">
                {/* Modal */}
                {isModalOpen && (
                    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                        <div className="bg-white p-6 rounded-lg shadow-lg w-[90%] md:w-[40%]">
                            <h2 className="text-xl font-semibold mb-4 text-center">Get Services</h2>
                            <p className="mb-4 text-sm text-gray-600 text-center">
                                Fill out the form below to get started.
                            </p>
                            <form className="grid grid-cols-1 gap-4 text-sm">
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label htmlFor="firstName" className="font-medium">First Name</label>
                                        <input
                                            id="firstName"
                                            type="text"
                                            className="mt-1 w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                            placeholder="First Name"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="lastName" className="font-medium">Last Name</label>
                                        <input
                                            id="lastName"
                                            type="text"
                                            className="mt-1 w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                            placeholder="Last Name"
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label htmlFor="email" className="font-medium">Email</label>
                                        <input
                                            id="email"
                                            type="email"
                                            className="mt-1 w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                            placeholder="Email Address"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="contactNumber" className="font-medium">Contact Number</label>
                                        <input
                                            id="contactNumber"
                                            type="tel"
                                            inputMode="numeric"
                                            pattern="[+]{1}[0-9]{11,14}"
                                            className="mt-1 w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                            placeholder="Phone Number"
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label htmlFor="organization" className="font-medium">Organization</label>
                                        <input
                                            id="organization"
                                            type="text"
                                            className="mt-1 w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                            placeholder="Organization Name"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="url" className="font-medium">URL</label>
                                        <input
                                            id="url"
                                            type="url"
                                            className="mt-1 w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                            placeholder="Website URL"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="purpose" className="font-medium">Purpose</label>
                                    <textarea
                                        id="purpose"
                                        className="mt-1 w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                        placeholder="State your purpose"
                                        rows="3"
                                        required
                                    ></textarea>
                                </div>
                                <div className="flex gap-4">
                                    <button
                                        type="submit"
                                        className="w-1/2 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 transition-all"
                                    >
                                        Submit
                                    </button>
                                    <button
                                        type="button"
                                        className="w-1/2 py-2 text-white bg-gray-400 rounded-md hover:bg-gray-500 transition-all"
                                        onClick={() => setIsModalOpen(false)}
                                    >
                                        Close
                                    </button>
                                </div>
                            </form>
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
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">Raw data text goes here</h1>
                        <p className="text-lg md:text-xl mb-6">
                            In today’s rapidly evolving landscape of artificial intelligence and machine learning, high-quality data serves as the foundation for building efficient and reliable models. 
                            Our comprehensive data annotation services empower your AI initiatives with accuracy and precision.
                        </p>
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

                <DataPage/>

                {/* Data Cleaning Services Section */}
                <section className="bg-[#1c2536] px-6 py-12 md:px-16 text-white" id="get-service">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Raw data services section</h2>
                    <p className="text-center text-gray-400 mb-8">
                        a b c d e f g h i 
                    </p>
                </section>
                <section>
                    extra? 
                  </section>
            </div>
        </ProtectedRoute>
    );
};

export default ProductPage;
