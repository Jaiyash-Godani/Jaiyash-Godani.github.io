import React, { useState, useEffect } from "react";

function Hero() {
  const words = ["AI Developer", "Web Developer"];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [typing, setTyping] = useState(true);

  // Typing effect
  useEffect(() => {
    let timeout;
    if (typing) {
      if (displayedText.length < words[currentWordIndex].length) {
        timeout = setTimeout(() => {
          setDisplayedText(words[currentWordIndex].slice(0, displayedText.length + 1));
        }, 100); // typing speed
      } else {
        timeout = setTimeout(() => setTyping(false), 3000); // wait 3 sec before deleting
      }
    } else {
      if (displayedText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayedText(words[currentWordIndex].slice(0, displayedText.length - 1));
        }, 50); // deleting speed
      } else {
        setTyping(true);
        setCurrentWordIndex((currentWordIndex + 1) % words.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayedText, typing, currentWordIndex, words]);

  return (
    <div className="flex flex-col items-center justify-center h-screen text-center px-4">
      {/* Larger profile image */}
      <img
        src="/profile.png"
        alt="Profile"
        className="w-48 h-48 md:w-56 md:h-56 rounded-full shadow-2xl mb-6"
      />
      <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-orange-400 to-yellow-400 text-transparent bg-clip-text">
        Hi, I’m Jaiyash
      </h1>
      <p className="mt-4 text-lg md:text-xl text-gray-300 flex justify-center items-center gap-2">
        14-year-old <span className="text-orange-400">{displayedText}</span> 🚀
      </p>
    </div>
  );
}

export default Hero;
