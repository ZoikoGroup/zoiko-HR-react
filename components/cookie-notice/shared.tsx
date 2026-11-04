import Link from "next/link";
import type { ReactNode } from "react";

/** Where "Manage cookie settings" points until a consent manager is wired up. */
export const COOKIE_SETTINGS_HREF = "/cookie-settings";

/** Amber chip for values that must come from the approved registry. */
export function SourceToken({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex max-w-full items-center wrap-break-word rounded border border-amber-200 bg-amber-50 px-2 py-0.5 text-[11px] font-semibold leading-4 text-amber-800">
      {children}
    </span>
  );
}

export function CurrentPill() {
  return (
    <span className="inline-flex flex-none items-center rounded-full border border-green-300 bg-emerald-50 px-2.5 py-0.5 text-xs font-semibold leading-4 text-green-800">
      Current
    </span>
  );
}

export const CATEGORY_STYLES: Record<string, string> = {
  "Strictly Necessary": "bg-emerald-50 text-green-800",
  "Functional / Preferences": "bg-indigo-50 text-blue-900",
  "Analytics / Measurement": "bg-indigo-50 text-indigo-800",
  "Advertising / Targeting": "bg-orange-50 text-amber-800",
};

export function CategoryBadge({ category }: { category: string }) {
  return (
    <span
      className={`inline-flex rounded-full px-2 py-0.5 text-xs font-semibold leading-4 ${
        CATEGORY_STYLES[category] ?? "bg-slate-100 text-slate-600"
      }`}
    >
      {category}
    </span>
  );
}

export function ArrowLink({
  href,
  children,
  className = "",
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={`rounded-sm text-sm font-semibold text-primary transition-colors hover:text-primary-dark ${className}`}
    >
      {children} →
    </Link>
  );
}

export function CookieSettingsButton({ className = "" }: { className?: string }) {
  return (
    <Link
      href={COOKIE_SETTINGS_HREF}
      className={`inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-primary px-6 text-sm font-semibold text-white transition-colors hover:bg-primary-dark ${className}`}
    >
      <GearIcon className="size-4" />
      Manage cookie settings
    </Link>
  );
}

export function GearIcon({ className = "" }: { className?: string }) {
  return (
    <svg aria-hidden viewBox="0 0 16 16" className={className} fill="none">
      <circle cx="8" cy="8" r="2" stroke="currentColor" strokeWidth="1.33" />
      <path
        d="M8 1.33a1 1 0 0 1 .96.71l.2.66a5.3 5.3 0 0 1 .9.37l.6-.33a1 1 0 0 1 1.19.17l.24.24a1 1 0 0 1 .17 1.19l-.33.6c.15.28.27.58.37.9l.66.2a1 1 0 0 1 .71.96v.34a1 1 0 0 1-.71.96l-.66.2c-.1.32-.22.62-.37.9l.33.6a1 1 0 0 1-.17 1.19l-.24.24a1 1 0 0 1-1.19.17l-.6-.33c-.28.15-.58.27-.9.37l-.2.66a1 1 0 0 1-.96.71h-.34a1 1 0 0 1-.96-.71l-.2-.66a5.3 5.3 0 0 1-.9-.37l-.6.33a1 1 0 0 1-1.19-.17l-.24-.24a1 1 0 0 1-.17-1.19l.33-.6a5.3 5.3 0 0 1-.37-.9l-.66-.2a1 1 0 0 1-.71-.96v-.34a1 1 0 0 1 .71-.96l.66-.2c.1-.32.22-.62.37-.9l-.33-.6a1 1 0 0 1 .17-1.19l.24-.24a1 1 0 0 1 1.19-.17l.6.33c.28-.15.58-.27.9-.37l.2-.66A1 1 0 0 1 7.66 1.33H8Z"
        stroke="currentColor"
        strokeWidth="1.33"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function NoticeHeading({ id, children }: { id: string; children: ReactNode }) {
  return (
    <h2
      id={id}
      className="scroll-mt-28 text-xl font-extrabold leading-7 tracking-tight text-ink"
    >
      {children}
    </h2>
  );
}

export function NoticeParagraph({ children }: { children: ReactNode }) {
  return <p className="mt-4 text-sm leading-7 text-slate-600">{children}</p>;
}

export function NoticeDivider() {
  return <hr className="my-10 border-t border-slate-200" />;
}

export function InfoNote({ children }: { children: ReactNode }) {
  return (
    <div className="mt-5 rounded-xl border border-indigo-200 bg-blue-50 px-5 py-4">
      <p className="text-sm leading-6 text-slate-700">{children}</p>
    </div>
  );
}

/**
 * Two-column reference table. Stacks to label-above-value below sm so the
 * long prose cells never force the page to scroll sideways.
 */
export function ReferenceTable({
  columns,
  rows,
}: {
  columns: [string, string];
  rows: { label: string; value: ReactNode }[];
}) {
  return (
    <div className="mt-6 overflow-hidden rounded-xl border border-slate-200">
      <div className="hidden border-b border-slate-200 bg-slate-100 sm:grid sm:grid-cols-[minmax(0,320px)_minmax(0,1fr)]">
        {columns.map((column) => (
          <p
            key={column}
            className="px-4 py-3 text-xs font-semibold leading-5 text-slate-700"
          >
            {column}
          </p>
        ))}
      </div>
      <dl>
        {rows.map((row, i) => (
          <div
            key={row.label}
            className={`grid gap-1 px-4 py-3 sm:grid-cols-[minmax(0,320px)_minmax(0,1fr)] sm:gap-4 sm:px-0 sm:py-0 ${
              i % 2 === 1 ? "bg-gray-50" : "bg-white"
            } ${i === rows.length - 1 ? "" : "border-b border-slate-200"}`}
          >
            <dt className="text-xs font-semibold leading-5 text-ink sm:px-4 sm:py-3">
              {row.label}
            </dt>
            <dd className="text-xs leading-5 text-slate-500 sm:px-4 sm:py-3">
              {row.value}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
