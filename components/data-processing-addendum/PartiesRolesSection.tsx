import { Container, Reveal, PlaceholderImage } from "@/components/ui";
import { SectionHeading, NonControllingBanner } from "./shared";

const LEFT_CARDS = [
  {
    title: "Customer contracting entity",
    value: "Generic approved wording",
    note: "Account-specific entity: authenticated route only.",
  },
  {
    title: "Zoiko role",
    value: "Not assumed — from approved DPA/legal source",
    note: "Processor/subprocessor/controller: source-controlled.",
  },
];

const RIGHT_CARDS = [
  {
    title: "Customer role",
    value: "Not assumed — from approved DPA/legal source",
    note: "Controller, processor or other — never defaulted.",
  },
  {
    title: "Affiliates",
    value: "[From approved DPA clause if applicable]",
    note: "Affiliate scope from source only.",
  },
];

const PRECEDENCE = [
  "Order / Master Agreement",
  "Service Terms / Schedule",
  "Data Processing Addendum",
  "SCCs / Jurisdiction Schedules",
  "Superseding Amendment",
];

function RoleCard({
  title,
  value,
  note,
}: {
  title: string;
  value: string;
  note: string;
}) {
  return (
    <div className="flex h-full flex-col gap-2 rounded-2xl border border-slate-200 bg-white px-4 py-3.5">
      <h3 className="text-xs font-semibold leading-4 text-ink">{title}</h3>
      <p className="font-mono text-[10px] leading-4 text-slate-400">{value}</p>
      <div className="mt-auto border-t border-slate-100 pt-1.5">
        <p className="text-[10px] leading-4 text-slate-500">{note}</p>
      </div>
    </div>
  );
}

export function PartiesRolesSection() {
  return (
    <section className="border-b border-slate-200 bg-slate-50 py-16">
      <Container>
        <SectionHeading eyebrow="Section 5" title="Parties, roles and order of precedence.">
          Party and role fields are source-driven. No controller, processor or
          legal-entity role is assumed. Account-specific values require
          authenticated route.
        </SectionHeading>

        <div className="mt-7">
          <NonControllingBanner />
        </div>

        {/* Cards flank the image at lg, matching the design's three-up row. */}
        <div className="mt-6 grid gap-4 lg:grid-cols-3">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            {LEFT_CARDS.map((card, i) => (
              <Reveal key={card.title} delay={Math.min(i * 0.06, 0.3)}>
                <RoleCard {...card} />
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.12} className="h-full">
            <PlaceholderImage
              src="/images/data-processing-addendum/parties-roles.png"
              alt="A reviewer considering contract roles at a workstation"
              label="Considering contract roles"
              className="aspect-[399/207] w-full rounded-2xl border border-slate-200 bg-white lg:aspect-auto lg:h-full"
            />
          </Reveal>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            {RIGHT_CARDS.map((card, i) => (
              <Reveal key={card.title} delay={Math.min(i * 0.06, 0.3)}>
                <RoleCard {...card} />
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal delay={0.18}>
          <div className="mt-6">
            <p className="text-[10px] font-semibold uppercase tracking-[0.1em] text-slate-400">
              Order of precedence — exact legal source only
            </p>
            <div className="mt-2 flex flex-wrap items-center gap-x-1.5 gap-y-2">
              {PRECEDENCE.map((item, i) => (
                <span key={item} className="flex items-center gap-1.5">
                  <span className="rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-xs leading-4 text-slate-700">
                    {item}
                  </span>
                  {i < PRECEDENCE.length - 1 && (
                    <span aria-hidden className="text-xs text-slate-300">
                      ›
                    </span>
                  )}
                </span>
              ))}
            </div>
            <p className="mt-1.5 text-[10px] leading-4 text-slate-400">
              Precedence hierarchy from exact legal source only. Not inferred
              from product category or regulatory context.
            </p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
