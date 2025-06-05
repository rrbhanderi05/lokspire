
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Upload, X, Phone, MapPin, Camera } from 'lucide-react';

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
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <Navbar />
      
      <div className="py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-2xl md:text-4xl font-bold text-[#005f73] mb-4">
              Post Your Business Listing
            </h1>
            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
              Share your home-based business with the Amreli community
            </p>
          </div>

          <Card className="shadow-2xl border-0 bg-white/80 backdrop-blur-sm">
            <CardHeader className="bg-gradient-to-r from-[#007acc] to-[#00bfa6] text-white rounded-t-lg">
              <CardTitle className="text-xl md:text-2xl">Business Information</CardTitle>
            </CardHeader>
            <CardContent className="p-4 md:p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="title" className="text-sm md:text-base font-semibold text-[#005f73]">
                    Business Title *
                  </Label>
                  <Input
                    id="title"
                    value={formData.title}
                    onChange={(e) => handleInputChange('title', e.target.value)}
                    placeholder="e.g., Priya's Handmade Jewelry"
                    className="mt-2 h-10 md:h-12 rounded-xl border-gray-200 focus:border-[#007acc] focus:ring-[#007acc]"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="description" className="text-sm md:text-base font-semibold text-[#005f73]">
                    Description *
                  </Label>
                  <Textarea
                    id="description"
                    value={formData.description}
                    onChange={(e) => handleInputChange('description', e.target.value)}
                    placeholder="Describe your products or services... (Max 200 characters)"
                    className="mt-2 min-h-24 md:min-h-32 rounded-xl border-gray-200 focus:border-[#007acc] focus:ring-[#007acc]"
                    maxLength={200}
                    required
                  />
                  <p className="text-sm text-gray-500 mt-1">
                    {formData.description.length}/200 characters
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                  <div>
                    <Label htmlFor="category" className="text-sm md:text-base font-semibold text-[#005f73]">
                      Category *
                    </Label>
                    <Select value={formData.category} onValueChange={(value) => handleInputChange('category', value)}>
                      <SelectTrigger className="mt-2 h-10 md:h-12 rounded-xl border-gray-200 focus:border-[#007acc] focus:ring-[#007acc]">
                        <SelectValue placeholder="Select your business category" />
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

                  <div>
                    <Label htmlFor="location" className="text-sm md:text-base font-semibold text-[#005f73]">
                      Location / Area *
                    </Label>
                    <Select value={formData.location} onValueChange={(value) => handleInputChange('location', value)}>
                      <SelectTrigger className="mt-2 h-10 md:h-12 rounded-xl border-gray-200 focus:border-[#007acc] focus:ring-[#007acc]">
                        <SelectValue placeholder="Select your area in Amreli" />
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

                <div>
                  <Label htmlFor="mobile" className="text-sm md:text-base font-semibold text-[#005f73]">
                    Mobile Number *
                  </Label>
                  <div className="relative mt-2">
                    <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <Input
                      id="mobile"
                      value={formData.mobile}
                      onChange={(e) => handleInputChange('mobile', e.target.value)}
                      placeholder="9876543210"
                      className="pl-10 h-10 md:h-12 rounded-xl border-gray-200 focus:border-[#007acc] focus:ring-[#007acc]"
                      pattern="[0-9]{10}"
                      title="Please enter a valid 10-digit mobile number"
                      required
                    />
                  </div>
                  <p className="text-sm text-gray-500 mt-1">
                    Enter 10-digit number without +91
                  </p>
                </div>

                <div>
                  <Label htmlFor="whatsapp" className="text-sm md:text-base font-semibold text-[#005f73]">
                    WhatsApp Number (Optional)
                  </Label>
                  <div className="relative mt-2">
                    <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <Input
                      id="whatsapp"
                      value={formData.whatsapp}
                      onChange={(e) => handleInputChange('whatsapp', e.target.value)}
                      placeholder="9876543210"
                      className="pl-10 h-10 md:h-12 rounded-xl border-gray-200 focus:border-[#007acc] focus:ring-[#007acc]"
                      pattern="[0-9]{10}"
                      title="Please enter a valid 10-digit mobile number"
                    />
                  </div>
                  <p className="text-sm text-gray-500 mt-1">
                    Enter 10-digit number without +91 (Leave empty to use mobile number)
                  </p>
                </div>

                <div>
                  <Label className="text-sm md:text-base font-semibold text-[#005f73]">
                    Upload Images (Optional)
                  </Label>
                  <p className="text-sm text-gray-500 mb-3">
                    Upload up to 3 images (JPG/PNG, max 800KB each)
                  </p>
                  
                  <div
                    className={`border-2 border-dashed rounded-xl p-4 md:p-6 text-center transition-colors ${
                      dragActive 
                        ? 'border-[#007acc] bg-blue-50' 
                        : 'border-gray-300 hover:border-[#007acc]'
                    }`}
                    onDragEnter={handleDrag}
                    onDragLeave={handleDrag}
                    onDragOver={handleDrag}
                    onDrop={handleDrop}
                  >
                    <Camera className="w-8 md:w-12 h-8 md:h-12 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-600 mb-2 text-sm md:text-base">
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
                      className="border-[#007acc] text-[#007acc] hover:bg-[#007acc] hover:text-white text-sm md:text-base"
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
                            className="w-full h-24 md:h-32 object-cover rounded-lg border"
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
                  <p className="text-sm text-gray-500 text-center mt-3">
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
