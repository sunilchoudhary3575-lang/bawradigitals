import React from 'react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Dr Suman Galwa",
      role: "IVF Expert",
      videoUrl: "https://youtube.com/shorts/DyygCu1lafc?feature=share",
      isShort: true
    },
    {
      name: "Dr. Rakesh Kumar",
      role: "AIIMS Senior Physician",
      videoUrl: "https://youtube.com/shorts/JJMyXD-yFwY?feature=share",
      isShort: true
    },
    {
      name: "Dr. M. K. Singhi",
      role: "Dermatologist",
      videoUrl: "https://youtube.com/shorts/tLxcwAWNmSA?feature=share",
      isShort: true
    },
    {
      name: "Dr. Vikas Dhakar",
      role: "AIIMS Psychiatrist",
      videoUrl: "https://youtube.com/shorts/KpVFjBdUzfM?feature=share",
      isShort: true
    },
    {
      name: "Dr. Priyanka Choudhary",
      role: "Cosmetologist & Dentist",
      videoUrl: "https://youtube.com/shorts/eiLNUL6UlQo?feature=share",
      isShort: true
    },
    {
      name: "Dr Sonal Parihar",
      role: "Gynecologist",
      videoUrl: "https://youtu.be/8VlZprLK_9I",
      isShort: false
    }
  ];

  const getEmbedUrl = (url) => {
    if (!url) return null;
    let id = "";
    if (url.includes("youtube.com/shorts/")) {
      const match = url.match(/shorts\/([a-zA-Z0-9_-]+)/);
      if (match) id = match[1];
    } else if (url.includes("youtu.be/")) {
      const match = url.match(/youtu\.be\/([a-zA-Z0-9_-]+)/);
      if (match) id = match[1];
    } else if (url.includes("youtube.com/watch?v=")) {
      const match = url.match(/[?&]v=([a-zA-Z0-9_-]+)/);
      if (match) id = match[1];
    }
    return id ? `https://www.youtube.com/embed/${id}?rel=0&modestbranding=1&showinfo=0` : null;
  };

  const handleScrollToForm = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="testimonials" style={{ backgroundColor: 'var(--bg-soft)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)', padding: '6rem 0' }}>
      <div className="grid-overlay" />
      
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        {/* Section Header */}
        <div data-aos="fade-up" style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 3.5rem auto' }}>
          <span className="badge badge-cyan" style={{ backgroundColor: 'rgba(14, 165, 233, 0.08)', color: 'var(--cyan)' }}>
            Testimonials
          </span>
          <h2 style={{
            fontSize: 'clamp(2.2rem, 5vw, 2.8rem)',
            color: 'var(--primary)',
            marginTop: '0.75rem',
            marginBottom: '1.25rem',
            fontWeight: 800,
            letterSpacing: '-0.02em',
            lineHeight: 1.2
          }}>
            What Our Clients Say
          </h2>
          <p style={{ fontSize: '1.15rem', color: 'var(--text-muted)', lineHeight: 1.7 }}>
            Hear directly from doctor partners who have scaled their clinics, established authority, and grew patient trust.
          </p>
        </div>

        {/* Video Testimonials Grid */}
        <div className="testimonials-grid">
          {testimonials.map((t, idx) => {
            const embedUrl = getEmbedUrl(t.videoUrl);
            return (
              <div 
                key={idx} 
                className="testimonial-card"
                data-aos="zoom-in"
                data-aos-delay={idx * 100}
                style={{
                  backgroundColor: 'var(--bg-card)',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid var(--border)',
                  boxShadow: 'var(--shadow-sm)',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  position: 'relative'
                }}
              >
                {/* Video Area */}
                <div 
                  style={{ 
                    position: 'relative', 
                    width: '100%', 
                    backgroundColor: '#0a1128',
                    overflow: 'hidden',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                  className={t.isShort ? "video-container-short" : "video-container-landscape"}
                >
                  {embedUrl ? (
                    <iframe
                      src={embedUrl}
                      title={`Testimonial - ${t.name}`}
                      style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        border: 'none',
                      }}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      loading="lazy"
                    />
                  ) : (
                    <div style={{ color: 'white', fontSize: '0.9rem' }}>Video unavailable</div>
                  )}
                </div>

                {/* Info Bar */}
                <div style={{ 
                  padding: '0.85rem 1rem', 
                  textAlign: 'center',
                  borderTop: '1px solid var(--border-light)',
                  backgroundColor: 'var(--bg-card)',
                  flexGrow: 1,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center'
                }}>
                  <h4 style={{ 
                    fontSize: '0.95rem', 
                    fontWeight: 700, 
                    color: 'var(--primary)',
                    margin: 0
                  }}>
                    {t.name}
                  </h4>
                  <p style={{ 
                    fontSize: '0.8rem', 
                    color: 'var(--text-muted)',
                    margin: '0.2rem 0 0 0',
                    fontWeight: 500
                  }}>
                    {t.role}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Button centered */}
        <div data-aos="fade-up" style={{ 
          marginTop: '3.5rem', 
          display: 'flex', 
          justifyContent: 'center',
        }}>
          <button
            onClick={handleScrollToForm}
            className="btn btn-primary"
          >
            Claim Your Free Clinic Audit
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </button>
        </div>
      </div>

      <style>{`
        .testimonials-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
          gap: 1.5rem;
          max-width: 1100px;
          margin: 0 auto;
        }

        .testimonial-card:hover {
          transform: translateY(-4px);
          box-shadow: var(--shadow-lg);
          border-color: var(--cyan);
        }

        /* Fixed aspect ratios for compact cards */
        .video-container-short {
          padding-top: 133.33%; /* 3:4 aspect ratio for more compact shorts */
        }

        .video-container-landscape {
          padding-top: 56.25%; /* 16:9 aspect ratio */
        }

        @media (max-width: 640px) {
          .testimonials-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 0.75rem;
          }
          .testimonial-card {
            border-radius: var(--radius-sm) !important;
          }
          /* Adjust video size slightly on small screens */
          .video-container-short {
            padding-top: 140%;
          }
        }

        @media (max-width: 400px) {
          .testimonials-grid {
            grid-template-columns: 1fr;
            max-width: 280px;
            margin: 0 auto;
          }
        }
      `}</style>
    </section>
  );
};

export default TestimonialsSection;
