"use client"
import { useEffect, useState, useRef } from 'react';
import AdminSidebar from '@/app/components/adminSidebar/page';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import ProtectedRoute from '@/app/protectedRoute/protectedRoute';
import Image from "next/image";
// Fetch GPT reply function
async function fetchGPTReply(mess) {
  const apiKey = 'AIzaSyDpy_cNRUOelJqWCYrza9RfT5GTl6rHN_E'; // Replace with your actual API key
  const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`;

  const requestBody = {
    contents: [{
      parts: [{
        text: `Please provide a brief response: ${mess}`
      }]
    }]
  };

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestBody)
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(`Error: ${errorData.message || response.statusText}`);
    }

    const data = await response.json();
    if (data.candidates && data.candidates.length > 0) {
      return data.candidates[0].content.parts[0].text;
    } else {
      throw new Error('No candidates found in the response.');
    }
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}

export default function Posts() {
  const [file, setFile] = useState(null); // State for the selected file
  const [fileType, setFileType] = useState(''); // State for file type (image/video)
  const [caption, setCaption] = useState('');
  const [subtitle, setSubtitle] = useState('');
  const [message, setMessage] = useState('');
  const [useAI, setUseAI] = useState(true);
  const [posts, setPosts] = useState([]);
  const [editingPostId, setEditingPostId] = useState(null);

  const scrollContainer = useRef(null);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    const res = await fetch('https://vijay90.pythonanywhere.com/api/posts');
    const data = await res.json();
    setPosts(data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let aiResponse = caption;
    if (useAI) {
      const aiPrompt = `${caption} ${subtitle}`;
      try {
        aiResponse = await fetchGPTReply(aiPrompt);
        setCaption(aiResponse); // Use AI-generated content
      } catch (error) {
        setMessage('Error fetching AI response');
        return;
      }
    }

    const formData = new FormData();
    if (file) formData.append('file', file); // Ensure the key matches your backend expectation
    formData.append('caption', aiResponse); // Use AI response or manual input
    formData.append('subtitle', subtitle);

    const handleFetch = async (url, method) => {
      try {
        const res = await fetch(url, {
          method: method,
          body: formData,
        });

        // Log the response for debugging
        console.log('Response:', res);

        if (!res.ok) {
          const errorData = await res.json(); // Try to extract error message
          console.error('Error Data:', errorData); // Log the error data
          throw new Error(errorData.message || 'Unknown error');
        }

        return await res.json();
      } catch (error) {
        console.error('Fetch Error:', error); // Log the error for debugging
        throw error; // Propagate error to the calling function
      }
    };


    try {
      if (editingPostId) {
        // Update existing post
        const updatedPost = await handleFetch(`https://vijay90.pythonanywhere.com/api/post/${editingPostId}`, 'PUT');
        setMessage('Post updated successfully!');
        setPosts((prevPosts) =>
          prevPosts.map((post) => (post.id === editingPostId ? updatedPost : post))
        );
      } else {
        // Create new post
        const newPost = await handleFetch('https://vijay90.pythonanywhere.com/api/post', 'POST');
        setMessage('Post created successfully!');
        setPosts((prevPosts) => [...prevPosts, newPost]);
      }
    } catch (error) {
      setMessage(`Error posting data: ${error.message}`);
    } finally {
      resetForm();
    }
  };

  const resetForm = () => {
    setCaption('');
    setSubtitle('');
    setFile(null); // Reset file state
    setEditingPostId(null); // Reset editing state
  };


  const handleEdit = (post) => {
    setCaption(post.caption);
    setSubtitle(post.subtitle);
    setEditingPostId(post.id);
  };

  const handleDelete = async (id) => {
    const res = await fetch(`https://vijay90.pythonanywhere.com/api/post/${id}`, {
      method: 'DELETE'
    });

    if (res.ok) {
      setMessage('Post deleted successfully!');
      setPosts((prevPosts) => prevPosts.filter((post) => post.id !== id));
    } else {
      setMessage('Error deleting post');
    }
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

  // New function to handle file selection
  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      const type = selectedFile.type.split('/')[0]; // Get the type (image or video)
      setFile(selectedFile);
      setFileType(type); // Set file type (image/video)
    }
  };

  return (<ProtectedRoute allowedRoles={["admin"]}>
    <div className="flex min-h-screen bg-gray-100 ">


      <div className="flex-1 p-8">
        <div className="mb-4">
          <h2 className="text-3xl font-bold mb-4 text-center text-blue-700">
            {editingPostId ? 'Edit Post' : 'Create a Post'}
          </h2>
          {message && <p className="text-center text-green-600 mb-4">{message}</p>}

          <form
            onSubmit={handleSubmit}
            className="space-y-4 bg-white p-4 rounded-md shadow-lg max-w-md mx-auto border border-gray-200"
          >
            <div>
              <label className="block mb-2 text-gray-700 font-medium">Choose File:</label>
              <input
                type="file"
                onChange={handleFileChange} // Handle file selection
                className="w-full px-2 py-2 border border-gray-300 rounded focus:ring focus:ring-blue-200"
              />
            </div>


            <div>
              <label className="block mb-2 text-gray-700 font-medium">Use AI-generated caption:</label>
              <input
                type="checkbox"
                checked={useAI}
                onChange={(e) => setUseAI(e.target.checked)}
                className="mr-2"
              />
              <span>{useAI ? 'Yes' : 'No'}</span>
            </div>

            <div>
              <label className="block mb-2 text-gray-700 font-medium">Caption:</label>
              <input
                type="text"
                value={caption}
                onChange={(e) => setCaption(e.target.value)}
                className="w-full px-2 py-2 border border-gray-300 rounded focus:ring focus:ring-blue-200"
                required={!useAI} // Only required if AI is not used
                disabled={useAI} // Disable manual input if using AI
              />
            </div>

            <div>
              <label className="block mb-2 text-gray-700 font-medium">Subtitle:</label>
              <input
                type="text"
                value={subtitle}
                onChange={(e) => setSubtitle(e.target.value)}
                className="w-full px-2 py-2 border border-gray-300 rounded focus:ring focus:ring-blue-200"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-600 text-white px-3 py-2 rounded-lg font-semibold transition-all">
              {editingPostId ? 'Update Post' : 'Submit Post'}
            </button>
          </form>
        </div>

        <div className="relative max-w-5xl mx-auto mt-4">
          <div className="text-center text-lg mb-4 font-medium text-gray-700">
            Total Posts: {posts.length}
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
            {posts.map((post) => (
              <div
                key={post.id}
                className="min-w-[200px] max-w-[200px] border rounded-lg overflow-hidden shadow-md bg-white hover:shadow-lg transition p-4"
              >
                {post.media_type === 'video' ? (
                  <video
                    controls
                    className="w-full h-32 object-cover rounded-md"
                  >
                    <source src={post.media_url} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                ) : (
                  <Image
                    width={500}
                    height={200}
                    src={post.media_url} // Use media_url for images
                    alt={post.caption}
                    className="w-full h-32 object-cover rounded-md"
                  />
                )}
                <div className="pt-4">
                  <span className="block mb-2 text-xs text-gray-500 uppercase">
                    {post.subtitle}
                  </span>
                  <h3 className="text-md font-bold mb-2 text-gray-700">{post.caption}</h3>
                  <div className="flex justify-between">
                    <button
                      onClick={() => handleEdit(post)}
                      className="bg-yellow-400 text-white px-2 py-1 rounded hover:bg-yellow-500"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(post.id)}
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
  </ProtectedRoute>

  );
}
