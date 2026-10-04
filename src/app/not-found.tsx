import Link from 'next/link';

export default function NotFound() {
  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem',
        textAlign: 'center',
        backgroundColor: 'var(--bg)',
        color: 'var(--text)',
      }}
    >
      <div
        style={{
          border: '1.5px solid var(--border)',
          backgroundColor: 'var(--surface)',
          padding: '2.5rem 3rem',
          boxShadow: '4px 4px 0px var(--border)',
          maxWidth: '480px',
        }}
      >
        <span
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.85rem',
            color: 'var(--accent)',
            fontWeight: 700,
            textTransform: 'uppercase',
            letterSpacing: '0.14em',
          }}
        >
          [ 404 · ERROR ]
        </span>
        <h1
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: '3rem',
            fontWeight: 800,
            margin: '0.75rem 0',
          }}
        >
          NOT FOUND
        </h1>
        <p
          style={{
            color: 'var(--text-muted)',
            fontSize: '0.95rem',
            marginBottom: '1.75rem',
            lineHeight: 1.6,
          }}
        >
          The page or system node you requested does not exist or has been relocated.
        </p>
        <Link
          href="/"
          className="btn-brutal"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            textDecoration: 'none',
          }}
        >
          Return to Headquarters →
        </Link>
      </div>
    </div>
  );
}
