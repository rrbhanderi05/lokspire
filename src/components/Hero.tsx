
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';
import SearchBar from '@/components/SearchBar';

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-800 dark:to-indigo-800 text-white">
      <div className="absolute inset-0 bg-gray-900/10 animate-pulse"></div>
      <div className="max-w-7xl mx-auto px-4 py-12 md:py-16 relative">
        <div className="text-center mb-6">
          <div className="mx-auto mb-4 flex justify-center">
            <img 
              src="https://raw.githubusercontent.com/rrbhanderi05/FileHosting/refs/heads/main/Lokspire.png" 
              alt="Lokspire" 
              className="h-12 md:h-16 object-contain"
              loading="eager"
              decoding="async"
            />
          </div>
          <h1 className="text-3xl md:text-5xl font-bold mb-3 leading-tight">
            Discover Local Businesses
          </h1>
          <p className="text-lg md:text-xl mb-6 text-white/90 max-w-3xl mx-auto">
            Connect with amazing home-based entrepreneurs in Amreli
          </p>
        </div>
        
        <div className="mb-6">
          <SearchBar />
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          <Button asChild className="bg-white/20 hover:bg-white/30 text-white border-white/20 rounded-lg px-6 py-2 font-semibold">
            <Link to="/categories">Browse Categories</Link>
          </Button>
          <Button asChild className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 rounded-lg px-6 py-2 font-semibold">
            <Link to="/post">
              <Plus className="w-4 h-4 mr-2" />
              Start Selling
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
