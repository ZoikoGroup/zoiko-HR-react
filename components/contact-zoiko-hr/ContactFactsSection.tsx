import { Container, Reveal, PlaceholderImage } from "@/components/ui";
import { SectionHeading } from "./shared";

/**
 * Only the company name carries a verified source. Every other row states why
 * it is unpublished and names the registry that owns it — the design's rule is
 * that unverified fields are omitted rather than filled with a placeholder.
 */
const FACTS: {
  label: string;
  value: string;
  source?: string;
  status: string;
  verified?: boolean;
}[] = [
  {
    label: "Company name",
    value: "Zoiko HR",
    status: "✓ Verified",
    verified: true,
  },
  {
    label: "General email",
    value: "Not published — use intent router above",
    source: "Contact registry — pending",
    status: "Pending",
  },
  {
    label: "Phone",
    value: "Not published — source not supplied",
    source: "Contact registry — pending",
    status: "Pending",
  },
  {
    label: "Office address",
    value: "Not published — source not supplied",
    source: "Legal/Company registry — pending",
    status: "Pending",
  },
  {
    label: "Business hours",
    value: "Not published — never inferred from geography",
    source: "Operations contact policy — pending",
    status: "Pending",
  },
  {
    label: "LinkedIn",
    value: "Verify official URL before publication",
    source: "Social Profile Registry — pending verification",
    status: "Pending",
  },
  {
    label: "YouTube",
    value: "Verify official URL before publication",
    source: "Social Profile Registry — pending verification",
    status: "Pending",
  },
];

export function ContactFactsSection() {
  return (
    <section className="bg-gray-50 py-14">
      <Container>
        <SectionHeading
          eyebrow="09 / Contact Facts"
          title="Verified company information only."
        >
          Only contact facts with an authoritative source and named content
          owner are shown. Fields without verified public data are omitted
          rather than filled with placeholders.
        </SectionHeading>

        <div className="mt-8 grid items-stretch gap-8 lg:grid-cols-2">
          <Reveal delay={0.06} className="h-full">
            <div className="h-full overflow-hidden rounded-xl border border-slate-200 bg-white">
              <p className="border-b border-slate-200 bg-slate-100 px-6 py-3.5 text-[11px] font-medium uppercase tracking-wide text-slate-600">
                Company · Zoiko HR
              </p>

              <dl>
                {FACTS.map((fact) => (
                  <div
                    key={fact.label}
                    className="border-b border-slate-100 last:border-b-0 sm:flex sm:items-center"
                  >
                    <dt className="px-5 pt-3.5 text-xs font-medium leading-4 text-slate-500 sm:w-32 sm:flex-none sm:self-stretch sm:border-r sm:border-slate-100 sm:py-3.5 lg:w-40">
                      {fact.label}
                    </dt>
                    {/* value and source sit side by side when there is room and
                        wrap onto their own lines when there is not */}
                    <dd className="flex min-w-0 flex-1 flex-col gap-1 px-5 pb-3.5 pt-1 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-2.5 sm:px-4 sm:py-3.5">
                      <span
                        className={`text-xs leading-5 ${
                          fact.verified ? "text-slate-900" : "text-slate-400"
                        }`}
                      >
                        {fact.value}
                      </span>
                      {fact.source && (
                        <span className="text-[10px] font-medium leading-4 tracking-wide text-gray-300">
                          {fact.source}
                        </span>
                      )}
                    </dd>
                    <span
                      className={`px-5 pb-3.5 text-xs font-medium leading-4 sm:flex-none sm:px-4 sm:py-3.5 ${
                        fact.verified ? "text-green-500" : "text-slate-300"
                      }`}
                    >
                      {fact.status}
                    </span>
                  </div>
                ))}
              </dl>
            </div>
          </Reveal>

          <Reveal delay={0.12} className="h-full">
            <PlaceholderImage
              src="/images/contact-zoiko-hr/contact-facts.png"
              alt="A team working through notes at a whiteboard"
              label="Verified company information"
              className="h-full min-h-56 w-full rounded-xl border border-slate-200 bg-white"
            />
          </Reveal>
        </div>

        <Reveal delay={0.18}>
          <p className="mt-4 text-xs leading-4 text-slate-400">
            Source-controlled. Fields without verified public records are
            omitted, not invented. Do not create local SEO content from
            unverified data.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
