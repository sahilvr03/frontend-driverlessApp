"use client"
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-100 py-10 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8">
          {/* Footer Links */}
          <div>
            <h3 className="text-sm font-semibold text-indigo-300 tracking-wider uppercase">Solutions</h3>
            <ul className="mt-4 space-y-2">
              <li><a href="#" className="text-gray-100 hover:text-indigo-400">Marketing</a></li>
              <li><a href="#" className="text-gray-100 hover:text-indigo-400">Analytics</a></li>
              <li><a href="#" className="text-gray-100 hover:text-indigo-400">Commerce</a></li>
              <li><a href="#" className="text-gray-100 hover:text-indigo-400">Insights</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-indigo-300 tracking-wider uppercase">Support</h3>
            <ul className="mt-4 space-y-2">
              <li><a href="#" className="text-gray-100 hover:text-indigo-400">Pricing</a></li>
              <li><a href="#" className="text-gray-100 hover:text-indigo-400">Documentation</a></li>
              <li><a href="#" className="text-gray-100 hover:text-indigo-400">Guides</a></li>
              <li><a href="#" className="text-gray-100 hover:text-indigo-400">API Status</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-indigo-300 tracking-wider uppercase">Company</h3>
            <ul className="mt-4 space-y-2">
              <li><a href="#" className="text-gray-100 hover:text-indigo-400">About</a></li>
              <li><a href="#" className="text-gray-100 hover:text-indigo-400">Blog</a></li>
              <li><a href="#" className="text-gray-100 hover:text-indigo-400">Jobs</a></li>
              <li><a href="#" className="text-gray-100 hover:text-indigo-400">Press</a></li>
              <li><a href="#" className="text-gray-100 hover:text-indigo-400">Partners</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-indigo-300 tracking-wider uppercase">Legal</h3>
            <ul className="mt-4 space-y-2">
              <li><a href="#" className="text-gray-100 hover:text-indigo-400">Claim</a></li>
              <li><a href="#" className="text-gray-100 hover:text-indigo-400">Privacy</a></li>
              <li><a href="#" className="text-gray-100 hover:text-indigo-400">Terms</a></li>
            </ul>
          </div>

        {/* Newsletter Section */}
        <div className="border-t border-gray-700 pt-4 sm:pt-0">
          <h3 className="text-sm font-semibold text-indigo-300 tracking-wider uppercase">Subscribe to our newsletter</h3>
          <p className="text-gray-400 mt-2">The latest news, articles, and resources, sent to your inbox weekly.</p>
          <div className="mt-4 flex flex-col"> {/* Changed to flex-col */}
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full md:w-auto px-4 py-2 border border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 bg-gray-700 text-gray-100"
            />
            <button className="mt-3 px-6 py-2 bg-indigo-500 text-white rounded-md hover:bg-indigo-600">Subscribe</button> {/* Removed sm:mt-0 */}
          </div>
        </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
