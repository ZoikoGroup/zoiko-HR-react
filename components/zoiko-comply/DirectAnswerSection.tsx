import { Container, Reveal, PlaceholderImage } from "@/components/ui";

const PILLARS = [
  {
    initial: "S",
    label: "Scope",
    colorClass: "text-primary",
    body: "Every policy, control and evidence relationship carries an exact scope, version and period — no universal applicability is implied.",
  },
  {
    initial: "E",
    label: "Evidence",
    colorClass: "text-teal-600",
    body: "Evidence presence is not a compliance conclusion. Acceptance is bounded to the stated requirement, version, scope and period.",
  },
  {
    initial: "A",
    label: "Automation",
    colorClass: "text-yellow-600",
    body: "Automatic or continuous evidence collection is described only when a current Automation Capability record defines source, cadence and limits.",
  },
  {
    initial: "O",
    label: "Optionality",
    colorClass: "text-violet-600",
    body: "Zoiko Comply is an optional ecosystem relationship. Using it never requires adopting Zoiko One or the wider suite.",
  },
];

export function DirectAnswerSection() {
  return (
    <section className="border-b border-gray-100 bg-white py-16 sm:py-20">
      <Container>
        <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,900px)_minmax(0,352px)]">
          <div>
            <Reveal>
              <p className="text-xs font-bold uppercase tracking-[0.1em] text-primary">
                Direct answer
              </p>
              <h2 className="mt-3 text-xl font-bold text-sky-950">
                What does Zoiko Comply do with Zoiko HR?
              </h2>
              <p className="mt-3 leading-7 text-slate-600">
                Zoiko Comply is the ecosystem relationship for approved policies,
                controls, evidence and compliance workflows, with scope, source
                authority, versions, permissions and review meaning preserved by
                current configuration. Workflow status or evidence presence is
                never presented as a guarantee of legal or regulatory compliance,
                and no legal or regulatory interpretation should be inferred from
                this page.
              </p>
            </Reveal>

            <Reveal delay={0.08}>
              {/*
                Each cell draws its own top and left rule and pulls it a pixel
                outward, so the overflow-hidden frame trims the outer edges and
                only the interior dividers survive — correct at 1, 2 or 4
                columns without per-index branching.
              */}
              <div className="mt-6 grid overflow-hidden rounded-sm border border-slate-200 sm:grid-cols-2 lg:grid-cols-4">
                {PILLARS.map((pillar) => (
                  <div
                    key={pillar.label}
                    className="-ml-px -mt-px border-l border-t border-slate-200 px-5 py-5"
                  >
                    <p
                      className={`text-4xl font-extrabold leading-9 opacity-20 ${pillar.colorClass}`}
                    >
                      {pillar.initial}
                    </p>
                    <p
                      className={`text-xs font-bold uppercase tracking-wide ${pillar.colorClass}`}
                    >
                      {pillar.label}
                    </p>
                    <p className="pt-4 text-xs leading-5 text-slate-500">
                      {pillar.body}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.14} className="h-full">
            <PlaceholderImage
              src="/images/zoiko-comply/direct-answer.webp"
              alt="Colleagues reviewing dashboards together at a shared desk"
              label="Zoiko Comply and Zoiko HR"
              className="aspect-video w-full rounded-lg bg-slate-100 lg:aspect-[352/384] lg:h-auto"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
