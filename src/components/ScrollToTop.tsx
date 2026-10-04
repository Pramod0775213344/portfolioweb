'use client';

import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;

      // Show after scrolling past 350px
      setVisible(currentScroll > 350);

      // Calculate progress percentage
      if (totalScroll > 0) {
        setScrollProgress(Math.min(100, Math.round((currentScroll / totalScroll) * 100)));
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <aside aria-label="Scroll to top navigation">
      <a
        href="#hero"
        aria-label="Scroll back to top of page"
        className="scroll-to-top-btn"
        style={{
          position: 'fixed',
          bottom: '1.5rem',
          right: '1.5rem',
          zIndex: 45,
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.5rem',
          padding: '0.55rem 0.85rem',
          backgroundColor: 'var(--surface)',
          border: '1.5px solid var(--border)',
          color: 'var(--text)',
          fontFamily: 'var(--font-mono)',
          fontSize: '0.72rem',
          fontWeight: 700,
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          textDecoration: 'none',
          boxShadow: '3px 3px 0px var(--accent)',
          cursor: 'pointer',
          opacity: visible ? 1 : 0,
          visibility: visible ? 'visible' : 'hidden',
          transform: visible ? 'translateY(0)' : 'translateY(16px)',
          transition:
            'opacity 0.25s cubic-bezier(0.16, 1, 0.3, 1), transform 0.25s cubic-bezier(0.16, 1, 0.3, 1), visibility 0.25s, box-shadow 0.15s ease, background-color 0.15s ease',
        }}
      >
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '20px',
            height: '20px',
            backgroundColor: 'var(--accent)',
            color: '#ffffff',
          }}
        >
          <ArrowUp size={13} strokeWidth={2.5} />
        </div>
        <span className="scroll-btn-label">TOP</span>
        <span
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.65rem',
            color: 'var(--text-subtle)',
            paddingLeft: '0.2rem',
            borderLeft: '1px solid var(--hairline)',
          }}
        >
          {scrollProgress}%
        </span>
      </a>

      <style jsx global>{`
        .scroll-to-top-btn:hover {
          transform: translate(-2px, -2px) !important;
          box-shadow: 5px 5px 0px var(--accent) !important;
          background-color: var(--surface-elevated) !important;
        }

        .scroll-to-top-btn:active {
          transform: translate(1px, 1px) !important;
          box-shadow: 2px 2px 0px var(--accent) !important;
        }

        @media (max-width: 480px) {
          .scroll-to-top-btn {
            bottom: 1.1rem !important;
            right: 1.1rem !important;
            padding: 0.5rem 0.65rem !important;
          }
          .scroll-btn-label {
            display: none !important;
          }
        }
      `}</style>
    </aside>
  );
}
