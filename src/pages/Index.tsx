
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Upload, Phone, MapPin, Camera } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  const [formData, setFormData] = useState({
    businessTitle: '',
    description: '',
    category: '',
    location: '',
    whatsappNumber: '',
    contactNumber: '',
    images: [] as File[]
  });

  const { toast } = useToast();

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

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    const validFiles = files.filter(file => {
      const isValidType = file.type === 'image/jpeg' || file.type === 'image/png';
      const isValidSize = file.size <= 800 * 1024; // 800KB
      return isValidType && isValidSize;
    });

    if (validFiles.length !== files.length) {
      toast({
        title: "Invalid files detected",
        description: "Please upload only JPG/PNG files under 800KB",
        variant: "destructive"
      });
    }

    if (formData.images.length + validFiles.length > 3) {
      toast({
        title: "Too many images",
        description: "You can upload maximum 3 images",
        variant: "destructive"
      });
      return;
    }

    setFormData(prev => ({
      ...prev,
      images: [...prev.images, ...validFiles]
    }));
  };

  const removeImage = (index: number) => {
    setFormData(prev => ({
      ...prev,
      images: prev.images.filter((_, i) => i !== index)
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.businessTitle || !formData.description || !formData.category || !formData.location) {
      toast({
        title: "Please fill required fields",
        description: "Business title, description, category, and location are required",
        variant: "destructive"
      });
      return;
    }

    console.log('Form submitted:', formData);
    toast({
      title: "Listing submitted successfully! 🎉",
      description: "Your business listing will be reviewed and published soon.",
    });

    // Reset form
    setFormData({
      businessTitle: '',
      description: '',
      category: '',
      location: '',
      whatsappNumber: '',
      contactNumber: '',
      images: []
    });
  };

  const wordCount = formData.description.split(' ').filter(word => word.length > 0).length;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-teal-50 py-6 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-[#005f73] mb-2">
            📍 Lokspire
          </h1>
          <p className="text-lg text-gray-600">
            Post Your Home Business in Amreli
          </p>
          <p className="text-sm text-gray-500 mt-1">
            Reach local customers and grow your business
          </p>
        </div>

        {/* Form Card */}
        <Card className="shadow-xl border-0 bg-white/95 backdrop-blur">
          <CardHeader className="bg-gradient-to-r from-[#007acc] to-[#00bfa6] text-white rounded-t-lg">
            <CardTitle className="text-xl font-semibold text-center">
              Create Your Business Listing
            </CardTitle>
          </CardHeader>
          
          <CardContent className="p-6 space-y-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Business Title */}
              <div className="space-y-2">
                <Label htmlFor="businessTitle" className="text-[#005f73] font-medium">
                  Business Title *
                </Label>
                <Input
                  id="businessTitle"
                  placeholder="e.g., Handmade Jewelry by Priya"
                  value={formData.businessTitle}
                  onChange={(e) => setFormData(prev => ({ ...prev, businessTitle: e.target.value }))}
                  className="rounded-xl border-gray-200 focus:border-[#007acc] focus:ring-[#007acc] h-12"
                />
              </div>

              {/* Description */}
              <div className="space-y-2">
                <Label htmlFor="description" className="text-[#005f73] font-medium">
                  Description * 
                  <span className="text-sm text-gray-500 ml-2">
                    ({wordCount}/200 words)
                  </span>
                </Label>
                <Textarea
                  id="description"
                  placeholder="Describe your products or services, quality, pricing, etc..."
                  value={formData.description}
                  onChange={(e) => {
                    const words = e.target.value.split(' ').filter(word => word.length > 0);
                    if (words.length <= 200) {
                      setFormData(prev => ({ ...prev, description: e.target.value }));
                    }
                  }}
                  className="rounded-xl border-gray-200 focus:border-[#007acc] focus:ring-[#007acc] min-h-24 resize-none"
                  rows={4}
                />
              </div>

              {/* Category */}
              <div className="space-y-2">
                <Label className="text-[#005f73] font-medium">
                  Category *
                </Label>
                <Select value={formData.category} onValueChange={(value) => setFormData(prev => ({ ...prev, category: value }))}>
                  <SelectTrigger className="rounded-xl border-gray-200 focus:border-[#007acc] focus:ring-[#007acc] h-12">
                    <SelectValue placeholder="Select your business category" />
                  </SelectTrigger>
                  <SelectContent className="rounded-xl bg-white border-gray-200 shadow-lg">
                    {categories.map((category) => (
                      <SelectItem key={category} value={category} className="hover:bg-[#007acc]/10">
                        {category}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Location */}
              <div className="space-y-2">
                <Label htmlFor="location" className="text-[#005f73] font-medium">
                  <MapPin className="inline w-4 h-4 mr-1" />
                  Location *
                </Label>
                <Input
                  id="location"
                  placeholder="e.g., Lathi Road, Amreli"
                  value={formData.location}
                  onChange={(e) => setFormData(prev => ({ ...prev, location: e.target.value }))}
                  className="rounded-xl border-gray-200 focus:border-[#007acc] focus:ring-[#007acc] h-12"
                />
              </div>

              {/* Contact Numbers */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="whatsapp" className="text-[#005f73] font-medium">
                    <Phone className="inline w-4 h-4 mr-1" />
                    WhatsApp Number
                  </Label>
                  <Input
                    id="whatsapp"
                    placeholder="9876543210"
                    value={formData.whatsappNumber}
                    onChange={(e) => setFormData(prev => ({ ...prev, whatsappNumber: e.target.value }))}
                    className="rounded-xl border-gray-200 focus:border-[#007acc] focus:ring-[#007acc] h-12"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="contact" className="text-[#005f73] font-medium">
                    Contact Number
                  </Label>
                  <Input
                    id="contact"
                    placeholder="9876543210"
                    value={formData.contactNumber}
                    onChange={(e) => setFormData(prev => ({ ...prev, contactNumber: e.target.value }))}
                    className="rounded-xl border-gray-200 focus:border-[#007acc] focus:ring-[#007acc] h-12"
                  />
                </div>
              </div>

              {/* Image Upload */}
              <div className="space-y-3">
                <Label className="text-[#005f73] font-medium">
                  <Camera className="inline w-4 h-4 mr-1" />
                  Upload Images (Optional - Max 3, under 800KB each)
                </Label>
                
                {formData.images.length < 3 && (
                  <div className="border-2 border-dashed border-[#00bfa6] rounded-xl p-6 text-center hover:border-[#007acc] transition-colors">
                    <input
                      type="file"
                      multiple
                      accept="image/jpeg,image/png"
                      onChange={handleImageUpload}
                      className="hidden"
                      id="imageUpload"
                    />
                    <label htmlFor="imageUpload" className="cursor-pointer">
                      <Upload className="w-8 h-8 mx-auto text-[#00bfa6] mb-2" />
                      <p className="text-sm text-gray-600">
                        Click to upload product images
                      </p>
                      <p className="text-xs text-gray-500 mt-1">
                        JPG, PNG (max 800KB each)
                      </p>
                    </label>
                  </div>
                )}

                {/* Preview uploaded images */}
                {formData.images.length > 0 && (
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
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-[#007acc] to-[#00bfa6] hover:from-[#005f73] hover:to-[#007acc] text-white font-semibold py-6 rounded-xl text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]"
              >
                🚀 Post My Listing
              </Button>

              <p className="text-xs text-center text-gray-500 mt-4">
                By posting, you agree to our terms of service. Your listing will be reviewed before going live.
              </p>
            </form>
          </CardContent>
        </Card>

        {/* Footer */}
        <div className="text-center mt-8 text-gray-500 text-sm">
          <p>© 2024 Lokspire - Supporting Local Businesses in Amreli</p>
        </div>
      </div>
    </div>
  );
};

export default Index;
