
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Star, Quote } from 'lucide-react';

interface SuccessStory {
  id: number;
  name: string;
  business: string;
  customers: string;
  image: string;
  testimonial: string;
  rating: number;
}

const successStories: SuccessStory[] = [
  {
    id: 1,
    name: "Priya Patel",
    business: "Handmade Jewelry",
    customers: "500+",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
    testimonial: "This platform helped me reach customers across Amreli. My jewelry business has grown beyond my dreams!",
    rating: 5
  },
  {
    id: 2,
    name: "Meera Shah",
    business: "Tiffin Service",
    customers: "300+",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    testimonial: "Started with 10 customers, now serving 300+ families daily. Amazing platform for home entrepreneurs!",
    rating: 5
  },
  {
    id: 3,
    name: "Kavita Rajput",
    business: "Beauty Products",
    customers: "250+",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
    testimonial: "My homemade beauty products now have loyal customers throughout the city. Grateful for this opportunity!",
    rating: 5
  },
  {
    id: 4,
    name: "Sunita Desai",
    business: "Handicrafts",
    customers: "400+",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    testimonial: "From a small hobby to a thriving business. This platform connected me with art lovers everywhere!",
    rating: 5
  }
];

interface SuccessStoriesProps {
  onClose: () => void;
}

const SuccessStories: React.FC<SuccessStoriesProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white dark:bg-gray-900 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
        <div className="p-6 border-b border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Success Stories</h2>
            <Button variant="ghost" onClick={onClose} className="text-gray-500 hover:text-gray-700">
              ✕
            </Button>
          </div>
          <p className="text-gray-600 dark:text-gray-300 mt-2">
            Inspiring stories from women entrepreneurs who transformed their dreams into successful businesses
          </p>
        </div>
        
        <div className="p-6">
          <Carousel className="w-full">
            <CarouselContent>
              {successStories.map((story) => (
                <CarouselItem key={story.id} className="md:basis-1/2">
                  <Card className="h-full bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 border-0 shadow-lg">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4 mb-4">
                        <img 
                          src={story.image} 
                          alt={story.name}
                          className="w-16 h-16 rounded-full object-cover border-4 border-[#007acc]/20"
                        />
                        <div>
                          <h3 className="font-bold text-lg text-gray-900 dark:text-white">{story.name}</h3>
                          <p className="text-[#007acc] dark:text-[#00bfa6] font-medium">{story.business}</p>
                          <div className="flex items-center gap-1">
                            {[...Array(story.rating)].map((_, i) => (
                              <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                            ))}
                          </div>
                        </div>
                      </div>
                      
                      <div className="text-center mb-4">
                        <div className="text-3xl font-bold text-[#007acc] dark:text-[#00bfa6] mb-1">
                          {story.customers}
                        </div>
                        <div className="text-sm text-gray-600 dark:text-gray-300">Happy Customers</div>
                      </div>
                      
                      <div className="relative">
                        <Quote className="w-6 h-6 text-[#007acc]/30 mb-2" />
                        <p className="text-gray-700 dark:text-gray-300 italic leading-relaxed">
                          "{story.testimonial}"
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-4" />
            <CarouselNext className="right-4" />
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default SuccessStories;
