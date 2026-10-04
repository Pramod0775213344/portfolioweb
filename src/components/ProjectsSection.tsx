'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { GithubIcon } from '@/components/Icons';

export default function ProjectsSection() {
  const projects = [
    {
      id: 'tms',
      badge: 'Featured Capstone',
      category: 'Full-Stack Enterprise System',
      period: '06/2025 — 06/2026',
      title: 'Transport Management System',
      desc: 'A web-based enterprise system built to automate complete transportation and fleet management operations — covering bookings, fleet tracking, driver assignments, supplier logistics, and financial invoicing in a single integrated platform. Developed using Java, Spring Boot, MySQL, and REST APIs.',
      institution: 'Bachelor of Information Technology (BIT) · University of Colombo, SL',
      tags: ['Java', 'Spring Boot', 'MySQL', 'REST APIs', 'Enterprise'],
      detailUrl: '/projects/transport-management-system',
    },
    {
      id: 'gms',
      badge: 'Enterprise Project',
      category: 'Full-Stack Management System',
      period: '2025 — 2026',
      title: 'Gym Management System',
      desc: 'An end-to-end full-stack web application designed to streamline daily fitness center operations — automating member registrations, tiered subscription billing, trainer scheduling, and member attendance tracking using Java Spring Boot, MySQL, and RESTful web services.',
      institution: 'Software Engineering Project · University of Colombo',
      tags: ['Java', 'Spring Boot', 'MySQL', 'REST APIs', 'Invoicing'],
      detailUrl: '/projects/gym-management-system',
    },
  ];

  return (
    <section id="work" className="section-pad">
      <div className="container-pad">

        {/* Section Header */}
        <header style={{ marginBottom: '3.5rem' }}>
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
              <h2 className="section-heading">Featured Software Projects.</h2>
              <p className="section-description">
                Enterprise systems engineered with Java, Spring Boot, MySQL, and modern web architectures.
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
              <span>Enterprise Systems · Java &amp; Spring Boot</span>
            </div>
          </div>
        </header>

        {/* Projects List Grid */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
          {projects.map((project) => (
            <div
              key={project.id}
              className="card"
              style={{
                border: '2px solid var(--border)',
                backgroundColor: 'var(--surface)',
                padding: 'clamp(1.75rem, 4vw, 2.75rem)',
                boxShadow: '6px 6px 0px var(--border)',
              }}
            >
              {/* Type badge + date */}
              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '0.75rem',
                  marginBottom: '1.5rem',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', flexWrap: 'wrap' }}>
                  <span
                    style={{
                      backgroundColor: 'var(--accent)',
                      color: '#fff',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.65rem',
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      letterSpacing: '0.1em',
                      padding: '0.28rem 0.65rem',
                    }}
                  >
                    {project.badge}
                  </span>
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.72rem',
                      color: 'var(--text-muted)',
                      fontWeight: 500,
                    }}
                  >
                    {project.category}
                  </span>
                </div>
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.72rem',
                    color: 'var(--text-muted)',
                  }}
                >
                  {project.period}
                </span>
              </div>

              {/* Project Name */}
              <h3
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
                  fontWeight: 800,
                  letterSpacing: '-0.025em',
                  color: 'var(--text)',
                  lineHeight: 1.05,
                  marginBottom: '1rem',
                }}
              >
                {project.title}
              </h3>

              {/* Description */}
              <p
                style={{
                  fontSize: '1rem',
                  lineHeight: 1.75,
                  color: 'var(--text-muted)',
                  maxWidth: '780px',
                  marginBottom: '1.5rem',
                }}
              >
                {project.desc}
              </p>

              {/* Tech Badges */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '2rem' }}>
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.7rem',
                      fontWeight: 700,
                      padding: '0.2rem 0.6rem',
                      backgroundColor: 'var(--surface-subtle)',
                      border: '1px solid var(--hairline)',
                      color: 'var(--text)',
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Actions */}
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
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.73rem',
                    color: 'var(--text-muted)',
                  }}
                >
                  {project.institution}
                </span>

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

                  <Link
                    href={project.detailUrl}
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
          ))}
        </div>

      </div>
    </section>
  );
}
