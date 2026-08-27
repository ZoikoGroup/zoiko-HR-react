import { Container, Reveal } from "@/components/ui";

const RELEASES = [
  { hasFormat: true },
  { hasFormat: false },
  { hasFormat: true },
];

export function PressReleasesSection() {
  return (
    <section id="press-releases" className="bg-[#F5F8FF] py-16 sm:py-24">
      <Container>
        <Reveal>
          <h2 className="text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
            Press releases — formal communications.
          </h2>
        </Reveal>

        <Reveal delay={0.06}>
          <p className="mt-2.5 max-w-2xl leading-relaxed text-ink/50">
            Formal press releases are a distinct content type with approved
            distribution scope. HTML article is the primary accessible format.
            Supplementary PDF assets require separate rights and accessibility
            review.
          </p>
        </Reveal>

        <div className="mt-7 space-y-3">
          {RELEASES.map((release, i) => (
            <Reveal key={i} delay={0.1 + i * 0.06}>
              <article className="flex flex-col gap-3 rounded-2xl border border-black/10 bg-white px-6 py-4 lg:flex-row lg:items-center lg:justify-between">
                <div className="flex flex-wrap items-center gap-4">
                  <span className="rounded-full border border-primary/20 bg-primary/10 px-2 py-0.5 text-xs font-semibold text-primary">
                    Press Release
                  </span>
                  <span className="font-mono text-xs text-ink/40">[Date]</span>
                  <h3 className="text-base font-bold text-ink">
                    [Press release headline from News Item Registry]
                  </h3>
                </div>

                <div className="flex flex-wrap items-center gap-3 lg:flex-none">
                  {release.hasFormat && (
                    <span className="rounded-lg bg-slate-100 px-2.5 py-1 text-xs text-ink/50">
                      Format: PDF · Rights: [Status]
                    </span>
                  )}
                  <span className="text-xs font-semibold text-primary">
                    Read →
                  </span>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.3}>
          <p className="mt-4 text-xs leading-relaxed text-ink/40">
            Only items formally typed &quot;Press release&quot; in the News Item
            Registry appear here. Marketing blog posts are not press releases.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
