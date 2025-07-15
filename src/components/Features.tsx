import React from 'react';
import { 
  Zap, 
  Sparkles, 
  ListMusic, 
  Calendar, 
  Play, 
  Heart, 
  User, 
  Shield, 
  Star,
  Ban
} from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Viral Hits Only",
      description: "No fillers, just bangers that ruled the charts and defined eras"
    },
    {
      icon: <Sparkles className="h-8 w-8" />,
      title: "Retro-Modern Design",
      description: "Smooth, retro-modern design built for vibes and seamless experience"
    },
    {
      icon: <ListMusic className="h-8 w-8" />,
      title: "Curated Playlists",
      description: "Handpicked playlists of the most iconic throwback tracks"
    },
    {
      icon: <Calendar className="h-8 w-8" />,
      title: "Decade-Based Browsing",
      description: "Browse by decades and discover hits from every era that matters"
    },
    {
      icon: <Play className="h-8 w-8" />,
      title: "Mini Player for TV",
      description: "Mini player while browsing on TV - no need to quit to select another track"
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Add to Favourites",
      description: "Save your favorite throwback hits for instant access anytime"
    },
    {
      icon: <User className="h-8 w-8" />,
      title: "Create Local Playlists",
      description: "Build your own custom playlists of nostalgic bangers"
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "No Account Needed",
      description: "Just tune and bang - no sign-up required, pure music experience"
    },
    {
      icon: <Ban className="h-8 w-8" />,
      title: "No Annoying Ads",
      description: "Ad-free experience - just pure nostalgic vibes without interruption"
    },
    {
      icon: <Star className="h-8 w-8" />,
      title: "Best Tracks Only",
      description: "No bullshit - only the dopest, most viral throwback hits"
    }
  ];

  return (
    <section id="features" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-8">
            Why Choose <span className="text-red-600">Top TBT Music</span>?
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Best of the best tracks only. No bullshit. Just the dopest throwback hits 
            from every generation, curated for your nostalgic journey through time.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="group bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-red-200 transform hover:-translate-y-2"
            >
              <div className="text-red-600 mb-6 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-red-600 transition-colors">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;