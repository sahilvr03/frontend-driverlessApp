// Navbar.js
"use client";

import { useUser } from "../../context/UserContext";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Swal from "sweetalert2";

const Navbar = () => {
  const { user, logout } = useUser();
  console.log("Current user:", user);
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = async () => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "You will be logged out!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, logout!",
      cancelButtonText: "No, stay logged in",
      background: "#ffffff",
      color: "#1e293b",
      confirmButtonColor: "#dc2626",
      cancelButtonColor: "#94a3b8",
    });

    if (result.isConfirmed) {
      await logout();
      Swal.fire({
        title: "Logged out!",
        text: "You have been successfully logged out.",
        icon: "success",
        background: "#ffffff",
        color: "#1e293b",
        confirmButtonColor: "#10b981",
      });
      router.push("/");
      localStorage.clear();
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Searching for:", searchQuery);
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-md shadow-black/5 py-3"
          : "bg-white py-5"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo - Big and prominent */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-red-500/20">
                <svg
                  className="w-7 h-7 text-white"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8 10h-2v4h2v-4zm6 0h-2v4h2v-4zm5-6v12a2 2 0 01-2 2H5a2 2 0 01-2-2V4a2 2 0 012-2h14a2 2 0 012 2z"
                  />
                </svg>
              </div>
              <div className="absolute -inset-1 bg-gradient-to-r from-red-500 to-red-600 rounded-xl opacity-0 group-hover:opacity-30 blur transition-opacity duration-500"></div>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-3xl tracking-tight">
                <span className="bg-gradient-to-r from-red-600 to-red-500 bg-clip-text text-transparent">
                  RCAI
                </span>
                <span className="text-gray-700 font-light text-2xl ml-1">
                  Mobility
                </span>
              </span>
              <span className="text-xs text-gray-500 -mt-1">
                Research Lab
              </span>
            </div>
          </Link>

          {/* Search Bar - Desktop */}
          <div className="hidden lg:block flex-1 max-w-md mx-8">
            <form onSubmit={handleSearch} className="relative">
              <input
                type="text"
                placeholder="Search research papers, publications..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 text-sm bg-gray-50 border border-gray-200 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:border-red-300 focus:ring-1 focus:ring-red-300 transition-all"
              />
              <svg
                className="absolute left-3 top-2.5 w-4 h-4 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </form>
          </div>

          {/* Desktop Navigation - Original links */}
          <div className="hidden lg:flex lg:items-center lg:space-x-6">
            <Link href="/" className="text-sm font-medium text-gray-600 hover:text-red-600 transition-colors">
              Home
            </Link>
            {/* <Link href="/#about" className="text-sm font-medium text-gray-600 hover:text-red-600 transition-colors">
              About Us
            </Link> */}
            <Link href="../studentPage/tech" className="text-sm font-medium text-gray-600 hover:text-red-600 transition-colors">
              Technology
            </Link>

                <Link href="../studentPage/servicesPage" className="text-sm font-medium text-gray-600 hover:text-red-600 transition-colors">
                  Services
                </Link>
                <Link href="../studentPage/termsPage" className="text-sm font-medium text-gray-600 hover:text-red-600 transition-colors">
                  Terms
                </Link>
            
            {user ? (
              <>
                {/* <Link href="../studentPage/dataPage" className="text-sm font-medium text-gray-600 hover:text-red-600 transition-colors">
                  Products
                </Link> */}
                {/* <Link href="../studentPage/newsPage" className="text-sm font-medium text-gray-600 hover:text-red-600 transition-colors">
                  News
                </Link> */}
              
                {user.role === "admin" && (
                  <Link href="/adminPage" className="text-sm font-medium text-gray-600 hover:text-red-600 transition-colors">
                    Adminpage
                  </Link>
                )}
                <button
                  onClick={handleLogout}
                  className="px-4 py-2 text-sm font-medium text-red-600 bg-red-50 border border-red-200 rounded-lg hover:bg-red-100 hover:border-red-300 transition-all duration-200"
                >
                  Log out
                </button>
              </>
            ) : (
              <button
                onClick={() => router.push("/Login")}
                className="px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-red-600 to-red-500 rounded-lg hover:from-red-700 hover:to-red-600 transition-all duration-200 shadow-lg shadow-red-500/20"
              >
                Log in
              </button>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <svg
              className="w-6 h-6 text-gray-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ${
            isOpen ? "max-h-[600px] opacity-100 mt-4" : "max-h-0 opacity-0"
          }`}
        >
          <div className="py-4 space-y-4 border-t border-gray-200">
            {/* Mobile Search */}
            <form onSubmit={handleSearch} className="relative">
              <input
                type="text"
                placeholder="Search research..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-3 py-2.5 text-sm bg-gray-50 border border-gray-200 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:border-red-300 focus:ring-1 focus:ring-red-300"
              />
              <svg
                className="absolute left-3 top-3 w-4 h-4 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </form>

            {/* Mobile Navigation - Original mobile links */}
            <div className="space-y-2">
              <Link 
                href="/" 
                className="block px-3 py-2 text-sm font-medium text-gray-600 hover:text-red-600 rounded-lg hover:bg-gray-50"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              {/* <Link 
                href="/#about" 
                className="block px-3 py-2 text-sm font-medium text-gray-600 hover:text-red-600 rounded-lg hover:bg-gray-50"
                onClick={() => setIsOpen(false)}
              >
                About Us
              </Link> */}
              <Link 
                href="../studentPage/tech" 
                className="block px-3 py-2 text-sm font-medium text-gray-600 hover:text-red-600 rounded-lg hover:bg-gray-50"
                onClick={() => setIsOpen(false)}
              >
                Technology
              </Link>

                <Link 
                    href="../studentPage/termsPage" 
                    className="block px-3 py-2 text-sm font-medium text-gray-600 hover:text-red-600 rounded-lg hover:bg-gray-50"
                    onClick={() => setIsOpen(false)}
                  >
                    Terms
                  </Link>

                    <Link 
                    href="../studentPage/servicesPage" 
                    className="block px-3 py-2 text-sm font-medium text-gray-600 hover:text-red-600 rounded-lg hover:bg-gray-50"
                    onClick={() => setIsOpen(false)}
                  >
                    Services
                  </Link>
              
              {user ? (
                <>
                
                  {/* <Link 
                    href="../studentPage/articlePage" 
                    className="block px-3 py-2 text-sm font-medium text-gray-600 hover:text-red-600 rounded-lg hover:bg-gray-50"
                    onClick={() => setIsOpen(false)}
                  >
                    News
                  </Link>
                  <Link 
                    href="../studentPage/productPage" 
                    className="block px-3 py-2 text-sm font-medium text-gray-600 hover:text-red-600 rounded-lg hover:bg-gray-50"
                    onClick={() => setIsOpen(false)}
                  >
                    Product
                  </Link> */}
                
                  {user.role === "admin" && (
                    <Link 
                      href="/adminPage" 
                      className="block px-3 py-2 text-sm font-medium text-gray-600 hover:text-red-600 rounded-lg hover:bg-gray-50"
                      onClick={() => setIsOpen(false)}
                    >
                      Adminpage
                    </Link>
                  )}
                  <button
                    onClick={() => {
                      handleLogout();
                      setIsOpen(false);
                    }}
                    className="w-full mt-2 px-4 py-2.5 text-sm font-medium text-red-600 bg-red-50 border border-red-200 rounded-lg hover:bg-red-100 transition-all"
                  >
                    Log out
                  </button>
                </>
              ) : (
                <button
                  onClick={() => {
                    router.push("/Login");
                    setIsOpen(false);
                  }}
                  className="w-full mt-2 px-4 py-2.5 text-sm font-medium text-white bg-gradient-to-r from-red-600 to-red-500 rounded-lg hover:from-red-700 hover:to-red-600 transition-all"
                >
                  Log in
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;