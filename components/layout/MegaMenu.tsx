"use client";

import Link from "next/link";
import { PlaceholderImage } from "@/components/ui";
import type { MegaMenuConfig } from "./megaMenuData";

const COLS_CLASS: Record<number, string> = {
  3: "lg:grid-cols-3",
  4: "lg:grid-cols-4",
};

function MegaMenuLinkRow({
  label,
  description,
  href,
  onNavigate,
}: {
  label: string;
  description: string;
  href: string;
  onNavigate: () => void;
}) {
  return (
    <Link
      href={href}
      onClick={onNavigate}
      className="group -mx-3 block rounded-xl px-3 py-2.5 transition-colors duration-150 hover:bg-slate-50"
    >
      <span className="flex items-center gap-1.5 text-sm font-semibold text-ink">
        {label}
        <span className="text-primary opacity-0 transition-all duration-200 -translate-x-1 group-hover:translate-x-0 group-hover:opacity-100">
          →
        </span>
      </span>
      <span className="mt-0.5 block text-xs leading-snug text-ink/50">
        {description}
      </span>
    </Link>
  );
}

export function MegaMenu({
  config,
  onNavigate,
}: {
  config: MegaMenuConfig;
  onNavigate: () => void;
}) {
  const totalSlots = config.columns.length + (config.featured ? 1 : 0);
  const colsClass = COLS_CLASS[totalSlots] ?? "lg:grid-cols-3";

  return (
    <div className="max-h-[calc(100vh-6.5rem)] overflow-y-auto rounded-3xl border border-slate-100 bg-white p-6 shadow-2xl shadow-slate-900/20">
      <div className="max-w-2xl">
        <h3 className="text-lg font-bold tracking-tight text-ink">
          {config.heading}
        </h3>
        <p className="mt-1.5 text-sm leading-relaxed text-ink/60">
          {config.intro}
        </p>
      </div>

      <div className={`mt-4 grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-2 ${colsClass}`}>
        {config.columns.map((column) => (
          <div key={column.heading}>
            <span className="text-xs font-semibold uppercase tracking-wide text-ink/40">
              {column.heading}
            </span>
            <div className={column.links.length > 4 ? "mt-1.5 grid grid-cols-2 gap-x-5" : "mt-1.5"}>
              {column.links.map((link) => (
                <MegaMenuLinkRow
                  key={link.label}
                  label={link.label}
                  description={link.description}
                  href={link.href}
                  onNavigate={onNavigate}
                />
              ))}
            </div>
          </div>
        ))}

        {config.featured && (
          <div className="rounded-2xl bg-slate-50 p-4 transition-shadow duration-300 hover:shadow-md">
            {config.featured.image && (
              <PlaceholderImage
                src={config.featured.image}
                alt={config.featured.title}
                label={config.featured.title}
                className="mb-3 aspect-[16/10] w-full rounded-xl"
              />
            )}
            <span className="text-xs font-semibold uppercase tracking-wide text-primary">
              {config.featured.eyebrow}
            </span>
            <p className="mt-1 font-semibold text-ink">{config.featured.title}</p>
            <p className="mt-1 text-sm leading-snug text-ink/60">
              {config.featured.description}
            </p>
            <Link
              href={config.featured.href}
              onClick={onNavigate}
              className="group mt-2 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-primary-dark"
            >
              {config.featured.ctaLabel}
              <span className="transition-transform duration-200 group-hover:translate-x-1">
                →
              </span>
            </Link>
          </div>
        )}
      </div>

      {(config.secondaryRoute || config.ruleNote) && (
        <div className="mt-4 flex flex-wrap items-center justify-between gap-4 border-t border-slate-100 pt-4">
          {config.secondaryRoute && (
            <div className="flex flex-wrap items-baseline gap-2">
              <Link
                href={config.secondaryRoute.href}
                onClick={onNavigate}
                className="group inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-primary-dark"
              >
                {config.secondaryRoute.label}
                <span className="transition-transform duration-200 group-hover:translate-x-1">
                  →
                </span>
              </Link>
              {config.secondaryRoute.note && (
                <span className="text-xs text-ink/40">{config.secondaryRoute.note}</span>
              )}
            </div>
          )}
          {config.ruleNote && (
            <p className="max-w-md text-xs leading-relaxed text-ink/40">
              {config.ruleNote}
            </p>
          )}
        </div>
      )}
    </div>
  );
}
