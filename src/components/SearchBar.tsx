
import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Search, MapPin, Tag } from 'lucide-react';
import { featuredBusinesses, businessCategories } from '@/data/businessData';

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
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [focusedIndex, setFocusedIndex] = useState(-1);
  const searchRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  // Generate all possible search suggestions from business data
  const getAllSuggestions = () => {
    const businessNames = featuredBusinesses.map(b => b.title);
    const businessDescriptions = featuredBusinesses.flatMap(b => 
      b.description.split(' ').filter(word => word.length > 3)
    );
    const categoryNames = businessCategories.map(c => c.name);
    const locationNames = areas.filter(area => area !== 'All Areas');
    
    return [...new Set([...businessNames, ...categoryNames, ...locationNames, ...businessDescriptions])];
  };

  const allSuggestions = getAllSuggestions();

  useEffect(() => {
    if (searchTerm.length > 0) {
      const filtered = allSuggestions.filter(suggestion =>
        suggestion.toLowerCase().includes(searchTerm.toLowerCase())
      ).slice(0, 8);
      setSuggestions(filtered);
      setShowSuggestions(true);
      setFocusedIndex(-1);
    } else if (showSuggestions && searchTerm.length === 0) {
      // Show popular suggestions when clicked but no text
      const popularSuggestions = [
        'Jewelry', 'Tiffin Service', 'Clothes', 'Snacks', 'Beauty Products',
        'Handicrafts', 'Tailoring', 'Jobs'
      ];
      setSuggestions(popularSuggestions);
      setShowSuggestions(true);
    } else {
      setSuggestions([]);
      setShowSuggestions(false);
    }
  }, [searchTerm]);

  const handleSearch = () => {
    const params = new URLSearchParams();
    if (searchTerm) params.set('search', searchTerm);
    if (selectedCategory !== 'All Categories') params.set('category', selectedCategory);
    if (selectedArea !== 'All Areas') params.set('area', selectedArea);
    
    navigate(`/listings?${params.toString()}`);
    setShowSuggestions(false);
  };

  const handleSuggestionClick = (suggestion: string) => {
    setSearchTerm(suggestion);
    setShowSuggestions(false);
    searchRef.current?.focus();
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
          setSearchTerm(suggestions[focusedIndex]);
          setShowSuggestions(false);
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
              
              {/* Autocomplete Suggestions */}
              {showSuggestions && suggestions.length > 0 && (
                <div className="absolute top-full left-0 right-0 mt-1 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 rounded-xl shadow-lg z-50 max-h-64 overflow-y-auto">
                  {suggestions.map((suggestion, index) => (
                    <div
                      key={suggestion}
                      className={`px-4 py-3 cursor-pointer transition-colors ${
                        index === focusedIndex
                          ? 'bg-[#007acc]/10 dark:bg-[#00bfa6]/10 text-[#007acc] dark:text-[#00bfa6]'
                          : 'hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300'
                      }`}
                      onClick={() => handleSuggestionClick(suggestion)}
                    >
                      <div className="flex items-center">
                        <Search className="w-4 h-4 mr-3 text-gray-400" />
                        {suggestion}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Category Select */}
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
                <SelectItem value="All Categories" className="text-gray-700 dark:text-gray-300">
                  All Categories
                </SelectItem>
                {businessCategories.map((category) => (
                  <SelectItem key={category.id} value={category.name} className="text-gray-700 dark:text-gray-300">
                    {category.icon} {category.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Area Select */}
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
                {areas.map((area) => (
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
