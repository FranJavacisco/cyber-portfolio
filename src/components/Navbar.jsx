import React, { useState, useEffect } from 'react';
import { Shield, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    // Detectar el desplazamiento para cambiar el estado "isScrolled"
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    // Añadir el evento de desplazamiento
    window.addEventListener('scroll', handleScroll);

    // Limpiar el evento al desmontar el componente
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav
      className={`navbar fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/80 backdrop-blur-md py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Shield className="h-8 w-8 text-pink-500" />
            <span className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-blue-500 text-transparent bg-clip-text">
              CyberDev
            </span>
          </div>

          {/* Navegación en escritorio */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-300 hover:text-pink-500 transition-colors duration-300 text-sm uppercase tracking-wider relative group"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-pink-500 to-blue-500 transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
            <button className="px-4 py-2 bg-gradient-to-r from-pink-500 to-blue-500 text-white rounded hover:from-pink-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105">
              Hire Me
            </button>
          </div>

          {/* Botón del menú móvil */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
              className="text-gray-300 hover:text-pink-500 transition-colors duration-300"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Navegación móvil */}
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-black/95 backdrop-blur-lg">
            <div className="px-4 py-4 space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="block text-gray-300 hover:text-pink-500 transition-colors duration-300"
                >
                  {item.name}
                </a>
              ))}
              <button className="w-full px-4 py-2 bg-gradient-to-r from-pink-500 to-blue-500 text-white rounded hover:from-pink-600 hover:to-blue-600 transition-all duration-300">
                Hire Me
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
