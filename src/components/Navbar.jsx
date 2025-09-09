import React from 'react';
import { NavLink } from 'react-router-dom';
import { Disclosure } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

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
    <Disclosure as="nav" className="
      fixed top-6 inset-x-0 z-50
      flex justify-center
      px-4
      glass rounded-2xl bg-black/40 backdrop-blur-2xl border border-orange-500/20 shadow-glass animate-float
    ">
      {({ open }) => (
        <div className="w-full max-w-6xl">
          <div className="flex items-center justify-between md:justify-center px-4 py-4">
            {/* Mobile hamburger left */}
            <Disclosure.Button className="md:hidden text-white hover:text-orange-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black focus:ring-orange-400">
              <span className="sr-only">{open ? 'Close menu' : 'Open menu'}</span>
              {open ? (
                <XMarkIcon className="block h-8 w-8" aria-hidden="true" />
              ) : (
                <Bars3Icon className="block h-8 w-8" aria-hidden="true" />
              )}
            </Disclosure.Button>

            {/* Mobile right text */}
            <div className="md:hidden text-orange-400 text-2xl font-bold select-none">
              Jaiyash
            </div>

            {/* Desktop nav centered */}
            <ul className="hidden md:flex gap-8 text-white font-semibold">
              {navItems.map(item => (
                <li key={item.name}>
                  <NavLink
                    to={item.path}
                    end={item.path === '/'}
                    className={({ isActive }) =>
                      `px-4 py-2 rounded-xl transition-all duration-300 hover:text-orange-400 hover:bg-black/30 ${
                        isActive
                          ? 'bg-black text-orange-400 scale-110 shadow-glow'
                          : ''
                      }`
                    }
                  >
                    {item.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Mobile dropdown full width */}
          <Disclosure.Panel className="md:hidden bg-black/30 backdrop-blur-3xl border-t border-orange-500/30 rounded-b-2xl mt-[-8px] px-6 py-6 shadow-glow">
            <ul className="flex flex-col gap-4 text-center font-semibold text-white">
              {navItems.map(item => (
                <li key={item.name}>
                  <NavLink
                    to={item.path}
                    end={item.path === '/'}
                    className={({ isActive }) =>
                      `block px-4 py-3 rounded-xl transition-all duration-300 hover:text-orange-400 hover:bg-black/50 ${
                        isActive ? 'bg-black text-orange-400 shadow-glow scale-105' : ''
                      }`
                    }
                  >
                    {item.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </Disclosure.Panel>
        </div>
      )}
    </Disclosure>
  );
}

