'use client';

import { useState, useEffect } from 'react';
import { Mail, Clock, Copy, Check, Send, MapPin } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '@/components/Icons';

export default function ContactSection() {
  const [copied, setCopied] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [currentTime, setCurrentTime] = useState<string>('');

  const emailAddress = 'pramod.ravisanka.dev@gmail.com';

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      // Sri Lanka is UTC+5:30
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'Asia/Colombo',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
      };
      setCurrentTime(new Intl.DateTimeFormat('en-US', options).format(now));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;
    setFormSubmitted(true);
    setTimeout(() => {
      setFormState({ name: '', email: '', message: '' });
      setFormSubmitted(false);
    }, 4000);
  };

  return (
    <section id="contact" className="section-pad">
      <div className="container-pad">
        {/* Section Header */}
        <header style={{ marginBottom: '3.5rem' }}>
          <div className="section-tag">
            <span className="section-tag-dot" />
            <span>07 / Contact</span>
          </div>
          <h2 className="section-heading">Get In Touch.</h2>
          <p className="section-description">
            Looking for an energetic, disciplined software engineering intern who is eager to contribute and learn? Let&apos;s connect.
          </p>
        </header>

        {/* Contact Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '3rem',
          }}
          className="contact-grid"
        >
          {/* Left Column: Coordinates & Timezone Info */}
          <div>
            <div
              className="card"
              style={{
                padding: '2.5rem',
                border: '1.5px solid var(--border)',
                backgroundColor: 'var(--surface)',
                boxShadow: '4px 4px 0px var(--border)',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <div>
                <h3
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '1.8rem',
                    fontWeight: 700,
                    color: 'var(--text)',
                    lineHeight: 1.2,
                    marginBottom: '1rem',
                  }}
                >
                  Have an opportunity or project?
                </h3>
                <p
                  style={{
                    fontSize: '1rem',
                    lineHeight: 1.65,
                    color: 'var(--text-muted)',
                    marginBottom: '2rem',
                  }}
                >
                  I am actively seeking software engineering internship placements and junior developer roles. Whether you have an open vacancy or want to chat about system design, feel free to reach out.
                </p>

                {/* Email Copy Card */}
                <div
                  style={{
                    backgroundColor: 'var(--surface-subtle)',
                    border: '1.5px solid var(--border)',
                    padding: '1.25rem',
                    marginBottom: '1.75rem',
                  }}
                >
                  <p
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.68rem',
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      color: 'var(--text-subtle)',
                      letterSpacing: '0.1em',
                      marginBottom: '0.5rem',
                    }}
                  >
                    Direct Email
                  </p>
                  <div
                    style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      gap: '0.75rem',
                    }}
                  >
                    <span
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.92rem',
                        fontWeight: 700,
                        color: 'var(--text)',
                      }}
                    >
                      {emailAddress}
                    </span>
                    <button
                      type="button"
                      onClick={handleCopyEmail}
                      className="btn-brutal"
                      style={{
                        padding: '0.4rem 0.75rem',
                        fontSize: '0.7rem',
                      }}
                    >
                      {copied ? (
                        <>
                          <Check size={14} />
                          <span>Copied!</span>
                        </>
                      ) : (
                        <>
                          <Copy size={14} />
                          <span>Copy</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>

                {/* Live Clock & Location Widget */}
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(2, 1fr)',
                    gap: '1rem',
                    marginBottom: '2rem',
                  }}
                >
                  <div
                    style={{
                      backgroundColor: 'var(--surface-subtle)',
                      border: '1px solid var(--hairline)',
                      padding: '1rem',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--accent)' }}>
                      <Clock size={14} />
                      <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', fontWeight: 700, textTransform: 'uppercase' }}>
                        Local Time
                      </span>
                    </div>
                    <div
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '1.1rem',
                        fontWeight: 700,
                        color: 'var(--text)',
                        marginTop: '0.35rem',
                      }}
                    >
                      {currentTime || 'Loading...'}
                    </div>
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', color: 'var(--text-subtle)' }}>
                      GMT +5:30
                    </div>
                  </div>

                  <div
                    style={{
                      backgroundColor: 'var(--surface-subtle)',
                      border: '1px solid var(--hairline)',
                      padding: '1rem',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--accent)' }}>
                      <MapPin size={14} />
                      <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', fontWeight: 700, textTransform: 'uppercase' }}>
                        Base
                      </span>
                    </div>
                    <div
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '1.1rem',
                        fontWeight: 700,
                        color: 'var(--text)',
                        marginTop: '0.35rem',
                      }}
                    >
                      Colombo
                    </div>
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', color: 'var(--text-subtle)' }}>
                      Sri Lanka
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div>
                <p
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.72rem',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.12em',
                    color: 'var(--text)',
                    marginBottom: '0.75rem',
                  }}
                >
                  Connect online:
                </p>
                <div style={{ display: 'flex', gap: '0.75rem' }}>
                  <a
                    href="https://github.com/pramodravisanka"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-ghost"
                    style={{ padding: '0.5rem 0.85rem', fontSize: '0.75rem' }}
                  >
                    <GithubIcon size={15} />
                    <span>GitHub</span>
                  </a>
                  <a
                    href="https://linkedin.com/in/pramod-ravisanka"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-ghost"
                    style={{ padding: '0.5rem 0.85rem', fontSize: '0.75rem' }}
                  >
                    <LinkedinIcon size={15} />
                    <span>LinkedIn</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Form */}
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
              <h3
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.45rem',
                  fontWeight: 700,
                  color: 'var(--text)',
                  marginBottom: '1.5rem',
                }}
              >
                Send a Message
              </h3>

              {formSubmitted ? (
                <div
                  style={{
                    padding: '2rem',
                    backgroundColor: 'var(--surface-subtle)',
                    border: '1.5px solid var(--accent)',
                    textAlign: 'center',
                  }}
                >
                  <div
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: '44px',
                      height: '44px',
                      backgroundColor: 'var(--accent)',
                      color: '#ffffff',
                      marginBottom: '1rem',
                    }}
                  >
                    <Check size={24} />
                  </div>
                  <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem', fontWeight: 700 }}>
                    Message Received!
                  </h4>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginTop: '0.5rem' }}>
                    Thank you for reaching out, Pramod will respond promptly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                  <div>
                    <label
                      htmlFor="name"
                      style={{
                        display: 'block',
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.72rem',
                        fontWeight: 700,
                        textTransform: 'uppercase',
                        letterSpacing: '0.1em',
                        color: 'var(--text)',
                        marginBottom: '0.4rem',
                      }}
                    >
                      Your Name *
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      placeholder="e.g. Kasun Fernando"
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '0.75rem 1rem',
                        border: '1.5px solid var(--border)',
                        backgroundColor: 'var(--bg)',
                        color: 'var(--text)',
                        fontFamily: 'var(--font-sans)',
                        fontSize: '0.95rem',
                        outline: 'none',
                      }}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      style={{
                        display: 'block',
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.72rem',
                        fontWeight: 700,
                        textTransform: 'uppercase',
                        letterSpacing: '0.1em',
                        color: 'var(--text)',
                        marginBottom: '0.4rem',
                      }}
                    >
                      Your Email *
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      placeholder="e.g. kasun@company.com"
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '0.75rem 1rem',
                        border: '1.5px solid var(--border)',
                        backgroundColor: 'var(--bg)',
                        color: 'var(--text)',
                        fontFamily: 'var(--font-sans)',
                        fontSize: '0.95rem',
                        outline: 'none',
                      }}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      style={{
                        display: 'block',
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.72rem',
                        fontWeight: 700,
                        textTransform: 'uppercase',
                        letterSpacing: '0.1em',
                        color: 'var(--text)',
                        marginBottom: '0.4rem',
                      }}
                    >
                      Message / Opportunity *
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      required
                      placeholder="Tell me about the role, team, or project..."
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '0.75rem 1rem',
                        border: '1.5px solid var(--border)',
                        backgroundColor: 'var(--bg)',
                        color: 'var(--text)',
                        fontFamily: 'var(--font-sans)',
                        fontSize: '0.95rem',
                        outline: 'none',
                        resize: 'vertical',
                      }}
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn-brutal"
                    style={{
                      width: '100%',
                      padding: '0.85rem',
                      justifyContent: 'center',
                    }}
                  >
                    <span>Transmit Message</span>
                    <Send size={15} />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (min-width: 900px) {
          .contact-grid {
            grid-template-columns: 5fr 6fr !important;
            gap: 3.5rem !important;
          }
        }
      `}</style>
    </section>
  );
}
