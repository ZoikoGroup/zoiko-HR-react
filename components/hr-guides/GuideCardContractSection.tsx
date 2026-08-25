import { Container, Reveal, PlaceholderImage } from "@/components/ui";

const CARD_PARTS = [
  ["01", "Title", "Clear task-oriented name"],
  ["02", "Concise answer", "2–3 sentence summary of the concept"],
  ["03", "Task + Audience tags", "Filters for browsing and relevance"],
  ["04", "Product area", "Which module or area this covers"],
  ["05", "Status badge", "Current, Review Due, Superseded, or Withdrawn"],
  ["06", "Reviewed date", "Last editorial review cycle date"],
  ["07", "Authority next step", "Where to go for docs, support, or trust"],
];

const STATES = [
  {
    label: "Current",
    tone: "border-emerald-400/30 bg-emerald-400/10 text-emerald-400",
    body: "Reviewed within cycle. Content reflects platform.",
  },
  {
    label: "Review Due",
    tone: "border-amber-500/30 bg-amber-500/10 text-amber-500",
    body: "Approaching or past review date. Verify content.",
  },
  {
    label: "Superseded",
    tone: "border-primary/30 bg-primary/10 text-indigo-400",
    body: "Replaced by a newer guide. Link provided.",
  },
  {
    label: "Withdrawn",
    tone: "border-red-400/30 bg-red-400/10 text-red-400",
    body: "No longer applicable. Do not use.",
  },
];

export function GuideCardContractSection() {
  return (
    <section className="bg-[#0a1220] py-18 text-white">
      <Container>
        <Reveal>
          <span className="font-heading text-xs font-bold uppercase tracking-wide text-indigo-400">
            Guide Card &amp; Freshness Contract
          </span>
          <h2 className="mt-2 font-heading text-3xl font-extrabold leading-10">
            What every guide card shows
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-10 lg:grid-cols-2">
          <Reveal delay={0.08} className="h-full">
            <PlaceholderImage
              src="/images/hr-guides/guide-card.png"
              alt="Colleagues walking through an office"
              label="Guide card contract"
              className="h-full min-h-56 w-full rounded-xl bg-white"
            />
          </Reveal>

          <div className="flex flex-col gap-4">
            {CARD_PARTS.map(([number, title, body], i) => (
              <Reveal key={number} delay={0.1 + i * 0.04}>
                <div className="flex items-center gap-3">
                  <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-white">
                    {number}
                  </span>
                  <p className="text-sm">
                    <span className="font-semibold text-white">{title}</span>{" "}
                    <span className="text-slate-400">{body}</span>
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {STATES.map((state, i) => (
            <Reveal key={state.label} delay={0.1 + i * 0.05} className="h-full">
              <div className="h-full rounded-xl border border-white/10 bg-[#0e1b2e] p-4">
                <span
                  className={`inline-block rounded-md border px-2 py-0.5 text-xs font-semibold leading-4 ${state.tone}`}
                >
                  {state.label}
                </span>
                <p className="mt-3 text-xs leading-5 text-slate-400">
                  {state.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
