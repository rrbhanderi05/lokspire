import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { ArrowLeft, MapPin, Phone, Star, Share2, User, Copy, Check } from 'lucide-react';
import { featuredBusinesses } from '@/data/businessData';
import { useUser, SignInButton } from '@clerk/clerk-react';
import { toast } from '@/hooks/use-toast';

const BusinessPost = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { user } = useUser();
  const [userRating, setUserRating] = useState(0);
  const [copied, setCopied] = useState(false);
  const [ratings, setRatings] = useState([
    { id: 1, user: "Anjali Patel", rating: 5, date: "2024-01-15" },
    { id: 2, user: "Raj Shah", rating: 4, date: "2024-01-10" },
    { id: 3, user: "Priya Mehta", rating: 5, date: "2024-01-08" },
    { id: 4, user: "Kiran Modi", rating: 4, date: "2024-01-05" },
    { id: 5, user: "Dhruv Joshi", rating: 5, date: "2024-01-02" }
  ]);

  const business = featuredBusinesses.find(b => b.id === parseInt(id || ''));

  if (!business) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-teal-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <Navbar />
        <div className="py-12 px-4 text-center">
          <h1 className="text-2xl font-bold text-gray-600 dark:text-gray-400 mb-4">Business not found</h1>
          <Link to="/listings">
            <Button className="bg-gradient-to-r from-[#007acc] to-[#00bfa6] hover:from-[#005f73] hover:to-[#007acc] shadow-xl">
              Back to Listings
            </Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const businessImages = [
    business.image,
    "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800",
    "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800"
  ];

  const handleAddRating = () => {
    if (!user) {
      toast({
        title: "Sign in required",
        description: "Please sign in to rate this business.",
        variant: "destructive"
      });
      return;
    }

    if (userRating > 0) {
      const newRating = {
        id: ratings.length + 1,
        user: user.fullName || user.emailAddresses[0]?.emailAddress || "User",
        rating: userRating,
        date: new Date().toISOString().split('T')[0]
      };
      setRatings([newRating, ...ratings]);
      setUserRating(0);
      toast({
        title: "Rating added!",
        description: "Your rating has been submitted successfully."
      });
    }
  };

  const handleShare = async () => {
    const shareData = {
      title: `${business.title} - Premium Local Business`,
      text: `Check out this amazing business: ${business.description}`,
      url: window.location.href
    };

    if (navigator.share && navigator.canShare && navigator.canShare(shareData)) {
      try {
        await navigator.share(shareData);
        toast({
          title: "Shared successfully!",
          description: "Business details shared successfully."
        });
      } catch (error) {
        console.log('Error sharing:', error);
        fallbackShare();
      }
    } else {
      fallbackShare();
    }
  };

  const fallbackShare = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
      toast({
        title: "Link copied!",
        description: "Business link copied to clipboard."
      });
    } catch (error) {
      toast({
        title: "Share failed",
        description: "Unable to share this business.",
        variant: "destructive"
      });
    }
  };

  const averageRating = ratings.reduce((sum, rating) => sum + rating.rating, 0) / ratings.length;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-teal-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <Navbar />
      
      <div className="py-8 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Back Button */}
          <Button
            variant="ghost"
            onClick={() => navigate(-1)}
            className="mb-6 hover:bg-white/80 dark:hover:bg-gray-800/80 text-gray-700 dark:text-gray-300 rounded-xl backdrop-blur-sm"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back
          </Button>

          {/* Business Header with Image Slider */}
          <Card className="mb-8 overflow-hidden shadow-2xl border-0 bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl">
            <div className="relative">
              <Carousel className="w-full">
                <CarouselContent>
                  {businessImages.map((image, index) => (
                    <CarouselItem key={index}>
                      <div className="relative h-64 md:h-80">
                        <img 
                          src={image} 
                          alt={`${business.title} - Image ${index + 1}`}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="left-4 bg-white/90 dark:bg-gray-800/90 hover:bg-white dark:hover:bg-gray-700 backdrop-blur-sm" />
                <CarouselNext className="right-4 bg-white/90 dark:bg-gray-800/90 hover:bg-white dark:hover:bg-gray-700 backdrop-blur-sm" />
              </Carousel>
              
              <div className="absolute bottom-6 left-6 text-white">
                <h1 className="text-3xl md:text-4xl font-bold mb-2 drop-shadow-2xl">{business.title}</h1>
                <div className="flex items-center mb-2">
                  <User className="w-5 h-5 mr-2" />
                  <span className="text-lg drop-shadow-lg">Owner: Priya Patel</span>
                </div>
                <div className="flex items-center mb-2">
                  <MapPin className="w-5 h-5 mr-2" />
                  <span className="text-lg drop-shadow-lg">{business.location}</span>
                </div>
                <div className="inline-block bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium">
                  {business.category}
                </div>
              </div>
              <div className="absolute top-6 right-6 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-xl px-4 py-3 flex items-center shadow-2xl">
                <Star className="w-5 h-5 text-yellow-400 mr-1 fill-current" />
                <span className="font-bold text-lg text-gray-900 dark:text-white">{averageRating.toFixed(1)}</span>
                <span className="text-gray-600 dark:text-gray-400 ml-1">({ratings.length})</span>
              </div>
            </div>
          </Card>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-6">
              {/* Description */}
              <Card className="shadow-2xl border-0 bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl">
                <CardHeader>
                  <CardTitle className="text-[#005f73] dark:text-[#00bfa6] text-xl">About This Business</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">{business.description}</p>
                </CardContent>
              </Card>

              {/* Add Rating */}
              <Card className="shadow-2xl border-0 bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl">
                <CardHeader>
                  <CardTitle className="text-[#005f73] dark:text-[#00bfa6] text-xl">Rate This Business</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {!user ? (
                    <div className="text-center py-8 bg-gradient-to-r from-gray-50 to-blue-50 dark:from-gray-700 dark:to-gray-600 rounded-xl">
                      <p className="text-gray-600 dark:text-gray-300 mb-4">Sign in to rate this business</p>
                      <SignInButton mode="modal">
                        <Button className="bg-gradient-to-r from-[#007acc] to-[#00bfa6] hover:from-[#005f73] hover:to-[#007acc] shadow-xl">
                          Sign in to Rate
                        </Button>
                      </SignInButton>
                    </div>
                  ) : (
                    <>
                      <div>
                        <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">Your Rating</label>
                        <div className="flex space-x-1">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <button
                              key={star}
                              onClick={() => setUserRating(star)}
                              className="focus:outline-none transition-all duration-200 hover:scale-110"
                            >
                              <Star 
                                className={`w-8 h-8 ${
                                  star <= userRating 
                                    ? 'text-yellow-400 fill-current' 
                                    : 'text-gray-300 dark:text-gray-600'
                                }`}
                              />
                            </button>
                          ))}
                        </div>
                      </div>
                      <Button 
                        onClick={handleAddRating}
                        disabled={userRating === 0}
                        className="bg-gradient-to-r from-[#007acc] to-[#00bfa6] hover:from-[#005f73] hover:to-[#007acc] shadow-xl"
                      >
                        Submit Rating
                      </Button>
                    </>
                  )}
                </CardContent>
              </Card>

              {/* Ratings */}
              <Card className="shadow-2xl border-0 bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl">
                <CardHeader>
                  <CardTitle className="text-[#005f73] dark:text-[#00bfa6] text-xl flex items-center">
                    <Star className="w-5 h-5 mr-2" />
                    Customer Ratings ({ratings.length})
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {ratings.map((rating) => (
                    <div key={rating.id} className="border-b border-gray-200 dark:border-gray-700 pb-4 last:border-b-0">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 bg-gradient-to-r from-[#007acc] to-[#00bfa6] rounded-full flex items-center justify-center">
                            <span className="text-white font-bold text-sm">{rating.user.charAt(0)}</span>
                          </div>
                          <div>
                            <span className="font-medium text-gray-900 dark:text-white">{rating.user}</span>
                            <div className="flex items-center">
                              {[...Array(5)].map((_, i) => (
                                <Star
                                  key={i}
                                  className={`w-4 h-4 ${
                                    i < rating.rating
                                      ? 'text-yellow-400 fill-current'
                                      : 'text-gray-300 dark:text-gray-600'
                                  }`}
                                />
                              ))}
                            </div>
                          </div>
                        </div>
                        <span className="text-sm text-gray-500 dark:text-gray-400">{rating.date}</span>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Contact Info */}
              <Card className="shadow-2xl border-0 bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl">
                <CardHeader>
                  <CardTitle className="text-[#005f73] dark:text-[#00bfa6] text-xl">Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button 
                    className="w-full bg-green-600 hover:bg-green-700 text-white shadow-xl hover:shadow-2xl transition-all duration-300 rounded-xl"
                    onClick={() => window.open(`https://wa.me/91${business.whatsapp}`, '_blank')}
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    WhatsApp: +91 {business.whatsapp}
                  </Button>
                  <Button 
                    variant="outline"
                    className="w-full border-2 border-[#007acc] text-[#007acc] hover:bg-[#007acc] hover:text-white dark:border-[#00bfa6] dark:text-[#00bfa6] dark:hover:bg-[#00bfa6] dark:hover:text-white shadow-xl hover:shadow-2xl transition-all duration-300 rounded-xl"
                    onClick={() => window.open(`tel:+91${business.mobile}`, '_self')}
                  >
                    Call: +91 {business.mobile}
                  </Button>
                  <Button 
                    variant="outline"
                    className="w-full border-2 border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 shadow-xl hover:shadow-2xl transition-all duration-300 rounded-xl"
                    onClick={handleShare}
                  >
                    {copied ? <Check className="w-4 h-4 mr-2" /> : <Share2 className="w-4 h-4 mr-2" />}
                    {copied ? 'Link Copied!' : 'Share Business'}
                  </Button>
                </CardContent>
              </Card>

              {/* Business Stats */}
              <Card className="shadow-2xl border-0 bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl">
                <CardHeader>
                  <CardTitle className="text-[#005f73] dark:text-[#00bfa6] text-xl">Business Details</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 dark:text-gray-400">Total Ratings:</span>
                    <span className="font-bold text-gray-900 dark:text-white text-lg">{ratings.length}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 dark:text-gray-400">Average Rating:</span>
                    <span className="font-bold text-gray-900 dark:text-white text-lg">{averageRating.toFixed(1)}/5</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 dark:text-gray-400">Category:</span>
                    <span className="font-semibold text-sm text-gray-900 dark:text-white">{business.category}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 dark:text-gray-400">Owner:</span>
                    <span className="font-semibold text-sm text-gray-900 dark:text-white">Priya Patel</span>
                  </div>
                  {business.verified && (
                    <div className="flex items-center justify-center bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 text-green-700 dark:text-green-400 px-4 py-3 rounded-xl border border-green-200 dark:border-green-800">
                      <span className="text-sm font-bold">✓ Verified Premium Business</span>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default BusinessPost;