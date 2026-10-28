import { Container, Reveal } from "@/components/ui";
import { Dot, MarkedItem } from "./shared";

const BANDS = [
  {
    eyebrow: "What Zoiko One is",
    dotClass: "bg-green-700",
    eyebrowClass: "text-green-700",
    background: "bg-white",
    mark: "✓",
    markClass: "text-green-700",
    statement:
      "An optional wider-suite context for using Zoiko HR alongside selected Zoiko products — each keeping its own source authority, permissions and lifecycle.",
    items: [
      "Product participation is explicit, not assumed",
      "Suite context aids navigation and handoff reference",
      "Each approved relationship has a defined purpose and scope",
      "Coexistence with external systems is a valid stable posture",
      "Exact capabilities remain source-governed",
    ],
  },
  {
    eyebrow: "What Zoiko One coordinates",
    dotClass: "bg-sky-700",
    eyebrowClass: "text-sky-700",
    background: "bg-slate-50",
    mark: "✓",
    markClass: "text-sky-700",
    statement:
      "Navigation context, cross-product handoff references, dependency visibility and optional shared context — only to the minimum necessary for the approved purpose.",
    items: [
      "Navigation shows only visible, accessible products for the current viewer",
      "Cross-product references carry minimum metadata — not copied sensitive payloads",
      "Handoff states are visible: prepared, requested, accepted, completed, stale, rejected",
      "Dependencies show direct and transitive chains with reasons and fallbacks",
      "Suite summary shows transparent constituent states — no single badge hiding a degraded product",
    ],
  },
  {
    eyebrow: "What Zoiko One never becomes",
    dotClass: "bg-red-600",
    eyebrowClass: "text-red-600",
    background: "bg-white",
    mark: "✗",
    markClass: "text-red-600",
    statement:
      "A master source of truth, a universal admin surface, a shared database, a single-login grant or a forced migration requirement — without explicit current approved source authority.",
    items: [
      "Does not create HR, time, payroll, document, compliance or identity truth",
      "Does not grant downstream product rights from a suite session or Zoiko HR admin role",
      "Does not create cross-product productivity, reliability or risk scores from activity",
      "Does not imply commercial bundling, entitlement or pricing from technical dependency",
      "Does not make migration the default consequence of adding a Zoiko product",
    ],
  },
];

export function WhatItIsSection() {
  return (
    <>
      {BANDS.map((band) => (
        <section
          key={band.eyebrow}
          className={`border-b border-slate-200 ${band.background} py-10`}
        >
          <Container>
            <Reveal amount={0}>
              <div className="grid gap-5 lg:grid-cols-[minmax(0,220px)_minmax(0,474px)_minmax(0,1fr)] lg:gap-8">
                <div className="flex items-center gap-2">
                  <Dot className={`size-2.5 ${band.dotClass}`} />
                  <p
                    className={`text-xs font-medium uppercase leading-4 tracking-wide ${band.eyebrowClass}`}
                  >
                    {band.eyebrow}
                  </p>
                </div>

                <p className="break-words text-xl font-extrabold leading-7 text-slate-950">
                  {band.statement}
                </p>

                <ul className="flex flex-col gap-2">
                  {band.items.map((item) => (
                    <MarkedItem
                      key={item}
                      mark={band.mark}
                      markClass={band.markClass}
                    >
                      {item}
                    </MarkedItem>
                  ))}
                </ul>
              </div>
            </Reveal>
          </Container>
        </section>
      ))}
    </>
  );
}
