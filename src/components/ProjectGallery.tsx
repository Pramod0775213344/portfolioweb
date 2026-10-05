'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { Maximize2, X, ChevronLeft, ChevronRight, ZoomIn, ZoomOut, Layers } from 'lucide-react';

export interface GalleryImage {
  src: string;
  title: string;
  badge?: string;
  desc?: string;
}

interface ProjectGalleryProps {
  images: GalleryImage[];
  sectionTitle?: string;
  subtitle?: string;
}

export default function ProjectGallery({
  images,
  sectionTitle = 'UI Screenshots & System Walkthrough',
  subtitle = 'High-resolution production interface previews from the live deployed software.',
}: ProjectGalleryProps) {
  const [activeIdx, setActiveIdx] = useState<number | null>(null);
  const [isZoomed, setIsZoomed] = useState(false);

  // Close modal
  const closeModal = useCallback(() => {
    setActiveIdx(null);
    setIsZoomed(false);
  }, []);

  // Next image
  const nextImage = useCallback(() => {
    setIsZoomed(false);
    setActiveIdx((prev) => (prev === null ? null : (prev + 1) % images.length));
  }, [images.length]);

  // Previous image
  const prevImage = useCallback(() => {
    setIsZoomed(false);
    setActiveIdx((prev) => (prev === null ? null : (prev - 1 + images.length) % images.length));
  }, [images.length]);

  // Keyboard navigation & body scroll lock
  useEffect(() => {
    if (activeIdx === null) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeModal();
      } else if (e.key === 'ArrowRight') {
        nextImage();
      } else if (e.key === 'ArrowLeft') {
        prevImage();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeIdx, closeModal, nextImage, prevImage]);

  const currentImage = activeIdx !== null ? images[activeIdx] : null;

  return (
    <section style={{ width: '100%' }}>
      {/* Header */}
      <div style={{ marginBottom: '1.5rem' }}>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.6rem',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.78rem',
            fontWeight: 700,
            textTransform: 'uppercase',
            letterSpacing: '0.14em',
            color: 'var(--accent)',
            marginBottom: '0.5rem',
          }}
        >
          <Layers size={15} />
          <span>[ {sectionTitle} ]</span>
        </div>
        <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: 1.5 }}>
          {subtitle} <span style={{ color: 'var(--accent)', fontWeight: 600 }}>Click any image to view in fullscreen high-definition.</span>
        </p>
      </div>

      {/* Grid of gallery cards */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(320px, 100%), 1fr))',
          gap: '1.5rem',
        }}
      >
        {images.map((img, idx) => (
          <div
            key={img.src}
            onClick={() => setActiveIdx(idx)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                setActiveIdx(idx);
              }
            }}
            className="gallery-card-hover"
            style={{
              border: '2px solid var(--border)',
              backgroundColor: 'var(--surface)',
              boxShadow: '4px 4px 0px var(--border)',
              overflow: 'hidden',
              cursor: 'pointer',
              display: 'flex',
              flexDirection: 'column',
              transition: 'transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease',
              outline: 'none',
            }}
          >
            {/* Image Preview Container */}
            <div
              style={{
                position: 'relative',
                width: '100%',
                aspectRatio: '16/9',
                backgroundColor: 'var(--surface-subtle)',
                overflow: 'hidden',
                borderBottom: '1.5px solid var(--border)',
              }}
            >
              <Image
                src={img.src}
                alt={img.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                style={{
                  objectFit: 'cover',
                  objectPosition: 'top center',
                  transition: 'transform 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
                }}
                className="gallery-thumbnail-img"
              />

              {/* Hover Overlay with Enlarge Cue */}
              <div
                className="gallery-overlay-badge"
                style={{
                  position: 'absolute',
                  inset: 0,
                  backgroundColor: 'rgba(0, 0, 0, 0.45)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.5rem',
                  color: '#fff',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.78rem',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  opacity: 0,
                  transition: 'opacity 0.2s ease',
                  backdropFilter: 'blur(2px)',
                }}
              >
                <div
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.45rem',
                    padding: '0.5rem 0.9rem',
                    backgroundColor: 'var(--accent)',
                    border: '1.5px solid #fff',
                    boxShadow: '2px 2px 0px #fff',
                  }}
                >
                  <Maximize2 size={15} />
                  <span>Enlarge Preview</span>
                </div>
              </div>

              {/* Badge Overlay */}
              {img.badge && (
                <div
                  style={{
                    position: 'absolute',
                    top: '0.75rem',
                    left: '0.75rem',
                    backgroundColor: 'var(--surface)',
                    border: '1px solid var(--border)',
                    boxShadow: '2px 2px 0px var(--border)',
                    color: 'var(--text)',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.62rem',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                    padding: '0.2rem 0.55rem',
                    zIndex: 2,
                  }}
                >
                  {img.badge}
                </div>
              )}

              {/* Number indicator */}
              <div
                style={{
                  position: 'absolute',
                  bottom: '0.75rem',
                  right: '0.75rem',
                  backgroundColor: 'rgba(0,0,0,0.75)',
                  color: '#fff',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.62rem',
                  fontWeight: 700,
                  letterSpacing: '0.08em',
                  padding: '0.2rem 0.5rem',
                  borderRadius: '2px',
                  zIndex: 2,
                }}
              >
                {String(idx + 1).padStart(2, '0')} / {String(images.length).padStart(2, '0')}
              </div>
            </div>

            {/* Card Content info */}
            <div
              style={{
                padding: '1.1rem 1.25rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.45rem',
                flexGrow: 1,
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '0.5rem' }}>
                <h3
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '1rem',
                    fontWeight: 700,
                    color: 'var(--text)',
                    margin: 0,
                  }}
                >
                  {img.title}
                </h3>
                <span
                  style={{
                    color: 'var(--accent)',
                    display: 'flex',
                    alignItems: 'center',
                    flexShrink: 0,
                  }}
                >
                  <Maximize2 size={14} />
                </span>
              </div>
              {img.desc && (
                <p
                  style={{
                    fontSize: '0.82rem',
                    lineHeight: 1.55,
                    color: 'var(--text-muted)',
                    margin: 0,
                  }}
                >
                  {img.desc}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Fullscreen Modal */}
      {currentImage && activeIdx !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={currentImage.title}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 9999,
            backgroundColor: 'rgba(5, 5, 8, 0.94)',
            backdropFilter: 'blur(16px)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            padding: 'clamp(0.75rem, 2vw, 1.5rem)',
            animation: 'fadeIn 0.2s ease-out',
          }}
          onClick={(e) => {
            if (e.target === e.currentTarget) closeModal();
          }}
        >
          {/* Top Bar: Title, Count, Zoom, Close */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '1rem',
              backgroundColor: 'rgba(20, 20, 28, 0.85)',
              border: '1.5px solid rgba(255, 255, 255, 0.15)',
              padding: '0.65rem 1rem',
              color: '#fff',
              flexShrink: 0,
              flexWrap: 'wrap',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', minWidth: 0 }}>
              <span
                style={{
                  backgroundColor: 'var(--accent)',
                  color: '#fff',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.65rem',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  padding: '0.2rem 0.55rem',
                  letterSpacing: '0.08em',
                  flexShrink: 0,
                }}
              >
                {currentImage.badge || `Screenshot ${activeIdx + 1}`}
              </span>
              <h2
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(0.9rem, 2vw, 1.15rem)',
                  fontWeight: 700,
                  color: '#fff',
                  margin: 0,
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                }}
              >
                {currentImage.title}
              </h2>
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.75rem',
                  color: 'rgba(255, 255, 255, 0.6)',
                  flexShrink: 0,
                }}
              >
                ({activeIdx + 1} / {images.length})
              </span>
            </div>

            {/* Controls */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexShrink: 0 }}>
              <button
                type="button"
                onClick={() => setIsZoomed((prev) => !prev)}
                title={isZoomed ? 'Reset zoom' : 'Zoom 1.5x'}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.35rem',
                  padding: '0.45rem 0.75rem',
                  backgroundColor: isZoomed ? 'var(--accent)' : 'rgba(255, 255, 255, 0.1)',
                  color: '#fff',
                  border: '1px solid rgba(255, 255, 255, 0.25)',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.72rem',
                  fontWeight: 700,
                  cursor: 'pointer',
                  transition: 'all 0.15s ease',
                }}
              >
                {isZoomed ? <ZoomOut size={14} /> : <ZoomIn size={14} />}
                <span className="hide-on-mobile">{isZoomed ? 'Zoomed (1.5x)' : 'Zoom In'}</span>
              </button>

              <button
                type="button"
                onClick={closeModal}
                title="Close modal (Esc)"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.35rem',
                  padding: '0.45rem 0.75rem',
                  backgroundColor: '#ef4444',
                  color: '#fff',
                  border: '1px solid #fff',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.72rem',
                  fontWeight: 700,
                  cursor: 'pointer',
                  boxShadow: '2px 2px 0px rgba(0,0,0,0.5)',
                }}
              >
                <X size={15} />
                <span>Close</span>
              </button>
            </div>
          </div>

          {/* Central Image View Area with Prev & Next Arrows */}
          <div
            style={{
              position: 'relative',
              flexGrow: 1,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0.75rem 0',
              minHeight: 0,
              overflow: isZoomed ? 'auto' : 'hidden',
            }}
            onClick={(e) => {
              if (e.target === e.currentTarget) closeModal();
            }}
          >
            {/* Left Nav Button */}
            <button
              type="button"
              onClick={prevImage}
              aria-label="Previous screenshot"
              style={{
                position: 'absolute',
                left: 'clamp(0.25rem, 1vw, 1.5rem)',
                zIndex: 10,
                backgroundColor: 'rgba(15, 15, 22, 0.88)',
                color: '#fff',
                border: '1.5px solid rgba(255, 255, 255, 0.3)',
                boxShadow: '3px 3px 0px rgba(0,0,0,0.6)',
                width: '44px',
                height: '44px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                transition: 'all 0.15s ease',
              }}
            >
              <ChevronLeft size={22} />
            </button>

            {/* Main Active Image Display */}
            <div
              style={{
                position: 'relative',
                width: isZoomed ? '150%' : '100%',
                height: isZoomed ? '150%' : '100%',
                maxWidth: isZoomed ? 'none' : '1400px',
                maxHeight: isZoomed ? 'none' : '78vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'width 0.25s ease, height 0.25s ease',
                cursor: isZoomed ? 'grab' : 'zoom-in',
              }}
              onClick={() => setIsZoomed((prev) => !prev)}
            >
              <Image
                src={currentImage.src}
                alt={currentImage.title}
                fill
                priority
                sizes="100vw"
                style={{
                  objectFit: 'contain',
                }}
              />
            </div>

            {/* Right Nav Button */}
            <button
              type="button"
              onClick={nextImage}
              aria-label="Next screenshot"
              style={{
                position: 'absolute',
                right: 'clamp(0.25rem, 1vw, 1.5rem)',
                zIndex: 10,
                backgroundColor: 'rgba(15, 15, 22, 0.88)',
                color: '#fff',
                border: '1.5px solid rgba(255, 255, 255, 0.3)',
                boxShadow: '3px 3px 0px rgba(0,0,0,0.6)',
                width: '44px',
                height: '44px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                transition: 'all 0.15s ease',
              }}
            >
              <ChevronRight size={22} />
            </button>
          </div>

          {/* Bottom Bar: Image Caption & Thumbnails */}
          <div
            style={{
              backgroundColor: 'rgba(20, 20, 28, 0.92)',
              border: '1.5px solid rgba(255, 255, 255, 0.15)',
              padding: '0.65rem 1rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.6rem',
              flexShrink: 0,
            }}
          >
            {/* Description Text */}
            {currentImage.desc && (
              <p
                style={{
                  margin: 0,
                  fontSize: '0.82rem',
                  lineHeight: 1.5,
                  color: 'rgba(255, 255, 255, 0.85)',
                  textAlign: 'center',
                  fontFamily: 'var(--font-sans)',
                }}
              >
                {currentImage.desc}
              </p>
            )}

            {/* Thumbnail Navigation Bar */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.5rem',
                overflowX: 'auto',
                paddingBottom: '0.2rem',
              }}
            >
              {images.map((thumb, tIdx) => {
                const isActive = tIdx === activeIdx;
                return (
                  <button
                    key={thumb.src}
                    type="button"
                    onClick={() => {
                      setIsZoomed(false);
                      setActiveIdx(tIdx);
                    }}
                    style={{
                      position: 'relative',
                      width: '56px',
                      height: '36px',
                      flexShrink: 0,
                      border: isActive ? '2px solid var(--accent)' : '1px solid rgba(255, 255, 255, 0.25)',
                      backgroundColor: '#000',
                      cursor: 'pointer',
                      padding: 0,
                      overflow: 'hidden',
                      opacity: isActive ? 1 : 0.6,
                      transform: isActive ? 'scale(1.08)' : 'scale(1)',
                      transition: 'all 0.15s ease',
                      outline: 'none',
                    }}
                    title={thumb.title}
                  >
                    <Image
                      src={thumb.src}
                      alt={thumb.title}
                      fill
                      sizes="56px"
                      style={{ objectFit: 'cover' }}
                    />
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* Global Inline Styles for Hover & Micro-animations */}
      <style jsx global>{`
        .gallery-card-hover:hover {
          transform: translateY(-3px);
          box-shadow: 6px 6px 0px var(--border) !important;
          border-color: var(--accent) !important;
        }
        .gallery-card-hover:hover .gallery-thumbnail-img {
          transform: scale(1.04);
        }
        .gallery-card-hover:hover .gallery-overlay-badge {
          opacity: 1 !important;
        }
        @media (max-width: 640px) {
          .hide-on-mobile {
            display: none !important;
          }
        }
      `}</style>
    </section>
  );
}
