
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
    <div className="min-h-screen bg-white dark:bg-gray-950">
      <Navbar />
      
      {/* Hero Section with Enhanced Search */}
      <div className="relative bg-gradient-to-br from-[#007acc] via-[#00bfa6] to-[#007acc] dark:from-[#005f73] dark:via-[#007acc] dark:to-[#005f73] text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.05"%3E%3Ccircle cx="30" cy="30" r="3"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] animate-pulse"></div>
        <div className="max-w-7xl mx-auto px-4 py-20 md:py-32 relative">
          <div className="text-center mb-12">
            <div className="flex justify-center mb-6">
              <div className="inline-flex items-center px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full border border-white/30">
                <Sparkles className="w-5 h-5 mr-2" />
                <span className="text-sm font-semibold">Premium Local Business Platform</span>
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Discover Premium
              <span className="block bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                Local Businesses
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-4xl mx-auto leading-relaxed">
              Connect with exceptional home-based entrepreneurs in Amreli. From handcrafted jewelry to gourmet delicacies.
            </p>
          </div>
          
          {/* Enhanced Search Bar */}
          <div className="mb-12">
            <SearchBar />
          </div>

          {/* Quick Actions */}
          <div className="flex flex-wrap justify-center gap-6">
            <Button asChild className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border-white/30 rounded-full px-8 py-4 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300">
              <Link to="/categories">Browse Categories</Link>
            </Button>
            <Button asChild className="bg-white text-[#007acc] hover:bg-gray-100 rounded-full px-8 py-4 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300">
              <Link to="/post">
                <Plus className="w-5 h-5 mr-2" />
                List Your Business
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="py-16 px-4 bg-gradient-to-r from-gray-50 via-blue-50 to-teal-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 group-hover:scale-105">
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#007acc] to-[#00bfa6] bg-clip-text text-transparent mb-2">500+</div>
                <div className="text-gray-600 dark:text-gray-300 font-semibold">Premium Businesses</div>
              </div>
            </div>
            <div className="text-center group">
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 group-hover:scale-105">
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#007acc] to-[#00bfa6] bg-clip-text text-transparent mb-2">1000+</div>
                <div className="text-gray-600 dark:text-gray-300 font-semibold">Satisfied Customers</div>
              </div>
            </div>
            <div className="text-center group">
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 group-hover:scale-105">
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#007acc] to-[#00bfa6] bg-clip-text text-transparent mb-2">50+</div>
                <div className="text-gray-600 dark:text-gray-300 font-semibold">Categories</div>
              </div>
            </div>
            <div className="text-center group">
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 group-hover:scale-105">
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#007acc] to-[#00bfa6] bg-clip-text text-transparent mb-2">24/7</div>
                <div className="text-gray-600 dark:text-gray-300 font-semibold">Premium Support</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Popular Categories - Horizontal Scroll */}
      <div className="py-16 px-4 bg-white dark:bg-gray-950">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
              Popular Categories
            </h2>
            <Button asChild variant="outline" className="rounded-full border-2 border-[#007acc] text-[#007acc] hover:bg-[#007acc] hover:text-white px-6">
              <Link to="/categories">View All</Link>
            </Button>
          </div>
          
          <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide">
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
                className="flex-shrink-0 group"
              >
                <Card className="w-52 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 border-0 shadow-xl group-hover:shadow-blue-500/25">
                  <CardContent className="p-8 text-center">
                    <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">{category.icon}</div>
                    <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-3">{category.name}</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded-full">{category.count}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <FeaturedBusinesses />
      
      {/* Why Choose Us - with Success Stories Button */}
      <div className="py-20 px-4 bg-gradient-to-r from-gray-50 via-blue-50 to-teal-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent mb-6">
              Why Choose Our Premium Platform?
            </h2>
            <Button 
              onClick={() => setShowSuccessStories(true)}
              className="bg-gradient-to-r from-[#007acc] via-[#00bfa6] to-[#007acc] hover:from-[#005f73] hover:via-[#007acc] hover:to-[#005f73] text-white px-8 py-4 rounded-full mb-8 shadow-xl hover:shadow-2xl transition-all duration-500 text-lg font-semibold"
            >
              <Award className="w-6 h-6 mr-2" />
              Success Stories
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="text-center group">
              <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-2xl hover:shadow-blue-500/25 transition-all duration-500 group-hover:-translate-y-2">
                <div className="w-20 h-20 bg-gradient-to-r from-[#007acc] to-[#00bfa6] rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Shield className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Verified Premium Businesses</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">All businesses undergo rigorous verification for exceptional quality and authenticity</p>
              </div>
            </div>
            
            <div className="text-center group">
              <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-2xl hover:shadow-blue-500/25 transition-all duration-500 group-hover:-translate-y-2">
                <div className="w-20 h-20 bg-gradient-to-r from-[#007acc] to-[#00bfa6] rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <TrendingUp className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Thriving Community</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">Join hundreds of successful local entrepreneurs in our premium ecosystem</p>
              </div>
            </div>
            
            <div className="text-center group">
              <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-2xl hover:shadow-blue-500/25 transition-all duration-500 group-hover:-translate-y-2">
                <div className="w-20 h-20 bg-gradient-to-r from-[#007acc] to-[#00bfa6] rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Users className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Local Excellence</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">Empowering local economy through premium business connections</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section - Premium */}
      <div className="py-20 px-4 bg-white dark:bg-gray-950">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent mb-8">
            Ready to Experience Premium?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Whether you're seeking exceptional local services or ready to showcase your premium business, we're here to elevate your experience.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button asChild size="lg" className="bg-gradient-to-r from-[#007acc] via-[#00bfa6] to-[#007acc] hover:from-[#005f73] hover:via-[#007acc] hover:to-[#005f73] text-white px-10 py-6 rounded-full text-xl font-semibold shadow-2xl hover:shadow-blue-500/25 transition-all duration-500">
              <Link to="/listings">Discover Businesses</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-2 border-[#007acc] text-[#007acc] hover:bg-[#007acc] hover:text-white px-10 py-6 rounded-full text-xl font-semibold shadow-xl hover:shadow-2xl transition-all duration-500">
              <Link to="/post">Start Premium Journey</Link>
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
