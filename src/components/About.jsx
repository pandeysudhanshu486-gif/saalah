import React from 'react';
import { Compass, Lightbulb, Users, ShieldCheck, Sparkles } from 'lucide-react';
import ImageWithFallback from './ImageWithFallback';

export default function About() {
  const pillars = [
    {
      icon: Users,
      title: 'Peer-to-Peer Learning',
      desc: 'Learn directly from peers who navigated the same classes, projects, and interviews recently.'
    },
    {
      icon: Compass,
      title: 'Empathetic Mentorship',
      desc: 'Ask questions without hesitation. Mentorship here is grounded in kindness, humility, and accessibility.'
    },
    {
      icon: Lightbulb,
      title: 'Confidence Through Action',
      desc: 'Move past imposter syndrome by discussing ideas, presenting work in safe pods, and shipping projects together.'
    },
    {
      icon: ShieldCheck,
      title: 'Curated Opportunities',
      desc: 'Discover internships, open-source initiatives, hackathon teams, and workshops that truly matter.'
    }
  ];

  return (
    <section id="about" className="section section-alt">
      <div className="container">
        {/* Two-column layout with image and concise text */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: 'clamp(2.5rem, 6vw, 5rem)',
            alignItems: 'center',
          }}
        >
          {/* Visual Column */}
          <div style={{ order: 2 }} className="about-visual-col">
            <div
              style={{
                position: 'relative',
                borderRadius: 'var(--radius-xl)',
                overflow: 'hidden',
                backgroundColor: 'var(--bg-card)',
                padding: '0.75rem',
                border: '1px solid var(--border-light)',
                boxShadow: 'var(--shadow-md)',
              }}
            >
              <div style={{ borderRadius: 'calc(var(--radius-xl) - 0.5rem)', overflow: 'hidden' }}>
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80"
                  alt="A group of students smiling and sharing ideas around a laptop"
                  aspectRatio="4/3"
                  fallbackType="learning"
                  overlayBadge="Open Mentorship Culture"
                />
              </div>

              {/* Editorial Quote Callout */}
              <div
                style={{
                  marginTop: '0.75rem',
                  padding: '1.25rem 1.5rem',
                  backgroundColor: 'var(--bg-cream)',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid var(--border-light)',
                }}
              >
                <p
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontStyle: 'italic',
                    fontSize: '1.05rem',
                    color: 'var(--forest-green)',
                    lineHeight: 1.5,
                    marginBottom: '0.5rem',
                  }}
                >
                  “The hardest part of college is rarely the difficulty of the material — it’s navigating the uncertainty alone.”
                </p>
                <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                  The Salaah Philosophy
                </div>
              </div>
            </div>
          </div>

          {/* Text Column */}
          <div style={{ order: 1 }} className="about-text-col">
            <div className="badge-pill" style={{ marginBottom: '1.25rem' }}>
              <Sparkles size={13} color="var(--coral)" />
              <span>About Salaah</span>
            </div>

            <h2
              className="section-title"
              style={{
                marginTop: 0,
                marginBottom: '1.25rem',
                textAlign: 'left',
              }}
            >
              More than a club.{' '}
              <span className="italic-accent">A space to grow.</span>
            </h2>

            <p
              style={{
                fontSize: '1.05rem',
                color: 'var(--text-secondary)',
                lineHeight: 1.7,
                marginBottom: '1.5rem',
              }}
            >
              Traditional student clubs often prioritize hierarchies, attendance checklists, or exclusive barriers. <strong>Salaah</strong> was imagined differently: as a collaborative sanctuary where students at every stage can connect, seek guidance, exchange insights, and build together.
            </p>

            <p
              style={{
                fontSize: '1.05rem',
                color: 'var(--text-secondary)',
                lineHeight: 1.7,
                marginBottom: '2.5rem',
              }}
            >
              Whether you need feedback on your first portfolio, advice on preparing for internship interviews, or trusted peers to collaborate on a hackathon project, Salaah gives you the support system you need to thrive.
            </p>

            {/* Pillar Grid */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
                gap: '1.25rem',
              }}
            >
              {pillars.map((pillar, idx) => {
                const IconComponent = pillar.icon;
                return (
                  <div
                    key={idx}
                    style={{
                      padding: '1.15rem',
                      borderRadius: 'var(--radius-md)',
                      backgroundColor: 'var(--bg-card)',
                      border: '1px solid var(--border-light)',
                      transition: 'transform 0.2s ease, border-color 0.2s ease',
                    }}
                    className="card-base"
                  >
                    <div
                      style={{
                        width: '34px',
                        height: '34px',
                        borderRadius: '8px',
                        backgroundColor: 'var(--forest-green-subtle)',
                        color: 'var(--forest-green)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginBottom: '0.75rem',
                      }}
                    >
                      <IconComponent size={18} />
                    </div>
                    <h3
                      style={{
                        fontSize: '0.95rem',
                        fontWeight: 700,
                        color: 'var(--forest-green)',
                        marginBottom: '0.35rem',
                      }}
                    >
                      {pillar.title}
                    </h3>
                    <p
                      style={{
                        fontSize: '0.825rem',
                        color: 'var(--text-secondary)',
                        lineHeight: 1.5,
                      }}
                    >
                      {pillar.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
