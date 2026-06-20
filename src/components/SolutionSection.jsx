import React from 'react';

const SolutionSection = () => {
  const solutions = [
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="23 7 16 12 23 17 23 7"></polygon>
          <rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect>
        </svg>
      ),
      title: "Doctor Face Reels",
      desc: "Build clinical authority and personal trust with patient education reels.",
      points: ["Address patient fears", "Bilingual content (Hindi/English)", "Empathy-focused scripts"],
      image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=600&q=80",
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
          <line x1="8" y1="21" x2="16" y2="21"></line>
          <line x1="12" y1="17" x2="12" y2="21"></line>
        </svg>
      ),
      title: "Lead Generation Ads",
      desc: "Run campaigns targeting serious couples looking for specialized treatment.",
      points: ["High-intent demographic filters", "Pre-qualifying questions", "No accidental clicks"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80",
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
        </svg>
      ),
      title: "Landing Page + WhatsApp Funnel",
      desc: "Capture patient enquiries cleanly and follow up automatically.",
      points: ["High-converting mobile pages", "Instant WhatsApp notification", "Automated patient nurturing"],
      image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=600&q=80",
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path>
        </svg>
      ),
      title: "Reputation & Review Growth",
      desc: "Get clinical reviews and video success stories from happy patients.",
      points: ["Google review campaigns", "Video testimonial guidance", "Strict medical compliance"],
      image: "https://images.unsplash.com/photo-1581056771107-24ca5f033842?auto=format&fit=crop&w=600&q=80",
    }
  ];

  return (
    <section id="solution" style={{ padding: '6rem 0' }}>
      <div className="container">
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 4.5rem auto' }}>
          <span className="badge badge-primary">Our Approach</span>
          <h2 style={{
            fontSize: 'clamp(2rem, 4vw, 2.6rem)',
            color: 'var(--primary)',
            marginTop: '0.5rem',
            marginBottom: '1.25rem',
            fontWeight: 800,
            letterSpacing: '-0.02em',
          }}>
            We Build IVF Marketing That Creates Trust First
          </h2>
          <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
            Bawra Digitals positions your clinic as a compassionate guide. We don’t just buy ads; we craft the clinical authority that makes couples pick up the phone.
          </p>
        </div>

        {/* Grid Layout */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '2rem',
        }} className="solution-grid">
          {solutions.map((sol, idx) => (
            <div
              key={idx}
              style={{
                backgroundColor: 'var(--bg-card)',
                borderRadius: 'var(--radius-lg)',
                border: '1px solid var(--border)',
                boxShadow: 'var(--shadow-sm)',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                display: 'flex',
                flexDirection: 'column',
                overflow: 'hidden',
              }}
              className="solution-card"
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-6px)';
                e.currentTarget.style.boxShadow = 'var(--shadow-lg)';
                e.currentTarget.style.borderColor = 'rgba(14, 165, 233, 0.25)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
                e.currentTarget.style.borderColor = 'var(--border)';
              }}
            >
              {/* Card Header Image */}
              <div style={{
                height: '160px',
                width: '100%',
                backgroundImage: `linear-gradient(to bottom, rgba(5, 20, 41, 0.15), rgba(5, 20, 41, 0.55)), url(${sol.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                position: 'relative',
              }}>
                {/* Floating Icon Container */}
                <div style={{
                  position: 'absolute',
                  bottom: '-22px',
                  left: '20px',
                  width: '46px',
                  height: '46px',
                  borderRadius: '50%',
                  backgroundColor: 'white',
                  color: 'var(--cyan)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: 'var(--shadow-md)',
                  border: '1px solid var(--border)',
                  zIndex: 2,
                }}>
                  {sol.icon}
                </div>
              </div>

              {/* Card Body */}
              <div style={{ padding: '2.25rem 1.5rem 1.5rem 1.5rem', flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                {/* Title */}
                <h3 style={{
                  fontSize: '1.3rem',
                  color: 'var(--primary)',
                  marginBottom: '0.75rem',
                  fontWeight: 700,
                }}>
                  {sol.title}
                </h3>

                {/* Description */}
                <p style={{
                  fontSize: '0.96rem',
                  color: 'var(--text-muted)',
                  lineHeight: 1.5,
                  marginBottom: '1.5rem',
                }}>
                  {sol.desc}
                </p>

                {/* Details Bullet List */}
                <ul style={{
                  listStyle: 'none',
                  padding: 0,
                  margin: 'auto 0 0 0',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.65rem',
                  borderTop: '1px solid var(--border-light)',
                  paddingTop: '1.25rem',
                }}>
                  {sol.points.map((pt, pIdx) => (
                    <li key={pIdx} style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.9rem', fontWeight: 600, color: 'var(--primary-light)' }}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--cyan)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      {pt}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default SolutionSection;
