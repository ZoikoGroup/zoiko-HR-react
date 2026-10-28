import Link from "next/link";
import type { ReactNode } from "react";

/**
 * Amber "approved source required" chip. Every entity name, address,
 * registration number, date and copyright line on this page stays a
 * placeholder until Legal populates it from an approved record.
 */
export function SourceToken({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex max-w-full items-center wrap-break-word rounded border border-amber-200 bg-amber-50 px-2 py-0.5 text-[11px] font-semibold leading-4 text-amber-800">
      {children}
    </span>
  );
}

/** Green "Current" version pill. */
export function CurrentPill() {
  return (
    <span className="inline-flex flex-none items-center rounded-full border border-green-300 bg-emerald-50 px-2.5 py-0.5 text-xs font-semibold leading-4 text-green-800">
      Current
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

export function SubHeading({ children }: { children: ReactNode }) {
  return (
    <h3 className="mt-6 text-base font-semibold leading-6 text-ink">{children}</h3>
  );
}

export function NoticeParagraph({ children }: { children: ReactNode }) {
  return <p className="mt-4 text-sm leading-7 text-slate-600">{children}</p>;
}

export function NoticeDivider() {
  return <hr className="my-10 border-t border-slate-200" />;
}

/** Blue contextual note. */
export function InfoNote({ children }: { children: ReactNode }) {
  return (
    <div className="mt-5 rounded-xl border border-indigo-200 bg-blue-50 px-5 py-4">
      <p className="text-sm leading-6 text-slate-700">{children}</p>
    </div>
  );
}

/** Amber warning note. */
export function CautionNote({ children }: { children: ReactNode }) {
  return (
    <div className="mt-4 rounded-xl border border-amber-200 bg-amber-50 px-5 py-4">
      <p className="text-sm leading-6 text-slate-700">{children}</p>
    </div>
  );
}

/**
 * Two-column reference table (label + value). Stacks into rows on phones so
 * the long amber source tokens never force sideways scrolling.
 */
export function ReferenceTable({
  columns,
  rows,
}: {
  /** Omitted for the operator table, which the design shows without a header. */
  columns?: [string, string];
  rows: { label: string; value: ReactNode }[];
}) {
  return (
    <div className="mt-6 overflow-hidden rounded-xl border border-slate-200">
      {columns && (
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
      )}
      <dl>
        {rows.map((row, i) => (
          <div
            key={row.label}
            className={`grid gap-1 px-4 py-3 sm:grid-cols-[minmax(0,320px)_minmax(0,1fr)] sm:gap-4 sm:px-0 sm:py-0 ${
              i % 2 === 1 ? "bg-gray-50" : "bg-white"
            } ${i === rows.length - 1 ? "" : "border-b border-slate-200"}`}
          >
            <dt className="text-xs font-semibold leading-5 text-slate-700 sm:px-4 sm:py-3">
              {row.label}
            </dt>
            <dd className="text-xs leading-5 text-slate-600 sm:px-4 sm:py-3">
              {row.value}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
