
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Shirt, 
  Crown, 
  Cookie, 
  UtensilsCrossed, 
  Sparkles, 
  Gift, 
  Heart, 
  FileText, 
  Scissors, 
  Baby, 
  Briefcase 
} from 'lucide-react';

const categories = [
  { name: 'Clothes & Fashion', icon: Shirt, color: 'bg-pink-100 text-pink-700' },
  { name: 'Imitation Jewelry', icon: Crown, color: 'bg-purple-100 text-purple-700' },
  { name: 'Homemade Snacks & Sweets', icon: Cookie, color: 'bg-orange-100 text-orange-700' },
  { name: 'Tiffin / Dabba Services', icon: UtensilsCrossed, color: 'bg-green-100 text-green-700' },
  { name: 'Beauty & Skincare Products', icon: Sparkles, color: 'bg-rose-100 text-rose-700' },
  { name: 'Handicrafts & Decorative Items', icon: Gift, color: 'bg-indigo-100 text-indigo-700' },
  { name: 'Gift & Handmade Items', icon: Heart, color: 'bg-red-100 text-red-700' },
  { name: 'Stationery / Printed Items', icon: FileText, color: 'bg-blue-100 text-blue-700' },
  { name: 'Stitching / Tailoring', icon: Scissors, color: 'bg-yellow-100 text-yellow-700' },
  { name: 'Baby Care Products', icon: Baby, color: 'bg-cyan-100 text-cyan-700' },
  { name: 'Jobs', icon: Briefcase, color: 'bg-gray-100 text-gray-700' },
];

const CategoryGrid = () => {
  return (
    <div className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#005f73] mb-4">
            Browse by Category
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore different types of home-based businesses in Amreli
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {categories.map((category) => {
            const IconComponent = category.icon;
            return (
              <Link key={category.name} to={`/category/${encodeURIComponent(category.name)}`}>
                <Card className="hover:shadow-lg transition-all duration-300 transform hover:scale-105 cursor-pointer h-full">
                  <CardContent className="p-6 text-center">
                    <div className={`w-16 h-16 rounded-full ${category.color} flex items-center justify-center mx-auto mb-4`}>
                      <IconComponent className="w-8 h-8" />
                    </div>
                    <h3 className="font-semibold text-sm text-[#005f73] leading-tight">
                      {category.name}
                    </h3>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CategoryGrid;
