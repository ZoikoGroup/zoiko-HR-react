import type { ReactNode } from "react";

export function SectionTitle({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <h2 className={`text-2xl font-extrabold leading-tight tracking-tight text-ink sm:text-3xl ${className}`}>
      {children}
    </h2>
  );
}

export function CheckIcon({ className = "" }: { className?: string }) {
  return (
    <svg aria-hidden viewBox="0 0 16 16" className={className} fill="none">
      <path
        d="M3.5 8.5 6.5 11.5 12.5 4.5"
        stroke="currentColor"
        strokeWidth="1.67"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function SearchIcon({ className = "" }: { className?: string }) {
  return (
    <svg aria-hidden viewBox="0 0 20 20" className={className} fill="none">
      <circle cx="9" cy="9" r="6.25" stroke="currentColor" strokeWidth="1.67" />
      <path d="m13.75 13.75 3.25 3.25" stroke="currentColor" strokeWidth="1.67" strokeLinecap="round" />
    </svg>
  );
}
