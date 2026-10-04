'use client';

import { useState } from 'react';
import { Award, BookOpen, Trophy, Code, Layers, Calendar, CheckCircle } from 'lucide-react';

export default function AcademicSection() {
  const [activeTab, setActiveTab] = useState(0);

  const journeyData = [
    {
      id: '01',
      period: 'University of Colombo',
      badge: 'Academic Degree',
      title: 'Bachelor of Information Technology (BIT)',
      institution: 'University of Colombo · Colombo, SL',
      overview:
        'Bachelor of Information Technology (BIT) at the University of Colombo, Colombo, SL. Rigorous academic training spanning modern software development, enterprise application architecture, relational database management, object-oriented programming, and web technologies.',
      metrics: [
        { label: 'Degree', val: 'BIT', desc: 'Bachelor of Information Technology' },
        { label: 'Institution', val: 'Univ. Colombo', desc: 'University of Colombo, Colombo, SL' },
        { label: 'Availability', val: 'Immediate', desc: 'Seeking Software Engineering Roles' },
      ],
      highlights: [
        'Enterprise Application Development & Object-Oriented Software Engineering (Java, OOP principles)',
        'Relational Database Management Systems (MySQL, normalization, schema modeling, ACID transactions)',
        'Full-Stack Web Development & RESTful API Architecture (Spring Boot, JavaScript, HTML5, CSS3)',
        'Data Structures, Algorithms, Software Lifecycle, and System Requirements Analysis',
      ],
      skills: ['Java', 'Spring Boot', 'MySQL', 'JavaScript', 'REST APIs', 'OOP', 'Data Structures'],
    },
    {
      id: '02',
      period: '06/2025 → 06/2026',
      badge: 'Capstone System',
      title: 'Transport Management System',
      institution: 'Software Development Project · University of Colombo',
      overview:
        'Developed an end-to-end web-based Transport Management System to automate transportation and fleet management operations across reservations, vehicle assets, drivers, suppliers, and billing.',
      metrics: [
        { label: 'Core Modules', val: '6 Modules', desc: 'Booking, Fleet, Driver, Supplier, Billing' },
        { label: 'Core Tech', val: 'Spring Boot', desc: 'Java + MySQL Database Engine' },
        { label: 'Architecture', val: 'REST APIs', desc: 'Database-driven backend services' },
      ],
      highlights: [
        'Developed a web-based Transport Management System to automate transportation and fleet management operations.',
        'Implemented application functionality using Java, Spring Boot, JavaScript, MySQL, HTML and CSS.',
        'Developed modules for booking, fleet, driver, supplier, payment and invoicing management.',
        'Worked with REST APIs and database-driven application functionality.',
        'Identified and resolved functional issues during development.',
      ],
      skills: ['Java', 'Spring Boot', 'MySQL', 'JavaScript', 'HTML/CSS', 'REST APIs', 'Debugging'],
    },
    {
      id: '03',
      period: '2024 → Present',
      badge: 'Engineering Ethos',
      title: 'Disciplined Development & Best Practices',
      institution: 'Software Engineering Standards & Workflows',
      overview:
        'Applying industry-grade engineering discipline across every line of code: structured Git branching, clean modularization, defensive error handling, and high-performance frontend interfaces.',
      metrics: [
        { label: 'Source Control', val: 'Git & GitHub', desc: 'Atomic commits & tracking' },
        { label: 'Code Quality', val: 'Defensive', desc: 'Functional defect resolution' },
        { label: 'Methodology', val: 'SDLC', desc: 'Agile & modular architecture' },
      ],
      highlights: [
        'Structured RESTful API design with clean request/response data contracts.',
        'Normalized relational database modeling enforcing constraints, relationships, and ACID principles.',
        'Responsive, accessible web interfaces built with modern semantic standards.',
      ],
      skills: ['Git', 'REST APIs', 'Database Modeling', 'Code Quality', 'Clean Architecture'],
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
