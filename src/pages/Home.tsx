
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import CategoryGrid from '@/components/CategoryGrid';
import FeaturedBusinesses from '@/components/FeaturedBusinesses';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Sparkles, TrendingUp, Users, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-teal-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <Navbar />
      <Hero />
      
      {/* Stats Section */}
      <div className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <Card className="text-center p-6 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
              <CardContent className="pt-6">
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#007acc] to-[#00bfa6] bg-clip-text text-transparent mb-2">500+</div>
                <div className="text-gray-600 dark:text-gray-300 text-sm md:text-base font-medium">Local Businesses</div>
              </CardContent>
            </Card>
            <Card className="text-center p-6 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
              <CardContent className="pt-6">
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#00bfa6] to-[#007acc] bg-clip-text text-transparent mb-2">1000+</div>
                <div className="text-gray-600 dark:text-gray-300 text-sm md:text-base font-medium">Happy Customers</div>
              </CardContent>
            </Card>
            <Card className="text-center p-6 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
              <CardContent className="pt-6">
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#007acc] to-[#00bfa6] bg-clip-text text-transparent mb-2">50+</div>
                <div className="text-gray-600 dark:text-gray-300 text-sm md:text-base font-medium">Categories</div>
              </CardContent>
            </Card>
            <Card className="text-center p-6 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
              <CardContent className="pt-6">
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#00bfa6] to-[#007acc] bg-clip-text text-transparent mb-2">24/7</div>
                <div className="text-gray-600 dark:text-gray-300 text-sm md:text-base font-medium">Platform Access</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <CategoryGrid />
      <FeaturedBusinesses />
      
      {/* Why Choose Us Section */}
      <div className="py-16 px-4 bg-gradient-to-r from-[#007acc] to-[#00bfa6] dark:from-[#005f73] dark:to-[#007acc] relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10 dark:bg-black/20"></div>
        <div className="max-w-7xl mx-auto relative">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Us?
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Your trusted platform for discovering and promoting local businesses in Amreli
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center text-white group">
              <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-white/30 transition-all duration-300 group-hover:scale-110">
                <Sparkles className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-bold mb-2">Premium Quality</h3>
              <p className="text-white/80">Verified businesses with quality products and services</p>
            </div>
            
            <div className="text-center text-white group">
              <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-white/30 transition-all duration-300 group-hover:scale-110">
                <TrendingUp className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-bold mb-2">Growing Network</h3>
              <p className="text-white/80">Expanding community of local entrepreneurs</p>
            </div>
            
            <div className="text-center text-white group">
              <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-white/30 transition-all duration-300 group-hover:scale-110">
                <Users className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-bold mb-2">Community Focus</h3>
              <p className="text-white/80">Supporting local economy and relationships</p>
            </div>
            
            <div className="text-center text-white group">
              <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-white/30 transition-all duration-300 group-hover:scale-110">
                <Shield className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-bold mb-2">Trusted Platform</h3>
              <p className="text-white/80">Safe and secure business connections</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Card className="p-8 md:p-12 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm border-0 shadow-2xl">
            <CardContent>
              <h2 className="text-3xl md:text-4xl font-bold text-[#005f73] dark:text-[#00bfa6] mb-6">
                Ready to Grow Your Business?
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
                Join hundreds of local entrepreneurs who are already growing their businesses with us
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild className="bg-gradient-to-r from-[#007acc] to-[#00bfa6] hover:from-[#005f73] hover:to-[#007acc] text-white px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-lg transform hover:-translate-y-1">
                  <Link to="/post">Post Your Business</Link>
                </Button>
                <Button asChild variant="outline" className="border-2 border-[#007acc] dark:border-[#00bfa6] text-[#007acc] dark:text-[#00bfa6] hover:bg-[#007acc] dark:hover:bg-[#00bfa6] hover:text-white px-8 py-4 rounded-xl transition-all duration-300 text-lg transform hover:-translate-y-1">
                  <Link to="/listings">Browse Businesses</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Home;
