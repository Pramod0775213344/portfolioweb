'use client';

import { Sparkles, Compass, Target, BookOpen } from 'lucide-react';

export default function AboutSection() {
  return (
    <section id="about" className="section-pad">
      <div className="container-pad">
        {/* Section Header */}
        <header style={{ marginBottom: '3.5rem' }}>
          <div className="section-tag">
            <span className="section-tag-dot" />
            <span>01 / About</span>
          </div>
          <h2 className="section-heading">Background & Mindset.</h2>
        </header>

        {/* Pull Quote with Vertical Accent Line */}
        <div
          style={{
            display: 'flex',
            gap: '1.5rem',
            marginBottom: '4rem',
            alignItems: 'stretch',
          }}
        >
          <div
            style={{
              width: '4px',
              backgroundColor: 'var(--accent)',
              flexShrink: 0,
            }}
          />
          <blockquote
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(1.25rem, 3.2vw, 1.95rem)',
              fontWeight: 600,
              lineHeight: 1.35,
              letterSpacing: '-0.02em',
              color: 'var(--text)',
            }}
          >
            I build software to understand what happens beneath the surface. Instead of blindly memorizing frameworks, I focus on{' '}
            <span style={{ color: 'var(--accent)', textDecoration: 'underline', textDecorationThickness: '2px', textUnderlineOffset: '4px' }}>
              core computing principles
            </span>
            , clean data models, and designing solutions that stand firm under real-world conditions.
          </blockquote>
        </div>

        {/* Main Content Grid: Narrative & Currently Card */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '2.5rem',
          }}
          className="about-grid"
        >
          {/* Left Column: Narrative paragraphs */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <p
              style={{
                fontSize: '1.05rem',
                lineHeight: 1.75,
                color: 'var(--text-muted)',
              }}
            >
              As a dedicated Software Engineering Undergraduate, I have invested hundreds of hours into mastering the foundational pillars of software craftsmanship: algorithmic problem solving, object-oriented design patterns, database normalization, and modern client-server architectures.
            </p>

            <p
              style={{
                fontSize: '1.05rem',
                lineHeight: 1.75,
                color: 'var(--text-muted)',
              }}
            >
              While I am early in my career without formal commercial years on paper, I treat my academic and personal projects with industry-level discipline: using Git commit conventions, structuring typed codebases with Next.js and TypeScript, handling edge cases defensively, and writing self-documenting code.
            </p>

            <p
              style={{
                fontSize: '1.05rem',
                lineHeight: 1.75,
                color: 'var(--text-muted)',
              }}
            >
              I am eager to contribute to an engineering team where I can solve meaningful problems, absorb mentorship like a sponge, and turn complex requirements into robust, high-performance software.
            </p>

            {/* Core Values Pill Grid */}
            <div
              style={{
                marginTop: '1rem',
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: '1rem',
              }}
            >
              <div
                className="card"
                style={{
                  padding: '1rem',
                  border: '1px solid var(--hairline)',
                  backgroundColor: 'var(--surface-subtle)',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.4rem' }}>
                  <Target size={16} style={{ color: 'var(--accent)' }} />
                  <strong style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', textTransform: 'uppercase' }}>
                    First Principles
                  </strong>
                </div>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: 1.4 }}>
                  Understand why things work, not just how to copy-paste.
                </p>
              </div>

              <div
                className="card"
                style={{
                  padding: '1rem',
                  border: '1px solid var(--hairline)',
                  backgroundColor: 'var(--surface-subtle)',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.4rem' }}>
                  <BookOpen size={16} style={{ color: 'var(--accent)' }} />
                  <strong style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', textTransform: 'uppercase' }}>
                    Fast Learner
                  </strong>
                </div>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: 1.4 }}>
                  Rapidly internalize new tech stacks and architectural paradigms.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Currently Status Brutalist Box */}
          <div>
            <div
              className="card card-hover"
              style={{
                padding: '2rem',
                backgroundColor: 'var(--surface)',
                border: '1.5px solid var(--border)',
                boxShadow: '4px 4px 0px var(--border)',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.6rem',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.72rem',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.14em',
                  color: 'var(--text)',
                  marginBottom: '1.75rem',
                  borderBottom: '1px solid var(--hairline)',
                  paddingBottom: '0.75rem',
                }}
              >
                <span className="live-pulse" />
                <span>Currently / Status</span>
              </div>

              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1.4rem' }}>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.85rem' }}>
                  <span
                    style={{
                      width: '8px',
                      height: '8px',
                      backgroundColor: 'var(--accent)',
                      marginTop: '0.45rem',
                      flexShrink: 0,
                    }}
                  />
                  <div>
                    <h3 style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--text)' }}>
                      Software Engineering Undergrad
                    </h3>
                    <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '0.2rem' }}>
                      BSc (Hons) in Computing / Software Engineering
                    </p>
                  </div>
                </li>

                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.85rem' }}>
                  <span
                    style={{
                      width: '8px',
                      height: '8px',
                      backgroundColor: 'var(--border)',
                      marginTop: '0.45rem',
                      flexShrink: 0,
                    }}
                  />
                  <div>
                    <h3 style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--text)' }}>
                      Technical Deep Dive
                    </h3>
                    <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '0.2rem' }}>
                      Full-Stack Next.js 15, TypeScript, API Design, Docker & PostgreSQL
                    </p>
                  </div>
                </li>

                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.85rem' }}>
                  <span
                    style={{
                      width: '8px',
                      height: '8px',
                      backgroundColor: 'var(--border)',
                      marginTop: '0.45rem',
                      flexShrink: 0,
                    }}
                  />
                  <div>
                    <h3 style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--text)' }}>
                      Available For
                    </h3>
                    <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '0.2rem' }}>
                      Software Engineer Internships & Junior Roles (Full-time / Hybrid / Remote)
                    </p>
                  </div>
                </li>
              </ul>

              <div style={{ marginTop: '2rem', paddingTop: '1.25rem', borderTop: '1px solid var(--hairline)' }}>
                <a
                  href="#contact"
                  className="btn-brutal"
                  style={{ width: '100%', justifyContent: 'center' }}
                >
                  Contact For Opportunities
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (min-width: 900px) {
          .about-grid {
            grid-template-columns: 7fr 5fr !important;
            gap: 3.5rem !important;
          }
        }
      `}</style>
    </section>
  );
}
