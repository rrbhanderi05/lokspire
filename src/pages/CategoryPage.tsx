
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MapPin, Phone, Star, ArrowLeft } from 'lucide-react';

const CategoryPage = () => {
  const { category } = useParams<{ category: string }>();
  const decodedCategory = decodeURIComponent(category || '');

  // Sample data - in a real app, this would come from an API
  const categoryBusinesses = [
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
      title: "Royal Jewelry Collection",
      category: "Imitation Jewelry",
      location: "Station Road, Amreli",
      description: "Elegant jewelry pieces for special occasions. Bridal sets and party wear available.",
      rating: 4.6,
      image: "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=300&h=200&fit=crop",
      whatsapp: "9876543211"
    },
    {
      id: 3,
      title: "Traditional Crafts",
      category: "Imitation Jewelry",
      location: "College Road, Amreli",
      description: "Authentic traditional jewelry with modern touch. Custom designs and repairs.",
      rating: 4.7,
      image: "https://images.unsplash.com/photo-1610394858775-a5a2b7e82c0d?w=300&h=200&fit=crop",
      whatsapp: "9876543212"
    }
  ].filter(business => business.category === decodedCategory);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <Link to="/categories" className="inline-flex items-center text-[#007acc] hover:text-[#005f73] mb-4">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Categories
            </Link>
            <h1 className="text-3xl md:text-4xl font-bold text-[#005f73] mb-4">
              {decodedCategory}
            </h1>
            <p className="text-lg text-gray-600">
              Discover local businesses in the {decodedCategory.toLowerCase()} category
            </p>
          </div>

          {/* Results count */}
          <div className="mb-6">
            <p className="text-gray-600">
              Showing {categoryBusinesses.length} businesses in {decodedCategory}
            </p>
          </div>

          {/* Business Grid */}
          {categoryBusinesses.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {categoryBusinesses.map((business) => (
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
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg mb-4">
                No businesses found in the {decodedCategory} category yet.
              </p>
              <p className="text-gray-400 mb-6">
                Be the first to post your business in this category!
              </p>
              <Link to="/post">
                <Button className="bg-gradient-to-r from-[#007acc] to-[#00bfa6] hover:from-[#005f73] hover:to-[#007acc]">
                  Post Your Business
                </Button>
              </Link>
            </div>
          )}

          {/* CTA Section */}
          <div className="mt-16 text-center bg-gradient-to-r from-[#007acc] to-[#00bfa6] rounded-2xl p-8 text-white">
            <h2 className="text-2xl font-bold mb-4">
              Have a business in {decodedCategory}?
            </h2>
            <p className="text-lg mb-6 opacity-90">
              Join our community and reach more customers in Amreli!
            </p>
            <Link to="/post">
              <button className="bg-white text-[#007acc] px-8 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors">
                Post Your Business
              </button>
            </Link>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default CategoryPage;
