
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { allBusinesses } from '@/data/allBusinesses';

// Calculate real business counts
const getCategoryCount = (categoryName: string) => {
  return allBusinesses.filter(business => business.category === categoryName).length;
};

const categoryData = [
  { id: 1, name: 'Clothes & Fashion', icon: '👗', description: 'Custom tailoring and designer wear' },
  { id: 2, name: 'Imitation Jewelry', icon: '💍', description: 'Handcrafted jewelry and accessories' },
  { id: 3, name: 'Homemade Snacks & Sweets', icon: '🍪', description: 'Fresh baked goods and treats' },
  { id: 4, name: 'Tiffin / Dabba Services', icon: '🍛', description: 'Home-cooked meal delivery' },
  { id: 5, name: 'Beauty & Skincare Products', icon: '💄', description: 'Natural beauty and skincare' },
  { id: 6, name: 'Handicrafts & Decorative Items', icon: '🎨', description: 'Handmade crafts and decor' },
  { id: 7, name: 'Gift & Handmade Items', icon: '🎁', description: 'Personalized gifts and crafts' },
  { id: 8, name: 'Stationery / Printed Items', icon: '📄', description: 'Custom printing and stationery' },
  { id: 9, name: 'Stitching / Tailoring', icon: '✂️', description: 'Expert tailoring services' },
  { id: 10, name: 'Baby Care Products', icon: '👶', description: 'Safe and natural baby products' },
  { id: 11, name: 'Jobs', icon: '💼', description: 'Local employment opportunities' }
];

const CategoryGrid = () => {
  return (
    <div className="py-12 px-4 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Browse Categories
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Explore local businesses by category and find exactly what you're looking for
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {categoryData.map((category) => {
            const count = getCategoryCount(category.name);
            return (
              <Link 
                key={category.id} 
                to={`/category/${encodeURIComponent(category.name)}`}
                className="group"
              >
                <Card className="h-full hover:shadow-lg transition-all duration-300 group-hover:-translate-y-1 border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
                  <CardContent className="p-4 md:p-6 text-center">
                    <div className="text-3xl md:text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                      {category.icon}
                    </div>
                    <h3 className="font-bold text-gray-900 dark:text-white mb-2 text-sm md:text-base group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {category.name}
                    </h3>
                    <p className="text-xs md:text-sm text-gray-600 dark:text-gray-300 mb-3 leading-relaxed">
                      {category.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs md:text-sm font-semibold text-blue-600 dark:text-blue-400">
                        {count} businesses
                      </span>
                      <ArrowRight className="w-4 h-4 text-blue-600 dark:text-blue-400 group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>

        <div className="text-center mt-8">
          <Link 
            to="/categories"
            className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-semibold text-lg transition-colors duration-300 group"
          >
            View All Categories
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CategoryGrid;
