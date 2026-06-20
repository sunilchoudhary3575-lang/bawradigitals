import React, { useState } from 'react';

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "How can this audit be 100% free? What’s the catch?",
      answer: "No catch. We provide the audit to show our value first. If you want us to implement the trust systems for you, we can discuss a partnership. If not, the actionable insights are yours to keep."
    },
    {
      question: "Do you understand medical marketing compliance (like PC-PNDT)?",
      answer: "Yes, fully. We respect all legal/ethical guidelines, never run gender selection ads, make false success rate claims, or use commercial gimmicks. Content is purely educational."
    },
    {
      question: "What credentials or account access do you need?",
      answer: "None. We only audit your public-facing presence (social media, Google listing, and website) from a high-intent patient's perspective."
    },
    {
      question: "How long does it take to receive the audit report?",
      answer: "Each audit is manually researched by our team and delivered via video/PDF directly on WhatsApp within 24 to 48 hours."
    }
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section style={{ backgroundColor: 'var(--bg-soft)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)', padding: '6.5rem 0', position: 'relative', overflow: 'hidden' }}>
      {/* Background decoration */}
      <div className="grid-overlay" />

      <div className="container" style={{ position: 'relative', zIndex: 1, maxWidth: '800px' }}>
        
        {/* Header */}
        <div style={{ textAlign: 'center', margin: '0 auto 4rem auto' }}>
          <span className="badge badge-cyan" style={{ backgroundColor: 'rgba(14, 165, 233, 0.08)', color: 'var(--cyan)' }}>
            Got Questions?
          </span>
          <h2 style={{
            fontSize: 'clamp(2rem, 4vw, 2.6rem)',
            color: 'var(--primary)',
            marginTop: '0.5rem',
            marginBottom: '1rem',
            fontWeight: 800,
            letterSpacing: '-0.02em',
          }}>
            Frequently Asked Questions
          </h2>
          <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)' }}>
            Everything you need to know about our Free IVF Growth Audit and how we help medical clinics scale.
          </p>
        </div>

        {/* FAQ Accordions */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {faqs.map((faq, idx) => {
            const isOpen = activeIndex === idx;
            return (
              <div
                key={idx}
                style={{
                  backgroundColor: 'var(--bg-card)',
                  border: isOpen ? '1px solid rgba(14, 165, 233, 0.3)' : '1px solid var(--border)',
                  borderRadius: 'var(--radius-md)',
                  boxShadow: isOpen ? 'var(--shadow-md)' : 'var(--shadow-sm)',
                  transition: 'all 0.3s ease',
                  overflow: 'hidden'
                }}
              >
                {/* Accordion Trigger */}
                <button
                  onClick={() => toggleFAQ(idx)}
                  style={{
                    width: '100%',
                    padding: '1.5rem',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    background: 'none',
                    border: 'none',
                    textAlign: 'left',
                    cursor: 'pointer',
                    outline: 'none',
                  }}
                >
                  <span style={{
                    fontSize: '1.1rem',
                    fontWeight: 700,
                    color: isOpen ? 'var(--primary)' : 'var(--text-dark)',
                    transition: 'color 0.3s ease',
                    paddingRight: '1rem'
                  }}>
                    {faq.question}
                  </span>
                  
                  {/* Plus/Minus icon */}
                  <div style={{
                    width: '24px',
                    height: '24px',
                    borderRadius: '50%',
                    backgroundColor: isOpen ? 'var(--cyan)' : 'var(--border-light)',
                    color: isOpen ? 'white' : 'var(--text-muted)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'all 0.3s ease',
                    flexShrink: 0
                  }}>
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      style={{
                        transform: isOpen ? 'rotate(180deg)' : 'rotate(0)',
                        transition: 'transform 0.3s ease'
                      }}
                    >
                      {isOpen ? (
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                      ) : (
                        <>
                          <line x1="12" y1="5" x2="12" y2="19"></line>
                          <line x1="5" y1="12" x2="19" y2="12"></line>
                        </>
                      )}
                    </svg>
                  </div>
                </button>

                {/* Accordion Content */}
                <div
                  style={{
                    maxHeight: isOpen ? '300px' : '0',
                    opacity: isOpen ? 1 : 0,
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    overflow: 'hidden'
                  }}
                >
                  <div style={{
                    padding: '0 1.5rem 1.5rem 1.5rem',
                    fontSize: '1rem',
                    color: 'var(--text-muted)',
                    lineHeight: 1.6,
                    borderTop: '1px solid var(--border-light)',
                    paddingTop: '1rem'
                  }}>
                    {faq.answer}
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default FAQSection;
