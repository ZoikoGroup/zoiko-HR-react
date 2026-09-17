import { Container, Reveal, PlaceholderImage } from "@/components/ui";
import { SectionTitle } from "./shared";

type Featured = {
  term: string;
  category: string;
  badgeClass: string;
  definition: string;
  related: string[];
};

const LEFT: Featured[] = [
  {
    term: "Headcount",
    category: "Analytics/Metric",
    badgeClass: "bg-orange-50 text-yellow-800",
    definition:
      "The number of people included in a defined workforce population at a specified point or period, based on the organization's counting rules and effective-date semantics.",
    related: ["FTE", "Workforce", "Reporting period", "Denominator"],
  },
  {
    term: "Role-based access control (RBAC)",
    category: "HR Technology",
    badgeClass: "bg-violet-50 text-violet-900",
    definition:
      "An access-management approach that assigns system permissions based on a user's role rather than individually. In HR systems, roles may also be constrained by organizational scope, data sensitivity and purpose.",
    related: ["Permission", "Source of record", "Audit trail", "SSO"],
  },
];

const RIGHT: Featured[] = [
  {
    term: "Onboarding",
    category: "People Operations",
    badgeClass: "bg-green-50 text-green-800",
    definition:
      "The structured process of integrating a new worker into an organization — covering administrative tasks, orientation, access provisioning and role enablement — typically from accepted offer through an initial performance period.",
    related: ["Preboarding", "New hire", "Probation period", "Workflow"],
  },
  {
    term: "Turnover",
    category: "Analytics/Metric",
    badgeClass: "bg-orange-50 text-yellow-800",
    definition:
      "A workforce metric measuring the rate at which workers leave an organization over a defined period. Turnover rate calculations vary by formula, denominator choice, and whether voluntary and involuntary exits are separated.",
    related: ["Attrition", "Retention rate", "Cohort", "Reporting period"],
  },
];

function FeaturedCard({ item }: { item: Featured }) {
  return (
    <article className="flex h-full flex-col gap-3 rounded-2xl border border-slate-200 bg-white p-5">
      <div className="flex items-start justify-between gap-3">
        <h3 className="text-base font-extrabold leading-6 text-ink">{item.term}</h3>
        <span className={`flex-none rounded-full px-2 py-0.5 text-xs font-semibold leading-4 ${item.badgeClass}`}>
          {item.category}
        </span>
      </div>
      <p className="flex-1 text-sm leading-6 text-slate-500">{item.definition}</p>
      <ul className="flex flex-wrap gap-1.5 border-t border-slate-100 pt-3">
        {item.related.map((related) => (
          <li
            key={related}
            className="rounded-full border border-slate-200 bg-slate-50 px-2.5 py-0.5 text-xs font-medium leading-4 text-slate-400"
          >
            {related}
          </li>
        ))}
      </ul>
      {/* No individual term pages exist yet, so this stays non-interactive. */}
      <p className="text-xs font-semibold leading-5 text-primary">Read definition →</p>
    </article>
  );
}

export function FeaturedTermsSection() {
  return (
    <section className="border-b border-slate-200 bg-slate-50 py-16 sm:py-20">
      <Container>
        <div className="flex flex-wrap items-center justify-between gap-2">
          <Reveal>
            <SectionTitle>Featured terms</SectionTitle>
          </Reveal>
          <p className="text-xs leading-5 text-slate-400">Editorially selected · Sep 2026</p>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-[minmax(0,1fr)_minmax(0,389px)_minmax(0,1fr)]">
          <div className="grid gap-4">
            {LEFT.map((item, i) => (
              <Reveal key={item.term} delay={i * 0.06}>
                <FeaturedCard item={item} />
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.1} className="order-last md:col-span-2 xl:order-none xl:col-span-1 xl:h-full">
            <PlaceholderImage
              src="/images/hr-glossary/featured-terms.png"
              alt="Two colleagues high-fiving in an office"
              label="Colleagues celebrating together"
              loading="lazy"
              className="aspect-video w-full rounded-2xl border border-slate-200 xl:aspect-auto xl:h-full"
            />
          </Reveal>

          <div className="grid gap-4">
            {RIGHT.map((item, i) => (
              <Reveal key={item.term} delay={i * 0.06}>
                <FeaturedCard item={item} />
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
