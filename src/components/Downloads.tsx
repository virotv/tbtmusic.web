import React from 'react';
import { Download, Smartphone, Tv, Monitor, ArrowDown } from 'lucide-react';

const Downloads = () => {
  return (
    <section id="download" style={{ backgroundColor: '#1E1E1E' }} className="py-24 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-32 h-32 border border-white rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 border border-white rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 border border-white rounded-full"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-black mb-8">
            Download <span className="text-red-600">Top TBT Music</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Get the app on your favorite device and start your nostalgic journey today. 
            Compatible with all major Android platforms.
          </p>
          <div className="flex justify-center mt-8">
            <ArrowDown className="h-8 w-8 text-red-600 animate-bounce" />
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="group bg-gray-800 p-10 rounded-3xl border border-gray-700 hover:border-red-600 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl">
            <div className="text-red-600 mb-6 group-hover:scale-110 transition-transform duration-300">
              <Smartphone className="h-16 w-16 mx-auto" />
            </div>
            <h3 className="text-3xl font-bold mb-4 text-center">Android Mobile</h3>
            <p className="text-gray-300 mb-8 text-center leading-relaxed">
              Perfect for smartphones and tablets. Take your throwback hits anywhere you go.
            </p>
            <button className="w-full bg-red-600 text-white py-4 px-6 rounded-2xl font-bold hover:bg-red-700 transition-all duration-300 flex items-center justify-center space-x-3 group-hover:shadow-lg">
              <Download className="h-6 w-6" />
              <span>Download Mobile APK</span>
            </button>
          </div>
          
          <div className="group bg-gray-800 p-10 rounded-3xl border border-gray-700 hover:border-red-600 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl">
            <div className="text-red-600 mb-6 group-hover:scale-110 transition-transform duration-300">
              <Tv className="h-16 w-16 mx-auto" />
            </div>
            <h3 className="text-3xl font-bold mb-4 text-center">Android TV</h3>
            <p className="text-gray-300 mb-8 text-center leading-relaxed">
              Optimized for smart TVs and Android TV boxes. Big screen, bigger vibes.
            </p>
            <a href="https://virotv.b-cdn.net/assets/toptbtmusic/toptbtmusic.apk" target="_blank" rel="noopener noreferrer">
              <button className="w-full bg-red-600 text-white py-4 px-6 rounded-2xl font-bold hover:bg-red-700 transition-all duration-300 flex items-center justify-center space-x-3 group-hover:shadow-lg">
                <Download className="h-6 w-6" />
                <span>Download TV APK</span>
              </button>
            </a>
          </div>
          
          <div className="group bg-gray-800 p-10 rounded-3xl border border-gray-700 hover:border-red-600 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl">
            <div className="text-red-600 mb-6 group-hover:scale-110 transition-transform duration-300">
              <Monitor className="h-16 w-16 mx-auto" />
            </div>
            <h3 className="text-3xl font-bold mb-4 text-center">Fire TV Stick</h3>
            <p className="text-gray-300 mb-8 text-center leading-relaxed">
              Compatible with Amazon Fire TV Stick devices. Stream throwbacks on any TV.
            </p>
            <a href="https://virotv.b-cdn.net/assets/toptbtmusic/toptbtmusic.apk" target="_blank" rel="noopener noreferrer">
              <button className="w-full bg-red-600 text-white py-4 px-6 rounded-2xl font-bold hover:bg-red-700 transition-all duration-300 flex items-center justify-center space-x-3 group-hover:shadow-lg">
                <Download className="h-6 w-6" />
                <span>Download Fire TV APK</span>
              </button>
            </a>
          </div>
        </div>
        
        <div className="text-center mt-16">
          <p className="text-gray-400 text-lg">
            All APK files are safe, tested, and optimized for the best throwback music experience
          </p>
        </div>
      </div>
    </section>
  );
};

export default Downloads;