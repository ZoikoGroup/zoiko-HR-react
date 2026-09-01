import type { ReactNode } from "react";
import { Reveal } from "@/components/ui";

/**
 * Every numbered section on this page shares the same header treatment: an
 * outlined eyebrow pill, an extrabold heading, and a narrow lede.
 */
export function SectionHeading({
  eyebrow,
  title,
  children,
  tone = "light",
}: {
  eyebrow: string;
  title: string;
  children: ReactNode;
  tone?: "light" | "dark";
}) {
  return (
    <Reveal className="max-w-3xl">
      <span className="inline-flex rounded-full border border-primary px-3 py-1 text-xs font-bold uppercase tracking-[0.1em] text-indigo-400">
        {eyebrow}
      </span>
      <h2
        className={`mt-5 text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl lg:text-5xl ${
          tone === "dark" ? "text-white" : "text-ink"
        }`}
      >
        {title}
      </h2>
      <p
        className={`mt-3 max-w-xl leading-7 ${
          tone === "dark" ? "text-slate-400" : "text-slate-500"
        }`}
      >
        {children}
      </p>
    </Reveal>
  );
}
