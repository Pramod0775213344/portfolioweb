import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowLeft, CalendarCheck, Truck, Users, Briefcase, CreditCard, Network, CheckCircle2, ExternalLink, Cpu } from 'lucide-react';
import { GithubIcon } from '@/components/Icons';

export const metadata: Metadata = {
  title: 'Transport Management System · Pramod Ravisanka',
  description:
    'Full project details: University of Colombo capstone Transport Management System built with Java, Spring Boot, MySQL, REST APIs — booking, fleet, driver, supplier, payment and invoicing management modules.',
};

export default function TransportManagementSystemPage() {
  const modules = [
    {
      icon: <CalendarCheck size={20} />,
      title: 'Booking Management',
      desc: 'Automates customer booking workflows, reservation scheduling, trip allocations, and real-time booking status tracking across the transport network.',
    },
    {
      icon: <Truck size={20} />,
      title: 'Fleet Management',
      desc: 'Maintains vehicle registries, service maintenance schedules, fuel consumption tracking, and operational fleet readiness assessment.',
    },
    {
      icon: <Users size={20} />,
      title: 'Driver Management',
      desc: 'Manages driver profiles, shift scheduling, duty allocations, assignment tracking, and license compliance verification.',
    },
    {
      icon: <Briefcase size={20} />,
      title: 'Supplier Management',
      desc: 'Tracks fleet parts and service suppliers, vendor contracts, procurement workflows, and supply chain logistics coordination.',
    },
    {
      icon: <CreditCard size={20} />,
      title: 'Payment & Invoicing',
      desc: 'Generates automated billing calculations, produces digital invoices, handles customer receipts, and maintains complete financial records.',
    },
    {
      icon: <Network size={20} />,
      title: 'REST APIs & Database Layer',
      desc: 'Structured Spring Boot REST endpoints providing complete database-driven application functionality with MySQL as the persistence layer.',
    },
  ];

  const highlights = [
    'Developed a web-based Transport Management System to automate transportation and fleet management operations.',
    'Implemented application functionality using Java, Spring Boot, JavaScript, MySQL, HTML and CSS.',
    'Developed modules for booking, fleet, driver, supplier, payment and invoicing management.',
    'Worked with REST APIs and database-driven application functionality.',
    'Identified and resolved functional issues during development.',
  ];

  const techStack = [
    { name: 'Java', category: 'Language' },
    { name: 'Spring Boot', category: 'Backend Framework' },
    { name: 'MySQL', category: 'Database' },
    { name: 'REST APIs', category: 'Architecture' },
    { name: 'JavaScript', category: 'Frontend Logic' },
    { name: 'HTML5', category: 'Markup' },
    { name: 'CSS3', category: 'Styling' },
    { name: 'Git', category: 'Version Control' },
  ];

  return (
    <div
      style={{
        minHeight: '100vh',
        backgroundColor: 'var(--bg)',
        color: 'var(--text)',
      }}
    >
      {/* Back Navigation Bar */}
      <nav
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 100,
          backgroundColor: 'var(--bg)',
          borderBottom: '1.5px solid var(--border)',
          padding: '1rem 0',
        }}
      >
        <div
          className="container-pad"
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}
        >
          <Link
            href="/#work"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.78rem',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              color: 'var(--text)',
              textDecoration: 'none',
              border: '1.5px solid var(--border)',
              padding: '0.45rem 0.9rem',
              backgroundColor: 'var(--surface)',
              boxShadow: '2px 2px 0px var(--border)',
              transition: 'all 0.15s',
            }}
          >
            <ArrowLeft size={14} />
            <span>Back to Portfolio</span>
          </Link>

          <div
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.72rem',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              color: 'var(--text-subtle)',
            }}
          >
            <span style={{ color: 'var(--accent)' }}>[ </span>
            Project Deep Dive
            <span style={{ color: 'var(--accent)' }}> ]</span>
          </div>
        </div>
      </nav>

      <main className="container-pad" style={{ paddingTop: '3rem', paddingBottom: '5rem' }}>

        {/* Project Hero */}
        <header style={{ marginBottom: '3.5rem' }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.6rem',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.75rem',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.12em',
              color: 'var(--accent)',
              marginBottom: '0.75rem',
            }}
          >
            <span className="live-pulse" />
            <span>Software Development Project · University of Colombo · Colombo, SL</span>
          </div>

          <h1
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2rem, 5vw, 3.5rem)',
              fontWeight: 800,
              letterSpacing: '-0.03em',
              lineHeight: 1.05,
              color: 'var(--text)',
              marginBottom: '1.25rem',
            }}
          >
            Transport Management System
          </h1>

          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              gap: '1.25rem',
              marginBottom: '1.75rem',
            }}
          >
            <span
              style={{
                backgroundColor: 'var(--accent)',
                color: '#fff',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.68rem',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                padding: '0.3rem 0.7rem',
              }}
            >
              Featured Capstone
            </span>
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.75rem',
                color: 'var(--text-muted)',
              }}
            >
              Duration: 06/2025 — 06/2026
            </span>
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.75rem',
                color: 'var(--text-muted)',
              }}
            >
              Category: Full-Stack Enterprise System
            </span>
          </div>

          <p
            style={{
              fontSize: 'clamp(1rem, 2vw, 1.15rem)',
              lineHeight: 1.75,
              color: 'var(--text-muted)',
              maxWidth: '860px',
            }}
          >
            A web-based enterprise Transport Management System engineered to automate complete transportation and fleet management operations. Built with a scalable{' '}
            <strong style={{ color: 'var(--text)' }}>Java & Spring Boot</strong> backend, interactive{' '}
            <strong style={{ color: 'var(--text)' }}>JavaScript client interface</strong>, and a relational{' '}
            <strong style={{ color: 'var(--text)' }}>MySQL database</strong> to streamline bookings, vehicle tracking, driver assignments, supplier logistics, and financial invoicing in a single integrated platform.
          </p>
        </header>

        <div style={{ display: 'grid', gap: '2.5rem' }}>

          {/* Key Responsibilities */}
          <section
            style={{
              border: '1.5px solid var(--border)',
              backgroundColor: 'var(--surface)',
              padding: 'clamp(1.5rem, 3vw, 2.5rem)',
              boxShadow: '4px 4px 0px var(--border)',
            }}
          >
            <h2
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.78rem',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.14em',
                color: 'var(--accent)',
                marginBottom: '1.5rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.6rem',
              }}
            >
              <CheckCircle2 size={16} />
              Key Responsibilities & Engineering Highlights
            </h2>

            <ul
              style={{
                listStyle: 'none',
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                gap: '1rem',
              }}
            >
              {highlights.map((item, idx) => (
                <li
                  key={idx}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '0.75rem',
                    padding: '1rem',
                    backgroundColor: 'var(--surface-subtle)',
                    border: '1px solid var(--hairline)',
                  }}
                >
                  <span
                    style={{
                      width: '24px',
                      height: '24px',
                      backgroundColor: 'var(--accent)',
                      color: '#fff',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.62rem',
                      fontWeight: 700,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      marginTop: '0.05rem',
                    }}
                  >
                    {String(idx + 1).padStart(2, '0')}
                  </span>
                  <span style={{ fontSize: '0.9rem', lineHeight: 1.55, color: 'var(--text)' }}>
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </section>

          {/* Operational Modules Grid */}
          <section>
            <h2
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.78rem',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.14em',
                color: 'var(--text-subtle)',
                marginBottom: '1.25rem',
              }}
            >
              [ 6 Operational Modules Developed ]
            </h2>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(290px, 1fr))',
                gap: '1.25rem',
              }}
            >
              {modules.map((mod, i) => (
                <div
                  key={i}
                  style={{
                    border: '1.5px solid var(--border)',
                    backgroundColor: 'var(--surface)',
                    padding: '1.5rem',
                    boxShadow: '3px 3px 0px var(--border)',
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.65rem',
                      marginBottom: '0.75rem',
                    }}
                  >
                    <span
                      style={{
                        width: '36px',
                        height: '36px',
                        backgroundColor: 'var(--accent-subtle)',
                        border: '1.5px solid var(--border)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'var(--accent)',
                        flexShrink: 0,
                      }}
                    >
                      {mod.icon}
                    </span>
                    <h3
                      style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: '1rem',
                        fontWeight: 700,
                        color: 'var(--text)',
                      }}
                    >
                      {mod.title}
                    </h3>
                  </div>
                  <p style={{ fontSize: '0.85rem', lineHeight: 1.6, color: 'var(--text-muted)' }}>
                    {mod.desc}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Tech Stack Detail */}
          <section
            style={{
              border: '1.5px solid var(--border)',
              backgroundColor: 'var(--surface)',
              padding: 'clamp(1.5rem, 3vw, 2.5rem)',
              boxShadow: '4px 4px 0px var(--border)',
            }}
          >
            <h2
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.78rem',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.14em',
                color: 'var(--accent)',
                marginBottom: '1.5rem',
              }}
            >
              [ Technologies Utilized ]
            </h2>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
                gap: '1rem',
              }}
            >
              {techStack.map((tech) => (
                <div
                  key={tech.name}
                  style={{
                    border: '1.5px solid var(--border)',
                    backgroundColor: 'var(--surface-subtle)',
                    padding: '1rem',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.3rem',
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '1.05rem',
                      fontWeight: 700,
                      color: 'var(--text)',
                    }}
                  >
                    {tech.name}
                  </span>
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.65rem',
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      letterSpacing: '0.08em',
                      color: 'var(--accent)',
                    }}
                  >
                    {tech.category}
                  </span>
                </div>
              ))}
            </div>
          </section>

          {/* Academic Context */}
          <section
            style={{
              border: '1.5px dashed var(--border)',
              backgroundColor: 'var(--surface-subtle)',
              padding: '1.75rem 2rem',
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '1.5rem',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
              <div
                style={{
                  width: '44px',
                  height: '44px',
                  backgroundColor: 'var(--surface)',
                  border: '1.5px solid var(--border)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--accent)',
                  flexShrink: 0,
                }}
              >
                <Cpu size={22} />
              </div>
              <div>
                <h3
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '1.05rem',
                    fontWeight: 700,
                    color: 'var(--text)',
                    marginBottom: '0.35rem',
                  }}
                >
                  Academic Capstone · Bachelor of Information Technology (BIT)
                </h3>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: 1.55 }}>
                  Conducted under the{' '}
                  <strong style={{ color: 'var(--text)' }}>University of Colombo</strong> (Colombo, SL) computing
                  curriculum. Follows strict software development lifecycle standards, functional requirement
                  specifications, relational database modeling, and REST API design best practices.
                </p>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '0.85rem', flexWrap: 'wrap' }}>
              <a
                href="https://github.com/Pramod0775213344"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-brutal"
                style={{
                  padding: '0.7rem 1.35rem',
                  fontSize: '0.8rem',
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                }}
              >
                <GithubIcon size={16} />
                <span>GitHub Profile</span>
              </a>

              <Link
                href="/#contact"
                className="btn-ghost"
                style={{
                  padding: '0.7rem 1.35rem',
                  fontSize: '0.8rem',
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                }}
              >
                <ExternalLink size={16} />
                <span>Request Code Walkthrough</span>
              </Link>
            </div>
          </section>

        </div>
      </main>
    </div>
  );
}
