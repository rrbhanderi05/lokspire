
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { MapPin, Users, Heart, TrendingUp, Target, Award } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-[#005f73] mb-6">
              About 📍 Lokspire
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Empowering home-based entrepreneurs in Amreli by connecting them with local customers 
              and building a stronger community, one business at a time.
            </p>
          </div>

          {/* Mission Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-3xl font-bold text-[#005f73] mb-6">Our Mission</h2>
              <p className="text-gray-600 text-lg mb-6">
                Lokspire was born from a simple belief: every home-based business deserves a chance to thrive. 
                In Amreli, countless talented entrepreneurs are creating amazing products and services from their homes, 
                but they often struggle to reach their ideal customers.
              </p>
              <p className="text-gray-600 text-lg">
                We bridge this gap by providing a dedicated platform where local businesses can showcase their offerings 
                and where customers can easily discover and support their neighbors' entrepreneurial dreams.
              </p>
            </div>
            <div className="bg-gradient-to-br from-[#007acc] to-[#00bfa6] rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Why Lokspire?</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Heart className="w-5 h-5 mr-3 mt-1 flex-shrink-0" />
                  <span>Support local entrepreneurs and families</span>
                </li>
                <li className="flex items-start">
                  <MapPin className="w-5 h-5 mr-3 mt-1 flex-shrink-0" />
                  <span>Discover unique products and services nearby</span>
                </li>
                <li className="flex items-start">
                  <Users className="w-5 h-5 mr-3 mt-1 flex-shrink-0" />
                  <span>Build stronger community connections</span>
                </li>
                <li className="flex items-start">
                  <TrendingUp className="w-5 h-5 mr-3 mt-1 flex-shrink-0" />
                  <span>Promote economic growth in Amreli</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Values Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-[#005f73] text-center mb-12">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="text-center p-6">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Target className="w-8 h-8 text-[#007acc]" />
                  </div>
                  <h3 className="text-xl font-bold text-[#005f73] mb-3">Community First</h3>
                  <p className="text-gray-600">
                    We prioritize the needs of our local community and believe in the power of neighborhood connections.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center p-6">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Heart className="w-8 h-8 text-[#00bfa6]" />
                  </div>
                  <h3 className="text-xl font-bold text-[#005f73] mb-3">Authentic Support</h3>
                  <p className="text-gray-600">
                    We provide genuine support to help local businesses grow and succeed in their entrepreneurial journey.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center p-6">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="w-8 h-8 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-bold text-[#005f73] mb-3">Quality Focus</h3>
                  <p className="text-gray-600">
                    We celebrate and promote high-quality products and services that represent the best of Amreli.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Stats Section */}
          <div className="bg-white rounded-2xl p-8 mb-16">
            <h2 className="text-3xl font-bold text-[#005f73] text-center mb-12">Our Impact</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-[#007acc] mb-2">500+</div>
                <div className="text-gray-600">Local Businesses</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-[#007acc] mb-2">1000+</div>
                <div className="text-gray-600">Happy Customers</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-[#007acc] mb-2">50+</div>
                <div className="text-gray-600">Categories</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-[#007acc] mb-2">24/7</div>
                <div className="text-gray-600">Platform Access</div>
              </div>
            </div>
          </div>

          {/* Team Section */}
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#005f73] mb-6">Our Story</h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-gray-600 text-lg mb-6">
                Founded in 2024, Lokspire emerged from our founders' personal experience of struggling to find 
                reliable local services in Amreli. After moving to the city, they realized how difficult it was 
                to discover the amazing home-based businesses that existed in their neighborhood.
              </p>
              <p className="text-gray-600 text-lg mb-6">
                What started as a simple directory has evolved into a comprehensive platform that not only helps 
                customers find local businesses but also provides entrepreneurs with the tools and visibility 
                they need to grow their ventures.
              </p>
              <p className="text-gray-600 text-lg">
                Today, we're proud to be part of Amreli's entrepreneurial ecosystem, fostering connections that 
                strengthen our community and create opportunities for local economic growth.
              </p>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-gradient-to-r from-[#007acc] to-[#00bfa6] rounded-2xl p-8 text-white">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Join Our Community?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Whether you're looking to discover local businesses or promote your own, 
              Lokspire is here to help you connect with your community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-[#007acc] px-8 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors">
                Browse Businesses
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-xl font-semibold hover:bg-white hover:text-[#007acc] transition-colors">
                Post Your Business
              </button>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default About;
