import Link from "next/link";
import type { ReactNode } from "react";
import { Reveal } from "@/components/ui";

export type Tone = "light" | "dark";

export function Eyebrow({ children, tone = "light" }: { children: ReactNode; tone?: Tone }) {
  return (
    <p
      className={`text-xs font-semibold uppercase leading-4 tracking-[0.2em] ${
        tone === "dark" ? "text-indigo-400" : "text-primary"
      }`}
    >
      {children}
    </p>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  children,
  tone = "light",
  className = "",
}: {
  eyebrow: string;
  title: string;
  children?: ReactNode;
  tone?: Tone;
  className?: string;
}) {
  const isDark = tone === "dark";
  return (
    <Reveal className={className}>
      <Eyebrow tone={tone}>{eyebrow}</Eyebrow>
      <h2
        className={`mt-4 text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl ${
          isDark ? "text-white" : "text-ink"
        }`}
      >
        {title}
      </h2>
      {children && (
        <p className={`mt-5 text-base leading-7 ${isDark ? "text-slate-400" : "text-slate-600"}`}>
          {children}
        </p>
      )}
    </Reveal>
  );
}

export function CheckIcon({ className = "" }: { className?: string }) {
  return (
    <svg aria-hidden viewBox="0 0 16 16" className={className} fill="none">
      <path
        d="M3.5 8.5 6.5 11.5 12.5 4.5"
        stroke="currentColor"
        strokeWidth="1.67"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ArrowLink({
  href,
  children,
  tone = "light",
  className = "",
}: {
  href: string;
  children: ReactNode;
  tone?: Tone;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={`inline-block text-sm font-semibold leading-5 transition-colors ${
        tone === "dark" ? "text-indigo-400 hover:text-white" : "text-primary hover:text-primary-dark"
      } ${className}`}
    >
      {children} →
    </Link>
  );
}

/** Prohibited / Required rule rows used by the draft-assistance section. */
export function RuleRow({ kind, children }: { kind: "Prohibited" | "Required"; children: ReactNode }) {
  const prohibited = kind === "Prohibited";
  return (
    <div
      className={`flex items-start gap-3 rounded-xl border px-4 py-3 ${
        prohibited ? "border-red-200 bg-orange-50" : "border-green-300 bg-green-50"
      }`}
    >
      <span
        className={`mt-0.5 flex-none rounded-full px-2 py-0.5 text-xs font-bold leading-4 ${
          prohibited ? "bg-red-200 text-amber-800" : "bg-green-300 text-green-800"
        }`}
      >
        {kind}
      </span>
      <span className="text-xs leading-5 text-slate-600">{children}</span>
    </div>
  );
}

/** Numbered circle used by the refusal steps and change-governance list. */
export function StepNumber({ n, tone = "light" }: { n: number; tone?: Tone }) {
  return (
    <span
      className={`flex size-6 flex-none items-center justify-center rounded-full text-xs font-bold leading-4 ${
        tone === "dark" ? "bg-white/10 text-slate-300" : "bg-indigo-50 text-primary"
      }`}
    >
      {n}
    </span>
  );
}

/**
 * Book a Demo / Take the Product Tour / Review AI Governance — closes the hero
 * and both CTAs, with the secondary button restyled per background.
 */
export function CtaButtons({
  variant,
  className = "",
}: {
  variant: "dark" | "dark-solid" | "light";
  className?: string;
}) {
  const secondary = {
    dark: "border border-white/20 bg-white/10 text-white hover:border-white/50",
    "dark-solid": "border border-white/20 bg-slate-950 text-white hover:border-white/50",
    light: "border border-primary text-primary hover:bg-primary-light",
  }[variant];
  const tertiary =
    variant === "light" ? "text-slate-600 hover:text-primary" : "text-indigo-400 hover:text-white";

  return (
    <div className={`flex flex-col items-stretch gap-3 sm:flex-row sm:flex-wrap sm:items-center ${className}`}>
      <Link
        href="/book-a-demo"
        className="inline-flex min-h-12 items-center justify-center rounded-full bg-primary px-7 text-base font-semibold text-white transition-colors hover:bg-primary-dark"
      >
        Book a Demo
      </Link>
      <Link
        href="/product-tour"
        className={`inline-flex min-h-12 items-center justify-center rounded-full px-7 text-base font-semibold transition-colors ${secondary}`}
      >
        Take the Product Tour
      </Link>
      {variant !== "dark" && (
        <Link
          href="/ai-governance"
          className={`inline-flex min-h-11 items-center justify-center text-sm font-semibold transition-colors sm:justify-start ${tertiary}`}
        >
          Review AI Governance →
        </Link>
      )}
    </div>
  );
}
