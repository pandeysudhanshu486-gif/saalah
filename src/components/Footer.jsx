import React from 'react';
import { Compass, ArrowUp, MessageSquare } from 'lucide-react';
import { InstagramIcon, LinkedInIcon, GitHubIcon } from './SocialIcons';
import { NAV_LINKS, COMMUNITY_INFO } from '../data/communityData';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      style={{
        backgroundColor: 'var(--forest-green-dark)',
        color: '#F8F5EE',
        paddingTop: '4.5rem',
        paddingBottom: '2.5rem',
        borderTop: '1px solid rgba(255, 255, 255, 0.08)',
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '3rem',
            paddingBottom: '3rem',
            borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
          }}
        >
          {/* Column 1: Brand & Wordmark */}
          <div style={{ maxWidth: '340px' }}>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.65rem',
                marginBottom: '1rem',
              }}
            >
              <div
                style={{
                  width: '34px',
                  height: '34px',
                  borderRadius: '10px',
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Compass size={20} color="#F07861" />
              </div>
              <span
                style={{
                  fontSize: '1.4rem',
                  fontWeight: 800,
                  letterSpacing: '-0.03em',
                  fontFamily: 'var(--font-sans)',
                  color: '#FFFFFF',
                }}
              >
                Salaah<span style={{ color: 'var(--coral)' }}>.</span>
              </span>
            </div>

            <p
              style={{
                fontSize: '0.9rem',
                color: 'rgba(248, 245, 238, 0.72)',
                lineHeight: 1.65,
                marginBottom: '1.5rem',
              }}
            >
              A student-led mentor community created to encourage shared learning,
              peer guidance, and collaborative project building without gatekeeping.
            </p>

            {/* Social Placeholder Icons */}
            <div style={{ display: 'flex', gap: '0.75rem' }}>
              <a
                href={COMMUNITY_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram (Placeholder)"
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '8px',
                  backgroundColor: 'rgba(255, 255, 255, 0.06)',
                  color: '#F8F5EE',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'all 0.2s ease',
                  textDecoration: 'none',
                }}
                className="social-btn"
              >
                <InstagramIcon size={17} />
              </a>

              <a
                href={COMMUNITY_INFO.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn (Placeholder)"
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '8px',
                  backgroundColor: 'rgba(255, 255, 255, 0.06)',
                  color: '#F8F5EE',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'all 0.2s ease',
                  textDecoration: 'none',
                }}
                className="social-btn"
              >
                <LinkedInIcon size={17} />
              </a>

              <a
                href={COMMUNITY_INFO.discordUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Discord Community (Placeholder)"
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '8px',
                  backgroundColor: 'rgba(255, 255, 255, 0.06)',
                  color: '#F8F5EE',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'all 0.2s ease',
                  textDecoration: 'none',
                }}
                className="social-btn"
              >
                <MessageSquare size={17} />
              </a>

              <a
                href={COMMUNITY_INFO.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub (Placeholder)"
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '8px',
                  backgroundColor: 'rgba(255, 255, 255, 0.06)',
                  color: '#F8F5EE',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'all 0.2s ease',
                  textDecoration: 'none',
                }}
                className="social-btn"
              >
                <GitHubIcon size={17} />
              </a>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div>
            <h4
              style={{
                fontSize: '0.85rem',
                fontWeight: 700,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: 'var(--coral)',
                marginBottom: '1.25rem',
              }}
            >
              Navigation
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    style={{
                      color: 'rgba(248, 245, 238, 0.8)',
                      textDecoration: 'none',
                      fontSize: '0.9rem',
                      transition: 'color 0.2s ease',
                    }}
                    className="footer-nav-link"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Values & Core Beliefs */}
          <div>
            <h4
              style={{
                fontSize: '0.85rem',
                fontWeight: 700,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: 'var(--coral)',
                marginBottom: '1.25rem',
              }}
            >
              Community Pillars
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <li style={{ fontSize: '0.9rem', color: 'rgba(248, 245, 238, 0.8)' }}>
                • Learn Together (Skill Mastery)
              </li>
              <li style={{ fontSize: '0.9rem', color: 'rgba(248, 245, 238, 0.8)' }}>
                • Grow Together (Personal Support)
              </li>
              <li style={{ fontSize: '0.9rem', color: 'rgba(248, 245, 238, 0.8)' }}>
                • Build Together (Hands-on Projects)
              </li>
              <li style={{ fontSize: '0.9rem', color: 'rgba(248, 245, 238, 0.8)' }}>
                • Accessible Peer Mentorship
              </li>
            </ul>
          </div>

          {/* Column 4: Quick Top Action */}
          <div>
            <h4
              style={{
                fontSize: '0.85rem',
                fontWeight: 700,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: 'var(--coral)',
                marginBottom: '1.25rem',
              }}
            >
              Initiative Info
            </h4>
            <p
              style={{
                fontSize: '0.825rem',
                color: 'rgba(248, 245, 238, 0.65)',
                lineHeight: 1.6,
                marginBottom: '1.25rem',
              }}
            >
              Initial student cohort organizing in progress. All trademarks, names, and activities remain community-run proposals.
            </p>
            <button
              type="button"
              onClick={scrollToTop}
              className="btn btn-outline-white btn-sm"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
              }}
            >
              <span>Back to Top</span>
              <ArrowUp size={14} />
            </button>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Attribution */}
        <div
          style={{
            paddingTop: '2rem',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1rem',
            fontSize: '0.825rem',
            color: 'rgba(248, 245, 238, 0.6)',
          }}
        >
          <div>
            © {currentYear} Salaah – The Mentor Community. All rights reserved.
          </div>
          <div style={{ fontStyle: 'italic', fontFamily: 'var(--font-serif)' }}>
            Designed for genuine student growth & mentorship.
          </div>
        </div>
      </div>

      <style>{`
        .footer-nav-link:hover {
          color: var(--coral) !important;
        }
        .social-btn:hover {
          background-color: var(--coral) !important;
          color: #FFFFFF !important;
          transform: translateY(-2px);
        }
      `}</style>
    </footer>
  );
}
