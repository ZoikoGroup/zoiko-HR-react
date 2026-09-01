import { Container, Reveal, PlaceholderImage } from "@/components/ui";

const SCOPE_FIELDS = [
  {
    label: "Component",
    description:
      "Uses the canonical Service Component Registry label and ID only.",
  },
  {
    label: "Product / module",
    description:
      "Approved product taxonomy only — no inferred API or integration labels.",
  },
  {
    label: "Region",
    description:
      "Public region labels only where approved; never inferred data residency.",
  },
  {
    label: "Deployment",
    description:
      "Public deployment labels only; internal environment names stay private.",
  },
  {
    label: "Customer-specific scope",
    description: "Never exposes customer names, tenant IDs, or contract tiers.",
  },
  {
    label: "Unknown scope",
    description:
      "Stated as not established for public display — never generalized to \"all customers.\"",
  },
];

export function StatusRecordScopeSection() {
  return (
    <section className="bg-slate-100 pb-16 sm:pb-20">
      <Container>
        {/* Figma: left block 725w, image 483w, 32 gap — and the image spans the
            heading-to-last-card height, so both columns start and end level. */}
        <div className="grid gap-8 lg:grid-cols-[3fr_2fr]">
          <div>
            <Reveal>
              <h2 className="text-xl font-extrabold tracking-tight text-ink sm:text-2xl">
                What each status record covers.
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                No status record generalizes beyond what its source establishes
                — a single affected component is never read as a platform-wide
                statement.
              </p>
            </Reveal>

            <div className="mt-6 grid gap-x-4 gap-y-3 sm:grid-cols-2">
              {SCOPE_FIELDS.map((field, i) => (
                <Reveal key={field.label} delay={Math.min(i * 0.05, 0.3)}>
                  <div className="h-full rounded-[10px] border border-slate-200 bg-white p-5">
                    <p className="text-sm font-bold text-ink">{field.label}</p>
                    <p className="mt-1.5 text-xs leading-5 text-slate-500">
                      {field.description}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <Reveal delay={0.12} className="h-full">
            <PlaceholderImage
              src="/images/service-status/record-scope.png"
              alt="An employee checking the status page on a phone at home"
              label="Checking the status page on a phone"
              className="aspect-[483/447] w-full rounded-xl border border-slate-200 bg-white lg:aspect-auto lg:h-full"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
