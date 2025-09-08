import React from "react";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <div className="relative w-full h-screen bg-cover bg-center" style={{ backgroundImage: "url('/path/to/your-image.jpg')" }}>
      <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
        <div className="text-center text-white px-6 sm:px-12">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Hello, I'm Jaiyash</h1>
          <p className="text-xl sm:text-2xl mb-6">A passionate full-stack developer with expertise in creating responsive and interactive web applications.</p>
          <div className="flex justify-center gap-6">
            <Link to="/projects" className="bg-gradient-to-r from-blue-500 to-teal-500 text-white py-2 px-6 rounded-full hover:bg-gradient-to-l transition duration-300">View Projects</Link>
            <Link to="/contact" className="bg-gradient-to-r from-orange-500 to-yellow-500 text-white py-2 px-6 rounded-full hover:bg-gradient-to-l transition duration-300">Contact Me</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
