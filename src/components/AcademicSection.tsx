'use client';

import { useState } from 'react';
import { Award, BookOpen, Trophy, Code, Layers, Calendar, CheckCircle } from 'lucide-react';

export default function AcademicSection() {
  const [activeTab, setActiveTab] = useState(0);

  const journeyData = [
    {
      id: '01',
      period: '2023 → Present',
      badge: 'Academic Major',
      title: 'BSc (Hons) in Software Engineering',
      institution: 'University Computing Faculty · Sri Lanka',
      overview:
        'Pursuing an intensive undergraduate degree emphasizing computer science foundations, algorithm analysis, distributed architectures, database modeling, and modern software engineering practices.',
      metrics: [
        { label: 'Core Coursework', val: '18+', desc: 'Modules completed with distinction' },
        { label: 'Lab Practical', val: '100+', desc: 'Hours of hands-on software labs' },
        { label: 'Status', val: 'Undergrad', desc: 'Seeking Internship / Placement' },
      ],
      highlights: [
        'Advanced Data Structures & Algorithms (Big-O analysis, graphs, trees, dynamic programming)',
        'Object-Oriented Analysis & Design (Design patterns, UML modeling, refactoring)',
        'Relational Database Management Systems (PostgreSQL/MySQL, normalization, indexing, ACID transactions)',
        'Web Application Development & RESTful API Architecture',
      ],
      skills: ['Java', 'C++', 'Python', 'SQL', 'Data Structures', 'OOP', 'Software Architecture'],
    },
    {
      id: '02',
      period: '2024 → 2025',
      badge: 'Competitive Sprints',
      title: 'Hackathons & Engineering Contests',
      institution: 'University & National Tech Challenges',
      overview:
        'Collaborated in high-intensity team hackathons, building end-to-end working prototypes within 24 to 48 hour deadlines under pressure.',
      metrics: [
        { label: 'Hackathons', val: '3+', desc: 'National & Inter-university events' },
        { label: 'Team Size', val: '4-5', desc: 'Engineers collaborating with Git' },
        { label: 'Execution', val: '24-48h', desc: 'From zero to deployed MVP' },
      ],
      highlights: [
        'Built rapid full-stack MVPs incorporating authentication, cloud databases, and reactive UIs.',
        'Managed fast Git branching strategies, issue tracking, and conflict resolution during sprint deadlines.',
        'Pitched solutions, architecture diagrams, and live demos directly to industry technical judges.',
      ],
      skills: ['Rapid Prototyping', 'Teamwork', 'Git Workflows', 'API Integration', 'UI/UX Sprints'],
    },
    {
      id: '03',
      period: '2024 → Present',
      badge: 'Self-Directed',
      title: 'Autonomous Engineering Labs',
      institution: 'Self-Driven Deep Work & Open Source',
      overview:
        'Going beyond classroom curricula to master production web standards, Next.js 15 App Router, TypeScript strict mode, Prisma ORM, and cloud deployments.',
      metrics: [
        { label: 'Projects Built', val: '8+', desc: 'Full-stack & systems tools' },
        { label: 'GitHub Commits', val: '450+', desc: 'Continuous daily coding activity' },
        { label: 'Documentation', val: '100%', desc: 'Detailed README & schemas' },
      ],
      highlights: [
        'Designed production-grade Next.js applications featuring server-side rendering, streaming, and API routes.',
        'Implemented secure authentication with session management, password hashing, and role-based access.',
        'Explored Docker containerization and serverless deployments on Vercel and Railway.',
      ],
      skills: ['Next.js 15', 'TypeScript', 'Node.js', 'Prisma', 'Tailwind', 'Docker', 'Vercel'],
    },
    {
      id: '04',
      period: '2023 → 2024',
      badge: 'Credentials',
      title: 'Specializations & Certifications',
      institution: 'Global Online Learning Platforms',
      overview:
        'Completed structured coursework and practical certifications covering modern full-stack development, database query optimization, and foundational cloud principles.',
      metrics: [
        { label: 'Certificates', val: '5+', desc: 'Verified technical completions' },
        { label: 'Problem Solving', val: '150+', desc: 'LeetCode & HackerRank challenges' },
        { label: 'Self Study', val: 'Daily', desc: 'Reading technical RFCs & articles' },
      ],
      highlights: [
        'Meta Front-End & Full-Stack Engineering Coursework.',
        'HackerRank Problem Solving (Intermediate) Certificate.',
        'Responsive Web Design & Modern JavaScript Algorithms.',
      ],
      skills: ['JavaScript ES6+', 'React', 'Problem Solving', 'Data Structures', 'Web Accessibility'],
    },
  ];

  const current = journeyData[activeTab];

  return (
    <section id="journey" className="section-pad">
      <div className="container-pad">
        {/* Section Header */}
        <header style={{ marginBottom: '3.5rem' }}>
          <div className="section-tag">
            <span className="section-tag-dot" />
            <span>03 / Journey</span>
          </div>
          <h2 className="section-heading">Academic & Practical Path.</h2>
          <p className="section-description">
            How I spend my time: foundational computer science, high-stakes university hackathons, and self-directed engineering projects.
          </p>
        </header>

        {/* Layout: Left Sidebar Selectors & Right Content Display (matching Harsha's experience layout) */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '2.5rem',
          }}
          className="journey-grid"
        >
          {/* Left Buttons Sidebar */}
          <div>
            <div
              className="card"
              style={{
                display: 'flex',
                flexDirection: 'column',
                border: '1.5px solid var(--border)',
                backgroundColor: 'var(--surface)',
              }}
            >
              {journeyData.map((item, index) => {
                const isActive = activeTab === index;
                return (
                  <button
                    key={item.id}
                    onClick={() => setActiveTab(index)}
                    style={{
                      display: 'block',
                      width: '100%',
                      padding: '1.25rem 1.5rem',
                      textAlign: 'left',
                      backgroundColor: isActive ? 'var(--surface-subtle)' : 'transparent',
                      border: 'none',
                      borderBottom:
                        index < journeyData.length - 1 ? '1.5px solid var(--border)' : 'none',
                      borderLeft: isActive ? '4px solid var(--accent)' : '4px solid transparent',
                      cursor: 'pointer',
                      transition: 'all var(--transition-quick)',
                    }}
                  >
                    <span
                      style={{
                        display: 'block',
                        fontFamily: 'var(--font-mono)',
                        fontSize: '1.4rem',
                        fontWeight: 700,
                        color: isActive ? 'var(--accent)' : 'var(--text-subtle)',
                        lineHeight: 1,
                      }}
                    >
                      {item.id}
                    </span>
                    <h3
                      style={{
                        marginTop: '0.4rem',
                        fontFamily: 'var(--font-display)',
                        fontSize: '0.95rem',
                        fontWeight: 700,
                        color: 'var(--text)',
                      }}
                    >
                      {item.title}
                    </h3>
                    <p
                      style={{
                        marginTop: '0.2rem',
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.72rem',
                        color: 'var(--text-subtle)',
                      }}
                    >
                      {item.period}
                    </p>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Detail Pane */}
          <div>
            <div
              className="card"
              style={{
                padding: '2.5rem',
                border: '1.5px solid var(--border)',
                backgroundColor: 'var(--surface)',
                boxShadow: '4px 4px 0px var(--border)',
              }}
            >
              {/* Header Info */}
              <div style={{ marginBottom: '2rem' }}>
                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    alignItems: 'center',
                    gap: '0.75rem',
                    marginBottom: '0.5rem',
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.72rem',
                      color: 'var(--text-subtle)',
                    }}
                  >
                    {current.period}
                  </span>
                  <span
                    style={{
                      backgroundColor: 'var(--accent)',
                      color: '#ffffff',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.65rem',
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      letterSpacing: '0.12em',
                      padding: '0.2rem 0.6rem',
                    }}
                  >
                    {current.badge}
                  </span>
                </div>

                <h3
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 'clamp(1.5rem, 3vw, 2.1rem)',
                    fontWeight: 700,
                    color: 'var(--text)',
                    lineHeight: 1.15,
                  }}
                >
                  {current.title}
                </h3>
                <p
                  style={{
                    marginTop: '0.35rem',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.85rem',
                    color: 'var(--text-muted)',
                  }}
                >
                  {current.institution}
                </p>
                <p
                  style={{
                    marginTop: '1rem',
                    fontSize: '1rem',
                    lineHeight: 1.65,
                    color: 'var(--text-muted)',
                  }}
                >
                  {current.overview}
                </p>
              </div>

              {/* Metrics Grid */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
                  gap: '1rem',
                  marginBottom: '2rem',
                }}
              >
                {current.metrics.map((m, idx) => (
                  <div
                    key={idx}
                    className="card"
                    style={{
                      padding: '1rem',
                      border: '1px solid var(--hairline)',
                      backgroundColor: 'var(--surface-subtle)',
                    }}
                  >
                    <div
                      style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: '1.6rem',
                        fontWeight: 700,
                        color: 'var(--text)',
                      }}
                    >
                      {m.val}
                    </div>
                    <div
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.72rem',
                        fontWeight: 700,
                        textTransform: 'uppercase',
                        color: 'var(--accent)',
                        marginTop: '0.2rem',
                      }}
                    >
                      {m.label}
                    </div>
                    <div style={{ fontSize: '0.78rem', color: 'var(--text-subtle)', marginTop: '0.2rem' }}>
                      {m.desc}
                    </div>
                  </div>
                ))}
              </div>

              {/* Key Highlights */}
              <div style={{ marginBottom: '2rem' }}>
                <h4
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.12em',
                    color: 'var(--text)',
                    marginBottom: '1rem',
                  }}
                >
                  Key Highlights & Knowledge Gained:
                </h4>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  {current.highlights.map((h, idx) => (
                    <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                      <CheckCircle
                        size={16}
                        style={{ color: 'var(--accent)', marginTop: '0.25rem', flexShrink: 0 }}
                      />
                      <span style={{ fontSize: '0.92rem', color: 'var(--text-muted)', lineHeight: 1.5 }}>
                        {h}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Skill Tags */}
              <div style={{ borderTop: '1px solid var(--hairline)', paddingTop: '1.25rem' }}>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                  {current.skills.map((s) => (
                    <span key={s} className="tag tag-accent">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (min-width: 900px) {
          .journey-grid {
            grid-template-columns: 280px 1fr !important;
            gap: 2rem !important;
          }
        }
      `}</style>
    </section>
  );
}
