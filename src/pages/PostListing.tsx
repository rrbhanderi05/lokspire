
import React, { useState } from 'react';
import { SignedIn, SignedOut, SignInButton, useUser } from '@clerk/clerk-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Upload, MapPin, DollarSign, Building, User, Lock } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const PostListing = () => {
  const { user } = useUser();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: '',
    price: '',
    location: '',
    contactInfo: '',
    images: [] as File[]
  });

  const categories = [
    'Restaurants', 'Retail Stores', 'Services', 'Technology', 
    'Healthcare', 'Entertainment', 'Real Estate', 'Automotive',
    'Education', 'Finance', 'Beauty & Wellness', 'Other'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleCategoryChange = (value: string) => {
    setFormData({
      ...formData,
      category: value
    });
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const files = Array.from(e.target.files);
      setFormData({
        ...formData,
        images: [...formData.images, ...files].slice(0, 5) // Limit to 5 images
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.title || !formData.description || !formData.category || !formData.location) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    toast({
      title: "Listing Posted Successfully!",
      description: "Your business listing has been submitted and will be reviewed shortly.",
    });

    // Reset form
    setFormData({
      title: '',
      description: '',
      category: '',
      price: '',
      location: '',
      contactInfo: '',
      images: []
    });
  };

  const SignInPrompt = () => (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navbar />
      <div className="min-h-screen flex items-center justify-center px-4">
        <Card className="w-full max-w-md">
          <CardHeader className="text-center">
            <div className="mx-auto w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mb-4">
              <Lock className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            </div>
            <CardTitle className="text-2xl">Sign In Required</CardTitle>
            <p className="text-gray-600 dark:text-gray-400">
              Please sign in to post your business listing on Lokspire.
            </p>
          </CardHeader>
          <CardContent>
            <SignInButton mode="modal">
              <Button className="w-full bg-gradient-to-r from-[#007acc] to-[#00bfa6] hover:from-[#005f73] hover:to-[#007acc] text-white">
                <User className="w-4 h-4 mr-2" />
                Sign In to Continue
              </Button>
            </SignInButton>
          </CardContent>
        </Card>
      </div>
      <Footer />
    </div>
  );

  return (
    <>
      <SignedOut>
        <SignInPrompt />
      </SignedOut>
      
      <SignedIn>
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
          <Navbar />
          
          <div className="max-w-4xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Post Your Business
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-400">
                Share your business with the Lokspire community
              </p>
              <div className="mt-4 p-4 bg-blue-50 dark:bg-blue-900 rounded-lg">
                <p className="text-sm text-blue-800 dark:text-blue-200">
                  Welcome, {user?.fullName || user?.emailAddresses[0]?.emailAddress}! 
                  Ready to showcase your business?
                </p>
              </div>
            </div>

            <Card className="shadow-xl">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl">
                  <Building className="w-6 h-6 mr-2 text-blue-600" />
                  Business Listing Details
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="title">Business Name *</Label>
                      <Input
                        id="title"
                        name="title"
                        value={formData.title}
                        onChange={handleInputChange}
                        placeholder="Enter your business name"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="category">Category *</Label>
                      <Select value={formData.category} onValueChange={handleCategoryChange}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a category" />
                        </SelectTrigger>
                        <SelectContent>
                          {categories.map((category) => (
                            <SelectItem key={category} value={category}>
                              {category}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="description">Business Description *</Label>
                    <Textarea
                      id="description"
                      name="description"
                      value={formData.description}
                      onChange={handleInputChange}
                      placeholder="Describe your business, services, and what makes it unique..."
                      rows={4}
                      required
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="location" className="flex items-center">
                        <MapPin className="w-4 h-4 mr-1" />
                        Location *
                      </Label>
                      <Input
                        id="location"
                        name="location"
                        value={formData.location}
                        onChange={handleInputChange}
                        placeholder="City, State"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="price" className="flex items-center">
                        <DollarSign className="w-4 h-4 mr-1" />
                        Price Range (Optional)
                      </Label>
                      <Input
                        id="price"
                        name="price"
                        value={formData.price}
                        onChange={handleInputChange}
                        placeholder="e.g., $10-50, $$$"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="contactInfo">Contact Information</Label>
                    <Input
                      id="contactInfo"
                      name="contactInfo"
                      value={formData.contactInfo}
                      onChange={handleInputChange}
                      placeholder="Phone number, email, or website"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="images" className="flex items-center">
                      <Upload className="w-4 h-4 mr-1" />
                      Business Images (Max 5)
                    </Label>
                    <Input
                      id="images"
                      type="file"
                      multiple
                      accept="image/*"
                      onChange={handleImageUpload}
                      className="file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                    />
                    {formData.images.length > 0 && (
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        {formData.images.length} image(s) selected
                      </div>
                    )}
                  </div>

                  <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                      Posting Guidelines
                    </h3>
                    <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                      <li>• Provide accurate and honest information about your business</li>
                      <li>• Use high-quality images that represent your business well</li>
                      <li>• Include relevant keywords in your description for better visibility</li>
                      <li>• All listings are subject to review and approval</li>
                    </ul>
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-gradient-to-r from-[#007acc] to-[#00bfa6] hover:from-[#005f73] hover:to-[#007acc] text-white font-semibold py-3 text-lg shadow-xl hover:shadow-2xl transition-all duration-300"
                  >
                    Post My Business
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
          
          <Footer />
        </div>
      </SignedIn>
    </>
  );
};

export default PostListing;
