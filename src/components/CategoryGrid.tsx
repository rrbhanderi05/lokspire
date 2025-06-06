
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { businessCategories } from '@/data/businessData';

const CategoryGrid = () => {
  return (
    <div className="py-16 px-4 bg-gradient-to-br from-blue-50 to-teal-50 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#005f73] dark:text-[#00bfa6] mb-4">
            Popular Categories
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Explore local businesses by category and find exactly what you're looking for
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {businessCategories.map((category) => (
            <Link 
              key={category.id} 
              to={`/category/${encodeURIComponent(category.name)}`}
              className="group"
            >
              <Card className="h-full hover:shadow-xl transition-all duration-300 group-hover:-translate-y-2 border-0 shadow-lg bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
                <CardContent className="p-4 md:p-6 text-center">
                  <div className="text-3xl md:text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                    {category.icon}
                  </div>
                  <h3 className="font-bold text-[#005f73] dark:text-[#00bfa6] mb-2 text-sm md:text-base group-hover:text-[#007acc] dark:group-hover:text-[#00bfa6] transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-xs md:text-sm text-gray-600 dark:text-gray-300 mb-3 leading-relaxed">
                    {category.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs md:text-sm font-semibold text-[#007acc] dark:text-[#00bfa6]">
                      {category.count} businesses
                    </span>
                    <ArrowRight className="w-4 h-4 text-[#00bfa6] group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link 
            to="/categories"
            className="inline-flex items-center text-[#007acc] dark:text-[#00bfa6] hover:text-[#005f73] dark:hover:text-[#0099cc] font-semibold text-lg transition-colors duration-300 group"
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
