import { Container, Reveal } from "@/components/ui";

const STATE_VOCABULARY = [
  "Published / Current",
  "Corrected",
  "Superseded",
  "Rolling",
];

const DATE_SEMANTICS = ["Published", "Effective", "Rollout start"];

export function VocabularyStripSection() {
  return (
    <section className="border-b border-white/5 bg-[#0A1B2E] py-8 text-white">
      <Container>
        <Reveal>
          <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:gap-12">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.1em] text-slate-400">
                State vocabulary
              </p>
              <div className="mt-2 flex flex-wrap gap-2">
                {STATE_VOCABULARY.map((state) => (
                  <span
                    key={state}
                    className="rounded-md border border-white/10 bg-white/5 px-2.5 py-1 text-xs font-medium text-slate-400"
                  >
                    {state}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.1em] text-slate-400">
                Date semantics
              </p>
              <div className="mt-2 flex flex-wrap gap-2">
                {DATE_SEMANTICS.map((date) => (
                  <span
                    key={date}
                    className="rounded-md border border-white/10 bg-white/5 px-2.5 py-1 font-mono text-xs text-slate-500"
                  >
                    {date}
                  </span>
                ))}
              </div>
            </div>

            <p className="text-xs text-slate-500 lg:ml-auto lg:text-right">
              Source-backed changes only. No roadmap, no live status.
            </p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
