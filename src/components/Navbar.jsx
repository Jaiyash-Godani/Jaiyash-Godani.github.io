import { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';

const navItems = [
  { name: 'Home', page: 'home' },
  { name: 'Portfolio', page: 'about' },
  { name: 'Skills', page: 'skills' },
  { name: 'Services', page: 'services' },
  { name: 'Projects', page: 'projects' },
  { name: 'Blogs', page: 'blogs' },
  { name: 'Contact', page: 'contact' },
];

export default function Navbar({ setPage }) {
  return (
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 w-11/12 max-w-6xl backdrop-blur-xl bg-black/40 border border-orange-500 rounded-3xl shadow-glassy z-50 flex items-center justify-between px-6 py-3 transition-all duration-500 hover:scale-105">
      <div className="flex items-center space-x-4">
        <img src="/profile.png" alt="Profile" className="w-12 h-12 rounded-full border-2 border-orange-500 shadow-lg" />
        <h1 className="text-2xl font-bold text-orange-400 drop-shadow-lg">My Portfolio</h1>
      </div>
      <ul className="hidden md:flex space-x-8 font-semibold text-orange-300 uppercase cursor-pointer transition-transform hover:scale-105">
        {navItems.map((item) => (
          <li
            key={item.name}
            onClick={() => setPage(item.page)}
            className="hover:text-orange-500 transition-colors duration-200"
          >
            {item.name}
          </li>
        ))}
      </ul>
      {/* Mobile menu */}
      <Menu as="div" className="relative md:hidden">
        <Menu.Button className="p-2 rounded-full bg-orange-500 hover:bg-orange-600 transition">
          <div className="w-6 h-6 border-2 border-white rounded-full"></div>
        </Menu.Button>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-300"
          enterFrom="opacity-0 translate-y-2"
          enterTo="opacity-100 translate-y-0"
          leave="transition ease-in duration-150"
          leaveFrom="opacity-100 translate-y-0"
          leaveTo="opacity-0 translate-y-2"
        >
          <Menu.Items className="absolute right-0 mt-2 w-48 bg-black/80 backdrop-blur-lg border border-orange-500 rounded-xl shadow-glassy z-50 p-2">
            {navItems.map((item) => (
              <Menu.Item key={item.name}>
                {({ active }) => (
                  <button
                    onClick={() => setPage(item.page)}
                    className={`w-full text-left px-4 py-2 rounded-lg transition ${
                      active ? 'bg-orange-600 text-white' : 'text-orange-200'
                    }`}
                  >
                    {item.name}
                  </button>
                )}
              </Menu.Item>
            ))}
          </Menu.Items>
        </Transition>
      </Menu>
    </nav>
  );
}
