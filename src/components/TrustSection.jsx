import React from 'react';

const TrustSection = () => {
  const points = [
    {
      metric: "50+",
      label: "Doctors & Healthcare Brands",
      desc: "Trusted by independent IVF centers, multi-specialty hospitals, gynecologists, and dermatologists.",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
        </svg>
      )
    },
    {
      metric: "Specialized",
      label: "Fertility & Hospital Focus",
      desc: "Deep knowledge of patient psychology, treatment complexities (IVF, IUI, ICSI), and clinical compliance.",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4.82 4.82A10 10 0 0 1 20 12h-8V4a10 10 0 0 1 4.82.82z"></path>
          <path d="M12 12V4a10 10 0 0 0-8 8h8z"></path>
          <path d="M12 12h8a10 10 0 0 1-8 8v-8z"></path>
          <path d="M12 12v8a10 10 0 0 0 8-8H12z"></path>
        </svg>
      )
    },
    {
      metric: "End-to-End",
      label: "Doctor Reels & Lead Ads",
      desc: "Complete production including video scriptwriting, medical editing, local ads, and WhatsApp pipelines.",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18"></rect>
          <line x1="7" y1="2" x2="7" y2="22"></line>
          <line x1="17" y1="2" x2="17" y2="22"></line>
          <line x1="2" y1="12" x2="22" y2="12"></line>
        </svg>
      )
    },
    {
      metric: "Trust-First",
      label: "Content That Nurtures",
      desc: "Patients walk into your clinic already knowing your face, hearing your success stories, and trusting your counsel.",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
        </svg>
      )
    }
  ];

  return (
    <section id="work" style={{
      backgroundColor: 'var(--primary)',
      backgroundImage: 'linear-gradient(to bottom, rgba(0, 53, 128, 0.94) 0%, rgba(5, 20, 41, 0.94) 100%), url("https://images.unsplash.com/photo-1579154204601-01588f351167?auto=format&fit=crop&w=1200&q=80")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      color: 'white',
      padding: '6rem 0',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Decorative gradient overlay */}
      <div style={{
        position: 'absolute',
        width: '50%',
        height: '100%',
        background: 'radial-gradient(circle, rgba(255, 154, 0, 0.12) 0%, transparent 60%)',
        bottom: '-30%',
        right: '-10%',
        zIndex: 0,
        pointerEvents: 'none'
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        
        {/* Header */}
        <div data-aos="fade-up" style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 4.5rem auto' }}>
          <span className="badge badge-cyan" style={{ backgroundColor: 'rgba(14, 165, 233, 0.25)', color: '#e0f2fe' }}>
            Proven Track Record
          </span>
          <h2 style={{
            fontSize: 'clamp(2rem, 4vw, 2.6rem)',
            color: 'white',
            marginTop: '0.5rem',
            marginBottom: '1.25rem',
            fontWeight: 800,
            letterSpacing: '-0.02em',
          }}>
            We Understand Healthcare Marketing
          </h2>
          <p style={{ fontSize: '1.1rem', color: '#cbd5e1', lineHeight: 1.6 }}>
            Fertility patients are sensitive. Bawra Digitals designs high-credibility content structures that make patients select your clinic with confidence.
          </p>
        </div>

        {/* Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '2rem',
          marginBottom: '4rem'
        }} className="trust-grid">
          {points.map((pt, idx) => (
            <div
              key={idx}
              data-aos="zoom-in"
              data-aos-delay={idx * 100}
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.04)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                borderRadius: 'var(--radius-lg)',
                padding: '2.25rem 2rem',
                display: 'flex',
                flexDirection: 'column',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.08)';
                e.currentTarget.style.transform = 'translateY(-5px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.04)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              {/* Icon / Top row */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                <div style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: 'var(--radius-sm)',
                  backgroundColor: 'rgba(255, 154, 0, 0.15)',
                  color: 'var(--secondary)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                  {pt.icon}
                </div>
                <span style={{
                  fontFamily: 'var(--font-display)',
                  fontWeight: 800,
                  fontSize: '1.5rem',
                  color: 'var(--secondary)',
                }}>
                  {pt.metric}
                </span>
              </div>

              {/* Title / Label */}
              <h3 style={{
                color: 'white',
                fontSize: '1.2rem',
                fontWeight: 700,
                marginBottom: '0.75rem',
              }}>
                {pt.label}
              </h3>

              {/* Desc */}
              <p style={{
                color: '#94a3b8',
                fontSize: '0.92rem',
                lineHeight: 1.5,
              }}>
                {pt.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div data-aos="fade-up" style={{
          backgroundColor: 'rgba(14, 165, 233, 0.08)',
          border: '1px solid rgba(14, 165, 233, 0.2)',
          borderRadius: 'var(--radius-md)',
          padding: '1.5rem 2rem',
          textAlign: 'center',
          maxWidth: '800px',
          margin: '0 auto',
        }}>
          <p style={{
            color: 'white',
            fontSize: '1.15rem',
            fontWeight: 600,
            lineHeight: 1.5,
          }}>
            “We don’t just run ads for clinics. <span style={{ color: 'var(--secondary)' }}>We build patient trust</span> before the first enquiry.”
          </p>
        </div>

      </div>
    </section>
  );
};

export default TrustSection;
