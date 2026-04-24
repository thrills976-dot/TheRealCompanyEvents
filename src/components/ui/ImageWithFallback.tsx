import { useState, useEffect, ImgHTMLAttributes } from 'react';

interface ImageWithFallbackProps extends ImgHTMLAttributes<HTMLImageElement> {
  fallbackSrc: string;
}

export function ImageWithFallback({ src, fallbackSrc, alt, ...props }: ImageWithFallbackProps) {
  const [currentSrc, setCurrentSrc] = useState<string>(src || fallbackSrc);

  useEffect(() => {
    if (!src) {
      setCurrentSrc(fallbackSrc);
      return;
    }

    let mounted = true;
    const img = new Image();

    img.onload = () => {
      if (mounted) setCurrentSrc(src);
    };

    img.onerror = () => {
      if (mounted) setCurrentSrc(fallbackSrc);
    };

    // Setting src triggers the load/error checks
    img.src = src;

    return () => {
      mounted = false;
    };
  }, [src, fallbackSrc]);

  return (
    <img
      src={currentSrc}
      alt={alt}
      {...props}
    />
  );
}
