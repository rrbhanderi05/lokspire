
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MapPin, Phone, Star, Shield, Award, User } from 'lucide-react';
import { featuredBusinesses } from '@/data/businessData';

const FeaturedBusinesses = () => {
  const displayBusinesses = featuredBusinesses.filter(business => business.featured);

  return (
    <div className="py-16 px-4 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#005f73] dark:text-[#00bfa6] mb-4">
            Featured Businesses
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Discover some of the top-rated home businesses in Amreli
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayBusinesses.map((business) => (
            <Link key={business.id} to={`/business/${business.id}`} className="group">
              <Card className="overflow-hidden hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-2 border-0 shadow-lg bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={business.image} 
                    alt={business.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm rounded-full px-3 py-1 flex items-center shadow-lg">
                    <Star className="w-4 h-4 text-yellow-400 mr-1 fill-current" />
                    <span className="text-sm font-semibold dark:text-white">{business.rating}</span>
                  </div>
                  {business.verified && (
                    <div className="absolute top-4 left-4 bg-green-500 rounded-full p-2 shadow-lg">
                      <Shield className="w-4 h-4 text-white" />
                    </div>
                  )}
                  {business.featured && (
                    <div className="absolute bottom-4 left-4 bg-gradient-to-r from-[#007acc] to-[#00bfa6] text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center">
                      <Award className="w-3 h-3 mr-1" />
                      Featured
                    </div>
                  )}
                </div>
                <CardHeader className="pb-2">
                  <CardTitle className="text-[#005f73] dark:text-[#00bfa6] text-lg group-hover:text-[#007acc] dark:group-hover:text-[#0099cc] transition-colors">
                    {business.title}
                  </CardTitle>
                  <div className="flex items-center text-sm text-gray-600 dark:text-gray-300 mb-1">
                    <User className="w-4 h-4 mr-1" />
                    Owner: Priya Patel
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                      <MapPin className="w-4 h-4 mr-1" />
                      {business.location}
                    </div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">
                      {business.reviews} reviews
                    </div>
                  </div>
                  <div className="inline-block bg-gradient-to-r from-[#007acc] to-[#00bfa6] text-white px-3 py-1 rounded-full text-xs font-medium w-fit">
                    {business.category}
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm leading-relaxed">{business.description}</p>
                  <div className="flex gap-2">
                    <Button 
                      className="flex-1 bg-green-600 hover:bg-green-700 text-white shadow-md hover:shadow-lg transition-all duration-300"
                      onClick={(e) => {
                        e.preventDefault();
                        window.open(`https://wa.me/91${business.whatsapp}`, '_blank');
                      }}
                    >
                      <Phone className="w-4 h-4 mr-2" />
                      WhatsApp
                    </Button>
                    <Button 
                      variant="outline"
                      className="flex-1 border-[#007acc] dark:border-[#00bfa6] text-[#007acc] dark:text-[#00bfa6] hover:bg-[#007acc] dark:hover:bg-[#00bfa6] hover:text-white transition-all duration-300"
                      onClick={(e) => {
                        e.preventDefault();
                        window.open(`tel:+91${business.mobile}`, '_self');
                      }}
                    >
                      Call
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button asChild className="bg-gradient-to-r from-[#007acc] to-[#00bfa6] hover:from-[#005f73] hover:to-[#007acc] text-white px-8 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
            <Link to="/listings">View All Businesses</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FeaturedBusinesses;
