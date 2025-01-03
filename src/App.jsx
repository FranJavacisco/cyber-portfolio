import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

// Importa los estilos globales si los tienes
import './styles/globals.css';

const App = () => {
  // Efecto para manejar el smooth scroll
  useEffect(() => {
    // Manejo del scroll suave para los enlaces de navegación
    const handleSmoothScroll = (e) => {
      if (e.target.hash) {
        e.preventDefault();
        const element = document.querySelector(e.target.hash);
        if (element) {
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          });
        }
      }
    };

    // Agregar evento a todos los enlaces internos
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
      link.addEventListener('click', handleSmoothScroll);
    });

    // Cleanup
    return () => {
      links.forEach(link => {
        link.removeEventListener('click', handleSmoothScroll);
      });
    };
  }, []);

  return (
    <div className="bg-black text-white overflow-x-hidden">
      {/* Capa de ruido para efecto cyberpunk */}
      <div className="fixed inset-0 bg-noise opacity-5 pointer-events-none" />
      
      {/* Contenido principal */}
      <main className="relative">
        <Navbar />
        
        {/* Secciones principales */}
        <div className="space-y-20">
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
        </div>

        <Footer />
      </main>
    </div>
  );
};

export default App;
