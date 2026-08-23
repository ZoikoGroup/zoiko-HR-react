import Link from "next/link";
import { Container, Reveal, PlaceholderImage } from "@/components/ui";

export function OperatingMechanismSection() {
  return (
    <section className="bg-ink py-24 text-white">
      <Container>
        <div className="max-w-2xl">
          <Reveal>
            <span className="text-sm font-semibold uppercase tracking-wide text-emerald-400">
              The operating mechanism
            </span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              From Work Event to HR Action
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="mt-4 text-white/60">
              Deterministic policy application, evidence, and human
              review — not a black box.
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.16} y={30}>
          <div className="mt-8 grid overflow-hidden rounded-2xl border border-white/10 bg-white/5 lg:grid-cols-[1fr_1.4fr]">
            <div className="p-6">
              <span className="font-serif text-lg italic text-emerald-400/70">
                01
              </span>
              <p className="mt-2 font-semibold">Capture</p>
              <p className="mt-2 text-sm leading-relaxed text-white/60">
                A worker records time through approved desktop, mobile or
                organization workflows. Scheduled context and approved
                integrations may enrich the record.
              </p>
            </div>
            <PlaceholderImage
              src="/images/hr-people-teams/operating-mechanism.png"
              alt="Colleagues joining hands together in celebration"
              label="From work event to HR action"
              className="h-full min-h-[220px] w-full"
            />
          </div>
        </Reveal>

        <Reveal delay={0.26}>
          <Link
            href="/resources/product-tour"
            className="group mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-emerald-400 hover:text-white"
          >
            See How ZoikoTime Works
            <span className="transition-transform duration-200 group-hover:translate-x-1">
              →
            </span>
          </Link>
        </Reveal>
      </Container>
    </section>
  );
}
