import React from 'react';
import { Smartphone, Tv, Monitor, Settings, Shield, Play, CheckCircle } from 'lucide-react';

const Instructions = () => {
  const mobileSteps = [
    {
      icon: <Settings className="h-6 w-6" />,
      title: "Enable Unknown Sources",
      description: "Go to Settings > Security > Unknown Sources and enable it to allow APK installation"
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Download APK",
      description: "Download the Top TBT Music APK file directly to your Android device"
    },
    {
      icon: <Play className="h-6 w-6" />,
      title: "Install & Enjoy",
      description: "Tap the APK file to install and start jamming to throwback hits immediately"
    }
  ];

  const tvSteps = [
    {
      icon: <Settings className="h-6 w-6" />,
      title: "Enable Developer Options",
      description: "Navigate to Settings > Device Options > Developer Options > Apps from Unknown Sources"
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Transfer APK",
      description: "Transfer the APK file to your TV via USB drive or download directly on the device"
    },
    {
      icon: <Play className="h-6 w-6" />,
      title: "Install & Stream",
      description: "Use a file manager to install the APK and enjoy throwback hits on the big screen"
    }
  ];

  const fireSteps = [
    {
      icon: <Settings className="h-6 w-6" />,
      title: "Enable Apps from Unknown Sources",
      description: "Go to Settings > My Fire TV > Developer Options > Apps from Unknown Sources and turn it ON"
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Use Downloader App",
      description: "Install 'Downloader' app from Amazon App Store, then use it to download our APK file"
    },
    {
      icon: <Play className="h-6 w-6" />,
      title: "Install & Vibe",
      description: "Follow the installation prompts and start your throwback music journey on Fire TV"
    }
  ];

  return (
    <section id="install-guide" className="py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-8">
            Installation <span className="text-red-600">Instructions</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Follow these simple steps to install Top TBT Music on your device. 
            Easy setup, instant access to throwback hits.
          </p>
        </div>
        
        <div className="space-y-20">
          {/* Mobile Instructions */}
          <div className="bg-white p-10 rounded-3xl shadow-xl border border-gray-100">
            <div className="flex items-center justify-center space-x-4 mb-10">
              <div className="bg-red-100 p-3 rounded-full">
                <Smartphone className="h-10 w-10 text-red-600" />
              </div>
              <h3 className="text-3xl font-black text-gray-900">Android Mobile & Tablet</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {mobileSteps.map((step, index) => (
                <div key={index} className="text-center group">
                  <div className="bg-red-50 p-6 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center group-hover:bg-red-100 transition-colors">
                    <div className="text-red-600">
                      {step.icon}
                    </div>
                  </div>
                  <div className="bg-red-600 text-white text-sm font-bold px-3 py-1 rounded-full inline-block mb-4">
                    STEP {index + 1}
                  </div>
                  <h4 className="font-bold text-gray-900 mb-3 text-lg">{step.title}</h4>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* TV Instructions */}
          <div className="bg-white p-10 rounded-3xl shadow-xl border border-gray-100">
            <div className="flex items-center justify-center space-x-4 mb-10">
              <div className="bg-red-100 p-3 rounded-full">
                <Tv className="h-10 w-10 text-red-600" />
              </div>
              <h3 className="text-3xl font-black text-gray-900">Android TV</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {tvSteps.map((step, index) => (
                <div key={index} className="text-center group">
                  <div className="bg-red-50 p-6 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center group-hover:bg-red-100 transition-colors">
                    <div className="text-red-600">
                      {step.icon}
                    </div>
                  </div>
                  <div className="bg-red-600 text-white text-sm font-bold px-3 py-1 rounded-full inline-block mb-4">
                    STEP {index + 1}
                  </div>
                  <h4 className="font-bold text-gray-900 mb-3 text-lg">{step.title}</h4>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Fire TV Instructions */}
          <div className="bg-white p-10 rounded-3xl shadow-xl border border-gray-100">
            <div className="flex items-center justify-center space-x-4 mb-10">
              <div className="bg-red-100 p-3 rounded-full">
                <Monitor className="h-10 w-10 text-red-600" />
              </div>
              <h3 className="text-3xl font-black text-gray-900">Amazon Fire TV Stick</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {fireSteps.map((step, index) => (
                <div key={index} className="text-center group">
                  <div className="bg-red-50 p-6 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center group-hover:bg-red-100 transition-colors">
                    <div className="text-red-600">
                      {step.icon}
                    </div>
                  </div>
                  <div className="bg-red-600 text-white text-sm font-bold px-3 py-1 rounded-full inline-block mb-4">
                    STEP {index + 1}
                  </div>
                  <h4 className="font-bold text-gray-900 mb-3 text-lg">{step.title}</h4>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="text-center mt-16">
          <div className="bg-green-50 border border-green-200 rounded-2xl p-8 max-w-2xl mx-auto">
            <CheckCircle className="h-12 w-12 text-green-600 mx-auto mb-4" />
            <h4 className="text-xl font-bold text-green-800 mb-2">Installation Complete!</h4>
            <p className="text-green-700">
              Once installed, open Top TBT Music and start exploring the dopest throwback hits from every era. 
              No account needed - just pure nostalgic vibes!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Instructions;