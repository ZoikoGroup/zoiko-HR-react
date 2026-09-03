import type { ReactNode } from "react";
import { Reveal } from "@/components/ui";

/** Eyebrow + heading pair used across the page. */
export function SectionHeading({
  eyebrow,
  title,
  children,
  tone = "light",
  className = "",
}: {
  eyebrow: string;
  title?: string;
  children?: ReactNode;
  tone?: "light" | "dark";
  className?: string;
}) {
  return (
    <Reveal className={className}>
      <p
        className={`text-[11px] font-medium uppercase tracking-[0.1em] ${
          tone === "dark" ? "text-indigo-400" : "text-primary"
        }`}
      >
        {eyebrow}
      </p>
      {title && (
        <h2
          className={`mt-2 text-2xl font-extrabold leading-tight tracking-tight sm:text-3xl ${
            tone === "dark" ? "text-white" : "text-slate-900"
          }`}
        >
          {title}
        </h2>
      )}
      {children && (
        <p
          className={`mt-2 text-sm leading-6 ${
            tone === "dark" ? "text-slate-400" : "text-slate-500"
          }`}
        >
          {children}
        </p>
      )}
    </Reveal>
  );
}

export function RequiredMark() {
  return (
    <span aria-hidden className="text-red-600">
      {" "}
      *
    </span>
  );
}

export function OptionalNote({ children }: { children: ReactNode }) {
  return (
    <span className="ml-2 text-xs font-normal leading-4 text-gray-400">
      {children}
    </span>
  );
}

/** Light-card form control styling used by the sales inquiry form. */
export const FIELD_CLASSES =
  "w-full rounded-lg border border-gray-300 bg-white px-3.5 py-2.5 text-sm text-gray-900 outline-none transition-colors placeholder:text-gray-400 focus:border-primary focus:ring-1 focus:ring-primary/30";

export function Chevron({ className = "" }: { className?: string }) {
  return (
    <svg aria-hidden viewBox="0 0 16 16" className={className} fill="none">
      <path
        d="M3.5 6l4.5 4.5L12.5 6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
