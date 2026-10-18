import React, { useState } from 'react';
import { Calendar, Users, Sparkles, Info, ArrowUpRight } from 'lucide-react';
import { ACTIVITIES } from '../data/communityData';
import ImageWithFallback from './ImageWithFallback';

export default function Activities() {
  const [activeTab, setActiveTab] = useState('all');

  const filteredActivities = activeTab === 'all'
    ? ACTIVITIES
    : ACTIVITIES.filter(act => act.id === activeTab);

  return (
    <section id="community" className="section section-alt">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="badge-pill" style={{ marginBottom: '1rem' }}>
            <Users size={13} color="var(--forest-green)" />
            <span>Community & Activities</span>
          </div>
          <h2 className="section-title">
            Where Ideas Turn Into <span className="italic-accent">Action</span>
          </h2>
          <p className="section-subtitle">
            Salaah brings structure to self-growth with interactive formats designed
            to foster genuine peer collaboration and shared curiosity.
          </p>

          {/* Prompt-mandated Illustrative Notice */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.6rem',
              marginTop: '1.25rem',
              padding: '0.5rem 1.15rem',
              backgroundColor: 'rgba(23, 61, 50, 0.05)',
              border: '1px dashed rgba(23, 61, 50, 0.22)',
              borderRadius: 'var(--radius-pill)',
              fontSize: '0.8rem',
              color: 'var(--text-secondary)',
            }}
          >
            <Info size={14} color="var(--forest-green)" />
            <span>
              <strong>Note:</strong> Illustrative community initiatives proposed for upcoming cohorts.
            </span>
          </div>
        </div>

        {/* Activity Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: 'clamp(1.5rem, 3vw, 2rem)',
          }}
        >
          {ACTIVITIES.map((activity) => (
            <div
              key={activity.id}
              className="card-base activity-card"
              style={{
                borderRadius: 'var(--radius-xl)',
                overflow: 'hidden',
                backgroundColor: 'var(--bg-card)',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              {/* Card Image with Fallback */}
              <div style={{ position: 'relative' }}>
                <ImageWithFallback
                  src={activity.image}
                  alt={activity.title}
                  aspectRatio="16/10"
                  fallbackType={activity.id === 'mentorship' ? 'mentorship' : 'learning'}
                />

                {/* Cadence Tag */}
                <div
                  style={{
                    position: 'absolute',
                    top: '12px',
                    left: '12px',
                    backgroundColor: 'rgba(23, 61, 50, 0.88)',
                    backdropFilter: 'blur(6px)',
                    color: '#F8F5EE',
                    padding: '4px 10px',
                    borderRadius: 'var(--radius-pill)',
                    fontSize: '0.72rem',
                    fontWeight: 600,
                    letterSpacing: '0.04em',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px',
                  }}
                >
                  <Calendar size={12} color="#F07861" />
                  {activity.cadence}
                </div>
              </div>

              {/* Card Content Body */}
              <div
                style={{
                  padding: '1.75rem',
                  display: 'flex',
                  flexDirection: 'column',
                  flexGrow: 1,
                  justifyContent: 'space-between',
                }}
              >
                <div>
                  <span
                    style={{
                      fontSize: '0.72rem',
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      letterSpacing: '0.06em',
                      color: 'var(--coral)',
                      display: 'block',
                      marginBottom: '0.4rem',
                    }}
                  >
                    {activity.category}
                  </span>

                  <h3
                    style={{
                      fontSize: '1.25rem',
                      fontWeight: 700,
                      color: 'var(--forest-green)',
                      letterSpacing: '-0.02em',
                      marginBottom: '0.6rem',
                    }}
                  >
                    {activity.title}
                  </h3>

                  <p
                    style={{
                      fontSize: '0.875rem',
                      color: 'var(--text-secondary)',
                      lineHeight: 1.6,
                      marginBottom: '1.25rem',
                    }}
                  >
                    {activity.description}
                  </p>
                </div>

                <div>
                  {/* Highlight pill */}
                  <div
                    style={{
                      backgroundColor: 'var(--bg-cream)',
                      border: '1px solid var(--border-light)',
                      borderRadius: 'var(--radius-sm)',
                      padding: '0.6rem 0.85rem',
                      fontSize: '0.78rem',
                      color: 'var(--forest-green)',
                      fontWeight: 600,
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.45rem',
                      marginBottom: '1rem',
                    }}
                  >
                    <Sparkles size={14} color="var(--coral)" />
                    <span>{activity.highlight}</span>
                  </div>

                  {/* Skill/Topic Tags */}
                  <div
                    style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: '0.4rem',
                    }}
                  >
                    {activity.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        style={{
                          fontSize: '0.7rem',
                          fontWeight: 500,
                          backgroundColor: 'var(--forest-green-subtle)',
                          color: 'var(--forest-green)',
                          padding: '0.2rem 0.6rem',
                          borderRadius: 'var(--radius-pill)',
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
