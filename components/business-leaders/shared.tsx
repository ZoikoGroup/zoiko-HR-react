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
        <h2
          className={`mt-3 break-words text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl sm:leading-10 ${
            dark ? "text-white" : "text-slate-950"
          }`}
        >
          {title}
        </h2>
      )}
      {children && (
        <p
          className={`mt-4 max-w-[540px] break-words leading-6 ${
            dark ? "text-white/60" : "text-slate-600"
          }`}
        >
          {children}
        </p>
      )}
    </Reveal>
  );
}

/** ✓ / → prefixed list item. */
export function MarkedItem({
  mark,
  markClass,
  children,
  tone = "light",
}: {
  mark: string;
  markClass: string;
  children: ReactNode;
  tone?: "light" | "dark";
}) {
  return (
    <li className="flex items-start gap-3">
      <span aria-hidden className={`flex-none text-sm leading-5 ${markClass}`}>
        {mark}
      </span>
      <span
        className={`break-words text-sm leading-5 ${
          tone === "dark" ? "text-white/60" : "text-slate-600"
        }`}
      >
        {children}
      </span>
    </li>
  );
}
