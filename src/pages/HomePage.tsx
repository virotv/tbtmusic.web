import React from 'react';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Downloads from '../components/Downloads';
import Instructions from '../components/Instructions';

const HomePage = () => {
  return (
    <div>
      <Hero />
      <Features />
      <Downloads />
      <Instructions />
    </div>
  );
};

export default HomePage;