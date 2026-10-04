'use client';

import { useEffect } from 'react';
import Lenis from 'lenis';

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Ensure scroll is at top before anything else runs
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;

    // Initialize Lenis smooth scroll
    const lenis = new Lenis({
      duration: 1.3,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 0.9,
      touchMultiplier: 1.5,
    });

    // Lock Lenis at absolute top
    lenis.scrollTo(0, { immediate: true });

    // ── KEY FIX ──────────────────────────────────────────────────────────────
    // Remove the .page-loading class that the blocking script added.
    // CSS transitions on `body { opacity }` will smoothly fade the page in.
    // This happens AFTER Lenis is ready, so no jump is visible to the user.
    // ─────────────────────────────────────────────────────────────────────────
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        // Double-rAF ensures paint cycle is complete before we reveal content
        document.documentElement.classList.remove('page-loading');
      });
    });

    // Handle hash in URL (e.g. user opened a bookmarked section link)
    const hash = window.location.hash;
    if (hash && hash !== '#hero') {
      setTimeout(() => {
        const target = document.querySelector(hash);
        if (target) {
          lenis.scrollTo(target as HTMLElement, { offset: -72, immediate: false });
        }
      }, 400); // wait for fade-in to complete
    }

    // Intercept all internal #anchor clicks → Lenis smooth scroll with offset
    const handleAnchorClick = (e: MouseEvent) => {
      const anchor = (e.target as HTMLElement).closest('a');
      if (!anchor) return;

      const href = anchor.getAttribute('href');
      if (!href || !href.startsWith('#')) return;

      e.preventDefault();

      if (href === '#' || href === '#hero') {
        lenis.scrollTo(0, { duration: 1.3 });
        window.history.replaceState(null, '', window.location.pathname);
      } else {
        const target = document.querySelector(href);
        if (target) {
          lenis.scrollTo(target as HTMLElement, { offset: -72, duration: 1.3 });
          window.history.pushState(null, '', href);
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);

    // Lenis RAF loop
    let rafId: number;
    const raf = (time: number) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      document.removeEventListener('click', handleAnchorClick);
      lenis.destroy();
      // Ensure page is always visible if component unmounts
      document.documentElement.classList.remove('page-loading');
    };
  }, []);

  return <>{children}</>;
}
