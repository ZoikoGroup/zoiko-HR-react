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
        // ("read/write/reference") that CSS treats as one unbreakable word and
        // which otherwise push the document wider than the viewport.
        <h2
          className={`break-words text-2xl font-extrabold leading-tight tracking-tight sm:text-3xl sm:leading-10 ${
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

/** Small coloured status dot. */
export function Dot({ className = "" }: { className?: string }) {
  return (
    <span aria-hidden className={`size-2 flex-none rounded-full ${className}`} />
  );
}

/** ✓ / ✗ / → prefixed list item. */
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
    <li className="flex items-start gap-2">
      <span aria-hidden className={`flex-none text-xs leading-5 ${markClass}`}>
        {mark}
      </span>
      <span
        className={`break-words text-xs leading-5 ${
          tone === "dark" ? "text-white/60" : "text-slate-600"
        }`}
      >
        {children}
      </span>
    </li>
  );
}
