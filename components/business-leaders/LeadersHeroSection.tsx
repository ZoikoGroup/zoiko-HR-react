import Link from "next/link";
import { Container, Reveal, PlaceholderImage } from "@/components/ui";

const TAGS = [
  "Role-aware access",
  "Structured employee records",
  "Governed HR workflows",
];

export function LeadersHeroSection() {
  return (
    <section className="bg-[radial-gradient(at_50%_0%,#164e63_0%,#082f49_55%,#0f172a_100%)] py-16 sm:py-20 lg:py-24">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,493px)_minmax(0,690px)] lg:gap-14">
          <div>
            <Reveal>
              <p className="text-xs font-medium uppercase leading-4 tracking-[0.1em] text-indigo-400">
                Zoiko HR for Business Leaders
              </p>
            </Reveal>

            <Reveal delay={0.06}>
              <h1 className="mt-4 text-4xl font-extrabold leading-[1.15] tracking-tight text-white sm:text-5xl sm:leading-[57px]">
                Turn workforce information into confident business decisions.
              </h1>
            </Reveal>

            <Reveal delay={0.12}>
              <p className="mt-5 max-w-[480px] leading-7 text-white/60">
                Bring employee records, organizational structure, HR workflows,
                documents, policies and reporting into one governed platform—so
                leaders can see what matters, act with clarity and scale
                operations without fragmented administration.
              </p>
            </Reveal>

            <Reveal delay={0.18}>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Link
                  href="/book-a-demo"
                  className="inline-flex min-h-11 items-center justify-center rounded-lg bg-primary px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-primary-dark"
                >
                  Book a Demo
                </Link>
                <Link
                  href="/platform"
                  className="inline-flex min-h-11 items-center justify-center rounded-lg border border-white/20 px-6 py-3 text-base font-semibold text-white/75 transition-colors hover:bg-white/10 hover:text-white"
                >
                  Explore Zoiko HR
                </Link>
              </div>
            </Reveal>

            <Reveal delay={0.24}>
              <div className="mt-6 flex flex-wrap items-center gap-2">
                {TAGS.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium leading-4 text-primary"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.1}>
            <PlaceholderImage
              src="/images/business-leaders/hero.webp"
              alt="Two colleagues reviewing a report across a desk"
              label="Zoiko HR for business leaders"
              className="aspect-[690/495] w-full rounded-2xl border border-slate-200 bg-white shadow-[0_8px_40px_rgba(49,94,251,0.10)]"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
