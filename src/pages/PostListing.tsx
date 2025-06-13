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
import { Upload, MapPin, Building, User, Lock, Phone } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const PostListing = () => {
  const { user } = useUser();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    title: '',
    ownerName: '',
    description: '',
    category: '',
    location: '',
    whatsappNumber: '',
    mobileNumber: '',
    images: [] as File[]
  });

  const categories = [
    'Clothes & Fashion',
    'Imitation Jewelry',
    'Homemade Snacks & Sweets',
    'Tiffin / Dabba Services',
    'Beauty & Skincare Products',
    'Handicrafts & Decorative Items',
    'Gift & Handmade Items',
    'Stationery / Printed Items',
    'Stitching / Tailoring',
    'Baby Care Products',
    'Jobs'
  ];

  const areas = [
    'Bhojal Para',
    'Jesingpara',
    'Sankul',
    'Chakkargadh Road Area',
    'Sukhnath Para',
    'Hanumanpara',
    'Lathi Road Area',
    'Rajmahel Road Area',
    'Tower Area',
    'Mukti Dham Area',
    'Kanyashala Road Area',
    'GIDC Residential Area',
    "Dr. Ghanshyam Dhanani's Area",
    'Station Road Area',
    'College Road Area'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    
    // Character limit for description
    if (name === 'description' && value.length > 200) {
      return;
    }
    
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleCategoryChange = (value: string) => {
    setFormData({
      ...formData,
      category: value
    });
  };

  const handleLocationChange = (value: string) => {
    setFormData({
      ...formData,
      location: value
    });
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const files = Array.from(e.target.files);
      const currentImages = formData.images;
      
      // Check if adding new files would exceed 3 images
      if (currentImages.length + files.length > 3) {
        toast({
          title: "Too many images",
          description: "You can upload maximum 3 images.",
          variant: "destructive"
        });
        return;
      }
      
      // Check total file size (2400KB = 2.4MB)
      const totalSize = [...currentImages, ...files].reduce((sum, file) => sum + file.size, 0);
      const maxSize = 2400 * 1024; // 2400KB in bytes
      
      if (totalSize > maxSize) {
        toast({
          title: "Files too large",
          description: "Total size of all images must be under 2400KB.",
          variant: "destructive"
        });
        return;
      }
      
      setFormData({
        ...formData,
        images: [...currentImages, ...files]
      });
    }
  };

  const removeImage = (index: number) => {
    setFormData({
      ...formData,
      images: formData.images.filter((_, i) => i !== index)
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.title || !formData.ownerName || !formData.description || !formData.category || !formData.location || !formData.mobileNumber) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    // Validate mobile number (should be 10 digits)
    if (!/^\d{10}$/.test(formData.mobileNumber)) {
      toast({
        title: "Invalid Mobile Number",
        description: "Mobile number must be 10 digits.",
        variant: "destructive"
      });
      return;
    }

    // Validate WhatsApp number if provided
    if (formData.whatsappNumber && !/^\d{10}$/.test(formData.whatsappNumber)) {
      toast({
        title: "Invalid WhatsApp Number",
        description: "WhatsApp number must be 10 digits.",
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
      ownerName: '',
      description: '',
      category: '',
      location: '',
      whatsappNumber: '',
      mobileNumber: '',
      images: []
    });
  };

  const getTotalImageSize = () => {
    return formData.images.reduce((sum, file) => sum + file.size, 0);
  };

  const formatFileSize = (bytes: number) => {
    return (bytes / 1024).toFixed(1) + 'KB';
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
                      <Label htmlFor="ownerName">Owner Name *</Label>
                      <Input
                        id="ownerName"
                        name="ownerName"
                        value={formData.ownerName}
                        onChange={handleInputChange}
                        placeholder="Enter owner's full name"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="description">
                      Business Description * 
                      <span className="text-sm text-gray-500 ml-2">
                        ({formData.description.length}/200 characters)
                      </span>
                    </Label>
                    <Textarea
                      id="description"
                      name="description"
                      value={formData.description}
                      onChange={handleInputChange}
                      placeholder="Describe your business, services, and what makes it unique... (Max 200 characters)"
                      rows={4}
                      required
                      className={formData.description.length > 180 ? 'border-orange-300' : ''}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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

                    <div className="space-y-2">
                      <Label htmlFor="location" className="flex items-center">
                        <MapPin className="w-4 h-4 mr-1" />
                        Location (Area) *
                      </Label>
                      <Select value={formData.location} onValueChange={handleLocationChange}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select your area" />
                        </SelectTrigger>
                        <SelectContent>
                          {areas.map((area) => (
                            <SelectItem key={area} value={area}>
                              {area}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="mobileNumber" className="flex items-center">
                        <Phone className="w-4 h-4 mr-1" />
                        Mobile Number *
                      </Label>
                      <div className="flex">
                        <div className="flex items-center px-3 bg-gray-100 dark:bg-gray-700 border border-r-0 border-gray-300 dark:border-gray-600 rounded-l-md">
                          <span className="text-gray-600 dark:text-gray-400">+91</span>
                        </div>
                        <Input
                          id="mobileNumber"
                          name="mobileNumber"
                          type="tel"
                          value={formData.mobileNumber}
                          onChange={handleInputChange}
                          placeholder="9876543210"
                          pattern="[0-9]{10}"
                          maxLength={10}
                          className="rounded-l-none"
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="whatsappNumber" className="flex items-center">
                        <Phone className="w-4 h-4 mr-1" />
                        WhatsApp Number (Optional)
                      </Label>
                      <div className="flex">
                        <div className="flex items-center px-3 bg-gray-100 dark:bg-gray-700 border border-r-0 border-gray-300 dark:border-gray-600 rounded-l-md">
                          <span className="text-gray-600 dark:text-gray-400">+91</span>
                        </div>
                        <Input
                          id="whatsappNumber"
                          name="whatsappNumber"
                          type="tel"
                          value={formData.whatsappNumber}
                          onChange={handleInputChange}
                          placeholder="9876543210"
                          pattern="[0-9]{10}"
                          maxLength={10}
                          className="rounded-l-none"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="images" className="flex items-center">
                      <Upload className="w-4 h-4 mr-1" />
                      Business Images (Max 3, Total size under 2400KB)
                    </Label>
                    <Input
                      id="images"
                      type="file"
                      multiple
                      accept="image/*"
                      onChange={handleImageUpload}
                      className="file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                      disabled={formData.images.length >= 3}
                    />
                    
                    {formData.images.length > 0 && (
                      <div className="mt-4">
                        <div className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                          {formData.images.length}/3 images selected 
                          ({formatFileSize(getTotalImageSize())}/2400KB used)
                        </div>
                        <div className="grid grid-cols-3 gap-3">
                          {formData.images.map((file, index) => (
                            <div key={index} className="relative group">
                              <img
                                src={URL.createObjectURL(file)}
                                alt={`Preview ${index + 1}`}
                                className="w-full h-20 object-cover rounded-lg border-2 border-gray-200"
                              />
                              <button
                                type="button"
                                onClick={() => removeImage(index)}
                                className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 text-xs hover:bg-red-600 transition-colors"
                              >
                                ×
                              </button>
                              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-xs p-1 rounded-b-lg">
                                {formatFileSize(file.size)}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                      Posting Guidelines
                    </h3>
                    <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                      <li>• Provide accurate and honest information about your business</li>
                      <li>• Description must be under 200 characters</li>
                      <li>• Upload maximum 3 images with total size under 2400KB</li>
                      <li>• Mobile number is required, WhatsApp number is optional</li>
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