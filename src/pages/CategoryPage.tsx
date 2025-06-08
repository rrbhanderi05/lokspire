
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MapPin, Phone, Star, ArrowLeft } from 'lucide-react';

// Extended business data to cover all categories
const allBusinesses = [
  // Imitation Jewelry
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
    title: "Traditional Crafts Jewelry",
    category: "Imitation Jewelry",
    location: "College Road, Amreli",
    description: "Authentic traditional jewelry with modern touch. Custom designs and repairs.",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1610394858775-a5a2b7e82c0d?w=300&h=200&fit=crop",
    whatsapp: "9876543212"
  },
  // Clothes & Fashion
  {
    id: 4,
    title: "Meera's Boutique",
    category: "Clothes & Fashion",
    location: "Rajmahel Road, Amreli",
    description: "Custom stitching and designer clothes for women. Traditional and modern wear.",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1445205170230-053b83016050?w=300&h=200&fit=crop",
    whatsapp: "9876543213"
  },
  {
    id: 5,
    title: "Fashion Hub",
    category: "Clothes & Fashion",
    location: "Tower Area, Amreli",
    description: "Latest fashion trends for men and women. Ready-made and custom tailoring.",
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=300&h=200&fit=crop",
    whatsapp: "9876543214"
  },
  // Homemade Snacks & Sweets
  {
    id: 6,
    title: "Sweet Dreams Bakery",
    category: "Homemade Snacks & Sweets",
    location: "Jesingpara, Amreli",
    description: "Freshly baked cakes, pastries and traditional sweets. Order for special occasions.",
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=300&h=200&fit=crop",
    whatsapp: "9876543215"
  },
  {
    id: 7,
    title: "Healthy Bites",
    category: "Homemade Snacks & Sweets",
    location: "Bhojal Para, Amreli",
    description: "Healthy homemade snacks and sugar-free sweets. Perfect for health-conscious families.",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1599599810769-bcde5a160d32?w=300&h=200&fit=crop",
    whatsapp: "9876543216"
  },
  // Tiffin / Dabba Services
  {
    id: 8,
    title: "Ravi's Tiffin Service",
    category: "Tiffin / Dabba Services",
    location: "Bhojal Para, Amreli",
    description: "Fresh, homemade meals delivered daily. Gujarati thali and North Indian options.",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=300&h=200&fit=crop",
    whatsapp: "9876543217"
  },
  {
    id: 9,
    title: "Home Kitchen Tiffin",
    category: "Tiffin / Dabba Services",
    location: "Sankul, Amreli",
    description: "Authentic home-cooked meals with love. Monthly and weekly packages available.",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=300&h=200&fit=crop",
    whatsapp: "9876543218"
  },
  // Beauty & Skincare Products
  {
    id: 10,
    title: "Natural Glow Skincare",
    category: "Beauty & Skincare Products",
    location: "Tower Area, Amreli",
    description: "Organic and natural skincare products made with herbal ingredients.",
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=300&h=200&fit=crop",
    whatsapp: "9876543219"
  },
  {
    id: 11,
    title: "Herbal Beauty Care",
    category: "Beauty & Skincare Products",
    location: "Lathi Road, Amreli",
    description: "Chemical-free beauty products for all skin types. Custom face packs available.",
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=200&fit=crop",
    whatsapp: "9876543220"
  },
  // Handicrafts & Decorative Items
  {
    id: 12,
    title: "Craftsman's Corner",
    category: "Handicrafts & Decorative Items",
    location: "GIDC Residential Area, Amreli",
    description: "Unique handicrafts and home decor items. Perfect for gifting and decorating.",
    rating: 4.4,
    image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=300&h=200&fit=crop",
    whatsapp: "9876543221"
  },
  {
    id: 13,
    title: "Artistic Creations",
    category: "Handicrafts & Decorative Items",
    location: "Mukti Dham Area, Amreli",
    description: "Handmade decorative items and artistic pieces. Custom orders for special events.",
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=200&fit=crop",
    whatsapp: "9876543222"
  },
  // Gift & Handmade Items
  {
    id: 14,
    title: "Gift Gallery",
    category: "Gift & Handmade Items",
    location: "Chakkargadh Road, Amreli",
    description: "Personalized gifts and handmade items for all occasions. Custom photo frames and albums.",
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=300&h=200&fit=crop",
    whatsapp: "9876543223"
  },
  // Stationery / Printed Items
  {
    id: 15,
    title: "Print Perfect",
    category: "Stationery / Printed Items",
    location: "Kanyashala Road, Amreli",
    description: "Wedding cards, visiting cards, and all printing services. Digital and offset printing.",
    rating: 4.3,
    image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=300&h=200&fit=crop",
    whatsapp: "9876543224"
  },
  // Stitching / Tailoring
  {
    id: 16,
    title: "Master Tailor",
    category: "Stitching / Tailoring",
    location: "Sukhnath Para, Amreli",
    description: "Expert tailoring services for men and women. Alterations and custom fitting.",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1581235720704-06d3acfcb36f?w=300&h=200&fit=crop",
    whatsapp: "9876543225"
  },
  // Baby Care Products
  {
    id: 17,
    title: "Little Angels Care",
    category: "Baby Care Products",
    location: "Hanumanpara, Amreli",
    description: "Natural and safe baby care products. Organic baby food and clothing.",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=300&h=200&fit=crop",
    whatsapp: "9876543226"
  },
  // Jobs
  {
    id: 18,
    title: "Local Employment Hub",
    category: "Jobs",
    location: "Dr. Ghanshyam Dhanani's Area, Amreli",
    description: "Part-time and full-time job opportunities in Amreli. Data entry, sales, and home-based work.",
    rating: 4.2,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=200&fit=crop",
    whatsapp: "9876543227"
  }
];

const CategoryPage = () => {
  const { category } = useParams<{ category: string }>();
  const decodedCategory = decodeURIComponent(category || '');

  // Filter businesses based on the selected category
  const categoryBusinesses = allBusinesses.filter(business => 
    business.category === decodedCategory
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
      <Navbar />
      
      <div className="py-12 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <Link to="/categories" className="inline-flex items-center text-[#007acc] dark:text-[#00bfa6] hover:text-[#005f73] dark:hover:text-[#0099cc] mb-4 transition-colors">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Categories
            </Link>
            <h1 className="text-3xl md:text-4xl font-bold text-[#005f73] dark:text-[#00bfa6] mb-4">
              {decodedCategory}
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Discover local businesses in the {decodedCategory.toLowerCase()} category
            </p>
          </div>

          {/* Results count */}
          <div className="mb-6">
            <p className="text-gray-600 dark:text-gray-400">
              Showing {categoryBusinesses.length} businesses in {decodedCategory}
            </p>
          </div>

          {/* Business Grid */}
          {categoryBusinesses.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {categoryBusinesses.map((business) => (
                <Link key={business.id} to={`/business/${business.id}`} className="group">
                  <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 h-full group-hover:-translate-y-1 bg-white/90 dark:bg-gray-800/90 border-gray-200 dark:border-gray-700 backdrop-blur-sm">
                    <div className="relative h-48 overflow-hidden">
                      <img 
                        src={business.image} 
                        alt={business.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute top-4 right-4 bg-white/95 dark:bg-gray-800/95 rounded-full px-3 py-1 flex items-center shadow-lg backdrop-blur-sm">
                        <Star className="w-4 h-4 text-yellow-400 mr-1" fill="currentColor" />
                        <span className="text-sm font-semibold text-gray-800 dark:text-gray-200">{business.rating}</span>
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent h-16"></div>
                    </div>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-[#005f73] dark:text-[#00bfa6] group-hover:text-[#007acc] dark:group-hover:text-[#00e6cb] transition-colors">{business.title}</CardTitle>
                      <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                        <MapPin className="w-4 h-4 mr-1" />
                        {business.location}
                      </div>
                      <Link 
                        to={`/category/${encodeURIComponent(business.category)}`}
                        onClick={(e) => e.stopPropagation()}
                      >
                        <div className="inline-block bg-gradient-to-r from-[#007acc] to-[#00bfa6] text-white px-3 py-1 rounded-full text-xs font-medium hover:from-[#005f73] hover:to-[#007acc] transition-all duration-300 cursor-pointer">
                          {business.category}
                        </div>
                      </Link>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm line-clamp-2">{business.description}</p>
                      <Button 
                        className="w-full bg-green-600 hover:bg-green-700 dark:bg-green-600 dark:hover:bg-green-700 text-white shadow-lg transition-all duration-300"
                        onClick={(e) => {
                          e.preventDefault();
                          window.open(`https://wa.me/91${business.whatsapp}`, '_blank');
                        }}
                      >
                        <Phone className="w-4 h-4 mr-2" />
                        Contact on WhatsApp
                      </Button>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-16 px-4 bg-white/90 dark:bg-gray-800/90 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 backdrop-blur-sm">
              <p className="text-gray-600 dark:text-gray-300 text-lg font-medium mb-4">
                No businesses found in the {decodedCategory} category yet.
              </p>
              <p className="text-gray-400 dark:text-gray-500 mb-6">
                Be the first to post your business in this category!
              </p>
              <Link to="/post">
                <Button className="bg-gradient-to-r from-[#007acc] to-[#00bfa6] hover:from-[#005f73] hover:to-[#007acc] text-white shadow-lg transition-all duration-300">
                  Post Your Business
                </Button>
              </Link>
            </div>
          )}

          {/* CTA Section */}
          <div className="mt-16 text-center bg-gradient-to-r from-[#007acc] to-[#00bfa6] rounded-2xl p-8 text-white shadow-2xl overflow-hidden relative">
            <div className="absolute inset-0 bg-black opacity-10 z-0"></div>
            <div className="relative z-10">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
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
      </div>
      
      <Footer />
    </div>
  );
};

export default CategoryPage;
