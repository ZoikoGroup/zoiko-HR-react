import { Container, Reveal, PlaceholderImage } from "@/components/ui";
import { SectionHeading } from "./shared";

const CATEGORIES = [
  {
    icon: "🗄️",
    title: "Platform scope",
    body: "Core HR records, org model, lifecycle operations, documents, self-service, performance, reporting, and deployment boundaries.",
  },
  {
    icon: "🔑",
    title: "Roles & governance",
    body: "Permission model, sensitive-field access, delegation, approvals, audit evidence, and role scope.",
  },
  {
    icon: "🔄",
    title: "Workflow & lifecycle",
    body: "Onboarding, changes, leave, documents, approvals, transitions, exceptions, and status visibility.",
  },
  {
    icon: "⚙️",
    title: "Integrations",
    body: "Source authority, direction, mapping, retries, monitoring, reconciliation, revocation, and developer routes.",
  },
  {
    icon: "📊",
    title: "Reporting & insights",
    body: "Metric definitions, freshness, completeness, lineage, filters, permission-sensitive reporting, and exports.",
  },
  {
    icon: "🤖",
    title: "AI governance",
    body: "Feature disclosure, human review, permission context, source visibility, prohibited uses.",
  },
  {
    icon: "🏗️",
    title: "Implementation & support",
    body: "Discovery, migration, configuration, validation, launch, training, support, and service status.",
  },
  {
    icon: "💼",
    title: "Commercial",
    body: "Pricing disclosure, plan and entitlement qualifiers, implementation dependencies, and contract and billing factors.",
  },
  {
    icon: "♿",
    title: "Accessibility & usability",
    body: "Accessibility statement, conformance, keyboard and screen-reader considerations, and documented feedback route.",
  },
];

export function WhatWeCompareSection() {
  return (
    <section className="border-b border-slate-200 bg-white py-16 sm:py-20">
      <Container>
        <SectionHeading title="What we compare.">
          Eleven criterion categories, each with stable definitions applied equally
          to every comparison subject.
        </SectionHeading>

        <div className="mt-8 grid gap-4 xl:grid-cols-[minmax(0,1fr)_291px]">
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {CATEGORIES.map((category, i) => (
              <li key={category.title}>
                <Reveal
                  delay={Math.min(i * 0.04, 0.24)}
                  className="flex h-full flex-col gap-3 rounded-2xl border border-slate-200 bg-white p-4"
                >
                  <h3 className="flex items-center gap-2 text-sm font-semibold leading-5 text-ink">
                    <span aria-hidden className="text-lg leading-6">
                      {category.icon}
                    </span>
                    {category.title}
                  </h3>
                  <p className="text-xs leading-5 text-slate-400 sm:text-sm">{category.body}</p>
                </Reveal>
              </li>
            ))}
          </ul>

          <Reveal delay={0.12} className="xl:h-full">
            <PlaceholderImage
              src="/images/compare-zoikohr/what-we-compare.png"
              alt="Two colleagues smiling while reviewing work on a laptop"
              label="Colleagues reviewing criteria"
              loading="lazy"
              className="aspect-video w-full rounded-2xl border border-slate-200 xl:aspect-auto xl:h-full"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
