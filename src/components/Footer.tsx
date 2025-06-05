
import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#005f73] text-white py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <MapPin className="h-8 w-8 text-[#00bfa6]" />
              <span className="text-xl font-bold">📍 Lokspire</span>
            </div>
            <p className="text-gray-300 text-sm mb-4">
              Connecting local home businesses with customers in Amreli. 
              Supporting entrepreneurs and building community.
            </p>
            <div className="flex space-x-4">
              <Facebook className="w-5 h-5 text-gray-300 hover:text-[#00bfa6] cursor-pointer" />
              <Instagram className="w-5 h-5 text-gray-300 hover:text-[#00bfa6] cursor-pointer" />
              <Twitter className="w-5 h-5 text-gray-300 hover:text-[#00bfa6] cursor-pointer" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#00bfa6]">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="text-gray-300 hover:text-white">Home</Link></li>
              <li><Link to="/listings" className="text-gray-300 hover:text-white">Browse Listings</Link></li>
              <li><Link to="/categories" className="text-gray-300 hover:text-white">Categories</Link></li>
              <li><Link to="/post" className="text-gray-300 hover:text-white">Post Listing</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-white">About Us</Link></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#00bfa6]">Popular Categories</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/category/Clothes & Fashion" className="text-gray-300 hover:text-white">Fashion</Link></li>
              <li><Link to="/category/Tiffin / Dabba Services" className="text-gray-300 hover:text-white">Tiffin Services</Link></li>
              <li><Link to="/category/Beauty & Skincare Products" className="text-gray-300 hover:text-white">Beauty Products</Link></li>
              <li><Link to="/category/Handicrafts & Decorative Items" className="text-gray-300 hover:text-white">Handicrafts</Link></li>
              <li><Link to="/category/Jobs" className="text-gray-300 hover:text-white">Jobs</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#00bfa6]">Contact Us</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center">
                <MapPin className="w-4 h-4 mr-2 text-[#00bfa6]" />
                <span className="text-gray-300">Amreli, Gujarat</span>
              </div>
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-2 text-[#00bfa6]" />
                <span className="text-gray-300">+91 98765 43210</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-4 h-4 mr-2 text-[#00bfa6]" />
                <span className="text-gray-300">hello@lokspire.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-600 mt-8 pt-8 text-center">
          <p className="text-gray-300 text-sm">
            © 2024 Lokspire - Supporting Local Businesses in Amreli. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
