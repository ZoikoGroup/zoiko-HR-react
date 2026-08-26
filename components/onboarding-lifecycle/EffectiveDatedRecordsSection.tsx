import Link from "next/link";
import { Container, Reveal, PlaceholderImage } from "@/components/ui";

export function EffectiveDatedRecordsSection() {
  return (
    <section className="bg-ink py-24 text-white">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <Reveal>
              <h2 className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
                Future changes never overwrite current records.
              </h2>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="mt-4 text-white/60">
                Current, proposed, approved-future, effective and
                superseded states stay distinct until an approved effective
                date arrives.
              </p>
            </Reveal>
            <Reveal delay={0.16}>
              <Link
                href="/employee-records"
                className="group mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-white"
              >
                Explore Employee Records
                <span className="transition-transform duration-200 group-hover:translate-x-1">
                  →
                </span>
              </Link>
            </Reveal>
          </div>

          <Reveal delay={0.2} y={36}>
            <PlaceholderImage
              src="/images/onboarding-lifecycle/effective-dated-records.png"
              alt="Two colleagues reviewing a record on a laptop"
              label="Nothing is silently overwritten"
              fit="contain"
              className="w-full rounded-2xl border border-white/10 shadow-xl shadow-black/30"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
