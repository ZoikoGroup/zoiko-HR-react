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
          className={`mt-3.5 max-w-[700px] leading-6 ${
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
 * A card with a coloured rule along its top edge — used for the boundary
 * classes and the correlation rules.
 */
export function RuledCard({
  eyebrow,
  eyebrowClass,
  borderClass,
  title,
  children,
}: {
  eyebrow: string;
  eyebrowClass: string;
  borderClass: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <div
      className={`flex h-full flex-col gap-2 rounded-xl border border-slate-200 border-t-[2.4px] bg-white px-5 pb-6 pt-6 ${borderClass}`}
    >
      <p
        className={`text-xs font-extrabold uppercase tracking-wide ${eyebrowClass}`}
      >
        {eyebrow}
      </p>
      <p className="pt-1 text-sm font-bold text-sky-950">{title}</p>
      <p className="text-xs leading-5 text-slate-500">{children}</p>
    </div>
  );
}

/** Small outlined state chip used by the cutoff and rejection lists. */
export function StateChip({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex rounded-md border border-slate-200 bg-white px-2.5 py-1.5 text-xs text-slate-600">
      {children}
    </span>
  );
}

/**
 * Three-column reference table (class + meaning + boundary). Stacks into
 * labelled blocks below lg so no column is dropped on a phone.
 */
export function BoundaryTable({
  columns,
  rows,
  tone = "light",
}: {
  columns: [string, string, string];
  rows: { label: string; meaning: string; boundary: string }[];
  tone?: "light" | "dark";
}) {
  const dark = tone === "dark";
  return (
    <div
      className={`overflow-hidden rounded-xl border ${
        dark ? "border-blue-950 bg-slate-900" : "border-slate-200 bg-white"
      }`}
    >
      <div
        className={`hidden lg:grid lg:grid-cols-[minmax(0,240px)_minmax(0,1fr)_minmax(0,1fr)] ${
          dark ? "bg-slate-800" : "bg-slate-100"
        }`}
      >
        {columns.map((column) => (
          <p
            key={column}
            className="px-4 py-3 text-xs font-semibold text-slate-400"
          >
            {column}
          </p>
        ))}
      </div>

      {rows.map((row) => (
        <div
          key={row.label}
          className={`border-t lg:grid lg:grid-cols-[minmax(0,240px)_minmax(0,1fr)_minmax(0,1fr)] ${
            dark ? "border-slate-800" : "border-gray-100"
          }`}
        >
          <p
            className={`px-4 pt-4 text-sm font-semibold lg:py-4 ${
              dark ? "text-white" : "text-sky-950"
            }`}
          >
            {row.label}
          </p>
          <p
            className={`px-4 pt-2 text-xs leading-5 lg:py-4 ${
              dark ? "text-slate-300" : "text-slate-500"
            }`}
          >
            {row.meaning}
          </p>
          <p
            className={`px-4 pb-4 pt-2 text-xs leading-5 lg:py-4 ${
              dark ? "text-slate-400" : "text-slate-500"
            }`}
          >
            {row.boundary}
          </p>
        </div>
      ))}
    </div>
  );
}
