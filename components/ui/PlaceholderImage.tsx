"use client";

import { useEffect, useRef, useState } from "react";

type PlaceholderImageProps = {
  src: string;
  alt: string;
  label?: string;
  className?: string;
  /** "cover" crops to fill the box (default); "contain" keeps the image's original, uncropped proportions. */
  fit?: "cover" | "contain";
};

export function PlaceholderImage({
  src,
  alt,
  label,
  className = "",
  fit = "cover",
}: PlaceholderImageProps) {
  const [errored, setErrored] = useState(false);
  const [checkedSrc, setCheckedSrc] = useState<string | null>(null);
  const imgRef = useRef<HTMLImageElement>(null);

  // Reset during render (not in an effect) when src changes — React commits
  // this before painting, so there's no flash of the old errored state.
  if (checkedSrc !== src) {
    setCheckedSrc(src);
    setErrored(false);
  }

  useEffect(() => {
    // The image request starts as soon as SSR HTML is parsed, before React
    // hydrates and attaches onError — so a fast 404 can fail before any
    // listener is wired up. Catch that race by checking completion on mount.
    const img = imgRef.current;
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
          className={
            fit === "contain"
              ? "h-auto w-full object-contain"
              : "h-full w-full object-cover"
          }
        />
      ) : (
        <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-slate-100 to-slate-200 p-4 text-center text-xs font-medium text-slate-400">
          {label ?? alt}
        </div>
      )}
    </div>
  );
}
