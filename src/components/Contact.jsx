import React, { useState } from 'react';
import { Mail, Send, AlertCircle, Info, CheckCircle } from 'lucide-react';
import { InstagramIcon, LinkedInIcon } from './SocialIcons';
import { COMMUNITY_INFO } from '../data/communityData';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [submittedStatus, setSubmittedStatus] = useState(null); // 'demo_received' | null
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Please provide your full name.';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters.';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Please provide your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Please provide a valid email format (e.g., student@university.edu).';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please write a message or inquiry.';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters long.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear field-specific error as user types
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate standard frontend interaction without claiming a fake real backend delivery
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmittedStatus('demo_received');
    }, 400);
  };

  const handleReset = () => {
    setSubmittedStatus(null);
    setFormData({ name: '', email: '', message: '' });
    setErrors({});
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="badge-pill" style={{ marginBottom: '1rem' }}>
            <span>Get in Touch</span>
          </div>
          <h2 className="section-title">
            Have Questions? <span className="italic-accent">Reach Out</span>
          </h2>
          <p className="section-subtitle">
            Whether you want to partner on a campus event, inquire about upcoming circles,
            or simply say hello, we’d love to hear from you.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: 'clamp(2rem, 5vw, 4rem)',
            alignItems: 'flex-start',
          }}
        >
          {/* Contact Details & Social Placeholders */}
          <div>
            <div
              className="card-base"
              style={{
                padding: 'clamp(1.75rem, 4vw, 2.5rem)',
                borderRadius: 'var(--radius-xl)',
                backgroundColor: 'var(--bg-card)',
                marginBottom: '1.5rem',
              }}
            >
              <h3
                style={{
                  fontSize: '1.35rem',
                  fontWeight: 700,
                  color: 'var(--forest-green)',
                  marginBottom: '1.25rem',
                }}
              >
                Community Contact Channels
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                {/* Email Channel */}
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                  <div
                    style={{
                      width: '44px',
                      height: '44px',
                      borderRadius: '12px',
                      backgroundColor: 'var(--forest-green-subtle)',
                      color: 'var(--forest-green)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    <Mail size={20} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                      Email Inquiries (Placeholder)
                    </div>
                    <a
                      href={`mailto:${COMMUNITY_INFO.email}`}
                      style={{
                        fontSize: '1rem',
                        fontWeight: 600,
                        color: 'var(--forest-green)',
                        textDecoration: 'none',
                        wordBreak: 'break-all',
                      }}
                    >
                      {COMMUNITY_INFO.email}
                    </a>
                  </div>
                </div>

                {/* Instagram Channel */}
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                  <div
                    style={{
                      width: '44px',
                      height: '44px',
                      borderRadius: '12px',
                      backgroundColor: 'var(--coral-light)',
                      color: 'var(--coral)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    <InstagramIcon size={20} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                      Instagram Community (Placeholder)
                    </div>
                    <a
                      href={COMMUNITY_INFO.instagramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        fontSize: '1rem',
                        fontWeight: 600,
                        color: 'var(--forest-green)',
                        textDecoration: 'none',
                      }}
                    >
                      {COMMUNITY_INFO.instagramHandle}
                    </a>
                  </div>
                </div>

                {/* LinkedIn Channel */}
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                  <div
                    style={{
                      width: '44px',
                      height: '44px',
                      borderRadius: '12px',
                      backgroundColor: 'rgba(23, 61, 50, 0.08)',
                      color: 'var(--forest-green)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    <LinkedInIcon size={20} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                      Professional Network
                    </div>
                    <a
                      href={COMMUNITY_INFO.linkedinUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        fontSize: '1rem',
                        fontWeight: 600,
                        color: 'var(--forest-green)',
                        textDecoration: 'none',
                      }}
                    >
                      Salaah Mentorship Network
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Note Box */}
            <div
              style={{
                backgroundColor: 'rgba(23, 61, 50, 0.04)',
                border: '1px solid var(--border-light)',
                borderRadius: 'var(--radius-lg)',
                padding: '1.25rem',
                fontSize: '0.825rem',
                color: 'var(--text-secondary)',
                lineHeight: 1.6,
              }}
            >
              <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.35rem', color: 'var(--forest-green)', fontWeight: 700 }}>
                <Info size={16} />
                <span>Notice for Official Representatives</span>
              </div>
              Official handles and club email will be linked directly to your campus registration domain once confirmed.
            </div>
          </div>

          {/* Contact Form with Basic Frontend Validation */}
          <div
            className="card-base"
            style={{
              padding: 'clamp(1.75rem, 4vw, 2.5rem)',
              borderRadius: 'var(--radius-xl)',
              backgroundColor: 'var(--bg-card)',
            }}
          >
            {/* Clear Prompt-Mandated Disclaimer: Demo Only */}
            <div
              style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '0.65rem',
                backgroundColor: '#FFF8E6',
                border: '1px solid #FFE6A3',
                borderRadius: 'var(--radius-sm)',
                padding: '0.75rem 1rem',
                marginBottom: '1.75rem',
                fontSize: '0.8rem',
                color: '#7A5B00',
                lineHeight: 1.5,
              }}
            >
              <AlertCircle size={17} style={{ flexShrink: 0, marginTop: '2px' }} />
              <div>
                <strong>Frontend Demo:</strong> This form validates your input in the browser. Since no backend server is currently connected, messages are not transmitted over the network.
              </div>
            </div>

            {submittedStatus === 'demo_received' ? (
              <div
                style={{
                  textAlign: 'center',
                  padding: '2rem 1rem',
                }}
              >
                <div
                  style={{
                    width: '56px',
                    height: '56px',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(23, 61, 50, 0.1)',
                    color: 'var(--forest-green)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 1.25rem auto',
                  }}
                >
                  <CheckCircle size={32} />
                </div>
                <h3
                  style={{
                    fontSize: '1.3rem',
                    fontWeight: 700,
                    color: 'var(--forest-green)',
                    marginBottom: '0.5rem',
                  }}
                >
                  Validation Passed (Demo)
                </h3>
                <p
                  style={{
                    fontSize: '0.9rem',
                    color: 'var(--text-secondary)',
                    marginBottom: '1.5rem',
                    lineHeight: 1.6,
                  }}
                >
                  Thank you, <strong>{formData.name}</strong>. Your form inputs have passed local validation. Once the production email API is attached, this will dispatch directly to the Salaah inbox.
                </p>
                <button
                  type="button"
                  onClick={handleReset}
                  className="btn btn-secondary btn-sm"
                >
                  Send another inquiry (Demo)
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                {/* Name Field */}
                <div style={{ marginBottom: '1.25rem' }}>
                  <label
                    htmlFor="contact-name"
                    style={{
                      display: 'block',
                      fontSize: '0.85rem',
                      fontWeight: 600,
                      color: 'var(--forest-green)',
                      marginBottom: '0.4rem',
                    }}
                  >
                    Your Full Name <span style={{ color: 'var(--coral)' }}>*</span>
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Alex Rivera"
                    style={{
                      width: '100%',
                      padding: '0.75rem 1rem',
                      fontSize: '0.95rem',
                      borderRadius: 'var(--radius-sm)',
                      border: errors.name ? '1.5px solid #E53E3E' : '1px solid var(--border-light)',
                      backgroundColor: 'var(--bg-card-subtle)',
                      color: 'var(--text-primary)',
                      outline: 'none',
                      transition: 'border-color 0.2s ease',
                    }}
                    aria-invalid={errors.name ? 'true' : 'false'}
                    aria-describedby={errors.name ? 'name-error' : undefined}
                  />
                  {errors.name && (
                    <span
                      id="name-error"
                      style={{ display: 'block', fontSize: '0.78rem', color: '#E53E3E', marginTop: '0.3rem' }}
                    >
                      {errors.name}
                    </span>
                  )}
                </div>

                {/* Email Field */}
                <div style={{ marginBottom: '1.25rem' }}>
                  <label
                    htmlFor="contact-email"
                    style={{
                      display: 'block',
                      fontSize: '0.85rem',
                      fontWeight: 600,
                      color: 'var(--forest-green)',
                      marginBottom: '0.4rem',
                    }}
                  >
                    Student / Personal Email <span style={{ color: 'var(--coral)' }}>*</span>
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="e.g. alex@student.edu"
                    style={{
                      width: '100%',
                      padding: '0.75rem 1rem',
                      fontSize: '0.95rem',
                      borderRadius: 'var(--radius-sm)',
                      border: errors.email ? '1.5px solid #E53E3E' : '1px solid var(--border-light)',
                      backgroundColor: 'var(--bg-card-subtle)',
                      color: 'var(--text-primary)',
                      outline: 'none',
                      transition: 'border-color 0.2s ease',
                    }}
                    aria-invalid={errors.email ? 'true' : 'false'}
                    aria-describedby={errors.email ? 'email-error' : undefined}
                  />
                  {errors.email && (
                    <span
                      id="email-error"
                      style={{ display: 'block', fontSize: '0.78rem', color: '#E53E3E', marginTop: '0.3rem' }}
                    >
                      {errors.email}
                    </span>
                  )}
                </div>

                {/* Message Field */}
                <div style={{ marginBottom: '1.5rem' }}>
                  <label
                    htmlFor="contact-message"
                    style={{
                      display: 'block',
                      fontSize: '0.85rem',
                      fontWeight: 600,
                      color: 'var(--forest-green)',
                      marginBottom: '0.4rem',
                    }}
                  >
                    Message or Question <span style={{ color: 'var(--coral)' }}>*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="What would you like to ask or share with the Salaah team?"
                    style={{
                      width: '100%',
                      padding: '0.75rem 1rem',
                      fontSize: '0.95rem',
                      borderRadius: 'var(--radius-sm)',
                      border: errors.message ? '1.5px solid #E53E3E' : '1px solid var(--border-light)',
                      backgroundColor: 'var(--bg-card-subtle)',
                      color: 'var(--text-primary)',
                      fontFamily: 'inherit',
                      outline: 'none',
                      resize: 'vertical',
                      transition: 'border-color 0.2s ease',
                    }}
                    aria-invalid={errors.message ? 'true' : 'false'}
                    aria-describedby={errors.message ? 'message-error' : undefined}
                  />
                  {errors.message && (
                    <span
                      id="message-error"
                      style={{ display: 'block', fontSize: '0.78rem', color: '#E53E3E', marginTop: '0.3rem' }}
                    >
                      {errors.message}
                    </span>
                  )}
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn btn-primary"
                  style={{ width: '100%' }}
                >
                  {isSubmitting ? (
                    <span>Validating...</span>
                  ) : (
                    <>
                      <span>Submit Inquiry (Demo)</span>
                      <Send size={16} />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
