'use client';

import { useState, useRef, useEffect } from 'react';
import { Terminal as TerminalIcon, CornerDownLeft, Sparkles } from 'lucide-react';

interface CommandLog {
  command: string;
  output: React.ReactNode;
}

export default function TerminalSection() {
  const [inputVal, setInputVal] = useState('');
  const [history, setHistory] = useState<CommandLog[]>([
    {
      command: 'welcome',
      output: (
        <div>
          <p style={{ color: 'var(--accent)', fontWeight: 700 }}>
            ⚡ Pramod Ravisanka Interactive Dev Console [Version 1.0.4]
          </p>
          <p style={{ marginTop: '0.25rem', color: 'var(--text-muted)' }}>
            Type <span style={{ color: 'var(--text)', fontWeight: 700 }}>&apos;help&apos;</span> to see available commands, or click any shortcut chip below.
          </p>
        </div>
      ),
    },
  ]);

  const terminalBodyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (terminalBodyRef.current) {
      terminalBodyRef.current.scrollTop = terminalBodyRef.current.scrollHeight;
    }
  }, [history]);

  const handleCommand = (cmd: string) => {
    const trimmed = cmd.trim().toLowerCase();
    let result: React.ReactNode;

    switch (trimmed) {
      case 'help':
        result = (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
            <p>Available commands:</p>
            <p>
              <strong style={{ color: 'var(--accent)' }}>about</strong> - Background & engineering mindset
            </p>
            <p>
              <strong style={{ color: 'var(--accent)' }}>skills</strong> - Core languages & frameworks
            </p>
            <p>
              <strong style={{ color: 'var(--accent)' }}>projects</strong> - Key applications engineered
            </p>
            <p>
              <strong style={{ color: 'var(--accent)' }}>education</strong> - University degree & status
            </p>
            <p>
              <strong style={{ color: 'var(--accent)' }}>hire</strong> - Internship readiness & pitch
            </p>
            <p>
              <strong style={{ color: 'var(--accent)' }}>contact</strong> - Direct email & socials
            </p>
            <p>
              <strong style={{ color: 'var(--accent)' }}>clear</strong> - Clear console window
            </p>
          </div>
        );
        break;

      case 'about':
        result = (
          <p>
            Pramod Ravisanka holds a Bachelor of Information Technology (BIT) from the University of Colombo (Colombo, SL). Passionate software engineer specializing in Java, Spring Boot, MySQL, REST APIs, and full-stack web architectures.
          </p>
        );
        break;

      case 'skills':
        result = (
          <div>
            <p>Languages: Java, JavaScript (ES6+), SQL (MySQL), TypeScript, C++, Python</p>
            <p>Backend & DB: Spring Boot, MySQL, REST APIs, Node.js, Express</p>
            <p>Frontend: HTML5, CSS3, JavaScript Client Logic, React / Next.js</p>
            <p>DevOps & Tools: Git, GitHub, Postman, Linux, Vercel</p>
          </div>
        );
        break;

      case 'projects':
        result = (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.45rem' }}>
            <p style={{ color: 'var(--accent)', fontWeight: 700 }}>
              ★ Transport Management System (06/2025 – 06/2026) · University of Colombo
            </p>
            <p style={{ color: 'var(--text)' }}>
              • Web-based enterprise system automating transportation and fleet management operations.
            </p>
            <p style={{ color: 'var(--text-muted)' }}>
              • Tech Stack: Java, Spring Boot, JavaScript, MySQL, HTML5, CSS3, REST APIs.
            </p>
            <p style={{ color: 'var(--text-muted)' }}>
              • Modules: Booking, Fleet, Driver, Supplier, Payment & Invoicing Management.
            </p>
            <p style={{ color: 'var(--text-muted)' }}>
              • Highlights: Database-driven REST APIs, end-to-end operational logic, proactive defect resolution.
            </p>
          </div>
        );
        break;

      case 'education':
        result = (
          <p>
            Bachelor of Information Technology (BIT) · University of Colombo (Colombo, SL). Core areas: Software Development, Relational Databases (MySQL), Enterprise Java, Spring Boot, REST APIs, Object-Oriented Design, and Web Systems.
          </p>
        );
        break;

      case 'hire':
        result = (
          <div style={{ color: 'var(--accent)' }}>
            <p>🚀 STATUS: OPEN FOR INTERNSHIPS & JUNIOR SOFTWARE ENGINEER ROLES</p>
            <p style={{ marginTop: '0.3rem', color: 'var(--text)' }}>
              Looking for a driven, fast-learning engineering intern who writes type-safe, maintainable code? Let&apos;s build together!
            </p>
          </div>
        );
        break;

      case 'contact':
        result = (
          <div>
            <p>Email: pramod.ravisanka.dev@gmail.com</p>
            <p>Location: Colombo, Sri Lanka (GMT +5:30)</p>
            <p>GitHub: github.com/pramodravisanka</p>
            <p>LinkedIn: linkedin.com/in/pramod-ravisanka</p>
          </div>
        );
        break;

      case 'clear':
        setHistory([]);
        setInputVal('');
        return;

      default:
        result = (
          <p style={{ color: 'var(--accent)' }}>
            Command not recognized: &quot;{cmd}&quot;. Type &quot;help&quot; for a list of commands.
          </p>
        );
        break;
    }

    setHistory((prev) => [...prev, { command: cmd, output: result }]);
    setInputVal('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputVal.trim()) return;
    handleCommand(inputVal);
  };

  return (
    <section id="terminal" className="section-pad">
      <div className="container-pad">
        {/* Section Header */}
        <header style={{ marginBottom: '2.5rem' }}>
          <div className="section-tag">
            <span className="section-tag-dot" />
            <span>06 / Interactive Console</span>
          </div>
          <h2 className="section-heading">Dev Playground.</h2>
          <p className="section-description">
            Explore my profile using a lightweight in-browser terminal console. Type commands or trigger quick shortcuts.
          </p>
        </header>

        {/* Terminal Window Box */}
        <div
          className="card"
          style={{
            maxWidth: '880px',
            margin: '0 auto',
            border: '2px solid var(--border)',
            backgroundColor: 'var(--surface)',
            boxShadow: '6px 6px 0px var(--border)',
            overflow: 'hidden',
          }}
        >
          {/* Terminal Title Bar */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              backgroundColor: 'var(--text)',
              color: 'var(--bg)',
              padding: '0.65rem 1.25rem',
              borderBottom: '1.5px solid var(--border)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
              <TerminalIcon size={16} style={{ color: 'var(--accent)' }} />
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.78rem',
                  fontWeight: 700,
                  letterSpacing: '0.08em',
                }}
              >
                pramod@terminal: ~ (zsh)
              </span>
            </div>

            <div style={{ display: 'flex', gap: '0.45rem' }}>
              <span style={{ width: '10px', height: '10px', backgroundColor: '#ff5f56', display: 'inline-block' }} />
              <span style={{ width: '10px', height: '10px', backgroundColor: '#ffbd2e', display: 'inline-block' }} />
              <span style={{ width: '10px', height: '10px', backgroundColor: '#27c93f', display: 'inline-block' }} />
            </div>
          </div>

          {/* Terminal Quick Command Chips */}
          <div
            style={{
              padding: '0.75rem 1.25rem',
              borderBottom: '1px solid var(--hairline)',
              backgroundColor: 'var(--surface-subtle)',
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              gap: '0.5rem',
            }}
          >
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.7rem',
                color: 'var(--text-subtle)',
                textTransform: 'uppercase',
              }}
            >
              Shortcuts:
            </span>
            {['help', 'about', 'skills', 'projects', 'education', 'hire', 'contact', 'clear'].map(
              (c) => (
                <button
                  key={c}
                  type="button"
                  onClick={() => handleCommand(c)}
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.68rem',
                    fontWeight: 700,
                    padding: '0.15rem 0.5rem',
                    border: '1px solid var(--border)',
                    backgroundColor: 'var(--surface)',
                    color: 'var(--text)',
                    cursor: 'pointer',
                    transition: 'all var(--transition-quick)',
                  }}
                >
                  ${c}
                </button>
              )
            )}
          </div>

          {/* Terminal Body */}
          <div
            ref={terminalBodyRef}
            style={{
              padding: '1.5rem',
              minHeight: '260px',
              maxHeight: '400px',
              overflowY: 'auto',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.85rem',
              lineHeight: 1.6,
              color: 'var(--text)',
            }}
          >
            {history.map((item, idx) => (
              <div key={idx} style={{ marginBottom: '1.25rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-muted)' }}>
                  <span style={{ color: 'var(--accent)', fontWeight: 700 }}>❯</span>
                  <span style={{ fontWeight: 700, color: 'var(--text)' }}>{item.command}</span>
                </div>
                <div style={{ marginTop: '0.4rem', paddingLeft: '1rem', color: 'var(--text-muted)' }}>
                  {item.output}
                </div>
              </div>
            ))}
          </div>

          {/* Terminal Input Form */}
          <form
            onSubmit={handleSubmit}
            style={{
              display: 'flex',
              alignItems: 'center',
              borderTop: '1.5px solid var(--border)',
              backgroundColor: 'var(--surface-subtle)',
              padding: '0.75rem 1.25rem',
            }}
          >
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.9rem',
                color: 'var(--accent)',
                fontWeight: 700,
                marginRight: '0.5rem',
              }}
            >
              ❯
            </span>
            <input
              type="text"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              placeholder="Type a command (e.g. 'help', 'hire')..."
              style={{
                flex: 1,
                border: 'none',
                outline: 'none',
                backgroundColor: 'transparent',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.85rem',
                color: 'var(--text)',
              }}
            />
            <button
              type="submit"
              aria-label="Execute command"
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                color: 'var(--text)',
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <CornerDownLeft size={16} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
