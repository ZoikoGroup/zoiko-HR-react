import Link from "next/link";
import { Container, Reveal } from "@/components/ui";

const STEPS = [
  { number: "01", label: "Discover", description: "Goals, scope, data, systems, stakeholders, and success criteria." },
  { number: "02", label: "Design", description: "Organization model, roles, permissions, and workflows." },
  { number: "03", label: "Prepare data", description: "Source inventory, mapping, quality, and migration decisions." },
  { number: "04", label: "Configure & connect", description: "Approved configuration, integrations, and controls." },
  { number: "05", label: "Validate", description: "Role, data, and workflow testing plus acceptance evidence." },
  { number: "06", label: "Launch", description: "Controlled scope, communications, training, and support." },
  { number: "07", label: "Adopt & improve", description: "Usage, data quality, support, and approved expansion." },
];

export function PlatformImplementationSection() {
  return (
    <section className="bg-slate-50/60 py-24">
      <Container>
        <div className="max-w-2xl">
          <Reveal>
            <span className="text-sm font-semibold uppercase tracking-wide text-primary">
              Implementation & adoption
            </span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
              A controlled path from discovery to adoption.
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="mt-4 text-ink/60">
              Implementation timing, scope, services, availability, and
              outcomes vary by contract, complexity, readiness,
              configuration, and jurisdiction.
            </p>
          </Reveal>
        </div>

        <div className="relative mt-14">
          <div aria-hidden className="absolute inset-x-0 top-0 h-px bg-slate-200" />
          <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-4 lg:grid-cols-7">
            {STEPS.map((step, i) => (
              <Reveal key={step.label} delay={i * 0.05}>
                <div className="relative pt-6">
                  <span
                    aria-hidden
                    className="absolute left-0 top-0 h-1.5 w-1.5 -translate-y-1/2 rounded-full bg-primary"
                  />
                  <span className="font-serif text-sm italic text-primary/50">
                    {step.number}
                  </span>
                  <p className="mt-1.5 font-semibold text-ink">{step.label}</p>
                  <p className="mt-1.5 text-sm leading-relaxed text-ink/60">
                    {step.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal delay={0.5}>
          <Link
            href="/implementation-guide"
            className="group mt-10 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-primary-dark"
          >
            View the Implementation Guide
            <span className="transition-transform duration-200 group-hover:translate-x-1">
              →
            </span>
          </Link>
        </Reveal>
      </Container>
    </section>
  );
}
