import Link from "next/link";
import { Container, Reveal, Button } from "@/components/ui";

export function FinalConversionSection() {
  return (
    <section className="bg-gradient-to-br from-slate-950 to-slate-900 py-20 text-white sm:py-24">
      <Container className="max-w-3xl">
        <div className="flex flex-col items-center text-center">
          {/* Title */}
          <Reveal>
            <h2 className="whitespace-nowrap font-heading text-2xl font-extrabold leading-tight md:text-3xl lg:leading-[36px]">
              Build a stronger foundation for global people<br />
              operations.
            </h2>
          </Reveal>

          {/* Subtitle */}
          <Reveal delay={0.08}>
            <p className="mt-6 max-w-[640px] text-base leading-7 text-slate-400 md:text-lg md:leading-8">
              Bring your scope, your decision owners and your readiness
              questions. We will help you understand what implementation
              involves for your organization — without fixed timelines or
              implied outcomes.
            </p>
          </Reveal>

          {/* CTA Buttons Row */}
          <Reveal delay={0.14}>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button
                href="#demo"
                className="w-full bg-white px-6 py-3 text-sm font-bold text-slate-950 sm:w-auto"
              >
                Book a Demo
              </Button>
              <Button
                href="#pricing"
                variant="outline"
                className="w-full !border-white/10 px-6 py-3 !text-white hover:!bg-white/5 sm:w-auto"
              >
                Request Pricing
              </Button>
              <Link
                href="#product-tour"
                className="flex h-11 items-center justify-center px-6 text-sm font-semibold text-indigo-400 transition-colors hover:text-indigo-300"
              >
                Take the Product Tour →
              </Link>
            </div>
          </Reveal>

          {/* Disclaimer */}
          <Reveal delay={0.2}>
            <p className="mt-8 text-xs text-slate-600">
              No commitment required. No timeline, outcome or scope is implied.
            </p>
          </Reveal>

          {/* Secondary Navigation Links */}
          <Reveal delay={0.24}>
            <p className="mt-4 text-xs text-slate-600">
              Already implementing?{" "}
              <Link href="#" className="text-indigo-400 hover:underline">
                Documentation
              </Link>{" "}
              ·{" "}
              <Link href="#" className="text-indigo-400 hover:underline">
                Help
              </Link>{" "}
              ·{" "}
              <Link href="#" className="text-indigo-400 hover:underline">
                Contact Support
              </Link>
            </p>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
