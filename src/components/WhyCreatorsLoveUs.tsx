import React from 'react';
import { MessageSquareText, Zap, Palette, Clock } from 'lucide-react';

const WhyCreatorsLoveUs = () => {
  const benefits = [
    {
      icon: <MessageSquareText className="h-6 w-6 text-purple-400" />,
      title: "Smart Content Detection",
      description: "Our AI recognizes key moments, dialog, and visual highlights automatically."
    },
    {
      icon: <Zap className="h-6 w-6 text-pink-400" />,
      title: "Lightning Fast Processing",
      description: "Turn hours of footage into ready-to-share clips in minutes, not hours."
    },
    {
      icon: <Palette className="h-6 w-6 text-purple-400" />,
      title: "Brand-Consistent Output",
      description: "Apply your visual identity to every clip with customizable templates."
    },
    {
      icon: <Clock className="h-6 w-6 text-pink-400" />,
      title: "Save Hours Every Week",
      description: "Reclaim your creative time by automating the tedious parts of video editing."
    }
  ];

  return (
    <section id="why-creators" className="py-20 relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(159,30,99,0.15),transparent_60%)]"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              Why Creators Love Us
            </span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Designed for content creators who want professional results without the professional workload
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-800/30 to-pink-800/30 rounded-xl transform group-hover:scale-[1.02] transition-all duration-300 opacity-0 group-hover:opacity-100"></div>
              <div className="relative bg-gray-900/50 backdrop-blur-sm border border-white/10 p-6 rounded-xl hover:shadow-lg hover:shadow-purple-500/10 transition-all duration-300">
                <div className="p-3 bg-gray-800/80 rounded-lg inline-flex mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
                <p className="text-gray-400">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm text-gray-300">
            <span className="mr-2 inline-flex h-2 w-2 rounded-full bg-purple-500"></span>
            Join hundreds of creators already on our private beta waitlist
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyCreatorsLoveUs;