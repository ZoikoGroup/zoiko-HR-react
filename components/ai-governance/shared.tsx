import type { ReactNode } from "react";
import { Reveal } from "@/components/ui";

/**
 * This page uses a plain uppercase eyebrow rather than the outlined pill used
 * in the hero, and a heading scale a step below the security pages.
 */
export function SectionHeading({
  eyebrow,
  title,
  children,
  tone = "light",
}: {
  eyebrow: string;
  title: string;
  children?: ReactNode;
  tone?: "light" | "dark";
}) {
  return (
    <Reveal>
      <p
        className={`text-[10px] font-semibold uppercase tracking-[0.1em] ${
          tone === "dark" ? "text-indigo-400" : "text-slate-400"
        }`}
      >
        {eyebrow}
      </p>
      <h2
        className={`mt-2 text-2xl font-extrabold leading-tight tracking-tight sm:text-3xl ${
          tone === "dark" ? "text-white" : "text-ink"
        }`}
      >
        {title}
      </h2>
      {children && (
        <p
          className={`mt-2 max-w-xl leading-6 ${
            tone === "dark" ? "text-slate-400" : "text-slate-500"
          }`}
        >
          {children}
        </p>
      )}
    </Reveal>
  );
}

/** Small uppercase label that introduces a table, list or stack. */
export function BlockLabel({
  children,
  tone = "light",
  className = "",
}: {
  children: ReactNode;
  tone?: "light" | "dark";
  className?: string;
}) {
  return (
    <p
      className={`text-[10px] font-semibold uppercase tracking-[0.1em] ${
        tone === "dark" ? "text-slate-500" : "text-slate-400"
      } ${className}`}
    >
      {children}
    </p>
  );
}

export function InfoIcon({ className = "" }: { className?: string }) {
  return (
    <svg aria-hidden viewBox="0 0 20 20" className={className} fill="none">
      <circle cx="10" cy="10" r="7.25" stroke="currentColor" strokeWidth="1.4" />
      <path d="M10 9.2v4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      <circle cx="10" cy="6.6" r="0.9" fill="currentColor" />
    </svg>
  );
}

export function ProhibitedIcon({ className = "" }: { className?: string }) {
  return (
    <svg aria-hidden viewBox="0 0 20 20" className={className} fill="none">
      <circle cx="10" cy="10" r="7.25" stroke="currentColor" strokeWidth="1.4" />
      <path d="M5.1 5.1l9.8 9.8" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

export function CheckIcon({ className = "" }: { className?: string }) {
  return (
    <svg aria-hidden viewBox="0 0 20 20" className={className} fill="none">
      <path
        d="M4.5 10.6l3.4 3.4 7.6-7.9"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ChatIcon({ className = "" }: { className?: string }) {
  return (
    <svg aria-hidden viewBox="0 0 20 20" className={className} fill="none">
      <path
        d="M3.2 6.1c0-1.05.85-1.9 1.9-1.9h9.8c1.05 0 1.9.85 1.9 1.9v5.4c0 1.05-.85 1.9-1.9 1.9H8.4l-3.5 2.6v-2.6h-.2a1.5 1.5 0 0 1-1.5-1.5V6.1Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ApprovalIcon({ className = "" }: { className?: string }) {
  return (
    <svg aria-hidden viewBox="0 0 20 20" className={className} fill="none">
      <rect x="3" y="3" width="14" height="14" rx="3.4" fill="currentColor" />
      <path
        d="M6.6 10.2l2.4 2.4 4.4-4.7"
        stroke="#fff"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/**
 * The page-wide disclaimer that repeats above several sections.
 */
export function NonControllingBanner({ className = "" }: { className?: string }) {
  return (
    <Reveal>
      <div
        className={`flex items-start gap-2.5 rounded-[10px] border border-primary/25 bg-blue-50 px-3.5 py-2.5 ${className}`}
      >
        <InfoIcon className="mt-0.5 size-4 flex-none text-primary" />
        <p className="text-xs leading-4 text-blue-900">
          <span className="font-semibold">Non-controlling summary.</span> This
          page presents governance framework and approved public records only.
          No specific AI feature, model, provider, training behavior, retention
          policy, accuracy claim, autonomy right, or legal/compliance status is
          established without a current source-approved record.
        </p>
      </div>
    </Reveal>
  );
}

const STATUS_STYLES: Record<string, string> = {
  Verified: "border-emerald-400/30 bg-emerald-400/10 text-emerald-500",
  Public: "border-emerald-400/30 bg-emerald-400/10 text-emerald-500",
  Controlled: "border-blue-400/30 bg-blue-400/10 text-blue-400",
  Restricted: "border-amber-400/30 bg-amber-400/10 text-amber-500",
  "Not Established": "border-amber-400/30 bg-amber-400/10 text-amber-500",
  Prohibited: "border-rose-400/30 bg-rose-400/10 text-rose-500",
};

const DOT_STYLES: Record<string, string> = {
  Verified: "bg-emerald-400",
  Public: "bg-emerald-400",
  Controlled: "bg-blue-400",
  Restricted: "bg-amber-400",
  "Not Established": "bg-amber-400",
  Prohibited: "bg-rose-400",
};

export function StatusBadge({
  status,
  variant,
  dot = false,
  className = "",
}: {
  status: string;
  /** Leading colour dot — used by the logging legend only. */
  dot?: boolean;
  /**
   * Overrides the palette looked up from the label. "Restricted" is amber in
   * the logging legend but rose in the data-use table, so the label alone
   * can't pick the colour.
   */
  variant?: keyof typeof STATUS_STYLES;
  className?: string;
}) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 whitespace-nowrap rounded-full border px-2 py-0.5 text-[10px] font-semibold ${
        STATUS_STYLES[variant ?? status] ??
        "border-slate-200 bg-slate-100 text-slate-500"
      } ${className}`}
    >
      {dot && (
        <span
          aria-hidden
          className={`size-1 rounded-full ${
            DOT_STYLES[variant ?? status] ?? "bg-slate-400"
          }`}
        />
      )}
      {status}
    </span>
  );
}
