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
          className={`text-xs font-medium uppercase tracking-[0.12em] ${
            tone === "dark" ? "text-indigo-400" : "text-primary"
          }`}
        >
          {eyebrow}
        </p>
      )}
      {title && (
        <h2
          className={`text-2xl font-extrabold leading-tight tracking-tight sm:text-3xl ${
            eyebrow ? "mt-3" : ""
          } ${tone === "dark" ? "text-white" : "text-slate-950"}`}
        >
          {title}
        </h2>
      )}
      {children && (
        <p
          className={`mt-3 max-w-[600px] text-sm leading-5 ${
            tone === "dark" ? "text-white/60" : "text-slate-600"
          }`}
        >
          {children}
        </p>
      )}
    </Reveal>
  );
}

/**
 * Label + value row used inside the authority-model and relationship-mode
 * cards, where each governed fact is paired with its stated behavior.
 */
export function FactRow({
  label,
  value,
  tone = "dark",
}: {
  label: string;
  value: string;
  tone?: "light" | "dark";
}) {
  const dark = tone === "dark";
  return (
    <div
      className={`border-b py-2 last:border-b-0 ${
        dark ? "border-white/5" : "border-slate-100"
      }`}
    >
      <p
        className={`text-xs font-medium leading-4 ${
          dark ? "text-white/30" : "text-slate-950"
        }`}
      >
        {label}
      </p>
      <p
        className={`text-xs leading-4 ${dark ? "text-white/60" : "text-slate-600"}`}
      >
        {value}
      </p>
    </div>
  );
}

/**
 * Two-column reference table. Stacks into labelled blocks below md so neither
 * column is dropped on a phone.
 */
export function ClaimTable({
  columns,
  rows,
  tone = "light",
}: {
  columns: [string, string];
  rows: { claim: string; treatment: string }[];
  tone?: "light" | "dark";
}) {
  const dark = tone === "dark";
  return (
    <div
      className={`overflow-hidden rounded-xl border ${
        dark ? "border-white/10" : "border-slate-200 bg-white"
      }`}
    >
      <div
        className={`hidden md:grid md:grid-cols-[minmax(0,280px)_minmax(0,1fr)] ${
          dark ? "bg-white/5" : "bg-slate-50"
        }`}
      >
        <p
          className={`px-4 py-3 text-xs font-medium ${
            dark ? "text-white/50" : "text-slate-500"
          }`}
        >
          {columns[0]}
        </p>
        <p
          className={`px-4 py-3 text-xs font-medium ${
            dark ? "text-indigo-400" : "text-primary"
          }`}
        >
          {columns[1]}
        </p>
      </div>

      {rows.map((row) => (
        <div
          key={row.claim}
          className={`border-t md:grid md:grid-cols-[minmax(0,280px)_minmax(0,1fr)] ${
            dark ? "border-white/5" : "border-slate-100"
          }`}
        >
          <p
            className={`px-4 pt-3 text-xs font-medium ${
              dark ? "text-white" : "text-slate-950"
            } md:py-3`}
          >
            {row.claim}
          </p>
          <p
            className={`px-4 pb-3 pt-1 text-xs leading-5 ${
              dark ? "text-white/60" : "text-slate-600"
            } md:py-3`}
          >
            {row.treatment}
          </p>
        </div>
      ))}
    </div>
  );
}
