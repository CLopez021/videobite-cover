import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import WhyCreatorsLoveUs from './components/WhyCreatorsLoveUs';
import WaitlistCTA from './components/WaitlistCTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-black to-black pointer-events-none"></div>
      <div className="relative z-10">
        <Header />
        <main>
          <Hero />
          <Features />
          <WhyCreatorsLoveUs />
          <WaitlistCTA />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;