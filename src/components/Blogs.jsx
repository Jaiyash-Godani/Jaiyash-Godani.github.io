import React, { useState, useEffect } from 'react';
import { XMarkIcon } from '@heroicons/react/24/outline';

export default function Blogs() {
  const [blogs, setBlogs] = useState({});
  const [selectedBlog, setSelectedBlog] = useState(null);

  useEffect(() => {
    fetch('/blogs.json')
      .then(response => response.json())
      .then(data => setBlogs(data))
      .catch(error => console.error('Error loading blogs:', error));
  }, []);

  const openBlog = (blogKey) => {
    setSelectedBlog(blogKey);
    document.body.style.overflow = 'hidden';
  };

  const closeBlog = () => {
    setSelectedBlog(null);
    document.body.style.overflow = 'unset';
  };

  return (
    <section id="blogs" className="py-20 px-4 w-full max-w-6xl mx-auto">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
        <span className="gradient-text">Latest Blogs</span>
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {Object.entries(blogs).map(([key, blog], index) => (
          <div 
            key={key}
            className="glass-hover p-6 rounded-2xl shadow-glass hover:scale-105 transition-all duration-500 group cursor-pointer animate-fade-in"
            style={{ animationDelay: `${index * 150}ms` }}
            onClick={() => openBlog(key)}
          >
            <div className="mb-6">
              <img 
                src={blog.previmg} 
                alt={blog.name}
                className="w-full h-48 object-cover rounded-xl mb-4 group-hover:opacity-90 transition-opacity duration-300"
              />
              <h3 className="text-xl font-bold text-orange-400 mb-2">
                {blog.name}
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed mb-4">
                {blog.desc}
              </p>
            </div>
            
            <div className="text-orange-400 font-semibold group-hover:text-orange-300 transition-colors duration-300">
              Read More →
            </div>
          </div>
        ))}
      </div>

      {/* Blog Modal */}
      {selectedBlog && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="glass max-w-4xl max-h-[90vh] w-full rounded-2xl shadow-glass overflow-hidden">
            <div className="flex justify-between items-center p-6 border-b border-gray-700">
              <h3 className="text-2xl font-bold text-orange-400">
                {blogs[selectedBlog].name}
              </h3>
              <button 
                onClick={closeBlog}
                className="glass-hover p-2 rounded-lg text-gray-400 hover:text-white transition-colors duration-300"
                aria-label="Close blog"
              >
                <XMarkIcon className="h-6 w-6" />
              </button>
            </div>
            <div className="p-6 overflow-y-auto max-h-[calc(90vh-100px)] prose prose-invert prose-orange max-w-none" dangerouslySetInnerHTML={{ __html: blogs[selectedBlog].content }} />
          </div>
        </div>
      )}
    </section>
  );
}
