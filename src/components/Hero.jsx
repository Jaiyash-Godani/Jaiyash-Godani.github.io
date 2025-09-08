
import React from "react";

function Hero() {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center">
      <img src="/profile.png" alt="Profile" className="w-32 h-32 rounded-full shadow-lg mb-4"/>
      <h1 className="text-5xl font-bold bg-gradient-to-r from-primary to-orange-400 text-transparent bg-clip-text">
        Hi, I’m Jaiyash
      </h1>
      <p className="mt-4 text-lg text-gray-300">14-year-old AI Developer & Builder 🚀</p>
    </div>
  );
}
export default Hero;
