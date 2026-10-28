import { Container, Reveal, PlaceholderImage } from "@/components/ui";
import { SectionHeading, WarningIcon } from "./shared";

const AUTHORITIES = [
  {
    icon: "📋",
    title: "Data Processing Addendum",
    kicker: "Contract authority",
    kickerClass: "text-primary",
    barClass: "bg-primary",
    bulletClass: "text-primary",
    items: [
      "Contractual notice periods",
      "Objection rights & conditions",
      "Transfer mechanism (SCC/IDTA/BCR)",
      "Subprocessor authorization clauses",
      "Contractual remedies",
    ],
  },
  {
    icon: "🛡️",
    title: "Security & Privacy",
    kicker: "Security assurance authority",
    kickerClass: "text-emerald-600",
    barClass: "bg-emerald-500",
    bulletClass: "text-emerald-500",
    items: [
      "Zoiko HR security architecture",
      "Approved security evidence links",
      "Privacy controls and access architecture",
    ],
  },
];

export function AuthorityMapSection() {
  return (
    <section className="bg-gray-50 py-16">
      <Container>
        <SectionHeading
          eyebrow="12 / Security, Privacy, DPA & Evidence Boundaries"
          title="Authority map — what each source owns."
        >
          A provider appearing in the registry does not inherit Zoiko HR
          security claims or certifications. Each authority is scoped.
        </SectionHeading>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <div className="flex flex-col gap-6">
            {AUTHORITIES.map((authority, i) => (
              <Reveal key={authority.title} delay={0.06 + i * 0.06}>
                <div className="overflow-hidden rounded-xl border border-slate-200 bg-white">
                  {/* Figma runs the accent line down the left edge of the
                      header block only, stopping at the divider. */}
                  <div className="relative flex items-start gap-3 border-b border-slate-200 py-4 pl-7 pr-5">
                    <span
                      aria-hidden
                      className={`absolute inset-y-0 left-0 w-1 ${authority.barClass}`}
                    />
                    <span aria-hidden className="text-lg leading-none">
                      {authority.icon}
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-slate-900">
                        {authority.title}
                      </p>
                      <p
                        className={`mt-0.5 text-[11px] font-medium uppercase tracking-wide ${authority.kickerClass}`}
                      >
                        {authority.kicker}
                      </p>
                    </div>
                  </div>
                  <ul className="px-5 py-4">
                    {authority.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2.5 py-1.5 text-xs leading-5 text-slate-700"
                      >
                        <span
                          aria-hidden
                          className={`text-[9px] leading-5 ${authority.bulletClass}`}
                        >
                          ▶
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.14}>
            <PlaceholderImage
              src="/images/subprocessors/authority-map.png"
              alt="An overhead view of a shared desk during a working session"
              label="Each authority is scoped"
              className="h-full min-h-64 w-full rounded-xl border border-slate-200 bg-white"
            />
          </Reveal>
        </div>

        <Reveal delay={0.2}>
          <div className="mt-6 flex items-start gap-3 rounded-xl border border-amber-400/40 bg-orange-50 px-6 py-5">
            <WarningIcon className="mt-0.5 size-4 flex-none text-amber-600" />
            <div>
              <p className="text-xs font-semibold text-yellow-900">
                Provider certification ≠ Zoiko HR assurance
              </p>
              <p className="mt-1.5 text-xs leading-5 text-yellow-800">
                A provider&apos;s ISO certification, SOC 2 report or other
                security/compliance posture does not automatically become Zoiko
                HR certification or assurance. Evidence links in provider
                records route to scoped Security/Trust evidence with their own
                current-as-of context. No assurance badge wall.
              </p>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
