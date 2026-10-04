import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Pramod Ravisanka · Software Engineering Undergraduate',
  description:
    'Software engineering undergraduate focused on modern web architectures, distributed systems, and clean code. Building robust solutions from first principles.',
  authors: [{ name: 'Pramod Ravisanka' }],
  creator: 'Pramod Ravisanka',
  keywords: [
    'Pramod Ravisanka',
    'Software Engineer',
    'Undergraduate',
    'Next.js',
    'TypeScript',
    'React',
    'Full Stack Developer',
    'Sri Lanka',
    'Portfolio',
    'Student Developer',
  ],
  metadataBase: new URL('https://pramodravisanka.dev'),
  openGraph: {
    title: 'Pramod Ravisanka · Software Engineering Undergraduate',
    description:
      'Software engineering undergraduate focused on modern web architectures, distributed systems, and clean code. Building robust solutions from first principles.',
    url: 'https://pramodravisanka.dev',
    siteName: 'Pramod Ravisanka Portfolio',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pramod Ravisanka · Software Engineering Undergraduate',
    description:
      'Building robust solutions from first principles. Open to internships and junior developer roles.',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Pramod Ravisanka',
    jobTitle: 'Software Engineering Undergraduate',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'LK',
      addressLocality: 'Colombo',
    },
    knowsAbout: [
      'Full Stack Development',
      'Next.js',
      'TypeScript',
      'Node.js',
      'PostgreSQL',
      'Data Structures & Algorithms',
      'System Architecture',
    ],
  };

  return (
    <html lang="en" data-theme="dark">
      <head>
        <meta name="theme-color" content="#121110" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        {/* Blocking inline script — runs synchronously before first paint.
            1. Initializes theme preference (defaults to dark)
            2. Adds .page-loading to <html> → CSS hides body (no flash)
            3. Disables browser scroll restoration
            4. Forces scroll to absolute top */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var saved = localStorage.getItem('theme');
                  var theme = (saved === 'light' || saved === 'dark') ? saved : 'dark';
                  document.documentElement.setAttribute('data-theme', theme);
                  document.documentElement.classList.add('page-loading');
                  if ('scrollRestoration' in history) {
                    history.scrollRestoration = 'manual';
                  }
                  window.scrollTo(0, 0);
                  document.documentElement.scrollTop = 0;
                  document.body && (document.body.scrollTop = 0);
                } catch(e) {}
              })();
            `,
          }}
        />
        <div aria-hidden="true" className="grid-canvas" />
        <div aria-hidden="true" className="edge-vignette" />
        {children}
      </body>
    </html>
  );
}
