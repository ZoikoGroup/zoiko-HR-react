import type { ReactNode } from "react";
import { Reveal } from "@/components/ui";

/**
 * This page numbers its sections in the eyebrow itself ("03 / Commitment &
 * Principles") and keeps the heading at a single scale on light and dark
 * grounds alike.
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
        className={`text-xs font-medium uppercase leading-4 tracking-[0.12em] ${
          tone === "dark" ? "text-indigo-400" : "text-primary"
        }`}
      >
        {eyebrow}
      </p>
      <h2
        className={`mt-2.5 text-2xl font-extrabold leading-tight tracking-tight sm:text-3xl ${
          tone === "dark" ? "text-white" : "text-slate-900"
        }`}
      >
        {title}
      </h2>
      {children && (
        <p
          className={`mt-3.5 max-w-160 leading-7 ${
            tone === "dark" ? "text-slate-400" : "text-slate-600"
          }`}
        >
          {children}
        </p>
      )}
    </Reveal>
  );
}

/** Small grey note that closes several sections. */
export function SectionFootnote({ children }: { children: ReactNode }) {
  return (
    <Reveal>
      <p className="mt-4 text-xs leading-4 text-slate-400">{children}</p>
    </Reveal>
  );
}

/**
 * Status chips on this page are dark-filled rather than tinted outlines, and
 * they read the same on the light and dark sections.
 */
const CHIP_STYLES: Record<string, string> = {
  Current: "bg-teal-950 text-green-400",
  "Not Established": "bg-slate-800 text-slate-400",
  "Limited / Partial": "bg-yellow-950 text-amber-400",
  "Workaround Available": "bg-sky-950 text-sky-400",
  Open: "bg-amber-950 text-amber-400",
};

export function StatusChip({
  status,
  className = "",
}: {
  status: string;
  className?: string;
}) {
  return (
    <span
      className={`inline-flex whitespace-nowrap rounded-sm px-2.5 py-[3px] text-xs font-medium leading-4 tracking-wide ${
        CHIP_STYLES[status] ?? "bg-slate-800 text-slate-400"
      } ${className}`}
    >
      {status}
    </span>
  );
}

/** Lighter tinted chips used by the change-history timeline. */
const TAG_STYLES: Record<string, string> = {
  Publication: "bg-blue-100 text-blue-600",
  "Scope Update": "bg-blue-50 text-blue-400",
  "Limitation Added": "bg-amber-50 text-amber-500",
};

export function ChangeTag({ tag }: { tag: string }) {
  return (
    <span
      className={`inline-flex whitespace-nowrap rounded px-2 py-0.5 text-[11px] font-medium ${
        TAG_STYLES[tag] ?? "bg-slate-100 text-slate-500"
      }`}
    >
      {tag}
    </span>
  );
}

/** Boxed aside that closes a couple of sections with a bolded lead-in. */
export function BoundaryNote({
  label,
  children,
  tone = "light",
}: {
  label: string;
  children: ReactNode;
  tone?: "light" | "dark";
}) {
  return (
    <Reveal>
      <div
        className={`mt-6 rounded-xl border px-5 py-4 text-xs leading-5 ${
          tone === "dark"
            ? "border-white/10 bg-white/[0.03] text-slate-400"
            : "border-primary/20 bg-blue-50/60 text-slate-600"
        }`}
      >
        <span
          className={`font-semibold ${
            tone === "dark" ? "text-white" : "text-slate-900"
          }`}
        >
          {label}
        </span>{" "}
        {children}
      </div>
    </Reveal>
  );
}

export function CheckIcon({ className = "" }: { className?: string }) {
  return (
    <svg aria-hidden viewBox="0 0 20 20" className={className} fill="none">
      <path
        d="M4.5 10.6l3.4 3.4 7.6-7.9"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function CrossIcon({ className = "" }: { className?: string }) {
  return (
    <svg aria-hidden viewBox="0 0 20 20" className={className} fill="none">
      <path
        d="M5.6 5.6l8.8 8.8M14.4 5.6l-8.8 8.8"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}
