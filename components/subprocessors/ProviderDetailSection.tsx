import Link from "next/link";
import { Container, Reveal, PlaceholderImage } from "@/components/ui";
import { SectionHeading, StatePill } from "./shared";

const ROWS: { label: string; value: string; highlight?: boolean }[] = [
  {
    label: "Relationship Classification",
    value: "[Classification — Legal/Privacy approved · Source required]",
  },
  {
    label: "Processing Purpose",
    value: "[Approved processing purpose — source required. No marketing language.]",
  },
  {
    label: "Zoiko HR Service Scope",
    value:
      "[Specific product/service scope — source required. Narrow qualifier preferred.]",
  },
  {
    label: "Processing Location(s)",
    value:
      "[Approved geography — source required. Not headquarters. Not global unless sourced.]",
  },
  {
    label: "Transfer Context",
    value:
      "Transfer mechanism authority → Data Processing Addendum. Location does not prove mechanism.",
    highlight: true,
  },
  { label: "Effective / Added", value: "[Approved source date — not invented]" },
  {
    label: "Source / Approval",
    value: "Legal/Privacy approved registry · Reviewed: Pending",
  },
  {
    label: "Review Due",
    value: "Pending — governed by registry release policy",
  },
];

export function ProviderDetailSection() {
  return (
    <section className="bg-white py-16">
      <Container>
        <SectionHeading
          eyebrow="05 / Provider Detail Pattern"
          title="Deep-linkable approved record structure."
        >
          Each provider has a stable public-safe record ID that enables deep
          linking. The detail view shows all governed fields, change history and
          authority links within the canonical page context.
        </SectionHeading>

        <Reveal delay={0.08}>
          <div className="mt-10 overflow-hidden rounded-xl border border-slate-200">
            <div className="flex flex-wrap items-start justify-between gap-4 border-b border-slate-200 bg-gray-50 px-7 py-5">
              <div>
                <div className="flex items-center gap-2.5">
                  <span className="font-mono text-xs leading-4 text-slate-400">
                    SP-001
                  </span>
                  <StatePill state="Under Review" />
                </div>
                <h3 className="mt-1 text-xl font-extrabold leading-8 text-slate-900">
                  [Legal Entity A — Source Required]
                </h3>
                <p className="text-xs leading-5 text-slate-400">
                  Display name: [Trade Name — source required]
                </p>
              </div>

              <div className="flex items-center gap-2.5">
                <span className="rounded-md border border-primary/30 px-3 py-1.5 text-xs font-semibold leading-4 text-primary">
                  Copy link
                </span>
                <Link
                  href="#current-registry"
                  className="text-xs font-semibold leading-4 text-slate-600 hover:text-primary"
                >
                  ← Back to registry
                </Link>
              </div>
            </div>

            <div className="lg:flex">
              <dl className="lg:min-w-0 lg:flex-1">
                {ROWS.map((row) => (
                  <div
                    key={row.label}
                    className={`border-b border-slate-100 last:border-b-0 sm:grid sm:grid-cols-[224px_1fr] ${
                      row.highlight ? "bg-blue-50" : ""
                    }`}
                  >
                    <dt className="px-6 py-3.5 text-xs font-medium leading-4 text-slate-500 sm:border-r sm:border-slate-100">
                      {row.label}
                    </dt>
                    <dd
                      className={`px-6 pb-3.5 text-xs leading-5 sm:px-5 sm:py-3.5 ${
                        row.highlight ? "text-cyan-900" : "text-slate-600"
                      }`}
                    >
                      {row.value}
                    </dd>
                  </div>
                ))}
              </dl>

              <PlaceholderImage
                src="/images/subprocessors/provider-detail.png"
                alt="A team reviewing a product roadmap on a meeting-room display"
                label="Reviewing an approved record"
                className="h-56 w-full border-t border-slate-200 lg:h-auto lg:w-72 lg:flex-none lg:border-l lg:border-t-0"
              />
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
