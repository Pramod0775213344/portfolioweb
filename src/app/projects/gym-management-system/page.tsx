import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowLeft, Users, Dumbbell, CreditCard, ClipboardCheck, Network, CheckCircle2, Cpu, ExternalLink } from 'lucide-react';
import { GithubIcon } from '@/components/Icons';

export const metadata: Metadata = {
  title: 'Gym Management System · Pramod Ravishanka',
  description:
    'Full project details: Enterprise Gym Management System engineered with Java, Spring Boot, MySQL, REST APIs — member registration, trainer assignments, subscription billing, and attendance tracking.',
};

export default function GymManagementSystemPage() {
  const modules = [
    {
      icon: <Users size={20} />,
      title: 'Member & Plan Management',
      desc: 'Handles member profiles, membership plan tiers, subscription renewals, automated status reminders, and digital health records.',
    },
    {
      icon: <Dumbbell size={20} />,
      title: 'Trainer & Class Scheduling',
      desc: 'Schedules personal training sessions, workout class rosters, trainer allocations, and equipment availability monitoring.',
    },
    {
      icon: <CreditCard size={20} />,
      title: 'Billing & Invoicing',
      desc: 'Automates subscription fee calculations, generates invoices, manages payment records, and tracks membership dues.',
    },
    {
      icon: <ClipboardCheck size={20} />,
      title: 'Attendance & Analytics',
      desc: 'Logs member check-ins, tracks peak hour gym usage, trainer session attendance, and comprehensive operations reporting.',
    },
    {
      icon: <Network size={20} />,
      title: 'REST APIs & Persistence Layer',
      desc: 'Secure Spring Boot RESTful API endpoints coupled with a normalized MySQL database handling complex transactional data.',
    },
  ];

  const highlights = [
    'Engineered an end-to-end web-based Gym Management System to streamline gym operations and member lifecycle tracking.',
    'Implemented backend architecture using Java and Spring Boot, integrating RESTful API endpoints.',
    'Designed relational database schema in MySQL with optimized queries for member subscriptions and billing.',
    'Built intuitive frontend interfaces for administrators, trainers, and front-desk staff.',
    'Applied clean code standards, defensive validation, and proactive defect resolution.',
  ];

  const techStack = [
    { name: 'Java', category: 'Language' },
    { name: 'Spring Boot', category: 'Backend Framework' },
    { name: 'MySQL', category: 'Database' },
    { name: 'REST APIs', category: 'Architecture' },
    { name: 'JavaScript', category: 'Frontend Logic' },
    { name: 'HTML5 & CSS3', category: 'UI Structure & Styling' },
    { name: 'Git & GitHub', category: 'Version Control' },
  ];

  return (
    <div
      style={{
        minHeight: '100vh',
        backgroundColor: 'var(--bg)',
        color: 'var(--text)',
        position: 'relative',
      }}
    >
      {/* Decorative Grid Lines */}
      <div aria-hidden="true" className="grid-canvas" />
      <div aria-hidden="true" className="edge-vignette" />

      {/* Top Navigation Bar */}
      <header
        style={{
          borderBottom: '1.5px solid var(--border)',
          backgroundColor: 'var(--surface)',
          position: 'sticky',
          top: 0,
          zIndex: 40,
        }}
      >
        <div
          className="container-pad"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            height: '4rem',
          }}
        >
          <Link
            href="/#work"
            className="btn-ghost"
            style={{
              padding: '0.45rem 0.85rem',
              fontSize: '0.75rem',
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
            }}
          >
            <ArrowLeft size={14} />
            <span>Back to Portfolio</span>
          </Link>

          <div
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.72rem',
              color: 'var(--text-muted)',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
            }}
          >
            <span className="live-pulse" />
            <span style={{ textTransform: 'uppercase', letterSpacing: '0.1em' }}>Project Specification</span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container-pad" style={{ paddingBottom: '6rem', position: 'relative', zIndex: 2 }}>
        {/* Project Header Banner */}
        <section style={{ paddingTop: '3.5rem', paddingBottom: '2.5rem', borderBottom: '1.5px solid var(--border)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '1.25rem', flexWrap: 'wrap' }}>
            <span
              style={{
                backgroundColor: 'var(--accent)',
                color: '#fff',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.68rem',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                padding: '0.3rem 0.75rem',
              }}
            >
              Enterprise System
            </span>
            <span
              style={{
                border: '1.5px solid var(--border)',
                backgroundColor: 'var(--surface)',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.68rem',
                fontWeight: 700,
                textTransform: 'uppercase',
                padding: '0.3rem 0.75rem',
                color: 'var(--text)',
              }}
            >
              Full-Stack Application
            </span>
          </div>

          <h1
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2.2rem, 5.5vw, 4rem)',
              fontWeight: 800,
              textTransform: 'uppercase',
              letterSpacing: '-0.035em',
              lineHeight: 1.05,
              marginBottom: '1.5rem',
              maxWidth: '900px',
            }}
          >
            Gym Management System
          </h1>

          <p
            style={{
              fontSize: '1.15rem',
              lineHeight: 1.7,
              color: 'var(--text-muted)',
              maxWidth: '780px',
              marginBottom: '2rem',
            }}
          >
            A full-stack enterprise web application designed to streamline daily gym operations — automating member onboarding, subscription renewals, trainer allocation, and attendance tracking with a robust Java Spring Boot and MySQL architecture.
          </p>

          {/* Quick Metrics Strip */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
              gap: '1rem',
              marginTop: '2rem',
            }}
          >
            <div className="card" style={{ padding: '1rem', border: '1px solid var(--hairline)' }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', textTransform: 'uppercase', color: 'var(--text-subtle)' }}>
                Architecture
              </div>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.15rem', fontWeight: 700, marginTop: '0.2rem' }}>
                Spring Boot REST APIs
              </div>
            </div>
            <div className="card" style={{ padding: '1rem', border: '1px solid var(--hairline)' }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', textTransform: 'uppercase', color: 'var(--text-subtle)' }}>
                Database
              </div>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.15rem', fontWeight: 700, marginTop: '0.2rem' }}>
                MySQL Relational DB
              </div>
            </div>
            <div className="card" style={{ padding: '1rem', border: '1px solid var(--hairline)' }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', textTransform: 'uppercase', color: 'var(--text-subtle)' }}>
                Core Capabilities
              </div>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.15rem', fontWeight: 700, marginTop: '0.2rem' }}>
                Members &amp; Invoicing
              </div>
            </div>
            <div className="card" style={{ padding: '1rem', border: '1px solid var(--hairline)' }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', textTransform: 'uppercase', color: 'var(--text-subtle)' }}>
                Code Repository
              </div>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.15rem', fontWeight: 700, marginTop: '0.2rem' }}>
                <a
                  href="https://github.com/Pramod0775213344"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: 'var(--accent)', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}
                >
                  <span>GitHub Profile</span>
                  <ExternalLink size={13} />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Modules Grid */}
        <section style={{ paddingTop: '3.5rem', paddingBottom: '3.5rem', borderBottom: '1.5px solid var(--border)' }}>
          <div className="section-tag">
            <span className="section-tag-dot" />
            <span>Core Functional Modules</span>
          </div>
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(1.6rem, 3.5vw, 2.2rem)',
              fontWeight: 700,
              marginBottom: '2rem',
            }}
          >
            Engineered System Modules
          </h2>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '1.5rem',
            }}
          >
            {modules.map((m, i) => (
              <div
                key={i}
                className="card"
                style={{
                  padding: '1.75rem',
                  border: '1.5px solid var(--border)',
                  backgroundColor: 'var(--surface)',
                  boxShadow: '3px 3px 0px var(--border)',
                }}
              >
                <div
                  style={{
                    width: '38px',
                    height: '38px',
                    backgroundColor: 'var(--surface-subtle)',
                    border: '1px solid var(--border)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--accent)',
                    marginBottom: '1rem',
                  }}
                >
                  {m.icon}
                </div>
                <h3
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '1.18rem',
                    fontWeight: 700,
                    marginBottom: '0.65rem',
                  }}
                >
                  {m.title}
                </h3>
                <p style={{ fontSize: '0.92rem', lineHeight: 1.65, color: 'var(--text-muted)' }}>
                  {m.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Technical Highlights & Tech Stack */}
        <section style={{ paddingTop: '3.5rem' }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr',
              gap: '3rem',
            }}
            className="detail-grid"
          >
            {/* Left: Engineering Highlights */}
            <div>
              <div className="section-tag">
                <span className="section-tag-dot" />
                <span>Implementation Highlights</span>
              </div>
              <h2
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(1.6rem, 3.5vw, 2.2rem)',
                  fontWeight: 700,
                  marginBottom: '1.5rem',
                }}
              >
                Architectural Approach
              </h2>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {highlights.map((h, i) => (
                  <div
                    key={i}
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '0.85rem',
                      padding: '1rem',
                      backgroundColor: 'var(--surface)',
                      border: '1px solid var(--hairline)',
                    }}
                  >
                    <CheckCircle2 size={18} style={{ color: 'var(--accent)', flexShrink: 0, marginTop: '3px' }} />
                    <span style={{ fontSize: '0.95rem', lineHeight: 1.6, color: 'var(--text)' }}>{h}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Technologies Used */}
            <div>
              <div className="section-tag">
                <span className="section-tag-dot" />
                <span>Technologies</span>
              </div>
              <h2
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(1.6rem, 3.5vw, 2.2rem)',
                  fontWeight: 700,
                  marginBottom: '1.5rem',
                }}
              >
                Tech Stack
              </h2>

              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
                  gap: '0.85rem',
                }}
              >
                {techStack.map((t, i) => (
                  <div
                    key={i}
                    className="card"
                    style={{
                      padding: '0.85rem 1rem',
                      border: '1.5px solid var(--border)',
                      backgroundColor: 'var(--surface)',
                    }}
                  >
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', textTransform: 'uppercase', color: 'var(--text-subtle)' }}>
                      {t.category}
                    </div>
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.92rem', fontWeight: 700, marginTop: '0.2rem', color: 'var(--accent)' }}>
                      {t.name}
                    </div>
                  </div>
                ))}
              </div>

              {/* Callout Box */}
              <div
                style={{
                  marginTop: '2rem',
                  padding: '1.5rem',
                  border: '1.5px solid var(--accent)',
                  backgroundColor: 'rgba(255, 87, 51, 0.05)',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--accent)', marginBottom: '0.5rem' }}>
                  <Cpu size={16} />
                  <strong style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', textTransform: 'uppercase' }}>
                    Engineering Takeaway
                  </strong>
                </div>
                <p style={{ fontSize: '0.9rem', lineHeight: 1.65, color: 'var(--text-muted)' }}>
                  This application strengthened my capabilities in multi-table SQL joins, RESTful controller design, decoupled service layers, and state handling in web architectures.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Bottom CTA Back to Home */}
        <div style={{ marginTop: '5rem', textAlign: 'center', borderTop: '1.5px solid var(--border)', paddingTop: '3rem' }}>
          <Link href="/#work" className="btn-brutal" style={{ padding: '0.85rem 1.8rem', fontSize: '0.85rem', textDecoration: 'none' }}>
            <ArrowLeft size={16} />
            <span>Back to All Projects</span>
          </Link>
        </div>
      </main>
    </div>
  );
}
