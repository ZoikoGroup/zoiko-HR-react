import { Container, Reveal, PlaceholderImage } from "@/components/ui";

export function WhatAreEmployeeRecordsSection() {
  return (
    <section className="py-24">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <span className="text-sm font-semibold uppercase tracking-wide text-primary">
              What are Employee Records in Zoiko HR?
            </span>
            <p className="mt-4 text-2xl font-bold leading-snug tracking-tight text-ink sm:text-3xl">
              Zoiko HR Employee Records is designed to organize structured
              employee and employment information with clear organization
              context, sources, ownership, permissions, effective dates,
              documents, change history, correction workflows, and
              auditability.
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="mt-4 text-xs text-ink/40">
              Exact capability and availability require approved product
              and contractual confirmation.
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.16} y={30}>
          <PlaceholderImage
            src="/images/employee-records/what-are-employee-records.png"
            alt="Team collaborating with tablets in a bright office"
            label="Structured employment information"
            fit="contain"
            className="mt-10 w-full rounded-2xl shadow-xl shadow-slate-900/10"
          />
        </Reveal>
      </Container>
    </section>
  );
}
