'use client';

import { useState } from 'react';
import { Code2, Server, Database, Wrench, Brain, Terminal } from 'lucide-react';

export default function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const skillCategories = [
    {
      name: 'Languages',
      icon: <Code2 size={18} />,
      items: [
        { name: 'Java', level: 'Strong', note: 'Spring Boot, OOP Principles, MVC, Collections' },
        { name: 'JavaScript (ES6+)', level: 'Strong', note: 'DOM Manipulation, Async/Await, Web APIs' },
        { name: 'SQL (MySQL)', level: 'Strong', note: 'Relational Schema Design, Queries, ACID' },
        { name: 'TypeScript', level: 'Proficient', note: 'Strict typing, Generics, Interfaces' },
        { name: 'C++', level: 'Academic', note: 'Memory management, Pointers, Algorithms' },
        { name: 'Python', level: 'Intermediate', note: 'Scripting, Data structures, Automation' },
      ],
    },
    {
      name: 'Backend & Data',
      icon: <Server size={18} />,
      items: [
        { name: 'Spring Boot', level: 'Strong', note: 'RESTful Web Services, MVC, Repositories' },
        { name: 'MySQL', level: 'Strong', note: 'Database-driven applications, Normalization' },
        { name: 'REST APIs', level: 'Strong', note: 'Endpoint Architecture, JSON Payloads, CRUD' },
        { name: 'Node.js & Express', level: 'Proficient', note: 'Middleware, Backend APIs, Routing' },
        { name: 'PostgreSQL', level: 'Proficient', note: 'Relational design, Constraints' },
      ],
    },
    {
      name: 'Frontend & Web',
      icon: <Terminal size={18} />,
      items: [
        { name: 'HTML5 & Modern CSS', level: 'Strong', note: 'Semantic Markup, Responsive Design, Flex/Grid' },
        { name: 'JavaScript Client Logic', level: 'Strong', note: 'Interactive UI, Event handling, Fetch API' },
        { name: 'Next.js 15 & React', level: 'Proficient', note: 'Component Architecture, SSR, State' },
        { name: 'Tailwind & Vanilla CSS', level: 'Proficient', note: 'Custom styling, Design tokens' },
      ],
    },
    {
      name: 'Tools & DevOps',
      icon: <Wrench size={18} />,
      items: [
        { name: 'Git & GitHub', level: 'Strong', note: 'Branching, PRs, Rebase, Issue tracking' },
        { name: 'Docker', level: 'Working', note: 'Containerizing Node/Next.js services' },
        { name: 'Postman & Insomnia', level: 'Strong', note: 'API testing, mock servers, automation' },
        { name: 'Linux / Bash', level: 'Intermediate', note: 'Command line, shell scripts, permissions' },
        { name: 'Vercel & Railway', level: 'Proficient', note: 'CI/CD preview deployments, env vars' },
      ],
    },
    {
      name: 'Core CS Foundations',
      icon: <Brain size={18} />,
      items: [
        { name: 'Data Structures', level: 'Strong', note: 'Arrays, Hashmaps, Graphs, Trees, Heaps' },
        { name: 'Algorithms', level: 'Strong', note: 'Sorting, Searching, Dynamic Programming' },
        { name: 'OOP Principles', level: 'Strong', note: 'Encapsulation, Polymorphism, SOLID' },
        { name: 'System Design Basics', level: 'Learning', note: 'Caching, Load Balancers, Sharding' },
      ],
    },
  ];

  const categories = ['All', ...skillCategories.map((c) => c.name)];

  const displayedCategories =
    activeCategory === 'All'
      ? skillCategories
      : skillCategories.filter((c) => c.name === activeCategory);

  return (
    <section id="skills" className="section-pad">
      <div className="container-pad">
        {/* Section Header */}
        <header style={{ marginBottom: '3rem' }}>
          <div className="section-tag">
            <span className="section-tag-dot" />
            <span>05 / Skills</span>
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
              <h2 className="section-heading">Technical Arsenal.</h2>
              <p className="section-description">
                A solid repertoire of programming languages, modern frameworks, and engineering tooling honed through rigorous coursework and project execution.
              </p>
            </div>

            {/* Filter buttons */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  style={{
                    padding: '0.4rem 0.85rem',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.72rem',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                    border: '1.5px solid var(--border)',
                    backgroundColor: activeCategory === cat ? 'var(--text)' : 'var(--surface)',
                    color: activeCategory === cat ? 'var(--bg)' : 'var(--text)',
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

        {/* Categories List */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
          {displayedCategories.map((category) => (
            <div key={category.name}>
              {/* Category Title */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.65rem',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.85rem',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.12em',
                  color: 'var(--text)',
                  marginBottom: '1.25rem',
                  paddingBottom: '0.5rem',
                  borderBottom: '1.5px solid var(--border)',
                }}
              >
                <span style={{ color: 'var(--accent)' }}>{category.icon}</span>
                <span>{category.name}</span>
              </div>

              {/* Items Grid */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                  gap: '1.25rem',
                }}
              >
                {category.items.map((skill) => (
                  <div
                    key={skill.name}
                    className="card card-hover"
                    style={{
                      padding: '1.25rem',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      border: '1.5px solid var(--border)',
                      backgroundColor: 'var(--surface)',
                    }}
                  >
                    <div>
                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          marginBottom: '0.5rem',
                        }}
                      >
                        <h4
                          style={{
                            fontFamily: 'var(--font-display)',
                            fontSize: '1.05rem',
                            fontWeight: 700,
                            color: 'var(--text)',
                          }}
                        >
                          {skill.name}
                        </h4>

                        <span
                          style={{
                            fontFamily: 'var(--font-mono)',
                            fontSize: '0.65rem',
                            fontWeight: 700,
                            textTransform: 'uppercase',
                            padding: '0.15rem 0.45rem',
                            backgroundColor:
                              skill.level === 'Strong'
                                ? 'var(--accent)'
                                : 'var(--surface-subtle)',
                            color: skill.level === 'Strong' ? '#ffffff' : 'var(--text)',
                            border: '1px solid var(--hairline)',
                          }}
                        >
                          {skill.level}
                        </span>
                      </div>

                      <p
                        style={{
                          fontSize: '0.82rem',
                          color: 'var(--text-muted)',
                          lineHeight: 1.45,
                        }}
                      >
                        {skill.note}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
