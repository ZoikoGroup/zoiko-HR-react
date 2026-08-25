import Link from "next/link";
import { Container, Reveal, PlaceholderImage } from "@/components/ui";

const CORE_OBJECTS = [
  "Person",
  "Worker/employment relationship",
  "Position",
  "Job",
  "Department",
  "Legal entity",
  "Location",
  "Manager relationship",
  "Team",
  "Document",
  "Policy acknowledgment",
  "Lifecycle event",
];

export function PlatformCoreHrSection() {
  return (
    <section className="py-24">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <Reveal>
              <span className="text-sm font-semibold uppercase tracking-wide text-primary">
                Core HR foundation
              </span>
              <h2 className="mt-3 text-3xl font-bold leading-tight tracking-tight text-ink sm:text-4xl">
                A dependable foundation for employee and organization
                information.
              </h2>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="mt-4 text-ink/60">
                Core HR organizes approved people, employment, position,
                team, entity, location, manager, document, and lifecycle
                information with clear ownership, access, effective dates,
                and change history.
              </p>
            </Reveal>

            <Reveal delay={0.16}>
              <span className="mt-6 block text-xs font-semibold uppercase tracking-wide text-ink/40">
                Core objects
              </span>
              <div className="mt-3 flex flex-wrap gap-2">
                {CORE_OBJECTS.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-slate-200 bg-white px-3.5 py-1.5 text-xs font-medium text-ink/70 transition-colors duration-200 hover:border-primary/40 hover:text-primary"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.28}>
              <Link
                href="/core-hr"
                className="group mt-7 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-primary-dark"
              >
                Explore Core HR
                <span className="transition-transform duration-200 group-hover:translate-x-1">
                  →
                </span>
              </Link>
            </Reveal>
          </div>

          <Reveal delay={0.2} y={36}>
            <PlaceholderImage
              src="/images/platform/core-hr.png"
              alt="Silhouette of a person reviewing workforce data visualizations"
              label="A dependable data foundation"
              fit="contain"
              className="w-full rounded-2xl shadow-xl shadow-slate-900/10"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
