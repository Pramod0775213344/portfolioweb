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
        { name: 'TypeScript', level: 'Strong', note: 'Strict typing, Generics, Utility Types' },
        { name: 'JavaScript (ES6+)', level: 'Strong', note: 'Async/Await, Closures, Event Loop' },
        { name: 'Java', level: 'Intermediate', note: 'OOP, Collections, Threads' },
        { name: 'Python', level: 'Intermediate', note: 'Scripting, Data handling, FastAPI' },
        { name: 'SQL', level: 'Strong', note: 'Complex Joins, Indexes, Schema Design' },
        { name: 'C++', level: 'Academic', note: 'Memory management, Pointers, Algorithms' },
      ],
    },
    {
      name: 'Frontend & Web',
      icon: <Terminal size={18} />,
      items: [
        { name: 'Next.js 15', level: 'Strong', note: 'App Router, Server Components, SSR' },
        { name: 'React 19', level: 'Strong', note: 'Custom Hooks, Context, State Optimization' },
        { name: 'HTML5 & Modern CSS', level: 'Strong', note: 'Grid, Flexbox, Semantic Markup, a11y' },
        { name: 'Tailwind CSS', level: 'Proficient', note: 'Design systems, responsive utilities' },
        { name: 'REST APIs & Fetch', level: 'Strong', note: 'Error handling, caching, JWT auth' },
      ],
    },
    {
      name: 'Backend & Data',
      icon: <Server size={18} />,
      items: [
        { name: 'Node.js & Express', level: 'Proficient', note: 'Middleware, REST endpoints, Streams' },
        { name: 'PostgreSQL', level: 'Proficient', note: 'Relational design, Constraints, Migrations' },
        { name: 'Prisma ORM', level: 'Strong', note: 'Schema modeling, Type-safe client queries' },
        { name: 'MongoDB', level: 'Working', note: 'Document schemas, Aggregations' },
        { name: 'Redis', level: 'Working', note: 'Key-value caching, Pub/Sub basics' },
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
