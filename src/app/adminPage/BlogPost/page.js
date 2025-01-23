"use client";

import AdminSidebar from '@/app/components/adminSidebar/page';
import { useState, useEffect } from 'react';
import Image from "next/image";
export default function AdminBlogs() {
  const [blogs, setBlogs] = useState([]);
  const [newBlog, setNewBlog] = useState({ title: '', description: '' });
  const [imageFile, setImageFile] = useState(null); // To store the image file

  // Fetch blogs for the admin
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch('https://vijay90.pythonanywhere.com/api/blogs');
        const data = await response.json();
        setBlogs(data);
      } catch (error) {
        console.error('Error fetching blogs:', error);
      }
    };
    fetchBlogs();
  }, []);

  const handleCreate = async () => {
    // Prepare form data for blog creation including the image
    const formData = new FormData();
    formData.append('title', newBlog.title);
    formData.append('description', newBlog.description);

    if (imageFile) {
      formData.append('image', imageFile); // Add the image file
    }

    // Log FormData for debugging
    for (let pair of formData.entries()) {
      console.log(`${pair[0]}: ${pair[1]}`);
    }

    // Send blog creation request to Flask backend
    try {
      const response = await fetch('https://vijay90.pythonanywhere.com/api/blogs', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`HTTP error! status: ${response.status}, message: ${errorText}`);
      }

      const result = await response.json();
      console.log(result);
      setBlogs((prevBlogs) => [...prevBlogs, { id: result.blog, title: newBlog.title, description: newBlog.description, image_url: result.image_url }]); // Update blogs list

      // Clear the form after submission
      setNewBlog({ title: '', description: '' });
      setImageFile(null);
    } catch (error) {
      console.error('Error creating blog:', error);
    }
  };

  const handleDelete = async (id) => {
    // Send blog deletion request to Flask backend
    const response = await fetch(`https://vijay90.pythonanywhere.com/api/blogs/${id}`, { method: 'DELETE' });
    if (response.ok) {
      // Optionally refetch blogs after deletion
      setBlogs((blogs) => blogs.filter((blog) => blog.id !== id));
    } else {
      console.error('Error deleting blog:', response.status);
    }
  };

  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-gray-100 p-6 lg:space-x-6">
      {/* Upload Form */}
      <div className="w-full lg:w-1/2 bg-white p-6 shadow-md rounded-lg mb-6 lg:mb-0">
        <h2 className="text-xl font-bold mb-4">Create New Blog</h2>
        <input
          type="text"
          placeholder="Title"
          className="block w-full border border-gray-300 rounded-md mb-4 px-4 py-2"
          value={newBlog.title}
          onChange={(e) => setNewBlog({ ...newBlog, title: e.target.value })}
        />
        <textarea
          placeholder="Description"
          className="block w-full border border-gray-300 rounded-md mb-4 px-4 py-2"
          value={newBlog.description}
          onChange={(e) => setNewBlog({ ...newBlog, description: e.target.value })}
        />
        <input
          type="file"
          accept="image/*"
          className="block w-full border border-gray-300 rounded-md mb-4 px-4 py-2"
          onChange={(e) => setImageFile(e.target.files[0])}
        />
        <button className="bg-green-500 text-white px-4 py-2 rounded-lg" onClick={handleCreate}>
          Create Blog
        </button>
      </div>

      {/* Blogs List */}
      <div className="w-full lg:w-1/2 bg-white p-6 shadow-md rounded-lg overflow-y-auto h-[93vh]">
        <h2 className="text-xl font-bold mb-4">Uploaded Blogs</h2>
        <div className="space-y-4">
          {blogs.length > 0 ? (
            blogs.map((blog) => (
              <div key={blog.id} className="border border-gray-300 rounded-lg shadow-lg flex">
                {blog.image_url ? (
                  <Image src={`https://vijay90.pythonanywhere.com/api/blogs/${blog.image_url}`} width={500} height={200} alt={blog.title} className="w-1/4 object-cover" />
                ) : (
                  <div className="w-1/4 bg-gray-200 flex items-center justify-center">No Image</div>
                )}
                <div className="p-4 flex-1">
                  <a href={`/blogs/${blog.id}`} className="text-lg font-bold hover:text-blue-600">
                    {blog.title}
                  </a>
                  <p className="text-sm text-gray-500 mt-2">{blog.description}</p>
                </div>
                <div className="p-4 flex items-center">
                  <button className="bg-red-500 text-white px-4 py-2 rounded-lg" onClick={() => handleDelete(blog.id)}>
                    Delete
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p>No blogs available.</p>
          )}
        </div>
      </div>
    </div>
  );
}