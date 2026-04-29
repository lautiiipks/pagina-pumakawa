import React, { useState, useEffect } from 'react';
import { Camera, Menu, X } from 'lucide-react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const headerStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: isScrolled ? 'rgba(255, 255, 255, 0.95)' : 'transparent',
    boxShadow: isScrolled ? 'var(--shadow-md)' : 'none',
    backdropFilter: isScrolled ? 'blur(10px)' : 'none',
    transition: 'all 0.3s ease',
    zIndex: 1000,
    padding: '1rem 0'
  };

  const navLinkStyle = {
    color: isScrolled ? 'var(--color-text-main)' : 'rgba(255,255,255,0.9)',
    fontWeight: 500,
    cursor: 'pointer',
    transition: 'color 0.2s',
  };

  const logoStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    fontSize: '1.5rem',
    fontWeight: '800',
    color: isScrolled ? 'var(--color-blue-primary)' : 'white'
  };

  return (
    <header style={headerStyle}>
      <div className="container flex items-center justify-between">
        <a href="#" style={logoStyle}>
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{color: 'var(--color-orange-accent)'}}>
            <path d="M12 2a10 10 0 1 0 10 10H12V2Z"/>
            <path d="M12 12 2.1 7.1"/>
            <path d="M12 12l9.9 4.9"/>
          </svg>
          Pumakawa
        </a>

        {/* Desktop Nav */}
        <nav style={{ display: 'none' }} className="nav-desktop">
          <ul className="flex items-center gap-8">
            <li><a href="#mision" style={navLinkStyle}>Misión</a></li>
            <li><a href="#consejos" style={navLinkStyle}>Consejos</a></li>
            <li>
              <a href="#report-form" className="btn btn-primary" style={{ padding: '0.6rem 1.2rem' }}>
                <Camera size={18} />
                Reportar
              </a>
            </li>
          </ul>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="mobile-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          style={{ 
            background: 'none', 
            border: 'none', 
            color: isScrolled ? 'var(--color-text-main)' : 'white',
            cursor: 'pointer',
            display: 'block' // Will override via internal style
          }}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div style={{
          position: 'absolute',
          top: '100%',
          left: 0,
          right: 0,
          background: 'white',
          padding: '2rem 1.5rem',
          boxShadow: 'var(--shadow-lg)',
          display: 'flex',
          flexDirection: 'column',
          gap: '1.5rem'
        }} className="animate-slide-up">
          <a href="#mision" onClick={() => setMobileMenuOpen(false)} style={{ color: 'var(--color-text-main)', fontWeight: 600, fontSize: '1.1rem' }}>Misión</a>
          <a href="#consejos" onClick={() => setMobileMenuOpen(false)} style={{ color: 'var(--color-text-main)', fontWeight: 600, fontSize: '1.1rem' }}>Consejos</a>
          <a href="#report-form" onClick={() => setMobileMenuOpen(false)} className="btn btn-primary" style={{ justifyContent: 'center' }}>
            <Camera size={20} />
            Hacer un reporte
          </a>
        </div>
      )}

      {/* Basic inline CSS to handle mobile/desktop hiding without complicating index.css too much */}
      <style>{`
        @media (min-width: 768px) {
          .nav-desktop { display: block !important; }
          .mobile-toggle { display: none !important; }
        }
      `}</style>
    </header>
  );
}
