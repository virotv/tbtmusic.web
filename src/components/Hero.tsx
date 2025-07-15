import React from 'react';
import { Play, Smartphone, Tv, Sparkles, Music } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-gray-50 to-red-50 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-red-100 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-red-100 rounded-full opacity-20 animate-pulse delay-1000"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          {/* Logo Animation */}
          <div className="flex justify-center mb-8">
            <div className="relative">
              <div className="bg-red-600 rounded-full p-8 shadow-2xl transform hover:scale-105 transition-transform duration-300">
                <Play className="h-20 w-20 text-white" />
              </div>
              <div className="absolute -top-2 -right-2">
                <Sparkles className="h-8 w-8 text-red-600 animate-bounce" />
              </div>
            </div>
          </div>
          
          {/* Main Heading */}
          <h1 className="text-6xl md:text-8xl font-black text-gray-900 mb-6 leading-tight">
            Top <span className="text-red-600 relative">
              TBT
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-red-600 rounded-full"></div>
            </span> Music
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed font-medium">
            The ultimate destination for lovers of throwback hits that once ruled the charts, 
            the clubs, and our playlists. We bring you only the <span className="text-red-600 font-bold">top, dopest, and most viral songs</span> from the past, 
            handpicked and curated for guaranteed vibes.
          </p>
          
          {/* Description */}
          <p className="text-lg text-gray-700 mb-12 max-w-3xl mx-auto leading-relaxed">
            Whether you're reliving your favorite childhood jams, high school anthems, or classics from just a few years back, 
            Top TBT Music makes it easy to rediscover the timeless sounds that defined generations.
          </p>
          
          {/* Platform Icons */}
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-12 mb-12">
            <div className="flex items-center space-x-3 text-gray-700 bg-white px-6 py-3 rounded-full shadow-md">
              <Smartphone className="h-6 w-6 text-red-600" />
              <span className="text-lg font-medium">Mobile Ready</span>
            </div>
            <div className="flex items-center space-x-3 text-gray-700 bg-white px-6 py-3 rounded-full shadow-md">
              <Tv className="h-6 w-6 text-red-600" />
              <span className="text-lg font-medium">TV Compatible</span>
            </div>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <button 
              onClick={() => scrollToSection('download')}
              className="group bg-red-600 text-white px-10 py-4 rounded-2xl text-lg font-bold hover:bg-red-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <div className="flex items-center justify-center space-x-3">
                <Smartphone className="h-6 w-6 group-hover:animate-bounce" />
                <span>Download for Mobile</span>
              </div>
            </button>
            <button 
              onClick={() => scrollToSection('download')}
              className="group bg-gray-900 text-white px-10 py-4 rounded-2xl text-lg font-bold hover:bg-black transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1" 
              style={{ backgroundColor: '#1E1E1E' }}
            >
              <div className="flex items-center justify-center space-x-3">
                <Tv className="h-6 w-6 group-hover:animate-bounce" />
                <span>Download for TV</span>
              </div>
            </button>
          </div>
          
          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;