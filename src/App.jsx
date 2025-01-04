import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import SprayEffect from './components/SprayEffect';
import './index.css';

const App = () => {
  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      {/* Overlay de ruido */}
      <div className="fixed inset-0 bg-noise opacity-5 pointer-events-none" />
      
      {/* SprayEffect básico */}
      <SprayEffect />

      {/* Contenido principal */}
      <main className="flex-grow">
        <div className="navbar">
          <Navbar />
        </div>

        <section id="home">
          <Hero />
        </section>

        <section id="about">
          <About />
        </section>

        <section id="skills">
          <Skills />
        </section>

        <section id="projects">
          <Projects />
        </section>

        <section id="contact">
          <Contact />
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
