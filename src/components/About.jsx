import React from 'react';

export default function About() {
  return (
    <section id="about" className="py-20 px-4 w-full max-w-6xl mx-auto flex flex-col md:flex-row gap-12 items-center justify-center">
      <div className="flex-1 space-y-6">
        <div className="glass-hover p-8 rounded-2xl shadow-glass">
          <h3 className="text-2xl font-bold text-orange-400 mb-4">Who I Am</h3>
          <p className="text-gray-300 leading-relaxed">
            I'm Jaiyash, a passionate AI Engineer and Web Developer from Agra, UP. 
            I specialize in creating intelligent solutions that bridge the gap between 
            cutting-edge technology and practical business needs.
          </p>
        </div>
        
        <div className="glass-hover p-8 rounded-2xl shadow-glass">
          <h3 className="text-2xl font-bold text-orange-400 mb-4">What I Do</h3>
          <p className="text-gray-300 leading-relaxed">
            I build AI-powered applications, develop modern web solutions, and create 
            automation tools that help businesses scale efficiently. My expertise spans 
            from machine learning algorithms to full-stack web development.
          </p>
        </div>
      </div>
      
      <div className="flex-1 glass-hover p-8 rounded-2xl shadow-glass">
        <h3 className="text-2xl font-bold text-orange-400 mb-6">My Journey</h3>
        <div className="space-y-4">
          <div className="flex items-center space-x-4">
            <div className="w-4 h-4 bg-orange-500 rounded-full animate-pulse"></div>
            <span className="text-gray-300">Started programming journey</span>
          </div>
          <div className="flex items-center space-x-4">
            <div className="w-4 h-4 bg-orange-500 rounded-full animate-pulse delay-100"></div>
            <span className="text-gray-300">Specialized in AI & Machine Learning</span>
          </div>
          <div className="flex items-center space-x-4">
            <div className="w-4 h-4 bg-orange-500 rounded-full animate-pulse delay-200"></div>
            <span className="text-gray-300">Built successful freelance business</span>
          </div>
          <div className="flex items-center space-x-4">
            <div className="w-4 h-4 bg-orange-500 rounded-full animate-pulse delay-300"></div>
            <span className="text-gray-300">Creating educational content</span>
          </div>
        </div>
      </div>
    </section>
  );
}
