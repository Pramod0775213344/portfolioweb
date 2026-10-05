import type { Metadata } from 'next';
import './globals.css';
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';

export const metadata: Metadata = {
  title: 'Pramod Ravishanka | Software Engineer',
  description:
    'Portfolio of Pramod Ravishanka (Pramod Ravisanka) - Software Engineer & BIT undergraduate at University of Colombo, Sri Lanka. Specializing in Java, Spring Boot, MySQL, REST APIs, and database-driven web architecture.',
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon.ico', sizes: '32x32' },
    ],
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
  authors: [{ name: 'Pramod Ravishanka' }, { name: 'Pramod Ravisanka' }],
  creator: 'Pramod Ravishanka',
  keywords: [
    'Pramod Ravishanka',
    'Pramod Ravishanka Software Engineer',
    'Pramod Ravisanka',
    'Pramod Ravisanka Software Engineer',
    'Software Engineer Sri Lanka',
    'Pramod Ravishanka Portfolio',
    'Pramod Ravishanka Colombo',
    'Bachelor of Information Technology',
    'BIT University of Colombo',
    'University of Colombo',
    'Java Spring Boot Developer',
    'Full Stack Software Engineer',
    'pramodravisanka.online',
  ],
  metadataBase: new URL('https://pramodravisanka.online'),
  alternates: {
    canonical: 'https://pramodravisanka.online',
  },
  openGraph: {
    title: 'Pramod Ravishanka | Software Engineer',
    description:
      'Official portfolio of Pramod Ravishanka (Pramod Ravisanka). Software Engineer & BIT undergraduate at University of Colombo specializing in Java, Spring Boot, MySQL, and full-stack development.',
    url: 'https://pramodravisanka.online',
    siteName: 'Pramod Ravishanka Portfolio',
    images: [
      {
        url: 'https://pramodravisanka.online/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Pramod Ravishanka - Software Engineer Portfolio',
        type: 'image/jpeg',
      },
      {
        url: 'https://pramodravisanka.online/og-image-square.jpg',
        width: 600,
        height: 600,
        alt: 'Pramod Ravishanka',
        type: 'image/jpeg',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pramod Ravishanka | Software Engineer',
    description:
      'Portfolio of Pramod Ravishanka - Software Engineer & BIT undergraduate at University of Colombo. Enterprise Java, Spring Boot, MySQL, REST APIs.',
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
    name: 'Pramod Ravishanka',
    alternateName: ['Pramod Ravisanka', 'Pramod Ravishanka (BIT)', 'Pramod'],
    url: 'https://pramodravisanka.online',
    image: 'https://pramodravisanka.online/og-image.jpg',
    jobTitle: 'Software Engineer',
    description:
      'Software Engineer and Bachelor of Information Technology (BIT) undergraduate at University of Colombo, specializing in Java, Spring Boot, MySQL, and full-stack enterprise web systems.',
    sameAs: [
      'https://github.com/Pramod0775213344',
      'https://linkedin.com/in/pramod-ravisanka-6a8711307',
      'https://pramodravisanka.online',
    ],
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
      'Software Engineering',
      'Java',
      'Spring Boot',
      'MySQL',
      'RESTful APIs',
      'Database Architecture',
      'Full Stack Development',
      'Next.js',
      'TypeScript',
      'Bachelor of Information Technology (BIT)',
      'University of Colombo',
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
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
