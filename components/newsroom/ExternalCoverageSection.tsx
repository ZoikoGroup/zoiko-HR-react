import { Container, Reveal } from "@/components/ui";

export function ExternalCoverageSection() {
  return (
    <section
      id="external-coverage"
      className="bg-[#0A1B2E] py-16 text-white sm:py-24"
    >
      <Container>
        <Reveal>
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
            External coverage — third-party reporting.
          </h2>
        </Reveal>

        <Reveal delay={0.06}>
          <p className="mt-2.5 max-w-2xl leading-relaxed text-white/60">
            Curated references to third-party coverage. Not authored or endorsed
            by Zoiko HR. Each item links to the original outlet&apos;s
            publication.
          </p>
        </Reveal>

        <div className="mt-7 grid gap-4 sm:grid-cols-2">
          {[0, 1, 2, 3].map((i) => (
            <Reveal key={i} delay={0.1 + i * 0.05}>
              <article className="h-full rounded-2xl border border-white/10 bg-[#1E3450] p-6">
                <div className="flex items-start justify-between gap-2">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="rounded-full border border-amber-500/20 bg-amber-500/10 px-2 py-0.5 text-xs font-semibold text-amber-500">
                      External coverage
                    </span>
                    <span className="font-mono text-xs text-white/50">
                      [Outlet name from registry]
                    </span>
                  </div>
                  <span aria-hidden className="flex-none text-white/40">
                    ↗
                  </span>
                </div>

                <p className="mt-3 font-mono text-xs text-white/50">
                  [Publication date]
                </p>

                <h3 className="mt-2 text-base italic text-white/90">
                  [Third-party headline — as published by outlet]
                </h3>

                <div className="mt-3 flex flex-wrap items-center justify-between gap-2">
                  <span className="text-sm font-semibold text-primary">
                    Read external coverage ↗
                  </span>
                  <span className="rounded-md border border-amber-500/25 bg-amber-500/10 px-1.5 py-0.5 text-[10px] font-semibold tracking-wide text-amber-500">
                    Illustrative
                  </span>
                </div>

                <p className="mt-3 text-xs text-white/40">
                  Source: [Outlet]. Not authored by Zoiko HR.
                </p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.32}>
          <p className="mt-6 rounded-2xl border border-amber-500/25 bg-amber-500/5 p-5 text-sm leading-relaxed text-white/70">
            External coverage links to the original third-party publication.
            Zoiko HR does not copy article body, claim editorial relationship,
            or represent third-party commentary as company-authored content.
            Link health is monitored; broken or expired links are reviewed under
            editorial policy.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
