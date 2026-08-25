import Link from "next/link";
import { Container, Reveal } from "@/components/ui";

const STATES = [
  {
    state: "Not sent",
    stateClass: "text-sky-500",
    proves: "Handoff not yet released or attempted.",
    doesNotProve: "Nothing about payroll period status.",
  },
  {
    state: "Sent",
    stateClass: "text-sky-500",
    proves: "Release and transport attempt recorded in Zoiko HR.",
    doesNotProve: "Destination receipt, acceptance or payroll outcome.",
  },
  {
    state: "Received",
    stateClass: "text-sky-500",
    proves: "Destination acknowledged receipt where supported.",
    doesNotProve: "Business validation or payroll calculation.",
  },
  {
    state: "Rejected",
    stateClass: "text-red-400",
    proves: "Destination explicitly rejected the handoff with a reason code.",
    doesNotProve: "That source data is wrong — review is required.",
  },
  {
    state: "Accepted",
    stateClass: "text-emerald-500",
    proves: "Destination accepted defined input context.",
    doesNotProve: "Payroll calculation, approval, payment, filing or reconciliation.",
  },
  {
    state: "Reconciliation open",
    stateClass: "text-slate-400",
    proves: "Operational reconciliation case is open for this period.",
    doesNotProve: "GL close, bank reconciliation or statutory sign-off.",
  },
];

export function PayrollBoundarySection() {
  return (
    <section className="bg-[#F0F5F9] py-16 sm:py-20">
      <Container>
        <Reveal>
          <span className="text-xs font-semibold uppercase tracking-widest text-sky-500">
            Section 10 — Payroll Intake Boundary
          </span>
          <h2 className="mt-3 font-heading text-2xl font-bold leading-tight text-slate-900 sm:text-3xl">
            What an upstream handoff proves — and what it does not prove about
            payroll.
          </h2>
          <p className="mt-4 max-w-[620px] leading-6 text-slate-500">
            Payroll calculation, review, payment, filing and statutory outcomes
            remain with the payroll process and authorized reviewers.
          </p>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="mt-6 max-w-[680px] rounded-lg border border-red-400/20 bg-red-400/5 px-4 py-2.5">
            <p className="text-xs leading-4 text-slate-500">
              Accepted by payroll system is not synonymous with payroll
              calculated, approved, paid, filed or financially reconciled.
            </p>
          </div>
        </Reveal>

        <div className="mt-8 space-y-3">
          {STATES.map((item, i) => (
            <Reveal key={item.state} delay={0.12 + i * 0.05}>
              <div className="grid overflow-hidden rounded-lg border border-black/5 md:grid-cols-[150px_minmax(0,1fr)_minmax(0,1fr)] lg:grid-cols-[180px_minmax(0,1fr)_minmax(0,1fr)]">
                <div className="flex items-center border-b border-black/5 bg-white px-5 py-4 md:border-b-0 md:border-r">
                  <span
                    className={`text-sm font-semibold ${item.stateClass}`}
                  >
                    {item.state}
                  </span>
                </div>
                <div className="border-b border-black/5 bg-emerald-400/5 px-5 py-4 md:border-b-0 md:border-r">
                  <p className="text-[10px] font-semibold uppercase leading-4 tracking-widest text-emerald-500">
                    Proves
                  </p>
                  <p className="mt-1 text-xs leading-5 text-slate-600">
                    {item.proves}
                  </p>
                </div>
                <div className="bg-white px-5 py-4">
                  <p className="text-[10px] font-semibold uppercase leading-4 tracking-widest text-red-400">
                    Does not prove
                  </p>
                  <p className="mt-1 text-xs leading-5 text-slate-600">
                    {item.doesNotProve}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <Link
            href="/integrations/payroll"
            className="group mt-8 inline-flex items-center gap-1.5 text-sm font-semibold text-sky-500 hover:text-sky-600"
          >
            Review payroll boundary in full
            <span className="transition-transform duration-200 group-hover:translate-x-1">
              →
            </span>
          </Link>
        </Reveal>
      </Container>
    </section>
  );
}
