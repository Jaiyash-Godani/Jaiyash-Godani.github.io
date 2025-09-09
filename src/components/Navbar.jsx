import React from 'react';
import { NavLink } from 'react-router-dom';

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Skills', path: '/skills' },
  { name: 'Services', path: '/services' },
  { name: 'Projects', path: '/projects' },
  { name: 'Blogs', path: '/blogs' },
  { name: 'Contact', path: '/contact' },
];

export default function Navbar() {
  return (
    <nav className="
      fixed top-6 left-1/2 transform -translate-x-1/2
      flex items-center justify-center z-50
      glass rounded-2xl
      shadow-glass
      px-8 py-4
      w-fit
      bg-black/40
      backdrop-blur-2xl
      border border-orange-500/20
      animate-float
    ">
      <ul className="flex gap-8">
        {navItems.map(item => (
          <li key={item.name}>
            <NavLink
              to={item.path}
              end={item.path === "/"}
              className={({ isActive }) =>
                `font-semibold px-4 py-2 rounded-xl transition-all duration-300
                 hover:text-orange-400 hover:bg-black/30
                 ${
                   isActive
                     ? "bg-black text-orange-400 scale-110 shadow-glows"
                     : "text-white"
                 }`
              }
            >
              {item.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
