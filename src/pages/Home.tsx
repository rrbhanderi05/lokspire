
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import CategoryGrid from '@/components/CategoryGrid';
import FeaturedBusinesses from '@/components/FeaturedBusinesses';
import Footer from '@/components/Footer';
import SearchBar from '@/components/SearchBar';
import SuccessStories from '@/components/SuccessStories';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { TrendingUp, Users, Shield, Star, Plus, Award, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [showSuccessStories, setShowSuccessStories] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navbar />
      
      {/* Compact Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-800 dark:to-indigo-800 text-white">
        <div className="max-w-7xl mx-auto px-4 py-12 md:py-16">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
              Discover Local Businesses
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto">
              Connect with amazing home-based entrepreneurs in Amreli
            </p>
          </div>
          
          {/* Search Bar */}
          <div className="mb-8">
            <SearchBar />
          </div>

          {/* Quick Actions */}
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild className="bg-white/20 hover:bg-white/30 text-white border-white/20 rounded-lg px-8 py-3 font-semibold">
              <Link to="/categories">Browse Categories</Link>
            </Button>
            <Button asChild className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 rounded-lg px-8 py-3 font-semibold">
              <Link to="/post">
                <Plus className="w-5 h-5 mr-2" />
                Start Selling
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="py-12 px-4 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center bg-gray-50 dark:bg-gray-700 rounded-xl p-6">
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">500+</div>
              <div className="text-gray-600 dark:text-gray-300">Active Businesses</div>
            </div>
            <div className="text-center bg-gray-50 dark:bg-gray-700 rounded-xl p-6">
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">1000+</div>
              <div className="text-gray-600 dark:text-gray-300">Happy Customers</div>
            </div>
            <div className="text-center bg-gray-50 dark:bg-gray-700 rounded-xl p-6">
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">50+</div>
              <div className="text-gray-600 dark:text-gray-300">Categories</div>
            </div>
            <div className="text-center bg-gray-50 dark:bg-gray-700 rounded-xl p-6">
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">24/7</div>
              <div className="text-gray-600 dark:text-gray-300">Support</div>
            </div>
          </div>
        </div>
      </div>

      {/* Popular Categories */}
      <div className="py-12 px-4 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
              Popular Categories
            </h2>
            <Button asChild variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white">
              <Link to="/categories">View All</Link>
            </Button>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { name: 'Clothes & Fashion', icon: '👗', count: 45 },
              { name: 'Homemade Snacks & Sweets', icon: '🍪', count: 67 },
              { name: 'Imitation Jewelry', icon: '💍', count: 32 },
              { name: 'Tiffin / Dabba Services', icon: '🍛', count: 28 },
              { name: 'Beauty & Skincare Products', icon: '💄', count: 39 },
              { name: 'Handicrafts & Decorative Items', icon: '🎨', count: 54 }
            ].map((category) => (
              <Link 
                key={category.name} 
                to={`/category/${encodeURIComponent(category.name)}`}
                className="group"
              >
                <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-white dark:bg-gray-800">
                  <CardContent className="p-4 text-center">
                    <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">{category.icon}</div>
                    <h3 className="font-semibold text-sm text-gray-900 dark:text-white mb-2">{category.name}</h3>
                    <p className="text-xs text-blue-600 dark:text-blue-400 font-medium">{category.count} businesses</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <FeaturedBusinesses />
      
      {/* Why Choose Us */}
      <div className="py-16 px-4 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Why Choose Us?
            </h2>
            <Button 
              onClick={() => setShowSuccessStories(true)}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold"
            >
              <Award className="w-5 h-5 mr-2" />
              Success Stories
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 dark:bg-blue-900 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Verified Businesses</h3>
              <p className="text-gray-600 dark:text-gray-300">All businesses are carefully verified for quality and authenticity</p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-100 dark:bg-blue-900 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Growing Community</h3>
              <p className="text-gray-600 dark:text-gray-300">Join hundreds of successful local entrepreneurs</p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-100 dark:bg-blue-900 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Local Support</h3>
              <p className="text-gray-600 dark:text-gray-300">Supporting the local economy and community growth</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 px-4 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            Whether you're looking for amazing local services or ready to start your own business, we're here to help you succeed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3">
              <Link to="/listings">Find Businesses</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3">
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
