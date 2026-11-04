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
  eyebrow?: string;
  title: string;
  children?: ReactNode;
  tone?: Tone;
  className?: string;
}) {
  const isDark = tone === "dark";
  return (
    <Reveal className={className}>
      {eyebrow && <Eyebrow tone={tone}>{eyebrow}</Eyebrow>}
      <h2
        className={`${eyebrow ? "mt-4" : ""} text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl ${
          isDark ? "text-white" : "text-ink"
        }`}
      >
        {title}
      </h2>
      {children && (
        <p className={`mt-4 text-base leading-7 ${isDark ? "text-slate-400" : "text-slate-600"}`}>
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

export function CheckList({
  items,
  className = "",
  iconClassName = "text-primary",
  textClassName = "text-slate-600",
}: {
  items: string[];
  className?: string;
  iconClassName?: string;
  textClassName?: string;
}) {
  return (
    <ul className={`flex flex-col gap-2 ${className}`}>
      {items.map((item) => (
        <li key={item} className="flex items-start gap-2">
          <CheckIcon className={`mt-0.5 size-4 flex-none ${iconClassName}`} />
          <span className={`text-xs leading-5 sm:text-sm ${textClassName}`}>{item}</span>
        </li>
      ))}
    </ul>
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

/** Book a Demo / Request Pricing / Take the Product Tour. */
export function CtaButtons({
  variant,
  className = "",
}: {
  variant: "dark" | "dark-solid";
  className?: string;
}) {
  const secondary =
    variant === "dark"
      ? "border border-white/20 bg-white/10 text-white hover:border-white/50"
      : "border border-white/20 bg-slate-950 text-white hover:border-white/50";

  return (
    <div className={`flex flex-col items-stretch gap-3 sm:flex-row sm:flex-wrap sm:items-center ${className}`}>
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
        className="inline-flex min-h-11 items-center justify-center text-sm font-semibold text-indigo-400 transition-colors hover:text-white sm:justify-start"
      >
        Take the Product Tour →
      </Link>
    </div>
  );
}
