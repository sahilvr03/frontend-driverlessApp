"use client"
import Image from "next/image";
import AdminSidebar from '@/app/components/adminSidebar/page';
// src/app/adminPage/ProductUploadPage/page.js
import { useEffect, useState, useRef } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const ProductsPage = () => {
  const [products, setProducts] = useState([]); // Initialize products as an empty array
  const [image, setImage] = useState(null);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const scrollContainer = useRef(null);
  const [message, setMessage] = useState('');
  const[ProductId,setEditingProductId]=useState('');
  


  


  const handleDelete = async (id) => {
    const res = await fetch(`http://localhost:5000/api/product/${id}`, {
      method: 'DELETE'
    });

    if (res.ok) {
      setMessage('Post deleted successfully!');
      setProducts((prevPosts) => prevPosts.filter((post) => post.id !== id));
    } else {
      setMessage('Error deleting post');
    }
  };
  const handleEdit = (products) => {
    setName(products.name);
    setDescription(products.description);
    setEditingProductId(products.id)
    
  };

  const scrollLeft = () => {
    scrollContainer.current.scrollBy({
      left: -300,
      behavior: 'smooth',
    });
  };

  const scrollRight = () => {
    scrollContainer.current.scrollBy({
      left: 300,
      behavior: 'smooth',
    });
  };

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

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create a new product with the image, name, and description using FormData
    const formData = new FormData();
    formData.append('image', image);
    formData.append('name', name);
    formData.append('description', description);

    try {
      const response = await fetch('http://localhost:5000/api/product', {
        method: 'POST',
        body: formData,
      });
      if (!response.ok) {
        throw new Error('Failed to upload product');
      }
      window.location.reload(); // Refresh page after successful upload
    } catch (error) {
      console.error(error);
      const scrollLeft = () => {
        scrollContainer.current.scrollBy({
          left: -300,
          behavior: 'smooth',
        });
      };

      const scrollRight = () => {
        scrollContainer.current.scrollBy({
          left: 300,
          behavior: 'smooth',
        });
      };
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
 
      <div className="flex-1 p-8">
        <h1 className="text-3xl font-bold mb-4 text-center text-blue-700">Products</h1>

        <form onSubmit={handleSubmit} className="space-y-4 bg-white p-4 rounded-md shadow-lg max-w-md mx-auto border border-gray-200">
          <div> <label className="block mb-2 text-gray-700 font-medium">Upload products:</label>
            <input type="file" onChange={handleImageChange} required /></div>
          <label className="block mb-2 text-gray-700 font-medium">Product Name:</label>
          <input
            type="text"
            placeholder="Product Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-2 py-2 border border-gray-300 rounded focus:ring focus:ring-blue-200"
          />
          <label className="block mb-2 text-gray-700 font-medium">Description:</label>

          <input
            type="text"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full px-2 py-2 border border-gray-300 rounded focus:ring focus:ring-blue-200"

          />
          <button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 text-white px-3 py-2 rounded-lg font-semibold transition-all">Upload Product</button>
        </form>

        <div className="relative max-w-5xl mx-auto mt-4">
          <div className="text-center text-lg mb-4 font-medium text-gray-700">
            Total Posts: {products.length}
          </div>

          <div className="absolute top-1/2 left-0 transform -translate-y-1/2 z-10">
            <button
              className="bg-blue-500 text-white p-2 rounded-full shadow-md hover:bg-blue-600 focus:outline-none"
              onClick={scrollLeft}
            >
              <FaChevronLeft />
            </button>
          </div>

          <div className="absolute top-1/2 right-0 transform -translate-y-1/2 z-10">
            <button
              className="bg-blue-500 text-white p-2 rounded-full shadow-md hover:bg-blue-600 focus:outline-none"
              onClick={scrollRight}
            >
              <FaChevronRight />
            </button>
          </div>

          <div
            ref={scrollContainer}
            className="max-h-90 overflow-x-auto mt-4 rounded-lg border border-gray-300 shadow-lg bg-white p-4 flex space-x-4"
            style={{ scrollBehavior: 'smooth' }}
          >
            {products.map((products) => (
              <div
                key={products.id}
                className="min-w-[200px] max-w-[200px] border rounded-lg overflow-hidden shadow-md bg-white hover:shadow-lg transition p-4"
              >
                <Image
                width={500} 
                height={200}
                  src={products.image_url}
                  alt={products.name}
                  className="w-full h-32 object-cover rounded-md"
                />
                <div className="pt-4">
                  <span className="block mb-2 text-xs text-gray-500 uppercase">
                    {products.subtitle}
                  </span>
                  <h3 className="text-md font-bold mb-2 text-gray-700">{products.name}</h3>
                  <div className="flex justify-between">
                    <button
                      onClick={() => handleEdit(products)}
                      className="bg-yellow-400 text-white px-2 py-1 rounded hover:bg-yellow-500"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(products.id)}
                      className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
