
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { X, Star, TrendingUp, Users, Award, MapPin, Calendar } from 'lucide-react';

interface SuccessStoriesProps {
  onClose: () => void;
}

const SuccessStories = ({ onClose }: SuccessStoriesProps) => {
  const stories = [
    {
      id: 1,
      name: "Priya's Homemade Delights",
      owner: "Priya Patel",
      category: "Food & Catering",
      location: "Amreli Central",
      startDate: "January 2024",
      rating: 4.9,
      reviews: 127,
      monthlyRevenue: "₹25,000+",
      story: "Started with just ₹2,000 investment, now serving 50+ families weekly with authentic Gujarati thali. The enterprise authentication system helped me connect with corporate clients for bulk orders.",
      achievements: [
        "150% revenue growth in 6 months",
        "Featured in local newspaper",
        "30+ corporate partnerships",
        "Zero delivery complaints"
      ],
      image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=300&fit=crop"
    },
    {
      id: 2,
      name: "TechCraft Solutions",
      owner: "Raj Mehta",
      category: "IT Services",
      location: "Amreli Tech Hub",
      startDate: "March 2024",
      rating: 5.0,
      reviews: 89,
      monthlyRevenue: "₹75,000+",
      story: "From a small room to serving 20+ local businesses with website development and digital marketing. WorkOS integration helped me secure enterprise clients with confidence.",
      achievements: [
        "300% client base growth",
        "Industry recognition award",
        "15+ enterprise contracts",
        "100% client retention rate"
      ],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop"
    },
    {
      id: 3,
      name: "Artisan Crafts Studio",
      owner: "Meera Shah",
      category: "Handicrafts",
      location: "Amreli Old City",
      startDate: "February 2024",
      rating: 4.8,
      reviews: 156,
      monthlyRevenue: "₹35,000+",
      story: "Traditional Gujarati handicrafts now reaching customers nationwide. The secure authentication system built trust with premium customers and enabled international shipping partnerships.",
      achievements: [
        "500+ products sold",
        "International shipping to 5 countries",
        "Featured in craft exhibitions",
        "Trained 10+ local artisans"
      ],
      image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=400&h=300&fit=crop"
    }
  ];

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white dark:bg-gray-900 rounded-3xl max-w-6xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
        <div className="sticky top-0 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 p-6 flex justify-between items-center rounded-t-3xl">
          <div>
            <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Success Stories
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mt-2">
              Real entrepreneurs, real success with Lokspire
            </p>
          </div>
          <Button 
            onClick={onClose}
            variant="ghost" 
            size="icon"
            className="rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            <X className="w-6 h-6" />
          </Button>
        </div>

        <div className="p-6 space-y-8">
          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <div className="text-center bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950 dark:to-indigo-950 p-6 rounded-2xl">
              <TrendingUp className="w-8 h-8 text-blue-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-blue-600">250%</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Avg. Revenue Growth</div>
            </div>
            <div className="text-center bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950 dark:to-emerald-950 p-6 rounded-2xl">
              <Users className="w-8 h-8 text-green-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-green-600">500+</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Happy Customers</div>
            </div>
            <div className="text-center bg-gradient-to-br from-purple-50 to-violet-50 dark:from-purple-950 dark:to-violet-950 p-6 rounded-2xl">
              <Award className="w-8 h-8 text-purple-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-purple-600">95%</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Success Rate</div>
            </div>
            <div className="text-center bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-950 dark:to-red-950 p-6 rounded-2xl">
              <MapPin className="w-8 h-8 text-orange-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-orange-600">50+</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Local Businesses</div>
            </div>
          </div>

          {/* Success Stories */}
          <div className="space-y-8">
            {stories.map((story) => (
              <Card key={story.id} className="overflow-hidden shadow-xl border-0 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900">
                <CardContent className="p-0">
                  <div className="md:flex">
                    <div className="md:w-1/3">
                      <img 
                        src={story.image} 
                        alt={story.name}
                        className="w-full h-64 md:h-full object-cover"
                      />
                    </div>
                    <div className="md:w-2/3 p-8">
                      <div className="flex flex-wrap items-start justify-between mb-4">
                        <div>
                          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                            {story.name}
                          </h3>
                          <p className="text-lg text-blue-600 dark:text-blue-400 font-semibold">
                            {story.owner}
                          </p>
                          <div className="flex items-center gap-4 mt-2 text-sm text-gray-600 dark:text-gray-400">
                            <span className="flex items-center gap-1">
                              <MapPin className="w-4 h-4" />
                              {story.location}
                            </span>
                            <span className="flex items-center gap-1">
                              <Calendar className="w-4 h-4" />
                              Started {story.startDate}
                            </span>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="flex items-center gap-1 mb-1">
                            <Star className="w-5 h-5 text-yellow-500 fill-current" />
                            <span className="font-bold text-lg">{story.rating}</span>
                            <span className="text-gray-600 dark:text-gray-400">({story.reviews} reviews)</span>
                          </div>
                          <div className="text-2xl font-bold text-green-600">
                            {story.monthlyRevenue}
                          </div>
                          <div className="text-sm text-gray-600 dark:text-gray-400">monthly revenue</div>
                        </div>
                      </div>

                      <div className="mb-4">
                        <span className="inline-block bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm font-semibold">
                          {story.category}
                        </span>
                      </div>

                      <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                        "{story.story}"
                      </p>

                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Key Achievements:</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          {story.achievements.map((achievement, index) => (
                            <div key={index} className="flex items-center gap-2">
                              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                              <span className="text-sm text-gray-700 dark:text-gray-300">{achievement}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Write Your Success Story?</h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Join hundreds of successful entrepreneurs who have transformed their passion into thriving businesses with Lokspire's enterprise-grade platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={onClose}
                variant="secondary"
                className="bg-white text-blue-600 hover:bg-gray-100 font-semibold px-8 py-3"
              >
                Start Your Journey
              </Button>
              <Button 
                variant="outline"
                className="border-white text-white hover:bg-white/10 font-semibold px-8 py-3"
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessStories;
