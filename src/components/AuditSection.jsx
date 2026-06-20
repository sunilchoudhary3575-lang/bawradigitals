import React, { useState, useEffect } from 'react';

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

  // State for dynamic simulation chart data
  const [optimizedData, setOptimizedData] = useState([30, 35, 42, 50, 48, 62, 58, 70, 78, 85]);
  const [unoptimizedData, setUnoptimizedData] = useState([20, 25, 22, 28, 24, 26, 21, 25, 22, 26]);
  const [liveEnquiries, setLiveEnquiries] = useState(142);
  const [liveCpl, setLiveCpl] = useState(480);

  useEffect(() => {
    const timer = setInterval(() => {
      // 1. Update optimized line (steady rising trend with fluctuations)
      setOptimizedData((prev) => {
        const last = prev[prev.length - 1];
        let next = last + Math.floor(Math.random() * 14) - 5; // -5 to +8
        if (next > 96) next = 92;
        if (next < 62) next = 66;
        return [...prev.slice(1), next];
      });

      // 2. Update unoptimized line (low flat trend with minor oscillations)
      setUnoptimizedData((prev) => {
        const last = prev[prev.length - 1];
        let next = last + Math.floor(Math.random() * 9) - 4; // -4 to +4
        if (next > 35) next = 29;
        if (next < 16) next = 20;
        return [...prev.slice(1), next];
      });

      // 3. Update HUD live numbers
      setLiveEnquiries((prev) => {
        const change = Math.floor(Math.random() * 3) - 1; // -1 to +2
        return Math.max(125, Math.min(220, prev + change));
      });

      setLiveCpl((prev) => {
        const change = Math.floor(Math.random() * 5) - 3; // -3 to +2 (downward drift)
        return Math.max(160, Math.min(590, prev - change));
      });
    }, 1500);

    return () => clearInterval(timer);
  }, []);

  const handleScrollToForm = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Convert array values to SVG coordinate paths
  // Width: 380, Height: 180, scale values from [0, 100] to Y [15, 165]
  const optPath = optimizedData.map((val, i) => `${i === 0 ? 'M' : 'L'} ${(i * 380) / 9} ${165 - (val * 150) / 100}`).join(' ');
  const optAreaPath = optPath + ' L 380 180 L 0 180 Z';
  const unoptPath = unoptimizedData.map((val, i) => `${i === 0 ? 'M' : 'L'} ${(i * 380) / 9} ${165 - (val * 150) / 100}`).join(' ');

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

          {/* Right Visual Simulated Running Graph Dashboard widget */}
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div style={{
              width: '100%',
              maxWidth: '460px',
              backgroundColor: '#051024',
              backgroundImage: 'linear-gradient(135deg, #07122a 0%, #030816 100%)',
              borderRadius: 'var(--radius-lg)',
              border: '1px solid rgba(14, 165, 233, 0.18)',
              padding: '1.75rem',
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.4), 0 0 30px rgba(14, 165, 233, 0.05)',
              position: 'relative',
              overflow: 'hidden',
              display: 'flex',
              flexDirection: 'column',
              gap: '1.25rem',
            }}>
              {/* Header inside Simulated Dashboard */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid rgba(255, 255, 255, 0.07)', paddingBottom: '0.85rem' }}>
                <div>
                  <div style={{ fontSize: '0.65rem', color: 'var(--cyan)', fontWeight: 800, letterSpacing: '0.12em', textTransform: 'uppercase' }}>Live Performance Simulation</div>
                  <div style={{ fontSize: '1.15rem', fontWeight: 800, color: 'white', fontFamily: 'var(--font-display)' }}>Patient Enquiry Growth</div>
                </div>
                <div style={{
                  padding: '0.3rem 0.65rem',
                  backgroundColor: 'rgba(34, 197, 94, 0.12)',
                  color: '#22c55e',
                  border: '1px solid rgba(34, 197, 94, 0.25)',
                  borderRadius: 'var(--radius-sm)',
                  fontSize: '0.72rem',
                  fontWeight: 800,
                  letterSpacing: '0.04em'
                }}>
                  ACTIVE PLOT
                </div>
              </div>

              {/* Stats Counters Grid */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '1rem',
                backgroundColor: 'rgba(255, 255, 255, 0.02)',
                padding: '0.85rem 1rem',
                borderRadius: 'var(--radius-md)',
                border: '1px solid rgba(255, 255, 255, 0.04)'
              }}>
                <div>
                  <div style={{ fontSize: '0.68rem', color: '#cbd5e1', fontWeight: 600 }}>Monthly Enquiries</div>
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.4rem', marginTop: '0.15rem' }}>
                    <span style={{ fontSize: '1.4rem', fontWeight: 800, color: 'white' }}>{liveEnquiries}</span>
                    <span style={{ fontSize: '0.75rem', color: '#22c55e', fontWeight: 800 }}>+232%</span>
                  </div>
                </div>
                <div style={{ borderLeft: '1px solid rgba(255, 255, 255, 0.08)', paddingLeft: '1rem' }}>
                  <div style={{ fontSize: '0.68rem', color: '#cbd5e1', fontWeight: 600 }}>Ad Spend Cost (CPL)</div>
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.4rem', marginTop: '0.15rem' }}>
                    <span style={{ fontSize: '1.4rem', fontWeight: 800, color: 'white' }}>₹{liveCpl}</span>
                    <span style={{ fontSize: '0.75rem', color: 'var(--cyan)', fontWeight: 800 }}>-64%</span>
                  </div>
                </div>
              </div>

              {/* Running Chart SVG Container */}
              <div style={{ position: 'relative', width: '100%', height: '170px' }}>
                <svg viewBox="0 0 380 180" style={{ width: '100%', height: '100%', overflow: 'visible' }}>
                  <defs>
                    <linearGradient id="opt-area-gradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#1cbcc3" stopOpacity="0.22" />
                      <stop offset="100%" stopColor="#1cbcc3" stopOpacity="0" />
                    </linearGradient>
                    <linearGradient id="opt-stroke-gradient" x1="0" y1="0" x2="1" y2="0">
                      <stop offset="0%" stopColor="#1cbcc3" />
                      <stop offset="60%" stopColor="#0ea5e9" />
                      <stop offset="100%" stopColor="#4abf8f" />
                    </linearGradient>
                  </defs>

                  {/* Horizontal Grid lines */}
                  <line x1="0" y1="15" x2="380" y2="15" stroke="rgba(255, 255, 255, 0.03)" strokeDasharray="3 3" />
                  <line x1="0" y1="52.5" x2="380" y2="52.5" stroke="rgba(255, 255, 255, 0.04)" strokeDasharray="3 3" />
                  <line x1="0" y1="90" x2="380" y2="90" stroke="rgba(255, 255, 255, 0.04)" strokeDasharray="3 3" />
                  <line x1="0" y1="127.5" x2="380" y2="127.5" stroke="rgba(255, 255, 255, 0.04)" strokeDasharray="3 3" />
                  <line x1="0" y1="165" x2="380" y2="165" stroke="rgba(255, 255, 255, 0.03)" strokeDasharray="3 3" />

                  {/* Unoptimized Line (Dotted Red, Low Performance) */}
                  <path
                    d={unoptPath}
                    fill="none"
                    stroke="#ef4444"
                    strokeWidth="1.5"
                    strokeDasharray="4 4"
                    opacity="0.6"
                    style={{ transition: 'd 0.35s ease-in-out' }}
                  />

                  {/* Optimized Campaign Fill Area */}
                  <path
                    d={optAreaPath}
                    fill="url(#opt-area-gradient)"
                    style={{ transition: 'd 0.35s ease-in-out' }}
                  />

                  {/* Optimized Campaign Line (Gradient, Thick, Glowing) */}
                  <path
                    d={optPath}
                    fill="none"
                    stroke="url(#opt-stroke-gradient)"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                    style={{ transition: 'd 0.35s ease-in-out' }}
                  />

                  {/* Pulse tracking dot at the latest value (right edge x=380) */}
                  <circle
                    cx="380"
                    cy={165 - (optimizedData[9] * 150) / 100}
                    r="5.5"
                    fill="#4abf8f"
                    style={{ transition: 'cy 0.35s ease-in-out' }}
                  />
                  <circle
                    cx="380"
                    cy={165 - (optimizedData[9] * 150) / 100}
                    r="12"
                    fill="none"
                    stroke="#4abf8f"
                    strokeWidth="2"
                    opacity="0.6"
                    style={{ transition: 'cy 0.35s ease-in-out' }}
                  >
                    <animate attributeName="r" values="5.5;15;5.5" dur="2s" repeatCount="indefinite" />
                    <animate attributeName="opacity" values="0.7;0;0.7" dur="2s" repeatCount="indefinite" />
                  </circle>
                </svg>
              </div>

              {/* Legend & Labels row */}
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                fontSize: '0.72rem',
                borderTop: '1px solid rgba(255,255,255,0.07)',
                paddingTop: '0.85rem'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#4abf8f', display: 'inline-block' }} />
                  <span style={{ color: '#e2e8f0', fontWeight: 600 }}>Optimized Campaigns</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#ef4444', display: 'inline-block', opacity: 0.7 }} />
                  <span style={{ color: '#94a3b8', fontWeight: 500 }}>Unoptimized (Ads Waste)</span>
                </div>
              </div>

              {/* Callout box under the running chart */}
              <div style={{
                backgroundColor: 'rgba(14, 165, 233, 0.05)',
                border: '1px dashed rgba(14, 165, 233, 0.25)',
                borderRadius: 'var(--radius-md)',
                padding: '0.85rem 1rem',
                textAlign: 'center'
              }}>
                <div style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--cyan)' }}>
                  Unlock Customized Audit Insights
                </div>
                <div style={{ fontSize: '0.7rem', color: '#94a3b8', marginTop: '0.15rem' }}>
                  See exact metrics on where your clinic’s budget is leaking.
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
