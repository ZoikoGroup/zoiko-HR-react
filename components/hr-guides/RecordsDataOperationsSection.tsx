import { Container, Reveal } from "@/components/ui";
import { GUIDES, GuideCard } from "./guides";

const TOPICS = [
  "Workforce records structure",
  "Effective dates",
  "Source ownership",
  "Data quality",
  "Document management",
  "Access & history",
];

export function RecordsDataOperationsSection() {
  return (
    <section className="bg-white py-18">
      <Container>
        <Reveal>
          <span className="font-heading text-xs font-bold uppercase tracking-wide text-primary">
            Records &amp; Data Operations
          </span>
          <h2 className="mt-2 font-heading text-3xl font-extrabold leading-10 text-slate-900">
            Workforce records and data quality
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-6 lg:grid-cols-[240px_minmax(0,1fr)]">
          <div className="flex flex-col gap-3">
            {TOPICS.map((topic, i) => (
              <Reveal key={topic} delay={0.06 + i * 0.04}>
                <div
                  className={`rounded-xl border px-5 py-4 text-sm ${
                    i === 0
                      ? "border-primary/30 bg-primary/5 font-bold text-primary"
                      : "border-black/10 bg-white text-slate-700"
                  }`}
                >
                  {topic}
                </div>
              </Reveal>
            ))}
          </div>

          <div className="flex flex-col gap-6">
            {GUIDES.slice(0, 2).map((guide, i) => (
              <Reveal key={guide.title} delay={0.12 + i * 0.05}>
                <GuideCard guide={guide} />
              </Reveal>
            ))}

            <Reveal delay={0.22}>
              <div className="flex flex-wrap items-center justify-between gap-3 rounded-xl border border-black/10 bg-slate-50 px-5 py-4">
                <p className="text-sm text-slate-600">
                  Authoritative source: Zoiko Product Documentation
                </p>
                <span className="text-sm font-semibold text-primary">
                  Open Documentation →
                </span>
              </div>
            </Reveal>
          </div>
        </div>

        <Reveal delay={0.26}>
          <div className="mt-6 rounded-xl border border-emerald-400/30 bg-emerald-50/60 px-5 py-4">
            <p className="text-sm leading-6 text-slate-600">
              <strong className="font-semibold text-emerald-700">
                Privacy &amp; data boundary:
              </strong>{" "}
              Guides describe platform concepts only. They do not contain
              personal employee data, account records, or compliance evidence.
              For data subject requests or DPA queries, contact your Data
              Protection representative.
            </p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
