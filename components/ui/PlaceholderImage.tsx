"use client";

import { useEffect, useRef, useState } from "react";

type PlaceholderImageProps = {
  src: string;
  alt: string;
  label?: string;
  className?: string;
};

export function PlaceholderImage({
  src,
  alt,
  label,
  className = "",
}: PlaceholderImageProps) {
  const [errored, setErrored] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    setErrored(false);
    const img = imgRef.current;
    // The image request starts as soon as SSR HTML is parsed, before React
    // hydrates and attaches onError — so a fast 404 can fail before any
    // listener is wired up. Catch that race by checking completion on mount.
    if (img && img.complete && img.naturalWidth === 0) {
      setErrored(true);
    }
  }, [src]);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {!errored ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          ref={imgRef}
          src={src}
          alt={alt}
          onError={() => setErrored(true)}
          className="h-full w-full object-cover"
        />
      ) : (
        <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-slate-100 to-slate-200 p-4 text-center text-xs font-medium text-slate-400">
          {label ?? alt}
        </div>
      )}
    </div>
  );
}
