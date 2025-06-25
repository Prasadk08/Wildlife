import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter, FaGlobe } from "react-icons/fa";

const Footer = () => {
  return (
     <footer className="bg-gray-800 text-white py-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left - About */}
        <div>
          <h2 className="text-xl font-semibold mb-4">About WildGuard</h2>
          <p className="text-sm text-gray-200">
            WildGuard is a government-backed initiative to raise awareness and educate people
            about wildlife conservation, endangered species, and animal welfare programs in India.
          </p>
        </div>

        {/* Center - Quick Links */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Quick Links</h2>
          <ul className="space-y-2 text-sm text-gray-200">
            <li><a href="/" className="hover:text-white">Home</a></li>
            <li><a href="/animals" className="hover:text-white">Wildlife</a></li>
            <li><a href="/programs" className="hover:text-white">Programs</a></li>
            <li><a href="/blogs" className="hover:text-white">Blogs</a></li>
            <li><a href="/contact" className="hover:text-white">Contact Us</a></li>
          </ul>
        </div>

        {/* Right - Social Media */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Follow Us</h2>
          <div className="flex space-x-4 text-2xl">
            <a href="#" className="hover:text-blue-400"><FaFacebook /></a>
            <a href="#" className="hover:text-pink-400"><FaInstagram /></a>
            <a href="#" className="hover:text-blue-300"><FaTwitter /></a>
            <a href="#" className="hover:text-yellow-300"><FaGlobe /></a>
          </div>
          <p className="mt-4 text-sm text-gray-300">© 2025 WildGuard. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer