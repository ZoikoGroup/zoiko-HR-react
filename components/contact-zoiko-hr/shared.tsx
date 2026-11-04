import type { ReactNode } from "react";
import { Reveal } from "@/components/ui";

/**
 * Numbered eyebrow + heading shared by every section on this page, matching the
 * "02 / Contact Intent Router" numbering used throughout the design.
 */
export function SectionHeading({
  eyebrow,
  title,
  children,
  tone = "light",
  className = "",
}: {
  eyebrow: string;
  title?: string;
  children?: ReactNode;
  tone?: "light" | "dark";
  className?: string;
}) {
  return (
    <Reveal className={className}>
      <p
        className={`text-[11px] font-medium uppercase tracking-[0.12em] ${
          tone === "dark" ? "text-indigo-400" : "text-primary"
        }`}
      >
        {eyebrow}
      </p>
      {title && (
        <h2
          className={`mt-2 text-2xl font-extrabold leading-tight tracking-tight sm:text-3xl ${
            tone === "dark" ? "text-white" : "text-ink"
          }`}
        >
          {title}
        </h2>
      )}
      {children && (
        <p
          className={`mt-2 leading-6 ${
            tone === "dark" ? "text-slate-400" : "text-slate-600"
          }`}
        >
          {children}
        </p>
      )}
    </Reveal>
  );
}

export type RouteTone = "sales" | "support" | "partner" | "media" | "careers";

/**
 * Each contact route carries its own colour so the eye can tell the paths
 * apart — blue sales, green support, violet partner, amber media, emerald
 * careers, exactly as the design assigns them.
 */
export const ROUTE_TONES: Record<
  RouteTone,
  { bar: string; bg: string; border: string; link: string }
> = {
  sales: {
    bar: "bg-primary",
    bg: "bg-blue-50",
    border: "border-indigo-200",
    link: "text-primary",
  },
  support: {
    bar: "bg-green-400",
    bg: "bg-green-50",
    border: "border-green-200",
    link: "text-green-500",
  },
  partner: {
    bar: "bg-violet-400",
    bg: "bg-purple-50",
    border: "border-violet-200",
    link: "text-violet-500",
  },
  media: {
    bar: "bg-amber-500",
    bg: "bg-orange-50",
    border: "border-amber-200",
    link: "text-amber-600",
  },
  careers: {
    bar: "bg-emerald-400",
    bg: "bg-teal-50",
    border: "border-emerald-200",
    link: "text-emerald-500",
  },
};

/**
 * A single routing row: coloured spine, label, description separated by a
 * rule, and the outbound link. Used by both the intent router (02) and the
 * specialized paths (07).
 */
export function RouteRow({
  tone,
  label,
  description,
  linkLabel,
  href,
}: {
  tone: RouteTone;
  label: string;
  description: string;
  linkLabel: string;
  href: string;
}) {
  const styles = ROUTE_TONES[tone];
  return (
    <a
      href={href}
      className={`flex items-stretch overflow-hidden rounded-[10px] border ${styles.border} ${styles.bg} transition-shadow hover:shadow-sm`}
    >
      <span aria-hidden className={`w-1 flex-none ${styles.bar}`} />
      {/* The three-part row only has room for one line from md up; below that
          the label, description and link stack. */}
      <div className="flex min-w-0 flex-1 flex-col gap-2 px-5 py-4 md:flex-row md:items-center md:gap-0">
        <p className="pr-4 text-base font-semibold leading-6 text-slate-900 md:w-44 md:flex-none lg:w-48">
          {label}
        </p>
        <p className="min-w-0 text-xs leading-5 text-slate-600 md:flex-1 md:border-l md:border-slate-200 md:px-5">
          {description}
        </p>
        <span
          className={`inline-flex items-center gap-2 whitespace-nowrap text-xs font-semibold leading-5 ${styles.link} md:flex-none`}
        >
          {linkLabel}
          <span aria-hidden className="text-base leading-6">
            →
          </span>
        </span>
      </div>
    </a>
  );
}

/**
 * The design renders these two as literal emoji glyphs rather than icon
 * assets, so they stay as text — ⚠ in the hero notice, 🔏 on the privacy route.
 */
export function EmojiIcon({
  glyph,
  className = "",
}: {
  glyph: string;
  className?: string;
}) {
  return (
    <span aria-hidden className={className}>
      {glyph}
    </span>
  );
}
