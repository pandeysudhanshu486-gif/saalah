import React from 'react';
import { ArrowUpRight, Sparkles, CheckCircle2, ShieldAlert } from 'lucide-react';
import { OFFICIAL_REGISTRATION_URL } from '../data/communityData';

export default function JoinSection() {
  return (
    <section id="join" className="section section-alt" style={{ position: 'relative', overflow: 'hidden' }}>
      <div className="container">
        <div
          style={{
            backgroundColor: 'var(--forest-green)',
            color: '#FFFFFF',
            borderRadius: 'var(--radius-xl)',
            padding: 'clamp(2.5rem, 6vw, 4.5rem) clamp(1.5rem, 5vw, 3.5rem)',
            position: 'relative',
            overflow: 'hidden',
            boxShadow: 'var(--shadow-lg)',
            border: '1px solid rgba(255, 255, 255, 0.08)',
          }}
        >
          {/* Subtle background ornamentation */}
          <div
            aria-hidden="true"
            style={{
              position: 'absolute',
              top: '-20%',
              right: '-10%',
              width: '400px',
              height: '400px',
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(240, 120, 97, 0.18) 0%, rgba(23, 61, 50, 0) 70%)',
              pointerEvents: 'none',
            }}
          />

          <div
            style={{
              maxWidth: '720px',
              margin: '0 auto',
              textAlign: 'center',
              position: 'relative',
              zIndex: 1,
            }}
          >
            {/* Badge */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                borderRadius: 'var(--radius-pill)',
                padding: '0.4rem 1rem',
                fontSize: '0.75rem',
                fontWeight: 700,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: 'var(--coral)',
                marginBottom: '1.5rem',
              }}
            >
              <Sparkles size={14} color="var(--coral)" />
              <span>Membership Registration</span>
            </div>

            {/* Heading mandated in prompt */}
            <h2
              style={{
                fontSize: 'clamp(2.2rem, 4.2vw, 3.4rem)',
                fontWeight: 800,
                letterSpacing: '-0.025em',
                lineHeight: 1.15,
                color: '#FFFFFF',
                marginBottom: '1.25rem',
              }}
            >
              Your next chapter starts with a{' '}
              <span
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontStyle: 'italic',
                  fontWeight: 400,
                  color: 'var(--coral)',
                }}
              >
                conversation.
              </span>
            </h2>

            {/* Short Description */}
            <p
              style={{
                fontSize: 'clamp(1rem, 1.3vw, 1.15rem)',
                color: 'rgba(248, 245, 238, 0.85)',
                lineHeight: 1.65,
                marginBottom: '2.5rem',
                maxWidth: '600px',
                marginLeft: 'auto',
                marginRight: 'auto',
              }}
            >
              Step into an honest space where senior guidance is accessible, peer collaboration is the standard, and nobody has to navigate student life alone.
            </p>

            {/* Primary Action Button */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '1rem',
                marginBottom: '2rem',
              }}
            >
              <a
                href={OFFICIAL_REGISTRATION_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-coral btn-lg"
                style={{
                  padding: '1rem 2.5rem',
                  fontSize: '1.1rem',
                  fontWeight: 700,
                }}
              >
                Join Salaah
                <ArrowUpRight size={20} />
              </a>

              {/* Central URL Placeholder Note for transparency */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  fontSize: '0.75rem',
                  color: 'rgba(248, 245, 238, 0.65)',
                }}
              >
                <ShieldAlert size={13} color="rgba(248, 245, 238, 0.7)" />
                <span>
                  Opens placeholder registration portal (<code style={{ color: 'var(--coral)', background: 'rgba(0,0,0,0.2)', padding: '2px 4px', borderRadius: '4px' }}>src/data/communityData.js</code>)
                </span>
              </div>
            </div>

            {/* Highlights List */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center',
                gap: '1.5rem',
                paddingTop: '1.5rem',
                borderTop: '1px solid rgba(255, 255, 255, 0.12)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.825rem', color: '#F8F5EE' }}>
                <CheckCircle2 size={16} color="var(--coral)" />
                <span>Zero membership fees</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.825rem', color: '#F8F5EE' }}>
                <CheckCircle2 size={16} color="var(--coral)" />
                <span>Open to all majors & batches</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.825rem', color: '#F8F5EE' }}>
                <CheckCircle2 size={16} color="var(--coral)" />
                <span>No minimum prerequisite</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
