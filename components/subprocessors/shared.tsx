import type { ReactNode } from "react";
import { Reveal } from "@/components/ui";

/**
 * Numbered eyebrow + heading used by every section on this page. The numbering
 * ("03 / Current Subprocessors Registry") is part of the design — it lets legal
 * and privacy reviewers reference sections by number.
 */
export function SectionHeading({
  eyebrow,
  title,
  children,
  tone = "light",
}: {
  eyebrow: string;
  title?: string;
  children?: ReactNode;
  tone?: "light" | "dark";
}) {
  return (
    <Reveal>
      <p
        className={`text-[11px] font-medium uppercase tracking-[0.12em] ${
          tone === "dark" ? "text-indigo-400" : "text-primary"
        }`}
      >
        {eyebrow}
      </p>
      {title && (
        <h2
          className={`mt-2.5 text-2xl font-extrabold leading-tight tracking-tight sm:text-3xl ${
            tone === "dark" ? "text-white" : "text-ink"
          }`}
        >
          {title}
        </h2>
      )}
      {children && (
        <p
          className={`mt-3.5 max-w-[640px] leading-7 ${
            tone === "dark" ? "text-slate-400" : "text-slate-600"
          }`}
        >
          {children}
        </p>
      )}
    </Reveal>
  );
}

/**
 * The release-blocking notice that repeats above every section showing
 * synthetic registry rows, so a reader never mistakes a placeholder for an
 * approved provider record.
 */
export function SourceDependencyNotice({ className = "" }: { className?: string }) {
  return (
    <Reveal>
      <div
        className={`rounded-[10px] border border-amber-500/30 bg-orange-50 px-5 py-3.5 ${className}`}
      >
        <p className="text-xs leading-5 text-yellow-800">
          <span className="font-semibold">Source dependency:</span> No live
          Zoiko HR subprocessor registry was supplied. Provider names, legal
          entities, classifications, purposes, locations, effective dates and
          notice details are release-blocking source dependencies — they are not
          invented here. Registry rows below show the governed data model and
          field structure using synthetic placeholder labels only.
        </p>
      </div>
    </Reveal>
  );
}

const STATE_STYLES: Record<string, { dot: string; text: string; bg: string }> = {
  Current: { dot: "bg-emerald-400", text: "text-emerald-400", bg: "bg-[#052e2b]" },
  "Under Review": { dot: "bg-violet-300", text: "text-violet-300", bg: "bg-slate-800" },
  "Degraded Source": { dot: "bg-amber-400", text: "text-amber-400", bg: "bg-[#3a2a05]" },
  Unavailable: { dot: "bg-rose-400", text: "text-rose-400", bg: "bg-[#3d1220]" },
  "Correction Pending": { dot: "bg-orange-400", text: "text-orange-400", bg: "bg-[#3a2208]" },
};

/** Registry state pill — dark chip with a coloured status dot. */
export function StatePill({
  state,
  className = "",
}: {
  state: string;
  className?: string;
}) {
  const style = STATE_STYLES[state] ?? STATE_STYLES["Under Review"];
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded px-2.5 py-1 text-[11px] font-medium tracking-wide ${style.bg} ${style.text} ${className}`}
    >
      <span aria-hidden className={`size-[5px] flex-none rounded-full ${style.dot}`} />
      {state}
    </span>
  );
}

export function CheckIcon({ className = "" }: { className?: string }) {
  return (
    <svg aria-hidden viewBox="0 0 16 16" className={className} fill="none">
      <path
        d="M3.2 8.4l3 3 6.6-6.8"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function CrossIcon({ className = "" }: { className?: string }) {
  return (
    <svg aria-hidden viewBox="0 0 16 16" className={className} fill="none">
      <path
        d="M4 4l8 8M12 4l-8 8"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
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
