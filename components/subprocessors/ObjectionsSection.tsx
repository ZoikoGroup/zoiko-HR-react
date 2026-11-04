import Link from "next/link";
import { Container, Reveal, PlaceholderImage } from "@/components/ui";
import { SectionHeading } from "./shared";

function DocumentIcon({ className = "" }: { className?: string }) {
  return (
    <svg aria-hidden viewBox="0 0 24 24" className={className} fill="none">
      <path
        d="M14 3H7a1.5 1.5 0 0 0-1.5 1.5v15A1.5 1.5 0 0 0 7 21h10a1.5 1.5 0 0 0 1.5-1.5V7.5L14 3Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
      <path d="M13.8 3.2v4.4h4.4" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
    </svg>
  );
}

function ScalesIcon({ className = "" }: { className?: string }) {
  return (
    <svg aria-hidden viewBox="0 0 24 24" className={className} fill="none">
      <path
        d="M12 4v16M7 20h10M5 7.5h14M5 7.5 2.5 13.5h5L5 7.5Zm14 0-2.5 6h5L19 7.5Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ObjectionsSection() {
  return (
    <section className="bg-[#0b1b2d] py-16">
      <Container>
        <SectionHeading
          eyebrow="11 / Objections & Contractual Rights Handoff"
          title="Contractual rights belong in the DPA."
          tone="dark"
        >
          Any right to object, conditions, deadlines, grounds, remedies or
          replacement process must come from an approved DPA or legal source.
          This page routes to that authority — it does not create rights or
          invent deadlines.
        </SectionHeading>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          <Reveal delay={0.06}>
            <div className="h-full rounded-xl border border-cyan-900 bg-slate-900/40 px-7 py-7">
              <DocumentIcon className="size-7 text-slate-300" />
              <p className="mt-6 text-[11px] font-medium uppercase tracking-wide text-slate-500">
                Public — DPA
              </p>
              <p className="mt-2.5 text-xs leading-5 text-slate-300">
                Review the Data Processing Addendum for approved contractual
                notice/objection/transfer terms, governing clauses and
                conditions.
              </p>
              <Link
                href="/data-processing-addendum"
                className="mt-6 inline-block text-xs font-semibold text-indigo-400 hover:text-white"
              >
                Review DPA →
              </Link>
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <PlaceholderImage
              src="/images/subprocessors/objections.png"
              alt="Colleagues working across a shared desk of laptops and notes"
              label="Routing to contractual authority"
              className="h-full min-h-56 w-full rounded-xl border border-cyan-900 bg-slate-900"
            />
          </Reveal>

          <Reveal delay={0.18}>
            <div className="h-full rounded-xl border border-cyan-900 bg-slate-900/40 px-7 py-7">
              <ScalesIcon className="size-7 text-slate-300" />
              <p className="mt-6 text-[11px] font-medium uppercase tracking-wide text-slate-500">
                Fallback — Legal & Support
              </p>
              <p className="mt-2.5 text-xs leading-5 text-slate-300">
                If no operational workflow is supplied, the DPA clause and
                approved Legal or Support contact route remain the fallback. No
                objection deadline is invented.
              </p>
              <Link
                href="/contact-support"
                className="mt-6 inline-block text-xs font-semibold text-indigo-400 hover:text-white"
              >
                Contact Support →
              </Link>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.24}>
          <div className="mt-6 rounded-xl border border-cyan-900 bg-slate-900/40 px-6 py-5">
            <p className="text-xs leading-5 text-slate-400">
              <span className="font-semibold text-white">
                No Object button published without a governed workflow.
              </span>{" "}
              Customer-specific contract status, objection state, account
              identifiers and private legal request details never appear on this
              public page. No response time, acceptance criteria or resolution
              remedy is invented.
            </p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
