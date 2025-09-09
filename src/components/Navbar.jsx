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
      fixed top-6 left-1/2 transform -translate-x-1/2 z-50
      glass rounded-2xl px-6 py-4 w-fit bg-black/40 backdrop-blur-2xl border border-orange-500/20 animate-float
    ">
      {({ open }) => (
        <>
          <div className="flex items-center justify-between md:justify-center gap-8 w-full max-w-4xl">
            {/* Mobile menu button */}
            <Disclosure.Button className="md:hidden text-white hover:text-orange-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black focus:ring-orange-400">
              <span className="sr-only">Open main menu</span>
              {open ? (
                <XMarkIcon className="block h-8 w-8" aria-hidden="true" />
              ) : (
                <Bars3Icon className="block h-8 w-8" aria-hidden="true" />
              )}
            </Disclosure.Button>

            {/* Desktop nav links */}
            <ul className="hidden md:flex gap-8">
              {navItems.map(item => (
                <li key={item.name}>
                  <NavLink
                    to={item.path}
                    end={item.path === '/'}
                    className={({ isActive }) =>
                      `font-semibold px-4 py-2 rounded-xl transition-all duration-300 hover:text-orange-400 hover:bg-black/30 ${
                        isActive
                          ? 'bg-black text-orange-400 scale-110 shadow-glow'
                          : 'text-white'
                      }`
                    }
                  >
                    {item.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Mobile nav panel */}
          <Disclosure.Panel className="md:hidden mt-4 flex flex-col space-y-2 w-full max-w-xs mx-auto">
            {navItems.map(item => (
              <NavLink
                key={item.name}
                to={item.path}
                end={item.path === '/'}
                className={({ isActive }) =>
                  `block text-center font-semibold px-4 py-2 rounded-xl transition-all duration-300 hover:text-orange-400 hover:bg-black/30 ${
                    isActive
                      ? 'bg-black text-orange-400 scale-110 shadow-glow'
                      : 'text-white'
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
