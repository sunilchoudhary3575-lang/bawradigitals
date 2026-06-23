import React from 'react';

const ProblemSection = () => {
  const problems = [
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="12" y1="1" x2="12" y2="23"></line>
          <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
        </svg>
      ),
      title: "High spend, low-quality enquiries",
      desc: "Forms get filled, but patients never visit the clinic.",
      detail: "Unqualified leads clicking ads by mistake drain your budget without booking consultations.",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=600&q=80",
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18"></rect>
          <line x1="7" y1="2" x2="7" y2="22"></line>
          <line x1="17" y1="2" x2="17" y2="22"></line>
          <line x1="2" y1="12" x2="22" y2="12"></line>
          <line x1="2" y1="7" x2="7" y2="7"></line>
          <line x1="2" y1="17" x2="7" y2="17"></line>
          <line x1="17" y1="17" x2="22" y2="17"></line>
          <line x1="17" y1="7" x2="22" y2="7"></line>
        </svg>
      ),
      title: "Generic stock creative templates",
      desc: "Every clinic posts the exact same stock designs.",
      detail: "Templated flyers and copy-pasted medical graphics fail to convey trust, care, or clinical authority.",
      image: "https://images.unsplash.com/photo-1616391182219-e080b4d1043a?auto=format&fit=crop&w=600&q=80",
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
          <circle cx="9" cy="7" r="4"></circle>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
        </svg>
      ),
      title: "Low trust before booking",
      desc: "Couples compare multiple clinics, reviews, and reels.",
      detail: "Before committing to high-ticket IVF treatments, couples thoroughly vet the doctor's videos and patient reviews.",
      image: "https://images.unsplash.com/photo-1508962914676-134849a727f0?auto=format&fit=crop&w=600&q=80",
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
          <polyline points="22 4 12 14.01 9 11.01"></polyline>
        </svg>
      ),
      title: "No nurturing follow-up system",
      desc: "Enquiries drop off without booking a consultation.",
      detail: "Delays in response and a lack of WhatsApp nurturing loops lead to missed OPD conversion opportunities.",
      image: "https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=600&q=80",
    }
  ];

  return (
    <section id="problems" style={{ backgroundColor: 'var(--bg-soft)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)', padding: '6.5rem 0' }}>
      {/* Abstract Background details */}
      <div className="grid-overlay" />
      
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        
        {/* Section Header */}
        <div data-aos="fade-up" style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 4rem auto' }}>
          <span className="badge badge-cyan" style={{ backgroundColor: 'rgba(14, 165, 233, 0.08)', color: 'var(--cyan)' }}>
            The Root Issue
          </span>
          <h2 style={{
            fontSize: 'clamp(2rem, 4vw, 2.6rem)',
            color: 'var(--primary)',
            marginTop: '0.5rem',
            marginBottom: '1rem',
            fontWeight: 800,
            letterSpacing: '-0.02em',
          }}>
            Why IVF Clinics Don’t Get Quality Leads
          </h2>
          <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)' }}>
            Traditional advertising methods fail for fertility treatments because patients require deep reassurance and educational touchpoints before choosing an expert.
          </p>
        </div>

        {/* Cards Grid - Fixed 2x2 layout on all screens */}
        <div className="problems-grid">
          {problems.map((prob, idx) => (
            <div
              key={idx}
              className="problem-card"
              data-aos="zoom-in"
              data-aos-delay={idx * 100}
              style={{
                backgroundColor: 'var(--bg-card)',
                borderRadius: 'var(--radius-lg)',
                boxShadow: 'var(--shadow-md)',
                border: '1px solid var(--border)',
                display: 'flex',
                flexDirection: 'column',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              {/* Card Header Image */}
              <div className="problem-card-image" style={{
                backgroundImage: `linear-gradient(to bottom, rgba(5, 20, 41, 0.15), rgba(5, 20, 41, 0.55)), url(${prob.image})`
              }}>
                {/* Floating Icon Container */}
                <div className="problem-card-icon-container">
                  {prob.icon}
                </div>
              </div>

              {/* Card Body */}
              <div className="problem-card-body">
                {/* Title */}
                <h3 className="problem-card-title" style={{
                  color: 'var(--primary)',
                  fontWeight: 700,
                }}>
                  {prob.title}
                </h3>

                {/* Core descriptive text */}
                <p className="problem-card-desc" style={{
                  color: 'var(--cyan)',
                  fontWeight: 600,
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '0.5rem',
                }}>
                  <span style={{ fontSize: '1.1rem' }}>“</span>
                  {prob.desc}
                  <span style={{ fontSize: '1.1rem' }}>”</span>
                </p>

                {/* Detail paragraph */}
                <p className="problem-card-detail" style={{
                  color: 'var(--text-muted)',
                  lineHeight: 1.6,
                  marginTop: 'auto',
                }}>
                  {prob.detail}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>

      <style>{`
        .problems-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 2.25rem;
          max-width: 1100px;
          margin: 0 auto;
        }

        .problem-card {
          transition: border-color 0.3s ease, box-shadow 0.3s ease;
        }

        .problem-card:hover {
          transform: translateY(-6px) !important;
          box-shadow: var(--shadow-lg) !important;
          border-color: rgba(14, 165, 233, 0.25) !important;
          transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease !important;
        }

        .problem-card-image {
          height: 180px;
          width: 100%;
          background-size: cover;
          background-position: center;
          position: relative;
        }

        .problem-card-icon-container {
          position: absolute;
          bottom: -22px;
          left: 20px;
          width: 46px;
          height: 46px;
          border-radius: 50%;
          background-color: white;
          color: var(--cyan);
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: var(--shadow-md);
          border: 1px solid var(--border);
          z-index: 2;
        }

        .problem-card-body {
          padding: 2.5rem 1.75rem 1.75rem 1.75rem;
          flex-grow: 1;
          display: flex;
          flex-direction: column;
        }

        .problem-card-title {
          font-size: 1.25rem;
          margin-bottom: 0.75rem;
        }

        .problem-card-desc {
          font-size: 0.98rem;
          margin-bottom: 1rem;
        }

        .problem-card-detail {
          font-size: 0.94rem;
        }

        @media (max-width: 768px) {
          .problems-grid {
            grid-template-columns: repeat(2, 1fr) !important; /* Force side-by-side on tablet/mobile */
            gap: 0.85rem;
          }
          
          .problem-card {
            border-radius: var(--radius-md) !important;
          }

          .problem-card-image {
            height: 110px !important;
          }

          .problem-card-icon-container {
            width: 34px !important;
            height: 34px !important;
            bottom: -17px !important;
            left: 12px !important;
          }

          .problem-card-icon-container svg {
            width: 18px !important;
            height: 18px !important;
          }

          .problem-card-body {
            padding: 1.5rem 0.85rem 0.85rem 0.85rem !important;
          }

          .problem-card-title {
            font-size: 0.95rem !important;
            margin-bottom: 0.4rem !important;
            line-height: 1.2;
          }

          .problem-card-desc {
            font-size: 0.8rem !important;
            margin-bottom: 0.5rem !important;
            line-height: 1.3;
          }

          .problem-card-detail {
            font-size: 0.75rem !important;
            line-height: 1.4;
          }
        }

        @media (max-width: 480px) {
          .problems-grid {
            gap: 0.5rem;
          }
          .problem-card-image {
            height: 90px !important;
          }
          .problem-card-body {
            padding: 1.25rem 0.6rem 0.6rem 0.6rem !important;
          }
          .problem-card-title {
            font-size: 0.85rem !important;
          }
          .problem-card-desc {
            font-size: 0.72rem !important;
          }
          .problem-card-detail {
            font-size: 0.68rem !important;
          }
        }
      `}</style>
    </section>
  );
};

export default ProblemSection;
