import type { ReactNode } from "react";
import { Reveal } from "@/components/ui";

/**
 * This page uses a plain uppercase eyebrow rather than the outlined pill used
 * elsewhere in the trust section, and a smaller heading scale.
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

export function WarningIcon({ className = "" }: { className?: string }) {
  return (
    <svg aria-hidden viewBox="0 0 20 20" className={className} fill="none">
      <path
        d="M8.62 3.5c.598-1.037 2.16-1.037 2.759 0l6.146 10.653c.596 1.033-.183 2.347-1.38 2.347H3.855c-1.197 0-1.976-1.314-1.38-2.347L8.622 3.5Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
      <path d="M10 8v3.2" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      <circle cx="10" cy="13.9" r="0.9" fill="currentColor" />
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

export function InfoIcon({ className = "" }: { className?: string }) {
  return (
    <svg aria-hidden viewBox="0 0 20 20" className={className} fill="none">
      <circle cx="10" cy="10" r="7.25" stroke="currentColor" strokeWidth="1.4" />
      <path d="M10 9.2v4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      <circle cx="10" cy="6.6" r="0.9" fill="currentColor" />
    </svg>
  );
}

/** The page-wide disclaimer that repeats above several sections. */
export function NonControllingBanner({ className = "" }: { className?: string }) {
  return (
    <Reveal>
      <div
        className={`flex items-start gap-2.5 rounded-[10px] border border-amber-400 bg-amber-50 px-3.5 py-2.5 ${className}`}
      >
        <WarningIcon className="mt-0.5 size-4 flex-none text-amber-600" />
        <p className="text-xs leading-4 text-amber-800">
          <span className="font-semibold">Non-controlling summary.</span> This
          page is a navigation aid only. The approved DPA text and any
          applicable executed or account-specific terms control. No summary,
          label or table on this page amends the agreement.
        </p>
      </div>
    </Reveal>
  );
}

const STATUS_STYLES: Record<string, string> = {
  Current: "border-emerald-400/30 bg-emerald-400/10 text-emerald-500",
  "Current DPA": "border-slate-300 bg-slate-100 text-slate-500",
  Public: "border-emerald-400/30 bg-emerald-400/10 text-emerald-500",
  "Request Required": "border-blue-400/30 bg-blue-400/10 text-blue-500",
  Controlled: "border-blue-400/30 bg-blue-400/10 text-blue-500",
  "Not Established": "border-amber-400/30 bg-amber-400/10 text-amber-600",
  Superseded: "border-slate-400/20 bg-slate-400/10 text-slate-400",
};

export function StatusBadge({ status }: { status: string }) {
  return (
    <span
      className={`inline-flex whitespace-nowrap rounded-full border px-2 py-0.5 text-[10px] font-semibold ${
        STATUS_STYLES[status] ?? "border-slate-200 bg-slate-100 text-slate-500"
      }`}
    >
      {status}
    </span>
  );
}
