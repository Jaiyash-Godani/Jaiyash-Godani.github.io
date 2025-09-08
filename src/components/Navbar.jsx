import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 w-[90%] md:w-4/5 lg:w-3/5
                    bg-white/10 backdrop-blur-md rounded-full shadow-lg border border-white/20
                    z-50 p-4 flex justify-between items-center text-white">
      <div className="text-xl font-bold bg-clip-text text-transparent 
                      bg-gradient-to-r from-orange-400 to-yellow-400">
        Jaiyash
      </div>
      <ul className="flex gap-6 text-sm md:text-base">
        <li><Link to="/" className="hover:text-orange-400 transition">Home</Link></li>
        <li><Link to="/about" className="hover:text-orange-400 transition">About</Link></li>
        <li><Link to="/services" className="hover:text-orange-400 transition">Services</Link></li>
        <li><Link to="/projects" className="hover:text-orange-400 transition">Projects</Link></li>
        <li><Link to="/skills" className="hover:text-orange-400 transition">Skills</Link></li>
        <li><Link to="/blogs" className="hover:text-orange-400 transition">Blogs</Link></li>
        <li><Link to="/contact" className="hover:text-orange-400 transition">Contact</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
