import Link from "next/link";
import { Container, Reveal, PlaceholderImage } from "@/components/ui";

export function ZoikoTimeHeroSection() {
  return (
    <section className="bg-slate-900 bg-[radial-gradient(110%_90%_at_50%_0%,#164e63_0%,#082f49_55%,#0f172a_100%)] py-16 text-white sm:py-20 lg:py-24">
      <Container>
        <div className="grid items-center gap-14 lg:grid-cols-[minmax(0,513px)_minmax(0,574px)]">
          <div>
            <Reveal>
              <p className="text-xs font-medium uppercase tracking-[0.12em] text-indigo-400">
                Zoiko Ecosystem | ZoikoTime
              </p>
            </Reveal>

            <Reveal delay={0.08}>
              <h1 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl lg:leading-[54px]">
                Bring approved workforce-time context into HR operations without
                blurring who owns the record.
              </h1>
            </Reveal>

            <Reveal delay={0.16}>
              <p className="mt-5 leading-6 text-white/60">
                Use approved ZoikoTime schedule, attendance and timesheet
                information with Zoiko HR through explicit source ownership,
                permission, purpose, effective timing, currentness, correction
                and reconciliation boundaries. Exact information flow and
                availability depend on current approved configuration.
              </p>
            </Reveal>

            <Reveal delay={0.24}>
              <div className="mt-8 flex flex-col items-start gap-3">
                <Link
                  href="#operating-model"
                  className="inline-flex items-center gap-2 rounded-sm bg-primary px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-primary-dark"
                >
                  Explore the operating model
                  <span aria-hidden>→</span>
                </Link>
                <Link
                  href="#information-classes"
                  className="rounded-sm border border-white/20 px-5 py-2.5 text-sm font-semibold text-white/70 transition-colors hover:border-white/40 hover:text-white"
                >
                  Review information boundaries
                </Link>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.2}>
            <PlaceholderImage
              src="/images/zoikotime/hero.webp"
              alt="Colleagues reviewing workforce dashboards in a boardroom"
              label="ZoikoTime and Zoiko HR"
              className="aspect-[574/535] w-full rounded-xl border border-white/10 bg-slate-900 shadow-2xl"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
