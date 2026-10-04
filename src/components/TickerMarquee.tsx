'use client';

export default function TickerMarquee() {
  const items = [
    'Software Engineering',
    'Full Stack Systems',
    'Next.js 15 & React',
    'TypeScript & Node.js',
    'Data Structures & Algorithms',
    'API Architecture',
    'PostgreSQL & Databases',
    'Clean Architecture',
    'Git & DevOps Basics',
    'Problem Solving Mindset',
  ];

  return (
    <div
      style={{
        overflow: 'hidden',
        borderTop: '1.5px solid var(--border)',
        borderBottom: '1.5px solid var(--border)',
        backgroundColor: '#0c0b0a',
        color: '#f5f2eb',
        padding: '0.8rem 0',
      }}
    >
      <div className="animate-marquee">
        {/* First track */}
        <div style={{ display: 'flex', alignItems: 'center', whiteSpace: 'nowrap' }}>
          {items.map((item, index) => (
            <div
              key={`a-${index}`}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '1.25rem',
                padding: '0 1.5rem',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.78rem',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.14em',
              }}
            >
              <span>{item}</span>
              <span style={{ color: 'var(--accent)', fontWeight: 800, fontSize: '0.9rem' }}>+</span>
            </div>
          ))}
        </div>

        {/* Duplicate track for seamless infinite scroll */}
        <div style={{ display: 'flex', alignItems: 'center', whiteSpace: 'nowrap' }}>
          {items.map((item, index) => (
            <div
              key={`b-${index}`}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '1.25rem',
                padding: '0 1.5rem',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.78rem',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.14em',
              }}
            >
              <span>{item}</span>
              <span style={{ color: 'var(--accent)', fontWeight: 800, fontSize: '0.9rem' }}>+</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
