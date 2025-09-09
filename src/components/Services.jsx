import React, { useState, useEffect } from 'react';

export default function Services() {
  const [services, setServices] = useState({});

  useEffect(() => {
    fetch('/services.json')
      .then(response => response.json())
      .then(data => setServices(data))
      .catch(error => console.error('Error loading services:', error));
  }, []);

  return (
    <section id="services" className="py-20 px-4 w-full max-w-6xl mx-auto">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
        <span className="gradient-text">Services I Offer</span>
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {Object.entries(services).map(([key, service], index) => (
          <div 
            key={key}
            className="glass-hover p-6 rounded-2xl shadow-glass hover:scale-105 transition-all duration-500 group animate-fade-in"
            style={{ animationDelay: `${index * 150}ms` }}
          >
            <div className="mb-6">
              <img 
                src={service.previmg} 
                alt={service.name}
                className="w-full h-48 object-cover rounded-xl mb-4 group-hover:opacity-90 transition-opacity duration-300"
              />
              <h3 className="text-xl font-bold text-orange-400 mb-2">
                {service.name}
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed mb-4">
                {service.desc}
              </p>
            </div>
            
            <a 
              href={service.urltoservice}
              target="_blank"
              rel="noopener noreferrer
