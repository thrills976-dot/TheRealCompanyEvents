import React, { useState, useEffect } from 'react';

interface ImageWithFallbackProps {
  fallbackSrc?: string;
  src?: string;
  alt?: string;
  className?: string;
  [key: string]: any; // Allow other standard image attributes
}

const transparentPixel = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7";

export function ImageWithFallback({ src, fallbackSrc, alt, ...props }: ImageWithFallbackProps) {
  const [errorCount, setErrorCount] = useState(0);

  useEffect(() => {
    setErrorCount(0);
  }, [src, fallbackSrc]);

  let currentSrc = src;
  if (currentSrc && currentSrc.startsWith('/') && !currentSrc.startsWith('//')) {
    const base = import.meta.env.BASE_URL || '/';
    currentSrc = `${base}${currentSrc.slice(1)}`;
  }

  if (errorCount === 1 && fallbackSrc) {
    currentSrc = fallbackSrc;
  } else if (errorCount >= 2 || (errorCount === 1 && !fallbackSrc)) {
    currentSrc = transparentPixel;
  }

  return (
    <img
      src={currentSrc}
      alt={alt}
      onError={() => {
        setErrorCount((prev) => prev + 1);
      }}
      {...props}
    />
  );
}

