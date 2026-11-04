import Link from "next/link";
import { Container, Reveal, PlaceholderImage } from "@/components/ui";

export function ServiceStatusHeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#0A1B2E] bg-[radial-gradient(120%_100%_at_50%_0%,#22406B_0%,#102A43_55%,#0A1B2E_100%)] py-16 text-white sm:py-20">
      <Container>
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <Reveal>
            <span className="text-xs font-bold uppercase tracking-[0.15em] text-indigo-400">
              Service Status
            </span>
          </Reveal>

          <Reveal delay={0.08}>
            <h1 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
              Check Zoiko HR service status.
            </h1>
          </Reveal>

          <Reveal delay={0.16}>
            <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-slate-300">
              View the current source-driven state of approved Zoiko HR services
              and components, active incidents, scheduled maintenance, and recent
              history. Status data that is stale or unavailable is labeled
              explicitly — never guessed.
            </p>
          </Reveal>

          <Reveal delay={0.24}>
            <div className="mt-7 flex flex-wrap items-center justify-center gap-3.5">
              <Link
                href="#component-status"
                className="rounded-lg bg-primary px-6 py-3.5 text-base font-semibold text-white transition-colors hover:bg-primary-dark"
              >
                View current status
              </Link>
              <Link
                href="#current-incidents"
                className="rounded-lg border border-white/25 bg-white/10 px-7 py-3.5 text-base font-semibold text-white transition-colors hover:border-primary hover:text-primary"
              >
                View incident history
              </Link>
            </div>
          </Reveal>

          <Reveal delay={0.3}>
            {/* No approved status source is connected yet, so freshness is
                reported as not-yet-connected rather than a healthy default. */}
            <div className="mt-5 inline-flex flex-wrap items-center justify-center gap-2.5 rounded-full border border-white/20 bg-white/5 px-4 py-2.5">
              <span aria-hidden className="size-2 rounded-full bg-slate-400" />
              <span className="text-xs text-slate-200">
                Source freshness:{" "}
                <span className="text-white">Not yet connected</span>
              </span>
              <span
                aria-hidden
                className="hidden h-4 w-px bg-white/20 sm:inline-block"
              />
              <span className="text-xs font-semibold text-indigo-400">
                Refresh
              </span>
            </div>
          </Reveal>

          <Reveal delay={0.36}>
            <p className="mx-auto mt-5 max-w-lg text-xs leading-5 text-slate-400">
              Need help with an account-specific issue? Contact Support is not
              yet approved — start at{" "}
              <Link href="/help-center" className="text-slate-300 underline-offset-2 hover:text-white hover:underline">
                Help Center →
              </Link>
            </p>
          </Reveal>

          <Reveal delay={0.42} className="w-full">
            <PlaceholderImage
              src="/images/service-status/hero.png"
              alt="Checking the Zoiko HR service status page on a phone"
              label="Checking service status on a phone"
              className="mt-10 w-full rounded-3xl bg-white"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
