import Link from "next/link";
import { Container, Reveal, PlaceholderImage } from "@/components/ui";

const CORE_OBJECTS = [
  "Person",
  "Worker / Employment Relationship",
  "Position / Job",
  "Department",
  "Legal Entity",
  "Location",
  "Manager Relationship",
  "Team",
  "Document",
  "Policy Acknowledgment",
  "Lifecycle Event",
];

const RECORD_PRINCIPLES = [
  "Authoritative source",
  "Field owner",
  "Data purpose",
  "Field sensitivity",
  "Effective date",
  "Validation status",
  "Source system",
  "Last changed by",
  "Audit event",
];

function TagList({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <p className="text-sm font-semibold text-ink">{title}</p>
      <div className="mt-3 flex flex-wrap gap-2">
        {items.map((item) => (
          <span
            key={item}
            className="rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-ink/70 transition-colors duration-200 hover:border-primary/40 hover:text-primary"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

export function CoreHrFoundationSection() {
  return (
    <section className="py-24">
      <Container>
        <div className="grid items-start gap-12 lg:grid-cols-2">
          <div>
            <Reveal>
              <span className="text-sm font-semibold uppercase tracking-wide text-primary">
                Section 6 — Core HR foundation
              </span>
              <h2 className="mt-3 text-3xl font-bold leading-tight tracking-tight text-ink sm:text-4xl">
                Create a dependable foundation for employee and organization
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

            <div className="mt-6 space-y-6">
              <Reveal delay={0.14}>
                <TagList title="Core objects" items={CORE_OBJECTS} />
              </Reveal>
              <Reveal delay={0.2}>
                <TagList title="Record principles" items={RECORD_PRINCIPLES} />
              </Reveal>
            </div>

            <Reveal delay={0.28}>
              <Link
                href="/platform/core-hr"
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
              src="/images/global-hr/core-hr-handshake.png"
              alt="Two colleagues shaking hands, one laughing"
              label="A dependable people record"
              fit="contain"
              className="w-full rounded-2xl shadow-xl shadow-slate-900/10"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
