'use client';

import { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X, ArrowUpRight, ArrowRight } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '@/components/Icons';

export default function Navbar() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
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

  // Close mobile menu on desktop resize or Escape key
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 900) {
        setMobileMenuOpen(false);
      }
    };
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(nextTheme);
    document.documentElement.setAttribute('data-theme', nextTheme);
  };

  const navLinks = [
    { num: '01', label: 'About', href: '#about' },
    { num: '02', label: 'Approach', href: '#approach' },
    { num: '03', label: 'Journey', href: '#journey' },
    { num: '04', label: 'Work', href: '#work' },
    { num: '05', label: 'Skills', href: '#skills' },
    { num: '06', label: 'Terminal', href: '#terminal' },
    { num: '07', label: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          transition: 'background-color 0.25s ease, border-color 0.25s ease',
          backgroundColor: scrolled || mobileMenuOpen
            ? 'var(--surface)'
            : 'transparent',
          borderBottom: scrolled || mobileMenuOpen
            ? '1.5px solid var(--border)'
            : '1.5px solid transparent',
          backdropFilter: scrolled || mobileMenuOpen ? 'blur(16px)' : 'none',
        }}
      >
        <nav
          className="container-pad"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            height: '4.25rem',
            width: '100%',
          }}
        >
          {/* Logo Mark */}
          <a
            href="#hero"
            onClick={handleLinkClick}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.65rem',
              textDecoration: 'none',
              color: 'var(--text)',
              flexShrink: 0,
            }}
          >
            <span
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '34px',
                height: '34px',
                backgroundColor: 'var(--text)',
                color: 'var(--bg)',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.85rem',
                fontWeight: 700,
                border: '1.5px solid var(--border)',
                boxShadow: '2px 2px 0px var(--accent)',
              }}
            >
              PR
            </span>
            <span
              className="logo-full-text"
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.82rem',
                fontWeight: 700,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
              }}
            >
              Pramod Ravisanka
            </span>
            <span
              className="logo-compact-text"
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.82rem',
                fontWeight: 700,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                display: 'none',
              }}
            >
              Pramod
            </span>
          </a>

          {/* Desktop Nav Items */}
          <div className="desktop-nav-container">
            <ul
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1.6rem',
                listStyle: 'none',
                margin: 0,
                padding: 0,
              }}
            >
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="nav-link-item"
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      letterSpacing: '0.12em',
                      color: 'var(--text-muted)',
                      textDecoration: 'none',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.25rem',
                      transition: 'color var(--transition-quick)',
                    }}
                  >
                    <span style={{ color: 'var(--accent)', opacity: 0.8 }}>/</span>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Action Cluster */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              aria-label="Toggle color theme"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '38px',
                height: '38px',
                backgroundColor: 'var(--surface)',
                border: '1.5px solid var(--border)',
                color: 'var(--text)',
                cursor: 'pointer',
                transition: 'all var(--transition-quick)',
                boxShadow: '1.5px 1.5px 0px var(--border)',
              }}
            >
              {theme === 'light' ? <Moon size={16} /> : <Sun size={16} />}
            </button>

            {/* Desktop "Get In Touch" Button */}
            <div className="desktop-cta-btn">
              <a
                href="#contact"
                className="btn-brutal"
                style={{
                  padding: '0.5rem 1rem',
                  fontSize: '0.75rem',
                  textDecoration: 'none',
                  whiteSpace: 'nowrap',
                }}
              >
                <span>Get In Touch</span>
                <ArrowUpRight size={14} />
              </a>
            </div>

            {/* Mobile Hamburger / Close Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? 'Close mobile menu' : 'Open mobile menu'}
              aria-expanded={mobileMenuOpen}
              className="mobile-burger-btn"
              style={{
                display: 'none',
                alignItems: 'center',
                justifyContent: 'center',
                width: '38px',
                height: '38px',
                backgroundColor: mobileMenuOpen ? 'var(--text)' : 'var(--surface)',
                border: '1.5px solid var(--border)',
                color: mobileMenuOpen ? 'var(--bg)' : 'var(--text)',
                cursor: 'pointer',
                boxShadow: '2px 2px 0px var(--accent)',
                transition: 'all 0.2s cubic-bezier(0.16, 1, 0.3, 1)',
              }}
            >
              {mobileMenuOpen ? (
                <X size={20} style={{ animation: 'spinIn 0.2s ease-out' }} />
              ) : (
                <Menu size={20} />
              )}
            </button>
          </div>
        </nav>
      </header>

      {/* ── Fullscreen Neo-Brutalist Animated Mobile Menu Drawer ── */}
      {mobileMenuOpen && (
        <div
          data-lenis-prevent="true"
          className="mobile-menu-drawer"
          style={{
            position: 'fixed',
            top: '4.25rem',
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 99,
            backgroundColor: 'var(--surface)',
            borderTop: '1.5px solid var(--border)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            overflowY: 'auto',
            WebkitOverflowScrolling: 'touch',
            padding: '1.5rem',
          }}
        >
          {/* Top Status Header inside drawer */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              paddingBottom: '1rem',
              borderBottom: '1px solid var(--hairline)',
              marginBottom: '1rem',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span className="live-pulse" />
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.72rem',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.14em',
                  color: 'var(--text-muted)',
                }}
              >
                DIRECTORY · LK
              </span>
            </div>
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.72rem',
                fontWeight: 700,
                color: 'var(--accent)',
              }}
            >
              [ 07 SECTIONS ]
            </span>
          </div>

          {/* Animated Navigation Items List */}
          <ul
            style={{
              listStyle: 'none',
              padding: 0,
              margin: 0,
              display: 'flex',
              flexDirection: 'column',
              gap: '0.25rem',
            }}
          >
            {navLinks.map((link, index) => (
              <li
                key={link.label}
                style={{
                  animation: `navItemSlideIn 0.32s cubic-bezier(0.16, 1, 0.3, 1) forwards`,
                  animationDelay: `${index * 0.04}s`,
                  opacity: 0,
                  transform: 'translateX(-16px)',
                }}
              >
                <a
                  href={link.href}
                  onClick={handleLinkClick}
                  className="mobile-nav-item-link"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '0.75rem 0.5rem',
                    textDecoration: 'none',
                    borderBottom: '1px solid var(--hairline)',
                    transition: 'all 0.15s ease',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.85rem' }}>
                    <span
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.75rem',
                        fontWeight: 700,
                        color: 'var(--accent)',
                      }}
                    >
                      {link.num}
                    </span>
                    <span
                      style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: 'clamp(1.4rem, 4.5vw, 1.85rem)',
                        fontWeight: 700,
                        textTransform: 'uppercase',
                        letterSpacing: '-0.02em',
                        color: 'var(--text)',
                      }}
                    >
                      {link.label}
                    </span>
                  </div>
                  <ArrowRight
                    size={18}
                    className="mobile-link-arrow"
                    style={{
                      color: 'var(--text-subtle)',
                      transition: 'transform 0.2s ease, color 0.2s ease',
                    }}
                  />
                </a>
              </li>
            ))}
          </ul>

          {/* Bottom Drawer Actions & Info */}
          <div
            style={{
              marginTop: '1.75rem',
              paddingTop: '1.25rem',
              borderTop: '1.5px solid var(--border)',
              display: 'flex',
              flexDirection: 'column',
              gap: '1.25rem',
            }}
          >
            {/* Big Brutalist CTA Button */}
            <a
              href="#contact"
              onClick={handleLinkClick}
              className="btn-brutal"
              style={{
                width: '100%',
                padding: '0.9rem 1.25rem',
                fontSize: '0.85rem',
                justifyContent: 'center',
              }}
            >
              <span>Get In Touch / Contact</span>
              <ArrowUpRight size={16} />
            </a>

            {/* Social links row + metadata */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingTop: '0.5rem',
              }}
            >
              <div style={{ display: 'flex', gap: '0.85rem' }}>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '38px',
                    height: '38px',
                    backgroundColor: 'var(--surface-subtle)',
                    border: '1.5px solid var(--border)',
                    color: 'var(--text)',
                    textDecoration: 'none',
                  }}
                >
                  <GithubIcon size={16} />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '38px',
                    height: '38px',
                    backgroundColor: 'var(--surface-subtle)',
                    border: '1.5px solid var(--border)',
                    color: 'var(--text)',
                    textDecoration: 'none',
                  }}
                >
                  <LinkedinIcon size={16} />
                </a>
              </div>

              <div style={{ textAlign: 'right' }}>
                <div
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.68rem',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    color: 'var(--text)',
                    letterSpacing: '0.08em',
                  }}
                >
                  Colombo · GMT +5:30
                </div>
                <div
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.65rem',
                    color: 'var(--accent)',
                    fontWeight: 600,
                  }}
                >
                  Available For Internships
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx global>{`
        /* Desktop vs Mobile Responsiveness */
        @media (min-width: 900px) {
          .desktop-nav-container {
            display: block !important;
          }
          .mobile-burger-btn {
            display: none !important;
          }
          .desktop-cta-btn {
            display: block !important;
          }
        }

        @media (max-width: 899px) {
          .desktop-nav-container {
            display: none !important;
          }
          .mobile-burger-btn {
            display: inline-flex !important;
          }
        }

        /* Responsive CTA button on small screens */
        @media (max-width: 640px) {
          .desktop-cta-btn {
            display: none !important;
          }
        }

        /* Very narrow screens: compact logo */
        @media (max-width: 420px) {
          .logo-full-text {
            display: none !important;
          }
          .logo-compact-text {
            display: inline-block !important;
          }
        }

        /* Hover states */
        .nav-link-item:hover {
          color: var(--text) !important;
        }

        .mobile-nav-item-link:hover,
        .mobile-nav-item-link:active {
          padding-left: 0.85rem !important;
          background-color: var(--surface-subtle);
        }

        .mobile-nav-item-link:hover .mobile-link-arrow,
        .mobile-nav-item-link:active .mobile-link-arrow {
          transform: translateX(4px);
          color: var(--accent) !important;
        }

        /* Mobile drawer animations */
        @keyframes navItemSlideIn {
          0% {
            opacity: 0;
            transform: translateX(-20px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes spinIn {
          0% {
            transform: rotate(-90deg) scale(0.8);
            opacity: 0;
          }
          100% {
            transform: rotate(0) scale(1);
            opacity: 1;
          }
        }

        .mobile-menu-drawer {
          animation: drawerFadeIn 0.25s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        @keyframes drawerFadeIn {
          0% {
            opacity: 0;
            transform: translateY(-8px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </>
  );
}
