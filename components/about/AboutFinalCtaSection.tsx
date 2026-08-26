import Link from "next/link";
import { Container, Reveal, Button } from "@/components/ui";

export function AboutFinalCtaSection() {
  return (
    <section className="relative overflow-hidden bg-ink py-24 text-white">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 flex justify-center"
      >
        <div className="h-72 w-[36rem] rounded-full bg-primary/20 blur-3xl" />
      </div>

      <Container>
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary/80">
            Start the next step
          </span>
          <h2 className="mt-5 text-3xl font-bold tracking-tight sm:text-4xl">
            Build a stronger foundation for people operations.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-white/70">
            See how Zoiko HR can centralize workforce information,
            structure HR processes, and connect your organization&apos;s
            people systems through governed workflows.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Button href="/book-a-demo">Book a Demo</Button>
            <Button
              href="/product-tour"
              variant="outline"
              className="!border-white/30 !text-white hover:!border-primary hover:!text-primary"
            >
              Take the Product Tour
            </Button>
          </div>
          <Link
            href="/pricing"
            className="group mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-white"
          >
            Request Pricing
            <span className="transition-transform duration-200 group-hover:translate-x-1">
              →
            </span>
          </Link>
        </Reveal>
      </Container>
    </section>
  );
}
