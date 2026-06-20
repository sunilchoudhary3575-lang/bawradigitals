import React from 'react';
import logoImg from '../assets/logo.png';

const Footer = () => {
  const handleScrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer style={{
      backgroundColor: '#040b15',
      color: '#94a3b8',
      padding: '4.5rem 0 2rem 0',
      borderTop: '1px solid rgba(255,255,255,0.06)'
    }}>
      <div className="container">
        
        {/* Main Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '3rem',
          paddingBottom: '3.5rem',
          borderBottom: '1px solid rgba(255,255,255,0.06)'
        }} className="footer-grid">
          
          {/* Brand Col */}
          <div>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              marginBottom: '1.25rem',
            }}>
              <img 
                src={logoImg} 
                alt="Bawra Digitals Logo" 
                style={{
                  height: '32px',
                  width: 'auto',
                  objectFit: 'contain',
                  filter: 'brightness(0) invert(1)'
                }} 
              />
            </div>
            
            <p style={{ fontSize: '0.92rem', color: '#cbd5e1', lineHeight: 1.5, marginBottom: '1.5rem' }}>
              Helping doctors and IVF clinics grow from clinic to clicks. We build trust before the first consultation call.
            </p>
            
            {/* Social media placeholder buttons */}
            <div style={{ display: 'flex', gap: '1rem' }}>
              {/* Instagram */}
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(255,255,255,0.04)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.1)'; e.currentTarget.style.color = 'var(--orange)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.04)'; e.currentTarget.style.color = 'white'; }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/916377790409"
                target="_blank"
                rel="noreferrer"
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(255,255,255,0.04)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.1)'; e.currentTarget.style.color = 'var(--cyan)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.04)'; e.currentTarget.style.color = 'white'; }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                </svg>
              </a>

              {/* Email/Contact */}
              <a
                href="#contact"
                onClick={(e) => { e.preventDefault(); handleScrollTo('contact'); }}
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(255,255,255,0.04)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.1)'; e.currentTarget.style.color = 'var(--cyan)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.04)'; e.currentTarget.style.color = 'white'; }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
              </a>
            </div>
          </div>

          {/* Contact Details Col */}
          <div>
            <h4 style={{ color: 'white', fontSize: '1rem', fontWeight: 700, marginBottom: '1.25rem' }}>Contact Info</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.9rem' }}>
              <li>
                <span style={{ color: '#64748b', display: 'block', fontSize: '0.75rem', textTransform: 'uppercase', fontWeight: 600, marginBottom: '0.15rem' }}>Phone</span>
                <a href="tel:+916377790409" style={{ color: '#cbd5e1', transition: 'color 0.3s' }} onMouseEnter={(e) => e.target.style.color = 'var(--cyan)'} onMouseLeave={(e) => e.target.style.color = '#cbd5e1'}>+91 6377790409</a>
              </li>
              <li>
                <span style={{ color: '#64748b', display: 'block', fontSize: '0.75rem', textTransform: 'uppercase', fontWeight: 600, marginBottom: '0.15rem' }}>Email</span>
                <a href="mailto:contact@bawradigitals.com" style={{ color: '#cbd5e1', transition: 'color 0.3s' }} onMouseEnter={(e) => e.target.style.color = 'var(--cyan)'} onMouseLeave={(e) => e.target.style.color = '#cbd5e1'}>contact@bawradigitals.com</a>
              </li>
              <li>
                <span style={{ color: '#64748b', display: 'block', fontSize: '0.75rem', textTransform: 'uppercase', fontWeight: 600, marginBottom: '0.15rem' }}>Website</span>
                <a href="https://www.bawradigitals.com" target="_blank" rel="noreferrer" style={{ color: '#cbd5e1', transition: 'color 0.3s' }} onMouseEnter={(e) => e.target.style.color = 'var(--cyan)'} onMouseLeave={(e) => e.target.style.color = '#cbd5e1'}>Bawra Digitals Official Website</a>
              </li>
            </ul>
          </div>

          {/* Quick Links Col */}
          <div>
            <h4 style={{ color: 'white', fontSize: '1rem', fontWeight: 700, marginBottom: '1.25rem' }}>Core Solutions</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <li><a href="#solution" onClick={(e) => { e.preventDefault(); handleScrollTo('solution'); }} style={{ fontSize: '0.9rem' }} onMouseEnter={(e) => e.target.style.color = 'white'} onMouseLeave={(e) => e.target.style.color = '#94a3b8'}>Doctor Face Reels</a></li>
              <li><a href="#solution" onClick={(e) => { e.preventDefault(); handleScrollTo('solution'); }} style={{ fontSize: '0.9rem' }} onMouseEnter={(e) => e.target.style.color = 'white'} onMouseLeave={(e) => e.target.style.color = '#94a3b8'}>Lead Generation Ads</a></li>
              <li><a href="#solution" onClick={(e) => { e.preventDefault(); handleScrollTo('solution'); }} style={{ fontSize: '0.9rem' }} onMouseEnter={(e) => e.target.style.color = 'white'} onMouseLeave={(e) => e.target.style.color = '#94a3b8'}>Landing Page & Funnels</a></li>
              <li><a href="#solution" onClick={(e) => { e.preventDefault(); handleScrollTo('solution'); }} style={{ fontSize: '0.9rem' }} onMouseEnter={(e) => e.target.style.color = 'white'} onMouseLeave={(e) => e.target.style.color = '#94a3b8'}>Reputation Auditing</a></li>
            </ul>
          </div>

          {/* Campaign Col */}
          <div>
            <h4 style={{ color: 'white', fontSize: '1rem', fontWeight: 700, marginBottom: '1.25rem' }}>Free Growth Audit</h4>
            <p style={{ fontSize: '0.88rem', lineHeight: 1.5, marginBottom: '1rem' }}>
              Have our team analyze your current social media profiles and google listings.
            </p>
            <button
              onClick={() => handleScrollTo('contact')}
              className="btn btn-primary"
              style={{ padding: '0.5rem 1.25rem', fontSize: '0.85rem' }}
            >
              Get Free Audit Report
            </button>
          </div>

        </div>

        {/* Bottom copyright */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem',
          paddingTop: '2rem',
          fontSize: '0.8rem',
          color: '#64748b'
        }} className="footer-bottom">
          <span>&copy; {new Date().getFullYear()} Bawra Digitals. All rights reserved.</span>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <span>Privacy Policy</span>
            <span>Healthcare compliance statement</span>
          </div>
        </div>

      </div>
      <style>{`
        @media (max-width: 768px) {
          .footer-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 2.5rem 2rem !important;
          }
        }
        @media (max-width: 480px) {
          .footer-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 2rem 1.25rem !important;
          }
          .footer-bottom {
            flex-direction: column !important;
            text-align: center !important;
            gap: 0.75rem !important;
          }
          .footer-bottom div {
            justify-content: center !important;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
