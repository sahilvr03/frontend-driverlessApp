"use client";

// import ProtectedRoute from '@/app/protectedRoute/protectedRoute';
// import { useEffect, useState } from 'react';
// import Loader from '@/app/components/loader/loader';

// const NewsPage = () => {
//   const [posts, setPosts] = useState([]);
//   const [loading, setLoading] = useState(true); // Initialize loading state as true
//   const [isSidebarOpen, setSidebarOpen] = useState(false);

//   useEffect(() => {
//     // Fetch the posts from the Flask API
//     const fetchPosts = async () => {
//       try {
//         const res = await fetch('http://localhost:5000/api/posts');
//         const data = await res.json();
//         setPosts(data);
//       } catch (error) {
//         console.error('Error fetching posts:', error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchPosts();
//   }, []);

//   // Toggle Sidebar visibility
//   const toggleSidebar = () => {
//     setSidebarOpen(!isSidebarOpen);
//   };

//   return (
//     <ProtectedRoute allowedRoles={['user', 'admin']}>
//       <div>
//         {loading ? (
//           <Loader />
//         ) : (
//           <div className="flex">
//             {/* Sidebar */}
//             <aside
//               className={`fixed inset-y-0 left-0 transform ${
//                 isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
//               } md:relative md:translate-x-0 w-64 bg-gray-100 p-4 transition-transform duration-300 ease-in-out z-40`}
//             >
//               <h2 className="font-semibold text-lg mb-4">News</h2>
//               <nav>
//                 <ul className="space-y-2">
//                   <li>
//                     <a href="#" className="block py-2 text-gray-600 hover:text-black">Field News</a>
//                   </li>
//                   <li>
//                     <a href="#" className="block py-2 text-gray-600 hover:text-black">State News</a>
//                   </li>
//                   <li>
//                     <a href="#" className="block py-2 text-gray-600 hover:text-black">Publications</a>
//                   </li>
//                   <li>
//                     <a href="#" className="block py-2 text-gray-600 hover:text-black">Research News</a>
//                   </li>
//                 </ul>
//               </nav>
//             </aside>

//             {/* Main Content */}
//             <main className="flex-1 p-6">
//               {/* Hamburger Menu for Mobile */}
//               <button
//                 className="md:hidden block text-gray-500 focus:outline-none mb-4"
//                 onClick={toggleSidebar}
//                 aria-label="Toggle sidebar"
//               >
//                 <svg
//                   className="w-8 h-8"
//                   fill="none"
//                   stroke="currentColor"
//                   viewBox="0 0 24 24"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
//                 </svg>
//               </button>

//               {/* Filters */}
//               <div className="flex flex-wrap justify-between items-center mb-6">
//                 <div className="flex space-x-4">
//                   <select className="border border-gray-300 rounded-md px-4 py-2">
//                     <option>Type</option>
//                   </select>
//                   <select className="border border-gray-300 rounded-md px-4 py-2">
//                     <option>Topic</option>
//                   </select>
//                   <select className="border border-gray-300 rounded-md px-4 py-2">
//                     <option>Year</option>
//                   </select>
//                 </div>
//                 <div className="relative">
//                   <input
//                     type="text"
//                     placeholder="Search here ..."
//                     className="border border-gray-300 rounded-md px-4 py-2 pr-10"
//                   />
//                   <button className="absolute right-2 top-2 text-green-500" aria-label="Search">
//                     🔍
//                   </button>
//                 </div>
//               </div>

//               <div className="container">
//                 <h2 className="font-semibold text-xl mb-4">NEWS</h2>
//               </div>

//               {/* News Cards Grid */}
//               <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//                 {posts.length > 0 ? (
//                   posts.map((post) => (
//                     <div key={post.id} className="border rounded-lg overflow-hidden shadow-lg">
//                       {post.media_type === 'video' ? (
//                         <video
//                           className="w-full h-48 object-cover"
//                           controls
//                           src={post.media_url}
//                         >
//                           Your browser does not support the video tag.
//                         </video>
//                       ) : (
//                         <Image
//                           src={post.media_url}
//                           alt={post.caption || 'News Image'}
//                           className="w-full h-48 object-contain"
//                           onError={(e) => {
//                             e.target.onerror = null; // Prevents looping
//                             // Add a fallback image if needed
//                           }}
//                         />
//                       )}
//                       <div className="p-4">
//                         <h3 className="text-lg font-bold mb-2">{post.caption}</h3>
//                         <span className="block mb-2 text-sm text-gray-500 uppercase">{post.subtitle}</span>

//                         {/* Interaction buttons */}
//                         <div className="flex justify-between items-center mt-4">
//                           <div className="flex space-x-4 text-gray-500">
//                             <button className="hover:text-red-600" aria-label="Like">❤️ 143</button>
//                             <button className="hover:text-blue-600" aria-label="Comment">💬 28</button>
//                           </div>
//                           <button className="hover:text-green-600" aria-label="Share">↗️ Share</button>
//                         </div>
//                       </div>
//                     </div>
//                   ))
//                 ) : (
//                   <p className="text-center text-gray-500">No news available at the moment</p>
//                 )}
//               </div>
//             </main>
//           </div>
//         )}
//       </div>
//     </ProtectedRoute>
//   );
// };

// export default NewsPage;







import ProtectedRoute from '@/app/protectedRoute/protectedRoute';
import { useEffect, useState } from 'react';
import Loader from '@/app/components/loader/loader';
import ProfileCard from '@/app/components/BlogPage/ProfileCard';

const NewsPage = () => {
  const [posts, setPosts] = useState([]); // News posts
  const [searchTerm, setSearchTerm] = useState('');
  const [typeFilter, setTypeFilter] = useState('');
  const [topicFilter, setTopicFilter] = useState('');
  const [yearFilter, setYearFilter] = useState('');
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1); // Track the current page
  const [loading, setLoading] = useState(false); // Control loader state

  const pageSize = 20; // Number of articles to load at a time

  // Fetch posts from the API
  const fetchPosts = async (searchQuery = '', pageNumber = 1, append = false) => {
    setLoading(true); // Start the loader
    let apiUrl = `https://newsapi.org/v2/everything?q=${searchQuery || 'tesla'}&from=${yearFilter || '2024-10-24'}&sortBy=publishedAt&pageSize=${pageSize}&page=${pageNumber}&apiKey=4068273ed96d474298d4c7ab8d2f7a73`;

    if (typeFilter) apiUrl += `&type=${typeFilter}`;
    if (topicFilter) apiUrl += `&topic=${topicFilter}`;

    try {
      const res = await fetch(apiUrl);
      const data = await res.json();

      if (data.articles && data.articles.length > 0) {
        setPosts((prevPosts) => (append ? [...prevPosts, ...data.articles] : data.articles));
      } else {
        setPosts([]); // No articles found
      }
    } catch (err) {
      console.error('Error fetching posts:', err);
      setError('Failed to load news');
    } finally {
      setLoading(false); // Stop the loader
    }
  };

  // Fetch news on component mount and when filters change
  useEffect(() => {
    fetchPosts(searchTerm, page, false);
  }, [searchTerm, typeFilter, topicFilter, yearFilter, page]);

  // Toggle Sidebar visibility
  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  // Load more articles
  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
    fetchPosts(searchTerm, page + 1, true); // Append next set of articles
  };

  return (
    <ProtectedRoute allowedRoles={['user', 'admin']}>
      <div>
        {loading && posts.length === 0 ? (
          <Loader />
        ) : (
          <div className="flex">
            {/* Sidebar */}
            <aside
              className={`fixed inset-y-0 left-0 transform ${
                isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
              } md:relative md:translate-x-0 w-64 bg-gray-100 p-4 transition-transform duration-300 ease-in-out z-40`}
            >
              <ProfileCard />
            </aside>

            {/* Main Content */}
            <main className="flex-1 p-6">
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
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              </button>

              {/* Filters */}
              <div className="flex flex-wrap justify-between items-center mb-6">
                <div className="flex space-x-4">
                  <select
                    className="border border-gray-300 rounded-md px-4 py-2"
                    onChange={(e) => setTypeFilter(e.target.value)}
                  >
                    <option value="">Type</option>
                    <option value="news">News</option>
                    <option value="blog">Blog</option>
                  </select>
                  <select
                    className="border border-gray-300 rounded-md px-4 py-2"
                    onChange={(e) => setTopicFilter(e.target.value)}
                  >
                    <option value="">Topic</option>
                    <option value="technology">Technology</option>
                    <option value="science">Science</option>
                  </select>
                  <select
                    className="border border-gray-300 rounded-md px-4 py-2"
                    onChange={(e) => setYearFilter(e.target.value)}
                  >
                    <option value="">Year</option>
                    <option value="2024">2024</option>
                    <option value="2023">2023</option>
                  </select>
                </div>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search here ..."
                    className="border border-gray-300 rounded-md px-4 py-2 pr-10"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                  <button className="absolute right-2 top-2 text-green-500">🔍</button>
                </div>
              </div>

              {/* News Cards Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {error ? (
                  <p className="text-center text-red-500">{error}</p>
                ) : posts && posts.length > 0 ? (
                  posts.map((post, index) => (
                    <div key={index} className="border rounded-lg overflow-hidden shadow-lg">
                      <img
                        src={post.urlToImage}
                        alt={post.title || 'News Image'}
                        className="w-full h-48 object-cover"
                      />
                      <div className="p-4">
                        <h3 className="text-lg font-bold mb-2">{post.title}</h3>
                        <span className="block mb-2 text-sm text-gray-500 uppercase">
                          {new Date(post.publishedAt).toLocaleDateString()}
                        </span>
                        <p className="text-sm text-gray-500">{post.description}</p>
                        <div className="flex justify-between items-center mt-4">
                          <div className="flex space-x-4 text-gray-500">
                            <button className="hover:text-red-600">❤️</button>
                            <button className="hover:text-blue-600">💬</button>
                          </div>
                          <a
                            href={post.url}
                            className="hover:text-green-600"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            ↗️ Read More
                          </a>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <p className="text-center text-gray-500">No news available.</p>
                )}
              </div>

              {/* Load More Button */}
              {posts.length > 0 && (
                <div className="flex justify-center mt-6">
                  <button
                    className="px-6 py-3 bg-green-500 text-white rounded-md hover:bg-green-700"
                    onClick={handleLoadMore}
                  >
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

export default NewsPage;


