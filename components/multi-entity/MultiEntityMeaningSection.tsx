import Link from "next/link";
import { Container, Reveal } from "@/components/ui";

const PILLARS = [
  {
    title: "Defined scope",
    body: "Every entity/unit concept has type, owner, source, effective date and status.",
  },
  {
    title: "Controlled inheritance",
    body: "Shared baselines and approved overrides remain inspectable.",
  },
  {
    title: "Scoped authority",
    body: "Access and approvals depend on role and entity scope, not hierarchy alone.",
  },
  {
    title: "Reviewable evidence",
    body: "Changes, exceptions, integrations and reporting carry ownership and audit history.",
  },
];

export function MultiEntityMeaningSection() {
  return (
    <section className="bg-white py-20">
      <Container>
        <Reveal className="mx-auto max-w-[900px] text-center">
          <span className="text-xs font-bold uppercase tracking-wider text-primary">
            What Multi-Entity Enterprises means
          </span>
          <p className="mt-4 font-heading text-xl font-bold leading-9 text-sky-950">
            Zoiko HR for Multi-Entity Enterprises is a solution pathway for
            organizations that need governed HR administration across distinct
            entities and units. The recommended model separates entity
            definitions, relationships, configuration, ownership, access, shared
            services, reporting, integrations and evidence. A product hierarchy
            is administrative; it does not by itself establish legal ownership,
            tax grouping, employer status, financial consolidation or regulatory
            relationships.
          </p>
        </Reveal>

        <div className="mx-auto mt-8 grid max-w-[900px] gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {PILLARS.map((pillar, i) => (
            <Reveal key={pillar.title} delay={0.08 + i * 0.06}>
              <div className="h-full rounded-[10px] bg-slate-100 p-4">
                <p className="text-sm font-bold text-sky-950">{pillar.title}</p>
                <p className="mt-1.5 text-xs leading-5 text-slate-500">
                  {pillar.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <p className="mx-auto mt-8 max-w-[900px] text-center text-sm leading-6 text-slate-500">
            Growing complexity within a single legal entity may be better served
            by{" "}
            <Link
              href="/mid-market"
              className="text-primary hover:text-primary-dark"
            >
              Mid-Market Organizations
            </Link>
            . Jurisdictional coordination alone may be better served by{" "}
            <Link
              href="/global-organizations"
              className="text-primary hover:text-primary-dark"
            >
              Global Organizations
            </Link>
            .
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
