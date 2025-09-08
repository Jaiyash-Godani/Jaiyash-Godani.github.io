// src/App.jsx
import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Blogs from "./components/Blogs";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="bg-dark min-h-screen">
      <Navbar />
      <section id="home"><Hero /></section>
      <section id="about"><About /></section>
      <section id="services"><Services /></section>
      <section id="projects"><Projects /></section>
      <section id="skills"><Skills /></section>
      <section id="blogs"><Blogs /></section>
      <section id="contact"><Contact /></section>
    </div>
  );
}
export default App;
