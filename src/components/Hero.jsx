import React from "react";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <div className="relative w-full h-screen bg-dark flex items-center justify-center px-4">
      {/* Profile image as main visual */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-8">
        <img
          src="/profile.png"
          alt="Profile"
          className="w-48 h-48 md:w-64 md:h-64 rounded-full shadow-2xl"
        />
        <div className="text-center md:text-left space-y-4">
          <h1 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-orange-400 to-yellow-400 text-transparent bg-clip-text">
            Hi, I’m Jaiyash
          </h1>
          <p className="text-gray-300 text-lg sm:text-xl">
            14-year-old <span className="text-orange-400 font-semibold">AI Developer</span> &{" "}
            <span className="text-orange-400 font-semibold">Web Developer</span> 🚀
          </p>
          <div className="flex justify-center md:justify-start gap-4 mt-4">
            <Link
              to="/projects"
              className="bg-gradient-to-r from-blue-500 to-teal-500 text-white py-2 px-6 rounded-full hover:bg-gradient-to-l transition duration-300"
            >
              View Projects
            </Link>
            <Link
              to="/contact"
              className="bg-gradient-to-r from-orange-500 to-yellow-500 text-white py-2 px-6 rounded-full hover:bg-gradient-to-l transition duration-300"
            >
              Contact Me
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
