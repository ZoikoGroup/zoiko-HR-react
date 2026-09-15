import type { ReactNode } from "react";
import { Reveal } from "@/components/ui";

/** Eyebrow + heading pair used across the page. */
export function SectionHeading({
  eyebrow,
  title,
  children,
  tone = "light",
  align = "left",
  className = "",
}: {
  eyebrow?: string;
  title?: ReactNode;
  children?: ReactNode;
  tone?: "light" | "dark";
  align?: "left" | "center";
  className?: string;
}) {
  const centered = align === "center";
  return (
    <Reveal className={`${centered ? "text-center" : ""} ${className}`}>
      {eyebrow && (
        <p
          className={`text-xs font-bold uppercase tracking-[0.1em] ${
            tone === "dark" ? "text-indigo-400" : "text-primary"
          }`}
        >
          {eyebrow}
        </p>
      )}
      {title && (
        <h2
          className={`text-2xl font-extrabold leading-tight tracking-tight sm:text-3xl ${
            eyebrow ? "mt-3.5" : ""
          } ${tone === "dark" ? "text-white" : "text-sky-950"}`}
        >
          {title}
        </h2>
      )}
      {children && (
        <p
          className={`mt-3.5 leading-6 ${
            tone === "dark" ? "text-slate-300" : "text-slate-600"
          }`}
        >
          {children}
        </p>
      )}
    </Reveal>
  );
}

/**
 * A column with a blue rule above it — used for the pillar rows in the
 * "what is Self-Service" and implementation-readiness sections.
 */
export function RuledColumn({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="flex flex-col gap-1.5 border-t-2 border-primary pt-5">
      <p className="text-sm font-bold text-sky-950">{title}</p>
      <p className="text-xs leading-5 text-slate-500">{children}</p>
    </div>
  );
}

/** Small square bullet used in the access-input and team-action lists. */
export function SquareBullet({ className = "" }: { className?: string }) {
  return (
    <span
      aria-hidden
      className={`mt-[7px] size-2 flex-none rounded-sm ${className}`}
    />
  );
}
