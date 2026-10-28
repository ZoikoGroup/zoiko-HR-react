import Link from "next/link";
import type { ReactNode } from "react";

/**
 * Amber "source required" chip. Every date, entity, lawful basis, retention
 * period and contact on this notice is a placeholder until an approved legal
 * record populates it — the Figma marks each one with this token.
 */
export function SourceToken({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex max-w-full items-center wrap-break-word rounded border border-amber-200 bg-amber-50 px-2 py-0.5 text-[11px] font-semibold leading-4 text-amber-800">
      {children}
    </span>
  );
}

/** Blue text link with the trailing arrow used throughout the notice. */
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

/** Bulleted item with the small blue dot marker. */
export function Bullet({ children }: { children: ReactNode }) {
  return (
    <li className="flex items-start gap-3">
      <span aria-hidden className="mt-2.5 size-1.5 flex-none rounded-full bg-primary" />
      <span className="text-sm leading-6 text-slate-600">{children}</span>
    </li>
  );
}

/** h2 for a numbered block of the notice body. */
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

/** Dashed placeholder block standing in for content awaiting a legal source. */
export function PendingSourceBlock({
  title,
  children,
  token,
}: {
  title?: string;
  children: ReactNode;
  token: string;
}) {
  return (
    <div className="mt-6 rounded-xl border border-dashed border-slate-300 bg-slate-50 px-4 py-4">
      {title && (
        <p className="text-[11px] font-semibold uppercase tracking-[0.08em] text-slate-500">
          {title}
        </p>
      )}
      <div className="mt-1 flex flex-wrap items-center gap-2">
        <span className="text-xs leading-5 text-slate-400">{children}</span>
        <SourceToken>{token}</SourceToken>
      </div>
    </div>
  );
}

/** Horizontal rule separating the notice blocks. */
export function NoticeDivider() {
  return <hr className="my-10 border-t border-slate-200" />;
}
