import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logo from '../assets/transparent_logo.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-3">
            {/* Adjusted logo width and height */}
            <img src={logo} alt="Logo" className="h-12 w-24" />
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-gray-700 hover:text-red-600 transition-colors duration-200 font-medium"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('features')}
              className="text-gray-700 hover:text-red-600 transition-colors duration-200 font-medium"
            >
              Features
            </button>
            <button 
              onClick={() => scrollToSection('download')}
              className="text-gray-700 hover:text-red-600 transition-colors duration-200 font-medium"
            >
              Download
            </button>
            <button 
              onClick={() => scrollToSection('install-guide')}
              className="text-gray-700 hover:text-red-600 transition-colors duration-200 font-medium"
            >
              Install Guide
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <nav className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('home')}
                className="text-left text-gray-700 hover:text-red-600 transition-colors duration-200 font-medium"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('features')}
                className="text-left text-gray-700 hover:text-red-600 transition-colors duration-200 font-medium"
              >
                Features
              </button>
              <button 
                onClick={() => scrollToSection('download')}
                className="text-left text-gray-700 hover:text-red-600 transition-colors duration-200 font-medium"
              >
                Download
              </button>
              <button 
                onClick={() => scrollToSection('install-guide')}
                className="text-left text-gray-700 hover:text-red-600 transition-colors duration-200 font-medium"
              >
                Install Guide
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;