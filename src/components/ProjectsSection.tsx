'use client';

import Link from 'next/link';
import { ArrowRight, CalendarCheck, Truck, Users, Briefcase, CreditCard, Network } from 'lucide-react';
import { GithubIcon } from '@/components/Icons';

export default function ProjectsSection() {
  const modules = [
    { icon: <CalendarCheck size={16} />, title: 'Booking Management' },
    { icon: <Truck size={16} />, title: 'Fleet Management' },
    { icon: <Users size={16} />, title: 'Driver Management' },
    { icon: <Briefcase size={16} />, title: 'Supplier Management' },
    { icon: <CreditCard size={16} />, title: 'Payment & Invoicing' },
    { icon: <Network size={16} />, title: 'REST APIs & DB Layer' },
  ];

  const techStack = ['Java', 'Spring Boot', 'MySQL', 'JavaScript', 'REST APIs', 'HTML5', 'CSS3', 'Git'];

  return (
    <section id="work" className="section-pad">
      <div className="container-pad">
        {/* Section Header */}
        <header style={{ marginBottom: '3rem' }}>
          <div className="section-tag">
            <span className="section-tag-dot" />
            <span>04 / Work &amp; Projects</span>
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

        {/* Summary Card */}
        <div
          className="card"
          style={{
            border: '2px solid var(--border)',
            backgroundColor: 'var(--surface)',
            padding: 'clamp(1.5rem, 4vw, 2.5rem)',
            boxShadow: '6px 6px 0px var(--border)',
          }}
        >
          {/* Card Header */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '1rem',
              paddingBottom: '1.5rem',
              borderBottom: '1.5px solid var(--border)',
              marginBottom: '1.75rem',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.8rem',
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
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.75rem',
                color: 'var(--text-muted)',
              }}
            >
              Duration: 06/2025 — 06/2026
            </span>
          </div>

          {/* Title & Summary */}
          <div style={{ marginBottom: '1.75rem' }}>
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.72rem',
                color: 'var(--accent)',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.12em',
                display: 'block',
                marginBottom: '0.5rem',
              }}
            >
              Software Development Project · University of Colombo
            </span>
            <h3
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(1.65rem, 3.5vw, 2.25rem)',
                fontWeight: 800,
                letterSpacing: '-0.02em',
                color: 'var(--text)',
                lineHeight: 1.1,
                marginBottom: '1rem',
              }}
            >
              Transport Management System
            </h3>
            <p
              style={{
                fontSize: '0.95rem',
                lineHeight: 1.7,
                color: 'var(--text-muted)',
                maxWidth: '780px',
              }}
            >
              A web-based enterprise system to automate complete transportation and fleet management operations — built with Java, Spring Boot, MySQL, and REST APIs. Covers six core operational modules from reservations through to billing.
            </p>
          </div>

          {/* Module Chips */}
          <div style={{ marginBottom: '2rem' }}>
            <p
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.68rem',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.12em',
                color: 'var(--text-subtle)',
                marginBottom: '0.75rem',
              }}
            >
              [ 6 Operational Modules ]
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem' }}>
              {modules.map((mod, i) => (
                <span
                  key={i}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    padding: '0.4rem 0.8rem',
                    border: '1.5px solid var(--border)',
                    backgroundColor: 'var(--surface-subtle)',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.72rem',
                    fontWeight: 700,
                    color: 'var(--text)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.04em',
                  }}
                >
                  <span style={{ color: 'var(--accent)' }}>{mod.icon}</span>
                  {mod.title}
                </span>
              ))}
            </div>
          </div>

          {/* Tech Stack Tags */}
          <div style={{ marginBottom: '2rem' }}>
            <p
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.68rem',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.12em',
                color: 'var(--text-subtle)',
                marginBottom: '0.65rem',
              }}
            >
              Technologies:
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
              {techStack.map((tech) => (
                <span key={tech} className="tag">{tech}</span>
              ))}
            </div>
          </div>

          {/* Footer Actions */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '1rem',
              borderTop: '1.5px solid var(--border)',
              paddingTop: '1.5rem',
            }}
          >
            <p
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.75rem',
                color: 'var(--text-muted)',
              }}
            >
              Bachelor of Information Technology (BIT) · University of Colombo, Colombo, SL
            </p>

            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', alignItems: 'center' }}>
              <a
                href="https://github.com/Pramod0775213344"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost"
                style={{
                  padding: '0.6rem 1rem',
                  fontSize: '0.78rem',
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                }}
              >
                <GithubIcon size={15} />
                <span>GitHub</span>
              </a>

              {/* Primary CTA → full detail page */}
              <Link
                href="/projects/transport-management-system"
                className="btn-brutal"
                style={{
                  padding: '0.6rem 1.25rem',
                  fontSize: '0.82rem',
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.55rem',
                  fontWeight: 700,
                }}
              >
                <span>View Full Details</span>
                <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
