
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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-gray-950 dark:via-slate-900 dark:to-indigo-950">
      <Navbar />
      
      {/* Hero Section with Enhanced Search */}
      <div className="relative bg-gradient-to-br from-indigo-600 via-purple-600 to-blue-600 dark:from-indigo-800 dark:via-purple-800 dark:to-blue-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.05"%3E%3Ccircle cx="30" cy="30" r="3"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] animate-pulse"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 py-20 md:py-32 relative">
          <div className="text-center mb-12">
            <div className="flex justify-center mb-8">
              <div className="inline-flex items-center px-8 py-4 bg-white/10 backdrop-blur-md rounded-full border border-white/20 shadow-2xl">
                <Sparkles className="w-6 h-6 mr-3 text-yellow-300" />
                <span className="text-lg font-bold tracking-wide">World's Premier Local Business Platform</span>
              </div>
            </div>
            <h1 className="text-6xl md:text-8xl font-black mb-8 leading-tight tracking-tight">
              Discover
              <span className="block bg-gradient-to-r from-yellow-300 via-orange-300 to-pink-300 bg-clip-text text-transparent drop-shadow-2xl">
                Exceptional
              </span>
              <span className="block text-5xl md:text-7xl mt-2">Local Businesses</span>
            </h1>
            <p className="text-xl md:text-3xl mb-12 text-white/95 max-w-5xl mx-auto leading-relaxed font-light">
              Connect with extraordinary home-based entrepreneurs in Amreli. From luxury handcrafted jewelry to gourmet culinary experiences.
            </p>
          </div>
          
          {/* Enhanced Search Bar */}
          <div className="mb-16">
            <SearchBar />
          </div>

          {/* Quick Actions */}
          <div className="flex flex-wrap justify-center gap-8">
            <Button asChild className="bg-white/15 backdrop-blur-md hover:bg-white/25 text-white border-white/20 rounded-full px-12 py-6 text-xl font-bold shadow-2xl hover:shadow-white/25 transition-all duration-500 hover:scale-105">
              <Link to="/categories">Browse Premium Categories</Link>
            </Button>
            <Button asChild className="bg-gradient-to-r from-yellow-400 to-orange-400 text-gray-900 hover:from-yellow-300 hover:to-orange-300 rounded-full px-12 py-6 text-xl font-bold shadow-2xl hover:shadow-yellow/25 transition-all duration-500 hover:scale-105">
              <Link to="/post">
                <Plus className="w-6 h-6 mr-3" />
                Start Premium Journey
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="py-20 px-4 bg-gradient-to-r from-slate-50 via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-slate-800 dark:to-indigo-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg rounded-3xl p-8 shadow-2xl hover:shadow-indigo-500/25 transition-all duration-500 group-hover:scale-110 border border-white/20">
                <div className="text-5xl md:text-6xl font-black bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-3">500+</div>
                <div className="text-gray-700 dark:text-gray-300 font-bold text-lg">Premium Businesses</div>
              </div>
            </div>
            <div className="text-center group">
              <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg rounded-3xl p-8 shadow-2xl hover:shadow-indigo-500/25 transition-all duration-500 group-hover:scale-110 border border-white/20">
                <div className="text-5xl md:text-6xl font-black bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-3">1000+</div>
                <div className="text-gray-700 dark:text-gray-300 font-bold text-lg">Satisfied Customers</div>
              </div>
            </div>
            <div className="text-center group">
              <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg rounded-3xl p-8 shadow-2xl hover:shadow-indigo-500/25 transition-all duration-500 group-hover:scale-110 border border-white/20">
                <div className="text-5xl md:text-6xl font-black bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-3">50+</div>
                <div className="text-gray-700 dark:text-gray-300 font-bold text-lg">Categories</div>
              </div>
            </div>
            <div className="text-center group">
              <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg rounded-3xl p-8 shadow-2xl hover:shadow-indigo-500/25 transition-all duration-500 group-hover:scale-110 border border-white/20">
                <div className="text-5xl md:text-6xl font-black bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-3">24/7</div>
                <div className="text-gray-700 dark:text-gray-300 font-bold text-lg">Premium Support</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Popular Categories - Horizontal Scroll */}
      <div className="py-20 px-4 bg-white dark:bg-gray-950">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-16">
            <h2 className="text-4xl md:text-6xl font-black bg-gradient-to-r from-gray-900 via-indigo-800 to-purple-800 dark:from-white dark:via-indigo-300 dark:to-purple-300 bg-clip-text text-transparent">
              Premium Categories
            </h2>
            <Button asChild variant="outline" className="rounded-full border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-600 hover:text-white px-8 py-3 text-lg font-bold shadow-lg">
              <Link to="/categories">Explore All</Link>
            </Button>
          </div>
          
          <div className="flex gap-8 overflow-x-auto pb-6 scrollbar-hide">
            {[
              { name: 'Luxury Fashion', icon: '👗', count: '45+ businesses' },
              { name: 'Gourmet Snacks', icon: '🍪', count: '32+ businesses' },
              { name: 'Premium Jewelry', icon: '💍', count: '28+ businesses' },
              { name: 'Tiffin Services', icon: '🍛', count: '24+ businesses' },
              { name: 'Beauty Products', icon: '💄', count: '20+ businesses' },
              { name: 'Handcrafts', icon: '🎨', count: '18+ businesses' }
            ].map((category) => (
              <Link 
                key={category.name} 
                to={`/category/${encodeURIComponent(category.name)}`}
                className="flex-shrink-0 group"
              >
                <Card className="w-64 hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 bg-gradient-to-br from-white via-slate-50 to-indigo-50 dark:from-gray-800 dark:via-gray-700 dark:to-indigo-900 border-0 shadow-xl group-hover:shadow-indigo-500/25 backdrop-blur-lg">
                  <CardContent className="p-10 text-center">
                    <div className="text-6xl mb-6 group-hover:scale-125 transition-transform duration-500">{category.icon}</div>
                    <h3 className="font-black text-xl text-gray-900 dark:text-white mb-4">{category.name}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 bg-indigo-100 dark:bg-indigo-900 px-4 py-2 rounded-full font-semibold">{category.count}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <FeaturedBusinesses />
      
      {/* Why Choose Us - with Success Stories Button */}
      <div className="py-24 px-4 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 dark:from-indigo-950 dark:via-purple-950 dark:to-pink-950">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-7xl font-black bg-gradient-to-r from-indigo-800 via-purple-800 to-pink-800 dark:from-indigo-200 dark:via-purple-200 dark:to-pink-200 bg-clip-text text-transparent mb-8">
              Why Choose Our World-Class Platform?
            </h2>
            <Button 
              onClick={() => setShowSuccessStories(true)}
              className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 hover:from-indigo-500 hover:via-purple-500 hover:to-pink-500 text-white px-12 py-6 rounded-full mb-12 shadow-2xl hover:shadow-purple-500/25 transition-all duration-500 text-xl font-bold hover:scale-105"
            >
              <Award className="w-7 h-7 mr-3" />
              Success Stories
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center group">
              <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg rounded-3xl p-10 shadow-2xl hover:shadow-indigo-500/25 transition-all duration-500 group-hover:-translate-y-3 border border-white/20">
                <div className="w-24 h-24 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-500 shadow-lg">
                  <Shield className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-3xl font-black text-gray-900 dark:text-white mb-6">Verified Premium Businesses</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">All businesses undergo rigorous verification for exceptional quality and authenticity</p>
              </div>
            </div>
            
            <div className="text-center group">
              <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg rounded-3xl p-10 shadow-2xl hover:shadow-indigo-500/25 transition-all duration-500 group-hover:-translate-y-3 border border-white/20">
                <div className="w-24 h-24 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-500 shadow-lg">
                  <TrendingUp className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-3xl font-black text-gray-900 dark:text-white mb-6">Thriving Ecosystem</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">Join hundreds of successful local entrepreneurs in our premium ecosystem</p>
              </div>
            </div>
            
            <div className="text-center group">
              <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg rounded-3xl p-10 shadow-2xl hover:shadow-indigo-500/25 transition-all duration-500 group-hover:-translate-y-3 border border-white/20">
                <div className="w-24 h-24 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-500 shadow-lg">
                  <Users className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-3xl font-black text-gray-900 dark:text-white mb-6">Local Excellence</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">Empowering local economy through premium business connections</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section - Premium */}
      <div className="py-24 px-4 bg-white dark:bg-gray-950">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-5xl md:text-7xl font-black bg-gradient-to-r from-gray-900 via-indigo-800 to-purple-800 dark:from-white dark:via-indigo-300 dark:to-purple-300 bg-clip-text text-transparent mb-10">
            Ready for World-Class Excellence?
          </h2>
          <p className="text-2xl text-gray-600 dark:text-gray-300 mb-16 max-w-4xl mx-auto leading-relaxed font-light">
            Whether you're seeking exceptional local services or ready to showcase your premium business, we're here to elevate your experience to global standards.
          </p>
          <div className="flex flex-col sm:flex-row gap-8 justify-center">
            <Button asChild size="lg" className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 hover:from-indigo-500 hover:via-purple-500 hover:to-pink-500 text-white px-16 py-8 rounded-full text-2xl font-black shadow-2xl hover:shadow-purple-500/25 transition-all duration-500 hover:scale-105">
              <Link to="/listings">Discover Premium Businesses</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-600 hover:text-white px-16 py-8 rounded-full text-2xl font-black shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105">
              <Link to="/post">Begin Premium Journey</Link>
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
