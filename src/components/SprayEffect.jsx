import React, { useState, useEffect, useRef, useCallback } from 'react';

const SprayIcon = () => (
  <svg width="40" height="40" viewBox="0 0 100 100" style={{ transform: 'rotate(-45deg)' }}>
    <path
      d="M20 85 L20 35 L80 35 L80 85 Z"
      fill="url(#spray-gradient)"
      stroke="#000"
      strokeWidth="2"
    />
    <path
      d="M25 35 L35 25 L65 25 L75 35 Z"
      fill="#333"
    />
    <rect
      x="45"
      y="15"
      width="10"
      height="10"
      fill="#111"
    />
    <defs>
      <linearGradient id="spray-gradient" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#FF1493" />
        <stop offset="50%" stopColor="#9400D3" />
        <stop offset="100%" stopColor="#4169E1" />
      </linearGradient>
    </defs>
  </svg>
);

const SprayEffect = () => {
  const [position, setPosition] = useState({ x: window.innerWidth/2, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const canvasRef = useRef(null);
  const particles = useRef([]);
  const rafRef = useRef(null);
  const lastScrollY = useRef(0);
  const ticking = useRef(false);

  const createParticles = useCallback((x, y) => {
    const maxParticles = 15;
    const colors = ['#FF1493', '#9400D3', '#4169E1', '#FF00FF'];
    
    for (let i = 0; i < maxParticles; i++) {
      const angle = Math.random() * Math.PI * 2;
      const distance = Math.random() * 30;
      
      particles.current.push({
        x: x + Math.cos(angle) * distance,
        y: y + Math.sin(angle) * distance,
        size: Math.random() * 3 + 1.5,
        color: colors[Math.floor(Math.random() * colors.length)],
        alpha: 1,
        life: 1
      });
    }
  }, []);

  const animate = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.current = particles.current.filter(particle => {
      particle.life *= 0.95;
      
      if (particle.life > 0.1) {
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = `${particle.color}${Math.floor(particle.life * 255).toString(16).padStart(2, '0')}`;
        ctx.fill();
        return true;
      }
      return false;
    });

    rafRef.current = requestAnimationFrame(animate);
  }, []);

  const handleScroll = useCallback(() => {
    if (!ticking.current) {
      requestAnimationFrame(() => {
        const homeSection = document.getElementById('home');
        const contactSection = document.getElementById('contact');
        if (!homeSection || !contactSection) return;

        const scrollY = window.scrollY;
        const heroHeight = homeSection.offsetHeight;
        const contactBottom = contactSection.offsetTop + contactSection.offsetHeight;

        // Mostrar el efecto desde después del Hero hasta el final del Contact
        if (scrollY > heroHeight - 100 && scrollY < contactBottom) {
          setIsVisible(true);
          const newX = Math.sin(scrollY / 500) * (window.innerWidth / 3) + (window.innerWidth / 2);
          const newY = scrollY - heroHeight + 100;
          
          setPosition({ x: newX, y: newY });
          createParticles(newX, newY);
        } else {
          setIsVisible(false);
        }

        lastScrollY.current = scrollY;
        ticking.current = false;
      });

      ticking.current = true;
    }
  }, [createParticles]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Ajustar el canvas al tamaño total del documento
    const updateCanvasSize = () => {
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        const totalHeight = contactSection.offsetTop + contactSection.offsetHeight;
        canvas.width = window.innerWidth;
        canvas.height = Math.max(totalHeight, window.innerHeight);
      }
    };

    updateCanvasSize();
    window.addEventListener('resize', updateCanvasSize);
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    animate();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', updateCanvasSize);
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [animate, handleScroll]);

  return (
    <>
      <canvas
        ref={canvasRef}
        className="fixed inset-0 pointer-events-none"
        style={{ zIndex: 1 }}
      />
      {isVisible && (
        <div 
          className="fixed pointer-events-none transition-transform duration-200"
          style={{ 
            left: `${position.x}px`,
            top: `${position.y}px`,
            transform: 'translate(-50%, -50%)',
            zIndex: 2
          }}
        >
          <SprayIcon />
        </div>
      )}
    </>
  );
};

export default SprayEffect;