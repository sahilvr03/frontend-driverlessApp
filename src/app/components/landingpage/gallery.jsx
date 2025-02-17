"use client";
import { faYoutube, faLinkedin, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const CommunitySpotlight = () => {
  const mediaContent = [
    {
      type: 'video',
      source: 'https://www.youtube.com/embed/Y9Kiq2X4Ut0',
      url:'https://www.youtube.com/embed/Y9Kiq2X4Ut0',
      title: 'Driver Less Car In Pakistan | NED University Students started Preparation for test ride',
      platform: 'YouTube'
    }, 
    {
      type: 'video',
      url: 'https://www.youtube.com/embed/-PCkmUXa8i4',
      source: 'https://www.youtube.com/embed/-PCkmUXa8i4',
      title: 'NED Students Developing Pakistan\'s First Self-Driving Car',
      platform: 'YouTube'
    }, 
    {
      type: 'article',
      url: 'https://propakistani.pk/2025/02/14/ned-students-working-to-launch-pakistans-first-self-driving-car-within-6-months/amp/',
      title: 'Breaking: Pakistani Students Challenge Global Auto Giants',
      excerpt: 'NED University team aims to revolutionize transportation with indigenous AI technology...',
      image: '/images/EV-car-1.jpg'
    },
    {
      type: 'article',
      url: 'https://tribune.com.pk/story/2528144/first-ai-powered-driverless-car-to-hit-karachi-roads-soon',
      title: 'First AI-powered driverless car to hit Karachi roads soon',
      excerpt: 'NCAI at NED University spearheaded the project, with engineers working on it and test drives expected within 6 months...',
      image: '/images/firstAi.jpg'
    },
    {
      platform: 'linkedin',
      url: 'https://www.facebook.com/100064861260620/posts/1037358771769489/',
      excerpt: 'Witness the future of Pakistani tech with these groundbreaking innovations in autonomous mobility...',
      title: 'The National Centre for Artificial Intelligence (NCAI) at NED University of Engineering and Technology',
      image: '/images/fb.jpg'
    },
    {
      platform: 'facebook',
      url: 'https://www.facebook.com/100064861260620/posts/1037358771769489/',
      excerpt: 'NED University students are set to launch Pakistan’s first self-driving car within six months, marking a major milestone in the country’s tech advancements...',
      title: 'A special electronic car imported from China is being modified with AI tools to enable full automation',
      image: '/images/link.png'
    },
    {
      platform: 'https://theneutral.pk/',
      url: 'https://www.facebook.com/100064861260620/posts/1037358771769489/',
      excerpt: 'Karachi has embarked on the production of AI-powered driverless cars, marking a major milestone in Pakistan’s technological...',
      title: 'Karachi to Welcome its first AI-Driverless Car Soon',
      image: '/images/kk.jpg'
    },
    {
      platform: 'www.brandsynario.com',
      url: 'https://www.brandsynario.com/countrys-first-driverless-ai-powered-car-to-soon-hit-karachi-roads/',
      excerpt: 'Karachi is set for a technological revolution as NED University’s National Centre for Artificial Intelligence (NCAI) engineers race to develop the nation’s first AI-driven...',
      title: 'Country’s First Driverless AI Powered Car to Soon Hit Karachi Roads',
      image: '/images/AI-Car.jpg'
    },
    {
      platform: 'https://www.techjuice.pk/',
      url: 'Karachi Gears Up for Its First AI-Powered Driverless Car',
      excerpt: 'KARACHI: Karachi has taken a giant leap ahead in technological innovation with the launch of its autonomous vehicle assembly line, powered by artificial intelligence (AI).',
      title: 'Karachi to Welcome its first AI-Driverless Car Soon',
      image: '/images/kk.jpg'
    },
    
   
    // Add other links with appropriate metadata
  ];
  
 

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
     

      {/* Media Grid */}
      <section className="py-20 container mx-auto px-4">
      <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            What Others Are Saying About Us
          </h2>
          <p className="text-xl text-gray-600">
            Explore blogs, videos, and articles from the community discussing our innovations and projects.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mediaContent.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all"
            >
              {item.type === 'video' ? (
                <div className="aspect-video relative">
                  <iframe
                    src={item.source}
                    className="w-full h-full rounded-t-xl"
                  />
                </div>
              ) : (
                <Image
                  src={item.image}
                  alt={item.title}
                  width={600}
                  height={400}
                  className="w-full h-48 object-cover rounded-t-xl"
                />
              )}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                {item.excerpt && <p className="text-gray-600">{item.excerpt}</p>}
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center text-green-600 hover:text-green-700 font-medium"
                >
                  Read Full Story
                  <svg className="w-4 h-4 ml-2" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"/>
                    <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"/>
                  </svg>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
     
    <section className="relative py-16 bg-gray-900 text-white">
      <div className="container mx-auto px-6 md:px-12 lg:px-16 text-center">
        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6"
        >
          <span className="bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
            The Peoples Autonomous Revolution
          </span>
        </motion.h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-10">
          Driverless Car on Pakistan’s Roads! | Karachi Engineering Students Make History | Public News  
        </p>

        {/* Featured Video */}
        <div className="relative mx-auto max-w-4xl aspect-video rounded-2xl overflow-hidden shadow-2xl border border-gray-700">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/Y9Kiq2X4Ut0"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            className="rounded-2xl"
          />
        </div>
      </div>
    </section>
 


      {/* Social Media Carousel */}
      {/* <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent">
            Social Media Buzz
          </h2>

          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            autoplay={{ delay: 3000 }}
            modules={[Autoplay]}
            className="pb-14"
          >
            {[
              {
                platform: 'linkedin',
                url: 'https://www.linkedin.com/posts/startup-pakistan_selfdrivingcar-aiinnovation-pakistantech-activity-7296842066364362752-viZc',
                content: "Witness the future of Pakistani tech with these groundbreaking innovations in autonomous mobility..."
              },
              {
                platform: 'facebook',
                url: 'https://www.facebook.com/100064861260620/posts/1037358771769489/',
                content: "Local students are putting Pakistan on the global autonomous vehicles map..."
              },
              // Add other social posts
            ].map((post, index) => (
              <SwiperSlide key={index}>
                <SocialCard {...post} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section> */}

      {/* CTA Section */}
      {/* <section className="py-20 bg-slate-900 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-white mb-8">
            Join the Movement
          </h2>
          <p className="text-xl text-blue-200 mb-12 max-w-2xl mx-auto">
            Share your experiences, write about our technology, or create content to be featured here!
          </p>
          <div className="flex justify-center gap-6">
            <button className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all flex items-center">
              <FontAwesomeIcon icon={faYoutube} className="mr-3" />
              Submit Your Video
            </button>
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all flex items-center">
              <FontAwesomeIcon icon={faLinkedin} className="mr-3" />
              Share Your Story
            </button>
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default CommunitySpotlight;