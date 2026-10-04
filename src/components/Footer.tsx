'use client';

import { ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      style={{
        backgroundColor: 'var(--surface)',
        borderTop: '1.5px solid var(--border)',
        padding: '3rem 0',
      }}
    >
      <div className="container-pad">
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1.5rem',
          }}
        >
          {/* Left: Branding */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
            <span
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '32px',
                height: '32px',
                backgroundColor: 'var(--text)',
                color: 'var(--bg)',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.85rem',
                fontWeight: 700,
                border: '1.5px solid var(--border)',
              }}
            >
              PR
            </span>
            <div>
              <p
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.8rem',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  color: 'var(--text)',
                }}
              >
                Pramod Ravisanka
              </p>
              <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', color: 'var(--text-subtle)' }}>
                Bachelor of Information Technology (BIT) · University of Colombo, SL
              </p>
            </div>
          </div>

          {/* Center: Tech note */}
          <p
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.72rem',
              color: 'var(--text-muted)',
              textAlign: 'center',
            }}
          >
            Built with Next.js 15 · TypeScript · Vanilla CSS · Neo-Brutalist System
          </p>

          {/* Right: Back to Top */}
          <a
            href="#hero"
            aria-label="Scroll back to top"
            className="btn-ghost"
            style={{
              padding: '0.5rem 0.85rem',
              fontSize: '0.72rem',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem',
              textDecoration: 'none',
              cursor: 'pointer',
            }}
          >
            <span>Back To Top</span>
            <ArrowUp size={14} />
          </a>
        </div>

        <div
          style={{
            marginTop: '2rem',
            paddingTop: '1.25rem',
            borderTop: '1px solid var(--hairline)',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.68rem',
            color: 'var(--text-subtle)',
          }}
        >
          <span>© 2026 Pramod Ravisanka. All rights reserved.</span>
          <span>Colombo · LK · UTC+05:30</span>
        </div>
      </div>
    </footer>
  );
}
