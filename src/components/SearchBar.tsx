import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Search, MapPin, Tag, TrendingUp } from 'lucide-react';
import { featuredBusinesses } from '@/data/businessData';

const businessCategories = [
  'All Categories',
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
  'All Areas',
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

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All Categories');
  const [selectedArea, setSelectedArea] = useState('All Areas');
  const [suggestions, setSuggestions] = useState<any[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [focusedIndex, setFocusedIndex] = useState(-1);
  const [categorySearch, setCategorySearch] = useState('');
  const [areaSearch, setAreaSearch] = useState('');
  const searchRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  // Trending topics
  const trendingTopics = [
    { text: 'Jewelry', type: 'category', icon: '💎' },
    { text: 'Tiffin Service', type: 'category', icon: '🍱' },
    { text: 'Bhojal Para', type: 'area', icon: '📍' },
    { text: 'Homemade Snacks', type: 'category', icon: '🍪' }
  ];

  // Generate comprehensive suggestions
  const generateSuggestions = (term: string) => {
    if (!term || term.length === 0) {
      return trendingTopics.map(topic => ({
        ...topic,
        trending: true
      }));
    }

    const suggestions = [];
    
    // Add businesses
    featuredBusinesses.forEach(business => {
      if (business.title.toLowerCase().includes(term.toLowerCase()) ||
          business.description.toLowerCase().includes(term.toLowerCase())) {
        suggestions.push({
          text: business.title,
          type: 'business',
          icon: business.image,
          id: business.id,
          location: business.location,
          category: business.category
        });
      }
    });

    // Add categories
    businessCategories.forEach(category => {
      if (category !== 'All Categories' && category.toLowerCase().includes(term.toLowerCase())) {
        suggestions.push({
          text: category,
          type: 'category',
          icon: '🏷️'
        });
      }
    });

    // Add areas
    areas.forEach(area => {
      if (area !== 'All Areas' && area.toLowerCase().includes(term.toLowerCase())) {
        suggestions.push({
          text: area,
          type: 'area',
          icon: '📍'
        });
      }
    });

    return suggestions.slice(0, 4);
  };

  useEffect(() => {
    const filtered = generateSuggestions(searchTerm);
    setSuggestions(filtered);
    setShowSuggestions(true);
    setFocusedIndex(-1);
  }, [searchTerm]);

  const handleSearch = () => {
    const params = new URLSearchParams();
    if (searchTerm) params.set('search', searchTerm);
    if (selectedCategory !== 'All Categories') params.set('category', selectedCategory);
    if (selectedArea !== 'All Areas') params.set('area', selectedArea);
    
    navigate(`/listings?${params.toString()}`);
    setShowSuggestions(false);
  };

  const handleSuggestionClick = (suggestion: any) => {
    if (suggestion.type === 'business') {
      navigate(`/business/${suggestion.id}`);
    } else if (suggestion.type === 'category') {
      navigate(`/category/${encodeURIComponent(suggestion.text)}`);
    } else if (suggestion.type === 'area') {
      const params = new URLSearchParams();
      params.set('area', suggestion.text);
      navigate(`/listings?${params.toString()}`);
    }
    setShowSuggestions(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!showSuggestions) return;

    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        setFocusedIndex(prev => 
          prev < suggestions.length - 1 ? prev + 1 : prev
        );
        break;
      case 'ArrowUp':
        e.preventDefault();
        setFocusedIndex(prev => prev > 0 ? prev - 1 : -1);
        break;
      case 'Enter':
        e.preventDefault();
        if (focusedIndex >= 0) {
          handleSuggestionClick(suggestions[focusedIndex]);
        } else {
          handleSearch();
        }
        break;
      case 'Escape':
        setShowSuggestions(false);
        setFocusedIndex(-1);
        break;
    }
  };

  const filteredCategories = businessCategories.filter(category =>
    category.toLowerCase().includes(categorySearch.toLowerCase())
  );

  const filteredAreas = areas.filter(area =>
    area.toLowerCase().includes(areaSearch.toLowerCase())
  );

  return (
    <div className="relative max-w-4xl mx-auto">
      {/* Main Search Container */}
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-6 border border-gray-100 dark:border-gray-700">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-end">
          {/* Search Input */}
          <div className="md:col-span-6 relative">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Search
            </label>
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500 w-5 h-5" />
              <Input
                ref={searchRef}
                placeholder="Search businesses, products, or services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onFocus={() => setShowSuggestions(true)}
                onKeyDown={handleKeyDown}
                className="w-full h-12 pl-12 pr-4 text-base rounded-xl border-gray-200 dark:border-gray-600 focus:border-[#007acc] dark:focus:border-[#00bfa6] focus:ring-[#007acc] dark:focus:ring-[#00bfa6] bg-white dark:bg-gray-700"
              />
              
              {/* Enhanced Autocomplete Suggestions */}
              {showSuggestions && suggestions.length > 0 && (
                <div className="absolute top-full left-0 right-0 mt-1 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 rounded-xl shadow-lg z-50 max-h-80 overflow-y-auto">
                  {searchTerm.length === 0 && (
                    <div className="px-4 py-2 text-sm text-gray-500 dark:text-gray-400 border-b border-gray-100 dark:border-gray-700 flex items-center">
                      <TrendingUp className="w-4 h-4 mr-2" />
                      Trending
                    </div>
                  )}
                  {suggestions.map((suggestion, index) => (
                    <div
                      key={`${suggestion.type}-${suggestion.text}`}
                      className={`px-4 py-3 cursor-pointer transition-colors border-b border-gray-50 dark:border-gray-700 last:border-b-0 ${
                        index === focusedIndex
                          ? 'bg-[#007acc]/10 dark:bg-[#00bfa6]/10 text-[#007acc] dark:text-[#00bfa6]'
                          : 'hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300'
                      }`}
                      onClick={() => handleSuggestionClick(suggestion)}
                    >
                      <div className="flex items-center">
                        {suggestion.type === 'business' ? (
                          <img 
                            src={suggestion.icon} 
                            alt={suggestion.text}
                            className="w-10 h-10 rounded-lg object-cover mr-3"
                          />
                        ) : (
                          <div className="w-10 h-10 flex items-center justify-center mr-3 text-lg">
                            {suggestion.icon}
                          </div>
                        )}
                        <div className="flex-1">
                          <div className="font-medium">{suggestion.text}</div>
                          {suggestion.type === 'business' && (
                            <div className="text-xs text-gray-500 dark:text-gray-400">
                              {suggestion.category} • {suggestion.location}
                            </div>
                          )}
                          {suggestion.trending && (
                            <div className="text-xs text-[#007acc] dark:text-[#00bfa6]">
                              Trending
                            </div>
                          )}
                        </div>
                        <div className="text-xs text-gray-400 dark:text-gray-500 capitalize">
                          {suggestion.type}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Category Select with Search */}
          <div className="md:col-span-3">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Category
            </label>
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="h-12 rounded-xl border-gray-200 dark:border-gray-600 focus:border-[#007acc] dark:focus:border-[#00bfa6] focus:ring-[#007acc] dark:focus:ring-[#00bfa6] bg-white dark:bg-gray-700">
                <div className="flex items-center">
                  <Tag className="w-4 h-4 mr-2 text-gray-400" />
                  <SelectValue placeholder="All Categories" />
                </div>
              </SelectTrigger>
              <SelectContent className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-600 rounded-xl">
                <div className="p-2">
                  <Input
                    placeholder="Search categories..."
                    value={categorySearch}
                    onChange={(e) => setCategorySearch(e.target.value)}
                    className="h-8 text-sm"
                  />
                </div>
                {filteredCategories.map((category) => (
                  <SelectItem key={category} value={category} className="text-gray-700 dark:text-gray-300">
                    {category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Area Select with Search */}
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Area
            </label>
            <Select value={selectedArea} onValueChange={setSelectedArea}>
              <SelectTrigger className="h-12 rounded-xl border-gray-200 dark:border-gray-600 focus:border-[#007acc] dark:focus:border-[#00bfa6] focus:ring-[#007acc] dark:focus:ring-[#00bfa6] bg-white dark:bg-gray-700">
                <div className="flex items-center">
                  <MapPin className="w-4 h-4 mr-2 text-gray-400" />
                  <SelectValue placeholder="All Areas" />
                </div>
              </SelectTrigger>
              <SelectContent className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-600 rounded-xl">
                <div className="p-2">
                  <Input
                    placeholder="Search areas..."
                    value={areaSearch}
                    onChange={(e) => setAreaSearch(e.target.value)}
                    className="h-8 text-sm"
                  />
                </div>
                {filteredAreas.map((area) => (
                  <SelectItem key={area} value={area} className="text-gray-700 dark:text-gray-300">
                    {area}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Search Button */}
          <div className="md:col-span-1">
            <Button 
              onClick={handleSearch}
              className="w-full h-12 bg-gradient-to-r from-[#007acc] to-[#00bfa6] hover:from-[#005f73] hover:to-[#007acc] text-white rounded-xl font-medium shadow-lg transition-all duration-300"
            >
              <Search className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>

      {/* Click outside to close suggestions */}
      {showSuggestions && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setShowSuggestions(false)}
        />
      )}
    </div>
  );
};

export default SearchBar;