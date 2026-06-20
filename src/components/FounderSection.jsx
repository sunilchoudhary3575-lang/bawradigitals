import React, { useState } from 'react';
import gallery1 from '../assets/gallery-1.jpg';
import gallery3 from '../assets/gallery-3.jpg';
import gallery4 from '../assets/gallery-4.jpg';
import gallery5 from '../assets/gallery-5.jpg';
import gallery6 from '../assets/gallery-6.jpg';

const FounderSection = () => {
  const [activeImage, setActiveImage] = useState(null);

  const handleScrollToForm = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const galleryImages = [
    { id: 1, src: gallery1, alt: "Clinic Branding & Strategy" },
    { id: 3, src: gallery3, alt: "Patient Acquisition & Leads" },
    { id: 4, src: gallery4, alt: "Clinical Authority & Reels" },
    { id: 5, src: gallery5, alt: "Campaign Results & Growth" },
    { id: 6, src: gallery6, alt: "Healthcare Brand Experience" },
  ];

  return (
    <section id="gallery" style={{ padding: '6.5rem 0', overflow: 'hidden' }}>
      <div className="container">
        {/* Header Block */}
        <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 3rem auto' }}>
          <span className="badge badge-cyan" style={{ backgroundColor: 'rgba(14, 165, 233, 0.08)', color: 'var(--cyan)' }}>
            Our Gallery
          </span>
          <h2 style={{
            fontSize: 'clamp(2.2rem, 5vw, 3rem)',
            color: 'var(--primary)',
            marginTop: '0.75rem',
            marginBottom: '1.25rem',
            fontWeight: 800,
            letterSpacing: '-0.02em',
            lineHeight: 1.2
          }}>
            Our Work in Healthcare
          </h2>
          <p style={{ fontSize: '1.15rem', color: 'var(--text-muted)', lineHeight: 1.7 }}>
            See how we showcase clinical authority, build trust, and drive meaningful growth for medical practices.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="gallery-grid">
          {galleryImages.map((img, idx) => {
            return (
              <div 
                key={img.id} 
                className={`gallery-item gallery-img-${idx + 1}`}
                onClick={() => setActiveImage(img)}
              >
                <img src={img.src} alt={img.alt} />
              </div>
            );
          })}
        </div>

        {/* CTA Button centered */}
        <div style={{ 
          marginTop: '3.5rem', 
          display: 'flex', 
          justifyContent: 'center',
          borderTop: '1px solid var(--border)',
          paddingTop: '2.5rem'
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

      {/* Lightbox Modal */}
      {activeImage && (
        <div className="lightbox-backdrop" onClick={() => setActiveImage(null)}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button className="lightbox-close" onClick={() => setActiveImage(null)}>✕</button>
            <img 
              src={activeImage.src} 
              alt={activeImage.alt} 
              style={{ 
                maxWidth: '100%', 
                maxHeight: '80vh', 
                borderRadius: 'var(--radius-md)', 
                boxShadow: '0 20px 50px rgba(0,0,0,0.5)',
                objectFit: 'contain'
              }} 
            />
          </div>
        </div>
      )}

      <style>{`
        .gallery-grid {
          display: grid;
          grid-template-columns: repeat(6, 1fr);
          gap: 1rem;
        }
        .gallery-item {
          position: relative;
          border-radius: var(--radius-md);
          overflow: hidden;
          aspect-ratio: 4/3;
          cursor: pointer;
          border: 1px solid var(--border);
          box-shadow: var(--shadow-sm);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          background-color: var(--bg-soft);
        }
        .gallery-item:hover {
          transform: translateY(-4px) scale(1.02);
          box-shadow: 0 12px 24px rgba(14, 165, 233, 0.15);
          border-color: var(--cyan);
        }
        .gallery-item img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }
        .gallery-item:hover img {
          transform: scale(1.05);
        }
        
        /* Responsive Grid Columns */
        .gallery-img-1, .gallery-img-2, .gallery-img-3, .gallery-img-4 {
          grid-column: span 3;
        }
        .gallery-img-5 {
          grid-column: span 6;
        }

        @media (min-width: 1024px) {
          .gallery-img-1, .gallery-img-2, .gallery-img-3 {
            grid-column: span 2;
          }
          .gallery-img-4, .gallery-img-5 {
            grid-column: span 3;
          }
        }

        /* Lightbox CSS */
        .lightbox-backdrop {
          position: fixed;
          inset: 0;
          background-color: rgba(5, 15, 30, 0.95);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 99999;
          backdrop-filter: blur(8px);
          animation: fadeIn 0.2s ease-out;
        }
        .lightbox-content {
          position: relative;
          max-width: 90vw;
          max-height: 85vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          animation: zoomIn 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        .lightbox-close {
          position: absolute;
          top: -2.5rem;
          right: 0;
          background: none;
          border: none;
          color: white;
          font-size: 2rem;
          cursor: pointer;
          transition: color 0.2s;
        }
        .lightbox-close:hover {
          color: var(--cyan);
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes zoomIn {
          from { transform: scale(0.9); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
      `}</style>
    </section>
  );
};

export default FounderSection;
