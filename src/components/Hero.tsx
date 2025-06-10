
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { TrendingUp, Plus } from 'lucide-react';
import SearchBar from '@/components/SearchBar';

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-800 dark:to-indigo-800 text-white">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%23ffffff\" fill-opacity=\"0.05\"%3E%3Ccircle cx=\"30\" cy=\"30\" r=\"3\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] animate-pulse"></div>
      <div className="max-w-7xl mx-auto px-4 py-12 md:py-16 relative">
        <div className="text-center mb-6">
          <div className="mx-auto mb-4 flex justify-center">
            <img 
              src="https://raw.githubusercontent.com/rrbhanderi05/FileHosting/refs/heads/main/Lokspire.png" 
              alt="Lokspire" 
              className="h-12 md:h-16 object-contain"
              loading="eager"
              decoding="async"
              fetchPriority="high"
            />
          </div>
          <h1 className="text-3xl md:text-5xl font-bold mb-3 leading-tight">
            Discover Local Businesses
          </h1>
          <p className="text-lg md:text-xl mb-6 text-white/90 max-w-3xl mx-auto">
            Connect with amazing home-based entrepreneurs in Amreli
          </p>
        </div>
        
        {/* Search Bar */}
        <div className="mb-6">
          <SearchBar />
        </div>

        {/* Quick Actions */}
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
