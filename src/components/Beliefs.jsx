import React from 'react';
import { BookOpenCheck, Compass, Boxes, Sparkles } from 'lucide-react';
import { BELIEFS } from '../data/communityData';

export default function Beliefs() {
  const getIcon = (iconName) => {
    switch (iconName) {
      case 'BookOpenCheck':
        return <BookOpenCheck size={28} strokeWidth={2.2} />;
      case 'Compass':
        return <Compass size={28} strokeWidth={2.2} />;
      case 'Boxes':
        return <Boxes size={28} strokeWidth={2.2} />;
      default:
        return <Sparkles size={28} strokeWidth={2.2} />;
    }
  };

  return (
    <section id="beliefs" className="section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="badge-pill" style={{ marginBottom: '1rem' }}>
            <span>Core Values</span>
          </div>
          <h2 className="section-title">
            What We <span className="italic-accent">Believe</span>
          </h2>
          <p className="section-subtitle">
            Our community is anchored in three guiding principles designed to turn
            individual ambitions into collective momentum.
          </p>
        </div>

        {/* 3 Value Cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: 'clamp(1.5rem, 2.5vw, 2.25rem)',
          }}
        >
          {BELIEFS.map((belief, idx) => (
            <div
              key={belief.id}
              className="card-base belief-card"
              style={{
                padding: 'clamp(2rem, 3.5vw, 2.5rem)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                position: 'relative',
                overflow: 'hidden',
                backgroundColor: 'var(--bg-card)',
                borderRadius: 'var(--radius-xl)',
                border: '1px solid var(--border-light)',
              }}
            >
              {/* Subtle decorative card corner number */}
              <span
                style={{
                  position: 'absolute',
                  top: '1.5rem',
                  right: '1.75rem',
                  fontFamily: 'var(--font-serif)',
                  fontSize: '2rem',
                  fontWeight: 600,
                  color: 'rgba(23, 61, 50, 0.08)',
                  lineHeight: 1,
                  userSelect: 'none',
                }}
              >
                0{idx + 1}
              </span>

              <div>
                {/* Icon Container */}
                <div
                  style={{
                    width: '60px',
                    height: '60px',
                    borderRadius: '16px',
                    backgroundColor: idx === 1 ? 'var(--coral-light)' : 'var(--forest-green-subtle)',
                    color: idx === 1 ? 'var(--coral)' : 'var(--forest-green)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '1.75rem',
                    boxShadow: 'inset 0 0 0 1px rgba(23, 61, 50, 0.06)',
                  }}
                  className="belief-icon-box"
                >
                  {getIcon(belief.icon)}
                </div>

                {/* Tag Badge */}
                <span
                  style={{
                    display: 'inline-block',
                    fontSize: '0.72rem',
                    fontWeight: 700,
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    color: 'var(--coral)',
                    marginBottom: '0.75rem',
                  }}
                >
                  {belief.tag}
                </span>

                {/* Card Title */}
                <h3
                  style={{
                    fontSize: '1.5rem',
                    fontWeight: 800,
                    color: 'var(--forest-green)',
                    letterSpacing: '-0.02em',
                    marginBottom: '0.5rem',
                  }}
                >
                  {belief.title}
                </h3>

                {/* Subtitle */}
                <h4
                  style={{
                    fontSize: '0.925rem',
                    fontWeight: 600,
                    color: 'var(--text-muted)',
                    marginBottom: '1.25rem',
                    fontFamily: 'var(--font-serif)',
                    fontStyle: 'italic',
                  }}
                >
                  {belief.subtitle}
                </h4>

                {/* Description */}
                <p
                  style={{
                    fontSize: '0.95rem',
                    color: 'var(--text-secondary)',
                    lineHeight: 1.65,
                  }}
                >
                  {belief.description}
                </p>
              </div>

              {/* Card Footer accent line */}
              <div
                style={{
                  marginTop: '2rem',
                  paddingTop: '1.25rem',
                  borderTop: '1px solid var(--border-light)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}
              >
                <span
                  style={{
                    fontSize: '0.8rem',
                    fontWeight: 600,
                    color: 'var(--forest-green)',
                  }}
                >
                  Explore Pillar
                </span>
                <span
                  style={{
                    color: 'var(--coral)',
                    fontWeight: 700,
                    fontSize: '1.1rem',
                    transition: 'transform 0.2s ease',
                  }}
                  className="belief-arrow"
                >
                  →
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .belief-card:hover .belief-arrow {
          transform: translateX(4px);
        }
        .belief-card:hover .belief-icon-box {
          transform: scale(1.05);
          transition: transform 0.2s ease;
        }
      `}</style>
    </section>
  );
}
