import Link from "next/link";
import { Container, Reveal, PlaceholderImage } from "@/components/ui";

const SPOKESPEOPLE = [
  { code: "S1", tags: ["Product", "Trust", "Company"] },
  { code: "S2", tags: ["Policy", "Governance"] },
  { code: "S3", tags: ["Platform", "Partnerships"] },
];

export function SpokespeopleSection() {
  return (
    <section className="bg-[#F5F7FA] py-16 sm:py-24">
      <Container>
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-12">
          <div>
            <Reveal>
              <h2 className="text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
                Spokespeople &amp; leadership context.
              </h2>
            </Reveal>

            <Reveal delay={0.08}>
              <p className="mt-4 leading-relaxed text-ink/60">
                For interviews, spokesperson requests, and leadership context,
                route through the media inquiry path. Approved public
                spokespersons are listed with their press-relevant role labels.
                No private schedules, mobile numbers, or direct personal contact
                details are published here.
              </p>
            </Reveal>

            <Reveal delay={0.14}>
              <p className="mt-6 rounded-xl border border-amber-500/25 bg-amber-500/10 p-4 text-sm leading-relaxed text-amber-800">
                Speaker availability and current contact routing are handled
                through the media inquiry form — not through personal contact
                details on this page.
              </p>
            </Reveal>

            <Reveal delay={0.2} y={36}>
              <PlaceholderImage
                src="/images/newsroom/spokespeople.png"
                alt="Colleagues reviewing information together at a workstation"
                label="Spokespeople and leadership context"
                fit="contain"
                className="mt-6 w-full rounded-xl"
              />
            </Reveal>
          </div>

          <div>
            <div className="space-y-4">
              {SPOKESPEOPLE.map((person, i) => (
                <Reveal key={person.code} delay={0.1 + i * 0.06}>
                  <div className="flex items-start gap-4 rounded-2xl border border-black/10 bg-white p-6">
                    <span className="flex h-10 w-10 flex-none items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">
                      {person.code}
                    </span>

                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-start justify-between gap-2">
                        <p className="text-sm italic text-ink/50">
                          [Approved spokesperson name — from Person Registry]
                        </p>
                        <span className="flex-none rounded border border-amber-500/25 bg-amber-500/10 px-1.5 py-0.5 text-[10px] font-semibold tracking-wide text-amber-600">
                          Illustrative
                        </span>
                      </div>

                      <p className="mt-1 text-sm font-semibold text-primary">
                        [Press-relevant role]
                      </p>

                      <div className="mt-2 flex flex-wrap items-center gap-2">
                        {person.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full bg-slate-100 px-2 py-0.5 text-xs text-ink/50"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <p className="mt-2 text-sm font-semibold text-primary">
                        Request interview →
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.3}>
              <Link
                href="/leadership"
                className="mt-4 inline-block text-sm font-semibold text-primary hover:text-primary-dark"
              >
                View full leadership →
              </Link>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
