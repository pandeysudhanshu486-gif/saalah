import React from 'react';
import { ArrowRight, Compass, Users2, Sparkles, CheckCircle2 } from 'lucide-react';
import ImageWithFallback from './ImageWithFallback';

export default function Hero() {
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      style={{
        paddingTop: 'clamp(7.5rem, 12vw, 10rem)',
        paddingBottom: 'clamp(4rem, 8vw, 6.5rem)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Decorative ambient background accents (subtle, non-distracting) */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: '-10%',
          right: '-5%',
          width: '450px',
          height: '450px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(240, 120, 97, 0.08) 0%, rgba(248, 245, 238, 0) 70%)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          bottom: '5%',
          left: '-8%',
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(23, 61, 50, 0.05) 0%, rgba(248, 245, 238, 0) 70%)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: 'clamp(2.5rem, 5vw, 4.5rem)',
            alignItems: 'center',
          }}
        >
          {/* Left Column: Editorial Headline and Copy */}
          <div style={{ maxWidth: '620px' }}>
            {/* Small badge */}
            <div
              className="badge-pill"
              style={{
                marginBottom: '1.5rem',
                border: '1px solid rgba(23, 61, 50, 0.15)',
              }}
            >
              <span className="badge-dot" />
              <span>A COMMUNITY THAT GROWS TOGETHER</span>
            </div>

            {/* Main heading */}
            <h1
              style={{
                fontSize: 'clamp(2.5rem, 4.8vw, 3.85rem)',
                fontWeight: 800,
                lineHeight: 1.12,
                color: 'var(--forest-green)',
                letterSpacing: '-0.03em',
                marginBottom: '1.5rem',
              }}
            >
              Your growth journey deserves the{' '}
              <span
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontStyle: 'italic',
                  fontWeight: 400,
                  color: 'var(--coral)',
                  position: 'relative',
                  display: 'inline-block',
                }}
              >
                right people.
              </span>
            </h1>

            {/* Supporting text */}
            <p
              style={{
                fontSize: 'clamp(1.05rem, 1.35vw, 1.2rem)',
                color: 'var(--text-secondary)',
                lineHeight: 1.65,
                marginBottom: '2.25rem',
                maxWidth: '560px',
              }}
            >
              Salaah brings curious students together through intentional mentorship,
              candid peer learning, collaborative side-projects, and honest guidance.
              Find your circle, build confidence, and unlock new opportunities together.
            </p>

            {/* Action CTAs */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '1rem',
                alignItems: 'center',
                marginBottom: '2.75rem',
              }}
            >
              <button
                type="button"
                onClick={() => scrollToSection('join')}
                className="btn btn-primary btn-lg"
              >
                Become a Member
                <ArrowRight size={18} />
              </button>

              <button
                type="button"
                onClick={() => scrollToSection('community')}
                className="btn btn-secondary btn-lg"
              >
                Explore Community
              </button>
            </div>

            {/* Qualitative Highlights (No fabricated numbers) */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '1.5rem',
                paddingTop: '1.5rem',
                borderTop: '1px solid var(--border-light)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <CheckCircle2 size={18} color="var(--forest-green)" />
                <span style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                  Student-Led & Inclusive
                </span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <CheckCircle2 size={18} color="var(--forest-green)" />
                <span style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                  No Gatekeeping
                </span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <CheckCircle2 size={18} color="var(--coral)" />
                <span style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                  Free Community Cohorts
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Composition */}
          <div style={{ position: 'relative' }}>
            <div
              style={{
                position: 'relative',
                borderRadius: 'var(--radius-xl)',
                overflow: 'hidden',
                boxShadow: 'var(--shadow-lg)',
                border: '1px solid var(--border-light)',
                backgroundColor: 'var(--bg-card)',
                padding: '0.75rem',
              }}
            >
              <div style={{ borderRadius: 'calc(var(--radius-xl) - 0.5rem)', overflow: 'hidden' }}>
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80"
                  alt="Students engaged in collaborative mentorship discussion"
                  aspectRatio="4/3"
                  fallbackType="mentorship"
                  overlayBadge="Collaborative Learning Hub"
                />
              </div>

              {/* Floating Editorial Card 1: Mentorship Pod */}
              <div
                style={{
                  position: 'absolute',
                  top: '24px',
                  right: '-16px',
                  backgroundColor: 'var(--bg-card)',
                  borderRadius: 'var(--radius-md)',
                  padding: '0.85rem 1.15rem',
                  border: '1px solid var(--border-light)',
                  boxShadow: 'var(--shadow-md)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  maxWidth: '220px',
                }}
                className="floating-card-1"
              >
                <div
                  style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '8px',
                    backgroundColor: 'var(--coral-light)',
                    color: 'var(--coral)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  <Compass size={20} />
                </div>
                <div>
                  <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--forest-green)' }}>
                    Peer Mentorship
                  </div>
                  <div style={{ fontSize: '0.7rem', color: 'var(--text-secondary)' }}>
                    Senior-to-junior guidance
                  </div>
                </div>
              </div>

              {/* Floating Editorial Card 2: Shared Learning */}
              <div
                style={{
                  position: 'absolute',
                  bottom: '24px',
                  left: '-16px',
                  backgroundColor: 'var(--bg-card)',
                  borderRadius: 'var(--radius-md)',
                  padding: '0.85rem 1.15rem',
                  border: '1px solid var(--border-light)',
                  boxShadow: 'var(--shadow-md)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                }}
                className="floating-card-2"
              >
                <div
                  style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '8px',
                    backgroundColor: 'rgba(23, 61, 50, 0.08)',
                    color: 'var(--forest-green)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  <Users2 size={20} />
                </div>
                <div>
                  <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--forest-green)' }}>
                    Study & Build Circles
                  </div>
                  <div style={{ fontSize: '0.7rem', color: 'var(--text-secondary)' }}>
                    Real skills, real projects
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .floating-card-1, .floating-card-2 {
            display: none !important;
          }
        }
      `}</style>
    </section>
  );
}
