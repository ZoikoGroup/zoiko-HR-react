import { Container, Reveal, Button, PlaceholderImage } from "@/components/ui";

const RECORD_FIELDS = [
  "Subject",
  "Criterion",
  "Exact statement",
  "Source",
  "Source date",
  "Owner",
  "Qualifier",
];

export function EvidenceComparisonSection() {
  return (
    <section className="bg-[#0a1220] py-20 text-white">
      <Container>
        <Reveal>
          <span className="text-xs font-semibold uppercase tracking-widest text-indigo-400">
            Evidence &amp; Comparison
          </span>
          <h2 className="mt-3 max-w-[620px] font-heading text-3xl font-bold leading-10">
            Verified proof and source-governed comparison — with strict freshness
            controls.
          </h2>
        </Reveal>

        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          <Reveal delay={0.1} className="h-full">
            <PlaceholderImage
              src="/images/resource-center/evidence-comparison.png"
              alt="Three colleagues reviewing a document on a tablet"
              label="Evidence and comparison"
              className="h-full min-h-64 w-full rounded-xl bg-white"
            />
          </Reveal>

          <Reveal delay={0.16} className="h-full">
            <div className="h-full rounded-xl border-t-2 border-primary bg-[#0e1b2e] p-6">
              <div className="flex items-center gap-3">
                <span aria-hidden className="text-lg leading-6">
                  ⚖️
                </span>
                <span className="rounded-full bg-primary/20 px-2 py-0.5 text-[10px] font-semibold leading-4 text-indigo-300">
                  Source-governed
                </span>
              </div>

              <p className="mt-4 font-heading text-xl font-bold text-white">
                Compare Zoiko HR
              </p>
              <p className="mt-3 text-sm leading-6 text-slate-400">
                Factual, dated and source-governed comparison pages. No invented
                ratings, analyst awards, market share or unsupported competitor
                claims. Each criterion has source, date, owner and qualifier.
              </p>

              <div className="mt-5 rounded-lg border border-white/10 p-4">
                <p className="text-[10px] font-semibold uppercase leading-4 tracking-wider text-indigo-400">
                  Comparison record fields
                </p>
                <div className="mt-2 flex flex-wrap gap-1.5">
                  {RECORD_FIELDS.map((field) => (
                    <span
                      key={field}
                      className="rounded border border-white/10 px-2 py-0.5 font-mono text-[10px] leading-4 text-slate-400"
                    >
                      {field}
                    </span>
                  ))}
                </div>
              </div>

              <Button href="/compare" className="mt-5 px-6 py-2.5">
                Compare Zoiko HR →
              </Button>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
