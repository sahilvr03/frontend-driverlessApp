"use client";

import ProtectedRoute from '@/app/protectedRoute/protectedRoute';
import { useEffect, useState } from 'react';
import Loader from '@/app/components/loader/loader';
import Image from 'next/image';
import ProductSidebar from '@/app/components/ProductpageComponents/productsidebar/page';

const ArticlePage = () => {
  const [posts, setPosts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [typeFilter, setTypeFilter] = useState('');
  const [topicFilter, setTopicFilter] = useState('');
  const [yearFilter, setYearFilter] = useState('');
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);

  const pageSize = 20;
  const apiKey = '68c0739904208071f36c545f51b19ea0'; // MediaStack API key

  const fetchPosts = async (searchQuery = '', pageNumber = 1, append = false) => {
    let apiUrl = `http://api.mediastack.com/v1/news?access_key=${apiKey}&limit=${pageSize}&offset=${(pageNumber - 1) * pageSize}`;

    if (searchQuery) apiUrl += `&keywords=${encodeURIComponent(searchQuery)}`;
    if (typeFilter) apiUrl += `&categories=${typeFilter}`;
    if (topicFilter) apiUrl += `&keywords=${encodeURIComponent(topicFilter)}`;
    if (yearFilter) apiUrl += `&date=${yearFilter}-01-01,${yearFilter}-12-31`;
    apiUrl += '&languages=en'; // Set language to English

    try {
      const res = await fetch(apiUrl);
      const data = await res.json();

      if (data.data) {
        setPosts((prevPosts) => append ? [...prevPosts, ...data.data] : data.data);
      } else {
        setPosts([]);
      }
    } catch (err) {
      console.error('Error fetching posts:', err);
      setError('Failed to load news');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
    fetchPosts(searchTerm, page + 1, true);
  };

  return (
    <ProtectedRoute allowedRoles={['user', 'admin']}>
      <div>
        {loading ? (
          <Loader />
        ) : ( 
          <div className="flex">
            <ProductSidebar/>

            <main className="flex-1 p-6">
              <button className="md:hidden block text-gray-500 focus:outline-none mb-4" onClick={toggleSidebar}>
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              </button>

              <div className="flex flex-wrap justify-between items-center mb-6">
                <div className="flex space-x-4">
                  <select className="border border-gray-300 rounded-md px-4 py-2" onChange={(e) => setTypeFilter(e.target.value)}>
                    <option value="">Type</option>
                    <option value="business">Business</option>
                    <option value="sports">Sports</option>
                  </select>
                  <select className="border border-gray-300 rounded-md px-4 py-2" onChange={(e) => setTopicFilter(e.target.value)}>
                    <option value="">Topic</option>
                    <option value="technology">Technology</option>
                    <option value="science">Science</option>
                  </select>
                  <select className="border border-gray-300 rounded-md px-4 py-2" onChange={(e) => setYearFilter(e.target.value)}>
                    <option value="">Year</option>
                    <option value="2024">2024</option>
                    <option value="2023">2023</option>
                  </select>
                </div>
                <div className="relative">
                  <input type="text" placeholder="Search here ..." className="border border-gray-300 rounded-md px-4 py-2 pr-10" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
                  <button className="absolute right-2 top-2 text-green-500" onClick={() => fetchPosts(searchTerm)}>🔍</button>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {error ? (
                  <p className="text-center text-red-500">{error}</p>
                ) : posts.length > 0 ? (
                  posts.map((post, index) => (
                    <div key={index} className="border rounded-lg overflow-hidden shadow-lg">
                      <img src={post.image} alt={post.title || 'News Image'} className="w-full h-48 object-cover" onError={(e) => e.target.src = '/fallback-image.png'} />
                      <div className="p-4">
                        <h3 className="text-lg font-bold mb-2">{post.title}</h3>
                        <span className="block mb-2 text-sm text-gray-500 uppercase">{new Date(post.published_at).toLocaleDateString()}</span>
                        <p className="text-sm text-gray-500">{post.description}</p>
                        <div className="flex justify-between items-center mt-4">
                          <a href={post.url} className="hover:text-green-600" target="_blank" rel="noopener noreferrer">↗️ Read More</a>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <p className="text-center text-gray-500">No news available.</p>
                )}
              </div>

              {posts.length > 0 && (
                <div className="flex justify-center mt-6">
                  <button className="px-6 py-3 bg-green-500 text-white rounded-md hover:bg-green-700" onClick={handleLoadMore}>
                    {loading ? 'Loading...' : 'See More'}
                  </button>
                </div>
              )}
            </main>
          </div>
        )}
      </div>
    </ProtectedRoute>
  );
};

export default ArticlePage;
