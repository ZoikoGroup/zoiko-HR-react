import { Container, Reveal } from "@/components/ui";
import { SectionHeading } from "./shared";

type Tone = "approved" | "neutral" | "blocked";

const TONE_STYLES: Record<Tone, { bar: string; badge: string }> = {
  approved: { bar: "bg-primary", badge: "bg-teal-950 text-green-400" },
  neutral: { bar: "bg-slate-600", badge: "bg-slate-800 text-slate-400" },
  blocked: { bar: "bg-rose-500", badge: "bg-[#3d1220] text-rose-400" },
};

const ROWS: {
  relationship: string;
  label: string;
  note: string;
  tone: Tone;
}[] = [
  {
    relationship: "Legal/Privacy-approved subprocessor",
    label: "Subprocessor",
    note: "Legal entity, approved purpose, scope and location required.",
    tone: "approved",
  },
  {
    relationship: "Legal/Privacy-approved affiliate subprocessor",
    label: "Affiliate Subprocessor",
    note: "Affiliate relationship and classification must be explicitly approved.",
    tone: "approved",
  },
  {
    relationship: "Integration partner only",
    label: "Not subprocessor",
    note: "Integration existence alone does not establish subprocessor relationship.",
    tone: "neutral",
  },
  {
    relationship: "Supplier / infrastructure vendor",
    label: "Not subprocessor",
    note: "Operational vendor not automatically subprocessor without approved classification.",
    tone: "neutral",
  },
  {
    relationship: "Affiliate without approved classification",
    label: "Blocked",
    note: "Unknown affiliation class blocks publication; internal not-established state only.",
    tone: "blocked",
  },
  {
    relationship: "Independent controller",
    label: "Not subprocessor",
    note: "Privacy relationship explanation may be relevant; do not call subprocessor.",
    tone: "neutral",
  },
  {
    relationship: "Provider with unknown relationship",
    label: "Blocked",
    note: "No guessed classification published. Internal not-established state until resolved.",
    tone: "blocked",
  },
  {
    relationship: "Renamed provider — continuity approved",
    label: "Subprocessor (renamed)",
    note: "Former name preserved in history; continuity approved by Legal.",
    tone: "approved",
  },
  {
    relationship: "Acquisition/ownership change",
    label: "Change Event required",
    note: "Legal determines continuity, replacement or new relationship before publication.",
    tone: "neutral",
  },
];

export function ClassificationSection() {
  return (
    <section className="bg-slate-900 py-16">
      <Container>
        <SectionHeading
          eyebrow="06 / Provider Identity & Relationship Classification"
          title="Which relationships qualify — and which are blocked."
          tone="dark"
        >
          Legal entity is primary. Classification requires Legal and Privacy
          approval. Unknown classification blocks public record publication.
        </SectionHeading>

        <div className="mt-10 flex flex-col gap-0.5">
          {ROWS.map((row, i) => {
            const tone = TONE_STYLES[row.tone];
            return (
              <Reveal key={row.relationship} delay={Math.min(i * 0.04, 0.28)}>
                <div
                  className={`flex items-stretch overflow-hidden rounded-md border ${
                    row.tone === "approved"
                      ? "border-cyan-900"
                      : row.tone === "blocked"
                        ? "border-rose-500/30"
                        : "border-slate-800"
                  }`}
                >
                  <span aria-hidden className={`w-1 flex-none ${tone.bar}`} />
                  <div className="grid min-w-0 flex-1 gap-y-2 px-5 py-3.5 lg:grid-cols-[minmax(0,1fr)_220px_minmax(0,1.4fr)] lg:items-center lg:gap-y-0 lg:px-0 lg:py-0">
                    <p className="text-xs leading-5 text-slate-300 lg:border-r lg:border-cyan-900/40 lg:px-5 lg:py-3.5">
                      {row.relationship}
                    </p>
                    <div className="lg:border-r lg:border-cyan-900/40 lg:px-5 lg:py-3.5">
                      <span
                        className={`inline-flex rounded px-2 py-0.5 text-xs font-medium leading-4 ${tone.badge}`}
                      >
                        {row.label}
                      </span>
                    </div>
                    <p className="text-xs leading-4 text-slate-400 lg:px-5 lg:py-3.5">
                      {row.note}
                    </p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
