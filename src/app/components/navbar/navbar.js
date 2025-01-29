// Navbar.js
"use client"; // Add this line at the top

import { useUser } from "../../context/UserContext"; // Import the useUser hook
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Swal from "sweetalert2"; // Import SweetAlert2

const Navbar = () => {
  const { user, logout } = useUser(); // Access user and logout function from context
  console.log("Current user:", user); // Debugging line
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

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
      cancelButtonText: "No, stay logged in"
    });
  
    if (result.isConfirmed) {
      await logout(); // Perform the logout action
      Swal.fire("Logged out!", "You have been successfully logged out.", "success");
      router.push('/'); // Redirect to home after logout
      localStorage.clear()
    } else {
      Swal.fire("Cancelled", "You are still logged in!", "info");
    }
  };

  return (
    <nav className="bg-gray-800 text-white p-4 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <a href="#" className="text-xl font-bold">
          SelfDriveWeb
        </a>
        <div className="flex items-center lg:hidden ml-auto">
          <button className="text-white block" onClick={toggleMenu}>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
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

        <div className={`lg:flex lg:items-center lg:space-x-6 hidden`}>
          <Link href="/" className="block py-2 hover:text-gray-300">
            Home
          </Link>
          <Link href="/#about" className="hover:text-gray-300">
            About Us
          </Link>
          <Link href="../studentPage/tech" className="hover:text-gray-300">
            Technology
          </Link>
          {user ? (
            <>
              <Link
                href="../studentPage/dataPage"
                className="hover:text-gray-300"
              >
                Products
              </Link>
              <Link
                href="../studentPage/newsPage"
                className="hover:text-gray-300"
              >
                News
              </Link>
             
              <Link
                href="../studentPage/servicesPage"
                className="hover:text-gray-300"
              >
                Services
              </Link>
              {/* <Link
                href="../studentPage/dashboardPage"
                className="hover:text-gray-300"
              >
                Dashboard
              </Link> */}
              <Link
                href="../studentPage/termsPage"
                className="hover:text-gray-300"
              >
                Terms
              </Link>
              {user.role === "admin" && (
                <Link href="/adminPage" className="hover:text-gray-300">
                  Adminpage
                </Link>
              )}
              <button
                className="bg-transparent border border-white py-2 px-4 rounded hover:bg-rose-600 hover:text-white"
                onClick={handleLogout}
              >
                Log out
              </button>
            </>
          ) : (
            <>
             
              <button
                className="bg-transparent border border-white py-2 px-4 rounded hover:bg-white hover:text-gray-900"
                onClick={() => router.push("/Login")}
              >
                Log in
              </button>
            </>
          )}
        </div>
      </div>

      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-gray-800 p-4 lg:hidden z-50 gap-5 flex flex-wrap">
          <Link href="/" className="block py-2 hover:text-gray-300">
            Home
          </Link>
          <Link href="/#about" className="block py-2 hover:text-gray-300">
            About Us
          </Link>
          <Link href="../studentPage/tech" className="block py-2 hover:text-gray-300">
            Technology
          </Link>
          
          {user ? (
            <>
              
              <Link
                href="../studentPage/servicesPage"
                className="block py-2 hover:text-gray-300"
              >
                Services
              </Link>
              <Link
                href="../studentPage/tech"
                className="block py-2 hover:text-gray-300"
              >
                Technology
              </Link>
              <Link
                href="../studentPage/articlePage"
                className="block py-2 hover:text-gray-300"
              >
                News
              </Link>

              <Link
                href="../studentPage/productPage"
                className="block py-2 hover:text-gray-300"
              >
                Product
              </Link>
              
              {user.role === "admin" && (
                <Link href="/adminPage" className="block py-2 hover:text-gray-300">
                  Adminpage
                </Link>
              )}
              <button
                className="bg-transparent border border-white w-full py-2 mt-4 rounded hover:bg-rose-600 hover:text-white"
                onClick={handleLogout}
              >
                Log out
              </button>
            </>
          ) : (
            <>
              {/* <Link
                href="../studentPage/productPage"
                className="hover:text-gray-300"
              >
                ProductsS
              </Link> */}
             
              <button
                className="bg-transparent border border-white w-full py-2 mt-4 rounded hover:bg-rose-600 hover:text-white"
                onClick={() => router.push("/Login")}
              >
                Log in
              </button>
            </>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
