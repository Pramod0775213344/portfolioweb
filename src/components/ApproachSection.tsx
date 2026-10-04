'use client';

import { CheckCircle2, ShieldAlert, Cpu, Activity, Users, GitBranch } from 'lucide-react';

export default function ApproachSection() {
  const steps = [
    {
      num: '01',
      title: 'Deconstruct the problem first',
      desc: 'Before touching any framework or library, I map out the requirements, data flow, edge cases, and constraints. Clear requirements save days of rewrites.',
      icon: <CheckCircle2 size={20} />,
      tags: ['Requirements', 'Data Modeling', 'Edge Cases'],
    },
    {
      num: '02',
      title: 'Choose the simplest reliable tool',
      desc: 'No resume-driven development. I pick technologies that solve the actual challenge cleanly—prioritizing proven, type-safe, and well-supported ecosystems like TypeScript and Next.js.',
      icon: <Cpu size={20} />,
      tags: ['Pragmatic Tech', 'Type Safety', 'Modularity'],
    },
    {
      num: '03',
      title: 'Maintain clean separation of concerns',
      desc: 'Separating business logic from presentation and data access layers. Small, single-responsibility components and deterministic pure helper functions keep codebases maintainable.',
      icon: <GitBranch size={20} />,
      tags: ['Clean Architecture', 'SOLID', 'Readable Code'],
    },
    {
      num: '04',
      title: 'Assume failure and handle it gracefully',
      desc: 'Network requests drop, APIs timeout, and users enter unexpected inputs. I incorporate defensive validation, error boundaries, and intuitive loading states from day one.',
      icon: <ShieldAlert size={20} />,
      tags: ['Error Boundaries', 'Zod Validation', 'Defensive UI'],
    },
    {
      num: '05',
      title: 'Measure performance & accessibility',
      desc: 'A web app should be fast and accessible to everyone. I monitor Core Web Vitals, server response times, semantic HTML tags, and responsive keyboard navigation.',
      icon: <Activity size={20} />,
      tags: ['Web Vitals', 'Lighthouse 95+', 'a11y Standards'],
    },
    {
      num: '06',
      title: 'Write for the engineer reading tomorrow',
      desc: 'Code is read 10x more often than it is written. I maintain strict Git conventions, self-explanatory variable names, and clear README documentation for seamless onboarding.',
      icon: <Users size={20} />,
      tags: ['Documentation', 'Git Discipline', 'Team Empathy'],
    },
  ];

  return (
    <section id="approach" className="section-pad">
      <div className="container-pad">
        {/* Section Header */}
        <header style={{ marginBottom: '4rem' }}>
          <div className="section-tag">
            <span className="section-tag-dot" />
            <span>02 / How I Think & Build</span>
          </div>
          <h2 className="section-heading">Engineering Philosophy.</h2>
          <p className="section-description">
            A disciplined development process grounded in first principles. Start from the problem, pick the right tool for its shape, and build something that is predictable, robust, and a joy to maintain.
          </p>
        </header>

        {/* Steps Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '1.75rem',
          }}
        >
          {steps.map((step) => (
            <div
              key={step.num}
              className="card card-hover"
              style={{
                padding: '2rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <div>
                {/* Step Top Bar */}
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
                      fontSize: '1.25rem',
                      fontWeight: 700,
                      color: 'var(--text)',
                      backgroundColor: 'var(--surface-subtle)',
                      padding: '0.2rem 0.6rem',
                      border: '1px solid var(--hairline)',
                    }}
                  >
                    {step.num}
                  </span>

                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: '40px',
                      height: '40px',
                      backgroundColor: 'var(--accent)',
                      color: '#ffffff',
                      border: '1.5px solid var(--border)',
                    }}
                  >
                    {step.icon}
                  </div>
                </div>

                <h3
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '1.25rem',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '-0.02em',
                    lineHeight: 1.25,
                    marginBottom: '0.85rem',
                    color: 'var(--text)',
                  }}
                >
                  {step.title}
                </h3>

                <p
                  style={{
                    fontSize: '0.92rem',
                    lineHeight: 1.6,
                    color: 'var(--text-muted)',
                    marginBottom: '1.5rem',
                  }}
                >
                  {step.desc}
                </p>
              </div>

              {/* Step Tags */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', borderTop: '1px solid var(--hairline)', paddingTop: '1rem' }}>
                {step.tags.map((tag) => (
                  <span key={tag} className="tag">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
