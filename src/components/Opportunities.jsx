import React from 'react';
import { GraduationCap, Users, Sparkles, Rocket, ArrowRight, Check } from 'lucide-react';
import { OPPORTUNITIES } from '../data/communityData';

export default function Opportunities() {
  const getIcon = (iconName) => {
    switch (iconName) {
      case 'GraduationCap':
        return <GraduationCap size={22} />;
      case 'Users':
        return <Users size={22} />;
      case 'Sparkles':
        return <Sparkles size={22} />;
      case 'Rocket':
        return <Rocket size={22} />;
      default:
        return <Sparkles size={22} />;
    }
  };

  const scrollToJoin = () => {
    const el = document.getElementById('join');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="opportunities" className="section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="badge-pill" style={{ marginBottom: '1rem' }}>
            <span>Growth Pathways</span>
          </div>
          <h2 className="section-title">
            Ways to <span className="italic-accent">Contribute & Lead</span>
          </h2>
          <p className="section-subtitle">
            Salaah is built by students, for students. Whether you want to guide peers,
            facilitate discussions, or start an ambitious project, there is room for your voice.
          </p>
        </div>

        {/* Opportunities Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(270px, 1fr))',
            gap: '1.5rem',
            marginBottom: '3rem',
          }}
        >
          {OPPORTUNITIES.map((opp, idx) => (
            <div
              key={idx}
              className="card-base"
              style={{
                padding: '2rem',
                borderRadius: 'var(--radius-xl)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                backgroundColor: 'var(--bg-card)',
              }}
            >
              <div>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '1.25rem',
                  }}
                >
                  <div
                    style={{
                      width: '46px',
                      height: '46px',
                      borderRadius: '12px',
                      backgroundColor: 'var(--forest-green-subtle)',
                      color: 'var(--forest-green)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    {getIcon(opp.icon)}
                  </div>
                  <span
                    style={{
                      fontSize: '0.72rem',
                      fontWeight: 700,
                      color: 'var(--coral)',
                      backgroundColor: 'var(--coral-light)',
                      padding: '0.25rem 0.65rem',
                      borderRadius: 'var(--radius-pill)',
                    }}
                  >
                    {opp.badge}
                  </span>
                </div>

                <div
                  style={{
                    fontSize: '0.75rem',
                    fontWeight: 600,
                    textTransform: 'uppercase',
                    letterSpacing: '0.06em',
                    color: 'var(--text-muted)',
                    marginBottom: '0.35rem',
                  }}
                >
                  {opp.role}
                </div>

                <h3
                  style={{
                    fontSize: '1.2rem',
                    fontWeight: 700,
                    color: 'var(--forest-green)',
                    letterSpacing: '-0.02em',
                    marginBottom: '0.75rem',
                  }}
                >
                  {opp.title}
                </h3>

                <p
                  style={{
                    fontSize: '0.875rem',
                    color: 'var(--text-secondary)',
                    lineHeight: 1.6,
                  }}
                >
                  {opp.description}
                </p>
              </div>

              <div style={{ marginTop: '1.75rem', paddingTop: '1rem', borderTop: '1px solid var(--border-light)' }}>
                <button
                  type="button"
                  onClick={scrollToJoin}
                  style={{
                    background: 'none',
                    border: 'none',
                    padding: 0,
                    fontSize: '0.85rem',
                    fontWeight: 600,
                    color: 'var(--forest-green)',
                    cursor: 'pointer',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                  }}
                >
                  <span>Express Interest</span>
                  <ArrowRight size={14} color="var(--coral)" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Culture banner callout */}
        <div
          style={{
            backgroundColor: 'var(--forest-green)',
            color: 'var(--bg-cream)',
            borderRadius: 'var(--radius-xl)',
            padding: 'clamp(2rem, 4vw, 3rem)',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '2rem',
            alignItems: 'center',
            boxShadow: 'var(--shadow-lg)',
          }}
        >
          <div>
            <span
              style={{
                fontSize: '0.75rem',
                fontWeight: 700,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: 'var(--coral)',
                display: 'block',
                marginBottom: '0.5rem',
              }}
            >
              Inclusive Participation
            </span>
            <h3
              style={{
                fontSize: 'clamp(1.5rem, 2.2vw, 1.85rem)',
                fontWeight: 800,
                color: '#FFFFFF',
                letterSpacing: '-0.02em',
                marginBottom: '0.75rem',
              }}
            >
              You don’t need an extraordinary resume to join.
            </h3>
            <p
              style={{
                fontSize: '0.95rem',
                color: 'rgba(248, 245, 238, 0.85)',
                lineHeight: 1.6,
              }}
            >
              Growth happens when you show up with consistency and genuine curiosity. Everyone begins somewhere, and Salaah is built to be the supportive springboard.
            </p>
          </div>

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '0.75rem',
              backgroundColor: 'rgba(255, 255, 255, 0.06)',
              padding: '1.5rem',
              borderRadius: 'var(--radius-lg)',
              border: '1px solid rgba(255, 255, 255, 0.12)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <div style={{ width: '22px', height: '22px', borderRadius: '50%', backgroundColor: 'var(--coral)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Check size={13} color="#FFFFFF" strokeWidth={3} />
              </div>
              <span style={{ fontSize: '0.875rem', color: '#F8F5EE' }}>Open to undergraduate & postgraduate students</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <div style={{ width: '22px', height: '22px', borderRadius: '50%', backgroundColor: 'var(--coral)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Check size={13} color="#FFFFFF" strokeWidth={3} />
              </div>
              <span style={{ fontSize: '0.875rem', color: '#F8F5EE' }}>No prerequisites or entrance screening</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <div style={{ width: '22px', height: '22px', borderRadius: '50%', backgroundColor: 'var(--coral)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Check size={13} color="#FFFFFF" strokeWidth={3} />
              </div>
              <span style={{ fontSize: '0.875rem', color: '#F8F5EE' }}>Flexible commitments around academic exams</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
