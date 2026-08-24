import Link from "next/link";
import { Container, Reveal, Button } from "@/components/ui";

export function ConnectHrFinalCtaSection() {
  return (
    <section className="bg-slate-900 bg-[linear-gradient(to_bottom_right,#0EA5E924,#315EFB1F,#0EA5E914)] py-16 sm:py-20 text-white">
      <Container>
        <Reveal className="mx-auto flex max-w-[760px] flex-col items-center text-center">
          <span className="text-[10px] font-semibold uppercase leading-4 tracking-widest text-sky-200">
            Section 36 — Final Conversion
          </span>

          <h2 className="mt-4 font-heading text-2xl font-extrabold leading-tight sm:text-3xl md:text-4xl">
            Ready to connect HR, time and payroll with explicit ownership?
          </h2>

          <p className="mt-4 leading-7 text-white/80">
            See authorized coordination across Zoiko HR, ZoikoTime and Zoiko
            Payroll in a guided demo. Review authority, timing, handoff states,
            reconciliation and evidence with your team.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Button
              href="/book-a-demo"
              variant="ghost"
              className="!rounded-lg px-7 py-3 !text-white hover:!text-sky-100"
            >
              Book a Demo
            </Button>
            <Button
              href="/pricing"
              variant="outline"
              className="!rounded-lg !border-white/40 px-7 py-3 !text-sky-100 hover:!border-white hover:!text-white"
            >
              Request Pricing
            </Button>
            <Link
              href="/resources/product-tour"
              className="group inline-flex items-center gap-1.5 px-1 py-3 text-sm font-semibold text-white hover:text-sky-100"
            >
              Take the Product Tour
              <span className="transition-transform duration-200 group-hover:translate-x-1">
                →
              </span>
            </Link>
          </div>

          <p className="mt-7 text-xs leading-5 text-white/60">
            Authorized coordination across Zoiko HR, ZoikoTime and Zoiko Payroll
            · No employee data required to book
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
