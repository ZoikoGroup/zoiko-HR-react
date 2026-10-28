import type { ReactNode } from "react";
import { Reveal } from "@/components/ui";

export type Tone = "light" | "dark";

/** Section title + supporting line, in the light or dark band treatment. */
export function SectionHeading({
  title,
  children,
  eyebrow,
  tone = "light",
  className = "",
}: {
  title: string;
  children?: ReactNode;
  eyebrow?: string;
  tone?: Tone;
  className?: string;
}) {
  const isDark = tone === "dark";
  return (
    <Reveal className={className}>
      {eyebrow && (
        <p className="text-xs font-bold uppercase tracking-[0.1em] text-primary">
          {eyebrow}
        </p>
      )}
      <h2
        className={`${eyebrow ? "mt-2" : ""} max-w-[760px] text-2xl font-extrabold leading-tight tracking-tight sm:text-3xl ${
          isDark ? "text-white" : "text-ink"
        }`}
      >
        {title}
      </h2>
      {children && (
        <p
          className={`mt-3.5 max-w-[760px] text-base leading-6 ${
            isDark ? "text-slate-300" : "text-slate-600"
          }`}
        >
          {children}
        </p>
      )}
    </Reveal>
  );
}

/**
 * The policy tables all share this shape: a labelled first column, one or two
 * description columns, and a header row. Scrolls horizontally on narrow
 * screens rather than crushing the prose.
 */
export function PolicyTable({
  columns,
  rows,
  tone = "light",
  minWidth = "min-w-[720px]",
}: {
  columns: string[];
  rows: string[][];
  tone?: Tone;
  minWidth?: string;
}) {
  const isDark = tone === "dark";

  return (
    <>
      {/* Below sm the same rows render as stacked cards — a 3-column prose
          table is unreadable on a phone even with horizontal scrolling. Only
          one of the two is ever displayed, so screen readers announce one. */}
      <ul className="flex flex-col gap-3 sm:hidden">
        {rows.map((row) => (
          <li
            key={row[0]}
            className={`rounded-xl border px-4 py-4 ${
              isDark ? "border-white/15 bg-[#0A1B2E]" : "border-slate-200 bg-white"
            }`}
          >
            <p
              className={`text-sm font-semibold ${isDark ? "text-white" : "text-ink"}`}
            >
              {row[0]}
            </p>
            {row.slice(1).map((cell, index) => (
              <div key={columns[index + 1]} className="mt-3">
                <p className="text-[11px] font-semibold uppercase tracking-[0.06em] text-slate-400">
                  {columns[index + 1]}
                </p>
                <p
                  className={`mt-1 text-xs leading-5 ${
                    isDark ? "text-slate-300" : "text-slate-500"
                  }`}
                >
                  {cell}
                </p>
              </div>
            ))}
          </li>
        ))}
      </ul>

      <div
        className={`hidden overflow-x-auto rounded-xl border sm:block ${
          isDark ? "border-white/15" : "border-slate-200 bg-white"
        }`}
      >
      <table className={`w-full ${minWidth} border-collapse text-left`}>
        <thead>
          <tr className={isDark ? "bg-[#0A1B2E]" : "bg-slate-100"}>
            {columns.map((column) => (
              <th
                key={column}
                scope="col"
                className={`px-4 py-3 text-xs font-semibold ${
                  isDark ? "text-slate-400" : "text-slate-400"
                }`}
              >
                {column}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr
              key={row[0]}
              className={`border-t ${isDark ? "border-white/10" : "border-slate-100"}`}
            >
              {row.map((cell, index) => {
                const isLabel = index === 0;
                const isTrailingNote = columns.length > 2 && index === columns.length - 1;
                return (
                  <td
                    key={columns[index]}
                    className={`px-4 py-4 align-top ${
                      isLabel
                        ? `text-sm font-semibold ${isDark ? "text-white" : "text-ink"}`
                        : `text-xs leading-5 ${
                            isDark
                              ? isTrailingNote
                                ? "text-slate-400"
                                : "text-slate-300"
                              : isTrailingNote
                                ? "text-slate-400"
                                : "text-slate-500"
                          }`
                    }`}
                  >
                    {cell}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </>
  );
}

/** Amber "do not send this through the wrong route" note. */
export function CautionNote({ children }: { children: ReactNode }) {
  return (
    <Reveal>
      <div className="rounded-xl border border-amber-200 bg-amber-50 px-5 py-4">
        <p className="text-xs leading-5 text-amber-800">{children}</p>
      </div>
    </Reveal>
  );
}
