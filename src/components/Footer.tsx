import React from 'react';
import { Instagram, Twitter, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-12 relative">
      <div className="container mx-auto px-6 relative z-10">
        <div className="pb-8 border-b border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 flex items-center justify-center bg-gradient-to-r from-purple-600 to-pink-500 rounded-lg">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                  <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"></path>
                  <circle cx="12" cy="13" r="3"></circle>
                </svg>
              </div>
              <div className="text-lg font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                VideoBite AI
              </div>
            </div>
            
            <nav className="flex gap-8">
              <a href="#features" className="text-sm text-gray-400 hover:text-purple-400 transition-colors">Features</a>
              <a href="#why-creators" className="text-sm text-gray-400 hover:text-purple-400 transition-colors">Why Us</a>
              <a href="#waitlist" className="text-sm text-gray-400 hover:text-purple-400 transition-colors">Join Waitlist</a>
            </nav>
            
            <div className="flex gap-4">
              <a href="#" className="h-10 w-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-purple-600/30 transition-colors">
                <Twitter size={18} className="text-white" />
              </a>
              <a href="#" className="h-10 w-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-purple-600/30 transition-colors">
                <Instagram size={18} className="text-white" />
              </a>
              <a href="#" className="h-10 w-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-purple-600/30 transition-colors">
                <Linkedin size={18} className="text-white" />
              </a>
              <a href="#" className="h-10 w-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-purple-600/30 transition-colors">
                <Mail size={18} className="text-white" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <div>
            © {new Date().getFullYear()} VideoBite AI. All rights reserved.
          </div>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-purple-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-purple-400 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;