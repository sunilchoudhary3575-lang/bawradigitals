import React, { useState, useEffect, useRef } from 'react';
import logoImg from '../assets/logo.png';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const logoRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Magnetic hover effect handler
  useEffect(() => {
    const el = logoRef.current;
    if (!el) return;

    const handleMouseMove = (e) => {
      const rect = el.getBoundingClientRect();
      const x = (e.clientX - rect.left - rect.width / 2) * 0.35;
      const y = (e.clientY - rect.top - rect.height / 2) * 0.35;
      
      const inner = el.querySelector('.logo-wrapper-inner');
      if (inner) {
        inner.style.transition = 'none';
        inner.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      }
    };

    const handleMouseLeave = () => {
      const inner = el.querySelector('.logo-wrapper-inner');
      if (inner) {
        inner.style.transition = 'transform 0.4s cubic-bezier(0.23, 1, 0.32, 1)';
        inner.style.transform = 'translate3d(0, 0, 0)';
      }
    };

    el.addEventListener('mousemove', handleMouseMove);
    el.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      el.removeEventListener('mousemove', handleMouseMove);
      el.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  const handleScrollTo = (id) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header style={{
      position: 'sticky',
      top: 0,
      zIndex: 1000,
      width: '100%',
      pointerEvents: 'none'
    }}>
      {/* Top spacer that shrinks on scroll */}
      <div style={{
        height: isScrolled ? '6px' : '18px',
        transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
      }} />

      <nav
        style={{
          pointerEvents: 'auto',
          backgroundColor: isScrolled ? 'rgba(255, 255, 255, 0.98)' : 'rgba(255, 255, 255, 0.85)',
          backdropFilter: 'blur(12px)',
          border: '1px solid var(--border)',
          transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
          width: '94%',
          maxWidth: '1000px',
          margin: '0 auto',
          borderRadius: 'var(--radius-md)',
          boxShadow: isScrolled ? 'var(--shadow-md)' : 'var(--shadow-lg)',
          padding: isScrolled ? '0.55rem 1.5rem' : '1rem 2.25rem',
        }}
      >
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: 0 }}>
          
          {/* Logo container with magnetic & clip-path reveal hover */}
          <div 
            ref={logoRef}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="logo-container-magnetic"
            style={{
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              position: 'relative',
              padding: '0.25rem',
              overflow: 'visible',
            }}
          >
            <div className="logo-wrapper-inner" style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
              {/* Base Logo */}
              <img 
                src={logoImg} 
                alt="Bawra Digitals Logo" 
                className="navbar-logo logo-base"
                style={{
                  height: isScrolled ? '26px' : '36px',
                  width: 'auto',
                  objectFit: 'contain',
                  display: 'block',
                  transition: 'height 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                }} 
              />
              
              {/* Hover Logo revealed with clip-path transition */}
              <div className="navbar-logo-hover-layer" style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                pointerEvents: 'none',
              }}>
                <img 
                  src={logoImg} 
                  alt="Bawra Digitals Logo Hover" 
                  className="navbar-logo"
                  style={{
                    height: isScrolled ? '26px' : '36px',
                    width: 'auto',
                    objectFit: 'contain',
                    transition: 'height 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                    filter: 'drop-shadow(0 0 6px rgba(14, 165, 233, 0.7)) brightness(1.2)',
                  }} 
                />
              </div>
            </div>
          </div>

          {/* Desktop Menu */}
          <div style={{ display: 'none', gap: '2rem', alignItems: 'center' }} className="desktop-menu-container">
            <ul style={{ display: 'flex', listStyle: 'none', gap: '2rem', margin: 0, padding: 0 }}>
              {['problems', 'solution', 'audit', 'work', 'contact'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item}`}
                    onClick={(e) => {
                      e.preventDefault();
                      handleScrollTo(item);
                    }}
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontWeight: 650,
                      fontSize: '0.95rem',
                      color: 'var(--text-main)',
                      textTransform: 'capitalize',
                    }}
                    onMouseEnter={(e) => e.target.style.color = 'var(--cyan)'}
                    onMouseLeave={(e) => e.target.style.color = 'var(--text-main)'}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
            <button
              onClick={() => handleScrollTo('contact')}
              className="btn btn-primary"
              style={{ padding: '0.5rem 1.25rem', fontSize: '0.9rem' }}
            >
              Free Audit
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            style={{
              display: 'block',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: '0.25rem',
              zIndex: 1001,
            }}
            className="mobile-hamburger"
            aria-label="Toggle Menu"
          >
            <div style={{
              width: '24px',
              height: '2px',
              backgroundColor: 'var(--primary)',
              margin: '5px 0',
              transition: 'all 0.3s ease',
              transform: isMobileMenuOpen ? 'rotate(-45deg) translate(-5px, 5px)' : 'none'
            }} />
            <div style={{
              width: '24px',
              height: '2px',
              backgroundColor: 'var(--primary)',
              margin: '5px 0',
              transition: 'all 0.3s ease',
              opacity: isMobileMenuOpen ? 0 : 1
            }} />
            <div style={{
              width: '24px',
              height: '2px',
              backgroundColor: 'var(--primary)',
              margin: '5px 0',
              transition: 'all 0.3s ease',
              transform: isMobileMenuOpen ? 'rotate(45deg) translate(-5px, -5px)' : 'none'
            }} />
          </button>
        </div>

        {/* Mobile Drawer Menu */}
        <div
          style={{
            position: 'fixed',
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            backgroundColor: 'rgba(11, 26, 48, 0.3)',
            backdropFilter: 'blur(8px)',
            zIndex: 999,
            opacity: isMobileMenuOpen ? 1 : 0,
            pointerEvents: isMobileMenuOpen ? 'auto' : 'none',
            transition: 'opacity 0.3s ease',
          }}
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <div
            style={{
              position: 'absolute',
              top: 0,
              right: 0,
              width: '280px',
              height: '100vh',
              backgroundColor: 'var(--bg-main)',
              boxShadow: 'var(--shadow-xl)',
              padding: '5rem 2rem 2rem 2rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '2rem',
              transform: isMobileMenuOpen ? 'translateX(0)' : 'translateX(100%)',
              transition: 'transform 0.3s ease',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', listStyle: 'none', margin: 0, padding: 0 }}>
              {['problems', 'solution', 'audit', 'work', 'contact'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item}`}
                    onClick={(e) => {
                      e.preventDefault();
                      handleScrollTo(item);
                    }}
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontWeight: 600,
                      fontSize: '1.15rem',
                      color: 'var(--text-dark)',
                      textTransform: 'capitalize',
                    }}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
            <button
              onClick={() => handleScrollTo('contact')}
              className="btn btn-primary"
              style={{ width: '100%', marginTop: '1rem' }}
            >
              Free Audit
            </button>
          </div>
        </div>

        {/* CSS styles for transitions & animations */}
        <style>{`
          .navbar-logo-hover-layer {
            clip-path: polygon(0 0, 0 0, 0 100%, 0% 100%);
            transition: clip-path 0.5s cubic-bezier(0.23, 1, 0.32, 1);
          }
          .logo-container-magnetic:hover .navbar-logo-hover-layer {
            clip-path: polygon(100% 0, 0 0, 0 100%, 100% 100%);
          }
          @media (min-width: 769px) {
            .desktop-menu-container {
              display: flex !important;
            }
            .mobile-hamburger {
              display: none !important;
            }
          }
        `}</style>
      </nav>
    </header>
  );
};

export default Navbar;
