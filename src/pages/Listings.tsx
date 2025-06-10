import React, { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { MapPin, Phone, Star, Search, Filter } from 'lucide-react';
import { allBusinesses } from '@/data/allBusinesses';

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
  "Dr. Ghanshyam Dhanani's Area",
  'Station Road Area',
  'College Road Area'
];

const Listings = () => {
  const [searchParams] = useSearchParams();
  const [searchTerm, setSearchTerm] = useState(searchParams.get('search') || '');
  const [selectedCategory, setSelectedCategory] = useState(searchParams.get('category') || 'All Categories');
  const [selectedArea, setSelectedArea] = useState(searchParams.get('area') || 'All Areas');
  const [filteredBusinesses, setFilteredBusinesses] = useState(allBusinesses);

  // Update state when URL parameters change
  useEffect(() => {
    setSearchTerm(searchParams.get('search') || '');
    setSelectedCategory(searchParams.get('category') || 'All Categories');
    setSelectedArea(searchParams.get('area') || 'All Areas');
  }, [searchParams]);

  React.useEffect(() => {
    let filtered = allBusinesses;

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
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
      <Navbar />
      
      <div className="py-12 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-blue-700 dark:text-blue-400 mb-4">
              Browse Local Businesses
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Discover amazing home-based businesses in Amreli
            </p>
          </div>

          {/* Search and Filter */}
          <div className="mb-8 bg-white/90 dark:bg-gray-800/90 p-6 rounded-xl shadow-lg backdrop-blur-sm border border-gray-100 dark:border-gray-700">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500 w-5 h-5" />
                <Input
                  placeholder="Search businesses, products, or locations..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 h-12 rounded-xl border-gray-200 dark:border-gray-700 focus:border-blue-600 dark:focus:border-blue-400 focus:ring-blue-600 dark:focus:ring-blue-400 bg-white dark:bg-gray-800"
                />
              </div>
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="h-12 rounded-xl border-gray-200 dark:border-gray-700 focus:border-blue-600 dark:focus:border-blue-400 focus:ring-blue-600 dark:focus:ring-blue-400 bg-white dark:bg-gray-800">
                  <SelectValue placeholder="Select category" />
                </SelectTrigger>
                <SelectContent className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
                  {categories.map((category) => (
                    <SelectItem key={category} value={category} className="text-gray-700 dark:text-gray-300">
                      {category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Select value={selectedArea} onValueChange={setSelectedArea}>
                <SelectTrigger className="h-12 rounded-xl border-gray-200 dark:border-gray-700 focus:border-blue-600 dark:focus:border-blue-400 focus:ring-blue-600 dark:focus:ring-blue-400 bg-white dark:bg-gray-800">
                  <SelectValue placeholder="Select area" />
                </SelectTrigger>
                <SelectContent className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
                  {areas.map((area) => (
                    <SelectItem key={area} value={area} className="text-gray-700 dark:text-gray-300">
                      {area}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Results */}
          <div className="mb-6">
            <p className="text-gray-600 dark:text-gray-400">
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
                <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 h-full group-hover:-translate-y-1 bg-white/90 dark:bg-gray-800/90 border-gray-200 dark:border-gray-700 backdrop-blur-sm">
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={business.image} 
                      alt={business.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      loading="lazy"
                    />
                    <div className="absolute top-4 right-4 bg-white/95 dark:bg-gray-800/95 rounded-full px-3 py-1 flex items-center shadow-lg backdrop-blur-sm">
                      <Star className="w-4 h-4 text-yellow-400 mr-1" fill="currentColor" />
                      <span className="text-sm font-semibold text-gray-800 dark:text-gray-200">{business.rating}</span>
                    </div>
                  </div>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-blue-700 dark:text-blue-400 group-hover:text-blue-600 dark:group-hover:text-blue-300 transition-colors">{business.title}</CardTitle>
                    <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                      <MapPin className="w-4 h-4 mr-1" />
                      {business.location}
                    </div>
                    <Link 
                      to={`/category/${encodeURIComponent(business.category)}`} 
                      onClick={(e) => e.stopPropagation()}
                    >
                      <div className="inline-block bg-gradient-to-r from-blue-600 to-blue-500 text-white px-3 py-1 rounded-full text-xs font-medium hover:from-blue-700 hover:to-blue-600 transition-all duration-300 cursor-pointer">
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

          {filteredBusinesses.length === 0 && (
            <div className="text-center py-16 px-4 bg-white/90 dark:bg-gray-800/90 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 backdrop-blur-sm">
              <Filter className="w-16 h-16 mx-auto text-gray-400 dark:text-gray-500 mb-4" />
              <p className="text-gray-600 dark:text-gray-300 text-lg font-medium">No businesses found matching your criteria.</p>
              <p className="text-gray-400 dark:text-gray-500 mt-2">Try adjusting your search or filter options.</p>
            </div>
          )}
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Listings;
