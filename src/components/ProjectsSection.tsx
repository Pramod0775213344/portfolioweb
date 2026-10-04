'use client';

import { ExternalLink, CheckCircle2, ShieldCheck, Database, Server, Cpu, Truck, CalendarCheck, Users, Briefcase, CreditCard, Network } from 'lucide-react';
import { GithubIcon } from '@/components/Icons';

export default function ProjectsSection() {
  const modules = [
    {
      icon: <CalendarCheck size={18} />,
      title: 'Booking Management',
      desc: 'Automates customer booking workflows, reservation scheduling, trip allocations, and real-time status tracking.',
    },
    {
      icon: <Truck size={18} />,
      title: 'Fleet Management',
      desc: 'Monitors vehicle registries, maintenance schedules, fuel tracking, and operational fleet readiness.',
    },
    {
      icon: <Users size={18} />,
      title: 'Driver Management',
      desc: 'Handles driver profiles, shift scheduling, duty allocations, and license compliance verification.',
    },
    {
      icon: <Briefcase size={18} />,
      title: 'Supplier Management',
      desc: 'Tracks fleet parts suppliers, vendor contracts, servicing procurement, and supply chain logistics.',
    },
    {
      icon: <CreditCard size={18} />,
      title: 'Payment & Invoicing',
      desc: 'Generates automated billing calculations, digital invoices, customer receipts, and financial records.',
    },
    {
      icon: <Network size={18} />,
      title: 'REST APIs & DB Layer',
      desc: 'Provides structured REST endpoints delivering database-driven application functionality with MySQL.',
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
    'Java',
    'Spring Boot',
    'MySQL',
    'JavaScript',
    'REST APIs',
    'HTML5',
    'CSS3',
    'Git',
  ];

  return (
    <section id="work" className="section-pad">
      <div className="container-pad">
        {/* Section Header */}
        <header style={{ marginBottom: '3rem' }}>
          <div className="section-tag">
            <span className="section-tag-dot" />
            <span>04 / Work & Projects</span>
          </div>
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'flex-end',
              justifyContent: 'space-between',
              gap: '1.5rem',
            }}
          >
            <div>
              <h2 className="section-heading">Featured Software Project.</h2>
              <p className="section-description">
                Capstone software engineering project developed at the University of Colombo: production-ready architecture, modular fleet operations, and database-driven REST services.
              </p>
            </div>

            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.45rem 0.9rem',
                border: '1.5px solid var(--border)',
                backgroundColor: 'var(--surface)',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.72rem',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                color: 'var(--text)',
              }}
            >
              <span className="live-pulse" />
              <span>University of Colombo · 06/2025 – 06/2026</span>
            </div>
          </div>
        </header>

        {/* Main Flagship Project Showcase */}
        <div
          className="card"
          style={{
            border: '2px solid var(--border)',
            backgroundColor: 'var(--surface)',
            padding: 'clamp(1.5rem, 4vw, 3rem)',
            boxShadow: '6px 6px 0px var(--border)',
            position: 'relative',
          }}
        >
          {/* Top Metadata Banner */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '1rem',
              paddingBottom: '1.5rem',
              borderBottom: '1.5px solid var(--border)',
              marginBottom: '2rem',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.82rem',
                  fontWeight: 700,
                  color: 'var(--accent)',
                }}
              >
                [ 01 / FULL-STACK ENTERPRISE SYSTEM ]
              </span>
              <span
                style={{
                  backgroundColor: 'var(--accent)',
                  color: '#ffffff',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.65rem',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  padding: '0.25rem 0.6rem',
                  letterSpacing: '0.1em',
                }}
              >
                Featured Project
              </span>
            </div>

            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.75rem',
                color: 'var(--text-muted)',
              }}
            >
              <strong>Duration:</strong> 06/2025 — 06/2026
            </div>
          </div>

          {/* Project Title & Context */}
          <div style={{ marginBottom: '2rem' }}>
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.75rem',
                color: 'var(--accent)',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.12em',
                display: 'block',
                marginBottom: '0.4rem',
              }}
            >
              Software Development Project · University of Colombo
            </span>
            <h3
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(1.85rem, 4vw, 2.75rem)',
                fontWeight: 800,
                letterSpacing: '-0.02em',
                color: 'var(--text)',
                lineHeight: 1.1,
              }}
            >
              Transport Management System
            </h3>
            <p
              style={{
                fontSize: '1.05rem',
                lineHeight: 1.7,
                color: 'var(--text-muted)',
                marginTop: '1rem',
                maxWidth: '900px',
              }}
            >
              A web-based enterprise Transport Management System engineered to automate complete transportation and fleet management operations. Built with a scalable Java & Spring Boot backend, interactive client interface, and relational MySQL database to streamline bookings, vehicle tracking, driver assignments, supplier logistics, and financial invoicing.
            </p>
          </div>

          {/* Key Engineering Deliverables */}
          <div
            style={{
              backgroundColor: 'var(--surface-subtle)',
              border: '1.5px solid var(--border)',
              padding: '1.5rem',
              marginBottom: '2.5rem',
            }}
          >
            <h4
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.75rem',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.14em',
                color: 'var(--text)',
                marginBottom: '1rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
              }}
            >
              <CheckCircle2 size={16} color="var(--accent)" />
              <span>Key Responsibilities & Project Highlights:</span>
            </h4>
            <ul
              style={{
                listStyle: 'none',
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                gap: '0.85rem',
              }}
            >
              {highlights.map((item, idx) => (
                <li
                  key={idx}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '0.65rem',
                    fontSize: '0.88rem',
                    lineHeight: 1.5,
                    color: 'var(--text)',
                  }}
                >
                  <span
                    style={{
                      width: '6px',
                      height: '6px',
                      backgroundColor: 'var(--accent)',
                      marginTop: '0.45rem',
                      flexShrink: 0,
                    }}
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* 6 Core Functional Modules Grid */}
          <div style={{ marginBottom: '2.5rem' }}>
            <h4
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.75rem',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.14em',
                color: 'var(--text-subtle)',
                marginBottom: '1.25rem',
              }}
            >
              [ Operational Modules Developed ]
            </h4>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: '1.25rem',
              }}
            >
              {modules.map((mod, i) => (
                <div
                  key={i}
                  style={{
                    border: '1.5px solid var(--border)',
                    backgroundColor: 'var(--surface-elevated)',
                    padding: '1.25rem',
                    boxShadow: '3px 3px 0px var(--border)',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.5rem',
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.6rem',
                      color: 'var(--accent)',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.72rem',
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      letterSpacing: '0.06em',
                    }}
                  >
                    <span>{mod.icon}</span>
                    <span style={{ color: 'var(--text)' }}>{mod.title}</span>
                  </div>
                  <p
                    style={{
                      fontSize: '0.82rem',
                      lineHeight: 1.5,
                      color: 'var(--text-muted)',
                    }}
                  >
                    {mod.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack & Action Links */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '1.5rem',
              borderTop: '1.5px solid var(--border)',
              paddingTop: '1.75rem',
            }}
          >
            <div>
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.68rem',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.12em',
                  color: 'var(--text-subtle)',
                  display: 'block',
                  marginBottom: '0.65rem',
                }}
              >
                Technologies Utilized:
              </span>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.45rem' }}>
                {techStack.map((tech) => (
                  <span
                    key={tech}
                    style={{
                      padding: '0.35rem 0.75rem',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      backgroundColor: 'var(--surface-subtle)',
                      border: '1px solid var(--border)',
                      color: 'var(--text)',
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', flexWrap: 'wrap' }}>
              <a
                href="https://github.com/Pramod0775213344"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-brutal"
                style={{
                  padding: '0.65rem 1.25rem',
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

              <a
                href="#contact"
                className="btn-ghost"
                style={{
                  padding: '0.65rem 1.25rem',
                  fontSize: '0.8rem',
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                }}
              >
                <ExternalLink size={16} />
                <span>Discuss System Details</span>
              </a>
            </div>
          </div>
        </div>

        {/* Academic Context Sub-Card */}
        <div
          style={{
            marginTop: '2rem',
            border: '1.5px dashed var(--border)',
            backgroundColor: 'var(--surface-subtle)',
            padding: '1.5rem 2rem',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1rem',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div
              style={{
                width: '40px',
                height: '40px',
                backgroundColor: 'var(--surface)',
                border: '1.5px solid var(--border)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--accent)',
                flexShrink: 0,
              }}
            >
              <Cpu size={20} />
            </div>
            <div>
              <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '1rem', fontWeight: 700, color: 'var(--text)' }}>
                Active Academic Project · Software Engineering Undergrad
              </h4>
              <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)', marginTop: '0.2rem' }}>
                Conducted under the University of Colombo computing curriculum, following strict software development lifecycle standards, functional requirement specifications, and API best practices.
              </p>
            </div>
          </div>

          <a
            href="#contact"
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.75rem',
              fontWeight: 700,
              color: 'var(--accent)',
              textDecoration: 'none',
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              whiteSpace: 'nowrap',
            }}
          >
            Inquire for Code Walkthrough →
          </a>
        </div>
      </div>
    </section>
  );
}
