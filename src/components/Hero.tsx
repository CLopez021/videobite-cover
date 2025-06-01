import React from 'react';
import { ScanSearch, Video, Wand2 } from 'lucide-react';

const Hero = () => {
  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-24 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 -left-24 w-72 h-72 bg-purple-700/30 rounded-full filter blur-3xl"></div>
        <div className="absolute top-40 right-0 w-80 h-80 bg-pink-700/20 rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-500 bg-clip-text text-transparent">
              Turn hours of footage into
            </span>
            <br />
            <span className="relative">
              share-worthy moments—
              <span className="relative">
                <span className="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">automatically</span>
                <span className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full"></span>
              </span>
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
            VideoBite AI finds the highlights in long-form video and serves them up as polished, 
            sub-one-minute clips that are ready for TikTok, Reels, Shorts, or your next presentation.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-14">
            <a 
              href="#waitlist" 
              className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-500 rounded-full text-white font-semibold hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300 flex items-center justify-center gap-2"
            >
              <Wand2 size={20} />
              Join the Waitlist
            </a>
            <a 
              href="#features" 
              className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white font-semibold hover:bg-white/20 transition-all duration-300 flex items-center justify-center gap-2"
            >
              <ScanSearch size={20} />
              See How It Works
            </a>
          </div>
          
          <div className="relative w-full max-w-5xl mx-auto rounded-2xl overflow-hidden shadow-2xl shadow-purple-600/10">
            <div className="aspect-w-16 aspect-h-9 bg-gradient-to-br from-purple-900 via-black to-pink-900">
              <div className="absolute inset-0 flex items-center justify-center flex-col gap-4">
                <Video size={80} className="text-white/30" />
                <p className="text-white/50 font-medium">Video Preview Coming Soon</p>
              </div>
              <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;