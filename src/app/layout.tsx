import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Pramod Ravisanka',
  description:
    'Bachelor of Information Technology (BIT) from University of Colombo, Colombo, SL. Software engineer specializing in Java, Spring Boot, MySQL, REST APIs, and database-driven web architectures.',
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon.ico', sizes: '32x32' },
    ],
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
  authors: [{ name: 'Pramod Ravisanka' }],
  creator: 'Pramod Ravisanka',
  keywords: [
    'Pramod Ravisanka',
    'Bachelor of Information Technology',
    'BIT',
    'University of Colombo',
    'Colombo SL',
    'Software Engineer',
    'Java',
    'Spring Boot',
    'MySQL',
    'Full Stack Developer',
    'Sri Lanka',
    'Portfolio',
  ],
  metadataBase: new URL('https://pramodravisanka.online'),
  openGraph: {
    title: 'Pramod Ravisanka',
    description:
      'Bachelor of Information Technology (BIT) from University of Colombo, Colombo, SL. Software engineer specializing in Java, Spring Boot, MySQL, REST APIs, and database-driven web architectures.',
    url: 'https://pramodravisanka.online',
    siteName: 'Pramod Ravisanka',
    images: [
      {
        url: 'https://pramodravisanka.online/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Pramod Ravisanka - Software Engineer Portfolio',
        type: 'image/jpeg',
      },
      {
        url: 'https://pramodravisanka.online/og-image-square.jpg',
        width: 600,
        height: 600,
        alt: 'Pramod Ravisanka',
        type: 'image/jpeg',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pramod Ravisanka',
    description:
      'Bachelor of Information Technology (BIT) from University of Colombo, Colombo, SL. Engineered enterprise Transport Management System using Java, Spring Boot, MySQL.',
    images: ['https://pramodravisanka.online/og-image.jpg'],
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
    jobTitle: 'Software Engineer',
    alumniOf: {
      '@type': 'EducationalOrganization',
      name: 'University of Colombo',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Colombo',
        addressCountry: 'LK',
      },
    },
    hasCredential: {
      '@type': 'EducationalOccupationalCredential',
      credentialCategory: 'degree',
      name: 'Bachelor of Information Technology (BIT)',
    },
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'LK',
      addressLocality: 'Colombo',
    },
    knowsAbout: [
      'Bachelor of Information Technology (BIT)',
      'University of Colombo',
      'Java',
      'Spring Boot',
      'MySQL',
      'REST APIs',
      'Full Stack Development',
      'Next.js',
      'TypeScript',
      'Object-Oriented Programming',
      'System Architecture',
    ],
  };

  return (
    <html lang="en" data-theme="dark">
      <head>
        <meta name="theme-color" content="#121110" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/favicon.svg" />
        {/* WhatsApp & Social Media Preview Image (Strict Absolute HTTPS URLs) */}
        <meta property="og:image" content="https://pramodravisanka.online/og-image.jpg" />
        <meta property="og:image:secure_url" content="https://pramodravisanka.online/og-image.jpg" />
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Pramod Ravisanka" />
        <link rel="image_src" href="https://pramodravisanka.online/og-image.jpg" />
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
