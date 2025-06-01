import React from 'react';
import { BrainCircuit, Scissors, Workflow, ShieldCheck } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <BrainCircuit size={32} className="text-purple-400" />,
      title: "Smart scene & topic detection",
      description: "Computer vision + transcript analysis pick the true peaks, not random timestamps.",
      gradient: "from-purple-500/20 via-purple-500/10 to-transparent"
    },
    {
      icon: <Scissors size={32} className="text-pink-400" />,
      title: "Instant vertical or square framing",
      description: "Keep the action centered; no more manual key-framing.",
      gradient: "from-pink-500/20 via-pink-500/10 to-transparent"
    },
    {
      icon: <Workflow size={32} className="text-purple-400" />,
      title: "Auto-captions & brand-ready templates",
      description: "Add subtitles, your logo, and color palette in one click.",
      gradient: "from-purple-500/20 via-purple-500/10 to-transparent"
    },
    {
      icon: <ShieldCheck size={32} className="text-pink-400" />,
      title: "Cloud speed, local privacy",
      description: "Raw files stay on secure U.S. servers; we never sell your data.",
      gradient: "from-pink-500/20 via-pink-500/10 to-transparent"
    }
  ];

  return (
    <section id="features" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(129,30,159,0.15),transparent_50%)]"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              Effortless Video Transformation
            </span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Our AI-powered platform transforms how creators produce short-form content
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="relative p-8 rounded-2xl border border-white/10 overflow-hidden group hover:shadow-lg hover:shadow-purple-500/5 transition-all duration-300"
            >
              <div className={`absolute top-0 left-0 h-full w-1/2 bg-gradient-to-r ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              <div className="relative z-10">
                <div className="mb-5 inline-flex p-3 rounded-xl bg-gray-800/50">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;