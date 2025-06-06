
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Upload, X, Phone, Camera, Lock } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';

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
  "Dr. Ghanshyam Dhanani's Area"
];

const PostListing = () => {
  const { user, signInWithGoogle } = useAuth();
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: '',
    location: '',
    mobile: '',
    whatsapp: '',
    images: [] as File[]
  });

  const [dragActive, setDragActive] = useState(false);

  // If user is not signed in, show sign-in requirement
  if (!user) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-teal-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <Navbar />
        
        <div className="py-16 px-4">
          <div className="max-w-md mx-auto">
            <Card className="shadow-2xl border-0 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm">
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-[#007acc] to-[#00bfa6] rounded-full flex items-center justify-center mx-auto mb-6">
                  <Lock className="w-10 h-10 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  Sign In Required
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  Please sign in with your Google account to post your business listing.
                </p>
                <Button 
                  onClick={signInWithGoogle}
                  className="w-full bg-gradient-to-r from-[#007acc] to-[#00bfa6] hover:from-[#005f73] hover:to-[#007acc] text-white py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Sign In with Google
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
        
        <Footer />
      </div>
    );
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleImageUpload = (files: FileList | null) => {
    if (!files) return;
    
    const newImages = Array.from(files).slice(0, 3 - formData.images.length);
    const validImages = newImages.filter((file: File) => {
      const isValid = file.type.startsWith('image/') && file.size <= 800 * 1024;
      return isValid;
    });

    setFormData(prev => ({
      ...prev,
      images: [...prev.images, ...validImages]
    }));
  };

  const removeImage = (index: number) => {
    setFormData(prev => ({
      ...prev,
      images: prev.images.filter((_, i) => i !== index)
    }));
  };

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleImageUpload(e.dataTransfer.files);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Listing submitted successfully! We will review and publish it soon.');
    
    setFormData({
      title: '',
      description: '',
      category: '',
      location: '',
      mobile: '',
      whatsapp: '',
      images: []
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-teal-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <Navbar />
      
      <div className="py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-2xl md:text-4xl font-bold text-[#005f73] dark:text-[#00bfa6] mb-4">
              Post Your Business Listing
            </h1>
            <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Share your home-based business with the Amreli community
            </p>
          </div>

          <Card className="shadow-2xl border-0 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm">
            <CardHeader className="bg-gradient-to-r from-[#007acc] to-[#00bfa6] text-white rounded-t-lg">
              <CardTitle className="text-xl md:text-2xl">Business Information</CardTitle>
            </CardHeader>
            <CardContent className="p-4 md:p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="title" className="text-sm md:text-base font-semibold text-[#005f73] dark:text-[#00bfa6]">
                    Business Title *
                  </Label>
                  <Input
                    id="title"
                    value={formData.title}
                    onChange={(e) => handleInputChange('title', e.target.value)}
                    placeholder="e.g., Priya's Handmade Jewelry"
                    className="mt-2 h-10 md:h-12 rounded-xl border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:border-[#007acc] focus:ring-[#007acc]"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="description" className="text-sm md:text-base font-semibold text-[#005f73] dark:text-[#00bfa6]">
                    Description *
                  </Label>
                  <Textarea
                    id="description"
                    value={formData.description}
                    onChange={(e) => handleInputChange('description', e.target.value)}
                    placeholder="Describe your products or services... (Max 200 characters)"
                    className="mt-2 min-h-24 md:min-h-32 rounded-xl border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:border-[#007acc] focus:ring-[#007acc]"
                    maxLength={200}
                    required
                  />
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                    {formData.description.length}/200 characters
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                  <div>
                    <Label htmlFor="category" className="text-sm md:text-base font-semibold text-[#005f73] dark:text-[#00bfa6]">
                      Category *
                    </Label>
                    <Select value={formData.category} onValueChange={(value) => handleInputChange('category', value)}>
                      <SelectTrigger className="mt-2 h-10 md:h-12 rounded-xl border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:border-[#007acc] focus:ring-[#007acc]">
                        <SelectValue placeholder="Select your business category" />
                      </SelectTrigger>
                      <SelectContent className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-600">
                        {categories.map((category) => (
                          <SelectItem key={category} value={category} className="text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                            {category}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="location" className="text-sm md:text-base font-semibold text-[#005f73] dark:text-[#00bfa6]">
                      Location / Area *
                    </Label>
                    <Select value={formData.location} onValueChange={(value) => handleInputChange('location', value)}>
                      <SelectTrigger className="mt-2 h-10 md:h-12 rounded-xl border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:border-[#007acc] focus:ring-[#007acc]">
                        <SelectValue placeholder="Select your area in Amreli" />
                      </SelectTrigger>
                      <SelectContent className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-600">
                        {areas.map((area) => (
                          <SelectItem key={area} value={area} className="text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                            {area}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <Label htmlFor="mobile" className="text-sm md:text-base font-semibold text-[#005f73] dark:text-[#00bfa6]">
                    Mobile Number *
                  </Label>
                  <div className="relative mt-2">
                    <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500 w-5 h-5" />
                    <Input
                      id="mobile"
                      value={formData.mobile}
                      onChange={(e) => handleInputChange('mobile', e.target.value)}
                      placeholder="9876543210"
                      className="pl-10 h-10 md:h-12 rounded-xl border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:border-[#007acc] focus:ring-[#007acc]"
                      pattern="[0-9]{10}"
                      title="Please enter a valid 10-digit mobile number"
                      required
                    />
                  </div>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                    Enter 10-digit number without +91
                  </p>
                </div>

                <div>
                  <Label htmlFor="whatsapp" className="text-sm md:text-base font-semibold text-[#005f73] dark:text-[#00bfa6]">
                    WhatsApp Number (Optional)
                  </Label>
                  <div className="relative mt-2">
                    <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500 w-5 h-5" />
                    <Input
                      id="whatsapp"
                      value={formData.whatsapp}
                      onChange={(e) => handleInputChange('whatsapp', e.target.value)}
                      placeholder="9876543210"
                      className="pl-10 h-10 md:h-12 rounded-xl border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:border-[#007acc] focus:ring-[#007acc]"
                      pattern="[0-9]{10}"
                      title="Please enter a valid 10-digit mobile number"
                    />
                  </div>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                    Enter 10-digit number without +91 (Leave empty to use mobile number)
                  </p>
                </div>

                <div>
                  <Label className="text-sm md:text-base font-semibold text-[#005f73] dark:text-[#00bfa6]">
                    Upload Images (Optional)
                  </Label>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
                    Upload up to 3 images (JPG/PNG, max 800KB each)
                  </p>
                  
                  <div
                    className={`border-2 border-dashed rounded-xl p-4 md:p-6 text-center transition-colors ${
                      dragActive 
                        ? 'border-[#007acc] bg-blue-50 dark:bg-blue-900/20' 
                        : 'border-gray-300 dark:border-gray-600 hover:border-[#007acc] dark:hover:border-[#00bfa6] bg-gray-50 dark:bg-gray-700/50'
                    }`}
                    onDragEnter={handleDrag}
                    onDragLeave={handleDrag}
                    onDragOver={handleDrag}
                    onDrop={handleDrop}
                  >
                    <Camera className="w-8 md:w-12 h-8 md:h-12 text-gray-400 dark:text-gray-500 mx-auto mb-4" />
                    <p className="text-gray-600 dark:text-gray-300 mb-2 text-sm md:text-base">
                      Drag and drop images here, or click to select
                    </p>
                    <input
                      type="file"
                      multiple
                      accept="image/*"
                      onChange={(e) => handleImageUpload(e.target.files)}
                      className="hidden"
                      id="image-upload"
                    />
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => document.getElementById('image-upload')?.click()}
                      className="border-[#007acc] text-[#007acc] hover:bg-[#007acc] hover:text-white dark:border-[#00bfa6] dark:text-[#00bfa6] dark:hover:bg-[#00bfa6] text-sm md:text-base"
                    >
                      <Upload className="w-4 h-4 mr-2" />
                      Select Images
                    </Button>
                  </div>

                  {formData.images.length > 0 && (
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-4">
                      {formData.images.map((image, index) => (
                        <div key={index} className="relative">
                          <img
                            src={URL.createObjectURL(image)}
                            alt={`Preview ${index + 1}`}
                            className="w-full h-24 md:h-32 object-cover rounded-lg border border-gray-200 dark:border-gray-600"
                          />
                          <Button
                            type="button"
                            variant="destructive"
                            size="icon"
                            className="absolute top-2 right-2 w-6 h-6"
                            onClick={() => removeImage(index)}
                          >
                            <X className="w-3 h-3" />
                          </Button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <div className="pt-4 md:pt-6">
                  <Button
                    type="submit"
                    className="w-full h-12 md:h-14 bg-gradient-to-r from-[#007acc] to-[#00bfa6] hover:from-[#005f73] hover:to-[#007acc] text-white text-base md:text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    Post My Listing
                  </Button>
                  <p className="text-sm text-gray-500 dark:text-gray-400 text-center mt-3">
                    Your listing will be reviewed and published within 24 hours
                  </p>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default PostListing;
