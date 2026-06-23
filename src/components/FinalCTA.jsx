import React from 'react';

const FinalCTA = () => {
  const handleScrollToForm = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="bg-gradient-dark" style={{ padding: '6.5rem 0', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
      
      {/* Visual background details */}
      <div style={{
        position: 'absolute',
        width: '80%',
        height: '80%',
        background: 'radial-gradient(circle, rgba(14, 165, 233, 0.15) 0%, rgba(255, 154, 0, 0.08) 50%, transparent 100%)',
        top: '10%',
        left: '10%',
        zIndex: 0,
        pointerEvents: 'none'
      }} />

      <div className="container" data-aos="fade-up" style={{ position: 'relative', zIndex: 1, maxWidth: '850px' }}>
        <span className="badge badge-cyan" style={{ backgroundColor: 'rgba(14, 165, 233, 0.25)', color: '#e0f2fe' }}>
          Take the first step
        </span>
        
        <h2 style={{
          fontSize: 'clamp(2.25rem, 5vw, 3.2rem)',
          color: 'white',
          marginTop: '0.5rem',
          marginBottom: '1.5rem',
          fontWeight: 800,
          letterSpacing: '-0.03em',
          lineHeight: 1.15
        }}>
          Ready To Make Your IVF Clinic <span className="text-gradient-cta">More Trusted Online?</span>
        </h2>
        
        <p style={{
          fontSize: 'clamp(1.1rem, 2vw, 1.25rem)',
          color: '#cbd5e1',
          marginBottom: '2.5rem',
          lineHeight: 1.6
        }}>
          Get a clear audit of your clinic’s digital presence and discover what can improve your patient enquiry flow. We will identify exact content gaps and campaign leaks.
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
          <button
            onClick={handleScrollToForm}
            className="btn btn-primary"
            style={{
              fontSize: '1.15rem',
              padding: '1.1rem 2.5rem',
              boxShadow: '0 4px 20px rgba(255, 154, 0, 0.4)'
            }}
          >
            Get Free IVF Growth Audit
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </button>
          
          <span style={{ fontSize: '0.85rem', color: '#94a3b8', fontWeight: 500 }}>
            ⚡ Takes less than 60 seconds to submit. Audit report delivered on WhatsApp.
          </span>
        </div>

      </div>
    </section>
  );
};

export default FinalCTA;
