import { Container, Reveal } from "@/components/ui";
import { SectionHeading } from "./shared";

/**
 * Row 1's source label is `text-slate-950` in the export — invisible against
 * the dark panel — so it is rendered in the same neutral as its icon here.
 */
const DOMAINS = [
  {
    icon: "◈",
    tint: "bg-white/5",
    accent: "text-white/70",
    domain: "HR / workforce records",
    source: "Zoiko HR / approved HR authority",
    boundary:
      "Other products may reference approved fields and events. They do not rewrite HR truth by default. Zoiko One coordinates — it does not become a source of employment or org truth.",
  },
  {
    icon: "◷",
    tint: "bg-primary/10",
    accent: "text-primary",
    domain: "Schedule / attendance / timesheets",
    source: "ZoikoTime or approved time source",
    boundary:
      "Zoiko HR consumes approved time context only. Source authority and version are explicit. Cross-product time aggregation does not transfer write authority to the suite layer.",
  },
  {
    icon: "◎",
    tint: "bg-sky-700/10",
    accent: "text-sky-500",
    domain: "Payroll preparation / result",
    source: "Zoiko Payroll or approved payroll authority",
    boundary:
      "HR preparation context does not become payroll calculation or payment authority. Payroll values are not copied into suite cards by default. Source authority confirmed per reference.",
  },
  {
    icon: "⊞",
    tint: "bg-violet-600/10",
    accent: "text-violet-400",
    domain: "Documents / templates / storage",
    source: "Zoiko Docs Pro + HR Documents & Policies (by mode)",
    boundary:
      "Source, version, lifecycle and relationship mode preserved. Suite navigation can reference approved documents without taking ownership. No content rewrite by suite context.",
  },
  {
    icon: "⊟",
    tint: "bg-amber-700/10",
    accent: "text-amber-500",
    domain: "Policies / controls / evidence",
    source: "Zoiko Comply + owning HR/policy authorities",
    boundary:
      "Workflow and evidence status does not guarantee compliance. Suite view reflects status — it does not own or overwrite policy truth. Compliance evidence stays source-owned.",
  },
  {
    icon: "⊙",
    tint: "bg-green-700/10",
    accent: "text-green-500",
    domain: "Identity / authentication",
    source: "ZoikoID / approved identity authority",
    boundary:
      "Authentication proves identity; it does not grant business authorization. Each product boundary re-evaluates access. Suite context token is never a privilege-bearing credential.",
  },
];

export function AuthorityContractSection() {
  return (
    <section id="authority-contract" className="bg-slate-950 py-16 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow="Product Authority Contract"
          title="Six domains — each keeps its authoritative source. Zoiko One coordinates but never owns."
          tone="dark"
        >
          The suite layer can reference, navigate and hand off — it cannot
          assign, rewrite or become the authoritative record for any domain
          without explicit source approval.
        </SectionHeading>

        <div className="mt-8 flex flex-col gap-2">
          {DOMAINS.map((item, i) => (
            <Reveal key={item.domain} delay={Math.min(0.04 + i * 0.04, 0.24)} amount={0}>
              <div className="overflow-hidden rounded-xl border border-white/10 lg:grid lg:grid-cols-[minmax(0,56px)_minmax(0,200px)_minmax(0,1fr)_minmax(0,1fr)] lg:items-stretch">
                <div
                  className={`flex items-center gap-3 p-4 lg:justify-center ${item.tint}`}
                >
                  <span aria-hidden className={`text-lg leading-7 ${item.accent}`}>
                    {item.icon}
                  </span>
                  <p className="break-words text-xs font-semibold leading-5 text-white lg:hidden">
                    {item.domain}
                  </p>
                </div>

                <div className="hidden items-center border-r border-white/10 p-4 lg:flex">
                  <p className="break-words text-xs font-semibold leading-5 text-white">
                    {item.domain}
                  </p>
                </div>

                <div className="flex flex-col justify-center border-t border-white/10 p-4 lg:border-l-0 lg:border-r lg:border-t-0">
                  <p className="pb-1 text-[9px] font-medium uppercase leading-3 tracking-wide text-white/30">
                    Authoritative source
                  </p>
                  <p
                    className={`break-words font-mono text-xs leading-4 ${item.accent}`}
                  >
                    {item.source}
                  </p>
                </div>

                <div className="flex items-center border-t border-white/10 p-4 lg:border-t-0">
                  <p className="break-words text-xs leading-4 text-white/50">
                    {item.boundary}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <p className="mt-5 break-words text-xs font-medium leading-4 text-white/30">
            Write semantics per domain: each source product defines allowed
            writes; cross-product reference does not grant write-back.
            Corrections occur at authoritative source or approved workflow. No
            latest-write-wins default.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
