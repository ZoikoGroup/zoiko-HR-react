import Link from "next/link";
import { Container, Reveal, PlaceholderImage } from "@/components/ui";
import { SectionHeading } from "./shared";

const FIELDS = [
  {
    field: "Legal Entity",
    meaning:
      "The exact approved legal party name as established in the approved registry source. This is the primary identity field.",
  },
  {
    field: "Display / Trade Name",
    meaning:
      "Optional secondary label approved for publication alongside legal entity. Searchable but never replaces legal entity.",
  },
  {
    field: "Relationship Classification",
    meaning:
      "Legal/Privacy-approved relationship label: Subprocessor, Affiliate Subprocessor or other class explicitly defined for Zoiko HR.",
  },
  {
    field: "Processing Purpose",
    meaning:
      "Concise approved public phrase describing why the provider is used in the disclosed scope. Source-linked and versioned.",
  },
  {
    field: "Zoiko HR Service Scope",
    meaning:
      "Specific product/service/feature/region/entity/plan qualifier from approved source. Preferred narrower over generic.",
  },
  {
    field: "Processing Location",
    link: { label: "↗ DPA for transfer", href: "/data-processing-addendum" },
    meaning:
      "Approved processing geography — country, region or location exactly as stated in approved registry. Multiple values preserved.",
  },
  {
    field: "Transfer Context",
    meaning:
      "Reference to the DPA or approved transfer authority for mechanism information. Location records and transfer mechanism records are separate objects.",
  },
  {
    field: "Current / Effective State",
    meaning:
      "Source-controlled state (Current, Upcoming, Updated, Removed) with date only when source-approved.",
  },
  {
    field: "Last Reviewed",
    meaning:
      "The registry or source review date from the governed release/snapshot metadata.",
  },
];

export function FieldGuideSection() {
  return (
    <section className="bg-gray-50 py-16">
      <Container>
        <SectionHeading
          eyebrow="04 / Registry Field Guide & Interpretation Rules"
          title="What each field means — and what it does not."
        >
          These definitions govern how every field in the registry is
          interpreted. Unsupported fields are omitted or explicitly noted as not
          established.
        </SectionHeading>

        <Reveal delay={0.08}>
          {/* Figma splits the card 180 / 517 / 518 — the definition column and
              the image column are the same width, so they stay 1fr : 1fr and
              the fixed field column keeps its 180px. */}
          <div className="mt-10 overflow-hidden rounded-xl border border-slate-200 bg-white lg:flex lg:items-stretch">
            <div className="lg:flex lg:min-w-0 lg:flex-[697] lg:flex-col">
              <div className="hidden border-b border-slate-200 sm:grid sm:grid-cols-[minmax(120px,180px)_minmax(0,1fr)]">
                <p className="px-5 py-2.5 text-[11px] font-medium uppercase tracking-wide text-slate-600">
                  Field
                </p>
                <p className="px-5 py-2.5 text-[11px] font-medium uppercase tracking-wide text-slate-600">
                  What it is
                </p>
              </div>

              {FIELDS.map((row) => (
                <div
                  key={row.field}
                  className="border-b border-slate-100 last:border-b-0 sm:grid sm:grid-cols-[minmax(120px,180px)_minmax(0,1fr)] lg:flex-1"
                >
                  <div className="px-5 pt-4 sm:border-r sm:border-slate-100 sm:py-4">
                    <p className="text-xs font-semibold leading-5 text-slate-900">
                      {row.field}
                    </p>
                    {row.link && (
                      <Link
                        href={row.link.href}
                        className="mt-1 inline-block text-[10px] font-medium leading-4 text-primary hover:underline"
                      >
                        {row.link.label}
                      </Link>
                    )}
                  </div>
                  <p className="px-5 pb-4 pt-1.5 text-xs leading-5 text-slate-700 sm:py-4">
                    {row.meaning}
                  </p>
                </div>
              ))}
            </div>

            <div className="flex flex-col border-t border-slate-200 lg:min-w-0 lg:flex-[518] lg:border-l lg:border-t-0">
              <p className="border-b border-slate-200 px-5 py-2.5 text-[11px] font-medium uppercase tracking-wide text-slate-600">
                What it is NOT
              </p>
              <PlaceholderImage
                src="/images/subprocessors/field-guide.png"
                alt="A specialist presenting an analytics board in an office"
                label="Field interpretation guidance"
                className="h-64 w-full flex-1 bg-stone-50 lg:h-auto"
              />
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
