import React from 'react';
import { Github, Linkedin, Mail, Globe } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black/50 backdrop-blur-sm border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo & Description */}
          <div>
            <h3 className="text-2xl font-bold mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600">
                CyberPortfolio
              </span>
            </h3>
            <p className="text-gray-400 mb-4">
            Creating innovative solutions in cybersecurity and web development.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Quick links</h4>
            <nav className="space-y-2">
              <a href="#about" className="block text-gray-400 hover:text-pink-500 transition-colors">
                About
              </a>
              <a href="#skills" className="block text-gray-400 hover:text-pink-500 transition-colors">
                Habilidades
              </a>
              <a href="#projects" className="block text-gray-400 hover:text-pink-500 transition-colors">
                Proyects
              </a>
              <a href="#contact" className="block text-gray-400 hover:text-pink-500 transition-colors">
                Contact
              </a>
            </nav>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Connect with me</h4>
            <div className="flex space-x-4">
              <a
                href="#github"
                className="p-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors"
                aria-label="Github"
              >
                <Github className="w-5 h-5 text-gray-400 hover:text-pink-500" />
              </a>
              <a
                href="#linkedin"
                className="p-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5 text-gray-400 hover:text-pink-500" />
              </a>
              <a
                href="#email"
                className="p-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5 text-gray-400 hover:text-pink-500" />
              </a>
              <a
                href="#portfolio"
                className="p-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors"
                aria-label="Portfolio"
              >
                <Globe className="w-5 h-5 text-gray-400 hover:text-pink-500" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>© {new Date().getFullYear()} PanchoDev. All rights reserved.</p>
          <div className="mt-2 text-sm">
            <span className="inline-flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pink-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-pink-500"></span>
              </span>
              Available for new projects
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
