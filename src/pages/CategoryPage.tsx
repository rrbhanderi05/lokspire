
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MapPin, Phone, Star, ArrowLeft } from 'lucide-react';
import { allBusinesses } from '@/data/allBusinesses';

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
            <Link to="/categories" className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 mb-4 transition-colors">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Categories
            </Link>
            <h1 className="text-3xl md:text-4xl font-bold text-blue-700 dark:text-blue-400 mb-4">
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
                      <div className="inline-block bg-gradient-to-r from-blue-600 to-blue-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                        {business.category}
                      </div>
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
                <Button className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white shadow-lg transition-all duration-300">
                  Post Your Business
                </Button>
              </Link>
            </div>
          )}

          {/* CTA Section */}
          <div className="mt-16 text-center bg-gradient-to-r from-blue-600 to-blue-500 rounded-2xl p-8 text-white shadow-2xl overflow-hidden relative">
            <div className="relative z-10">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Have a business in {decodedCategory}?
              </h2>
              <p className="text-lg mb-6 opacity-90">
                Join our community and reach more customers in Amreli!
              </p>
              <Link to="/post">
                <button className="bg-white text-blue-600 px-8 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors">
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
