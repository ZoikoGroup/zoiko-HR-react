import { Container, Reveal, PlaceholderImage } from "@/components/ui";
import { RuledColumn } from "./shared";

const PILLARS = [
  {
    title: "Computed, not assumed",
    body: "Access reflects role, relationship, scope, purpose, sensitivity and state — never a job title alone.",
  },
  {
    title: "Layered actions",
    body: "View, direct edit, propose, correct, request and decide remain visually and functionally distinct.",
  },
  {
    title: "Source-attributed",
    body: "Every card and task names its owning module; Self-Service is never a second system of record.",
  },
  {
    title: "Status-honest",
    body: "Receipt, routing, decision, source effect and downstream processing stay separable.",
  },
  {
    title: "Bounded delegation",
    body: "Acting-mode grants are scoped, time-bound and revocable, with no silent persistence.",
  },
];

export function WhatIsSelfServiceSection() {
  return (
    <section className="bg-white py-16 sm:py-24">
      <Container>
        <div className="mx-auto max-w-[760px] text-center">
          <Reveal>
            <p className="text-xs font-bold uppercase tracking-[0.1em] text-primary">
              What is Self-Service in Zoiko HR?
            </p>
          </Reveal>

          <Reveal delay={0.08}>
            <h2 className="mt-4 text-xl font-bold leading-9 text-sky-950 sm:text-2xl">
              Zoiko HR Self-Service is a role-appropriate access layer for
              approved records, structured requests, documents and assigned
              tasks. What each user can see or do depends on current
              authorization, configuration and the owning product module.
            </h2>
          </Reveal>

          <Reveal delay={0.16}>
            <p className="mt-4 text-sm text-slate-400">
              Exact capability and availability require approved product and
              contractual confirmation.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {PILLARS.map((pillar, i) => (
            <Reveal key={pillar.title} delay={Math.min(0.06 + i * 0.05, 0.3)}>
              <RuledColumn title={pillar.title}>{pillar.body}</RuledColumn>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.24}>
          <PlaceholderImage
            src="/images/self-service/what-is-self-service.webp"
            alt="Colleagues in discussion around a phone at a table"
            label="Self-Service in Zoiko HR"
            className="mt-12 aspect-[16/9] w-full rounded-xl bg-slate-100 sm:aspect-[21/9] lg:aspect-[1280/320]"
          />
        </Reveal>
      </Container>
    </section>
  );
}
