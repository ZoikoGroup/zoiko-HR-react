import Link from "next/link";
import { Container, Reveal } from "@/components/ui";

export function LeadersCtaSection() {
  return (
    <section className="bg-slate-950 py-16 sm:py-20">
      <Container>
        <div className="mx-auto max-w-[720px] text-center">
          <Reveal>
            <p className="text-xs font-medium uppercase leading-4 tracking-[0.1em] text-primary">
              Next step
            </p>
          </Reveal>

          <Reveal delay={0.06}>
            <h2 className="mt-4 break-words text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl sm:leading-[45px]">
              Give leadership a clearer view of how the workforce operates.
            </h2>
          </Reveal>

          <Reveal delay={0.12}>
            <p className="mx-auto mt-4 max-w-[640px] break-words leading-6 text-white/60">
              See how Zoiko HR can bring workforce records, structure and HR
              workflows into one governed operating environment.
            </p>
          </Reveal>

          <Reveal delay={0.18}>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/book-a-demo"
                className="inline-flex min-h-11 items-center justify-center rounded-lg bg-primary px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-primary-dark"
              >
                Book a Demo
              </Link>
              <Link
                href="/platform"
                className="text-base font-semibold text-white/75 transition-colors hover:text-white"
              >
                Explore Zoiko HR →
              </Link>
            </div>
          </Reveal>

          <Reveal delay={0.24}>
            <p className="mt-8 break-words text-xs leading-4 text-white/30">
              No generic &ldquo;Start free&rdquo; path — commercial access
              follows the approved sales and onboarding process.
            </p>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
