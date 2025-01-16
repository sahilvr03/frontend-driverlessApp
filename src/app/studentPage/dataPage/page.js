"use client";

import ProductSidebar from '@/app/components/ProductpageComponents/productsidebar/page';
import { useEffect, useState } from 'react';
import { FaSave, FaEye, FaDownload, FaFile, FaUser, FaCalendar } from 'react-icons/fa'; // Importing icons
import { motion } from 'framer-motion'; // Import Framer Motion
import ProfileCard from '@/app/components/BlogPage/ProfileCard';

const DataPage = () => {
    const [dataItems, setDataItems] = useState([]);
    const [error, setError] = useState(null);
    const [selectedItem, setSelectedItem] = useState(null); // State to hold selected item for preview
    const [isModalOpen, setIsModalOpen] = useState(false); // State to manage modal visibility

    useEffect(() => {
        const fetchFiles = async () => {
            try {
                const response = await fetch('http://127.0.0.1:5000/api/data');
                if (!response.ok) throw new Error("Failed to fetch data");

                let data = await response.json();
                data = data.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));

                setDataItems(data);
            } catch (error) {
                setError("Error fetching data");
            }
        };
        fetchFiles();
    }, []);

    const handlePreviewClick = (item) => {
        setSelectedItem(item);
        setIsModalOpen(true); // Open the modal
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setSelectedItem(null); // Clear selected item
    };

    return (
        <section className="bg-gray-100 flex">
            
            <ProductSidebar />
            <div className="container mx-auto px-6 py-10 lg:w-3/4">
                <h4 className="text-2xl font-bold text-center text-gray-800 mb-6">Research Data</h4>
                {error && <p className="text-red-600 mb-6">{error}</p>}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {dataItems.map((item) => (
                        <DataItem key={item.id} item={item} onPreviewClick={handlePreviewClick} />
                    ))}
                </div>
                {isModalOpen && selectedItem && (
                    <Modal item={selectedItem} onClose={handleCloseModal} />
                )}
               
            </div>
           
        </section>
    );
};

const DataItem = ({ item, onPreviewClick }) => (
    <div className="p-6 bg-white rounded-lg shadow-lg border hover:shadow-xl transition-shadow flex flex-col justify-between h-full">
        <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">{item.title}</h3>
            <p className="text-gray-700 mb-4 leading-relaxed">{item.description}</p>
        </div>
        <div className="flex items-center justify-between text-gray-500 mt-4 space-x-4">

            <button
                className="flex items-center space-x-1 text-blue-600 hover:text-blue-800"
                onClick={() => onPreviewClick(item)} // Call the preview click handler
            >
                <FaEye />
                <span>Preview</span>
            </button>
            <a
                href={`http://127.0.0.1:5000/api/data/download/${item.id}`}
                className="flex items-center space-x-1 text-green-600 hover:text-green-800"
                download
            >
                <FaDownload />
                <span>Download</span>
            </a>
        </div>
    </div>
);

const Modal = ({ item, onClose }) => (
    <motion.div
        className="fixed inset-0 flex items-center justify-center z-50"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.5 }}
        transition={{ duration: 0.3 }} // Animation duration
    >
        <div className="fixed inset-0 bg-black opacity-50" onClick={onClose}></div>
        <div className="bg-white rounded-lg shadow-lg p-6 z-10 w-11/12 md:w-1/3">
            <h2 className="text-2xl font-bold mb-4">{item.title}</h2>
            <p className="flex items-center mb-2"><FaFile className="mr-2" /><strong>File Type:</strong> {item.filename}</p>
            <p className="flex items-center mb-2"><FaUser className="mr-2" /><strong>Uploaded By:</strong> {item.id}</p>
            <p className="flex items-center mb-2"><FaCalendar className="mr-2" /><strong>Uploaded On:</strong> {new Date(item.created_at).toLocaleString()}</p>
            <p className="mb-4"><strong>Description:</strong> {item.description}</p>

            <div className="flex justify-end mt-6">
                <button className="bg-blue-600 text-white px-4 py-2 rounded" onClick={onClose}>Close</button>
            </div>
        </div>
    </motion.div>
);

export default DataPage;
