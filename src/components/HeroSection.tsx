'use client';

import Image from 'next/image';
import { ArrowRight, Terminal } from 'lucide-react';
import TickerMarquee from '@/components/TickerMarquee';

export default function HeroSection() {
  return (
    <section
      id="hero"
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        overflow: 'hidden',
      }}
    >
      {/* Decorative brutalist background accents */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: '20%',
          right: '-40px',
          width: '120px',
          height: '240px',
          backgroundColor: 'var(--accent)',
          opacity: 0.12,
          pointerEvents: 'none',
          transform: 'rotate(12deg)',
        }}
      />

      <div
        className="container-pad"
        style={{
          paddingTop: '6rem',
          paddingBottom: '2rem',
          display: 'flex',
          alignItems: 'center',
          flex: 1,
          width: '100%',
        }}
      >
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '3.5rem',
            alignItems: 'center',
            width: '100%',
          }}
          className="hero-grid"
        >
          {/* Left Column: Text & Intro */}
          <div className="hero-text-col">
            {/* Status Pill Badge */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.6rem',
                border: '1.5px solid var(--border)',
                backgroundColor: 'var(--surface)',
                padding: '0.4rem 0.85rem',
                marginBottom: '1.75rem',
                boxShadow: '2px 2px 0px var(--border)',
              }}
            >
              <span className="live-pulse" />
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.72rem',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.14em',
                  color: 'var(--text)',
                }}
              >
                00 / PORTFOLIO · 2026 · OPEN FOR INTERNSHIPS
              </span>
            </div>

            {/* Giant Title Typography */}
            <h1
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2.8rem, 7.8vw, 6.5rem)',
                fontWeight: 800,
                textTransform: 'uppercase',
                lineHeight: 0.88,
                letterSpacing: '-0.04em',
                color: 'var(--text)',
                marginBottom: '1.75rem',
              }}
            >
              <span style={{ display: 'block' }}>Pramod</span>
              <span className="text-stroke" style={{ display: 'block' }}>
                Ravisanka
              </span>
            </h1>            {/* Description */}
            <p
              style={{
                fontSize: 'clamp(1rem, 2vw, 1.18rem)',
                lineHeight: 1.65,
                color: 'var(--text-muted)',
                maxWidth: '560px',
                marginBottom: '2rem',
              }}
            >
              I am a <strong style={{ color: 'var(--text)' }}>Software Engineering Undergraduate</strong> at the <strong style={{ color: 'var(--text)' }}>University of Colombo</strong> with a passion for building clean, robust applications. Currently engineering an enterprise <strong style={{ color: 'var(--accent)' }}>Transport Management System</strong> utilizing Java, Spring Boot, MySQL, and modern web architectures.
            </p>

            {/* CTA Buttons */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                gap: '1rem',
                marginBottom: '2.5rem',
              }}
            >
              <a href="#work" className="btn-brutal">
                <span>View Featured Project</span>
                <ArrowRight size={16} />
              </a>

              <a href="#terminal" className="btn-ghost">
                <Terminal size={14} style={{ color: 'var(--accent)' }} />
                <span>Open Dev Console</span>
              </a>
            </div>

            {/* Metrics & Snapshot Grid */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                border: '1.5px solid var(--border)',
                backgroundColor: 'var(--surface)',
                maxWidth: '580px',
              }}
            >
              {/* Stat 1 */}
              <div
                style={{
                  padding: '1.1rem',
                  borderRight: '1.5px solid var(--border)',
                  borderBottom: '1.5px solid var(--border)',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.68rem',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                    color: 'var(--text-subtle)',
                  }}
                >
                  <span style={{ color: 'var(--accent)' }}>[ 01 ]</span>
                  <span>Education</span>
                </div>
                <div
                  style={{
                    marginTop: '0.5rem',
                    fontFamily: 'var(--font-display)',
                    fontSize: '1.35rem',
                    fontWeight: 700,
                    color: 'var(--text)',
                    lineHeight: 1.1,
                  }}
                >
                  BSc (Hons)
                </div>
                <div
                  style={{
                    marginTop: '0.2rem',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.68rem',
                    color: 'var(--text-muted)',
                    textTransform: 'uppercase',
                  }}
                >
                  Univ. of Colombo
                </div>
              </div>

              {/* Stat 2 */}
              <div
                style={{
                  padding: '1.1rem',
                  borderBottom: '1.5px solid var(--border)',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.68rem',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                    color: 'var(--text-subtle)',
                  }}
                >
                  <span style={{ color: 'var(--accent)' }}>[ 02 ]</span>
                  <span>Project</span>
                </div>
                <div
                  style={{
                    marginTop: '0.5rem',
                    fontFamily: 'var(--font-display)',
                    fontSize: '1.35rem',
                    fontWeight: 700,
                    color: 'var(--text)',
                    lineHeight: 1.1,
                  }}
                >
                  Transport TMS
                </div>
                <div
                  style={{
                    marginTop: '0.2rem',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.68rem',
                    color: 'var(--text-muted)',
                    textTransform: 'uppercase',
                  }}
                >
                  Spring Boot & MySQL
                </div>
              </div>

              {/* Stat 3 */}
              <div
                style={{
                  padding: '1.1rem',
                  borderRight: '1.5px solid var(--border)',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.68rem',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                    color: 'var(--text-subtle)',
                  }}
                >
                  <span style={{ color: 'var(--accent)' }}>[ 03 ]</span>
                  <span>Tech Stack</span>
                </div>
                <div
                  style={{
                    marginTop: '0.5rem',
                    fontFamily: 'var(--font-display)',
                    fontSize: '1.35rem',
                    fontWeight: 700,
                    color: 'var(--text)',
                    lineHeight: 1.1,
                  }}
                >
                  Full Stack
                </div>
                <div
                  style={{
                    marginTop: '0.2rem',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.68rem',
                    color: 'var(--text-muted)',
                    textTransform: 'uppercase',
                  }}
                >
                  Java · Spring Boot · JS
                </div>
              </div>

              {/* Stat 4 */}
              <div
                style={{
                  padding: '1.1rem',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.68rem',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                    color: 'var(--text-subtle)',
                  }}
                >
                  <span style={{ color: 'var(--accent)' }}>[ 04 ]</span>
                  <span>Location</span>
                </div>
                <div
                  style={{
                    marginTop: '0.5rem',
                    fontFamily: 'var(--font-display)',
                    fontSize: '1.35rem',
                    fontWeight: 700,
                    color: 'var(--text)',
                    lineHeight: 1.1,
                  }}
                >
                  Sri Lanka
                </div>
                <div
                  style={{
                    marginTop: '0.2rem',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.68rem',
                    color: 'var(--text-muted)',
                    textTransform: 'uppercase',
                  }}
                >
                  Colombo · GMT +5:30
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Neo-Brutalist Portrait Frame */}
          <div className="hero-portrait-col">
            <div
              style={{
                position: 'relative',
                width: '100%',
                maxWidth: '380px',
                margin: '0 auto',
              }}
            >
              {/* Offset Accent Box (Signature Neo-Brutalist Frame) */}
              <div
                aria-hidden="true"
                style={{
                  position: 'absolute',
                  inset: 0,
                  transform: 'translate(12px, 12px)',
                  backgroundColor: 'var(--accent)',
                  border: '1.5px solid var(--border)',
                  zIndex: 1,
                }}
              />

              {/* Portrait Container */}
              <div
                style={{
                  position: 'relative',
                  aspectRatio: '4 / 5',
                  overflow: 'hidden',
                  border: '1.5px solid var(--border)',
                  backgroundColor: 'var(--text)',
                  zIndex: 2,
                }}
              >
                <Image
                  src="/images/pramod.jpg"
                  alt="Pramod Ravisanka, Software Engineering Undergraduate"
                  fill
                  priority
                  style={{
                    objectFit: 'cover',
                    objectPosition: 'top center',
                    filter: 'grayscale(100%) contrast(1.1)',
                  }}
                  sizes="(max-width: 768px) 85vw, 420px"
                />

                {/* Portrait Caption Strip */}
                <div
                  style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    borderTop: '1.5px solid var(--border)',
                    backgroundColor: 'var(--surface)',
                    padding: '0.6rem 0.85rem',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.72rem',
                    fontWeight: 700,
                  }}
                >
                  <span style={{ color: 'var(--text)', textTransform: 'uppercase' }}>
                    Pramod Ravisanka
                  </span>
                  <span style={{ color: 'var(--accent)', textTransform: 'uppercase' }}>
                    Sri Lanka · LK
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (min-width: 992px) {
          .hero-grid {
            grid-template-columns: 7fr 5fr !important;
            gap: 2.5rem !important;
          }
          .hero-portrait-col {
            display: flex;
            justify-content: flex-end;
          }
        }
        @media (max-width: 991px) {
          .hero-portrait-col {
            order: -1;
            margin-bottom: 1rem;
          }
        }
      `}</style>

      {/* ── Ticker bar pinned to the bottom of hero – exactly like Harsha's site ── */}
      <div style={{ width: '100%', marginTop: 'auto' }}>
        <TickerMarquee />
      </div>
    </section>
  );
}
