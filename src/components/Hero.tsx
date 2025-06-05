
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Search, MapPin, Users, TrendingUp } from 'lucide-react';

const Hero = () => {
  return (
    <div className="bg-gradient-to-br from-blue-50 via-white to-teal-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-[#005f73] mb-6">
            📍 Welcome to <span className="text-[#007acc]">Lokspire</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Discover and support local home-based businesses in Amreli. 
            From handmade crafts to delicious tiffin services - find it all here!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link to="/listings">
              <Button size="lg" className="bg-gradient-to-r from-[#007acc] to-[#00bfa6] hover:from-[#005f73] hover:to-[#007acc] text-white px-8 py-4 text-lg">
                <Search className="w-5 h-5 mr-2" />
                Browse Businesses
              </Button>
            </Link>
            <Link to="/post">
              <Button size="lg" variant="outline" className="border-[#007acc] text-[#007acc] hover:bg-[#007acc] hover:text-white px-8 py-4 text-lg">
                <TrendingUp className="w-5 h-5 mr-2" />
                Post Your Business
              </Button>
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="text-center">
              <div className="text-3xl font-bold text-[#007acc] mb-2">500+</div>
              <div className="text-gray-600">Local Businesses</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#007acc] mb-2">50+</div>
              <div className="text-gray-600">Categories</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#007acc] mb-2">1000+</div>
              <div className="text-gray-600">Happy Customers</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
