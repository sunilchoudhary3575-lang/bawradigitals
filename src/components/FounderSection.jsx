import React from 'react';
import founderImg from '../assets/founder.png';

const FounderSection = () => {
  const handleScrollToForm = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section style={{ padding: '6.5rem 0', overflow: 'hidden' }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '4rem',
          alignItems: 'center'
        }} className="founder-grid">
          
          {/* Left: Image Card */}
          <div style={{ display: 'flex', justifyContent: 'center', position: 'relative' }}>
            {/* Ambient background glow */}
            <div style={{
              position: 'absolute',
              width: '110%',
              height: '110%',
              background: 'radial-gradient(circle, rgba(14, 165, 233, 0.08) 0%, rgba(255, 154, 0, 0.04) 50%, transparent 100%)',
              top: '-5%',
              left: '-5%',
              zIndex: 0,
              pointerEvents: 'none'
            }} />

            {/* Founder Frame */}
            <div style={{
              position: 'relative',
              width: '100%',
              maxWidth: '420px',
              backgroundColor: 'var(--bg-card)',
              borderRadius: 'var(--radius-lg)',
              border: '1px solid var(--border)',
              padding: '1.25rem',
              boxShadow: 'var(--shadow-xl)',
              zIndex: 1,
              background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)'
            }}>
              <div style={{
                width: '100%',
                height: '380px',
                borderRadius: 'var(--radius-md)',
                overflow: 'hidden',
                backgroundColor: 'var(--bg-soft)',
                border: '1px solid var(--border)',
                boxShadow: 'var(--shadow-sm)'
              }}>
                <img 
                  src={founderImg} 
                  alt="Founder of Bawra Digitals" 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>

              {/* Bio details below image */}
              <div style={{ marginTop: '1.25rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <h4 style={{ fontSize: '1.15rem', color: 'var(--primary)', fontWeight: 800 }}>Founder, Bawra Digitals</h4>
                  <span style={{ fontSize: '0.8rem', color: 'var(--cyan)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    Healthcare Campaign Director
                  </span>
                </div>
                {/* Small check icon */}
                <div style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(14, 165, 233, 0.08)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--cyan)'
                }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Bio Text */}
          <div>
            <span className="badge badge-cyan" style={{ backgroundColor: 'rgba(14, 165, 233, 0.08)', color: 'var(--cyan)' }}>
              Our Philosophy
            </span>
            <h2 style={{
              fontSize: 'clamp(2rem, 4vw, 2.6rem)',
              color: 'var(--primary)',
              marginTop: '0.5rem',
              marginBottom: '1.5rem',
              fontWeight: 800,
              letterSpacing: '-0.02em',
            }}>
              “IVF patients don’t buy packages. They buy hope and trust.”
            </h2>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', fontSize: '1.05rem', color: 'var(--text-muted)', lineHeight: 1.7 }}>
              <p>
                Having analyzed patient acquisition systems for dozens of medical centers, we realized one consistent bottleneck: <strong>standard marketing templates completely fail for high-value treatments like IVF.</strong>
              </p>
              <p>
                Anxious couples seeking fertility care will not call a doctor just because they saw a generic creative flyer saying "IVF starting at ₹X". They thoroughly inspect your videos, reviews, doctor face reels, and explanation guidelines beforehand.
              </p>
              <p>
                At <strong>Bawra Digitals</strong>, we do not build typical agency ads. We scripts educational reels, capture clinical authority, and launch secure follow-up systems that respect the clinical dignity of your profession while growing your patient pipeline.
              </p>
            </div>

            <div style={{ 
              marginTop: '2.5rem', 
              display: 'flex', 
              flexDirection: 'column', 
              gap: '1rem',
              borderTop: '1px solid var(--border)',
              paddingTop: '2rem'
            }}>
              <button
                onClick={handleScrollToForm}
                className="btn btn-primary"
                style={{ alignSelf: 'flex-start' }}
              >
                Claim Your Free Clinic Audit
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </button>
            </div>
          </div>

        </div>
      </div>

      <style>{`
        @media (min-width: 992px) {
          .founder-grid {
            grid-template-columns: 0.9fr 1.1fr !important;
          }
        }
      `}</style>
    </section>
  );
};

export default FounderSection;
