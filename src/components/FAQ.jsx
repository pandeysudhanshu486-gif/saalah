import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { FAQS } from '../data/communityData';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0); // first item open by default

  const toggleAccordion = (idx) => {
    setOpenIndex(openIndex === idx ? -1 : idx);
  };

  return (
    <section id="faq" className="section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="badge-pill" style={{ marginBottom: '1rem' }}>
            <HelpCircle size={13} color="var(--forest-green)" />
            <span>Got Questions?</span>
          </div>
          <h2 className="section-title">
            Frequently Asked <span className="italic-accent">Questions</span>
          </h2>
          <p className="section-subtitle">
            Everything you need to know about joining, participating, and growing
            with Salaah.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div
          style={{
            maxWidth: '760px',
            margin: '0 auto',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
          }}
        >
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="card-base"
                style={{
                  borderRadius: 'var(--radius-lg)',
                  overflow: 'hidden',
                  backgroundColor: 'var(--bg-card)',
                  border: isOpen ? '1px solid var(--forest-green-border)' : '1px solid var(--border-light)',
                  transition: 'border-color 0.2s ease, box-shadow 0.2s ease',
                }}
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(idx)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${idx}`}
                  id={`faq-question-${idx}`}
                  style={{
                    width: '100%',
                    padding: '1.4rem 1.75rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '1rem',
                    textAlign: 'left',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    color: 'var(--forest-green)',
                    fontFamily: 'inherit',
                  }}
                >
                  <span
                    style={{
                      fontSize: '1.05rem',
                      fontWeight: 700,
                      letterSpacing: '-0.01em',
                    }}
                  >
                    {faq.question}
                  </span>
                  <div
                    style={{
                      width: '30px',
                      height: '30px',
                      borderRadius: '50%',
                      backgroundColor: isOpen ? 'var(--forest-green)' : 'var(--forest-green-subtle)',
                      color: isOpen ? '#FFFFFF' : 'var(--forest-green)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      transition: 'all 0.25s ease',
                      transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                    }}
                  >
                    <ChevronDown size={17} />
                  </div>
                </button>

                {isOpen && (
                  <div
                    id={`faq-answer-${idx}`}
                    role="region"
                    aria-labelledby={`faq-question-${idx}`}
                    style={{
                      padding: '0 1.75rem 1.5rem 1.75rem',
                      fontSize: '0.925rem',
                      color: 'var(--text-secondary)',
                      lineHeight: 1.7,
                    }}
                  >
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
