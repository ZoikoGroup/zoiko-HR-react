import { Container, Reveal, PlaceholderImage } from "@/components/ui";
import { CheckList, SectionHeading } from "./shared";

type Family = { icon: string; title: string; body: string; items: string[]; note: string };

const LEFT: Family[] = [
  {
    icon: "👥",
    title: "Workforce overview",
    body: "Understand the workforce records in scope — with effective dates, organizational context and permission boundaries preserved.",
    items: [
      "Headcount and composition by approved dimension",
      "Entity/location/department breakdown",
      "Worker/employment status distribution",
    ],
    note: "Drill to authorized aggregate rows; named detail requires role/purpose permission.",
  },
  {
    icon: "📅",
    title: "Leave & attendance context",
    body: "Review authorized leave and attendance patterns from approved records.",
    items: [
      "Aggregate balance and request volume",
      "Absence calendar context where approved",
      "Status distribution by approved category",
    ],
    note: "No employee ranking by absence. Sensitive leave types grouped or masked. Not a productivity surveillance tool.",
  },
];

const RIGHT: Family[] = [
  {
    icon: "⚙️",
    title: "Process health",
    body: "Know which configured HR processes are complete, blocked, aging or waiting for attention — without turning operational status into a hidden performance score.",
    items: [
      "Onboarding, lifecycle changes, approvals, documents",
      "Aging buckets with due-state rule evidence",
      "Exception owner and resolution path",
    ],
    note: "Overdue only appears when a due-state rule exists. No employee leaderboard default.",
  },
  {
    icon: "🔍",
    title: "Data quality & exceptions",
    body: "Stale, partial and unknown stay visible — zero is a value; unknown is not zero.",
    items: [
      "Verified, partial, stale, unknown and suppressed states",
      "Source health and exception owner links",
      "Definition version and comparability warnings",
    ],
    note: "Zero denominator → 'Not calculable' not 0%. Unknown category shown separately from Other/None.",
  },
];

function FamilyCard({ family }: { family: Family }) {
  return (
    <div className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6">
      <h3 className="flex items-center gap-3 text-base font-extrabold leading-6 text-ink">
        <span aria-hidden className="text-2xl leading-8">
          {family.icon}
        </span>
        {family.title}
      </h3>
      <p className="mt-4 text-sm leading-6 text-slate-500">{family.body}</p>
      <CheckList className="mt-4" items={family.items} />
      <p className="mt-auto border-t border-slate-100 pt-3 text-xs italic leading-5 text-slate-400">
        {family.note}
      </p>
    </div>
  );
}

export function ReportFamiliesSection() {
  return (
    <section className="border-y border-slate-200 bg-slate-50 py-16 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="Report families"
          title="Purpose-specific reporting modules with governed metrics and boundaries."
          className="max-w-[640px]"
        />

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-[minmax(0,1fr)_minmax(0,387px)_minmax(0,1fr)]">
          <div className="grid gap-5">
            {LEFT.map((family, i) => (
              <Reveal key={family.title} delay={i * 0.06}>
                <FamilyCard family={family} />
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.1} className="order-last md:col-span-2 xl:order-none xl:col-span-1 xl:h-full">
            <PlaceholderImage
              src="/images/zoiko-insights/report-families.png"
              alt="Two colleagues high-fiving while working on a sofa"
              label="Colleagues celebrating a result"
              loading="lazy"
              className="aspect-video w-full rounded-2xl border border-slate-200 xl:aspect-auto xl:h-full"
            />
          </Reveal>

          <div className="grid gap-5">
            {RIGHT.map((family, i) => (
              <Reveal key={family.title} delay={i * 0.06}>
                <FamilyCard family={family} />
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
