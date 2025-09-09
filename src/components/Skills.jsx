import React, { useState, useEffect } from 'react';

export default function Skills() {
  const [skills, setSkills] = useState({});

  useEffect(() => {
    fetch('/skills.json')
      .then(response => response.json())
      .then(data => setSkills(data))
      .catch(error => console.error('Error loading skills:', error));
  }, []);

  return (
    <section id="skills" className="py-20 px-4 w-full max-w-6xl mx-auto">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
        <span className="gradient-text">Skills & Expertise</span>
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {Object.entries(skills).map(([key, skill], index) => (
          <div 
            key={key}
            className="glass-hover p-6 rounded-2xl shadow-glass hover:scale-105 transition-all duration-500 group"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="text-center mb-4">
              <img 
                src={skill.logo} 
                alt={skill.name}
                className="w-16 h-16 mx-auto mb-4 group-hover:animate-bounce"
              />
              <h3 className="text-xl font-bold text-orange-400 mb-2">
                {skill.name}
              </h3>
            </div>
            
            <p className="text-gray-300 text-sm leading-relaxed">
              {skill["desc about what I know in it"]}
            </p>
            
            <div className="mt-4 h-2 bg-gray-700 rounded-full">
              <div className="h-2 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full group-hover:animate-pulse"
                   style={{ width: '85%' }}></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
