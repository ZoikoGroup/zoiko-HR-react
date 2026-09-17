import { Container, Reveal, PlaceholderImage } from "@/components/ui";
import { SectionHeading } from "./shared";

type Principle = { n: string; title: string; body: string; why: string };

const TOP: Principle[] = [
  {
    n: "01",
    title: "Factual",
    body: "Describe documented, observable behavior or published commercial and trust evidence.",
    why: "Opinion and inference cannot be evaluated, corrected, or updated. Facts can.",
  },
  {
    n: "02",
    title: "Dated",
    body: "Attach source date and retrieval or review date to every published claim.",
    why: "Evidence age matters. A stale source may no longer represent current product behavior.",
  },
  {
    n: "03",
    title: "Source-governed",
    body: "Canonical product or authoritative source owns claim truth. No internal summary substitutes.",
    why: "When the source changes, the claim changes. Source authority keeps corrections automatic.",
  },
  {
    n: "04",
    title: "Qualified",
    body: "Keep plan, region, configuration, role, and availability conditions adjacent to the claim.",
    why: "A conditional capability is not the same as an unconditional one. Hiding the condition misleads.",
  },
];

/** The design places the image where principle 06 would sit, so 06 is not shown. */
const CORRECTABLE: Principle = {
  n: "05",
  title: "Correctable",
  body: "Provide an auditable correction and dispute route that does not require consent to marketing.",
  why: "No comparison methodology is error-free. Correction capacity is evidence of integrity, not weakness.",
};

const REVERSIBLE: Principle = {
  n: "07",
  title: "Reversible",
  body: "Withdraw or downgrade claims when evidence becomes stale, conflicting, or invalid.",
  why: "Keeping a published claim while its source deteriorates makes the comparison actively misleading.",
};

function PrincipleCard({ principle }: { principle: Principle }) {
  return (
    <div className="flex h-full flex-col gap-3 rounded-2xl border border-slate-200 bg-white p-5">
      <div className="flex items-center gap-3">
        <span className="flex size-8 flex-none items-center justify-center rounded-full bg-slate-950 text-xs font-bold leading-4 text-white">
          {principle.n}
        </span>
        <h3 className="text-base font-extrabold leading-6 text-ink">{principle.title}</h3>
      </div>
      <p className="text-xs leading-5 text-slate-500 sm:text-sm">{principle.body}</p>
      <p className="text-xs italic leading-5 text-slate-400">{principle.why}</p>
    </div>
  );
}

export function MethodologySection() {
  return (
    <section id="how-it-works" className="scroll-mt-24 border-b border-slate-200 bg-slate-50 py-16 sm:py-20">
      <Container>
        <SectionHeading title="How this comparison works." className="max-w-[640px]">
          Seven principles govern every published criterion, status, and source.
          The methodology version and effective date are maintained alongside all
          comparison records.
        </SectionHeading>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {TOP.map((principle, i) => (
            <Reveal key={principle.n} delay={i * 0.05}>
              <PrincipleCard principle={principle} />
            </Reveal>
          ))}
        </div>

        <div className="mt-4 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          <Reveal>
            <PrincipleCard principle={CORRECTABLE} />
          </Reveal>
          <Reveal delay={0.05} className="order-last sm:col-span-2 xl:order-none xl:col-span-1 xl:h-full">
            <PlaceholderImage
              src="/images/compare-zoikohr/principles.png"
              alt="Two colleagues reviewing work on a laptop together"
              label="Colleagues reviewing a comparison"
              loading="lazy"
              className="aspect-[389/180] w-full rounded-2xl border border-slate-200 xl:aspect-auto xl:h-full"
            />
          </Reveal>
          <Reveal delay={0.1}>
            <PrincipleCard principle={REVERSIBLE} />
          </Reveal>
        </div>

        {/* No full methodology page exists yet, so the link text stays static. */}
        <p className="mt-4 text-xs leading-5 text-slate-400">
          Methodology v1.0 · Effective 15 Sep 2026 · <span className="underline">View full methodology</span>
        </p>
      </Container>
    </section>
  );
}
