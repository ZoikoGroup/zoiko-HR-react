import Link from "next/link";
import { Container, Reveal, PlaceholderImage } from "@/components/ui";

const CAPABILITIES = [
  {
    title: "Workforce foundation",
    outcome:
      "Create a dependable, governed source for workforce and organizational information.",
    tags: "Core HR; employee records; employment history; entities; locations; teams; roles; managers; reporting structures; permissions.",
  },
  {
    title: "Lifecycle operations",
    outcome:
      "Coordinate repeatable HR work with clear responsibilities, status, evidence, and control.",
    tags: "Onboarding; lifecycle changes; leave; attendance information; documents; policies; workflows; approvals; performance processes; transitions.",
  },
  {
    title: "Experience and intelligence",
    outcome:
      "Give each authorized user the information and actions appropriate to their role.",
    tags: "Employee self-service; manager self-service; HR administration; reporting; workforce visibility; governed AI assistance; integrations.",
  },
];

const IMAGES = [
  { src: "/images/about/provide-1.png", alt: "Team high-fiving in an office" },
  { src: "/images/about/provide-2.png", alt: "Hands connecting puzzle pieces" },
  { src: "/images/about/provide-3.png", alt: "Colleague presenting to a team" },
];

export function WhatWeProvideSection() {
  return (
    <section className="bg-slate-50/60 py-24">
      <Container>
        <div className="grid gap-8 lg:grid-cols-2 lg:items-start">
          <Reveal>
            <span className="text-sm font-semibold uppercase tracking-wide text-primary">
              What we provide
            </span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
              One connected platform for the employee lifecycle.
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="text-ink/60">
              Zoiko HR brings workforce records, organizational structures,
              onboarding, leave, documents, policies, approvals, performance
              processes, self-service, reporting, governed AI assistance,
              and approved integrations into one controlled environment.
              The platform is supported by implementation, configuration,
              data migration, integration, enablement, and customer-support
              services where agreed.
            </p>
            <Link
              href="/platform"
              className="group mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-primary-dark"
            >
              Explore Platform Capabilities
              <span className="transition-transform duration-200 group-hover:translate-x-1">
                →
              </span>
            </Link>
          </Reveal>
        </div>

        <div className="mt-10 divide-y divide-slate-200 border-t border-slate-200">
          {CAPABILITIES.map((capability, i) => (
            <Reveal key={capability.title} delay={i * 0.08}>
              <div className="grid gap-3 py-6 lg:grid-cols-[auto_1fr_1.2fr] lg:items-start lg:gap-8">
                <span className="font-serif text-3xl italic text-primary/30">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <p className="font-semibold text-ink">{capability.title}</p>
                  <p className="mt-1.5 text-sm font-medium text-emerald-600">
                    {capability.outcome}
                  </p>
                </div>
                <p className="text-sm leading-relaxed text-ink/60 lg:text-right">
                  {capability.tags}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          {IMAGES.map((image, i) => (
            <Reveal key={image.src} delay={i * 0.08}>
              <PlaceholderImage
                src={image.src}
                alt={image.alt}
                label={image.alt}
                className="aspect-square w-full rounded-2xl transition-transform duration-300 hover:-translate-y-1"
              />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
