/**
 * Inline icons rather than Unicode emoji glyphs — emoji render differently per
 * OS/browser font, so the page would not match the design on every platform.
 */
export function WarningIcon({ className = "" }: { className?: string }) {
  return (
    <svg aria-hidden viewBox="0 0 20 20" className={className} fill="none">
      <path
        d="M8.62 3.5c.598-1.037 2.16-1.037 2.759 0l6.146 10.653c.596 1.033-.183 2.347-1.38 2.347H3.855c-1.197 0-1.976-1.314-1.38-2.347L8.622 3.5Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
      <path
        d="M10 8v3.2"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
      <circle cx="10" cy="13.9" r="0.9" fill="currentColor" />
    </svg>
  );
}
