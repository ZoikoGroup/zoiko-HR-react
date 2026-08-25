import Link from "next/link";
import { Container, Reveal, Button } from "@/components/ui";

export function ManagersFinalCtaSection() {
  return (
    <section className="border-t border-primary/20 bg-gradient-to-br from-sky-950 to-slate-900 px-6 py-16 text-white">
      <Container>
        <Reveal className="mx-auto flex max-w-[700px] flex-col items-center text-center">
          <span className="rounded-full border border-primary/30 bg-primary/10 px-3.5 py-2 text-xs font-semibold uppercase tracking-wider text-primary">
            Managers
          </span>

          <h2 className="mt-4 font-heading text-3xl font-bold leading-tight sm:text-4xl">
            Give managers clearer action — without giving away control.
          </h2>

          <p className="mt-3 leading-7 text-slate-400">
            See how Zoiko HR routes assigned approvals and team actions with
            explicit authority, decision context, delegation, escalation and
            reviewable evidence.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Button href="/book-a-demo" className="px-7 py-3">
              Book a Demo
            </Button>
            <Button
              href="/pricing"
              variant="outline"
              className="!border-primary/30 !bg-primary/10 px-7 py-3 !text-indigo-400 hover:!border-primary hover:!text-primary"
            >
              Request Pricing
            </Button>
            <Link
              href="/product-tour"
              className="group inline-flex items-center gap-1.5 px-1 py-3 text-sm font-semibold text-slate-400 hover:text-white"
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
