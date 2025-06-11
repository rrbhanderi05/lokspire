
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Star, Quote, TrendingUp, Heart, Award, Users } from 'lucide-react';

interface SuccessStory {
  id: number;
  name: string;
  business: string;
  category: string;
  customers: string;
  revenue: string;
  timeframe: string;
  image: string;
  testimonial: string;
  achievement: string;
  rating: number;
  growth: string;
}

const successStories: SuccessStory[] = [
  {
    id: 1,
    name: "Priya Patel",
    business: "Radiant Jewelry Co.",
    category: "Handmade Jewelry",
    customers: "850+",
    revenue: "₹3.2L/month",
    timeframe: "18 months",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
    testimonial: "From selling to neighbors to customers across Gujarat! Lokspire transformed my passion into a thriving business. The platform's trust and reach helped me achieve what I never thought possible.",
    achievement: "Featured in Local Business Magazine",
    rating: 5,
    growth: "+320%"
  },
  {
    id: 2,
    name: "Meera Shah",
    business: "Ghar Ka Khana",
    category: "Home-cooked Tiffin Service",
    customers: "600+",
    revenue: "₹2.8L/month",
    timeframe: "12 months",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    testimonial: "Started with 5 tiffins daily, now serving 600+ families! The ordering system and customer reviews on Lokspire helped build incredible trust. My kitchen became a business empire!",
    achievement: "Most Trusted Tiffin Service 2024",
    rating: 5,
    growth: "+480%"
  },
  {
    id: 3,
    name: "Kavita Rajput",
    business: "Pure Glow Naturals",
    category: "Natural Beauty Products",
    customers: "1200+",
    revenue: "₹4.5L/month",
    timeframe: "24 months",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
    testimonial: "My homemade beauty recipes are now loved by thousands! Lokspire's platform helped me scale from kitchen experiments to a recognized beauty brand with loyal customers nationwide.",
    achievement: "Gujarat's Best Natural Beauty Brand",
    rating: 5,
    growth: "+550%"
  },
  {
    id: 4,
    name: "Sunita Desai",
    business: "Heritage Crafts Studio",
    category: "Traditional Handicrafts",
    customers: "750+",
    revenue: "₹3.8L/month",
    timeframe: "20 months",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    testimonial: "Preserving our cultural heritage while building a modern business! Lokspire connected me with art lovers globally. My traditional crafts now have international recognition.",
    achievement: "Cultural Heritage Ambassador",
    rating: 5,
    growth: "+400%"
  },
  {
    id: 5,
    name: "Reena Joshi",
    business: "Sweet Delights",
    category: "Traditional Sweets & Snacks",
    customers: "900+",
    revenue: "₹5.2L/month",
    timeframe: "16 months",
    image: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=150&h=150&fit=crop&crop=face",
    testimonial: "Festival orders worth lakhs! Lokspire helped me turn my grandmother's recipes into a celebrated sweet business. The platform's reach during festivals is incredible!",
    achievement: "Festival Season's Top Seller",
    rating: 5,
    growth: "+380%"
  },
  {
    id: 6,
    name: "Anjali Sharma",
    business: "Fit & Fabulous",
    category: "Fitness & Wellness Coaching",
    customers: "450+",
    revenue: "₹2.5L/month",
    timeframe: "14 months",
    image: "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=150&h=150&fit=crop&crop=face",
    testimonial: "Transformed 450+ lives while building my dream career! Lokspire's booking system and client management features made running my fitness business seamless and professional.",
    achievement: "Certified Wellness Entrepreneur",
    rating: 5,
    growth: "+290%"
  }
];

interface SuccessStoriesProps {
  onClose: () => void;
}

const SuccessStories: React.FC<SuccessStoriesProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-white dark:bg-gray-900 rounded-3xl max-w-6xl w-full max-h-[95vh] overflow-hidden shadow-2xl border border-gray-200 dark:border-gray-700">
        <div className="p-8 border-b border-gray-200 dark:border-gray-700 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-850">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                Inspiring Success Stories
              </h2>
              <p className="text-gray-600 dark:text-gray-300 text-lg">
                Real entrepreneurs, real transformations, real success on Lokspire
              </p>
            </div>
            <Button 
              variant="ghost" 
              onClick={onClose} 
              className="text-gray-500 hover:text-gray-700 rounded-full w-12 h-12 text-xl font-bold"
            >
              ✕
            </Button>
          </div>
        </div>
        
        <div className="p-8 overflow-y-auto max-h-[calc(95vh-200px)]">
          <Carousel className="w-full">
            <CarouselContent className="ml-4">
              {successStories.map((story) => (
                <CarouselItem key={story.id} className="pl-4 md:basis-1/2 lg:basis-1/2">
                  <Card className="h-full bg-gradient-to-br from-white via-blue-50/30 to-indigo-50/50 dark:from-gray-800 dark:via-gray-800 dark:to-gray-850 border-0 shadow-xl hover:shadow-2xl transition-all duration-500 group overflow-hidden">
                    <CardContent className="p-8 relative">
                      {/* Background Pattern */}
                      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-blue-500/5 to-indigo-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      
                      {/* Header */}
                      <div className="flex items-start gap-6 mb-6 relative z-10">
                        <div className="relative">
                          <img 
                            src={story.image} 
                            alt={story.name}
                            className="w-20 h-20 rounded-2xl object-cover border-4 border-white dark:border-gray-700 shadow-lg group-hover:scale-110 transition-transform duration-300"
                          />
                          <div className="absolute -bottom-2 -right-2 bg-green-500 text-white rounded-full p-1">
                            <Award className="w-4 h-4" />
                          </div>
                        </div>
                        <div className="flex-1">
                          <h3 className="font-bold text-xl text-gray-900 dark:text-white mb-1">{story.name}</h3>
                          <p className="text-blue-600 dark:text-blue-400 font-semibold text-lg mb-1">{story.business}</p>
                          <p className="text-gray-600 dark:text-gray-300 text-sm mb-2">{story.category}</p>
                          <div className="flex items-center gap-1">
                            {[...Array(story.rating)].map((_, i) => (
                              <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                            ))}
                          </div>
                        </div>
                      </div>
                      
                      {/* Stats Grid */}
                      <div className="grid grid-cols-3 gap-4 mb-6 relative z-10">
                        <div className="text-center bg-white/60 dark:bg-gray-700/60 rounded-xl p-3 border border-blue-100 dark:border-gray-600">
                          <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-1 flex items-center justify-center">
                            <Users className="w-5 h-5 mr-1" />
                            {story.customers}
                          </div>
                          <div className="text-xs text-gray-600 dark:text-gray-300">Customers</div>
                        </div>
                        <div className="text-center bg-white/60 dark:bg-gray-700/60 rounded-xl p-3 border border-green-100 dark:border-gray-600">
                          <div className="text-2xl font-bold text-green-600 dark:text-green-400 mb-1">
                            {story.revenue}
                          </div>
                          <div className="text-xs text-gray-600 dark:text-gray-300">Monthly</div>
                        </div>
                        <div className="text-center bg-white/60 dark:bg-gray-700/60 rounded-xl p-3 border border-purple-100 dark:border-gray-600">
                          <div className="text-2xl font-bold text-purple-600 dark:text-purple-400 mb-1 flex items-center justify-center">
                            <TrendingUp className="w-5 h-5 mr-1" />
                            {story.growth}
                          </div>
                          <div className="text-xs text-gray-600 dark:text-gray-300">Growth</div>
                        </div>
                      </div>
                      
                      {/* Achievement Badge */}
                      <div className="mb-6 relative z-10">
                        <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-sm font-bold px-4 py-2 rounded-full inline-flex items-center shadow-lg">
                          <Heart className="w-4 h-4 mr-2" />
                          {story.achievement}
                        </div>
                      </div>
                      
                      {/* Testimonial */}
                      <div className="relative z-10">
                        <Quote className="w-8 h-8 text-blue-500/30 mb-4" />
                        <p className="text-gray-700 dark:text-gray-300 italic leading-relaxed text-base mb-4">
                          "{story.testimonial}"
                        </p>
                        <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
                          <span>Success in {story.timeframe}</span>
                          <span className="font-semibold text-blue-600 dark:text-blue-400">Verified ✓</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-4 bg-white/90 dark:bg-gray-800/90 border-blue-200 hover:bg-blue-50" />
            <CarouselNext className="right-4 bg-white/90 dark:bg-gray-800/90 border-blue-200 hover:bg-blue-50" />
          </Carousel>
          
          {/* Bottom CTA */}
          <div className="mt-8 text-center bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-850 rounded-2xl p-6">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Ready to Write Your Success Story?</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">Join thousands of entrepreneurs building their dreams on Lokspire</p>
            <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-3 rounded-xl font-semibold shadow-lg">
              Start Your Journey Today
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessStories;
