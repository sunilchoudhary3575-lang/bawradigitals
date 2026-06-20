import React, { useState, useEffect } from 'react';
import slide1 from '../assets/slide1.png';
import slide2 from '../assets/slide2.png';
import slide3 from '../assets/slide3.png';
import slide4 from '../assets/slide4.jpg';
import slide5 from '../assets/slide5.png';

const Hero = () => {
  const slides = [slide1, slide2, slide3, slide4, slide5];
  const [currentSlide, setCurrentSlide] = useState(0);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 2800);
    return () => clearInterval(timer);
  }, [slides.length]);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Scroll parallax calculations
  const tiltX = Math.max(0, 12 - scrollY * 0.04);
  const scaleVal = Math.min(1.08, 0.98 + scrollY * 0.0004);
  const translateYVal = scrollY * 0.035;

  return (
    <section className="bg-gradient-hero" style={{ padding: '7.5rem 0 8.5rem 0', overflow: 'hidden', position: 'relative' }}>
      {/* Background Grid Pattern */}
      <div className="grid-overlay" />
      
      {/* Parallax Radial Glow Circle behind text */}
      <div style={{
        position: 'absolute',
        width: '80%',
        height: '700px',
        background: 'radial-gradient(circle at 50% 50%, rgba(14, 165, 233, 0.15) 0%, rgba(255, 154, 0, 0.04) 50%, transparent 80%)',
        top: '-15%',
        left: '10%',
        zIndex: 0,
        pointerEvents: 'none',
        transform: `translate3d(0, ${scrollY * 0.25}px, 0)`,
        transition: 'transform 0.1s ease-out',
      }} />

      {/* Floating Sparkles & Medical Cross Parallax elements */}
      <div style={{
        position: 'absolute',
        left: '10%',
        top: '25%',
        color: 'rgba(14, 165, 233, 0.15)',
        transform: `translate3d(0, ${scrollY * 0.18}px, 0) rotate(${scrollY * 0.04}deg)`,
        transition: 'transform 0.1s ease-out',
        pointerEvents: 'none',
        zIndex: 0,
      }} className="floating-element-desktop">
        <svg width="46" height="46" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          <line x1="12" y1="5" x2="12" y2="19"></line>
          <line x1="5" y1="12" x2="19" y2="12"></line>
        </svg>
      </div>

      <div style={{
        position: 'absolute',
        right: '12%',
        top: '32%',
        color: 'rgba(255, 154, 0, 0.15)',
        transform: `translate3d(0, ${scrollY * 0.28}px, 0) rotate(${scrollY * -0.06}deg)`,
        transition: 'transform 0.1s ease-out',
        pointerEvents: 'none',
        zIndex: 0,
      }} className="floating-element-desktop">
        <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          <path d="M12 2v20M2 12h20M5.88 5.88l12.24 12.24M5.88 18.12L18.12 5.88" />
        </svg>
      </div>

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          maxWidth: '860px',
          margin: '0 auto',
        }}>
          
          {/* Centered Premium Metric Badge */}
          <div className="badge badge-cyan" style={{ 
            display: 'inline-flex', 
            alignItems: 'center', 
            gap: '0.6rem', 
            fontWeight: 700, 
            margin: '0 auto 2rem auto',
            border: '1px solid rgba(14, 165, 233, 0.18)',
            background: 'linear-gradient(135deg, rgba(14, 165, 233, 0.06) 0%, rgba(0, 53, 128, 0.03) 100%)',
            padding: '0.5rem 1.25rem',
            borderRadius: 'var(--radius-full)',
            fontSize: 'clamp(0.72rem, 1.8vw, 0.84rem)',
            letterSpacing: '0.06em',
            textTransform: 'uppercase',
            color: 'var(--cyan)',
            boxShadow: '0 4px 12px rgba(14, 165, 233, 0.04)',
          }}>
            <span style={{
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              backgroundColor: 'var(--cyan)',
              display: 'inline-block',
              boxShadow: '0 0 8px var(--cyan)',
              animation: 'pulse 1.8s infinite'
            }} />
            50+ Healthcare Brands
            <span style={{ color: 'rgba(14, 165, 233, 0.25)', fontWeight: 300 }}>|</span>
            100% Fertility Focus
            <span style={{ color: 'rgba(14, 165, 233, 0.25)', fontWeight: 300 }}>|</span>
            Trust-First Marketing
          </div>
          
          {/* Headline with custom gradient and animated path underline */}
          <h1 style={{
            fontSize: 'clamp(2.3rem, 5.2vw, 3.9rem)',
            lineHeight: 1.12,
            color: 'var(--text-dark)',
            marginBottom: '1.75rem',
            fontWeight: 800,
            letterSpacing: '-0.035em',
            maxWidth: '820px',
          }}>
            Your IVF Clinic Deserves More <br className="br-desktop" style={{ display: 'none' }} />
            <span style={{ position: 'relative', display: 'inline-block', marginTop: '0.2rem' }}>
              <span className="text-gradient-cyan-teal">Serious Patient Enquiries</span>
              <svg 
                viewBox="0 0 300 12" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
                style={{
                  position: 'absolute',
                  bottom: '-8px',
                  left: '2%',
                  width: '96%',
                  height: '10px',
                  pointerEvents: 'none',
                }}
              >
                <path 
                  d="M5 9C80 4.5 160 2 295 7" 
                  stroke="url(#underline-gradient)" 
                  strokeWidth="4.5" 
                  strokeLinecap="round"
                  style={{
                    strokeDasharray: 300,
                    strokeDashoffset: 300,
                    animation: 'draw-line 1.4s cubic-bezier(0.23, 1, 0.32, 1) forwards 0.4s'
                  }}
                />
                <defs>
                  <linearGradient id="underline-gradient" x1="0" y1="0" x2="300" y2="0" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#1cbcc3" />
                    <stop offset="0.5" stopColor="#0ea5e9" />
                    <stop offset="1" stopColor="#4abf8f" />
                  </linearGradient>
                </defs>
              </svg>
            </span>
          </h1>
          
          {/* Sub-headline copy */}
          <p style={{
            fontSize: 'clamp(1.05rem, 2vw, 1.25rem)',
            color: 'var(--text-muted)',
            fontWeight: 500,
            lineHeight: 1.65,
            maxWidth: '700px',
            margin: '0 auto 2.75rem auto',
          }}>
            IVF patients don’t choose a clinic after seeing one random ad. We help you build trust, attract serious couples, and grow your patient pipeline through doctor-centric educational reels, local ads, and WhatsApp follow-up funnels.
          </p>
          
          {/* Centered Actions */}
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '1.25rem',
            width: '100%',
            marginBottom: '5.5rem',
          }} className="hero-ctas">
            <button
              onClick={() => handleScrollTo('contact')}
              className="btn btn-primary"
              style={{ 
                fontSize: '1.05rem', 
                padding: '1.05rem 2.25rem',
                boxShadow: 'var(--shadow-cyan)',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.65rem'
              }}
              onMouseEnter={(e) => {
                const arrow = e.currentTarget.querySelector('.cta-arrow');
                if (arrow) arrow.style.transform = 'translateX(5px)';
              }}
              onMouseLeave={(e) => {
                const arrow = e.currentTarget.querySelector('.cta-arrow');
                if (arrow) arrow.style.transform = 'none';
              }}
            >
              Get Free IVF Growth Audit
              <svg 
                className="cta-arrow"
                width="20" 
                height="20" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2.5" 
                strokeLinecap="round" 
                strokeLinejoin="round"
                style={{ transition: 'transform 0.3s cubic-bezier(0.16, 1, 0.3, 1)' }}
              >
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </button>
            
            <button
              onClick={() => handleScrollTo('work')}
              className="btn btn-secondary"
              style={{ fontSize: '1.05rem', padding: '1.05rem 2.25rem' }}
            >
              See Healthcare Work
            </button>
          </div>

          {/* Perspective Parallax Mockup Frame Wrapper */}
          <div style={{
            width: '100%',
            position: 'relative',
            perspective: '1200px',
            zIndex: 2,
          }}>
            
            {/* Floating indicator card: Left Side */}
            <div style={{
              position: 'absolute',
              left: '-10%',
              top: '40%',
              backgroundColor: 'rgba(255, 255, 255, 0.88)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.5)',
              padding: '0.85rem 1.2rem',
              borderRadius: 'var(--radius-md)',
              boxShadow: '0 10px 30px rgba(0, 53, 128, 0.08)',
              zIndex: 10,
              display: 'flex',
              alignItems: 'center',
              gap: '0.65rem',
              transform: `translate3d(0, ${scrollY * -0.05}px, 0)`,
              transition: 'transform 0.1s ease-out',
            }} className="floating-card-desktop">
              <div style={{
                width: '32px',
                height: '32px',
                borderRadius: '50%',
                backgroundColor: 'rgba(34, 197, 94, 0.1)',
                color: '#22c55e',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
                  <polyline points="17 6 23 6 23 12"></polyline>
                </svg>
              </div>
              <div style={{ textAlign: 'left' }}>
                <div style={{ fontSize: '0.65rem', color: 'var(--text-light)', textTransform: 'uppercase', fontWeight: 700, letterSpacing: '0.02em' }}>Average Result</div>
                <div style={{ fontSize: '0.9rem', fontWeight: 800, color: 'var(--text-dark)' }}>9.8% Patient Rate</div>
              </div>
            </div>

            {/* Floating indicator card: Right Side */}
            <div style={{
              position: 'absolute',
              right: '-10%',
              top: '20%',
              backgroundColor: 'rgba(255, 255, 255, 0.88)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.5)',
              padding: '0.85rem 1.2rem',
              borderRadius: 'var(--radius-md)',
              boxShadow: '0 10px 30px rgba(0, 53, 128, 0.08)',
              zIndex: 10,
              display: 'flex',
              alignItems: 'center',
              gap: '0.65rem',
              transform: `translate3d(0, ${scrollY * -0.11}px, 0)`,
              transition: 'transform 0.1s ease-out',
            }} className="floating-card-desktop">
              <div style={{
                width: '32px',
                height: '32px',
                borderRadius: '50%',
                backgroundColor: 'rgba(14, 165, 233, 0.1)',
                color: 'var(--cyan)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="23 7 16 12 23 17 23 7"></polygon>
                  <rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect>
                </svg>
              </div>
              <div style={{ textAlign: 'left' }}>
                <div style={{ fontSize: '0.65rem', color: 'var(--text-light)', textTransform: 'uppercase', fontWeight: 700, letterSpacing: '0.02em' }}>Doctor Reels</div>
                <div style={{ fontSize: '0.9rem', fontWeight: 800, color: 'var(--text-dark)' }}>Trust-Building Content</div>
              </div>
            </div>

            {/* Centered Showcase Mockup with Perspective Scroll Parallax */}
            <div style={{
              width: '100%',
              maxWidth: '720px',
              margin: '0 auto',
              position: 'relative',
              transform: `rotateX(${tiltX}deg) scale(${scaleVal}) translateY(${translateYVal}px)`,
              transformStyle: 'preserve-3d',
              transition: 'transform 0.15s cubic-bezier(0.1, 0.8, 0.2, 1)',
              boxShadow: '0 30px 65px -15px rgba(0, 53, 128, 0.25), 0 0 45px rgba(14, 165, 233, 0.08)',
              borderRadius: 'var(--radius-lg)',
              border: '1px solid rgba(255, 255, 255, 0.12)',
              overflow: 'hidden',
              aspectRatio: '16 / 10',
              backgroundColor: 'var(--primary-dark)',
            }} className="hero-mockup">
              
              {/* Browser Header Tab Decoration */}
              <div style={{
                height: '34px',
                backgroundColor: '#070f24',
                borderBottom: '1px solid rgba(255,255,255,0.06)',
                display: 'flex',
                alignItems: 'center',
                padding: '0 1.25rem',
                gap: '0.45rem',
                position: 'relative',
                zIndex: 10,
              }}>
                <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#ef4444' }} />
                <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#fbbf24' }} />
                <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#22c55e' }} />
                <div style={{
                  backgroundColor: 'rgba(255,255,255,0.05)',
                  borderRadius: '6px',
                  height: '20px',
                  width: '210px',
                  margin: '0 auto',
                  fontSize: '0.68rem',
                  color: '#94a3b8',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  letterSpacing: '0.02em',
                  fontFamily: 'var(--font-sans)',
                }}>
                  bawradigitals.com/ivf-campaign
                </div>
              </div>

              {/* Crossfading Slides Container */}
              <div style={{ position: 'relative', width: '100%', height: 'calc(100% - 34px)', overflow: 'hidden' }}>
                {slides.map((slide, idx) => (
                  <div
                    key={idx}
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                      backgroundImage: `linear-gradient(to bottom, rgba(5, 20, 41, 0.05), rgba(5, 20, 41, 0.55)), url(${slide})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      opacity: currentSlide === idx ? 1 : 0,
                      transform: currentSlide === idx ? 'scale(1)' : 'scale(1.025)',
                      transition: 'opacity 0.8s ease-in-out, transform 0.8s ease-in-out',
                    }}
                  />
                ))}

                {/* Indicator Dots */}
                <div style={{
                  position: 'absolute',
                  top: '1.25rem',
                  right: '1.25rem',
                  display: 'flex',
                  gap: '0.45rem',
                  zIndex: 15,
                  backgroundColor: 'rgba(5, 20, 41, 0.55)',
                  padding: '0.4rem 0.75rem',
                  borderRadius: 'var(--radius-full)',
                  backdropFilter: 'blur(6px)',
                  border: '1px solid rgba(255, 255, 255, 0.08)'
                }}>
                  {slides.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentSlide(idx)}
                      style={{
                        width: '6px',
                        height: '6px',
                        borderRadius: '50%',
                        backgroundColor: currentSlide === idx ? 'var(--cyan)' : 'rgba(255, 255, 255, 0.35)',
                        border: 'none',
                        padding: 0,
                        cursor: 'pointer',
                        transition: 'all 0.35s ease',
                        transform: currentSlide === idx ? 'scale(1.25)' : 'scale(1)'
                      }}
                      aria-label={`Show slide ${idx + 1}`}
                    />
                  ))}
                </div>

                {/* Overlay Glassmorphism Info Box */}
                <div style={{
                  position: 'absolute',
                  bottom: '1.25rem',
                  left: '1.25rem',
                  backgroundColor: 'rgba(5, 20, 41, 0.25)',
                  backdropFilter: 'blur(4px)',
                  border: '1px solid rgba(255, 255, 255, 0.15)',
                  padding: '0.6rem 1.2rem',
                  borderRadius: 'var(--radius-md)',
                  color: 'white',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.65rem',
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.15)',
                  zIndex: 15,
                  textAlign: 'left',
                  maxWidth: 'calc(100% - 2.5rem)',
                }} className="hero-mockup-info">
                  <div style={{
                    width: '8px',
                    height: '8px',
                    borderRadius: '50%',
                    backgroundColor: 'var(--orange)',
                    boxShadow: '0 0 8px var(--orange)',
                    animation: 'pulse 2s infinite',
                    flexShrink: 0,
                  }} />
                  <div>
                    <div style={{ fontSize: '0.85rem', fontWeight: 800, color: 'white', fontFamily: 'var(--font-display)', lineHeight: 1.2 }} className="hero-mockup-title">
                      Bawra Digitals Campaign
                    </div>
                    <div style={{ fontSize: '0.72rem', color: '#cbd5e1', marginTop: '0.15rem', lineHeight: 1.2 }} className="hero-mockup-subtitle">
                      Attracting High-Intent IVF Enquiries & Patient Trust
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>

      <style>{`
        @keyframes pulse {
          0% { transform: scale(0.92); opacity: 0.75; }
          50% { transform: scale(1.08); opacity: 1; }
          100% { transform: scale(0.92); opacity: 0.75; }
        }
        @keyframes draw-line {
          to {
            stroke-dashoffset: 0;
          }
        }
        .text-gradient-cyan-teal {
          background: linear-gradient(135deg, #1cbcc3 0%, #0ea5e9 50%, #4abf8f 100%);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          color: var(--cyan);
          display: inline;
        }
        @media (min-width: 769px) {
          .br-desktop {
            display: inline !important;
          }
        }
        @media (max-width: 991px) {
          .floating-card-desktop, .floating-element-desktop {
            display: none !important;
          }
        }
        @media (max-width: 768px) {
          .hero-mockup {
            max-width: 95% !important;
            aspect-ratio: 16 / 11 !important;
            margin: 0 auto !important;
            transform: none !important;
          }
          .hero-mockup-info {
            bottom: 0.5rem !important;
            left: 0.5rem !important;
            right: auto !important;
            max-width: calc(100% - 1rem) !important;
            padding: 0.45rem 0.75rem !important;
            gap: 0.5rem !important;
            border-radius: var(--radius-sm) !important;
          }
          .hero-mockup-title {
            font-size: 0.75rem !important;
          }
          .hero-mockup-subtitle {
            font-size: 0.62rem !important;
            margin-top: 0.05rem !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
