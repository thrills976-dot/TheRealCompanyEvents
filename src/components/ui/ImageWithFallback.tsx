import { useState, useEffect, ImgHTMLAttributes } from 'react';

interface ImageWithFallbackProps extends ImgHTMLAttributes<HTMLImageElement> {
  fallbackSrc: string;
}

const transparentPixel = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7";

export function ImageWithFallback({ src, fallbackSrc, alt, ...props }: ImageWithFallbackProps) {
  const [errorCount, setErrorCount] = useState(0);

  useEffect(() => {
    setErrorCount(0);
  }, [src, fallbackSrc]);

  let currentSrc = src;
  if (errorCount === 1) {
    currentSrc = fallbackSrc;
  } else if (errorCount >= 2) {
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

