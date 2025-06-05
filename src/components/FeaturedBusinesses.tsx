
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MapPin, Phone, Star } from 'lucide-react';

const featuredBusinesses = [
  {
    id: 1,
    title: "Priya's Handmade Jewelry",
    category: "Imitation Jewelry",
    location: "Lathi Road, Amreli",
    description: "Beautiful handcrafted jewelry with traditional designs. Custom orders available.",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=300&h=200&fit=crop",
    whatsapp: "9876543210"
  },
  {
    id: 2,
    title: "Ravi's Tiffin Service",
    category: "Tiffin / Dabba Services",
    location: "Station Road, Amreli",
    description: "Fresh, homemade meals delivered daily. Gujarati thali and North Indian options.",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=300&h=200&fit=crop",
    whatsapp: "9876543211"
  },
  {
    id: 3,
    title: "Meera's Boutique",
    category: "Clothes & Fashion",
    location: "Rajkot Road, Amreli",
    description: "Custom stitching and designer clothes for women. Traditional and modern wear.",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1445205170230-053b83016050?w=300&h=200&fit=crop",
    whatsapp: "9876543212"
  }
];

const FeaturedBusinesses = () => {
  return (
    <div className="py-16 px-4 bg-gradient-to-br from-blue-50 to-teal-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#005f73] mb-4">
            Featured Businesses
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover some of the top-rated home businesses in Amreli
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredBusinesses.map((business) => (
            <Card key={business.id} className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={business.image} 
                  alt={business.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 bg-white rounded-full px-2 py-1 flex items-center">
                  <Star className="w-4 h-4 text-yellow-400 mr-1" />
                  <span className="text-sm font-semibold">{business.rating}</span>
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-[#005f73]">{business.title}</CardTitle>
                <div className="flex items-center text-sm text-gray-600">
                  <MapPin className="w-4 h-4 mr-1" />
                  {business.location}
                </div>
                <div className="inline-block bg-[#007acc] text-white px-2 py-1 rounded-full text-xs">
                  {business.category}
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4 text-sm">{business.description}</p>
                <Button 
                  className="w-full bg-green-600 hover:bg-green-700 text-white"
                  onClick={() => window.open(`https://wa.me/91${business.whatsapp}`, '_blank')}
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Contact on WhatsApp
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedBusinesses;
