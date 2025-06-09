
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import CategoryGrid from '@/components/CategoryGrid';
import FeaturedBusinesses from '@/components/FeaturedBusinesses';
import Footer from '@/components/Footer';
import SearchBar from '@/components/SearchBar';
import SuccessStories from '@/components/SuccessStories';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { TrendingUp, Users, Shield, Star, Plus, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [showSuccessStories, setShowSuccessStories] = useState(false);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Navbar />
      
      {/* Hero Section with Enhanced Search */}
      <div className="bg-gradient-to-r from-[#007acc] to-[#00bfa6] dark:from-[#005f73] dark:to-[#007acc] text-white">
        <div className="max-w-7xl mx-auto px-4 py-16 md:py-24">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Find Local Businesses in Amreli
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto">
              Discover amazing home-based businesses, from handmade jewelry to delicious food
            </p>
          </div>
          
          {/* Enhanced Search Bar */}
          <div className="mb-8">
            <SearchBar />
          </div>

          {/* Quick Actions */}
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border-white/30 rounded-full px-6 py-3">
              <Link to="/categories">Browse Categories</Link>
            </Button>
            <Button asChild className="bg-white text-[#007acc] hover:bg-gray-100 rounded-full px-6 py-3">
              <Link to="/post">
                <Plus className="w-4 h-4 mr-2" />
                List Your Business
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="py-12 px-4 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-[#007acc] dark:text-[#00bfa6] mb-2">500+</div>
              <div className="text-gray-600 dark:text-gray-300 font-medium">Local Businesses</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-[#007acc] dark:text-[#00bfa6] mb-2">1000+</div>
              <div className="text-gray-600 dark:text-gray-300 font-medium">Happy Customers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-[#007acc] dark:text-[#00bfa6] mb-2">50+</div>
              <div className="text-gray-600 dark:text-gray-300 font-medium">Categories</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-[#007acc] dark:text-[#00bfa6] mb-2">24/7</div>
              <div className="text-gray-600 dark:text-gray-300 font-medium">Support</div>
            </div>
          </div>
        </div>
      </div>

      {/* Popular Categories - Horizontal Scroll */}
      <div className="py-12 px-4 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
              Popular Categories
            </h2>
            <Button asChild variant="outline" className="rounded-full">
              <Link to="/categories">View All</Link>
            </Button>
          </div>
          
          <div className="flex gap-4 overflow-x-auto pb-4">
            {[
              { name: 'Clothes & Fashion', icon: '👗', count: '45 businesses' },
              { name: 'Homemade Snacks', icon: '🍪', count: '32 businesses' },
              { name: 'Jewelry', icon: '💍', count: '28 businesses' },
              { name: 'Tiffin Services', icon: '🍛', count: '24 businesses' },
              { name: 'Beauty Products', icon: '💄', count: '20 businesses' },
              { name: 'Handicrafts', icon: '🎨', count: '18 businesses' }
            ].map((category) => (
              <Link 
                key={category.name} 
                to={`/category/${encodeURIComponent(category.name)}`}
                className="flex-shrink-0"
              >
                <Card className="w-48 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
                  <CardContent className="p-6 text-center">
                    <div className="text-4xl mb-3">{category.icon}</div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2">{category.name}</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{category.count}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <FeaturedBusinesses />
      
      {/* Why Choose Us - with Success Stories Button */}
      <div className="py-16 px-4 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Why Choose Our Platform?
            </h2>
            <Button 
              onClick={() => setShowSuccessStories(true)}
              className="bg-gradient-to-r from-[#007acc] to-[#00bfa6] hover:from-[#005f73] hover:to-[#007acc] text-white px-6 py-3 rounded-full mb-8"
            >
              <Award className="w-5 h-5 mr-2" />
              Success Stories
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#007acc] dark:bg-[#00bfa6] rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Verified Businesses</h3>
              <p className="text-gray-600 dark:text-gray-300">All businesses are verified for quality and authenticity</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-[#007acc] dark:bg-[#00bfa6] rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Growing Community</h3>
              <p className="text-gray-600 dark:text-gray-300">Join hundreds of successful local entrepreneurs</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-[#007acc] dark:bg-[#00bfa6] rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Local Focus</h3>
              <p className="text-gray-600 dark:text-gray-300">Supporting the local economy and community connections</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section - Clean */}
      <div className="py-16 px-4 bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            Whether you're looking for local services or want to grow your business, we're here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-[#007acc] hover:bg-[#005f73] text-white px-8 py-4 rounded-full text-lg">
              <Link to="/listings">Find Businesses</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-[#007acc] text-[#007acc] hover:bg-[#007acc] hover:text-white px-8 py-4 rounded-full text-lg">
              <Link to="/post">Start Selling</Link>
            </Button>
          </div>
        </div>
      </div>
      
      <Footer />

      {/* Success Stories Modal */}
      {showSuccessStories && (
        <SuccessStories onClose={() => setShowSuccessStories(false)} />
      )}
    </div>
  );
};

export default Home;
