"use client";
import { useEffect, useState } from "react";
import { FaArrowLeft } from "react-icons/fa"; // Import back icon
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
  const[blogs, setBlogs]=useState([]);
  const [products, setProducts]=useState([]);




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
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              <div
                className="bg-[#fbbd08] text-white rounded-lg shadow-lg p-6 cursor-pointer"
                onClick={() => handleViewChange("users")}
              >
                <h2 className="text-xl font-bold">Total Users</h2>
                <p className="text-2xl">{userCount}</p>
                <a className="block mt-4 text-sm underline">Click here</a>
              </div>
              <div
                  className="bg-[#2185d0] text-white rounded-lg shadow-lg p-6 cursor-pointer"
                  onClick={() => handleViewChange("posts")}
                >
                  <h2 className="text-xl font-bold">Total Posts</h2>
                  <p className="text-2xl">{posts.length}</p>
                  <a className="block mt-4 text-sm underline">Click here</a>
                </div>

                <div className="bg-[#db2828] text-white rounded-lg shadow-lg p-6 cursor-pointer"
                  onClick={() => handleViewChange("AdminBlogs")}>
                  <h2 className="text-xl font-bold">Total Blogs</h2>
                  <p className="text-2xl">{blogs.length}</p>
                  <a className="block mt-4 text-sm underline">Click here</a>
                </div>

                <div
                  className="bg-[#a333c8] text-white rounded-lg shadow-lg p-6 cursor-pointer"
                  onClick={() => handleViewChange("products")}

                >
                  <h2 className="text-xl font-bold">Total Products</h2>
                  <p className="text-2xl">{products.length}</p>

                  <a className="block mt-4 text-sm underline">Click here</a>
                </div>

                <div className="bg-[#21ba45] text-white rounded-lg shadow-lg p-6">
                  <h2 className="text-xl font-bold">Total Maps</h2>
                  <a className="block mt-4 text-sm underline">Click here</a>
                </div>

                <div
                  className="bg-[#e03997] text-white rounded-lg shadow-lg p-6 cursor-pointer"
                   onClick={() => handleViewChange("AdminBlogs")}
                >
                  <h2 className="text-xl font-bold">Total Articles</h2>
                  <a className="block mt-4 text-sm underline">Click here</a>
                </div>

                <div className="bg-[#a333c8] text-white rounded-lg shadow-lg p-6">
                  <h2 className="text-xl font-bold">Total Requests</h2>
                  <a className="block mt-4 text-sm underline">Click here</a>
                </div>
            </div>
          </>
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
        <AdminSidebar handleViewChange={handleViewChange} />
        <div className="flex-1 p-8 bg-gray-300">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-3xl font-bold">Admin Dashboard</h1>
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
