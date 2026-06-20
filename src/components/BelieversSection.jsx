import React from 'react';

const logos = [
  { name: "Shri Ram Hospital", image: "https://bawradigitals.com/landingpage/assets/logos/shri-ram-hospital.webp" },
  { name: "Kamala Nagar Hospital", image: "https://bawradigitals.com/landingpage/assets/logos/kamala-nagar-hospital.webp" },
  { name: "Galva Care Hospital", image: "https://bawradigitals.com/landingpage/assets/logos/galva-care-hospital.webp" },
  { name: "Dhanwantari Hospital", image: "https://bawradigitals.com/landingpage/assets/logos/dhanwantari-hospital.webp" },
  { name: "Dr. Singhi's", image: "https://bawradigitals.com/landingpage/assets/logos/dr-singhis.webp" },
  { name: "Benda Acupuncture", image: "https://bawradigitals.com/landingpage/assets/logos/benda-acupuncture.webp" },
  { name: "Dara Hospital & Mind Center", image: "https://bawradigitals.com/landingpage/assets/logos/dara-hospital.webp" },
  { name: "Endocrine", image: "https://bawradigitals.com/landingpage/assets/logos/endocrine.webp" },
  { name: "Lamaria's", image: "https://bawradigitals.com/landingpage/assets/logos/lamarias.webp" },
  { name: "Skin & Soul Aesthetics", image: "https://bawradigitals.com/landingpage/assets/logos/skin-soul-aesthetics.webp" },
  { name: "SONAA Medihub", image: "https://bawradigitals.com/landingpage/assets/logos/sonaa-medihub.webp" },
  { name: "Singla Hospital", image: "https://bawradigitals.com/landingpage/assets/logos/singla-hospital.webp" },
  { name: "AIMS Doc Talks", image: "https://bawradigitals.com/landingpage/assets/logos/aims-doc-talks.webp" },
  { name: "ZAIB Hospital", image: "https://bawradigitals.com/landingpage/assets/logos/zaib-hospital.webp" },
  { name: "Healing Hands", image: "https://bawradigitals.com/landingpage/assets/logos/healing-hands.webp" },
  { name: "Dr. Bhajan", image: "https://bawradigitals.com/landingpage/assets/logos/dr-bhajan.webp" },
  { name: "NAMYAA", image: "https://bawradigitals.com/landingpage/assets/logos/namyaa.webp" },
  { name: "Shivam Homeopathy", image: "https://bawradigitals.com/landingpage/assets/logos/shivam-homeopathy.webp" },
  { name: "Mediking Diagnostic Centre", image: "https://bawradigitals.com/landingpage/assets/logos/mediking.webp" }
];

const BelieversSection = () => {
  // Split logos into 2 rows for dual-scroll effect
  const row1 = logos.slice(0, 10);
  const row2 = logos.slice(10);

  // Duplicate rows for seamless infinite loop scroll
  const marqueeRow1 = [...row1, ...row1];
  const marqueeRow2 = [...row2, ...row2];

  const handleImageError = (e) => {
    e.target.style.display = 'none';
    const fallbackText = e.target.nextSibling;
    if (fallbackText) {
      fallbackText.style.display = 'flex';
    }
  };

  return (
    <section id="believers" style={{ padding: '4rem 0 3.5rem 0', backgroundColor: 'var(--bg-soft)', overflow: 'hidden', borderBottom: '1px solid var(--border)' }}>
      <div className="container">
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 2.5rem auto' }}>
          <span className="badge badge-primary" style={{ marginBottom: '0.75rem' }}>
            Trusted Partners
          </span>
          <h2 style={{
            fontSize: 'clamp(1.75rem, 3vw, 2.3rem)',
            color: 'var(--primary)',
            marginTop: '0.25rem',
            marginBottom: '0.75rem',
            fontWeight: 800,
            letterSpacing: '-0.02em',
          }}>
            Core Believers
          </h2>
          <p style={{ fontSize: '1rem', color: 'var(--text-muted)', lineHeight: 1.5 }}>
            Trusted by India's Leading Doctors, Hospitals & Healthcare Brands
          </p>
        </div>

        {/* Marquees Container */}
        <div className="marquee-wrapper" style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          
          {/* Row 1: Left Scroll */}
          <div className="marquee-container" style={{ overflow: 'hidden', width: '100%', display: 'flex', position: 'relative' }}>
            <div className="marquee-track-left" style={{
              display: 'flex',
              gap: '1.25rem',
              width: 'max-content',
              animation: 'scroll-left 45s linear infinite'
            }}>
              {marqueeRow1.map((logo, idx) => (
                <div key={idx} className="logo-card" style={{
                  width: '180px',
                  height: '76px',
                  backgroundColor: 'var(--bg-card)',
                  border: '1px solid var(--border)',
                  borderRadius: 'var(--radius-sm)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '0.75rem 1rem',
                  boxShadow: 'var(--shadow-sm)',
                  flexShrink: 0
                }}>
                  <img
                    src={logo.image}
                    alt={logo.name}
                    loading="lazy"
                    onError={handleImageError}
                    style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }}
                  />
                  <div className="fallback-text" style={{
                    display: 'none',
                    fontSize: '0.85rem',
                    fontWeight: 700,
                    color: 'var(--text-muted)',
                    textAlign: 'center',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '100%',
                    height: '100%'
                  }}>
                    {logo.name}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Row 2: Right Scroll */}
          <div className="marquee-container" style={{ overflow: 'hidden', width: '100%', display: 'flex', position: 'relative' }}>
            <div className="marquee-track-right" style={{
              display: 'flex',
              gap: '1.25rem',
              width: 'max-content',
              animation: 'scroll-right 45s linear infinite'
            }}>
              {marqueeRow2.map((logo, idx) => (
                <div key={idx} className="logo-card" style={{
                  width: '180px',
                  height: '76px',
                  backgroundColor: 'var(--bg-card)',
                  border: '1px solid var(--border)',
                  borderRadius: 'var(--radius-sm)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '0.75rem 1rem',
                  boxShadow: 'var(--shadow-sm)',
                  flexShrink: 0
                }}>
                  <img
                    src={logo.image}
                    alt={logo.name}
                    loading="lazy"
                    onError={handleImageError}
                    style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }}
                  />
                  <div className="fallback-text" style={{
                    display: 'none',
                    fontSize: '0.85rem',
                    fontWeight: 700,
                    color: 'var(--text-muted)',
                    textAlign: 'center',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '100%',
                    height: '100%'
                  }}>
                    {logo.name}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>

      <style>{`
        @keyframes scroll-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes scroll-right {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .marquee-container:hover .marquee-track-left,
        .marquee-container:hover .marquee-track-right {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default BelieversSection;
