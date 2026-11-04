import Link from "next/link";
import { Container, Reveal } from "@/components/ui";

export function SalesHandoffSection() {
  return (
    <section className="bg-white py-14">
      <Container>
        <Reveal>
          <div className="flex flex-col justify-between gap-8 rounded-2xl border border-indigo-200 bg-blue-50 p-10 lg:flex-row lg:items-center">
            <div className="min-w-0">
              <p className="text-[11px] font-medium uppercase tracking-[0.12em] text-primary">
                06 / Sales Handoff
              </p>
              <h2 className="mt-2 text-2xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-3xl">
                Interested in Zoiko HR for your organization?
              </h2>
              <p className="mt-2.5 max-w-[520px] leading-6 text-slate-700">
                Talk with the sales team about product fit, rollout, pricing,
                procurement, or enterprise requirements. The general form is not
                the right path for commercial discussions.
              </p>
            </div>

            <div className="flex flex-col gap-2.5 lg:w-56 lg:flex-none">
              <Link
                href="/contact-sales"
                className="rounded-[10px] bg-primary px-7 py-3.5 text-center text-sm font-semibold text-white transition-colors hover:bg-primary-dark"
              >
                Contact Sales
              </Link>
              <Link
                href="/book-a-demo"
                className="rounded-[10px] border border-primary/30 px-7 py-3.5 text-center text-sm font-semibold text-primary transition-colors hover:border-primary"
              >
                Book a Demo
              </Link>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
