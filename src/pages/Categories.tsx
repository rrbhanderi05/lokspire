
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Plus } from 'lucide-react';

const categories = [
  { 
    name: 'Clothes & Fashion', 
    icon: '👗', 
    color: 'bg-pink-100 text-pink-700 dark:bg-pink-900/30 dark:text-pink-400',
    count: 2,
    description: 'Custom tailoring, designer wear, traditional and modern clothing'
  },
  { 
    name: 'Imitation Jewelry', 
    icon: '💍', 
    color: 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400',
    count: 3,
    description: 'Handcrafted jewelry, traditional designs, custom pieces'
  },
  { 
    name: 'Homemade Snacks & Sweets', 
    icon: '🍪', 
    color: 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400',
    count: 2,
    description: 'Fresh baked goods, traditional sweets, healthy snacks'
  },
  { 
    name: 'Tiffin / Dabba Services', 
    icon: '🍛', 
    color: 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400',
    count: 2,
    description: 'Home-cooked meals, daily delivery, healthy options'
  },
  { 
    name: 'Beauty & Skincare Products', 
    icon: '💄', 
    color: 'bg-rose-100 text-rose-700 dark:bg-rose-900/30 dark:text-rose-400',
    count: 2,
    description: 'Natural cosmetics, herbal skincare, beauty treatments'
  },
  { 
    name: 'Handicrafts & Decorative Items', 
    icon: '🎨', 
    color: 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-400',
    count: 2,
    description: 'Handmade crafts, home decor, artistic creations'
  },
  { 
    name: 'Gift & Handmade Items', 
    icon: '🎁', 
    color: 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400',
    count: 1,
    description: 'Personalized gifts, custom items, special occasions'
  },
  { 
    name: 'Stationery / Printed Items', 
    icon: '📄', 
    color: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400',
    count: 1,
    description: 'Custom printing, invitations, office supplies'
  },
  { 
    name: 'Stitching / Tailoring', 
    icon: '✂️', 
    color: 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400',
    count: 1,
    description: 'Alterations, custom fit, repair services'
  },
  { 
    name: 'Baby Care Products', 
    icon: '👶', 
    color: 'bg-cyan-100 text-cyan-700 dark:bg-cyan-900/30 dark:text-cyan-400',
    count: 1,
    description: 'Natural baby products, organic care, child-safe items'
  },
  { 
    name: 'Jobs', 
    icon: '💼', 
    color: 'bg-gray-100 text-gray-700 dark:bg-gray-800/50 dark:text-gray-400',
    count: 1,
    description: 'Local employment opportunities, part-time work'
  },
];

const Categories = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navbar />
      
      <div className="py-12 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Business Categories
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Explore different types of home-based businesses in Amreli. Find exactly what you're looking for.
            </p>
          </div>

          {/* Categories Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category) => (
              <Link key={category.name} to={`/category/${encodeURIComponent(category.name)}`}>
                <Card className="hover:shadow-xl transition-all duration-300 transform hover:scale-105 cursor-pointer h-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 overflow-hidden group">
                  <CardContent className="p-6">
                    <div className={`w-16 h-16 rounded-full ${category.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <span className="text-2xl">{category.icon}</span>
                    </div>
                    <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {category.name}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">
                      {category.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-blue-600 dark:text-blue-400 font-semibold">
                        {category.count} businesses
                      </span>
                      <span className="text-gray-400 dark:text-gray-500 text-sm group-hover:translate-x-1 transition-transform duration-300">
                        View all →
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-16 text-center bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl p-8 text-white">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Don't see your category?
            </h2>
            <p className="text-lg mb-6 opacity-90">
              We're always adding new categories. Post your business and help us grow!
            </p>
            <Link to="/post">
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center gap-2 mx-auto">
                <Plus className="w-5 h-5" />
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

export default Categories;
