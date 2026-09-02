import { Container, Reveal } from "@/components/ui";
import { SectionHeading } from "./shared";

const CATEGORIES = [
  "Physical / environmental controls",
  "Access management",
  "Network and system security",
  "Data integrity / availability",
  "Incident response / breach process",
  "Business continuity / resilience",
  "Subprocessor oversight",
];

export function SecurityMeasuresSection() {
  return (
    <section className="border-b border-white/5 bg-[#0A1B2E] py-16 text-white">
      <Container>
        <SectionHeading
          eyebrow="Section 8"
          title="Security measures, TOMs and evidence boundary."
          tone="dark"
        >
          TOM categories from DPA Annex II only. No encryption algorithm,
          certification, hosting, pen-test cadence or MFA/backup claim is
          asserted without approved evidence. Detailed security evidence routes
          to Security &amp; Privacy.
        </SectionHeading>

        <div className="mt-8 grid gap-5 lg:grid-cols-[minmax(0,1fr)_280px]">
          <Reveal delay={0.08} className="min-w-0">
            <div className="overflow-hidden rounded-xl border border-white/10">
              <p className="border-b border-white/10 bg-white/5 px-5 py-3 text-[10px] font-semibold uppercase tracking-wide text-slate-500">
                TOM / Annex II categories — from approved DPA source
              </p>
              {CATEGORIES.map((category, i) => (
                <div
                  key={category}
                  className={`flex flex-col gap-1 border-b border-white/5 px-5 py-3 last:border-b-0 sm:flex-row sm:items-center sm:justify-between sm:gap-4 ${
                    i % 2 === 1 ? "bg-white/[0.02]" : ""
                  }`}
                >
                  <span className="text-sm font-semibold text-white">
                    {category}
                  </span>
                  <span className="font-mono text-[11px] text-slate-500">
                    [From DPA Annex II / TOM ref if applicable]
                  </span>
                </div>
              ))}
            </div>
          </Reveal>

          {/* The design shows this column as a plain empty panel, so nothing
              is written into it here. */}
          <Reveal delay={0.14}>
            <div
              aria-hidden
              className="h-full min-h-32 rounded-xl border border-white/10 bg-white/[0.02]"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
