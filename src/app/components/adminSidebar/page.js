"use client";
import ProtectedRoute from "@/app/protectedRoute/protectedRoute";
import Link from "next/link";
import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Image from "next/image";
import { useUser } from "../../context/UserContext"; // Assuming you have user context
import { db } from '../../firebaseConfig/auth'; // Adjust according to your project structure
import { doc, getDoc } from "firebase/firestore"; // Firebase Firestore functions

export default function AdminSidebar({ handleViewChange }) {
  const { user } = useUser(); // Assuming user context provides user data
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [userProfile, setUserProfile] = useState(null);
  useEffect(() => {
    const fetchUserData = async () => {
      if (user?.uid) {
        try {
          const userDoc = await getDoc(doc(db, "users", user.uid));
          if (userDoc.exists()) {
            setUserProfile(userDoc.data()); // Set user profile data
          } else {
            console.log("No such document!");
          }
        } catch (error) {
          console.error("Error fetching user data:", error);
        }
      }
    };
    fetchUserData();
  }, [user]);        

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      {/* Hamburger Menu for Small Screens */}
      <button
        className="text-3xl lg:hidden text-black fixed top-16 left-4 z-50"
        onClick={toggleSidebar}
      >
        {isSidebarOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Sidebar */}
      <div
        className={`fixed lg:sticky lg:top-0 h-screen w-60 bg-gray-800 text-white flex flex-col items-center pt-20 transition-transform duration-300 z-40 lg:z-auto ${isSidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
          }`}
      >
        {/* User Icon */}
        <div className="mb-8 text-center">
          {userProfile ? (
            <>
              <img
                src={userProfile.profilePicUrl || "https://cdn-icons-png.flaticon.com/512/3135/3135715.png"}
                alt="User Icon"
                className="w-24 h-24 rounded-full border-2 object-cover border-white"
              />
              <p className="mt-2 text-sm font-semibold">{userProfile.username}</p>
            </>
          ) : (
            <p>Loading...</p>
          )}
        </div>

        {/* Dashboard Text */}
        <Link
          href="/adminPage"
          className="block py-3 px-4 hover:bg-gray-700 w-full bg-gray-900 text-center text-sm font-semibold"
        >
          DASHBOARD
        </Link>

        {/* Sidebar Links */}
        <nav className="w-full flex flex-col items-center space-y-2">
        <button
            className="w-11/12 py-3 px-4 hover:bg-gray-700 border-b border-white text-center text-sm font-semibold"
            onClick={() => handleViewChange("upload")}
          >
            UPLOAD-DATA
          </button>
          <button
            onClick={() => handleViewChange("posts")}
            className="w-11/12 py-3 px-4 hover:bg-gray-700 border-b border-white text-center text-sm font-semibold"
          >
            CREATE POST
          </button>
          <button
            onClick={() => handleViewChange("products")}
            className="w-11/12 py-3 px-4 hover:bg-gray-700 border-b border-white text-center text-sm font-semibold"
          >
            ADD PRODUCTS
          </button>
          <button
            onClick={() => handleViewChange("AdminBlogs")}
            className="w-11/12 py-3 px-4 hover:bg-gray-700 border-b border-white text-center text-sm font-semibold"
          >
            CREATE BLOGS
          </button>
          <button
            onClick={() => handleViewChange("maps")}
            className="w-11/12 py-3 px-4 hover:bg-gray-700 border-b border-white text-center text-sm font-semibold"
          >
            ADD MAPS
          </button>
          <button
            className="w-11/12 py-3 px-4 hover:bg-gray-700 border-b border-white text-center text-sm font-semibold"
          >
            CREATE ARTICLES
          </button>
         
        </nav>
      </div>
    </>
  );
}
