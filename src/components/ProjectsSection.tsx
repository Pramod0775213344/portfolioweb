'use client';

import { useState } from 'react';
import { ExternalLink, FolderGit2, Layers, Cpu, Database } from 'lucide-react';
import { GithubIcon } from '@/components/Icons';

export default function ProjectsSection() {
  const [filter, setFilter] = useState<'All' | 'Full-Stack' | 'Systems' | 'Frontend'>('All');

  const projects = [
    {
      id: '01',
      title: 'CampusSync',
      subtitle: 'Academic Resource & Timetable Orchestration Platform',
      category: 'Full-Stack',
      description:
        'A full-stack campus management hub engineered to streamline schedule conflicts, course materials distribution, and academic notices for university faculties.',
      architecture: [
        'Built with Next.js 15 App Router utilizing Server Components for sub-second page loads.',
        'PostgreSQL with Prisma ORM ensuring type-safe relational schemas and ACID transaction integrity.',
        'Role-based access control (RBAC) supporting Students, Lecturers, and Faculty Admins.',
        'Optimistic UI mutations and responsive mobile-first interface.',
      ],
      tech: ['Next.js 15', 'TypeScript', 'PostgreSQL', 'Prisma', 'NextAuth', 'Vanilla CSS'],
      github: 'https://github.com/pramodravisanka',
      demo: '#',
      featured: true,
    },
    {
      id: '02',
      title: 'DevPulse',
      subtitle: 'Real-Time Distributed Service Health & API Monitor',
      category: 'Systems',
      description:
        'Lightweight latency monitoring daemon and web dashboard providing live heartbeat pings, response time percentiles (p50/p95/p99), and threshold alert dispatches.',
      architecture: [
        'Node.js worker process executing scheduled HTTP/TCP probes across registered endpoints.',
        'WebSocket server streaming real-time latency ticks directly to connected client charts.',
        'Redis caching tier to store rolling time-series metrics with TTL expiration.',
        'Clean modular event-driven architecture decoupling probes from reporting.',
      ],
      tech: ['Node.js', 'TypeScript', 'WebSockets', 'Redis', 'Express', 'Chart.js'],
      github: 'https://github.com/pramodravisanka',
      demo: '#',
      featured: true,
    },
    {
      id: '03',
      title: 'AlgoVisual',
      subtitle: 'Interactive Algorithm & Data Structure Visualizer',
      category: 'Frontend',
      description:
        'An educational sandbox designed to visualize sorting algorithms (QuickSort, MergeSort), pathfinding (Dijkstra, A*), and tree traversals with step-by-step state inspection.',
      architecture: [
        'HTML5 Canvas 2D rendering pipeline capable of 60 FPS state animations without DOM overhead.',
        'Web Worker multithreading executing algorithm calculations off the main UI thread.',
        'State timeline allowing scrubbing backward and forward through execution frames.',
        'Deep dive explanatory tooltips with Big-O space and time complexity breakdowns.',
      ],
      tech: ['React', 'TypeScript', 'HTML5 Canvas', 'Web Workers', 'CSS Modules'],
      github: 'https://github.com/pramodravisanka',
      demo: '#',
      featured: false,
    },
    {
      id: '04',
      title: 'CloudVault',
      subtitle: 'Encrypted File Storage & Presigned Sharing Engine',
      category: 'Full-Stack',
      description:
        'A secure, lightweight cloud file storage platform demonstrating direct-to-cloud presigned S3 uploads, file chunking, and client-side cryptographic hashing.',
      architecture: [
        'Secure AWS S3 presigned URL generation bypassing app server memory bottlenecks.',
        'SHA-256 client-side checksum validation ensuring uploaded file integrity.',
        'Custom link expiration and download counter middleware with rate limiting.',
        'Clean RESTful API design with comprehensive OpenAPI / Swagger documentation.',
      ],
      tech: ['Next.js', 'TypeScript', 'AWS S3 SDK', 'Tailwind', 'PostgreSQL'],
      github: 'https://github.com/pramodravisanka',
      demo: '#',
      featured: false,
    },
  ];

  const filteredProjects =
    filter === 'All' ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="work" className="section-pad">
      <div className="container-pad">
        {/* Section Header */}
        <header style={{ marginBottom: '3rem' }}>
          <div className="section-tag">
            <span className="section-tag-dot" />
            <span>04 / Work</span>
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
              <h2 className="section-heading">Featured Systems.</h2>
              <p className="section-description">
                Engineered from the ground up: complete source code, clear architecture decisions, and realistic real-world constraints.
              </p>
            </div>

            {/* Filter Buttons */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
              {(['All', 'Full-Stack', 'Systems', 'Frontend'] as const).map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  style={{
                    padding: '0.4rem 0.85rem',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.72rem',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                    border: '1.5px solid var(--border)',
                    backgroundColor: filter === cat ? 'var(--text)' : 'var(--surface)',
                    color: filter === cat ? 'var(--bg)' : 'var(--text)',
                    cursor: 'pointer',
                    transition: 'all var(--transition-quick)',
                  }}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </header>

        {/* Projects Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: '2rem',
          }}
        >
          {filteredProjects.map((proj) => (
            <div
              key={proj.id}
              className="card card-hover"
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                padding: '2.25rem',
                border: '1.5px solid var(--border)',
                backgroundColor: 'var(--surface)',
              }}
            >
              <div>
                {/* Card Top Row */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '1.25rem',
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.78rem',
                      fontWeight: 700,
                      color: 'var(--accent)',
                    }}
                  >
                    [ {proj.id} / {proj.category} ]
                  </span>

                  {proj.featured && (
                    <span
                      style={{
                        backgroundColor: 'var(--accent)',
                        color: '#ffffff',
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.62rem',
                        fontWeight: 700,
                        textTransform: 'uppercase',
                        padding: '0.2rem 0.5rem',
                        letterSpacing: '0.1em',
                      }}
                    >
                      Featured Project
                    </span>
                  )}
                </div>

                {/* Title & Subtitle */}
                <h3
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '1.65rem',
                    fontWeight: 700,
                    letterSpacing: '-0.02em',
                    color: 'var(--text)',
                    lineHeight: 1.15,
                  }}
                >
                  {proj.title}
                </h3>
                <p
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.78rem',
                    color: 'var(--text-subtle)',
                    marginTop: '0.35rem',
                    marginBottom: '1rem',
                  }}
                >
                  {proj.subtitle}
                </p>

                <p
                  style={{
                    fontSize: '0.92rem',
                    lineHeight: 1.6,
                    color: 'var(--text-muted)',
                    marginBottom: '1.5rem',
                  }}
                >
                  {proj.description}
                </p>

                {/* Architecture Highlights */}
                <div
                  style={{
                    backgroundColor: 'var(--surface-subtle)',
                    border: '1px solid var(--hairline)',
                    padding: '1.1rem',
                    marginBottom: '1.5rem',
                  }}
                >
                  <p
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.68rem',
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      letterSpacing: '0.12em',
                      color: 'var(--text)',
                      marginBottom: '0.6rem',
                    }}
                  >
                    Architecture & Implementation:
                  </p>
                  <ul
                    style={{
                      listStyle: 'none',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '0.45rem',
                    }}
                  >
                    {proj.architecture.map((item, idx) => (
                      <li
                        key={idx}
                        style={{
                          fontSize: '0.82rem',
                          color: 'var(--text-muted)',
                          lineHeight: 1.45,
                          position: 'relative',
                          paddingLeft: '1rem',
                        }}
                      >
                        <span
                          style={{
                            position: 'absolute',
                            left: 0,
                            top: '0.35rem',
                            width: '4px',
                            height: '4px',
                            backgroundColor: 'var(--accent)',
                          }}
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Bottom Footer: Tech Tags & Links */}
              <div>
                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '0.35rem',
                    marginBottom: '1.5rem',
                  }}
                >
                  {proj.tech.map((t) => (
                    <span key={t} className="tag">
                      {t}
                    </span>
                  ))}
                </div>

                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                    borderTop: '1.5px solid var(--border)',
                    paddingTop: '1.25rem',
                  }}
                >
                  <a
                    href={proj.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-brutal"
                    style={{
                      flex: 1,
                      padding: '0.55rem 0.85rem',
                      fontSize: '0.72rem',
                      textDecoration: 'none',
                    }}
                  >
                    <GithubIcon size={14} />
                    <span>Source Code</span>
                  </a>

                  <a
                    href="#contact"
                    className="btn-ghost"
                    style={{
                      padding: '0.55rem 0.85rem',
                      fontSize: '0.72rem',
                      textDecoration: 'none',
                    }}
                  >
                    <ExternalLink size={14} />
                    <span>Details</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
