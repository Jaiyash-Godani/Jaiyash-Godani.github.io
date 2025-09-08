
import React from "react";

function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-black/40 backdrop-blur-lg z-50 shadow-md">
      <ul className="flex justify-center space-x-6 py-4 text-white font-semibold">
        {["Home", "About", "Services", "Projects", "Skills", "Blogs", "Contact"].map((item) => (
          <li key={item}>
            <a href={`#${item.toLowerCase()}`} className="hover:text-primary transition">{item}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
export default Navbar;
