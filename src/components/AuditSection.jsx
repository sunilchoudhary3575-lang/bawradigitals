import React from 'react';

const AuditSection = () => {
  const checklist = [
    "Instagram profile review",
    "Google presence review",
    "Ad communication review",
    "Content quality review",
    "Patient enquiry journey review",
    "Competitor positioning review",
    "Missed growth opportunities"
  ];

  const handleScrollToForm = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="audit" style={{ backgroundColor: 'var(--bg-soft)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)', padding: '6.5rem 0', position: 'relative' }}>
      {/* Background decoration */}
      <div className="grid-overlay" />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '4rem',
          alignItems: 'center'
        }} className="audit-grid">
          
          {/* Left Checklist Details */}
          <div>
            <span className="badge badge-cyan" style={{ backgroundColor: 'rgba(14, 165, 233, 0.08)', color: 'var(--cyan)' }}>
              100% Free Offer
            </span>
            <h2 style={{
              fontSize: 'clamp(2rem, 4vw, 2.6rem)',
              color: 'var(--primary)',
              marginTop: '0.5rem',
              marginBottom: '1.25rem',
              fontWeight: 800,
              letterSpacing: '-0.02em',
            }}>
              Get A Free IVF Clinic Growth Audit
            </h2>
            <p style={{
              fontSize: '1.1rem',
              color: 'var(--text-muted)',
              marginBottom: '2rem',
              lineHeight: 1.6
            }}>
              We will review your clinic’s online presence and show what can be improved to generate better patient enquiries. You get a personalized video or PDF report showing exact adjustments you can make.
            </p>

            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr',
              gap: '1rem',
              marginBottom: '2.5rem',
            }} className="checklist-subgrid">
              {checklist.map((item, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
                  <div style={{
                    width: '24px',
                    height: '24px',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(14, 165, 233, 0.12)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--cyan)',
                    flexShrink: 0
                  }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <span style={{ fontSize: '1.02rem', fontWeight: 600, color: 'var(--primary)' }}>
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <button
              onClick={handleScrollToForm}
              className="btn btn-primary"
              style={{ fontSize: '1.1rem', padding: '1rem 2.25rem' }}
            >
              Get My Free Audit Report
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </button>
          </div>

          {/* Right Visual Audit Report Teaser */}
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div style={{
              width: '100%',
              maxWidth: '460px',
              backgroundColor: 'var(--bg-card)',
              borderRadius: 'var(--radius-lg)',
              border: '1px solid var(--border)',
              padding: '2rem',
              boxShadow: 'var(--shadow-xl)',
              background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
              position: 'relative',
              overflow: 'hidden'
            }}>
              {/* Header inside Report Teaser */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', borderBottom: '1px solid var(--border)', paddingBottom: '1rem' }}>
                <div>
                  <div style={{ fontSize: '0.65rem', color: 'var(--cyan)', fontWeight: 700, letterSpacing: '0.1em' }}>DIAGNOSTIC REPORT</div>
                  <div style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--primary)' }}>IVF Growth Audit</div>
                </div>
                <div style={{
                  padding: '0.25rem 0.65rem',
                  backgroundColor: 'rgba(14, 165, 233, 0.08)',
                  color: 'var(--cyan)',
                  borderRadius: 'var(--radius-sm)',
                  fontSize: '0.7rem',
                  fontWeight: 700
                }}>
                  FREE
                </div>
              </div>

              {/* Checklist visual mockup preview */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div style={{ opacity: 0.85 }}>
                  <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-muted)' }}>1. SOCIAL MEDIA ENGAGEMENT</div>
                  <div style={{ height: '8px', backgroundColor: '#e2e8f0', borderRadius: '4px', marginTop: '0.35rem', overflow: 'hidden' }}>
                    <div style={{ width: '42%', height: '100%', backgroundColor: 'var(--cyan)' }} />
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.7rem', marginTop: '0.25rem', color: 'var(--cyan)', fontWeight: 600 }}>
                    <span>Low Patient Trust Flow</span>
                    <span>Score: 42%</span>
                  </div>
                </div>

                <div style={{ opacity: 0.85 }}>
                  <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-muted)' }}>2. ENQUIRY FORM CONVERSION</div>
                  <div style={{ height: '8px', backgroundColor: '#e2e8f0', borderRadius: '4px', marginTop: '0.35rem', overflow: 'hidden' }}>
                    <div style={{ width: '28%', height: '100%', backgroundColor: 'var(--cyan)' }} />
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.7rem', marginTop: '0.25rem', color: 'var(--cyan)', fontWeight: 600 }}>
                    <span>High Ad Spend Leakage</span>
                    <span>Score: 28%</span>
                  </div>
                </div>

                <div style={{ opacity: 0.85 }}>
                  <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-muted)' }}>3. PATIENT CARE FOLLOW-UP</div>
                  <div style={{ height: '8px', backgroundColor: '#e2e8f0', borderRadius: '4px', marginTop: '0.35rem', overflow: 'hidden' }}>
                    <div style={{ width: '35%', height: '100%', backgroundColor: 'var(--cyan)' }} />
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.7rem', marginTop: '0.25rem', color: 'var(--cyan)', fontWeight: 600 }}>
                    <span>Unoptimized OPD Nurturing</span>
                    <span>Score: 35%</span>
                  </div>
                </div>
              </div>

              {/* Callout inside Teaser */}
              <div style={{
                marginTop: '1.75rem',
                backgroundColor: 'rgba(14, 165, 233, 0.04)',
                border: '1px dashed var(--cyan)',
                borderRadius: 'var(--radius-md)',
                padding: '1rem',
                textAlign: 'center'
              }}>
                <div style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--cyan)' }}>
                  Unlock 3 Custom Recommendations
                </div>
                <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', marginTop: '0.15rem' }}>
                  No commitment required. Simple, actionable growth advice.
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
      
      <style>{`
        @media (min-width: 992px) {
          .audit-grid {
            grid-template-columns: 1.1fr 0.9fr !important;
          }
        }
      `}</style>
    </section>
  );
};

export default AuditSection;
