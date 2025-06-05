
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import CategoryGrid from '@/components/CategoryGrid';
import FeaturedBusinesses from '@/components/FeaturedBusinesses';
import Footer from '@/components/Footer';

const Home = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <CategoryGrid />
      <FeaturedBusinesses />
      <Footer />
    </div>
  );
};

export default Home;
