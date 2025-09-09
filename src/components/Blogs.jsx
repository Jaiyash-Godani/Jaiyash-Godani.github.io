
 
To create a highly polished, dark-themed glass floating navbar alongside dynamically loading content sections in React with Tailwind CSS and Headless UI, I'll provide you with a full project setup including the necessary JSON data formats, deeply styled components with extensive CSS, transitions, animations, and a structured file hierarchy, all ready for deployment on GitHub. The solution will emphasize modern hover effects, smooth animations, shadows, gradients, and interactive cards, fulfilling your requirement of an engaging and visually appealing portfolio.
Complete React Portfolio with Glassmorphism, Transitions, and Dynamic Content
1. File Hierarchy & Setup
text
public/
  index.html
  profile.png
  blogs.json
  projects.json
  skills.json
  services.json

src/
  components/
    Navbar.jsx
    Blogs.jsx
    Projects.jsx
    Skills.jsx
    Services.jsx
    About.jsx
    Contact.jsx
    Hero.jsx
  App.jsx
  index.js
  index.css
tailwind.config.js
package.json
2. package.json with Dependencies
json
{
  "name": "react-glass-portfolio",
  "version": "1.0.0",
  "private": true,
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-scripts": "^5.0.2",
    "tailwindcss": "^3.3.2",
    "autoprefixer": "^10.4.13",
    "postcss": "^8.4.20",
    "@headlessui/react": "^1.7.16"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test"
  }
}
3. Tailwind Configuration (tailwind.config.js)
js
module.exports = {
  content: ["./src/**/*.{js,jsx}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        'glass-black': '#0d0d0f',
        'glass-orange': '#ff6600',
        'glass-gradient': 'linear-gradient(135deg, #141414, #ff6600)',
      },
      boxShadow: {
        'glassy': '0 8px 16px rgba(0,0,0,0.3)',
        'deep': '0 4px 20px rgba(0,0,0,0.5)',
      },
      borderRadius: {
        'full': '9999px',
      },
      fontSize: {
        'xxs': '0.6rem',
      }
    },
  },
  plugins: [],
};
4. index.css with Tailwind base
css
@tailwind base;
@tailwind components;
@tailwind utilities;

body {
  background: linear-gradient(135deg, #141414, #ff6600);
  font-family: 'Inter', sans-serif;
  margin: 0;
  min-height: 100vh;
}
5. index.js Entry Point
jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
6. Main App (App.jsx)
jsx
import { useState } from 'react';
import Navbar from './components/Navbar';
import About from './components/About';
import Blogs from './components/Blogs';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Services from './components/Services';
import Contact from './components/Contact';

function App() {
  const [page, setPage] = useState('home');

  const renderPage = () => {
    switch (page) {
      case 'about': return <About />;
      case 'blogs': return <Blogs />;
      case 'projects': return <Projects />;
      case 'skills': return <Skills />;
      case 'services': return <Services />;
      case 'contact': return <Contact />;
      default: return (
        <>
          <Hero />
        </>
      );
    }
  };

  return (
    <div className="relative min-h-screen flex flex-col bg-gradient-to-br from-black via-gray-900 to-black text-white overflow-x-hidden">
      <Navbar setPage={setPage} />
      <div className="flex-1 pt-20 px-4">{renderPage()}</div>
    </div>
  );
}

export default App;
7. components/Navbar.jsx — Floating Glassmorphism Navbar
jsx
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
8. components/Blogs.jsx
jsx
import { useState, useEffect } from 'react';

export default function Blogs() {
  const [blogs, setBlogs] = useState({});
  const [selectedBlog, setSelectedBlog] = useState(null);

  useEffect(() => {
    fetch('/blogs.json').then(res => res.json()).then(data => setBlogs(data));
  }, []);

  const entries = Object.entries(blogs);

  return (
    <div className="py-12 max-w-7xl mx-auto px-4">
      <h2 className="text-4xl font-extrabold text-orange-400 mb-8">Blogs & Projects</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {entries.map(([key, blog]) => (
          <div
            key={key}
            className="bg-glass-black/70 hover:scale-105 transition-transform rounded-2xl shadow-glassy cursor-pointer p-4"
            onClick={() => setSelectedBlog(blog)}
          >
            <img src={blog.previmg} alt={blog.name} className="h-40 w-full object-cover rounded-lg mb-4 shadow-lg" />
            <h3 className="text-xl font-bold text-orange-300 mb-2">{blog.name}</h3>
            <p className="text-white text-sm">{blog.desc}</p>
          </div>
        ))}
      </div>

      {selectedBlog && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50 p-4 overflow-auto">
          <div className="bg-glass-black/90 p-6 rounded-xl max-w-3xl w-full relative shadow-xl overflow-auto animated-modal transition-all duration-300">
            <button
              onClick={() => setSelectedBlog(null)}
              className="absolute top-4 right-4 text-orange-500 font-bold text-2xl hover:scale-110 transition"
            >
              ✕
            </button>
            <h3 className="text-3xl font-bold mb-4">{selectedBlog.name}</h3>
            <div dangerouslySetInnerHTML={{ __html: selectedBlog.content }} />
          </div>
        </div>
      )}
    </div>
  );
}
