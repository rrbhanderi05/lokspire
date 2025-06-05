
import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { ArrowLeft, MapPin, Phone, Star, Send, ThumbsUp, MessageCircle, Share2 } from 'lucide-react';
import { featuredBusinesses } from '@/data/businessData';

const BusinessPost = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [newComment, setNewComment] = useState('');
  const [userRating, setUserRating] = useState(0);
  const [comments, setComments] = useState([
    {
      id: 1,
      user: "Anjali Patel",
      rating: 5,
      comment: "Amazing service! Highly recommended. The quality is excellent and delivery was on time.",
      date: "2024-01-15",
      likes: 8
    },
    {
      id: 2,
      user: "Raj Shah",
      rating: 4,
      comment: "Good quality products. Will order again soon. Customer service is also very responsive.",
      date: "2024-01-10",
      likes: 5
    },
    {
      id: 3,
      user: "Priya Mehta",
      rating: 5,
      comment: "Excellent work! Very professional and timely delivery. Exceeded my expectations.",
      date: "2024-01-08",
      likes: 12
    }
  ]);

  const business = featuredBusinesses.find(b => b.id === parseInt(id || ''));

  if (!business) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <div className="py-12 px-4 text-center">
          <h1 className="text-2xl font-bold text-gray-600 mb-4">Business not found</h1>
          <Link to="/listings">
            <Button>Back to Listings</Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const handleAddComment = () => {
    if (newComment.trim() && userRating > 0) {
      const comment = {
        id: comments.length + 1,
        user: "You",
        rating: userRating,
        comment: newComment,
        date: new Date().toISOString().split('T')[0],
        likes: 0
      };
      setComments([comment, ...comments]);
      setNewComment('');
      setUserRating(0);
    }
  };

  const handleLike = (commentId: number) => {
    setComments(comments.map(comment => 
      comment.id === commentId 
        ? { ...comment, likes: comment.likes + 1 }
        : comment
    ));
  };

  const averageRating = comments.reduce((sum, comment) => sum + comment.rating, 0) / comments.length;

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="py-8 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Back Button */}
          <Button
            variant="ghost"
            onClick={() => navigate(-1)}
            className="mb-6 hover:bg-gray-100"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back
          </Button>

          {/* Business Header */}
          <Card className="mb-8 overflow-hidden shadow-lg">
            <div className="relative h-64 md:h-80">
              <img 
                src={business.image} 
                alt={business.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-30" />
              <div className="absolute bottom-6 left-6 text-white">
                <h1 className="text-3xl md:text-4xl font-bold mb-2">{business.title}</h1>
                <div className="flex items-center mb-2">
                  <MapPin className="w-5 h-5 mr-2" />
                  <span className="text-lg">{business.location}</span>
                </div>
                <div className="inline-block bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm">
                  {business.category}
                </div>
              </div>
              <div className="absolute top-6 right-6 bg-white rounded-lg px-3 py-2 flex items-center shadow-lg">
                <Star className="w-5 h-5 text-yellow-400 mr-1 fill-current" />
                <span className="font-semibold text-lg">{averageRating.toFixed(1)}</span>
                <span className="text-gray-600 ml-1">({comments.length})</span>
              </div>
            </div>
          </Card>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-6">
              {/* Description */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-[#005f73]">About</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 leading-relaxed">{business.description}</p>
                </CardContent>
              </Card>

              {/* Add Review */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-[#005f73]">Write a Review</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Your Rating</label>
                    <div className="flex space-x-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          key={star}
                          onClick={() => setUserRating(star)}
                          className="focus:outline-none"
                        >
                          <Star 
                            className={`w-6 h-6 ${
                              star <= userRating 
                                ? 'text-yellow-400 fill-current' 
                                : 'text-gray-300'
                            }`}
                          />
                        </button>
                      ))}
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Your Comment</label>
                    <Textarea
                      value={newComment}
                      onChange={(e) => setNewComment(e.target.value)}
                      placeholder="Share your experience..."
                      className="min-h-[100px]"
                    />
                  </div>
                  <Button 
                    onClick={handleAddComment}
                    disabled={!newComment.trim() || userRating === 0}
                    className="bg-[#007acc] hover:bg-[#005f73]"
                  >
                    <Send className="w-4 h-4 mr-2" />
                    Post Review
                  </Button>
                </CardContent>
              </Card>

              {/* Reviews */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-[#005f73] flex items-center">
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Reviews ({comments.length})
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {comments.map((comment) => (
                    <div key={comment.id} className="border-b border-gray-200 pb-4 last:border-b-0">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center space-x-2">
                          <div className="w-8 h-8 bg-[#007acc] text-white rounded-full flex items-center justify-center text-sm font-semibold">
                            {comment.user.charAt(0)}
                          </div>
                          <span className="font-medium">{comment.user}</span>
                          <div className="flex items-center">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`w-4 h-4 ${
                                  i < comment.rating
                                    ? 'text-yellow-400 fill-current'
                                    : 'text-gray-300'
                                }`}
                              />
                            ))}
                          </div>
                        </div>
                        <span className="text-sm text-gray-500">{comment.date}</span>
                      </div>
                      <p className="text-gray-700 mb-2">{comment.comment}</p>
                      <div className="flex items-center space-x-4">
                        <button
                          onClick={() => handleLike(comment.id)}
                          className="flex items-center space-x-1 text-gray-500 hover:text-[#007acc] transition-colors"
                        >
                          <ThumbsUp className="w-4 h-4" />
                          <span className="text-sm">{comment.likes}</span>
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
              <Card>
                <CardHeader>
                  <CardTitle className="text-[#005f73]">Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button 
                    className="w-full bg-green-600 hover:bg-green-700 text-white"
                    onClick={() => window.open(`https://wa.me/91${business.whatsapp}`, '_blank')}
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    WhatsApp: +91 {business.whatsapp}
                  </Button>
                  <Button 
                    variant="outline"
                    className="w-full border-[#007acc] text-[#007acc] hover:bg-[#007acc] hover:text-white"
                    onClick={() => window.open(`tel:+91${business.mobile}`, '_self')}
                  >
                    Call: +91 {business.mobile}
                  </Button>
                  <Button 
                    variant="outline"
                    className="w-full"
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
              <Card>
                <CardHeader>
                  <CardTitle className="text-[#005f73]">Business Stats</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Total Reviews:</span>
                    <span className="font-semibold">{comments.length}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Average Rating:</span>
                    <span className="font-semibold">{averageRating.toFixed(1)}/5</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Category:</span>
                    <span className="font-semibold text-sm">{business.category}</span>
                  </div>
                  {business.verified && (
                    <div className="flex items-center justify-center bg-green-50 text-green-700 px-3 py-2 rounded-lg">
                      <span className="text-sm font-medium">✓ Verified Business</span>
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
