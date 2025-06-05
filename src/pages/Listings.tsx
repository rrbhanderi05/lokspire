
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { MapPin, Phone, Star, Search } from 'lucide-react';

const sampleBusinesses = [
  {
    id: 1,
    title: "Priya's Handmade Jewelry",
    category: "Imitation Jewelry",
    location: "Lathi Road Area",
    description: "Beautiful handcrafted jewelry with traditional designs. Custom orders available.",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=300&h=200&fit=crop",
    whatsapp: "9876543210"
  },
  {
    id: 2,
    title: "Ravi's Tiffin Service",
    category: "Tiffin / Dabba Services",
    location: "Bhojal Para",
    description: "Fresh, homemade meals delivered daily. Gujarati thali and North Indian options.",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=300&h=200&fit=crop",
    whatsapp: "9876543211"
  },
  {
    id: 3,
    title: "Meera's Boutique",
    category: "Clothes & Fashion",
    location: "Rajmahel Road Area",
    description: "Custom stitching and designer clothes for women. Traditional and modern wear.",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1445205170230-053b83016050?w=300&h=200&fit=crop",
    whatsapp: "9876543212"
  },
  {
    id: 4,
    title: "Sweet Dreams Bakery",
    category: "Homemade Snacks & Sweets",
    location: "Jesingpara",
    description: "Freshly baked cakes, pastries and traditional sweets. Order for special occasions.",
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=300&h=200&fit=crop",
    whatsapp: "9876543213"
  },
  {
    id: 5,
    title: "Natural Glow Skincare",
    category: "Beauty & Skincare Products",
    location: "Tower Area",
    description: "Organic and natural skincare products made with herbal ingredients.",
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=300&h=200&fit=crop",
    whatsapp: "9876543214"
  },
  {
    id: 6,
    title: "Craftsman's Corner",
    category: "Handicrafts & Decorative Items",
    location: "GIDC Residential Area",
    description: "Unique handicrafts and home decor items. Perfect for gifting and decorating.",
    rating: 4.4,
    image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=300&h=200&fit=crop",
    whatsapp: "9876543215"
  }
];

const categories = [
  'All Categories',
  'Clothes & Fashion',
  'Imitation Jewelry',
  'Homemade Snacks & Sweets',
  'Tiffin / Dabba Services',
  'Beauty & Skincare Products',
  'Handicrafts & Decorative Items',
  'Gift & Handmade Items',
  'Stationery / Printed Items',
  'Stitching / Tailoring',
  'Baby Care Products',
  'Jobs'
];

const areas = [
  'All Areas',
  'Bhojal Para',
  'Jesingpara',
  'Sankul',
  'Chakkargadh Road Area',
  'Sukhnath Para',
  'Hanumanpara',
  'Lathi Road Area',
  'Rajmahel Road Area',
  'Tower Area',
  'Mukti Dham Area',
  'Kanyashala Road Area',
  'GIDC Residential Area',
  "Dr. Ghanshyam Dhanani's Area"
];

const Listings = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All Categories');
  const [selectedArea, setSelectedArea] = useState('All Areas');
  const [filteredBusinesses, setFilteredBusinesses] = useState(sampleBusinesses);

  React.useEffect(() => {
    let filtered = sampleBusinesses;

    if (selectedCategory !== 'All Categories') {
      filtered = filtered.filter(business => business.category === selectedCategory);
    }

    if (selectedArea !== 'All Areas') {
      filtered = filtered.filter(business => business.location === selectedArea);
    }

    if (searchTerm) {
      filtered = filtered.filter(business => 
        business.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        business.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        business.location.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredBusinesses(filtered);
  }, [searchTerm, selectedCategory, selectedArea]);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-[#005f73] mb-4">
              Browse Local Businesses
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover amazing home-based businesses in Amreli
            </p>
          </div>

          {/* Search and Filter */}
          <div className="mb-8 bg-white p-6 rounded-xl shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input
                  placeholder="Search businesses, products, or locations..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 h-12 rounded-xl border-gray-200 focus:border-[#007acc] focus:ring-[#007acc]"
                />
              </div>
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="h-12 rounded-xl border-gray-200 focus:border-[#007acc] focus:ring-[#007acc]">
                  <SelectValue placeholder="Select category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category} value={category}>
                      {category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Select value={selectedArea} onValueChange={setSelectedArea}>
                <SelectTrigger className="h-12 rounded-xl border-gray-200 focus:border-[#007acc] focus:ring-[#007acc]">
                  <SelectValue placeholder="Select area" />
                </SelectTrigger>
                <SelectContent>
                  {areas.map((area) => (
                    <SelectItem key={area} value={area}>
                      {area}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Results */}
          <div className="mb-6">
            <p className="text-gray-600">
              Showing {filteredBusinesses.length} businesses
              {selectedCategory !== 'All Categories' && ` in ${selectedCategory}`}
              {selectedArea !== 'All Areas' && ` in ${selectedArea}`}
              {searchTerm && ` matching "${searchTerm}"`}
            </p>
          </div>

          {/* Business Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredBusinesses.map((business) => (
              <Link key={business.id} to={`/business/${business.id}`} className="group">
                <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 group-hover:-translate-y-1">
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={business.image} 
                      alt={business.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute top-4 right-4 bg-white rounded-full px-2 py-1 flex items-center">
                      <Star className="w-4 h-4 text-yellow-400 mr-1" />
                      <span className="text-sm font-semibold">{business.rating}</span>
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-[#005f73] group-hover:text-[#007acc] transition-colors">{business.title}</CardTitle>
                    <div className="flex items-center text-sm text-gray-600">
                      <MapPin className="w-4 h-4 mr-1" />
                      {business.location}
                    </div>
                    <div className="inline-block bg-[#007acc] text-white px-2 py-1 rounded-full text-xs w-fit">
                      {business.category}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4 text-sm">{business.description}</p>
                    <Button 
                      className="w-full bg-green-600 hover:bg-green-700 text-white"
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

          {filteredBusinesses.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No businesses found matching your criteria.</p>
              <p className="text-gray-400 mt-2">Try adjusting your search or filter options.</p>
            </div>
          )}
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Listings;
