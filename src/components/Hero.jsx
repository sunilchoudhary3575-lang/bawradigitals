import React, { useState, useEffect } from 'react';
import slide1 from '../assets/slide1.png';
import slide2 from '../assets/slide2.png';
import slide3 from '../assets/slide3.png';
import slide4 from '../assets/slide4.jpg';
import slide5 from '../assets/slide5.png';

const Hero = () => {
  const slides = [slide1, slide2, slide3, slide4, slide5];
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 2000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const handleScrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="bg-gradient-hero" style={{ padding: '4.5rem 0 6rem 0', overflow: 'hidden', position: 'relative' }}>
      {/* Background Grid Pattern */}
      <div className="grid-overlay" />
      
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '3rem',
          alignItems: 'center',
        }} className="hero-grid">
          
          {/* Left Content */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
            <div className="badge badge-cyan" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 700 }}>
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: 'var(--cyan)', display: 'inline-block' }} />
              IVF Specialization
            </div>
            
            <h1 style={{
              fontSize: 'clamp(2.5rem, 5vw, 3.8rem)',
              lineHeight: 1.15,
              color: 'var(--primary-dark)',
              marginBottom: '1.5rem',
              fontWeight: 800,
              letterSpacing: '-0.03em',
            }}>
              Your IVF Clinic Deserves More <span className="text-gradient-cyan">Serious Patient Enquiries</span>
            </h1>
            
            <p style={{
              fontSize: 'clamp(1.1rem, 2vw, 1.25rem)',
              color: 'var(--primary)',
              fontWeight: 500,
              lineHeight: 1.5,
              marginBottom: '1.25rem',
            }}>
              IVF patients don’t choose a clinic after seeing one random ad. They look for trust, doctor credibility, patient education, reviews, and the right guidance before booking a consultation.
            </p>
            
            <p style={{
              fontSize: '1.05rem',
              color: 'var(--text-muted)',
              lineHeight: 1.6,
              marginBottom: '2.5rem',
              borderLeft: '3px solid var(--cyan)',
              paddingLeft: '1rem',
            }}>
              We help IVF clinics build trust, attract serious couples, and increase patient enquiries through healthcare-focused content, reels, ads, landing pages, and follow-up systems.
            </p>
            
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '1rem',
              width: '100%',
            }} className="hero-ctas">
              <button
                onClick={() => handleScrollTo('contact')}
                className="btn btn-primary"
                style={{ fontSize: '1.05rem', padding: '1rem 2rem', flex: '1 1 auto' }}
              >
                Get Free IVF Growth Audit
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </button>
              
              <button
                onClick={() => handleScrollTo('work')}
                className="btn btn-secondary"
                style={{ fontSize: '1.05rem', padding: '1rem 2rem', flex: '1 1 auto' }}
              >
                See Healthcare Work
              </button>
            </div>
            
            {/* Small trust indicator under buttons */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1.5rem',
              marginTop: '2rem',
              flexWrap: 'wrap',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--cyan)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <span style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--primary)' }}>No generic templates</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--cyan)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <span style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--primary)' }}>100% Doctor-Centric Branding</span>
              </div>
            </div>
          </div>
          
          {/* Right Visual - Full Related Image */}
          <div style={{ display: 'flex', justifyContent: 'center', position: 'relative' }} className="hero-visual-container">
            {/* Soft decorative glow background */}
            <div style={{
              position: 'absolute',
              width: '120%',
              height: '120%',
              background: 'radial-gradient(circle, rgba(14, 165, 233, 0.1) 0%, rgba(255, 154, 0, 0.04) 50%, transparent 100%)',
              top: '-10%',
              left: '-10%',
              zIndex: 0,
              pointerEvents: 'none',
            }} />
            
            {/* Main Visual Photo Card */}
            <div className="animate-float" style={{
              position: 'relative',
              width: '100%',
              maxWidth: '520px',
              height: '420px',
              borderRadius: 'var(--radius-lg)',
              boxShadow: 'var(--shadow-xl)',
              border: '1px solid var(--border)',
              zIndex: 1,
              overflow: 'hidden',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-end',
              padding: '2rem 1.5rem',
            }}>
              {/* Stacked Images for smooth crossfade */}
              {slides.map((slide, idx) => (
                <div
                  key={idx}
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundImage: `linear-gradient(to bottom, rgba(5, 20, 41, 0.1), rgba(5, 20, 41, 0.65)), url(${slide})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    opacity: currentSlide === idx ? 1 : 0,
                    transition: 'opacity 0.8s ease-in-out',
                    zIndex: 0,
                    pointerEvents: 'none'
                  }}
                />
              ))}

              {/* Slider Dots (Indicator) */}
              <div style={{
                position: 'absolute',
                top: '1.25rem',
                right: '1.25rem',
                display: 'flex',
                gap: '0.4rem',
                zIndex: 2,
                backgroundColor: 'rgba(5, 20, 41, 0.6)',
                padding: '0.35rem 0.6rem',
                borderRadius: 'var(--radius-full)',
                backdropFilter: 'blur(4px)',
                border: '1px solid rgba(255, 255, 255, 0.1)'
              }}>
                {slides.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentSlide(idx)}
                    style={{
                      width: '6px',
                      height: '6px',
                      borderRadius: '50%',
                      backgroundColor: currentSlide === idx ? 'var(--cyan)' : 'rgba(255, 255, 255, 0.4)',
                      border: 'none',
                      padding: 0,
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                      transform: currentSlide === idx ? 'scale(1.2)' : 'scale(1)'
                    }}
                  />
                ))}
              </div>

              {/* Overlay Glassmorphism Banner */}
              <div style={{
                backgroundColor: 'rgba(5, 20, 41, 0.85)',
                backdropFilter: 'blur(8px)',
                border: '1px solid rgba(255, 255, 255, 0.15)',
                padding: '1rem 1.25rem',
                borderRadius: 'var(--radius-md)',
                color: 'white',
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                boxShadow: 'var(--shadow-lg)',
                zIndex: 2,
              }}>
                {/* Pulsing indicator */}
                <div style={{
                  width: '10px',
                  height: '10px',
                  borderRadius: '50%',
                  backgroundColor: 'var(--orange)',
                  boxShadow: '0 0 10px var(--orange)',
                  animation: 'pulse 2s infinite',
                  flexShrink: 0,
                }} />
                <div>
                  <div style={{ fontSize: '0.88rem', fontWeight: 800, color: 'white', fontFamily: 'var(--font-display)' }}>
                    Bawra Digitals Campaign
                  </div>
                  <div style={{ fontSize: '0.75rem', color: '#cbd5e1', marginTop: '0.15rem' }}>
                    Attracting High-Intent IVF Enquiries & Patient Trust
                  </div>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>

      <style>{`
        @media (min-width: 992px) {
          .hero-grid {
            grid-template-columns: 1.1fr 0.9fr !important;
          }
        }
        @media (max-width: 576px) {
          .hero-ctas button {
            width: 100%;
          }
        }
        @keyframes pulse {
          0% { transform: scale(0.95); opacity: 0.8; }
          50% { transform: scale(1.05); opacity: 1; }
          100% { transform: scale(0.95); opacity: 0.8; }
        }
      `}</style>
    </section>
  );
};

export default Hero;
