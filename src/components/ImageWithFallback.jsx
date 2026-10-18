import React, { useState } from 'react';
import { Users, BookOpen, Compass, Sparkles } from 'lucide-react';

/**
 * ImageWithFallback
 * Ensures high visual fidelity even if an external image encounters network drops.
 */
export default function ImageWithFallback({
  src,
  alt,
  className = '',
  aspectRatio = '16/10',
  fallbackType = 'community',
  overlayBadge = null,
}) {
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div
      className={`image-fallback-container ${className}`}
      style={{
        position: 'relative',
        overflow: 'hidden',
        aspectRatio: aspectRatio,
        backgroundColor: '#EAE4D6',
        borderRadius: 'inherit',
      }}
    >
      {!hasError ? (
        <>
          <img
            src={src}
            alt={alt}
            loading="lazy"
            onLoad={() => setIsLoaded(true)}
            onError={() => setHasError(true)}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              display: 'block',
              transition: 'opacity 0.4s ease, transform 0.4s ease',
              opacity: isLoaded ? 1 : 0.4,
            }}
          />
          {!isLoaded && (
            <div
              style={{
                position: 'absolute',
                inset: 0,
                backgroundColor: '#EDE8DB',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <div
                style={{
                  width: '28px',
                  height: '28px',
                  border: '3px solid rgba(23,61,50,0.15)',
                  borderTopColor: '#173D32',
                  borderRadius: '50%',
                  animation: 'spin 1s linear infinite',
                }}
              />
            </div>
          )}
        </>
      ) : (
        /* Graceful Brand Fallback Graphic */
        <div
          style={{
            position: 'absolute',
            inset: 0,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '1.5rem',
            textAlign: 'center',
            background: 'linear-gradient(135deg, #173D32 0%, #245244 100%)',
            color: '#F8F5EE',
          }}
        >
          <div
            style={{
              width: '52px',
              height: '52px',
              borderRadius: '50%',
              backgroundColor: 'rgba(240, 120, 97, 0.15)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '0.75rem',
              color: '#F07861',
              border: '1px solid rgba(240, 120, 97, 0.3)',
            }}
          >
            {fallbackType === 'mentorship' ? (
              <Compass size={26} />
            ) : fallbackType === 'learning' ? (
              <BookOpen size={26} />
            ) : (
              <Users size={26} />
            )}
          </div>
          <span
            style={{
              fontWeight: 700,
              fontSize: '1rem',
              letterSpacing: '-0.01em',
              marginBottom: '0.25rem',
            }}
          >
            Salaah Community
          </span>
          <span
            style={{
              fontSize: '0.8rem',
              color: 'rgba(248, 245, 238, 0.75)',
              maxWidth: '220px',
            }}
          >
            {alt || 'Student Mentorship & Growth Space'}
          </span>
        </div>
      )}

      {overlayBadge && (
        <div
          style={{
            position: 'absolute',
            bottom: '12px',
            left: '12px',
            backgroundColor: 'rgba(23, 61, 50, 0.88)',
            backdropFilter: 'blur(8px)',
            color: '#F8F5EE',
            padding: '4px 10px',
            borderRadius: '9999px',
            fontSize: '0.72rem',
            fontWeight: 600,
            letterSpacing: '0.04em',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '5px',
          }}
        >
          <Sparkles size={12} color="#F07861" />
          {overlayBadge}
        </div>
      )}
    </div>
  );
}
