import type { ReactNode } from "react";
import { Reveal } from "@/components/ui";

/** Eyebrow + heading + lede used across the page. */
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
  const dark = tone === "dark";
  return (
    <Reveal className={className}>
      {eyebrow && (
        <p
          className={`text-xs font-bold uppercase tracking-[0.1em] ${
            dark ? "text-indigo-400" : "text-primary"
          }`}
        >
          {eyebrow}
        </p>
      )}
      {title && (
        <h2
          className={`text-2xl font-extrabold leading-tight tracking-tight sm:text-3xl ${
            eyebrow ? "mt-3.5" : ""
          } ${dark ? "text-white" : "text-sky-950"}`}
        >
          {title}
        </h2>
      )}
      {children && (
        <p
          className={`mt-3.5 max-w-[700px] leading-6 ${
            dark ? "text-slate-300" : "text-slate-600"
          }`}
        >
          {children}
        </p>
      )}
    </Reveal>
  );
}

/** Small outlined chip used by the evidence-state and issue-category lists. */
export function StateChip({
  children,
  tone = "light",
}: {
  children: ReactNode;
  tone?: "light" | "dark";
}) {
  return (
    <span
      className={`inline-flex rounded-md px-2.5 py-1.5 text-xs ${
        tone === "dark"
          ? "border border-slate-700 bg-slate-800 text-slate-300"
          : "border border-slate-200 bg-slate-100 text-slate-600"
      }`}
    >
      {children}
    </span>
  );
}

/** A card with a coloured rule along its top edge. */
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
      <p className={`text-xs font-extrabold uppercase tracking-wide ${eyebrowClass}`}>
        {eyebrow}
      </p>
      <p className="pt-1 text-sm font-bold text-sky-950">{title}</p>
      <p className="text-xs leading-5 text-slate-500">{children}</p>
    </div>
  );
}

/**
 * Three-column reference table (state + meaning + must-not-imply). Stacks into
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
      className={`overflow-hidden rounded-2xl border ${
        dark ? "border-blue-950 bg-slate-900" : "border-slate-200 bg-white"
      }`}
    >
      <div
        className={`hidden lg:grid lg:grid-cols-[minmax(0,220px)_minmax(0,1.1fr)_minmax(0,1fr)] ${
          dark ? "bg-slate-800" : "bg-slate-100"
        }`}
      >
        {columns.map((column) => (
          <p key={column} className="px-4 py-3 text-xs font-semibold text-slate-400">
            {column}
          </p>
        ))}
      </div>

      {rows.map((row) => (
        <div
          key={row.label}
          className={`border-t lg:grid lg:grid-cols-[minmax(0,220px)_minmax(0,1.1fr)_minmax(0,1fr)] ${
            dark ? "border-slate-800" : "border-gray-100"
          }`}
        >
          <p
            className={`px-4 pt-4 text-sm font-semibold lg:py-3 ${
              dark ? "text-white" : "text-sky-950"
            }`}
          >
            {row.label}
          </p>
          <p
            className={`px-4 pt-2 text-xs leading-5 lg:py-3 ${
              dark ? "text-slate-300" : "text-slate-500"
            }`}
          >
            {row.meaning}
          </p>
          <p
            className={`px-4 pb-4 pt-2 text-xs leading-5 lg:py-3 ${
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

/** Two-column spec table (area + required specification). */
export function SpecTable({
  columns,
  rows,
}: {
  columns: [string, string];
  rows: { label: string; spec: string }[];
}) {
  return (
    <div className="overflow-hidden rounded-xl border border-slate-200 bg-white">
      <div className="hidden bg-slate-100 md:grid md:grid-cols-[minmax(0,256px)_minmax(0,1fr)]">
        {columns.map((column) => (
          <p key={column} className="px-4 py-3 text-xs font-semibold text-slate-400">
            {column}
          </p>
        ))}
      </div>
      {rows.map((row) => (
        <div
          key={row.label}
          className="border-t border-gray-100 md:grid md:grid-cols-[minmax(0,256px)_minmax(0,1fr)]"
        >
          <p className="px-4 pt-4 text-sm font-semibold text-sky-950 md:py-3">
            {row.label}
          </p>
          <p className="px-4 pb-4 pt-2 text-xs leading-5 text-slate-500 md:py-3">
            {row.spec}
          </p>
        </div>
      ))}
    </div>
  );
}
