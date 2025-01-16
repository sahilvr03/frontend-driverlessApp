"use client";
import { useState, useEffect } from "react";
import Loader from "@/app/components/loader/loader";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar, faUser, faEye } from "@fortawesome/free-solid-svg-icons";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/products");
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }
        const data = await response.json();
        setProducts(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching products:", error);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="space-y-6 px-4 md:px-8 lg:px-12 py-8 bg-gray-50 min-h-screen">
      {loading ? (
        <Loader />
      ) : products.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="border border-gray-200 rounded-lg overflow-hidden shadow-md transition-transform transform hover:scale-105 hover:shadow-xl bg-white"
            >
              <div className="relative w-full h-48 overflow-hidden">
                <Image
                  src={product.image_url}
                  alt={product.name}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform transform hover:scale-110"
                />
              </div>
              <div className="p-4 space-y-2">
                <div className="flex items-center text-gray-400 text-xs space-x-2">
                  <FontAwesomeIcon icon={faCalendar} />
                  <span>{new Date(product.created_at).toLocaleDateString()}</span>
                  <FontAwesomeIcon icon={faUser} className="ml-4" />
                  <span>Admin</span>
                </div>
                <a href="#" className="text-lg font-semibold text-gray-800 hover:text-blue-500">
                  {product.name}
                </a>
                <p className="text-sm text-gray-600">{product.description}</p>
              </div>
              <div className="p-4 flex justify-between items-center">
                <span className="text-xs text-blue-600">View Details</span>
                <button className="bg-green-500 text-white px-4 py-1.5 rounded-full hover:bg-green-600 transition-colors flex items-center space-x-2">
                  <FontAwesomeIcon icon={faEye} />
                  <span>Preview</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500">No products available.</p>
      )}
    </div>
  );
};

export default Products;
