
export const businessCategories = [
  {
    id: 'clothes-fashion',
    name: 'Clothes & Fashion',
    icon: '👗',
    count: 45,
    description: 'Traditional & modern clothing, custom tailoring'
  },
  {
    id: 'jewelry',
    name: 'Imitation Jewelry',
    icon: '💎',
    count: 32,
    description: 'Handcrafted jewelry and accessories'
  },
  {
    id: 'snacks-sweets',
    name: 'Homemade Snacks & Sweets',
    icon: '🍰',
    count: 58,
    description: 'Fresh homemade delicacies and treats'
  },
  {
    id: 'tiffin-services',
    name: 'Tiffin / Dabba Services',
    icon: '🍱',
    count: 28,
    description: 'Daily meal delivery services'
  },
  {
    id: 'beauty-skincare',
    name: 'Beauty & Skincare Products',
    icon: '🧴',
    count: 35,
    description: 'Natural beauty and skincare solutions'
  },
  {
    id: 'handicrafts',
    name: 'Handicrafts & Decorative Items',
    icon: '🎨',
    count: 42,
    description: 'Unique handmade crafts and decor'
  },
  {
    id: 'gifts-handmade',
    name: 'Gift & Handmade Items',
    icon: '🎁',
    count: 38,
    description: 'Personalized gifts and handmade items'
  },
  {
    id: 'stationery',
    name: 'Stationery / Printed Items',
    icon: '📝',
    count: 24,
    description: 'Custom printing and stationery'
  },
  {
    id: 'stitching-tailoring',
    name: 'Stitching / Tailoring',
    icon: '✂️',
    count: 33,
    description: 'Professional tailoring services'
  },
  {
    id: 'baby-care',
    name: 'Baby Care Products',
    icon: '👶',
    count: 29,
    description: 'Safe and natural baby products'
  },
  {
    id: 'jobs',
    name: 'Jobs',
    icon: '💼',
    count: 67,
    description: 'Local employment opportunities'
  }
];

export const featuredBusinesses = [
  {
    id: 1,
    title: "Priya's Handmade Jewelry",
    category: "Imitation Jewelry",
    location: "Lathi Road Area",
    description: "Beautiful handcrafted jewelry with traditional designs. Custom orders available for weddings and special occasions.",
    rating: 4.8,
    reviews: 156,
    image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=300&fit=crop",
    whatsapp: "9876543210",
    mobile: "9876543210",
    verified: true,
    featured: true
  },
  {
    id: 2,
    title: "Ravi's Tiffin Service",
    category: "Tiffin / Dabba Services",
    location: "Bhojal Para",
    description: "Fresh, homemade meals delivered daily. Gujarati thali and North Indian options with authentic taste.",
    rating: 4.9,
    reviews: 203,
    image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400&h=300&fit=crop",
    whatsapp: "9876543211",
    mobile: "9876543211",
    verified: true,
    featured: true
  },
  {
    id: 3,
    title: "Meera's Boutique",
    category: "Clothes & Fashion",
    location: "Rajmahel Road Area",
    description: "Custom stitching and designer clothes for women. Traditional and modern wear with perfect fitting.",
    rating: 4.7,
    reviews: 89,
    image: "https://images.unsplash.com/photo-1445205170230-053b83016050?w=400&h=300&fit=crop",
    whatsapp: "9876543212",
    mobile: "9876543212",
    verified: true,
    featured: true
  },
  {
    id: 4,
    title: "Sweet Dreams Bakery",
    category: "Homemade Snacks & Sweets",
    location: "Jesingpara",
    description: "Freshly baked cakes, pastries and traditional sweets. Order for special occasions and festivals.",
    rating: 4.6,
    reviews: 145,
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=300&fit=crop",
    whatsapp: "9876543213",
    mobile: "9876543213",
    verified: true,
    featured: false
  },
  {
    id: 5,
    title: "Natural Glow Skincare",
    category: "Beauty & Skincare Products",
    location: "Tower Area",
    description: "Organic and natural skincare products made with herbal ingredients. Safe for all skin types.",
    rating: 4.5,
    reviews: 78,
    image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=400&h=300&fit=crop",
    whatsapp: "9876543214",
    mobile: "9876543214",
    verified: true,
    featured: false
  },
  {
    id: 6,
    title: "Craftsman's Corner",
    category: "Handicrafts & Decorative Items",
    location: "GIDC Residential Area",
    description: "Unique handicrafts and home decor items. Perfect for gifting and decorating your home with style.",
    rating: 4.4,
    reviews: 92,
    image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=400&h=300&fit=crop",
    whatsapp: "9876543215",
    mobile: "9876543215",
    verified: false,
    featured: false
  }
];

export const businessesByCategory = {
  "Clothes & Fashion": [
    {
      id: 3,
      title: "Meera's Boutique",
      category: "Clothes & Fashion",
      location: "Rajmahel Road Area",
      description: "Custom stitching and designer clothes for women. Traditional and modern wear with perfect fitting.",
      rating: 4.7,
      reviews: 89,
      image: "https://images.unsplash.com/photo-1445205170230-053b83016050?w=400&h=300&fit=crop",
      whatsapp: "9876543212",
      mobile: "9876543212",
      verified: true
    },
    {
      id: 7,
      title: "Fashion Hub Amreli",
      category: "Clothes & Fashion",
      location: "Tower Area",
      description: "Latest fashion trends and traditional wear. Custom alterations and designer collections available.",
      rating: 4.3,
      reviews: 67,
      image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=400&h=300&fit=crop",
      whatsapp: "9876543216",
      mobile: "9876543216",
      verified: true
    }
  ],
  "Imitation Jewelry": [
    {
      id: 1,
      title: "Priya's Handmade Jewelry",
      category: "Imitation Jewelry",
      location: "Lathi Road Area",
      description: "Beautiful handcrafted jewelry with traditional designs. Custom orders available for weddings and special occasions.",
      rating: 4.8,
      reviews: 156,
      image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=300&fit=crop",
      whatsapp: "9876543210",
      mobile: "9876543210",
      verified: true
    }
  ],
  "Tiffin / Dabba Services": [
    {
      id: 2,
      title: "Ravi's Tiffin Service",
      category: "Tiffin / Dabba Services",
      location: "Bhojal Para",
      description: "Fresh, homemade meals delivered daily. Gujarati thali and North Indian options with authentic taste.",
      rating: 4.9,
      reviews: 203,
      image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400&h=300&fit=crop",
      whatsapp: "9876543211",
      mobile: "9876543211",
      verified: true
    }
  ]
};
