import { Container, Reveal } from "@/components/ui";

const FRESHNESS_FIELDS = [
  { label: "Source status", value: "Not established" },
  { label: "Last source update", value: "Not available" },
  { label: "Last page refresh", value: "—" },
  { label: "Freshness threshold", value: "Pending registry" },
];

export function SourceFreshnessSection() {
  return (
    <section className="border-b border-slate-200 bg-slate-100 py-10">
      <Container>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {FRESHNESS_FIELDS.map((field, i) => (
            <Reveal key={field.label} delay={Math.min(i * 0.06, 0.3)}>
              <div className="h-full rounded-[10px] border border-slate-200 bg-white p-5">
                <p className="text-xs font-bold uppercase tracking-wide text-slate-400">
                  {field.label}
                </p>
                <p className="mt-2 text-sm font-bold text-ink">{field.value}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <p className="mt-4 max-w-4xl text-xs leading-5 text-slate-500">
            Zoiko HR has not yet connected an approved status source for this
            public preview. Once connected, this area shows current, stale, or
            unavailable state with an explicit timestamp — a missing or stale
            source is never presented as a healthy default.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
