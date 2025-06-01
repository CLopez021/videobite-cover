import React, { useState, useEffect } from 'react';
import { Video, Scissors } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-black/80 backdrop-blur-md py-3 shadow-lg' 
        : 'bg-transparent py-5'
    }`}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-10 w-10 flex items-center justify-center bg-gradient-to-r from-purple-600 to-pink-500 rounded-xl">
            <Scissors size={24} className="text-white" />
          </div>
          <div className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
            VideoBite AI
          </div>
        </div>
        <nav className="hidden md:flex gap-8 items-center">
          <a href="#features" className="text-sm font-medium hover:text-purple-400 transition-colors">Features</a>
          <a href="#why-creators" className="text-sm font-medium hover:text-purple-400 transition-colors">Why Us</a>
          <a href="#waitlist" className="px-5 py-2 bg-gradient-to-r from-purple-600 to-pink-500 rounded-full text-sm font-medium hover:opacity-90 transition-all shadow-lg shadow-purple-500/20">
            Join Waitlist
          </a>
        </nav>
        <button className="md:hidden text-white">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;