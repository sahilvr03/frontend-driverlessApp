"use client";
import { useEffect, useState } from "react";
import { FaArrowLeft, FaUserAlt, FaUsers, FaClipboardList, FaBlog, FaShoppingCart, FaMapMarkedAlt, FaFileUpload, FaTags } from "react-icons/fa"; // Improved Icons
import ProtectedRoute from "../protectedRoute/protectedRoute";
import Posts from "./posts/page";
import AdminBlogs from "./BlogPost/page";
import ProductsPage from "./ProductUploadPage/page";
import UserInfo from "./Users/page";
import { useRouter } from "next/navigation";
import Loader from "../components/loader/loader";
import AdminUploadPage from "./adminUploadPage/page";
import { FaBars, FaTimes } from "react-icons/fa";
import { useUser } from "../context/UserContext"; // Assuming you have user context
import { db } from '../firebaseConfig/auth'; // Adjust according to your project structure
import { doc, getDoc } from "firebase/firestore"; // Firebase Firestore functions
import Image from "next/image";
import MentionForm from "./mentionsupload/page";

export default function Dashboard() {
  const { user } = useUser(); // Assuming user context provides user data
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [userProfile, setUserProfile] = useState(null);
  const [userCount, setUserCount] = useState(0);
  const [view, setView] = useState("dashboard");
  const [loading, setLoading] = useState(false); // Loading state
  const router = useRouter();
  const [posts, setPosts] = useState([]);
  const [blogs, setBlogs] = useState([]);
  const [products, setProducts] = useState([]);

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
            <div className="bg-[#e231cb] text-white rounded-lg shadow-lg p-6 cursor-pointer hover:shadow-xl transform hover:scale-105 transition-all"
              onClick={() => handleViewChange("mentions")}>
              <FaTags className="text-4xl mb-4" />
              <h2 className="text-xl font-bold">Mentions</h2>
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
      case "mentions":
        return <MentionForm />;
      default:
        return null;
    }
  };

  useEffect(() => {
    // Simulate loading time for demo
    const timer = setTimeout(() => setLoading(false), 500); // Reset loading state after 500ms
    return () => clearTimeout(timer); // Cleanup on component unmount
  }, [view]);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <ProtectedRoute allowedRoles={['admin']}>
      <div className="flex min-h-screen bg-gray-200">
{/* Sidebar */}
<div
  className={`fixed lg:sticky lg:top-0 h-screen w-60 bg-gray-800 text-white flex flex-col items-center pt-2 transition-transform duration-300 z-40 lg:z-auto ${isSidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
    }`}
>
  <button
    className="text-3xl lg:hidden text-black fixed top-16 left-4 z-50"
    onClick={toggleSidebar}
  >
    {isSidebarOpen ? <FaTimes /> : <FaBars />}
  </button>

  <div className="mb-8 text-center">
  {userProfile ? (
  <>
    {/* Demo User Icon */}
    <div className="w-24 h-24 rounded-full bg-gray-500 flex items-center justify-center mb-2">
      <FaUserAlt className="text-white text-4xl" />
    </div>
    <p className="mt-2 text-2xl font-semibold">{userProfile.username}</p>
  </>
) : (
  <p>Loading...</p>
)}

  </div>


  <nav className="w-full flex flex-col items-center space-y-2">
  <button
    className={`w-11/12 py-3 px-4 border-b border-white text-center text-xl font-semibold ${view === "dashboard" ? "bg-gray-700 cursor-not-allowed" : "hover:bg-gray-700"}`}
    onClick={() => handleViewChange("dashboard")}
    disabled={view === "dashboard"}
  >
    Dashboard
  </button>
  <button
    className={`w-11/12 py-3 px-4 border-b border-white text-center text-sm font-semibold ${view === "upload" ? "bg-gray-700 cursor-not-allowed" : "hover:bg-gray-700"}`}
    onClick={() => handleViewChange("upload")}
    disabled={view === "upload"}
  >
    UPLOAD-DATA
  </button>
  <button
    className={`w-11/12 py-3 px-4 border-b border-white text-center text-sm font-semibold ${view === "posts" ? "bg-gray-700 cursor-not-allowed" : "hover:bg-gray-700"}`}
    onClick={() => handleViewChange("posts")}
    disabled={view === "posts"}
  >
    POSTS
  </button>
  <button
    className={`w-11/12 py-3 px-4 border-b border-white text-center text-sm font-semibold ${view === "AdminBlogs" ? "bg-gray-700 cursor-not-allowed" : "hover:bg-gray-700"}`}
    onClick={() => handleViewChange("AdminBlogs")}
    disabled={view === "AdminBlogs"}
  >
    BLOGS
  </button>
  <button
    className={`w-11/12 py-3 px-4 border-b border-white text-center text-sm font-semibold ${view === "products" ? "bg-gray-700 cursor-not-allowed" : "hover:bg-gray-700"}`}
    onClick={() => handleViewChange("products")}
    disabled={view === "products"}
  >
    PRODUCTS
  </button>
  <button
    className={`w-11/12 py-3 px-4 border-b border-white text-center text-sm font-semibold ${view === "maps" ? "bg-gray-700 cursor-not-allowed" : "hover:bg-gray-700"}`}
    onClick={() => handleViewChange("maps")}
    disabled={view === "maps"}
  >
    ADD MAPS
  </button>
  <button
    className={`w-11/12 py-3 px-4 border-b border-white text-center text-sm font-semibold ${view === "articles" ? "bg-gray-700 cursor-not-allowed" : "hover:bg-gray-700"}`}
    onClick={() => handleViewChange("articles")}
    disabled={view === "articles"}
  >
    CREATE ARTICLES
  </button>
</nav>

</div>


        <div className="flex-grow p-4 bg-gray-100 overflow-x-scroll">
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

        
          {loading ? <Loader /> : renderContent()}</div>
      </div>
    </ProtectedRoute>
  );
}
