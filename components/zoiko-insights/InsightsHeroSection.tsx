import { Container, Reveal, PlaceholderImage } from "@/components/ui";
import { CtaButtons, Eyebrow } from "./shared";

export function InsightsHeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#0A1B2E] bg-[radial-gradient(120%_100%_at_50%_0%,#22406B_0%,#102A43_55%,#0F172A_100%)] py-16 text-white sm:py-20 lg:py-28">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,640px)_minmax(0,503px)] lg:justify-between">
          <div>
            <Reveal>
              <Eyebrow tone="dark">Zoiko Insights · Workforce reporting &amp; intelligence</Eyebrow>
            </Reveal>

            <Reveal delay={0.08}>
              <h1 className="mt-4 text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl xl:text-6xl">
                Turn workforce data into insight you can explain.
              </h1>
            </Reveal>

            <Reveal delay={0.16}>
              <p className="mt-6 text-base leading-7 text-slate-400">
                Build permission-sensitive dashboards and reports from governed
                HR records and process evidence — with definitions, source
                context, freshness and human accountability visible.
              </p>
            </Reveal>

            <Reveal delay={0.24}>
              <CtaButtons variant="dark" className="mt-8" />
              <p className="mt-5 text-xs leading-5 text-slate-500">
                Currentness is shown per source and metric. Exact report
                families depend on plan, configuration, source data and
                permissions.
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.2}>
            <PlaceholderImage
              src="/images/zoiko-insights/hero.png"
              alt="Two colleagues reviewing a printed report together"
              label="Colleagues reviewing a report"
              className="aspect-[4/3] w-full rounded-2xl border border-slate-200 bg-white shadow-2xl shadow-black/15 sm:aspect-video lg:aspect-[503/464]"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
