"use client"

import Link from "next/link";
import { useState } from "react";
import Notification from "../../notificaionButton/page";


const ProductSidebar = () => {

  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };


  return (
    <aside
      className={`fixed inset-y-0 left-0 transform ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:relative md:translate-x-0 w-64 bg-gray-200 p-4 transition-transform duration-300 ease-in-out z-40`}
    >
      <h2 className="font-semibold text-lg mb-4">PRODUCTS</h2>
      <nav>
        <ul className="space-y-2">
 <Notification/>          <li>
            <Link href="./dataPage" className="block py-2 text-gray-600 hover:text-black">
              All Data
            </Link>
          </li>
          <li>
            <Link href="./articlePage" className="block py-2 text-gray-600 hover:text-black">
              All Articles
            </Link>
          </li>
          <li>
            <Link href="./toolsPage" className="block py-2 text-gray-600 hover:text-black">
              Tools
            </Link>
          </li>

          <li>
            <Link href="./mapPage" className="block py-2 text-gray-600 hover:text-black">
              Maps
            </Link>
          </li>
          

        </ul>
      </nav>
    </aside>
  )
}

export default ProductSidebar;