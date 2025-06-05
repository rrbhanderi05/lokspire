
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
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
  { 
    name: 'Clothes & Fashion', 
    icon: Shirt, 
    color: 'bg-pink-100 text-pink-700',
    count: 45,
    description: 'Custom tailoring, designer wear, traditional and modern clothing'
  },
  { 
    name: 'Imitation Jewelry', 
    icon: Crown, 
    color: 'bg-purple-100 text-purple-700',
    count: 32,
    description: 'Handcrafted jewelry, traditional designs, custom pieces'
  },
  { 
    name: 'Homemade Snacks & Sweets', 
    icon: Cookie, 
    color: 'bg-orange-100 text-orange-700',
    count: 67,
    description: 'Fresh baked goods, traditional sweets, healthy snacks'
  },
  { 
    name: 'Tiffin / Dabba Services', 
    icon: UtensilsCrossed, 
    color: 'bg-green-100 text-green-700',
    count: 28,
    description: 'Home-cooked meals, daily delivery, healthy options'
  },
  { 
    name: 'Beauty & Skincare Products', 
    icon: Sparkles, 
    color: 'bg-rose-100 text-rose-700',
    count: 39,
    description: 'Natural cosmetics, herbal skincare, beauty treatments'
  },
  { 
    name: 'Handicrafts & Decorative Items', 
    icon: Gift, 
    color: 'bg-indigo-100 text-indigo-700',
    count: 54,
    description: 'Handmade crafts, home decor, artistic creations'
  },
  { 
    name: 'Gift & Handmade Items', 
    icon: Heart, 
    color: 'bg-red-100 text-red-700',
    count: 41,
    description: 'Personalized gifts, custom items, special occasions'
  },
  { 
    name: 'Stationery / Printed Items', 
    icon: FileText, 
    color: 'bg-blue-100 text-blue-700',
    count: 23,
    description: 'Custom printing, invitations, office supplies'
  },
  { 
    name: 'Stitching / Tailoring', 
    icon: Scissors, 
    color: 'bg-yellow-100 text-yellow-700',
    count: 35,
    description: 'Alterations, custom fit, repair services'
  },
  { 
    name: 'Baby Care Products', 
    icon: Baby, 
    color: 'bg-cyan-100 text-cyan-700',
    count: 19,
    description: 'Natural baby products, organic care, child-safe items'
  },
  { 
    name: 'Jobs', 
    icon: Briefcase, 
    color: 'bg-gray-100 text-gray-700',
    count: 15,
    description: 'Local employment opportunities, part-time work'
  },
];

const Categories = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-[#005f73] mb-4">
              Business Categories
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore different types of home-based businesses in Amreli. Find exactly what you're looking for.
            </p>
          </div>

          {/* Categories Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category) => {
              const IconComponent = category.icon;
              return (
                <Link key={category.name} to={`/category/${encodeURIComponent(category.name)}`}>
                  <Card className="hover:shadow-xl transition-all duration-300 transform hover:scale-105 cursor-pointer h-full">
                    <CardContent className="p-6">
                      <div className={`w-16 h-16 rounded-full ${category.color} flex items-center justify-center mb-4`}>
                        <IconComponent className="w-8 h-8" />
                      </div>
                      <h3 className="font-bold text-lg text-[#005f73] mb-2">
                        {category.name}
                      </h3>
                      <p className="text-gray-600 text-sm mb-3">
                        {category.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-[#007acc] font-semibold">
                          {category.count} businesses
                        </span>
                        <span className="text-gray-400 text-sm">
                          View all →
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
          </div>

          {/* CTA Section */}
          <div className="mt-16 text-center bg-gradient-to-r from-[#007acc] to-[#00bfa6] rounded-2xl p-8 text-white">
            <h2 className="text-2xl font-bold mb-4">
              Don't see your category?
            </h2>
            <p className="text-lg mb-6 opacity-90">
              We're always adding new categories. Post your business and help us grow!
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

export default Categories;
