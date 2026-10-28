import { Container, Reveal, PlaceholderImage } from "@/components/ui";
import { SectionHeading, CrossIcon } from "./shared";

const RULES = [
  {
    title: "Use approved concise phrase",
    body: "Short Legal/Privacy-approved description of why the provider is engaged. No provider marketing copy.",
  },
  {
    title: "Multiple purposes: separate values",
    body: "Each purpose has its own record or approved combined statement. Material purpose change creates a Change Event.",
  },
  {
    title: "Data categories: approved only",
    body: "Data category context appears only when approved public registry or DPA explicitly requires it. Not inferred from HR product context.",
  },
  {
    title: "Purpose change = Change Event",
    body: "Any material update to approved processing purpose triggers a governed change event and snapshot update.",
  },
  {
    title: "Unavailable: omit or not established",
    body: "If purpose is not established in approved registry, omit the field or show 'Not established in approved public registry.' Never fill from vendor website.",
  },
];

const BLOCKED = [
  "Provider marketing language or product taglines",
  "HR-domain data categories inferred from product type",
  "Scope from vendor website or documentation",
  "ZoikoTime, Payroll or integrations implied without approval",
];

export function ProcessingPurposeSection() {
  return (
    <section className="bg-gray-50 py-16">
      <Container>
        <SectionHeading
          eyebrow="07 / Processing Purpose & Zoiko HR Service Scope"
          title="Source-faithful purpose — exact scope, no universalization."
        >
          Every purpose statement comes from approved Legal/Privacy source.
          Provider scope does not automatically extend to all of Zoiko HR
          without explicit approval.
        </SectionHeading>

        <div className="mt-10 grid items-stretch gap-6 lg:grid-cols-2">
          <Reveal delay={0.06} className="h-full">
            <div className="flex h-full flex-col overflow-hidden rounded-xl border border-slate-200 bg-white">
              <p className="border-b border-slate-200 bg-slate-50 px-5 py-3 text-[11px] font-medium uppercase tracking-wide text-slate-600">
                Processing purpose rules
              </p>
              {RULES.map((rule) => (
                <div
                  key={rule.title}
                  className="flex flex-1 gap-3 border-b border-slate-100 px-5 py-4 last:border-b-0"
                >
                  <span aria-hidden className="mt-0.5 text-[10px] text-primary">
                    ▶
                  </span>
                  <div>
                    <p className="text-xs font-semibold leading-5 text-slate-900">
                      {rule.title}
                    </p>
                    <p className="mt-1 text-xs leading-5 text-slate-600">
                      {rule.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          <div className="flex h-full flex-col gap-6">
            <Reveal delay={0.12} className="flex-1">
              <PlaceholderImage
                src="/images/subprocessors/processing-purpose.png"
                alt="A presenter walking a boardroom through a process diagram"
                label="Approving a processing purpose"
                className="aspect-[593/300] w-full rounded-xl border border-slate-200 bg-white lg:aspect-auto lg:h-full"
              />
            </Reveal>

            <Reveal delay={0.18}>
              <div className="rounded-xl border border-amber-500/30 bg-orange-50 px-5 py-4">
                <p className="text-[11px] font-medium uppercase tracking-wide text-yellow-800">
                  Blocked inputs
                </p>
                <ul className="mt-3 space-y-2.5">
                  {BLOCKED.map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <CrossIcon className="mt-0.5 size-3.5 flex-none text-yellow-700" />
                      <span className="text-xs leading-4 text-yellow-800">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
