
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
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-teal-50">
      <Navbar />
      <Hero />
      
      {/* Stats Section */}
      <div className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <Card className="text-center p-6 bg-white/70 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="pt-6">
                <div className="text-3xl md:text-4xl font-bold text-[#007acc] mb-2">500+</div>
                <div className="text-gray-600 text-sm md:text-base">Local Businesses</div>
              </CardContent>
            </Card>
            <Card className="text-center p-6 bg-white/70 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="pt-6">
                <div className="text-3xl md:text-4xl font-bold text-[#00bfa6] mb-2">1000+</div>
                <div className="text-gray-600 text-sm md:text-base">Happy Customers</div>
              </CardContent>
            </Card>
            <Card className="text-center p-6 bg-white/70 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="pt-6">
                <div className="text-3xl md:text-4xl font-bold text-[#007acc] mb-2">50+</div>
                <div className="text-gray-600 text-sm md:text-base">Categories</div>
              </CardContent>
            </Card>
            <Card className="text-center p-6 bg-white/70 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="pt-6">
                <div className="text-3xl md:text-4xl font-bold text-[#00bfa6] mb-2">24/7</div>
                <div className="text-gray-600 text-sm md:text-base">Platform Access</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <CategoryGrid />
      <FeaturedBusinesses />
      
      {/* Why Choose Us Section */}
      <div className="py-16 px-4 bg-gradient-to-r from-[#007acc] to-[#00bfa6]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Lokspire?
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Your trusted platform for discovering and promoting local businesses in Amreli
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center text-white">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Sparkles className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">Premium Quality</h3>
              <p className="text-white/80">Verified businesses with quality products and services</p>
            </div>
            
            <div className="text-center text-white">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">Growing Network</h3>
              <p className="text-white/80">Expanding community of local entrepreneurs</p>
            </div>
            
            <div className="text-center text-white">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">Community Focus</h3>
              <p className="text-white/80">Supporting local economy and relationships</p>
            </div>
            
            <div className="text-center text-white">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8" />
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
          <Card className="p-8 md:p-12 bg-white/80 backdrop-blur-sm border-0 shadow-2xl">
            <CardContent>
              <h2 className="text-3xl md:text-4xl font-bold text-[#005f73] mb-6">
                Ready to Grow Your Business?
              </h2>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                Join hundreds of local entrepreneurs who are already growing their businesses with Lokspire
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild className="bg-gradient-to-r from-[#007acc] to-[#00bfa6] hover:from-[#005f73] hover:to-[#007acc] text-white px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-lg">
                  <Link to="/post">Post Your Business</Link>
                </Button>
                <Button asChild variant="outline" className="border-2 border-[#007acc] text-[#007acc] hover:bg-[#007acc] hover:text-white px-8 py-4 rounded-xl transition-all duration-300 text-lg">
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
