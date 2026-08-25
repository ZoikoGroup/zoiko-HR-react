import Link from "next/link";
import { Container, Reveal, Button } from "@/components/ui";

export function HrTeamsFinalCtaSection() {
  return (
    <section className="bg-gradient-to-br from-slate-950 to-sky-950 py-24 text-white">
      <Container>
        <Reveal className="mx-auto max-w-3xl text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-sky-500">
            Ready to evaluate?
          </span>
          <h2 className="mt-5 font-heading text-3xl font-bold sm:text-4xl">
            Bring records, workflows, policy, reporting and employee services
            into a more governed HR operating model.
          </h2>
          <p className="mx-auto mt-5 max-w-xl leading-7 text-slate-400">
            See how Zoiko HR can help your HR team coordinate authorized work
            with clearer ownership, effective dates, permissions, exceptions and
            evidence.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Button href="/book-a-demo" className="px-6 py-3">
              Book a Demo
            </Button>
            <Button
              href="/pricing"
              variant="outline"
              className="!border-white/10 !bg-white/5 px-6 py-3 !text-slate-300 hover:!border-primary hover:!text-primary"
            >
              Request Pricing
            </Button>
            <Link
              href="/product-tour"
              className="group inline-flex items-center gap-1.5 py-3 text-sm font-semibold text-sky-500 hover:text-white"
            >
              Take the Product Tour
              <span className="transition-transform duration-200 group-hover:translate-x-1">
                →
              </span>
            </Link>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
