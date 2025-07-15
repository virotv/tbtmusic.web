import React from 'react';
import { Link } from 'react-router-dom';
import { Music, Mail, Heart } from 'lucide-react';
import logo from '../assets/white_logo.png';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#1E1E1E' }} className="text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-3 mb-6 md:mb-0">
             <Link to="/" className="flex items-center space-x-3">
            {/* Adjusted logo width and height */}
            <img src={logo} alt="Logo" className="h-12 w-24" />
          </Link>
            {/* <div className="bg-red-600 rounded-full p-2">
              <Music className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-bold">Top TBT Music</span> */}
          </div>
          
          <div className="flex items-center space-x-6 text-sm">
            <div className="flex items-center space-x-2">
              <Mail className="h-4 w-4 text-red-600" />
              <a href="mailto:tvviro3@gmail.com" className="hover:text-red-600 transition-colors">
                tvviro3@gmail.com
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
            <p>&copy; 2025 Top TBT Music. All rights reserved.</p>
            
            {/* Legal Links */}
            <div className="flex items-center space-x-6 mt-4 md:mt-0">
              <Link 
                to="/privacy" 
                className="hover:text-red-600 transition-colors duration-200"
              >
                Privacy Policy
              </Link>
              <Link 
                to="/terms" 
                className="hover:text-red-600 transition-colors duration-200"
              >
                Terms of Use
              </Link>
            </div>
          </div>
          
          {/* <div className="flex items-center justify-center space-x-2 mt-4 text-sm text-gray-400">
            <span>Made with</span>
            <Heart className="h-4 w-4 text-red-600" />
            <span>for throwback music lovers</span>
          </div> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;