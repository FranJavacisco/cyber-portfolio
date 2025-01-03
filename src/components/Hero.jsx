import React from 'react';
import { Shield, Code, Lock, Terminal } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Background with cyberpunk effect */}
      <div className="absolute inset-0 bg-black">
        <div className="absolute inset-0 bg-gradient-to-r from-pink-500/20 via-purple-500/20 to-blue-500/20 animate-gradient" />
        {/* Dark overlay for better contrast */}
        <div className="absolute inset-0 bg-black opacity-40" />
        <div className="absolute inset-0 bg-[url('/hero.jpg')] opacity-50 bg-cover bg-center" />
        <div
          className="absolute inset-0 bg-grid-white/10"
          style={{
            backgroundImage: `url("background-image.jpg")`,
          }}
        />
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-6 z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-sm md:text-base text-pink-500 uppercase tracking-[0.2em] font-light">
                Cybersecurity Specialist & Developer
              </h2>
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500">
                  Securing
                </span>
                <br />
                <span className="text-white">The Digital Future</span>
              </h1>
              <p className="text-gray-400 text-lg md:text-xl max-w-lg">
                Specializing in secure front-end development and cybersecurity solutions for modern web applications.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <button className="px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white rounded-lg transform transition-all hover:scale-105 hover:shadow-lg shadow-pink-500/25">
                View Projects
              </button>
              <button className="px-8 py-4 border border-pink-500 text-pink-500 rounded-lg hover:bg-pink-500/10 transform transition-all hover:scale-105">
                Contact Me
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 pt-8">
              <div className="text-center">
                <h3 className="text-3xl font-bold text-white">5+</h3>
                <p className="text-gray-400 text-sm">Years Experience</p>
              </div>
              <div className="text-center">
                <h3 className="text-3xl font-bold text-white">50+</h3>
                <p className="text-gray-400 text-sm">Projects Completed</p>
              </div>
              <div className="text-center">
                <h3 className="text-3xl font-bold text-white">100%</h3>
                <p className="text-gray-400 text-sm">Success Rate</p>
              </div>
            </div>
          </div>

          {/* Right side - Visual elements */}
          <div className="hidden md:block relative">
            {/* Animated icons */}
            <div className="absolute inset-0">
              <div className="absolute top-0 left-0 animate-float-slow">
                <Shield className="w-16 h-16 text-pink-500 opacity-80" />
              </div>
              <div className="absolute top-1/4 right-0 animate-float">
                <Code className="w-12 h-12 text-purple-500 opacity-80" />
              </div>
              <div className="absolute bottom-1/4 left-1/4 animate-float-slow">
                <Lock className="w-14 h-14 text-blue-500 opacity-80" />
              </div>
              <div className="absolute bottom-0 right-1/4 animate-float">
                <Terminal className="w-10 h-10 text-pink-500 opacity-80" />
              </div>
            </div>

            {/* Main visual - Hero Image in Circle */}
            <div className="relative w-full aspect-square rounded-full bg-gradient-to-br from-pink-500/20 via-purple-500/20 to-blue-500/20 backdrop-blur-3xl border border-white/10 p-4">
              <div className="absolute inset-0 rounded-full overflow-hidden">
                <img
                  src="hero.jpg"
                  alt="Hero"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 via-purple-500/10 to-blue-500/10" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
