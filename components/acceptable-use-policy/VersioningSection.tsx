import { Container, Reveal, PlaceholderImage } from "@/components/ui";
import { SectionHeading } from "./shared";

const VERSION_FIELDS = [
  { label: "Version", value: "v1.0" },
  { label: "Status", value: "Current" },
  { label: "Effective", value: "Sep 15, 2026" },
  { label: "Published", value: "Sep 15, 2026" },
  { label: "Last reviewed", value: "Sep 15, 2026" },
  { label: "Applies to", value: "Website, product, APIs, AI assistance, support" },
];

export function VersioningSection() {
  return (
    <section id="versioning" className="scroll-mt-24 bg-slate-50 py-14 sm:py-16">
      <Container>
        <SectionHeading title="Effective date, changes, notice & archive model.">
          The current version is always primary on the canonical URL. Superseded
          versions display an archive banner and a link to the current policy.
        </SectionHeading>

        <div className="mt-9 grid gap-6 lg:grid-cols-2">
          <Reveal>
            <dl className="h-full rounded-xl border border-slate-200 bg-white px-6 py-4">
              {VERSION_FIELDS.map((field, i) => (
                <div
                  key={field.label}
                  className={`flex flex-col gap-1 py-3.5 sm:flex-row sm:gap-6 ${
                    i === VERSION_FIELDS.length - 1 ? "" : "border-b border-slate-100"
                  }`}
                >
                  <dt className="text-xs text-slate-400 sm:w-48 sm:flex-none">
                    {field.label}
                  </dt>
                  <dd className="text-sm font-semibold text-ink">{field.value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>

          <Reveal delay={0.12} className="lg:h-full">
            <PlaceholderImage
              src="/images/acceptable-use-policy/versioning.png"
              alt="Colleagues reviewing a policy version on a tablet together"
              label="Reviewing the current version"
              loading="lazy"
              className="aspect-[16/9] w-full rounded-xl lg:aspect-auto lg:h-full"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
