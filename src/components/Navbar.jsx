import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Compass } from 'lucide-react';
import { NAV_LINKS, OFFICIAL_REGISTRATION_URL } from '../data/communityData';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  // Detect scroll to style navbar with subtle glassmorphism
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Section intersection highlight
      const sections = ['hero', 'about', 'community', 'opportunities', 'contact'];
      const current = sections.find(id => {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          return rect.top <= 140 && rect.bottom >= 140;
        }
        return false;
      });
      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetId = href.replace('#', '');
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
      // Update URL hash without jumping
      window.history.pushState(null, '', href);
    }
  };

  return (
    <>
      <header
        className={`navbar-header ${scrolled ? 'navbar-scrolled' : ''}`}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          transition: 'all 0.25s ease',
          backgroundColor: scrolled ? 'rgba(248, 245, 238, 0.92)' : 'rgba(248, 245, 238, 0.8)',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          borderBottom: scrolled ? '1px solid rgba(23, 61, 50, 0.08)' : '1px solid transparent',
          boxShadow: scrolled ? '0 4px 20px rgba(23, 61, 50, 0.03)' : 'none',
        }}
      >
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '76px' }}>
          {/* Salaah Wordmark / Logo */}
          <a
            href="#hero"
            onClick={(e) => handleLinkClick(e, '#hero')}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.65rem',
              textDecoration: 'none',
              color: 'var(--forest-green)',
            }}
            aria-label="Salaah Home"
          >
            <div
              style={{
                width: '36px',
                height: '36px',
                borderRadius: '10px',
                backgroundColor: 'var(--forest-green)',
                color: '#F8F5EE',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 2px 8px rgba(23, 61, 50, 0.2)',
              }}
            >
              <Compass size={20} strokeWidth={2.3} color="#F07861" />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span
                style={{
                  fontSize: '1.35rem',
                  fontWeight: 800,
                  letterSpacing: '-0.03em',
                  lineHeight: 1.1,
                  fontFamily: 'var(--font-sans)',
                }}
              >
                Salaah<span style={{ color: 'var(--coral)' }}>.</span>
              </span>
              <span
                style={{
                  fontSize: '0.65rem',
                  fontWeight: 600,
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: 'var(--text-muted)',
                }}
              >
                The Mentor Community
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav
            aria-label="Main Navigation"
            style={{
              display: 'none',
              alignItems: 'center',
              gap: '1.8rem',
            }}
            className="desktop-nav"
          >
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  style={{
                    textDecoration: 'none',
                    fontSize: '0.925rem',
                    fontWeight: isActive ? 700 : 500,
                    color: isActive ? 'var(--forest-green)' : 'var(--text-secondary)',
                    position: 'relative',
                    padding: '0.4rem 0',
                    transition: 'color 0.2s ease',
                  }}
                  className="nav-link-item"
                >
                  {link.label}
                  {isActive && (
                    <span
                      style={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        right: 0,
                        height: '2px',
                        backgroundColor: 'var(--coral)',
                        borderRadius: '2px',
                      }}
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Desktop Action Button */}
          <div style={{ display: 'none', alignItems: 'center', gap: '1rem' }} className="desktop-actions">
            <a
              href="#join"
              onClick={(e) => handleLinkClick(e, '#join')}
              className="btn btn-primary btn-sm"
              style={{
                padding: '0.6rem 1.4rem',
              }}
            >
              Join Salaah
              <ArrowUpRight size={16} />
            </a>
          </div>

          {/* Mobile Hamburger Toggle */}
          <button
            type="button"
            className="mobile-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '42px',
              height: '42px',
              borderRadius: '10px',
              border: '1px solid var(--border-light)',
              backgroundColor: 'var(--bg-card)',
              color: 'var(--forest-green)',
              cursor: 'pointer',
            }}
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      {mobileMenuOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation"
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 999,
            backgroundColor: 'rgba(20, 34, 29, 0.65)',
            backdropFilter: 'blur(6px)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            paddingTop: '86px',
            paddingLeft: '1.25rem',
            paddingRight: '1.25rem',
          }}
          onClick={() => setMobileMenuOpen(false)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              backgroundColor: 'var(--bg-card)',
              borderRadius: 'var(--radius-lg)',
              border: '1px solid var(--border-light)',
              padding: '1.75rem',
              boxShadow: 'var(--shadow-lg)',
              display: 'flex',
              flexDirection: 'column',
              gap: '1.25rem',
              animation: 'drawerSlide 0.25s ease-out forwards',
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {NAV_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  style={{
                    padding: '0.75rem 1rem',
                    fontSize: '1.05rem',
                    fontWeight: 600,
                    color: 'var(--forest-green)',
                    textDecoration: 'none',
                    borderRadius: 'var(--radius-sm)',
                    backgroundColor: activeSection === link.href.replace('#', '') ? 'var(--forest-green-subtle)' : 'transparent',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}
                >
                  <span>{link.label}</span>
                  <span style={{ color: 'var(--coral)', fontSize: '0.8rem' }}>→</span>
                </a>
              ))}
            </div>

            <div style={{ borderTop: '1px solid var(--border-light)', paddingTop: '1.25rem' }}>
              <a
                href="#join"
                onClick={(e) => handleLinkClick(e, '#join')}
                className="btn btn-coral"
                style={{ width: '100%', justifyContent: 'center' }}
              >
                Join Salaah
                <ArrowUpRight size={18} />
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Responsive styles helper */}
      <style>{`
        @media (min-width: 820px) {
          .desktop-nav {
            display: flex !important;
          }
          .desktop-actions {
            display: flex !important;
          }
          .mobile-toggle {
            display: none !important;
          }
        }
        @keyframes drawerSlide {
          from {
            opacity: 0;
            transform: translateY(-12px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </>
  );
}
