
import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { ArrowLeft, MapPin, Phone, Star, Send, ThumbsUp, MessageCircle, Share2, Heart } from 'lucide-react';
import { featuredBusinesses } from '@/data/businessData';
import { useAuth } from '@/contexts/AuthContext';
import { toast } from '@/hooks/use-toast';

const BusinessPost = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { user, signInWithGoogle } = useAuth();
  const [newComment, setNewComment] = useState('');
  const [userRating, setUserRating] = useState(0);
  const [likedComments, setLikedComments] = useState<Set<number>>(new Set());
  const [comments, setComments] = useState([
    {
      id: 1,
      user: "Anjali Patel",
      userPhoto: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150",
      rating: 5,
      comment: "Amazing service! Highly recommended. The quality is excellent and delivery was on time.",
      date: "2024-01-15",
      likes: 8
    },
    {
      id: 2,
      user: "Raj Shah", 
      userPhoto: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150",
      rating: 4,
      comment: "Good quality products. Will order again soon. Customer service is also very responsive.",
      date: "2024-01-10",
      likes: 5
    },
    {
      id: 3,
      user: "Priya Mehta",
      userPhoto: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150",
      rating: 5,
      comment: "Excellent work! Very professional and timely delivery. Exceeded my expectations.",
      date: "2024-01-08",
      likes: 12
    }
  ]);

  const business = featuredBusinesses.find(b => b.id === parseInt(id || ''));

  if (!business) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        <Navbar />
        <div className="py-12 px-4 text-center">
          <h1 className="text-2xl font-bold text-gray-600 dark:text-gray-400 mb-4">Business not found</h1>
          <Link to="/listings">
            <Button className="bg-gradient-to-r from-[#007acc] to-[#00bfa6] hover:from-[#005f73] hover:to-[#007acc]">
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

  const handleAddComment = () => {
    if (!user) {
      toast({
        title: "Sign in required",
        description: "Please sign in to post a comment.",
        variant: "destructive"
      });
      return;
    }

    if (newComment.trim() && userRating > 0) {
      const comment = {
        id: comments.length + 1,
        user: user.displayName || "User",
        userPhoto: user.photoURL || "",
        rating: userRating,
        comment: newComment,
        date: new Date().toISOString().split('T')[0],
        likes: 0
      };
      setComments([comment, ...comments]);
      setNewComment('');
      setUserRating(0);
      toast({
        title: "Comment posted!",
        description: "Your review has been added successfully."
      });
    }
  };

  const handleLike = (commentId: number) => {
    if (!user) {
      toast({
        title: "Sign in required",
        description: "Please sign in to like comments.",
        variant: "destructive"
      });
      return;
    }

    if (likedComments.has(commentId)) {
      toast({
        title: "Already liked",
        description: "You can only like a comment once.",
        variant: "destructive"
      });
      return;
    }

    setComments(comments.map(comment => 
      comment.id === commentId 
        ? { ...comment, likes: comment.likes + 1 }
        : comment
    ));
    setLikedComments(prev => new Set(prev).add(commentId));
    toast({
      title: "Liked!",
      description: "You liked this comment."
    });
  };

  const averageRating = comments.reduce((sum, comment) => sum + comment.rating, 0) / comments.length;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-teal-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <Navbar />
      
      <div className="py-8 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Back Button */}
          <Button
            variant="ghost"
            onClick={() => navigate(-1)}
            className="mb-6 hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back
          </Button>

          {/* Business Header with Image Slider */}
          <Card className="mb-8 overflow-hidden shadow-2xl border-0 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm">
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
                        <div className="absolute inset-0 bg-black bg-opacity-40" />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="left-4 bg-white/80 dark:bg-gray-800/80 hover:bg-white dark:hover:bg-gray-700" />
                <CarouselNext className="right-4 bg-white/80 dark:bg-gray-800/80 hover:bg-white dark:hover:bg-gray-700" />
              </Carousel>
              
              <div className="absolute bottom-6 left-6 text-white">
                <h1 className="text-3xl md:text-4xl font-bold mb-2 drop-shadow-lg">{business.title}</h1>
                <div className="flex items-center mb-2">
                  <MapPin className="w-5 h-5 mr-2" />
                  <span className="text-lg drop-shadow-lg">{business.location}</span>
                </div>
                <div className="inline-block bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium">
                  {business.category}
                </div>
              </div>
              <div className="absolute top-6 right-6 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-xl px-4 py-3 flex items-center shadow-xl">
                <Star className="w-5 h-5 text-yellow-400 mr-1 fill-current" />
                <span className="font-bold text-lg text-gray-900 dark:text-white">{averageRating.toFixed(1)}</span>
                <span className="text-gray-600 dark:text-gray-400 ml-1">({comments.length})</span>
              </div>
            </div>
          </Card>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-6">
              {/* Description */}
              <Card className="shadow-xl border-0 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-[#005f73] dark:text-[#00bfa6] text-xl">About</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">{business.description}</p>
                </CardContent>
              </Card>

              {/* Add Review */}
              <Card className="shadow-xl border-0 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-[#005f73] dark:text-[#00bfa6] text-xl">Write a Review</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {!user ? (
                    <div className="text-center py-8 bg-gradient-to-r from-gray-50 to-blue-50 dark:from-gray-700 dark:to-gray-600 rounded-xl">
                      <p className="text-gray-600 dark:text-gray-300 mb-4">Sign in to write a review</p>
                      <Button onClick={signInWithGoogle} className="bg-gradient-to-r from-[#007acc] to-[#00bfa6] hover:from-[#005f73] hover:to-[#007acc] shadow-lg">
                        Sign in with Google
                      </Button>
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
                      <div>
                        <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">Your Comment</label>
                        <Textarea
                          value={newComment}
                          onChange={(e) => setNewComment(e.target.value)}
                          placeholder="Share your experience..."
                          className="min-h-[100px] bg-white dark:bg-gray-700 border-gray-200 dark:border-gray-600 text-gray-900 dark:text-white"
                        />
                      </div>
                      <Button 
                        onClick={handleAddComment}
                        disabled={!newComment.trim() || userRating === 0}
                        className="bg-gradient-to-r from-[#007acc] to-[#00bfa6] hover:from-[#005f73] hover:to-[#007acc] shadow-lg"
                      >
                        <Send className="w-4 h-4 mr-2" />
                        Post Review
                      </Button>
                    </>
                  )}
                </CardContent>
              </Card>

              {/* Reviews */}
              <Card className="shadow-xl border-0 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-[#005f73] dark:text-[#00bfa6] flex items-center text-xl">
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Reviews ({comments.length})
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {comments.map((comment) => (
                    <div key={comment.id} className="border-b border-gray-200 dark:border-gray-700 pb-4 last:border-b-0">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center space-x-3">
                          <img
                            src={comment.userPhoto || `https://ui-avatars.com/api/?name=${comment.user}&background=007acc&color=fff`}
                            alt={comment.user}
                            className="w-10 h-10 rounded-full border-2 border-gray-200 dark:border-gray-600"
                          />
                          <div>
                            <span className="font-medium text-gray-900 dark:text-white">{comment.user}</span>
                            <div className="flex items-center">
                              {[...Array(5)].map((_, i) => (
                                <Star
                                  key={i}
                                  className={`w-4 h-4 ${
                                    i < comment.rating
                                      ? 'text-yellow-400 fill-current'
                                      : 'text-gray-300 dark:text-gray-600'
                                  }`}
                                />
                              ))}
                            </div>
                          </div>
                        </div>
                        <span className="text-sm text-gray-500 dark:text-gray-400">{comment.date}</span>
                      </div>
                      <p className="text-gray-700 dark:text-gray-300 mb-3 leading-relaxed">{comment.comment}</p>
                      <div className="flex items-center space-x-4">
                        <button
                          onClick={() => handleLike(comment.id)}
                          className={`flex items-center space-x-2 transition-all duration-200 hover:scale-105 ${
                            likedComments.has(comment.id)
                              ? 'text-red-500'
                              : 'text-gray-500 dark:text-gray-400 hover:text-[#007acc] dark:hover:text-[#00bfa6]'
                          }`}
                        >
                          <Heart className={`w-4 h-4 ${likedComments.has(comment.id) ? 'fill-current' : ''}`} />
                          <span className="text-sm font-medium">{comment.likes}</span>
                        </button>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Contact Info */}
              <Card className="shadow-xl border-0 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-[#005f73] dark:text-[#00bfa6] text-xl">Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button 
                    className="w-full bg-green-600 hover:bg-green-700 text-white shadow-lg hover:shadow-xl transition-all duration-300"
                    onClick={() => window.open(`https://wa.me/91${business.whatsapp}`, '_blank')}
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    WhatsApp: +91 {business.whatsapp}
                  </Button>
                  <Button 
                    variant="outline"
                    className="w-full border-2 border-[#007acc] text-[#007acc] hover:bg-[#007acc] hover:text-white dark:border-[#00bfa6] dark:text-[#00bfa6] dark:hover:bg-[#00bfa6] dark:hover:text-white shadow-lg hover:shadow-xl transition-all duration-300"
                    onClick={() => window.open(`tel:+91${business.mobile}`, '_self')}
                  >
                    Call: +91 {business.mobile}
                  </Button>
                  <Button 
                    variant="outline"
                    className="w-full border-2 border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 shadow-lg hover:shadow-xl transition-all duration-300"
                    onClick={() => navigator.share?.({ 
                      title: business.title, 
                      text: business.description,
                      url: window.location.href 
                    })}
                  >
                    <Share2 className="w-4 h-4 mr-2" />
                    Share Business
                  </Button>
                </CardContent>
              </Card>

              {/* Business Stats */}
              <Card className="shadow-xl border-0 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-[#005f73] dark:text-[#00bfa6] text-xl">Business Stats</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 dark:text-gray-400">Total Reviews:</span>
                    <span className="font-bold text-gray-900 dark:text-white text-lg">{comments.length}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 dark:text-gray-400">Average Rating:</span>
                    <span className="font-bold text-gray-900 dark:text-white text-lg">{averageRating.toFixed(1)}/5</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 dark:text-gray-400">Category:</span>
                    <span className="font-semibold text-sm text-gray-900 dark:text-white">{business.category}</span>
                  </div>
                  {business.verified && (
                    <div className="flex items-center justify-center bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 text-green-700 dark:text-green-400 px-4 py-3 rounded-xl border border-green-200 dark:border-green-800">
                      <span className="text-sm font-bold">✓ Verified Business</span>
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
