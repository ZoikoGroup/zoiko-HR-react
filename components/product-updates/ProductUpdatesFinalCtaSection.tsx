import Link from "next/link";
import { Container, Reveal } from "@/components/ui";

export function ProductUpdatesFinalCtaSection() {
  return (
    <section className="relative overflow-hidden bg-[#0A1B2E] bg-[radial-gradient(120%_100%_at_50%_0%,#22406B_0%,#102A43_55%,#0A1B2E_100%)] py-16 text-white sm:py-20">
      <Container>
        <Reveal>
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-xl">
              <h2 className="text-2xl font-bold leading-tight tracking-tight sm:text-3xl">
                Build a stronger foundation for global people operations.
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-slate-400">
                Zoiko HR&apos;s transparent change record reflects a commitment
                to operational clarity. Review product updates, then explore how
                the platform supports your team.
              </p>
            </div>

            <div className="flex flex-none flex-wrap items-center gap-4">
              <Link
                href="#"
                className="rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-dark"
              >
                Book a Demo
              </Link>
              <Link
                href="/documentation"
                className="rounded-xl border border-white/30 px-6 py-3 text-sm font-semibold text-white transition-colors hover:border-primary hover:text-primary"
              >
                Read Documentation →
              </Link>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
