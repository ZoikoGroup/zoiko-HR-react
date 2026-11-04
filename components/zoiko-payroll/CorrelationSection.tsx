import { Container, Reveal, PlaceholderImage } from "@/components/ui";
import { SectionHeading, RuledCard } from "./shared";

const RULES = [
  {
    eyebrow: "Identifiers",
    eyebrowClass: "text-primary",
    borderClass: "border-t-primary",
    title: "Stable references",
    body: "Stable internal/external worker/employment/entity references; masked synthetic examples only.",
  },
  {
    eyebrow: "Correlation",
    eyebrowClass: "text-teal-600",
    borderClass: "border-t-teal-600",
    title: "Deterministic mapping",
    body: "Approved deterministic mapping. Never auto-merge on name, email, address or similarity score.",
  },
  {
    eyebrow: "Versioning",
    eyebrowClass: "text-yellow-600",
    borderClass: "border-t-yellow-600",
    title: "Mapping set lineage",
    body: "Mapping set ID/version; draft/approved/effective/superseded/rollback where supported.",
  },
  {
    eyebrow: "Duplicate safety",
    eyebrowClass: "text-red-500",
    borderClass: "border-t-red-500",
    title: "Collision handling",
    body: "Idempotency/event key only if product supports; duplicate candidate and collision states remain explicit.",
  },
];

export function CorrelationSection() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <Container>
        <SectionHeading
          title="Deterministic correlation. Never a fuzzy auto-merge."
          className="max-w-[700px]"
        >
          Identity, mapping and duplicate-safety rules apply the same way to
          every payroll-preparation handoff.
        </SectionHeading>

        {/* Two card columns with the photo spanning both rows beside them. */}
        <div className="mt-10 grid items-stretch gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <Reveal delay={0.06}>
            <RuledCard {...RULES[0]}>{RULES[0].body}</RuledCard>
          </Reveal>
          <Reveal delay={0.12}>
            <RuledCard {...RULES[1]}>{RULES[1].body}</RuledCard>
          </Reveal>

          <Reveal
            delay={0.18}
            className="order-last h-full sm:col-span-2 lg:order-none lg:col-span-1 lg:col-start-3 lg:row-span-2 lg:row-start-1"
          >
            <PlaceholderImage
              src="/images/zoiko-payroll/correlation.webp"
              alt="A specialist reconciling records against a calculator"
              label="Deterministic correlation"
              className="aspect-video w-full rounded-xl border border-slate-200 border-t-[2.4px] border-t-violet-600 bg-slate-100 lg:aspect-auto lg:h-full"
            />
          </Reveal>

          <Reveal delay={0.24}>
            <RuledCard {...RULES[2]}>{RULES[2].body}</RuledCard>
          </Reveal>
          <Reveal delay={0.3}>
            <RuledCard {...RULES[3]}>{RULES[3].body}</RuledCard>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
