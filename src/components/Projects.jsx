import React, { useState, useEffect } from 'react';

export default function Projects() {
  const [projects, setProjects] = useState({});

  useEffect(() => {
    fetch('/projects.json')
      .then(response => response.json())
      .then(data => setProjects(data))
      .catch(error => console.error('Error loading projects:', error));
  }, []);

  return (
    <section id="projects" className="py-20 px-4 w-full max-w-6xl mx-auto">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
        <span className="gradient-text">Featured Projects</span>
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {Object.entries(projects).map(([key, project], index) => (
          <div 
            key={key}
            className="glass-hover p-6 rounded-2xl shadow-glass hover:scale-105 transition-all duration-500 group animate-fade-in"
            style={{ animationDelay: `${index * 150}ms` }}
          >
            <div className="mb-6">
              <img 
                src={project.previmg} 
                alt={project.name}
                className="w-full h-48 object-cover rounded-xl mb-4 group-hover:opacity-90 transition-opacity duration-300"
              />
              <h3 className="text-xl font-bold text-orange-400 mb-2">
                {project.name}
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed mb-4">
                {project.desc}
              </p>
            </div>
            
            <a 
              href={project.urltosite}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block w-full text-center glass-hover px-6 py-3 rounded-xl text-orange-400 font-semibold border border-orange-500/50 hover:shadow-glow transition-all duration-300"
            >
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
