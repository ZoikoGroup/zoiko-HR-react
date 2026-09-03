import type { ReactNode } from "react";
import { Reveal } from "@/components/ui";

/** Eyebrow + heading pair used by the sections on this page. */
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
      <p className="text-[11px] font-medium uppercase tracking-[0.12em] text-primary">
        {eyebrow}
      </p>
      {title && (
        <h2
          className={`mt-4 text-2xl font-extrabold leading-tight tracking-tight sm:text-3xl ${
            tone === "dark" ? "text-white" : "text-slate-900"
          }`}
        >
          {title}
        </h2>
      )}
      {children && (
        <p
          className={`mt-2 leading-6 ${
            tone === "dark" ? "text-slate-400" : "text-slate-500"
          }`}
        >
          {children}
        </p>
      )}
    </Reveal>
  );
}

/** The circled "i" from the design's info rail. */
export function InfoIcon({ className = "" }: { className?: string }) {
  return (
    <svg aria-hidden viewBox="0 0 24 24" className={className} fill="none">
      <path
        d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM13 17H11V11H13V17ZM13 9H11V7H13V9Z"
        fill="currentColor"
      />
    </svg>
  );
}
