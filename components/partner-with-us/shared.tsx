import type { ReactNode } from "react";
import { Reveal } from "@/components/ui";

/**
 * Eyebrow + heading used across the page. The design carries an E4.x section
 * reference in the eyebrow so reviewers can cite sections by number.
 */
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
          className={`mt-2.5 leading-6 ${
            tone === "dark" ? "text-slate-400" : "text-slate-500"
          }`}
        >
          {children}
        </p>
      )}
    </Reveal>
  );
}

/** Dark-section form control styling, shared by the inquiry form fields. */
export const DARK_FIELD_CLASSES =
  "w-full rounded-lg border border-blue-950 bg-slate-900 px-4 py-2.5 text-sm text-white outline-none transition-colors placeholder:text-slate-500 focus:border-primary focus:ring-1 focus:ring-primary/30";

export function RequiredMark() {
  return (
    <span aria-hidden className="text-red-400">
      {" "}
      *
    </span>
  );
}

export function OptionalNote({ children }: { children: ReactNode }) {
  return (
    <span className="ml-1 text-xs font-normal leading-4 text-slate-500">
      {children}
    </span>
  );
}
