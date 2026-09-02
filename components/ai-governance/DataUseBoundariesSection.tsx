import { Container, Reveal, PlaceholderImage } from "@/components/ui";
import { SectionHeading, StatusBadge } from "./shared";

const FIELDS = [
  ["Purpose", "[From approved AIDataUse record]", "Verified"],
  ["Input categories", "[From approved annex only — not inferred]", "Not Established"],
  ["Output categories", "[From approved annex only — not inferred]", "Not Established"],
  ["Customer data involved", "[From approved source — not assumed]", "Not Established"],
  ["Provider role", "[From approved provider record]", "Restricted"],
  ["Retention status", "[From approved record — no absolute claim]", "Not Established"],
  ["Training / fine-tuning", "[From approved record — not invented]", "Not Established"],
  ["Region / contract scope", "[From approved scope — not geo-inferred]", "Restricted"],
];

export function DataUseBoundariesSection() {
  return (
    <section className="border-b border-white/5 bg-[#0A1B2E] py-16 text-white">
      <Container>
        <SectionHeading
          eyebrow="Section 7"
          title="Data use, privacy, provider and retention boundaries."
          tone="dark"
        >
          Disclosure fields come from approved source records only. Absolute
          claims about training, retention, region or provider are not made
          without exact verified scope.
        </SectionHeading>

        <div className="mt-7 grid gap-5 lg:grid-cols-[minmax(0,1fr)_280px]">
          <Reveal className="min-w-0">
            <div className="overflow-hidden rounded-xl border border-white/10">
              <p className="border-b border-white/10 bg-white/5 px-5 py-3 text-[10px] font-semibold uppercase tracking-[0.1em] text-slate-500">
                Data-use disclosure fields — from approved AIDataUse source
              </p>
              {FIELDS.map(([field, value, status], i) => (
                <div
                  key={field}
                  className={`flex flex-col gap-1.5 border-b border-white/5 px-5 py-3 last:border-b-0 sm:flex-row sm:items-center sm:gap-4 ${
                    i % 2 === 1 ? "bg-white/[0.02]" : ""
                  }`}
                >
                  <span className="text-sm font-semibold text-white sm:w-48 sm:flex-none">
                    {field}
                  </span>
                  <span className="min-w-0 flex-1 font-mono text-[11px] text-slate-500">
                    {value}
                  </span>
                  <StatusBadge
                    status={status}
                    // Restricted reads rose in this table, unlike the amber
                    // Restricted chip in the logging legend.
                    variant={status === "Restricted" ? "Prohibited" : undefined}
                    className="self-start sm:self-auto"
                  />
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.14} className="lg:h-full">
            <PlaceholderImage
              src="/images/ai-governance/data-use.png"
              alt="A leader standing in front of a performance dashboard"
              label="Reviewing disclosure scope"
              className="aspect-[280/408] w-full rounded-xl lg:aspect-auto lg:h-full"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
