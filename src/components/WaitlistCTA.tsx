import React, { useState } from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';

const WaitlistCTA = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      // In a real application, this would send the email to a server
      console.log('Email submitted:', email);
      setSubmitted(true);
      setEmail('');
    }
  };

  return (
    <section id="waitlist" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-900/20 to-black"></div>
      <div className="absolute top-1/4 -right-20 w-72 h-72 bg-purple-700/20 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-1/4 -left-20 w-80 h-80 bg-pink-700/10 rounded-full filter blur-3xl"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <div className="inline-block px-4 py-1 bg-white/10 backdrop-blur-sm rounded-full text-sm text-purple-300 mb-6">
              Coming Soon
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
                Join the waitlist and be first to clip smarter
              </span>
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              We're finalizing our beta launch. Sign up to be among the first creators to transform how you make short-form content.
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-purple-900/40 via-black/60 to-pink-900/40 p-8 rounded-2xl border border-white/10 backdrop-blur-sm">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="flex-1 bg-black/50 text-white border border-white/20 rounded-lg px-5 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  required
                />
                <button
                  type="submit"
                  className="bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold py-3 px-8 rounded-lg hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <span>Join Waitlist</span>
                  <ArrowRight size={18} />
                </button>
              </form>
            ) : (
              <div className="bg-black/30 rounded-lg p-6 text-center animate-fade-in">
                <CheckCircle size={48} className="text-purple-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">You're on the list!</h3>
                <p className="text-gray-300">
                  We'll notify you when VideoBite AI is ready. Thanks for your interest!
                </p>
              </div>
            )}
            
            <div className="mt-6 text-sm text-gray-400 text-center">
              By joining, you agree to receive updates about VideoBite AI. We respect your privacy and will never sell your data.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WaitlistCTA;