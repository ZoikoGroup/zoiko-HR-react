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

/** A claim paired with its explicit boundary — the page's central device. */
export function BoundaryRow({
  label,
  value,
  tone = "light",
}: {
  label: string;
  value: string;
  tone?: "light" | "dark";
}) {
  const dark = tone === "dark";
  return (
    // Label and value sit side by side from sm up, as the design lays them out;
    // they stack on narrow screens so the mono value keeps its own line.
    <div
      className={`border-t py-2.5 first:border-t-0 sm:grid sm:grid-cols-[minmax(0,200px)_minmax(0,1fr)] sm:gap-4 ${
        dark ? "border-white/5" : "border-slate-100"
      }`}
    >
      <p
        className={`text-xs font-medium leading-4 ${
          dark ? "text-white/40" : "text-gray-400"
        }`}
      >
        {label}
      </p>
      <p
        className={`font-mono text-xs leading-4 ${
          dark ? "text-white/80" : "text-slate-950"
        }`}
      >
        {value}
      </p>
    </div>
  );
}

/** Bulleted control with a supporting line, used in the privacy panel. */
export function ControlItem({
  title,
  body,
  tone = "dark",
}: {
  title: string;
  body: string;
  tone?: "light" | "dark";
}) {
  const dark = tone === "dark";
  return (
    <div className="pt-2.5 first:pt-0">
      <div className="flex gap-2">
        <span
          aria-hidden
          className={`text-xs font-medium leading-5 ${
            dark ? "text-indigo-400" : "text-primary"
          }`}
        >
          ·
        </span>
        <p
          className={`text-xs font-medium leading-5 ${
            dark ? "text-white/80" : "text-slate-800"
          }`}
        >
          {title}
        </p>
      </div>
      <p
        className={`pl-4 text-xs leading-4 ${
          dark ? "text-white/40" : "text-slate-500"
        }`}
      >
        {body}
      </p>
    </div>
  );
}
