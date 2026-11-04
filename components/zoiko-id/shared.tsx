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
          className={`text-xs font-medium uppercase leading-4 tracking-[0.1em] ${
            dark ? "text-indigo-400" : "text-primary"
          }`}
        >
          {eyebrow}
        </p>
      )}
      {title && (
        // break-words: this page's copy is full of slash-joined tokens
        // ("name/email/domain") that CSS treats as one unbreakable word and
        // which otherwise push the document wider than the viewport.
        <h2
          className={`text-2xl font-extrabold leading-tight tracking-tight break-words sm:text-3xl sm:leading-10 ${
            eyebrow ? "mt-3" : ""
          } ${dark ? "text-white" : "text-slate-950"}`}
        >
          {title}
        </h2>
      )}
      {children && (
        <p
          className={`mt-3 max-w-[600px] break-words text-sm leading-5 ${
            dark ? "text-white/60" : "text-slate-600"
          }`}
        >
          {children}
        </p>
      )}
    </Reveal>
  );
}

/** Arrow-prefixed requirement line used by the stage and separation panels. */
export function ArrowItem({
  children,
  tone = "light",
}: {
  children: ReactNode;
  tone?: "light" | "dark";
}) {
  const dark = tone === "dark";
  return (
    <li className="flex items-start gap-2">
      <span aria-hidden className="flex-none text-xs leading-5 text-primary">
        →
      </span>
      <span
        className={`text-xs leading-5 ${dark ? "text-white/60" : "text-slate-950"}`}
      >
        {children}
      </span>
    </li>
  );
}

/** Small coloured status dot. */
export function Dot({ className = "" }: { className?: string }) {
  return <span aria-hidden className={`size-2 flex-none rounded-full ${className}`} />;
}

/**
 * Reference table that stacks into labelled blocks below `lg`, so no column is
 * dropped on a phone. Column headers become inline labels once stacked.
 */
export function RefTable({
  columns,
  rows,
  gridClass,
  tone = "light",
  footnote,
  headerToneClass,
}: {
  columns: string[];
  rows: ReactNode[][];
  gridClass: string;
  tone?: "light" | "dark";
  footnote?: ReactNode;
  headerToneClass?: string[];
}) {
  const dark = tone === "dark";
  return (
    <div
      className={`overflow-hidden rounded-xl border ${
        dark ? "border-white/10" : "border-slate-200"
      }`}
    >
      <div
        className={`hidden lg:grid ${gridClass} ${
          dark ? "bg-white/5" : "bg-slate-50"
        }`}
      >
        {columns.map((column, i) => (
          <p
            key={column}
            className={`px-4 py-3 text-xs font-medium uppercase leading-4 tracking-wide ${
              headerToneClass?.[i] ?? (dark ? "text-white/40" : "text-gray-500")
            }`}
          >
            {column}
          </p>
        ))}
      </div>

      {rows.map((row, r) => (
        <div
          key={r}
          className={`border-t lg:grid ${gridClass} ${
            dark ? "border-white/5" : "border-slate-100"
          } ${!dark && r % 2 === 1 ? "bg-slate-50" : ""}`}
        >
          {row.map((cell, c) => (
            <div key={c} className="px-4 py-2.5 lg:py-3">
              {/* The header text repeats as an inline label once stacked. */}
              <p
                className={`text-[10px] font-medium uppercase tracking-wide lg:hidden ${
                  dark ? "text-white/30" : "text-gray-400"
                }`}
              >
                {columns[c]}
              </p>
              <div
                className={`break-words text-xs leading-4 ${
                  c === 0
                    ? dark
                      ? "font-medium text-white/70"
                      : "font-medium text-slate-950"
                    : dark
                      ? "text-white/40"
                      : "text-slate-600"
                }`}
              >
                {cell}
              </div>
            </div>
          ))}
        </div>
      ))}

      {footnote && (
        <div
          className={`border-t px-4 py-3 ${
            dark ? "border-white/5" : "border-slate-100"
          }`}
        >
          <p
            className={`text-[11px] leading-4 ${
              dark ? "text-white/30" : "text-gray-400"
            }`}
          >
            {footnote}
          </p>
        </div>
      )}
    </div>
  );
}
