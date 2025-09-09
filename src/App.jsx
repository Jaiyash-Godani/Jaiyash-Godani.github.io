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
