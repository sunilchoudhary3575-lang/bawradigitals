import React, { useState, useEffect, useRef } from 'react';

const ContentIdeasSection = () => {
  const topics = [
    {
      title: "Pregnancy delay की असली वजह क्या हो सकती है?",
      views: "72k+ Views",
      metric: "High Enquiry Rate",
      why: "Addresses early-stage couples trying to conceive who feel confused about initial steps.",
      image: "https://images.unsplash.com/photo-1579684389782-64d84b5e901a?auto=format&fit=crop&w=600&q=80",
    },
    {
      title: "IVF failure के बाद next step क्या होता है?",
      views: "110k+ Views",
      metric: "Max Trust Builder",
      why: "Builds deep relief for distressed couples looking for sincere clinical guidance.",
      image: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=600&q=80",
    },
    {
      title: "Male infertility को ignore क्यों नहीं करना चाहिए?",
      views: "48k+ Views",
      metric: "Taboo Breaker",
      why: "Normalizes husband's tests which clinics often struggle to get completed.",
      image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=600&q=80",
    },
    {
      title: "IVF में age factor कितना important है?",
      views: "94k+ Views",
      metric: "High Intent OPD Leads",
      why: "Generates high urgency for couples in their late 30s who need consultations immediately.",
      image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=600&q=80",
    }
  ];

  const sectionRef = useRef(null);
  const [transformX, setTransformX] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        
        // Check if section is visible in viewport
        if (rect.top < windowHeight && rect.bottom > 0) {
          // Calculate scroll progress (0 when section enters, 1 when section leaves viewport)
          const enterPosition = windowHeight;
          const exitPosition = -rect.height;
          const currentPosition = rect.top;
          
          const progress = (enterPosition - currentPosition) / (enterPosition - exitPosition);
          
          // Translate dynamically: on mobile, slide more to reveal overflowing cards
          const maxScrollRange = window.innerWidth < 768 ? 400 : 200;
          const translateVal = (0.5 - progress) * maxScrollRange;
          setTransformX(translateVal);
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Run once on mount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section ref={sectionRef} style={{ padding: '6.5rem 0', position: 'relative', overflow: 'hidden', backgroundColor: 'var(--bg-main)' }}>
      {/* Background decoration */}
      <div className="grid-overlay" />
      
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 3rem auto' }}>
          <span className="badge badge-cyan" style={{ backgroundColor: 'rgba(14, 165, 233, 0.08)', color: 'var(--cyan)' }}>
            Patient Psychology
          </span>
          <h2 style={{
            fontSize: 'clamp(2rem, 4vw, 2.6rem)',
            color: 'var(--primary)',
            marginTop: '0.5rem',
            marginBottom: '1.25rem',
            fontWeight: 800,
            letterSpacing: '-0.02em',
          }}>
            Content That IVF Patients Actually Watch
          </h2>
          <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
            Patients do not interact with generic ads. They spend hours watching educational videos before choosing a clinic. Here are the templates we scripted and tested:
          </p>
        </div>

        {/* Scroll Parallel Scrolling Cards Track */}
        <div className="parallel-scrolling-container">
          <div 
            style={{
              display: 'flex',
              gap: '2rem',
              transform: `translate3d(${transformX}px, 0, 0)`,
              transition: 'transform 0.2s cubic-bezier(0.25, 1, 0.5, 1)',
              padding: '1.5rem 0'
            }} 
            className="topics-track"
          >
            {topics.map((tp, idx) => (
              <div
                key={idx}
                style={{
                  backgroundColor: 'var(--bg-card)',
                  borderRadius: 'var(--radius-lg)',
                  border: '1px solid var(--border)',
                  padding: '1.5rem',
                  boxShadow: 'var(--shadow-sm)',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  display: 'flex',
                  flexDirection: 'column',
                  width: '300px', // Fixed card width for consistent layout
                  flexShrink: 0,
                }}
                className="topic-card"
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-6px) scale(1.01)';
                  e.currentTarget.style.boxShadow = 'var(--shadow-lg)';
                  e.currentTarget.style.borderColor = 'rgba(14, 165, 233, 0.25)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0) scale(1)';
                  e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
                  e.currentTarget.style.borderColor = 'var(--border)';
                }}
              >
                {/* Reel Play Mockup aspect ratio */}
                <div style={{
                  width: '100%',
                  height: '180px',
                  borderRadius: 'var(--radius-md)',
                  backgroundImage: `linear-gradient(rgba(0,0,0,0.15), rgba(0,0,0,0.35)), url("${tp.image}")`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  position: 'relative',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1.25rem',
                  overflow: 'hidden',
                  boxShadow: 'inset 0 0 30px rgba(0,0,0,0.1)',
                  border: '1px solid var(--border)',
                }}>
                  {/* Play Button Icon Overlay */}
                  <div style={{
                    width: '46px',
                    height: '46px',
                    borderRadius: '50%',
                    backgroundColor: 'white',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: 'var(--shadow-md)',
                    color: 'var(--primary)',
                  }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" style={{ marginLeft: '3px' }}>
                      <polygon points="5 3 19 12 5 21 5 3"></polygon>
                    </svg>
                  </div>

                  {/* Badge Overlay Left Top */}
                  <div style={{
                    position: 'absolute',
                    top: '12px',
                    left: '12px',
                    backgroundColor: 'rgba(11, 26, 48, 0.8)',
                    backdropFilter: 'blur(4px)',
                    color: 'white',
                    padding: '0.25rem 0.6rem',
                    borderRadius: 'var(--radius-sm)',
                    fontSize: '0.7rem',
                    fontWeight: 700
                  }}>
                    {tp.metric}
                  </div>

                  {/* Badge Overlay Right Bottom */}
                  <div style={{
                    position: 'absolute',
                    bottom: '12px',
                    right: '12px',
                    backgroundColor: 'rgba(255,255,255,0.9)',
                    color: 'var(--text-dark)',
                    padding: '0.25rem 0.6rem',
                    borderRadius: 'var(--radius-sm)',
                    fontSize: '0.7rem',
                    fontWeight: 700,
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.35rem'
                  }}>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                      <circle cx="12" cy="12" r="3"></circle>
                    </svg>
                    {tp.views}
                  </div>
                </div>

                {/* Title / Question */}
                <h3 style={{
                  fontSize: '1.15rem',
                  color: 'var(--primary)',
                  lineHeight: 1.4,
                  marginBottom: '0.75rem',
                  fontWeight: 700
                }}>
                  {tp.title}
                </h3>

                {/* Actionable insight explanation */}
                <p style={{
                  fontSize: '0.88rem',
                  color: 'var(--text-muted)',
                  lineHeight: 1.5,
                  marginTop: 'auto'
                }}>
                  <strong style={{ color: 'var(--primary-light)' }}>Why it works:</strong> {tp.why}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>

      <style>{`
        .parallel-scrolling-container {
          width: 100%;
          overflow: visible;
          position: relative;
        }

        /* Center alignment adjustments for tracks */
        @media (min-width: 1200px) {
          .parallel-scrolling-container {
            display: flex;
            justify-content: center;
          }
          .topics-track {
            transform: none !important; /* Lock translation on large screens since they fit natively */
          }
        }

        @media (max-width: 1199px) {
          .parallel-scrolling-container {
            /* Mask overflow elegantly on medium viewports */
            overflow-x: hidden;
            margin: 0 -1.5rem;
            padding: 0 1.5rem;
          }
        }
      `}</style>
    </section>
  );
};

export default ContentIdeasSection;
