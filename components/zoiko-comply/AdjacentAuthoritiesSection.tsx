import { Container, Reveal, PlaceholderImage } from "@/components/ui";
import { SectionHeading } from "./shared";

const AUTHORITIES = [
  {
    initials: "DP",
    title: "Documents & Policies",
    references:
      "Policy/document versions, distribution/acknowledgment, retention/hold references.",
    doesNotOwn: "Policy document lifecycle and acknowledgment legal meaning.",
  },
  {
    initials: "WA",
    title: "Workflows & Approvals",
    references: "Routing, conditions, approvals, tasks and audit instance references.",
    doesNotOwn: "Generic workflow engine and approval semantics.",
  },
  {
    initials: "IS",
    title: "Integration Security",
    references:
      "Authorization, minimization, service identity, secure diagnostics/evidence.",
    doesNotOwn: "Broad security assurance or legal compliance claims.",
  },
  {
    initials: "CI",
    title: "Controlled Interoperability",
    references: "Optional ecosystem and coexistence principle.",
    doesNotOwn: "Mandatory suite adoption.",
  },
];

export function AdjacentAuthoritiesSection() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <Container>
        <SectionHeading
          title="This page coordinates compliance operations. It doesn’t own its neighbors’ truth."
          className="max-w-[640px]"
        >
          Every adjacent authority keeps its own domain — this page only ever
          references them.
        </SectionHeading>

        {/* Two card columns plus a full-height photo at lg. */}
        <div className="mt-8 grid items-stretch gap-5 md:grid-cols-2 lg:grid-cols-3">
          {AUTHORITIES.map((authority, i) => (
            <Reveal key={authority.title} delay={0.06 + i * 0.05}>
              <div className="h-full rounded-lg border border-slate-200 bg-slate-50 p-5">
                <div className="flex items-center gap-3">
                  <span className="flex size-7 flex-none items-center justify-center rounded bg-sky-950 text-[10px] font-bold text-white">
                    {authority.initials}
                  </span>
                  <p className="text-sm font-bold text-sky-950">
                    {authority.title}
                  </p>
                </div>
                <p className="mt-3.5 text-xs leading-5 text-slate-500">
                  <span className="font-semibold text-teal-600">References</span>{" "}
                  — {authority.references}
                </p>
                <p className="mt-2 text-xs leading-5 text-slate-500">
                  <span className="font-semibold text-yellow-600">
                    Does not own
                  </span>{" "}
                  — {authority.doesNotOwn}
                </p>
              </div>
            </Reveal>
          ))}

          <Reveal delay={0.26} className="h-full md:col-span-2 lg:col-span-1 lg:row-span-2 lg:row-start-1 lg:col-start-3">
            <PlaceholderImage
              src="/images/zoiko-comply/adjacent-authorities.webp"
              alt="A presenter reviewing reporting with colleagues in a boardroom"
              label="Adjacent authorities"
              className="aspect-video w-full rounded-lg border border-slate-200 bg-slate-100 lg:aspect-auto lg:h-full"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
