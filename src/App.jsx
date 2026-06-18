import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProblemSection from './components/ProblemSection';
import SolutionSection from './components/SolutionSection';
import AuditSection from './components/AuditSection';
import TrustSection from './components/TrustSection';
import FounderSection from './components/FounderSection';
import ContentIdeasSection from './components/ContentIdeasSection';
import LeadForm from './components/LeadForm';
import FAQSection from './components/FAQSection';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';

function App() {
  const [showStickyBar, setShowStickyBar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowStickyBar(true);
      } else {
        setShowStickyBar(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Sticky top navigation bar */}
      <Navbar />

      <main style={{ flexGrow: 1 }}>
        {/* Hero Section */}
        <Hero />

        {/* Why IVF Clinics Don't Get Quality Leads */}
        <ProblemSection />

        {/* IVF Marketing That Creates Trust First */}
        <SolutionSection />

        {/* Free IVF Clinic Growth Audit checklist */}
        <AuditSection />

        {/* We Understand Healthcare Marketing stats and proof */}
        <TrustSection />

        {/* Meet the Founder & Clinical Marketing Philosophy */}
        <FounderSection />

        {/* Content That IVF Patients Actually Watch (hindi/english reel ideas) */}
        <ContentIdeasSection />

        {/* Interactive Audit Booking Lead Form */}
        <LeadForm />

        {/* Frequently Asked Questions (Medical marketing objections, legal compliance) */}
        <FAQSection />

        {/* Final urging call-to-action */}
        <FinalCTA />
      </main>

      {/* Global Footer */}
      <Footer />

      {/* Sticky Bottom Audit Bar for Mobile */}
      <div className={`mobile-sticky-bar ${showStickyBar ? 'visible' : ''}`} style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        boxSizing: 'border-box',
        backgroundColor: 'rgba(5, 20, 41, 0.98)',
        backdropFilter: 'blur(8px)',
        borderTop: '2px solid var(--cyan)',
        padding: '0.55rem 1rem',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '0.75rem',
        zIndex: 9998, /* Places it right under the floating WhatsApp button */
        boxShadow: '0 -4px 20px rgba(0, 0, 0, 0.4)',
        transform: showStickyBar ? 'translateY(0)' : 'translateY(100%)',
        transition: 'transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%', maxWidth: '480px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'left', flexShrink: 1 }}>
            <span style={{ fontSize: '0.6rem', color: 'var(--cyan)', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.05em', lineHeight: 1.1 }}>Free Offer</span>
            <span style={{ fontSize: '0.82rem', color: 'white', fontWeight: 750, lineHeight: 1.2, whiteSpace: 'nowrap' }}>Free IVF Audit</span>
          </div>
          <button
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            style={{
              padding: '0.45rem 1rem',
              fontSize: '0.8rem',
              backgroundColor: 'var(--cyan)',
              color: 'white',
              border: 'none',
              borderRadius: 'var(--radius-sm)',
              fontWeight: 800,
              cursor: 'pointer',
              boxShadow: '0 4px 12px rgba(14, 165, 233, 0.3)',
              flexShrink: 0
            }}
          >
            Claim Now
          </button>
        </div>
      </div>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/916377790409"
        target="_blank"
        rel="noreferrer"
        className="whatsapp-float"
        title="Chat on WhatsApp"
      >
        <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.458L0 24zm6.09-3.232c1.648.977 3.254 1.488 4.862 1.489 5.513 0 10.003-4.49 10.006-10.005.002-2.67-1.036-5.18-2.925-7.07C16.19 3.29 13.684 2.25 11.01 2.247c-5.524 0-10.017 4.49-10.021 10.007-.002 1.848.513 3.655 1.491 5.23L1.51 22.183l4.637-1.215zm12.39-5.467c-.29-.145-1.713-.846-1.978-.941-.264-.096-.457-.145-.648.145-.191.29-.74.942-.907 1.133-.166.19-.332.213-.622.068-.29-.145-1.22-.45-2.324-1.433-.859-.767-1.44-1.715-1.607-2.005-.167-.29-.018-.447.127-.591.13-.13.29-.337.435-.506.145-.169.193-.29.29-.482.096-.193.048-.362-.024-.506-.072-.145-.648-1.56-.888-2.14-.233-.562-.47-.486-.648-.495-.167-.008-.36-.01-.552-.01-.193 0-.507.072-.772.361-.265.29-1.011.988-1.011 2.409 0 1.42 1.036 2.793 1.18 2.987.145.193 2.037 3.111 4.934 4.364.689.299 1.227.478 1.646.611.693.22 1.325.19 1.823.116.556-.083 1.713-.7 1.956-1.374.244-.675.244-1.253.171-1.374-.073-.121-.265-.193-.556-.338z" />
        </svg>
      </a>
    </div>
  );
}

export default App;
