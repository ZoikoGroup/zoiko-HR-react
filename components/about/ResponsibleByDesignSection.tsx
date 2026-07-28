import Link from "next/link";
import { Container, Reveal, PlaceholderImage } from "@/components/ui";

const PRINCIPLES = [
  {
    title: "People, not surveillance",
    description:
      "Use workforce information for defined organizational purposes — never hidden monitoring, intrusive profiling, or inferred sensitive characteristics.",
  },
  {
    title: "Role-appropriate access",
    description:
      "Give each person access according to authorized responsibilities, organization scope, and purpose.",
  },
  {
    title: "Privacy and security by design",
    description:
      "Minimize information, protect it in transit and at rest, apply access controls, and maintain incident, backup, and recovery practices.",
  },
  {
    title: "Auditability and evidence",
    description:
      "Preserve material changes, approvals, workflow activity, document acknowledgments, and accountable administrative actions.",
  },
  {
    title: "Governed AI assistance",
    description:
      "Help users find information, summarize status, draft content, identify incomplete work, and navigate processes within permission and review boundaries.",
  },
  {
    title: "Accessible experience",
    description:
      "Target WCAG 2.2 Level AA and test with keyboard, screen readers, zoom, reflow, reduced motion, and assistive technologies.",
  },
];

export function ResponsibleByDesignSection() {
  return (
    <section className="py-24">
      <Container>
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <Reveal>
              <span className="text-sm font-semibold uppercase tracking-wide text-primary">
                Responsible by design
              </span>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
                Technology for people operations must earn trust.
              </h2>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="mt-4 text-ink/60">
                Workforce systems hold sensitive information and influence
                important processes. AI assistance may support authorized
                work, but it must not silently replace accountable
                employment judgment.
              </p>
            </Reveal>

            <Reveal delay={0.16}>
              <div className="mt-6 rounded-xl border-l-4 border-primary bg-primary-light/60 p-5">
                <p className="font-semibold text-ink">
                  Human accountability is non-negotiable
                </p>
                <p className="mt-2 text-sm leading-relaxed text-ink/60">
                  Zoiko HR must not advertise or silently perform autonomous
                  hiring, promotion, disciplinary, or termination decisions.
                  Where AI assists, the source, permission scope, and
                  absence of automatic execution stay clear.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.22}>
              <Link
                href="/trust-center"
                className="group mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-primary-dark"
              >
                Visit the Trust Center
                <span className="transition-transform duration-200 group-hover:translate-x-1">
                  →
                </span>
              </Link>
            </Reveal>

            <Reveal delay={0.16} y={30}>
              <PlaceholderImage
                src="/images/about/responsible-by-design.png"
                alt="Team laughing together around a laptop"
                label="Responsible by design"
                className="mt-8 w-full rounded-2xl"
              />
            </Reveal>
          </div>

          <div className="divide-y divide-slate-100 border-t border-slate-100">
            {PRINCIPLES.map((principle, i) => (
              <Reveal key={principle.title} delay={i * 0.06}>
                <div className="group flex gap-5 py-5 transition-colors duration-200 hover:bg-slate-50/60">
                  <span className="font-serif text-2xl italic text-primary/30">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <p className="font-semibold text-ink">
                      {principle.title}
                    </p>
                    <p className="mt-1.5 text-sm leading-relaxed text-ink/60">
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
