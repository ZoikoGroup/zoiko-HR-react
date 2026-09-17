import { Container, Reveal, PlaceholderImage } from "@/components/ui";
import { SectionHeading } from "./shared";

const RULES: { kind: "Prohibited" | "Required"; text: string }[] = [
  { kind: "Prohibited", text: "Forced bell-curve distribution or automatic performance quotas" },
  { kind: "Prohibited", text: "AI-generated final ratings without meaningful human review" },
  { kind: "Prohibited", text: "Hidden recalculation that changes an outcome without a visible event" },
  { kind: "Required", text: "Proposal and approval separated for sensitive cycles" },
  { kind: "Required", text: "Original manager submission remains visible throughout" },
];

export function CalibrationSection() {
  return (
    <section className="relative overflow-hidden bg-slate-950 bg-gradient-to-b from-primary/5 to-transparent py-16 sm:py-24">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading
              tone="dark"
              eyebrow="Calibration"
              title="Calibrate with context and traceability — not a hidden rewrite."
            >
              Authorized reviewers compare review outcomes in context using
              configured rules. Original submissions remain visible beside any
              calibration proposal. Every change carries rationale, actor and
              approval state.
            </SectionHeading>

            <ul className="mt-8 flex flex-col gap-3">
              {RULES.map((rule, i) => {
                const required = rule.kind === "Required";
                return (
                  <li key={rule.text}>
                    <Reveal
                      delay={i * 0.05}
                      className={`flex items-start gap-3 rounded-xl border px-4 py-3 ${
                        required
                          ? "border-primary/30 bg-primary/10"
                          : "border-white/10 bg-white/5"
                      }`}
                    >
                      <span
                        className={`mt-0.5 flex-none rounded-full px-2 py-0.5 text-xs font-bold leading-4 ${
                          required ? "bg-primary/30 text-indigo-400" : "bg-white/10 text-white/50"
                        }`}
                      >
                        {rule.kind}
                      </span>
                      <span className="text-xs leading-5 text-slate-400">{rule.text}</span>
                    </Reveal>
                  </li>
                );
              })}
            </ul>
          </div>

          <Reveal delay={0.12}>
            <PlaceholderImage
              src="/images/performance-management/calibration.png"
              alt="Reviewers discussing outcomes around a meeting table"
              label="Reviewers in a calibration discussion"
              loading="lazy"
              className="aspect-[568/555] w-full rounded-2xl border border-white/10 bg-white/10"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
