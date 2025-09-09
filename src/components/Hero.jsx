import React from 'react';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-20">
      <div className="text-center max-w-4xl mx-auto">
        <div className="animate-fade-in">
          <img 
            src="/profile.png" 
            alt="Jaiyash" 
            className="w-32 h-32 mx-auto rounded-full border-4 border-orange-500 shadow-glow-lg mb-8 animate-float"
          />
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-slide-in">
          <span className="gradient-text">Jaiyash</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-300 mb-8 animate-fade-in delay-200">
          AI Engineer • Web Developer • Chess Enthusiast
        </p>
        
        <div className="flex flex-wrap justify-center gap-4 mb-12 animate-fade-in delay-300">
          <span className="glass px-4 py-2 rounded-full text-orange-400 border border-orange-500/30 hover:shadow-glow transition-all duration-300">
            Machine Learning
          </span>
          <span className="glass px-4 py-2 rounded-full text-orange-400 border border-orange-500/30 hover:shadow-glow transition-all duration-300">
            React Development
          </span>
          <span className="glass px-4 py-2 rounded-full text-orange-400 border border-orange-500/30 hover:shadow-glow transition-all duration-300">
            AI Automation
          </span>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in delay-500">
          <button className="glass-hover px-8 py-3 rounded-full text-white font-semibold hover:scale-105 transition-all duration-300 border border-orange-500/50 hover:shadow-glow">
            View My Work
          </button>
          <button className="bg-gradient-to-r from-orange-500 to-orange-600 px-8 py-3 rounded-full text-black font-semibold hover:scale-105 transition-all duration-300 shadow-glow hover:shadow-glow-lg">
            Get In Touch
          </button>
        </div>
      </div>
    </section>
  );
}
