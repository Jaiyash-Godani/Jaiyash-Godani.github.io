import React, { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here (e.g., send email or API call)
    console.log('Form submitted:', formData);
    alert('Message sent! Thank you.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 px-4 w-full max-w-4xl mx-auto">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
        <span className="gradient-text">Get In Touch</span>
      </h2>
      
      <div className="grid md:grid-cols-2 gap-12">
        <div className="space-y-6">
          <div className="glass-hover p-6 rounded-2xl shadow-glass">
            <h3 className="text-xl font-bold text-orange-400 mb-4">Let's Connect</h3>
            <p className="text-gray-300 leading-relaxed">
              I'm always interested in hearing about new opportunities and exciting projects. Let's discuss how we can work together!
            </p>
            <div className="flex space-x-6 mt-6">
              <a href="https://github.com/Jaiyash-Godani" target="_blank" rel="noopener noreferrer" className="text-orange-500 hover:text-orange-400 transition-colors duration-300">
                GitHub
              </a>
              <a href="https://x.com/Jaiyash_Prog" target="_blank" rel="noopener noreferrer" className="text-orange-500 hover:text-orange-400 transition-colors duration-300">
                X
              </a>
              <a href="https://www.fiverr.com/s/R76PEoL" target="_blank" rel="noopener noreferrer" className="text-orange-500 hover:text-orange-400 transition-colors duration-300">
                Fiverr
              </a>
            </div>
          </div>
          
          <div className="glass-hover p-6 rounded-2xl shadow-glass">
            <h3 className="text-xl font-bold text-orange-400 mb-4">Quick Response</h3>
            <p className="text-gray-300 leading-relaxed">
              I typically respond to messages within 24 hours. For urgent projects, feel free to mention it in your message.
            </p>
          </div>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full glass-hover p-4 rounded-xl bg-transparent border border-gray-600 text-white placeholder-gray-400 focus:border-orange-500 focus:outline-none transition-all duration-300"
              required
            />
          </div>
          
          <div>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full glass-hover p-4 rounded-xl bg-transparent border border-gray-600 text-white placeholder-gray-400 focus:border-orange-500 focus:outline-none transition-all duration-300"
              required
            />
          </div>
          
          <div>
            <textarea
              name="message"
              placeholder="Your Message"
              rows="6"
              value={formData.message}
              onChange={handleChange}
              className="w-full glass-hover p-4 rounded-xl bg-transparent border border-gray-600 text-white placeholder-gray-400 focus:border-orange-500 focus:outline-none transition-all duration-300"
              required
            ></textarea>
          </div>
          
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-orange-500 to-orange-600 px-8 py-4 rounded-xl text-black font-semibold hover:scale-105 transition-all duration-300 shadow-glow hover:shadow-glow-lg"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
