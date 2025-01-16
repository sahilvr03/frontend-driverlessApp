"use client"

import React from "react"
import Image from "next/image";
const RecentBlogs =()=>{
    return(
        <div>
              <aside className="w-1/4 p-4 bg-gray-100">
    <h2 className="font-semibold text-lg mb-4 ">Recent Blogs</h2>

    {/* Scrollable container for recent blogs */}
    <div className="space-y-4 h-80 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 ">
    {blogs.length > 0 ? (
      // Sort blogs by creation date in descending order (most recent first)
      blogs
        .sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
        .slice(0, 5) // Show only the 5 most recent blogs
        .map((blog) => (
          <div key={blog.id} className="border border-gray-300 rounded-lg p-2 flex items-start font-mono">
            {/* Blog image */}
            <Image
              src={constructImageUrl(blog.image_url)}
              alt={blog.title}
              className="w-16 h-16 object-cover rounded-md mr-3"
            />
            <div className="flex-1">
              {/* Blog title with a more attractive font */}
              <a href={`/blogs/${blog.id}`} className="font-semibold text-gray-600 text-sm font-sans  hover:text-gray-900 hover:font-bold" >
                {blog.title}
              </a>
              <p className="text-xs text-gray-500 mt-1">
                {new Date(blog.created_at).toLocaleString()} {/* Format date and time */}
              </p>
            </div>
          </div>
        ))
    ) : (
      <p>No recent blogs available.</p>
    )}
    </div>
    </aside>
        </div>
    )
}
export default RecentBlogs;