"use client";
import { useEffect, useState } from "react";
import { FaArrowLeft, FaUsers, FaClipboardList, FaBlog, FaShoppingCart, FaMapMarkedAlt, FaFileUpload } from "react-icons/fa"; // Improved Icons
import AdminSidebar from "../components/adminSidebar/page";
import ProtectedRoute from "../protectedRoute/protectedRoute";
import Posts from "./posts/page";
import AdminBlogs from "./BlogPost/page";
import ProductsPage from "./ProductUploadPage/page";
import UserInfo from "./Users/page";
import { useRouter } from "next/navigation";
import Loader from "../components/loader/loader";
import AdminUploadPage from "./adminUploadPage/page";

export default function Dashboard() {
  const [userCount, setUserCount] = useState(0);
  const [view, setView] = useState("dashboard");
  const [loading, setLoading] = useState(false); // Loading state
  const router = useRouter();
  const [posts, setPosts] = useState([]);
  const [blogs, setBlogs] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch all products from Flask API
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/products');
        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }
        const data = await response.json();
        setProducts(data); // Set the fetched products data to state
      } catch (error) {
        console.error(error);
      }
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    const res = await fetch('https://vijay90.pythonanywhere.com/api/blogs');
    const data = await res.json();
    setBlogs(data);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    const res = await fetch('https://vijay90.pythonanywhere.com/api/posts');
    const data = await res.json();
    setPosts(data);
  };

  useEffect(() => {
    const fetchUserCount = async () => {
      try {
        const response = await fetch("/api/userCount");
        if (!response.ok) throw new Error("Failed to fetch user count");
        const data = await response.json();
        setUserCount(data.count);
      } catch (error) {
        console.error("Error fetching user count:", error);
      }
    };

    fetchUserCount();
  }, []);

  useEffect(() => {
    if (router.query && router.query.view) {
      setView(router.query.view);
    }
  }, [router.query]);

  const handleViewChange = (newView) => {
    setLoading(true); // Start loading
    setView(newView);
    router.push(`/adminPage?view=${newView}`);
  };

  const renderContent = () => {
    switch (view) {
      case "dashboard":
        return (
          <div className="grid grid-cols-1 bg-gray-100 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-[80vw] overflow-x-scroll">
            <div
              className="bg-[#1abc9c] text-white rounded-lg shadow-lg p-6 cursor-pointer hover:shadow-xl transform hover:scale-105 transition-all"
              onClick={() => handleViewChange("users")}
            >
              <FaUsers className="text-4xl mb-4" />
              <h2 className="text-xl font-bold">Total Users</h2>
              <p className="text-2xl">{userCount}</p>
              <a className="block mt-4 text-sm underline">Click here</a>
            </div>
            <div
              className="bg-[#3498db] text-white rounded-lg shadow-lg p-6 cursor-pointer hover:shadow-xl transform hover:scale-105 transition-all"
              onClick={() => handleViewChange("posts")}
            >
              <FaClipboardList className="text-4xl mb-4" />
              <h2 className="text-xl font-bold">Total Posts</h2>
              <p className="text-2xl">{posts.length}</p>
              <a className="block mt-4 text-sm underline">Click here</a>
            </div>
            <div
              className="bg-[#e74c3c] text-white rounded-lg shadow-lg p-6 cursor-pointer hover:shadow-xl transform hover:scale-105 transition-all"
              onClick={() => handleViewChange("AdminBlogs")}
            >
              <FaBlog className="text-4xl mb-4" />
              <h2 className="text-xl font-bold">Total Blogs</h2>
              <p className="text-2xl">{blogs.length}</p>
              <a className="block mt-4 text-sm underline">Click here</a>
            </div>
            <div
              className="bg-[#9b59b6] text-white rounded-lg shadow-lg p-6 cursor-pointer hover:shadow-xl transform hover:scale-105 transition-all"
              onClick={() => handleViewChange("products")}
            >
              <FaShoppingCart className="text-4xl mb-4" />
              <h2 className="text-xl font-bold">Total Products</h2>
              <p className="text-2xl">{products.length}</p>
              <a className="block mt-4 text-sm underline">Click here</a>
            </div>
            <div
              className="bg-[#f39c12] text-white rounded-lg shadow-lg p-6 cursor-pointer hover:shadow-xl transform hover:scale-105 transition-all"
              onClick={() => handleViewChange("upload")}
            >
              <FaFileUpload className="text-4xl mb-4" />
              <h2 className="text-xl font-bold">Upload New Content</h2>
              <a className="block mt-4 text-sm underline">Click here</a>
            </div>
            <div className="bg-[#2ecc71] text-white rounded-lg shadow-lg p-6 cursor-pointer hover:shadow-xl transform hover:scale-105 transition-all">
              <FaMapMarkedAlt className="text-4xl mb-4" />
              <h2 className="text-xl font-bold">Total Maps</h2>
              <a className="block mt-4 text-sm underline">Click here</a>
            </div>
          </div>
        );
      case "posts":
        return <Posts />;
      case "AdminBlogs":
        return <AdminBlogs />;
      case "products":
        return <ProductsPage />;
      case "upload":
        return <AdminUploadPage />;
      case "users":
        return <UserInfo />;
      default:
        return null;
    }
  };

  useEffect(() => {
    // Simulate loading time for demo
    const timer = setTimeout(() => setLoading(false), 500); // Reset loading state after 500ms
    return () => clearTimeout(timer); // Cleanup on component unmount
  }, [view]);

  return (
    <ProtectedRoute allowedRoles={['admin']}>
      <div className="flex min-h-screen">
        <AdminSidebar handleViewChange={handleViewChange} /> {/* Passing the handleViewChange function as prop */}
        <div className="flex-1 p-8 bg-gray-100 overflow-x-scroll">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-3xl font-bold text-gray-800">Admin Dashboard</h1>
            {view !== "dashboard" && (
              <button
                onClick={() => setView("dashboard")}
                className="text-gray-700 hover:text-gray-900 flex items-center space-x-2"
              >
                <FaArrowLeft className="w-5 h-5" />
                <span>Back</span>
              </button>
            )}
          </div>
          {/* Display loader or content based on loading state */}
          {loading ? <Loader /> : renderContent()}
        </div>
      </div>
    </ProtectedRoute>
  );
}
