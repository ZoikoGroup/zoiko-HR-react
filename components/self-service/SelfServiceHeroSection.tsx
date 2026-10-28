import Link from "next/link";
import { Container, Reveal, PlaceholderImage } from "@/components/ui";

export function SelfServiceHeroSection() {
  return (
    <section className="bg-slate-900 bg-[radial-gradient(110%_90%_at_50%_0%,#164e63_0%,#082f49_55%,#0f172a_100%)] py-16 text-white sm:py-20 lg:py-24">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,581px)_minmax(0,683px)] lg:gap-16">
          <div className="flex flex-col gap-5">
            <Reveal>
              <p className="text-xs font-bold uppercase tracking-[0.1em] text-indigo-400">
                Self-Service
              </p>
            </Reveal>

            <Reveal delay={0.08}>
              <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl lg:leading-[47.2px]">
                Give every user the right actions, records and tasks — without
                broad access.
              </h1>
            </Reveal>

            <Reveal delay={0.16}>
              <p className="max-w-[480px] leading-7 text-slate-300">
                Help employees, managers and delegated users work with approved
                records, structured requests, documents and assigned tasks —
                with permissions, source ownership, status and support always
                clear.
              </p>
            </Reveal>

            <Reveal delay={0.24}>
              <div className="flex flex-wrap items-center gap-3.5 pt-1">
                <Link
                  href="/book-a-demo"
                  className="rounded-2xl bg-primary px-7 pb-4 pt-3.5 text-base font-semibold text-white transition-colors hover:bg-primary-dark"
                >
                  Book a Demo
                </Link>
                <Link
                  href="/pricing"
                  className="rounded-2xl border border-white/30 bg-white/10 px-7 pb-4 pt-3.5 text-base font-semibold text-white transition-colors hover:bg-white/20"
                >
                  Request Pricing
                </Link>
              </div>
            </Reveal>

            <Reveal delay={0.3}>
              <Link
                href="/product-tour"
                className="text-sm font-semibold text-indigo-400 transition-colors hover:text-white"
              >
                Take the Product Tour →
              </Link>
            </Reveal>

            <Reveal delay={0.34}>
              <p className="max-w-[460px] text-xs leading-5 text-slate-400">
                What a user can see or do depends on current authorization,
                configuration and the authoritative source module — never on
                role title alone.
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.2}>
            <PlaceholderImage
              src="/images/self-service/hero.webp"
              alt="Two people shaking hands across a desk in an office"
              label="Self-Service"
              className="aspect-[683/482] w-full rounded-2xl border border-blue-950 bg-slate-900 shadow-[0px_30px_60px_0px_rgba(0,0,0,0.35)]"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
