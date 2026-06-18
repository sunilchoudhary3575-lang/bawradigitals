import React, { useState, useEffect } from 'react';
import logoImg from '../assets/logo.png';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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

  const handleScrollTo = (id) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 1000,
        backgroundColor: isScrolled ? 'rgba(255, 255, 255, 0.95)' : 'transparent',
        backdropFilter: isScrolled ? 'blur(12px)' : 'none',
        borderBottom: isScrolled ? '1px solid var(--border)' : '1px solid transparent',
        transition: 'all 0.3s ease',
        padding: isScrolled ? '0.75rem 0' : '1.25rem 0',
      }}
    >
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        {/* Logo */}
        <div 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          style={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }}
        >
          <img 
            src={logoImg} 
            alt="Bawra Digitals Logo" 
            className="navbar-logo"
            style={{ width: 'auto', objectFit: 'contain' }} 
          />
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
                    fontWeight: 500,
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

      {/* CSS styling for responsive navbar */}
      <style>{`
        .navbar-logo {
          height: 34px;
          transition: height 0.3s ease;
        }
        @media (max-width: 768px) {
          .navbar-logo {
            height: 26px;
          }
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
  );
};

export default Navbar;
