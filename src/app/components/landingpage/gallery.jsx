"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Calendar, ExternalLink, Youtube, Newspaper, Facebook, Linkedin, ChevronRight, Clock, TrendingUp } from "lucide-react";

const CommunitySpotlight = () => {
  const [showAll, setShowAll] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("all");
  
  const mediaContent = [
    {
      type: 'video',
      source: 'https://www.youtube.com/embed/Y9Kiq2X4Ut0',
      url: 'https://www.youtube.com/watch?v=Y9Kiq2X4Ut0',
      title: 'Driver Less Car In Pakistan | NED University Students started Preparation for test ride',
      platform: 'YouTube',
      date: '2024-02-15',
      category: 'video',
      sourceName: 'Public News',
      excerpt: 'NED University students demonstrate Pakistan\'s first self-driving car technology in exclusive interview.'
    }, 
    {
      type: 'video',
      url: 'https://www.youtube.com/watch?v=-PCkmUXa8i4',
      source: 'https://www.youtube.com/embed/-PCkmUXa8i4',
      title: 'NED Students Developing Pakistan\'s First Self-Driving Car',
      platform: 'YouTube',
      date: '2024-02-10',
      category: 'video',
      sourceName: 'Tech Insider',
      excerpt: 'Exclusive look at the engineering behind Pakistan\'s autonomous vehicle innovation.'
    }, 
    {
      type: 'video',
      url: 'https://www.youtube.com/watch?v=LZI1qJs1yF4',
      source: 'https://www.youtube.com/embed/LZI1qJs1yF4',
      title: 'Revolutionizing Transportation: Pakistan\'s First AI Vehicle',
      platform: 'YouTube',
      date: '2024-02-05',
      category: 'video',
      sourceName: 'Future Tech',
      excerpt: 'How NED University is paving the way for autonomous transportation in Pakistan.'
    }, 
    {
      type: 'article',
      url: 'https://propakistani.pk/2025/02/14/ned-students-working-to-launch-pakistans-first-self-driving-car-within-6-months/amp/',
      title: 'Breaking: Pakistani Students Challenge Global Auto Giants with Indigenous AI Technology',
      excerpt: 'NED University team aims to revolutionize transportation with indigenous AI technology, targeting completion within 6 months...',
      image: '/images/EV-car-1.jpg',
      date: '2024-02-14',
      category: 'article',
      sourceName: 'ProPakistani',
      readTime: '4 min read'
    },
    {
      type: 'article',
      url: 'https://tribune.com.pk/story/2528144/first-ai-powered-driverless-car-to-hit-karachi-roads-soon',
      title: 'First AI-powered driverless car to hit Karachi roads soon',
      excerpt: 'NCAI at NED University spearheaded the project, with engineers working on it and test drives expected within 6 months...',
      image: '/images/firstAi.jpg',
      date: '2024-02-12',
      category: 'article',
      sourceName: 'Express Tribune',
      readTime: '3 min read'
    },
    {
      platform: 'facebook',
      url: 'https://www.facebook.com/100064861260620/posts/1037358771769489/',
      excerpt: 'Witness the future of Pakistani tech with these groundbreaking innovations in autonomous mobility...',
      title: 'National Centre for Artificial Intelligence Unveils Autonomous Vehicle Breakthrough',
      image: '/images/fb.jpg',
      date: '2024-02-08',
      category: 'social',
      sourceName: 'NCAI Official',
      likes: '1.2K'
    },
    {
      platform: 'linkedin',
      url: 'https://www.linkedin.com/posts/ncai-ned_pakistan-tech-innovation-activity',
      excerpt: 'NED University students are set to launch Pakistan\'s first self-driving car within six months, marking a major milestone...',
      title: 'Pakistan\'s Autonomous Vehicle Milestone: A Technical Deep Dive',
      image: '/images/link.png',
      date: '2024-02-07',
      category: 'social',
      sourceName: 'Tech LinkedIn',
      likes: '850'
    },
    {
      type: 'article',
      url: 'https://theneutral.pk/technology/ai-powered-driverless-car-karachi',
      title: 'Karachi to Welcome its first AI-Driverless Car Soon',
      excerpt: 'Karachi has embarked on the production of AI-powered driverless cars, marking a major milestone in Pakistan\'s technological...',
      image: '/images/kk.jpg',
      date: '2024-02-06',
      category: 'article',
      sourceName: 'The Neutral',
      readTime: '5 min read'
    },
    {
      type: 'article',
      url: 'https://www.brandsynario.com/countrys-first-driverless-ai-powered-car-to-soon-hit-karachi-roads/',
      title: 'Country\'s First Driverless AI Powered Car to Soon Hit Karachi Roads',
      excerpt: 'Karachi is set for a technological revolution as NED University\'s National Centre for Artificial Intelligence (NCAI) engineers race to develop the nation\'s first AI-driven...',
      image: '/images/AI-Car.jpg',
      date: '2024-02-04',
      category: 'article',
      sourceName: 'Brandsynario',
      readTime: '3 min read'
    }
  ];

  const categories = [
    { id: "all", name: "All News", icon: "📰" },
    { id: "article", name: "Articles", icon: "📄" },
    { id: "video", name: "Videos", icon: "🎥" },
    { id: "social", name: "Social Media", icon: "💬" }
  ];

  const filteredContent = selectedCategory === "all" 
    ? mediaContent 
    : mediaContent.filter(item => item.category === selectedCategory);

  const displayedContent = showAll ? filteredContent : filteredContent.slice(0, 6);

  const getSourceIcon = (item) => {
    if (item.type === 'video') return <Youtube className="w-4 h-4 text-red-600" />;
    if (item.platform === 'facebook') return <Facebook className="w-4 h-4 text-blue-600" />;
    if (item.platform === 'linkedin') return <Linkedin className="w-4 h-4 text-blue-700" />;
    return <Newspaper className="w-4 h-4 text-gray-600" />;
  };

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  // Featured breaking news (latest article/video)
  const featuredNews = mediaContent[0];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breaking News Ticker */}
      <div className="bg-red-600 text-white py-2 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex items-center animate-pulse">
            <span className="bg-white text-red-600 px-3 py-1 rounded-full text-sm font-bold mr-4">BREAKING</span>
            <p className="font-medium truncate">
              Pakistan&apos;s First AI-Powered Driverless Car Set to Hit Roads  - NED University Makes History
            </p>
          </div>
        </div>
      </div>

      {/* Hero Section with Featured News */}
      <section className="relative bg-gradient-to-br from-gray-900 to-gray-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center bg-red-600 text-white px-4 py-2 rounded-full text-sm mb-6">
                <TrendingUp className="w-4 h-4 mr-2" />
                FEATURED STORY
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-4 leading-tight">
                The People&apos;s Autonomous Revolution
              </h1>
              <p className="text-xl text-gray-300 mb-6">
                Driverless Car on Pakistan&apos;s Roads | Karachi Engineering Students Make History
              </p>
              <div className="flex items-center text-gray-300 text-sm mb-8">
                <Clock className="w-4 h-4 mr-2" />
                <span>Updated 2 hours ago</span>
                <span className="mx-3">•</span>
                <span>1,234 readers</span>
              </div>
              <div className="flex flex-wrap gap-4">
                <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-medium flex items-center transition-colors">
                  Read Latest News <ChevronRight className="w-4 h-4 ml-2" />
                </button>
                <button className="border border-gray-600 hover:border-gray-500 text-white px-6 py-3 rounded-lg font-medium transition-colors">
                  Watch Video Coverage
                </button>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl"
            >
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/-PCkmUXa8i4"
                title="Featured News Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                className="w-full h-full"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main News Section */}
      <section className="py-16 container mx-auto px-4">
        {/* Header with Categories */}
        <div className="mb-12">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Latest News & Updates</h2>
              <p className="text-gray-600">Stay informed about our journey to revolutionize transportation in Pakistan</p>
            </div>
            
            {/* Category Filters */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => {
                    setSelectedCategory(category.id);
                    setShowAll(false);
                  }}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    selectedCategory === category.id
                      ? 'bg-red-600 text-white shadow-lg shadow-red-200'
                      : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                  }`}
                >
                  <span className="mr-2">{category.icon}</span>
                  {category.name}
                </button>
              ))}
            </div>
          </div>

          {/* News Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayedContent.map((item, index) => (
              <motion.article
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group"
              >
                {/* Media Container */}
                <div className="relative aspect-video overflow-hidden bg-gray-100">
                  {item.type === "video" ? (
                    <iframe
                      src={item.source}
                      className="w-full h-full group-hover:scale-105 transition-transform duration-300"
                      title={item.title}
                    />
                  ) : (
                    <>
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      {/* Category Badge */}
                      <div className="absolute top-4 left-4 bg-black/70 text-white px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm">
                        {item.type === 'video' ? '📹 Video' : '📰 Article'}
                      </div>
                    </>
                  )}
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Source and Date */}
                  <div className="flex items-center justify-between mb-3 text-sm">
                    <div className="flex items-center space-x-2">
                      {getSourceIcon(item)}
                      <span className="font-medium text-gray-700">{item.sourceName}</span>
                    </div>
                    <div className="flex items-center text-gray-500">
                      <Calendar className="w-3 h-3 mr-1" />
                      <span>{formatDate(item.date)}</span>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-red-600 transition-colors">
                    {item.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {item.excerpt}
                  </p>

                  {/* Meta Info */}
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center text-gray-500">
                      {item.readTime && (
                        <>
                          <Clock className="w-3 h-3 mr-1" />
                          <span>{item.readTime}</span>
                        </>
                      )}
                      {item.likes && (
                        <span>❤️ {item.likes} likes</span>
                      )}
                    </div>
                    
                    {/* Read More Link */}
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-red-600 hover:text-red-700 font-medium text-sm group/link"
                    >
                      Read More 
                      <ExternalLink className="w-3 h-3 ml-1 group-hover/link:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>

        {/* Load More Button */}
        {filteredContent.length > 6 && (
          <div className="text-center mt-12">
            <button
              onClick={() => setShowAll(!showAll)}
              className="px-8 py-3 bg-white border-2 border-red-600 text-red-600 rounded-lg hover:bg-red-600 hover:text-white transition-all font-medium shadow-md hover:shadow-lg"
            >
              {showAll ? "Show Less" : `Load More Articles (${filteredContent.length - 6})`}
            </button>
          </div>
        )}
      </section>


    </div>
  );
};

export default CommunitySpotlight;