
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Search, TrendingUp } from 'lucide-react';

const Hero = () => {
  return (
    <div className="bg-gradient-to-br from-blue-50 via-white to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <div className="mx-auto mb-6 flex justify-center">
            <img 
              src="https://raw.githubusercontent.com/rrbhanderi05/FileHosting/refs/heads/main/Lokspire.png" 
              alt="Lokspire" 
              className="h-16 md:h-20 object-contain"
              loading="eager"
              decoding="async"
              fetchPriority="high"
            />
          </div>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-6 max-w-3xl mx-auto">
            Discover and support local home-based businesses in Amreli. 
            From handmade crafts to delicious tiffin services - find it all here!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link to="/listings">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg">
                <Search className="w-5 h-5 mr-2" />
                Browse Businesses
              </Button>
            </Link>
            <Link to="/post">
              <Button size="lg" variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 text-lg">
                <TrendingUp className="w-5 h-5 mr-2" />
                Post Your Business
              </Button>
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="text-center bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm p-6 rounded-xl shadow-lg">
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">20+</div>
              <div className="text-gray-600 dark:text-gray-300">Local Businesses</div>
            </div>
            <div className="text-center bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm p-6 rounded-xl shadow-lg">
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">11</div>
              <div className="text-gray-600 dark:text-gray-300">Categories</div>
            </div>
            <div className="text-center bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm p-6 rounded-xl shadow-lg">
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">100+</div>
              <div className="text-gray-600 dark:text-gray-300">Happy Customers</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
