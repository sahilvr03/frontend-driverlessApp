"use client";
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { BsBookmark, BsChat } from 'react-icons/bs';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Loader from "../../components/loader/loader";
import BlogPostPrompt from '../../components/BlogPage/blogPostPromt';
import ProfileCard from '../../components/BlogPage/ProfileCard';
import { FaPaperPlane } from 'react-icons/fa';




export default function Blogs() {
  const [blogs, setBlogs] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // Loader state
  const [searchTerm, setSearchTerm] = useState('');
  const [comments, setComments] = useState({});
  const [userLikes, setUserLikes] = useState({});
  const [userDislikes, setUserDislikes] = useState({});
  const [showCommentInput, setShowCommentInput] = useState({});
  const [commentText, setCommentText] = useState({});
  const [likesData, setLikesData] = useState({});




  const handleCommentSubmit = async (id) => {
    const username = localStorage.getItem("username"); // Retrieve username from localStorage
    const text = commentText[id];  // Get the comment text for this blog
  
    if (!username) {
      alert("Please log in to comment on the blog.");
      return;
    }
  
    if (!text.trim()) {
      alert("Comment cannot be empty.");
      return;
    }
  
    // Optimistically update the comments state
    setComments((prevComments) => ({
      ...prevComments,
      [id]: [...(prevComments[id] || []), { username, content: text }],  // Add the new comment to the list
    }));
  
    // Clear the comment text after submission
    setCommentText((prevText) => ({
      ...prevText,
      [id]: '',
    }));
  
    try {
      const response = await fetch(`http://localhost:5000/api/blogs/${id}/comments`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: username,  // Send the username along with the comment
          content: text,  // Send the comment text
        }),
      });
  
      if (!response.ok) {
        throw new Error(`Failed to submit comment: ${response.statusText}`);
      }
  
      const data = await response.json();  // Get the updated comments from the response
      // Update the local state for comments with the returned comment from the server if needed
      setComments((prevComments) => ({
        ...prevComments,
        [id]: [...(prevComments[id] || []), data.comment],  // Add the new comment
      }));
  
    } catch (error) {
      console.error('Error submitting comment:', error);
    }
  };
  

  const fetchPostDetails = async (postId) => {
    const username = localStorage.getItem("username");
  
    try {
      const response = await fetch(`http://localhost:5000/api/blogs/${postId}/details?username=${username}`);
      const data = await response.json();
  
      // Update comments and likes data
      setComments((prev) => ({
        ...prev,
        [postId]: data.comments,
      }));
  
      setLikesData((prev) => ({
        ...prev,
        [postId]: data.likes,
      }));
  
      // Update the user's like status
      setUserLikes((prevLikes) => ({
        ...prevLikes,
        [postId]: data.liked_by_user,
      }));
    } catch (error) {
      console.error('Error fetching post details:', error);
    }
  };
  

useEffect(() => {
  let isMounted = true; // Track if component is mounted

  const fetchBlogs = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/blogs');
      
      // Check if the response is successful
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      
      if (isMounted) {
        setBlogs(data); // Update blogs state only if component is still mounted
        setIsLoading(false);

        // Fetch post details for each blog
        data.forEach(async (blog) => {
          try {
            await fetchPostDetails(blog.id);
          } catch (error) {
            console.error(`Error fetching details for blog ${blog.id}:`, error);
          }
        });
      }
    } catch (error) {
      console.error('Error fetching blogs:', error);
    }
  };

  fetchBlogs();

  // Cleanup function to avoid memory leaks
  return () => {
    isMounted = false;
  };
}, [blogs]);

  
 useEffect(() => {
  const fetchUserLikes = async () => {
    const username = localStorage.getItem("username");
    if (!username) return;

    try {
      const response = await fetch(`http://localhost:5000/api/user/likes/${username}`);
      const data = await response.json();
      const likedPosts = data.likes.reduce((acc, postId) => {
        acc[postId] = true;
        return acc;
      }, {});
      setUserLikes(likedPosts);
    } catch (error) {
      console.error('Error fetching user likes:', error);
    }
  };

  fetchUserLikes();
}, []);


const handleLike = async (id) => {
  const username = localStorage.getItem("username");
  if (!username) {
    alert("Please log in to like the blog.");
    return;
  }

  const isLiked = userLikes[id];
  const endpoint = isLiked
    ? `http://localhost:5000/api/blogs/${id}/unlike`
    : `http://localhost:5000/api/blogs/${id}/like`;

  try {
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username }),
    });

    if (!response.ok) {
      throw new Error(`Failed to toggle like: ${response.statusText}`);
    }

    await fetchPostDetails(id);

    // Toggle the like state locally
    setUserLikes((prevLikes) => ({
      ...prevLikes,
      [id]: !isLiked,
    }));
  } catch (error) {
    console.error('Error toggling like:', error);
  }
};
 

  // Handle disliking a blog
  const handleDislike = (id) => {
    const isDisliked = userDislikes[id];
    const endpoint = isDisliked
      ? `http://localhost:5000/api/blogs/${id}/undislike`
      : `http://localhost:5000/api/blogs/${id}/dislike`;

    fetch(endpoint, {
      method: 'POST',
    })
      .then((response) => response.json())
      .then((data) => {
        setBlogs((prevBlogs) =>
          prevBlogs.map((blog) =>
            blog.id === id ? { ...blog, dislikes: data.dislikes } : blog
          )
        );
        setUserDislikes((prevDislikes) => ({
          ...prevDislikes,
          [id]: !isDisliked,
        }));
        setUserLikes((prevLikes) => ({
          ...prevLikes,
          [id]: false, // Remove like if user dislikes
        }));
      })
      .catch((error) => console.error('Error disliking blog:', error));
  };
 // Toggle comment input visibility
 const handleCommentIconClick = (id) => {
  setShowCommentInput((prevState) => ({
    ...prevState,
    [id]: !prevState[id],
  }));
};

// Handle comment text change
const handleCommentChange = (id, text) => {
  setCommentText((prevText) => ({
    ...prevText,
    [id]: text,
  }));
};
  const constructImageUrl = (imagePath) => {
    return `http://localhost:5000${imagePath}`; // Adjust to your Flask backend URL
  };

  const [isSidebarOpen, setSidebarOpen] = useState(false);

  // Toggle Sidebar visibility
  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="container mx-auto flex flex-col md:flex-row">
          {/* Sidebar */}
          <aside
            className={`fixed inset-y-0 left-0 transform ${
              isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
            } md:relative md:translate-x-0 w-64 bg-gray-100 p-4 transition-transform duration-300 ease-in-out z-40`}
          >
            <ProfileCard />
          </aside>
  
          {/* Main Content */}
          <main className="flex-1 p-6 mx-auto">
            {/* Hamburger Menu for Mobile */}
            <button
              className="md:hidden block text-gray-500 focus:outline-none mb-4"
              onClick={toggleSidebar}
            >
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
  
            <div className="mb-5">
              <BlogPostPrompt />
            </div>
  
            {/* Blog List */}
            <div className="space-y-6">
              {Array.isArray(blogs) && blogs.length > 0 ? (
                blogs
                  .filter((blog) =>
                    blog.title.toLowerCase().includes(searchTerm.toLowerCase())
                  )
                  .map((blog) => (
                    <div
                      key={blog.id}
                      className="border border-gray-300 rounded-lg shadow-lg flex flex-col justify-between p-4 mx-5"
                      style={{ maxWidth: '800px' }}
                    >
                      {/* Blog Content */}
                      <div className="mb-4">
                        <img
                          src={constructImageUrl(blog.image_url)}
                          alt={blog.title}
                          className="w-full object-contain rounded-lg mb-2"
                          style={{ height: '300px' }}
                          loading="lazy"
                        />
                        <a
                          href={`/blogs/${blog.id}`}
                          className="text-lg font-bold hover:text-blue-600 block"
                        >
                          {blog.title}
                        </a>
                        <p className="text-sm text-gray-500 mt-2">
                          {blog.description}
                        </p>
                      </div>
  
                      {/* Like and Comment Section */}
                      <div className="flex flex-col mt-4 space-y-2">
  {/* Like Section */}
  <div className="flex items-center space-x-4">
        <button onClick={() => handleLike(blog.id)}>
        {userLikes[blog.id] ? (
      <AiFillHeart
        onClick={() => handleLike(blog.id)}
        className="text-red-500 cursor-pointer"
      />
    ) : (
      <AiOutlineHeart
        onClick={() => handleLike(blog.id)}
        className="cursor-pointer"
      />
    )}

    </button>
    <span>{likesData[blog.id] || 0} likes</span>

    {/* Comment Section */}
    <button onClick={() => handleCommentIconClick(blog.id)}>
      <BsChat className="text-2xl" />
    </button>
    <button onClick={() => setShowCommentInput((prev) => ({ ...prev, [blog.id]: !prev[blog.id] }))}>
      <span className="text-blue-600 cursor-pointer">
        View all comments ({comments[blog.id]?.length || 0})
      </span>
    </button>
  </div>

  {/* Comment List */}
  {showCommentInput[blog.id] && comments[blog.id]?.length > 0 && (
    <div className="mt-2 space-y-4">
      {comments[blog.id].map((comment, index) => (
        <div key={index} className="flex items-start space-x-3">
          <div className="w-8 h-8 rounded-full bg-gray-300">
            <Image
              src="/path/to/default/profile.jpg" // Replace with actual profile image URL if available
              alt="Profile"
              width={32}
              height={32}
              className="rounded-full object-cover"
            />
          </div>
          <div className="flex-1">
            <p className="text-sm font-semibold">{comment?.username}</p>
            <p className="text-sm text-gray-700">{comment?.content }</p>
          </div>
        </div>
      ))}
    </div>
  )}
</div>

  
                      {/* Comment Input Form */}
          {/* Comment Input Form */}
          {showCommentInput[blog.id] && (
            <div className="mt-2 flex items-center">
              <input
                type="text"
                placeholder="Add a comment..."
                value={commentText[blog.id] || ''}
                onChange={(e) => handleCommentChange(blog.id, e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') handleCommentSubmit(blog.id);
                }}
                className="flex-1 border border-gray-300 rounded-md px-4 py-2 focus:outline-none"
              />
              <button onClick={() => handleCommentSubmit(blog.id)}>
                <FaPaperPlane className="text-blue-500 text-xl ml-2" />
              </button>
            </div>
          )}

                    </div>
                  ))
              ) : (
                <p>No blogs available.</p>
              )}
            </div>
          </main>
  
          {/* Search and Recent Blogs Section */}
          <aside className="w-full md:w-1/4 p-4 bg-gray-100">
            <div className="w-56 relative mb-6 mx-5 flex items-center">
              <input
                type="text"
                placeholder="Search blogs..."
                className="w-full border border-gray-300 rounded-md px-4 py-2"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
  
            <h2 className="font-semibold text-lg mb-4">Recent Blogs</h2>
  
            {/* Scrollable Container for Recent Blogs */}
            <div className="space-y-4 h-80 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300">
              {Array.isArray(blogs) && blogs.length > 0 ? (
                blogs
                  .sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
                  .slice(0, 5)
                  .map((blog) => (
                    <div
                      key={blog.id}
                      className="border border-gray-300 rounded-lg p-2 flex items-start"
                    >
                      <img
                        src={constructImageUrl(blog.image_url)}
                        alt={blog.title}
                        className="w-16 h-16 object-cover rounded-md mr-3"
                        loading="lazy"
                      />
                      <div className="flex-1">
                        <a
                          href={`/blogs/${blog.id}`}
                          className="font-semibold text-sm hover:text-gray-900"
                        >
                          {blog.title}
                        </a>
                        <p className="text-xs text-gray-500 mt-1">
                          {new Date(blog.created_at).toLocaleString()}
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
      )}
    </div>
  );
}