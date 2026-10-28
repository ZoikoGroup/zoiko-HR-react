"use client";

import Link from "next/link";
import { Container, Reveal, PlaceholderImage } from "@/components/ui";

const PATHWAYS = [
  {
    title: "Mid-market organizations",
    description:
      "The full solution view for organizations managing growing operational complexity.",
    image: "/images/standardize-hr-operations/pathway-mid-market-189df8.png",
    href: "/mid-market",
  },
  {
    title: "Multi-entity enterprises",
    description:
      "Structure several legal entities with shared standards and entity-level ownership.",
    image: "/images/standardize-hr-operations/pathway-multi-entity-15fd9d.png",
    href: "/multi-entity-enterprises",
  },
  {
    title: "Global organizations",
    description:
      "Configure for locations and jurisdictions without losing a single operating view.",
    image: "/images/standardize-hr-operations/pathway-global-orgs-15fd9d.png",
    href: "/global-organizations",
  },
  {
    title: "Connect HR, time & payroll",
    description:
      "How authorized data moves between HR, time tracking and your payroll system.",
    image: "/images/standardize-hr-operations/pathway-connect-payroll-12c944.png",
    href: "/connect-hr",
  },
  {
    title: "Workflows & approvals",
    description:
      "Configure routing, delegation and evidence for standard HR processes.",
    image: "/images/standardize-hr-operations/pathway-workflows-47f887.png",
    href: "/workflows-approvals",
  },
  {
    title: "Reporting & insights",
    description:
      "Permission-scoped reporting that shows source and freshness alongside the numbers.",
    image: "/images/standardize-hr-operations/pathway-reporting-47f887.png",
    href: "/zoiko-insights",
  },
];

export function AdjacentPathwaysSection() {
  return (
    <section className="bg-[#FAFBFD] py-20 lg:py-28">
      <Container>
        <div className="max-w-3xl">
          <Reveal>
            <h2 className="text-3xl font-bold leading-tight tracking-[-0.02em] text-[#0C1234] sm:text-4xl lg:text-[40px]">
              Related pathways for growing organizations.
            </h2>
          </Reveal>

          <Reveal delay={0.08}>
            <p className="mt-4 text-base leading-relaxed text-[#64748B]">
              Standardizing operations usually connects to a few neighboring
              questions. Continue with the one closest to yours.
            </p>
          </Reveal>
        </div>

        {/* 3x2 Grid of Pathway Cards */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PATHWAYS.map((pathway, idx) => (
            <Reveal key={pathway.title} delay={0.1 + idx * 0.05} className="flex">
              <Link
                href={pathway.href}
                className="group flex w-full flex-col overflow-hidden rounded-[16px] border border-[#EEF1F5] bg-white shadow-[0px_8px_24px_-12px_rgba(12,18,52,0.08),0px_1px_2px_0px_rgba(12,18,52,0.04)] transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
              >
                {/* Header Image */}
                <div className="h-[180px] w-full overflow-hidden bg-gradient-to-br from-[#1B2450] to-[#2A4CC8]">
                  <PlaceholderImage
                    src={pathway.image}
                    alt={pathway.title}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>

                {/* Card Content */}
                <div className="flex flex-1 flex-col justify-between p-6">
                  <div>
                    <h3 className="text-lg font-bold text-[#0C1234] transition-colors group-hover:text-[#305CF8]">
                      {pathway.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-[#64748B]">
                      {pathway.description}
                    </p>
                  </div>

                  <div className="mt-6 flex items-center gap-1.5 text-sm font-semibold text-[#305CF8]">
                    <span>Explore</span>
                    <span className="transition-transform duration-200 group-hover:translate-x-1">
                      →
                    </span>
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
