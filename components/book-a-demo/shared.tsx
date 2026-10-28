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
          className={`mt-3.5 max-w-[640px] leading-6 ${
            dark ? "text-slate-300" : "text-slate-600"
          }`}
        >
          {children}
        </p>
      )}
    </Reveal>
  );
}

/** Shared input/select/textarea chrome for the demo request form. */
export const FIELD_CLASSES =
  "w-full rounded-lg border border-slate-200 bg-white px-3.5 py-3 text-sm text-gray-800 outline-none transition-colors placeholder:text-neutral-500 focus:border-primary focus:ring-1 focus:ring-primary";
