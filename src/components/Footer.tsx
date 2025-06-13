
import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Facebook, Instagram, Github } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-[#005f73] to-[#003d47] text-white py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-1">
            <div className="flex items-center mb-4">
              <img 
                src="https://raw.githubusercontent.com/rrbhanderi05/FileHosting/refs/heads/main/Lokspire.png" 
                alt="Logo" 
                className="h-14 object-contain"
              />
            </div>
            <p className="text-gray-300 text-sm mb-6">
              Connecting local home businesses with customers in Amreli. 
              Supporting entrepreneurs and building community.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.facebook.com/rushikeshpatel05/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#00bfa6] transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="https://www.instagram.com/rushikeshpatel05/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#00bfa6] transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="https://github.com/rrbhanderi05" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#00bfa6] transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#00bfa6]">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="text-gray-300 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/listings" className="text-gray-300 hover:text-white transition-colors">Browse Listings</Link></li>
              <li><Link to="/categories" className="text-gray-300 hover:text-white transition-colors">Categories</Link></li>
              <li><Link to="/post" className="text-gray-300 hover:text-white transition-colors">Post Listing</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-white transition-colors">About Us</Link></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#00bfa6]">Popular Categories</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/category/Clothes & Fashion" className="text-gray-300 hover:text-white transition-colors">Fashion</Link></li>
              <li><Link to="/category/Tiffin / Dabba Services" className="text-gray-300 hover:text-white transition-colors">Tiffin Services</Link></li>
              <li><Link to="/category/Beauty & Skincare Products" className="text-gray-300 hover:text-white transition-colors">Beauty Products</Link></li>
              <li><Link to="/category/Handicrafts & Decorative Items" className="text-gray-300 hover:text-white transition-colors">Handicrafts</Link></li>
              <li><Link to="/category/Jobs" className="text-gray-300 hover:text-white transition-colors">Jobs</Link></li>
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
                <Mail className="w-4 h-4 mr-2 text-[#00bfa6]" />
                <span className="text-gray-300">shravytech@proton.me</span>
              </div>
            </div>
            
            <div className="mt-6">
              <h4 className="text-sm font-semibold mb-2 text-[#00bfa6]">Legal</h4>
              <ul className="space-y-1 text-sm">
                <li>
                  <a 
                    href="https://rrbhanderi05.github.io/info/about.html" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a 
                    href="https://rrbhanderi05.github.io/info/privacy-policy.html" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-600 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-300 text-sm text-center md:text-left">
              © 2024 - Supporting Local Businesses in Amreli. All rights reserved.
            </p>
            <p className="text-gray-400 text-xs text-center md:text-right">
              Made and Operated by{' '}
              <a 
                href="https://github.com/rrbhanderi05" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[#00bfa6] hover:text-white transition-colors font-semibold"
              >
                ShravyTech
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
