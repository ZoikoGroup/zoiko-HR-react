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
          className={`text-xs font-semibold uppercase tracking-[0.1em] ${
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
          className={`mt-3.5 font-semibold leading-6 ${
            tone === "dark" ? "text-slate-300" : "text-slate-600"
          }`}
        >
          {children}
        </p>
      )}
    </Reveal>
  );
}

const STATUS_STYLES: Record<string, string> = {
  CURRENT: "bg-emerald-50 text-teal-600",
  "REVIEW DUE": "bg-orange-100 text-yellow-600",
  SCHEDULED: "bg-indigo-50 text-blue-900",
  DRAFT: "bg-gray-100 text-slate-500",
  SUPERSEDED: "bg-gray-100 text-slate-400",
};

export function StatusPill({ status }: { status: string }) {
  return (
    <span
      className={`inline-flex whitespace-nowrap rounded-md px-2.5 py-1 text-xs font-semibold ${
        STATUS_STYLES[status] ?? "bg-gray-100 text-slate-500"
      }`}
    >
      {status}
    </span>
  );
}

/**
 * Two-column reference table (Component/Capability + Required behavior) used by
 * the version-history and permissions sections. Stacks into labelled blocks
 * below md so neither column is dropped on a phone.
 */
export function BehaviorTable({
  columns,
  rows,
  tone = "light",
}: {
  columns: [string, string];
  rows: { label: string; behavior: string }[];
  tone?: "light" | "dark";
}) {
  const dark = tone === "dark";
  return (
    <div
      className={`overflow-hidden rounded-xl border ${
        dark ? "border-blue-950 bg-slate-900/40" : "border-slate-200 bg-white"
      }`}
    >
      <div
        className={`hidden md:grid md:grid-cols-[minmax(0,320px)_minmax(0,1fr)] ${
          dark ? "bg-white/5" : "bg-slate-100"
        }`}
      >
        {columns.map((column) => (
          <p
            key={column}
            className={`px-4 py-3 text-xs font-semibold ${
              dark ? "text-slate-400" : "text-slate-400"
            }`}
          >
            {column}
          </p>
        ))}
      </div>

      {rows.map((row) => (
        <div
          key={row.label}
          className={`border-t md:grid md:grid-cols-[minmax(0,320px)_minmax(0,1fr)] ${
            dark ? "border-white/5" : "border-gray-100"
          }`}
        >
          <p
            className={`px-4 pt-3.5 text-sm font-semibold md:py-3.5 ${
              dark ? "text-white" : "text-sky-950"
            }`}
          >
            {row.label}
          </p>
          <p
            className={`px-4 pb-3.5 pt-1 text-xs font-semibold leading-5 md:py-3.5 ${
              dark ? "text-slate-300" : "text-slate-500"
            }`}
          >
            {row.behavior}
          </p>
        </div>
      ))}
    </div>
  );
}
