import Link from "next/link";
import type { ReactNode } from "react";
import { Reveal } from "@/components/ui";

export type Tone = "light" | "dark";

/** Spaced uppercase eyebrow used above every section title on this page. */
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
  align = "left",
}: {
  eyebrow: string;
  title: string;
  children?: ReactNode;
  tone?: Tone;
  className?: string;
  align?: "left" | "center";
}) {
  const isDark = tone === "dark";
  return (
    <Reveal className={`${align === "center" ? "mx-auto text-center" : ""} ${className}`}>
      <Eyebrow tone={tone}>{eyebrow}</Eyebrow>
      <h2
        className={`mt-4 text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl ${
          isDark ? "text-white" : "text-ink"
        }`}
      >
        {title}
      </h2>
      {children && (
        <p
          className={`mt-5 text-base leading-7 ${isDark ? "text-slate-400" : "text-slate-600"}`}
        >
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

export function InfoIcon({ className = "" }: { className?: string }) {
  return (
    <svg aria-hidden viewBox="0 0 16 16" className={className} fill="none">
      <circle cx="8" cy="8" r="6.67" stroke="currentColor" strokeWidth="1.33" />
      <path d="M8 5.33V8.5" stroke="currentColor" strokeWidth="1.33" strokeLinecap="round" />
      <circle cx="8" cy="10.83" r="0.75" fill="currentColor" />
    </svg>
  );
}

export function CheckList({ items, className = "" }: { items: string[]; className?: string }) {
  return (
    <ul className={`flex flex-col gap-3 ${className}`}>
      {items.map((item) => (
        <li key={item} className="flex items-start gap-2.5">
          <CheckIcon className="mt-1 size-4 flex-none text-primary" />
          <span className="text-sm leading-6 text-slate-600">{item}</span>
        </li>
      ))}
    </ul>
  );
}

/** Amber boundary note with the circled-i icon. */
export function CautionNote({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div
      className={`flex items-start gap-3 rounded-xl border border-amber-200 bg-amber-50 px-5 py-3.5 ${className}`}
    >
      <InfoIcon className="mt-1 size-4 flex-none text-amber-800" />
      <p className="text-xs leading-6 text-amber-800 sm:text-sm">{children}</p>
    </div>
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
        tone === "dark"
          ? "text-indigo-400 hover:text-white"
          : "text-primary hover:text-primary-dark"
      } ${className}`}
    >
      {children} →
    </Link>
  );
}

/**
 * Book a Demo / Request Pricing / Take the Product Tour — the trio that
 * closes the hero and both CTAs, each with its own secondary-button styling.
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
  const tour = variant === "light" ? "text-slate-600 hover:text-primary" : "text-indigo-400 hover:text-white";

  return (
    <div
      className={`flex flex-col items-stretch gap-3 sm:flex-row sm:flex-wrap sm:items-center ${className}`}
    >
      <Link
        href="/book-a-demo"
        className="inline-flex min-h-12 items-center justify-center rounded-full bg-primary px-7 text-base font-semibold text-white transition-colors hover:bg-primary-dark"
      >
        Book a Demo
      </Link>
      <Link
        href="/pricing"
        className={`inline-flex min-h-12 items-center justify-center rounded-full px-7 text-base font-semibold transition-colors ${secondary}`}
      >
        Request Pricing
      </Link>
      <Link
        href="/product-tour"
        className={`inline-flex min-h-11 items-center justify-center text-sm font-semibold transition-colors sm:justify-start ${tour}`}
      >
        Take the Product Tour →
      </Link>
    </div>
  );
}
