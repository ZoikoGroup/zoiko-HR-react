"use client";

import { useState } from "react";
import Link from "next/link";

export type Location = {
  label: string;
  city: string;
  lines: string[];
};

export function LocationCard({ location }: { location: Location }) {
  const [copied, setCopied] = useState(false);
  const address = location.lines.join(", ");
  const mapsHref = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;

  async function copyAddress() {
    try {
      await navigator.clipboard.writeText(address);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard can be unavailable (insecure context, permissions) — fail quietly.
    }
  }

  return (
    <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-200 bg-slate-50 px-5 py-4 sm:px-6">
        <p className="flex items-center gap-3 text-xs font-bold uppercase leading-4 tracking-wide text-slate-600">
          <span aria-hidden className="size-2 rounded-full bg-primary" />
          {location.label}
        </p>
        <span className="rounded-full border border-green-300 bg-emerald-50 px-2.5 py-0.5 text-xs font-semibold leading-4 text-green-800">
          Published
        </span>
      </div>

      <div className="flex flex-1 flex-col gap-5 p-5 sm:p-6">
        <div>
          <h3 className="text-xl font-extrabold leading-8 text-ink">{location.city}</h3>
          <address className="mt-4 flex flex-col gap-1 not-italic">
            {location.lines.map((line) => (
              <span key={line} className="text-base font-medium leading-6 text-ink">
                {line}
              </span>
            ))}
          </address>
        </div>

        <p className="flex gap-2.5 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-xs leading-5 text-slate-500">
          <span aria-hidden className="text-sm text-slate-400">
            ℹ
          </span>
          Visitor access, opening hours, reception, delivery handling, and
          appointment availability are not published here unless an approved
          location record provides them. Contact Zoiko HR before visiting.
        </p>

        <div className="mt-auto flex flex-col gap-2.5">
          <div className="grid gap-2.5 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2">
            <a
              href={mapsHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-indigo-200 bg-blue-50 px-4 py-2.5 text-sm font-semibold text-primary transition-colors hover:bg-indigo-100"
            >
              Open in Maps <span aria-hidden>↗</span>
              <span className="sr-only">(opens in a new tab)</span>
            </a>
            <button
              type="button"
              onClick={copyAddress}
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-600 transition-colors hover:border-slate-300"
            >
              <span aria-live="polite">{copied ? "Copied ✓" : "Copy address"}</span>
            </button>
          </div>
          <Link
            href="/contact-zoiko-hr"
            className="inline-flex items-center justify-center rounded-xl border border-slate-200 px-4 py-2.5 text-sm font-semibold text-slate-500 transition-colors hover:border-primary hover:text-primary"
          >
            Contact Zoiko HR →
          </Link>
        </div>
      </div>
    </article>
  );
}
