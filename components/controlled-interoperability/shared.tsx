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
  eyebrow?: string;
  title?: ReactNode;
  children?: ReactNode;
  tone?: "light" | "dark";
  className?: string;
}) {
  return (
    <Reveal className={className}>
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
 * Two-column reference table (label + required behavior). Stacks into labelled
 * blocks below md so neither column is dropped on a phone.
 */
export function BehaviorTable({
  columns,
  rows,
}: {
  columns: [string, string];
  rows: { label: string; behavior: string }[];
}) {
  return (
    <div className="overflow-hidden rounded-xl border border-slate-200 bg-white">
      <div className="hidden bg-slate-100 md:grid md:grid-cols-[minmax(0,280px)_minmax(0,1fr)]">
        {columns.map((column) => (
          <p key={column} className="px-4 py-3 text-xs font-semibold text-slate-400">
            {column}
          </p>
        ))}
      </div>

      {rows.map((row) => (
        <div
          key={row.label}
          className="border-t border-gray-100 md:grid md:grid-cols-[minmax(0,280px)_minmax(0,1fr)]"
        >
          <p className="px-4 pt-3.5 text-sm font-semibold text-sky-950 md:py-3.5">
            {row.label}
          </p>
          <p className="px-4 pb-3.5 pt-1 text-xs leading-5 text-slate-500 md:py-3.5">
            {row.behavior}
          </p>
        </div>
      ))}
    </div>
  );
}

/**
 * The "References / Does not own" and "Relationship / Guardrail" card body —
 * a labelled claim paired with an explicit boundary, which is the page's
 * central device.
 */
export function ClaimAndBoundary({
  claimLabel,
  claim,
  boundaryLabel,
  boundary,
}: {
  claimLabel: string;
  claim: string;
  boundaryLabel: string;
  boundary: string;
}) {
  return (
    <>
      <p className="pt-1 text-xs font-semibold leading-4">
        <span className="text-teal-600">{claimLabel} — </span>
        <span className="text-slate-500">{claim}</span>
      </p>
      <p className="text-xs font-semibold leading-4">
        <span className="text-yellow-600">{boundaryLabel} — </span>
        <span className="text-slate-500">{boundary}</span>
      </p>
    </>
  );
}

/** Square product/among-peers badge with two-letter initials. */
export function ProductBadge({
  initials,
  className,
}: {
  initials: string;
  className: string;
}) {
  return (
    <span
      className={`flex size-8 flex-none items-center justify-center rounded-lg text-xs font-extrabold text-white ${className}`}
    >
      {initials}
    </span>
  );
}
