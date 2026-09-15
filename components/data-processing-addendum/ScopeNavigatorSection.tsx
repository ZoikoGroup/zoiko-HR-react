import { Container, Reveal } from "@/components/ui";
import { SectionHeading, WarningIcon, StatusBadge } from "./shared";

const STEPS = [
  {
    title: "Which service?",
    description:
      "Covered service or product scope from approved order or service schedule.",
  },
  {
    title: "Which entity?",
    description:
      "Contracting entity per approved legal registry — not inferred from billing country.",
  },
  {
    title: "Which role?",
    description:
      "Customer/Zoiko role as established in approved DPA/legal source — never assumed.",
  },
  {
    title: "Jurisdiction?",
    description:
      "Transfer module or jurisdiction context from approved module record only.",
  },
  {
    title: "Which version?",
    description:
      "Current effective package — not a scheduled or superseded version.",
  },
];

export function ScopeNavigatorSection() {
  return (
    <section className="border-b border-slate-200 bg-slate-50 py-16">
      <Container>
        <SectionHeading eyebrow="Section 3" title="Applicability and scope navigator.">
          Which DPA package should I review? — not which DPA legally applies to
          me. Account-specific applicability requires authenticated or
          legal-review route.
        </SectionHeading>

        <div className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {STEPS.map((step, i) => (
            <Reveal key={step.title} delay={Math.min(i * 0.05, 0.3)}>
              <div className="flex h-full flex-col rounded-xl border border-slate-200 bg-white p-3.5 shadow-[0_1px_4px_rgba(0,0,0,0.04)]">
                <span className="flex items-center gap-2">
                  <span className="font-mono text-[9px] leading-3 text-slate-400">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span aria-hidden className="h-px flex-1 bg-slate-200" />
                </span>
                <h3 className="pt-1.5 text-xs font-semibold leading-5 text-ink">
                  {step.title}
                </h3>
                <p className="pt-1.5 text-xs leading-4 text-slate-500">
                  {step.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-5 flex flex-col gap-2.5 lg:flex-row lg:items-stretch">
          <Reveal delay={0.16} className="lg:max-w-sm">
            <div className="flex h-full items-start gap-2 rounded-[10px] border border-blue-400/20 bg-blue-400/5 px-3.5 py-2.5">
              <StatusBadge status="Request Required" />
              <p className="pl-1 text-xs leading-4 text-slate-700">
                Account-specific applicability, executed copy and amendment
                status require authenticated or controlled request route. No
                public page conclusion is account-specific.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.2} className="lg:max-w-sm">
            <div className="flex h-full items-start gap-2 rounded-[10px] border border-amber-400/20 bg-amber-400/5 px-3.5 py-2.5">
              <WarningIcon className="mt-0.5 size-4 flex-none text-amber-600" />
              <p className="text-xs leading-4 text-amber-800">
                No geolocation auto-selection. Transfer module, contract entity
                and legal applicability are not determined by IP address,
                browser language or billing region.
              </p>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
