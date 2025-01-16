"use client";
import { useState, useEffect } from "react";
import { CameraIcon } from '@heroicons/react/outline';
import { useUser } from "../../context/UserContext";
import { doc, getDoc } from "firebase/firestore";
import { db } from '../../firebaseConfig/auth';
import Image from "next/image";
export default function BlogPostPrompt() {
    const { user } = useUser();
    const [userProfile, setUserProfile] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const response = await fetch('http://localhost:5000/api/blogs');
                const data = await response.json();
                setBlogs(data);
            } catch (error) {
                console.error('Error fetching blogs:', error);
            }
        };
        fetchBlogs();
    }, []);

    useEffect(() => {
        const fetchUserData = async () => {
            if (user?.uid) {
                try {
                    const userDoc = await getDoc(doc(db, "users", user.uid));
                    if (userDoc.exists()) {
                        setUserProfile(userDoc.data());
                    }
                } catch (error) {
                    console.error("Error fetching user data:", error);
                }
            }
        };
        fetchUserData();
    }, [user]);

    const handleImageChange = (e) => setImage(e.target.files[0]);

    const handleSubmit = async () => {
        setIsLoading(true); // Start loading
        const formData = new FormData();
        formData.append('title', title);
        formData.append('description', description);
        formData.append('image', image);

        try {
            const response = await fetch('http://localhost:5000/api/blogs', {
                method: 'POST',
                body: formData,
            });
            const data = await response.json();
            if (response.ok) {
                console.log("Blog created:", data);
                setIsModalOpen(false); // Close modal on success
            } else {
                console.error("Error creating blog:", data.error);
            }
        } catch (error) {
            console.error("Error:", error);
        }
        setIsLoading(false); // Stop loading
    };

    return (
        <div className="flex items-center border border-gray-300 rounded-lg p-3 space-x-4 shadow-sm">
            <div className="text-center">
                {userProfile ? (
                    <Image
                        src={userProfile.profilePicUrl || "https://cdn-icons-png.flaticon.com/512/3135/3135715.png"}
                        alt="User Icon"
                        className="w-10 h-10 rounded-full object-cover"
                    />
                ) : (
                    <p>Loading...</p>
                )}
            </div>

            <input
                type="text"
                placeholder="Start a post, try writing with AI"
                className="flex-grow border border-gray-200 rounded-full px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
                onClick={() => setIsModalOpen(true)}
            />

            <div   className="flex space-x-2">
                <button type="button" class="flex space-x-2 focus:outline-none text-white bg-green-700 hover:bg-green-800  font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800" onClick={() => setIsModalOpen(true)}>
                    <CameraIcon className="w-5 h-5" />
                    <span className="text-sm">Create blog</span>
                </button>
                
            </div>

            {/* Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center">
                    <div className="bg-white rounded-lg p-6 w-full max-w-md">
                        <h2 className="text-lg font-semibold mb-4">Create a Blog Post</h2>

                        <input
                            type="text"
                            placeholder="Blog Title"
                            className="w-full border border-gray-300 rounded px-3 py-2 mb-3"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />

                        <textarea
                            placeholder="Blog Description"
                            className="w-full border border-gray-300 rounded px-3 py-2 mb-3"
                            rows="4"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        ></textarea>

                        <input
                            type="file"
                            accept="image/*"
                            onChange={handleImageChange}
                            className="w-full mb-3"
                        />

                        <div className="flex justify-end space-x-3">
                            <button
                                className="bg-gray-400 text-white px-4 py-2 rounded"
                                onClick={() => setIsModalOpen(false)}
                            >
                                Cancel
                            </button>
                            <button
                                className="bg-blue-500 text-white px-4 py-2 rounded"
                                onClick={handleSubmit}
                                disabled={isLoading} // Disable button while loading
                            >
                                {isLoading ? (
                                    <div className="flex items-center space-x-2">
                                        <svg
                                            className="animate-spin h-5 w-5 text-white"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                        >
                                            <circle
                                                className="opacity-25"
                                                cx="12"
                                                cy="12"
                                                r="10"
                                                stroke="currentColor"
                                                strokeWidth="4"
                                            ></circle>
                                            <path
                                                className="opacity-75"
                                                fill="currentColor"
                                                d="M4 12a8 8 0 018-8v8H4z"
                                            ></path>
                                        </svg>
                                        <span>Posting...</span>
                                    </div>
                                ) : (
                                    "Create Blog"
                                )}
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
