import Link from "next/link";
import { Container, Reveal } from "@/components/ui";
import { SectionHeading, RuledColumn } from "./shared";

const STEPS = [
  {
    title: "Role mapping",
    body: "Map roles, relationships and delegation to effective access.",
  },
  {
    title: "Request catalog",
    body: "Configure approved request types, fields and eligibility.",
  },
  {
    title: "Routing handoff",
    body: "Connect task and approval routing to owning modules.",
  },
  {
    title: "Document config",
    body: "Set acknowledgment meaning and version tracking.",
  },
  {
    title: "Testing",
    body: "Validate role, permission and blocked-state behavior.",
  },
  {
    title: "Support & adoption",
    body: "Enable help routes and monitor early adoption.",
  },
];

export function ImplementationSection() {
  return (
    <section className="bg-white py-16 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="Implementation & admin readiness"
          title="A controlled path from role mapping to adoption."
          className="max-w-[760px]"
        >
          Configuration, testing and support vary by contract, complexity,
          readiness and jurisdiction.
        </SectionHeading>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
          {STEPS.map((step, i) => (
            <Reveal key={step.title} delay={Math.min(0.06 + i * 0.04, 0.3)}>
              <RuledColumn title={step.title}>{step.body}</RuledColumn>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.3}>
          <Link
            href="/Implementation-guide"
            className="mt-10 inline-block text-base font-semibold text-primary hover:underline"
          >
            View the Implementation Guide →
          </Link>
        </Reveal>
      </Container>
    </section>
  );
}
