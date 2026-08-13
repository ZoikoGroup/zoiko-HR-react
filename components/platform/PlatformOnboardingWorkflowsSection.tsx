import Link from "next/link";
import { Container, Reveal, PlaceholderImage } from "@/components/ui";

const STAGES = [
  "Preboarding",
  "Onboarding",
  "Active employment changes",
  "Leave / absence event",
  "Transfer / promotion",
  "Return",
  "Separation",
];

export function PlatformOnboardingWorkflowsSection() {
  return (
    <section className="bg-[#FAF8F5] py-24">
      <Container>
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <Reveal>
              <span className="text-sm font-semibold uppercase tracking-wide text-primary">
                Onboarding & lifecycle
              </span>
              <h2 className="mt-3 text-2xl font-bold leading-tight tracking-tight text-ink sm:text-3xl">
                Coordinate employee journeys from preparation through
                transition.
              </h2>
            </Reveal>

            <div className="mt-6 divide-y divide-slate-200">
              {STAGES.map((stage, i) => (
                <Reveal key={stage} delay={0.08 + i * 0.04}>
                  <div className="flex items-center gap-3 py-3">
                    <span className="flex h-6 w-6 flex-none items-center justify-center rounded-full border border-primary/30 text-xs font-semibold text-primary">
                      {i + 1}
                    </span>
                    <span className="text-sm font-medium text-ink">{stage}</span>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.4}>
              <Link
                href="/platform/onboarding-lifecycle"
                className="group mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-primary-dark"
              >
                Explore Onboarding & Lifecycle
                <span className="transition-transform duration-200 group-hover:translate-x-1">
                  →
                </span>
              </Link>
            </Reveal>
          </div>

          <div>
            <Reveal delay={0.04}>
              <span className="text-sm font-semibold uppercase tracking-wide text-primary">
                Workflows & approvals
              </span>
              <h2 className="mt-3 text-2xl font-bold leading-tight tracking-tight text-ink sm:text-3xl">
                Route people operations through clear responsibility and
                approval.
              </h2>
            </Reveal>

            <Reveal delay={0.14} y={30}>
              <PlaceholderImage
                src="/images/platform/workflows-approvals.png"
                alt="Hand holding a tablet with workflow and approval icons"
                label="Clear responsibility and approval"
                fit="contain"
                className="mt-6 w-full rounded-2xl shadow-xl shadow-slate-900/10"
              />
            </Reveal>

            <Reveal delay={0.4}>
              <Link
                href="/platform/workflows-approvals"
                className="group mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-primary-dark"
              >
                Explore Workflows & Approvals
                <span className="transition-transform duration-200 group-hover:translate-x-1">
                  →
                </span>
              </Link>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
