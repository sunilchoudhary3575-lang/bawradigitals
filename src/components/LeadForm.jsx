import React, { useState } from 'react';

const LeadForm = () => {
  const [formData, setFormData] = useState({
    clinicName: '',
    city: '',
    name: '',
    whatsapp: '',
    instagram: '',
    runningAds: '',
    budgetRange: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.clinicName.trim()) newErrors.clinicName = 'Clinic name is required';
    if (!formData.city.trim()) newErrors.city = 'City is required';
    if (!formData.name.trim()) newErrors.name = 'Your name is required';
    if (!formData.whatsapp.trim()) {
      newErrors.whatsapp = 'WhatsApp number is required';
    } else if (!/^\+?[0-9\s-]{10,14}$/.test(formData.whatsapp.trim())) {
      newErrors.whatsapp = 'Enter a valid WhatsApp number (minimum 10 digits)';
    }
    if (!formData.instagram.trim()) newErrors.instagram = 'Instagram page link is required';
    if (!formData.runningAds) newErrors.runningAds = 'Please select an option';
    if (!formData.budgetRange) newErrors.budgetRange = 'Please select your budget';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);

    // Simulate network submission
    setTimeout(() => {
      console.log('--- Bawra Digitals IVF Campaign Lead Submitted ---');
      console.log(formData);
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1200);
  };

  return (
    <section id="contact" style={{ padding: '6.5rem 0', position: 'relative' }}>
      {/* Background decoration */}
      <div style={{
        position: 'absolute',
        width: '100%',
        height: '100%',
        background: 'radial-gradient(ellipse at center, rgba(14, 165, 233, 0.04) 0%, transparent 70%)',
        top: 0,
        left: 0,
        zIndex: 0,
        pointerEvents: 'none'
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '4rem',
          alignItems: 'start'
        }} className="form-grid">

          {/* Left copy column */}
          <div data-aos="fade-up" style={{ marginTop: '1rem' }}>
            <span className="badge badge-cyan" style={{ backgroundColor: 'rgba(14, 165, 233, 0.08)', color: 'var(--cyan)' }}>Get Access</span>
            <h2 style={{
              fontSize: 'clamp(2rem, 4vw, 2.6rem)',
              color: 'var(--primary)',
              marginTop: '0.5rem',
              marginBottom: '1.25rem',
              fontWeight: 800,
              letterSpacing: '-0.02em',
            }}>
              Get Your Free IVF Growth Audit
            </h2>
            <p style={{
              fontSize: '1.1rem',
              color: 'var(--text-muted)',
              marginBottom: '2rem',
              lineHeight: 1.6
            }}>
              Fill in the form to request your comprehensive digital profile audit. Our healthcare marketing strategists will analyze your content, local competitor map, and ad potential.
            </p>

            {/* Checklist of what happens next */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <div style={{ display: 'flex', gap: '1rem' }}>
                <div style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(14, 165, 233, 0.1)',
                  color: 'var(--cyan)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 700,
                  fontSize: '0.9rem',
                  flexShrink: 0
                }}>1</div>
                <div>
                  <h4 style={{ fontSize: '1rem', color: 'var(--primary)', fontWeight: 700 }}>We Analyze Your Profile</h4>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginTop: '0.2rem' }}>We check how easy it is for an anxious couple to trust you from your social pages.</p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '1rem' }}>
                <div style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(14, 165, 233, 0.1)',
                  color: 'var(--cyan)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 700,
                  fontSize: '0.9rem',
                  flexShrink: 0
                }}>2</div>
                <div>
                  <h4 style={{ fontSize: '1rem', color: 'var(--primary)', fontWeight: 700 }}>Identify Growth & Ad Leaks</h4>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginTop: '0.2rem' }}>We diagnose why your current campaigns or pages might not bring high-quality consultation requests.</p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '1rem' }}>
                <div style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(14, 165, 233, 0.1)',
                  color: 'var(--cyan)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 700,
                  fontSize: '0.9rem',
                  flexShrink: 0
                }}>3</div>
                <div>
                  <h4 style={{ fontSize: '1rem', color: 'var(--primary)', fontWeight: 700 }}>Get Recommendations on WhatsApp</h4>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginTop: '0.2rem' }}>Receive actionable items directly on WhatsApp. No pitching, just clear steps.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Form Card */}
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div data-aos="zoom-in" data-aos-delay="200" style={{
              width: '100%',
              maxWidth: '560px',
              backgroundColor: 'var(--bg-card)',
              borderRadius: 'var(--radius-lg)',
              border: '1px solid var(--border)',
              padding: '2.5rem 2rem',
              boxShadow: 'var(--shadow-xl)',
              position: 'relative',
              overflow: 'hidden',
              minHeight: '450px'
            }}>
              
              {!isSuccess ? (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                  
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }} className="form-row-2">
                    {/* Clinic Name */}
                    <div>
                      <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--primary-light)', marginBottom: '0.35rem' }}>Clinic Name *</label>
                      <input
                        type="text"
                        name="clinicName"
                        value={formData.clinicName}
                        onChange={handleChange}
                        placeholder="e.g. Hope IVF Center"
                        style={{
                          width: '100%',
                          padding: '0.75rem 1rem',
                          borderRadius: 'var(--radius-sm)',
                          border: `1px solid ${errors.clinicName ? '#dc2626' : 'var(--border)'}`,
                          outline: 'none',
                          fontSize: '0.95rem',
                          fontFamily: 'var(--font-sans)',
                          backgroundColor: 'var(--bg-soft)',
                          transition: 'border-color 0.3s ease'
                        }}
                      />
                      {errors.clinicName && <span style={{ fontSize: '0.75rem', color: '#dc2626', marginTop: '0.2rem', display: 'block' }}>{errors.clinicName}</span>}
                    </div>

                    {/* City */}
                    <div>
                      <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--primary-light)', marginBottom: '0.35rem' }}>City *</label>
                      <input
                        type="text"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        placeholder="e.g. Jodhpur"
                        style={{
                          width: '100%',
                          padding: '0.75rem 1rem',
                          borderRadius: 'var(--radius-sm)',
                          border: `1px solid ${errors.city ? '#dc2626' : 'var(--border)'}`,
                          outline: 'none',
                          fontSize: '0.95rem',
                          fontFamily: 'var(--font-sans)',
                          backgroundColor: 'var(--bg-soft)',
                        }}
                      />
                      {errors.city && <span style={{ fontSize: '0.75rem', color: '#dc2626', marginTop: '0.2rem', display: 'block' }}>{errors.city}</span>}
                    </div>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }} className="form-row-2">
                    {/* Your Name */}
                    <div>
                      <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--primary-light)', marginBottom: '0.35rem' }}>Your Name *</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. Dr. Amit Sharma"
                        style={{
                          width: '100%',
                          padding: '0.75rem 1rem',
                          borderRadius: 'var(--radius-sm)',
                          border: `1px solid ${errors.name ? '#dc2626' : 'var(--border)'}`,
                          outline: 'none',
                          fontSize: '0.95rem',
                          fontFamily: 'var(--font-sans)',
                          backgroundColor: 'var(--bg-soft)',
                        }}
                      />
                      {errors.name && <span style={{ fontSize: '0.75rem', color: '#dc2626', marginTop: '0.2rem', display: 'block' }}>{errors.name}</span>}
                    </div>

                    {/* WhatsApp */}
                    <div>
                      <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--primary-light)', marginBottom: '0.35rem' }}>WhatsApp Number *</label>
                      <input
                        type="tel"
                        name="whatsapp"
                        value={formData.whatsapp}
                        onChange={handleChange}
                        placeholder="e.g. +91 98765 43210"
                        style={{
                          width: '100%',
                          padding: '0.75rem 1rem',
                          borderRadius: 'var(--radius-sm)',
                          border: `1px solid ${errors.whatsapp ? '#dc2626' : 'var(--border)'}`,
                          outline: 'none',
                          fontSize: '0.95rem',
                          fontFamily: 'var(--font-sans)',
                          backgroundColor: 'var(--bg-soft)',
                        }}
                      />
                      {errors.whatsapp && <span style={{ fontSize: '0.75rem', color: '#dc2626', marginTop: '0.2rem', display: 'block' }}>{errors.whatsapp}</span>}
                    </div>
                  </div>

                  {/* Instagram Page Link */}
                  <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--primary-light)', marginBottom: '0.35rem' }}>Instagram Page Link / Username *</label>
                    <input
                      type="text"
                      name="instagram"
                      value={formData.instagram}
                      onChange={handleChange}
                      placeholder="e.g. instagram.com/hope_ivf"
                      style={{
                        width: '100%',
                        padding: '0.75rem 1rem',
                        borderRadius: 'var(--radius-sm)',
                        border: `1px solid ${errors.instagram ? '#dc2626' : 'var(--border)'}`,
                        outline: 'none',
                        fontSize: '0.95rem',
                        fontFamily: 'var(--font-sans)',
                        backgroundColor: 'var(--bg-soft)',
                      }}
                    />
                    {errors.instagram && <span style={{ fontSize: '0.75rem', color: '#dc2626', marginTop: '0.2rem', display: 'block' }}>{errors.instagram}</span>}
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }} className="form-row-2">
                    {/* Are you currently running ads? */}
                    <div>
                      <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--primary-light)', marginBottom: '0.35rem' }}>Running ads currently? *</label>
                      <select
                        name="runningAds"
                        value={formData.runningAds}
                        onChange={handleChange}
                        style={{
                          width: '100%',
                          padding: '0.75rem 1rem',
                          borderRadius: 'var(--radius-sm)',
                          border: `1px solid ${errors.runningAds ? '#dc2626' : 'var(--border)'}`,
                          outline: 'none',
                          fontSize: '0.95rem',
                          fontFamily: 'var(--font-sans)',
                          backgroundColor: 'var(--bg-soft)',
                        }}
                      >
                        <option value="">Select option</option>
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                        <option value="Planning Soon">Planning Soon</option>
                      </select>
                      {errors.runningAds && <span style={{ fontSize: '0.75rem', color: '#dc2626', marginTop: '0.2rem', display: 'block' }}>{errors.runningAds}</span>}
                    </div>

                    {/* Monthly marketing budget range */}
                    <div>
                      <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--primary-light)', marginBottom: '0.35rem' }}>Monthly Budget Range *</label>
                      <select
                        name="budgetRange"
                        value={formData.budgetRange}
                        onChange={handleChange}
                        style={{
                          width: '100%',
                          padding: '0.75rem 1rem',
                          borderRadius: 'var(--radius-sm)',
                          border: `1px solid ${errors.budgetRange ? '#dc2626' : 'var(--border)'}`,
                          outline: 'none',
                          fontSize: '0.95rem',
                          fontFamily: 'var(--font-sans)',
                          backgroundColor: 'var(--bg-soft)',
                        }}
                      >
                        <option value="">Select budget</option>
                        <option value="Below ₹25,000">Below ₹25,000</option>
                        <option value="₹25,000–₹50,000">₹25,000–₹50,000</option>
                        <option value="₹50,000–₹1,00,000">₹50,000–₹1,00,000</option>
                        <option value="₹1,00,000+">₹1,00,000+</option>
                      </select>
                      {errors.budgetRange && <span style={{ fontSize: '0.75rem', color: '#dc2626', marginTop: '0.2rem', display: 'block' }}>{errors.budgetRange}</span>}
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--primary-light)', marginBottom: '0.35rem' }}>Message (Optional)</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Specify any special problems (e.g. low quality calls, specific competitor in town)"
                      rows="3"
                      style={{
                        width: '100%',
                        padding: '0.75rem 1rem',
                        borderRadius: 'var(--radius-sm)',
                        border: '1px solid var(--border)',
                        outline: 'none',
                        fontSize: '0.95rem',
                        fontFamily: 'var(--font-sans)',
                        backgroundColor: 'var(--bg-soft)',
                        resize: 'none'
                      }}
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn btn-dark"
                    style={{
                      width: '100%',
                      padding: '1rem',
                      fontSize: '1.05rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginTop: '0.5rem',
                      opacity: isSubmitting ? 0.8 : 1,
                      cursor: isSubmitting ? 'not-allowed' : 'pointer'
                    }}
                  >
                    {isSubmitting ? (
                      <>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ animation: 'spin 1s linear infinite', marginRight: '0.5rem' }}>
                          <line x1="12" y1="2" x2="12" y2="6"></line>
                          <line x1="12" y1="18" x2="12" y2="22"></line>
                          <line x1="4.93" y1="4.93" x2="7.76" y2="7.76"></line>
                          <line x1="16.24" y1="16.24" x2="19.07" y2="19.07"></line>
                          <line x1="2" y1="12" x2="6" y2="12"></line>
                          <line x1="18" y1="12" x2="22" y2="12"></line>
                          <line x1="4.93" y1="19.07" x2="7.76" y2="16.24"></line>
                          <line x1="16.24" y1="7.76" x2="19.07" y2="4.93"></line>
                        </svg>
                        Preparing Audit Report...
                      </>
                    ) : (
                      "Send My Free Audit"
                    )}
                  </button>
                </form>
              ) : (
                /* Success Message Screen */
                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  textAlign: 'center',
                  height: '100%',
                  padding: '2rem 1rem',
                  animation: 'fadeIn 0.5s ease forwards'
                }}>
                  <div style={{
                    width: '64px',
                    height: '64px',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(14, 165, 233, 0.1)',
                  color: 'var(--cyan)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '1.5rem'
                  }}>
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  
                  <h3 style={{ fontSize: '1.5rem', color: 'var(--primary)', marginBottom: '1rem', fontWeight: 800 }}>
                    Audit Request Sent!
                  </h3>
                  
                  <p style={{ fontSize: '1.02rem', color: 'var(--text-main)', lineHeight: 1.6, marginBottom: '2rem' }}>
                    Thank you. Our team will review your IVF clinic’s online presence and share key improvement points with you on WhatsApp.
                  </p>

                  <div style={{
                    backgroundColor: 'rgba(14, 165, 233, 0.04)',
                    border: '1px solid rgba(14, 165, 233, 0.15)',
                    borderRadius: 'var(--radius-md)',
                    padding: '1rem',
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem',
                    textAlign: 'left'
                  }}>
                    <div style={{ color: 'var(--cyan)' }}>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                      </svg>
                    </div>
                    <span style={{ fontSize: '0.82rem', color: 'var(--text-muted)', fontWeight: 500 }}>
                      Expect a custom analysis of <strong style={{ color: 'var(--primary)' }}>@{formData.instagram.replace(/.*instagram.com\//, '')}</strong> within 24 hours.
                    </span>
                  </div>

                  <button
                    onClick={() => {
                      setIsSuccess(false);
                      setFormData({
                        clinicName: '',
                        city: '',
                        name: '',
                        whatsapp: '',
                        instagram: '',
                        runningAds: '',
                        budgetRange: '',
                        message: '',
                      });
                    }}
                    className="btn btn-outline"
                    style={{ marginTop: '2rem', padding: '0.65rem 1.5rem', fontSize: '0.9rem' }}
                  >
                    Submit Another Clinic
                  </button>
                </div>
              )}

            </div>
          </div>

        </div>
      </div>

      <style>{`
        @media (min-width: 992px) {
          .form-grid {
            grid-template-columns: 1.15fr 0.85fr !important;
          }
        }
        @media (max-width: 576px) {
          .form-row-2 {
            grid-template-columns: 1fr !important;
          }
        }
        @keyframes spin {
          100% { transform: rotate(360deg); }
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
};

export default LeadForm;
