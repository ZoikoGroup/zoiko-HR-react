import { Container, Reveal, PlaceholderImage } from "@/components/ui";

const PRINCIPLES = [
  { number: "01", title: "Purpose", description: "Define business need, approved use, and accountable owner." },
  { number: "02", title: "Authority", description: "Identify which system may create, propose, update, approve, or consume each field." },
  { number: "03", title: "Minimum scope", description: "Request only required data, events, permissions, and actions." },
  { number: "04", title: "Reliability", description: "Test, monitor, retry, reconcile, suspend, and recover safely." },
  { number: "05", title: "Evidence", description: "Preserve configuration, mappings, operations, errors, decisions, and changes." },
  { number: "06", title: "Qualification", description: "Publish providers and capabilities only after current validation." },
];

export function WhatAreIntegrationsSection() {
  return (
    <section className="bg-[#FAF8F5] py-24">
      <Container>
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <Reveal>
              <span className="text-sm font-semibold uppercase tracking-wide text-primary">
                What are Zoiko HR Integrations?
              </span>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
                Zoiko HR Integrations
              </h2>
            </Reveal>

            <Reveal delay={0.14} y={30}>
              <PlaceholderImage
                src="/images/integrations/what-are-integrations.png"
                alt="Team planning at a whiteboard covered in sticky notes"
                label="Governed by design"
                fit="contain"
                className="mt-6 w-full rounded-2xl shadow-xl shadow-slate-900/10"
              />
            </Reveal>
          </div>

          <div className="divide-y divide-slate-200">
            {PRINCIPLES.map((principle, i) => (
              <Reveal key={principle.title} delay={0.08 + i * 0.05}>
                <div className="flex items-start gap-4 py-4 first:pt-0">
                  <span className="font-serif text-lg italic text-primary/40">
                    {principle.number}
                  </span>
                  <div>
                    <p className="font-semibold text-ink">{principle.title}</p>
                    <p className="mt-1 text-sm leading-relaxed text-ink/60">
                      {principle.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
