import Link from "next/link";
import { Container, Reveal } from "@/components/ui";

const EXCEPTIONS = [
  "Missing required data — 4 records",
  "Approvals overdue — 2 requests",
  "Source conflicts — 2 fields",
];

export function ProductProofSection() {
  return (
    <section className="bg-[#0C2036] py-20 text-white">
      <Container>
        <Reveal>
          <span className="text-xs font-bold uppercase tracking-wider text-[#7FA6FF]">
            Product Proof
          </span>
          <h2 className="mt-3.5 max-w-[700px] font-heading text-3xl font-extrabold text-white">
            Standardized work, controlled at execution time.
          </h2>
          <p className="mt-3.5 max-w-[700px] leading-6 text-[#B9C6DC]">
            Decisions are server-authoritative; material changes route back
            to governed review rather than silently preserving an approval.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-9 rounded-2xl border border-[#16385A] bg-[#102A43] p-6">
            <div className="flex flex-wrap items-start justify-between gap-3">
              <p className="text-sm font-bold text-white">
                Workflow instance WF-8821 · Policy exception request v3
              </p>
              <span className="rounded-lg bg-[#3A2C13] px-3 py-[5px] text-xs font-semibold text-[#F5B860]">
                Approval pending
              </span>
            </div>
            <p className="mt-3.5 text-xs text-[#8FA3C4]">
              Owner: HR Operations · Reviewer role: Policy Owner · Due
              state: Within window · Last activity: Aug 18, 2026
            </p>
          </div>
        </Reveal>

        <div className="mt-4 grid gap-3 sm:grid-cols-3">
          {EXCEPTIONS.map((exception, i) => (
            <Reveal key={exception} delay={0.16 + i * 0.06}>
              <p className="h-full rounded-lg border border-[#2A4A6E] bg-[#16385A] px-4 py-3.5 text-xs text-[#E7ECF5]">
                {exception}
              </p>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.34}>
          <Link
            href="/platform/workflows-approvals"
            className="group mt-6 inline-flex items-center gap-1.5 font-semibold text-[#7FA6FF] hover:text-white"
          >
            See workflow &amp; approval evidence
            <span className="transition-transform duration-200 group-hover:translate-x-1">
              →
            </span>
          </Link>
        </Reveal>
      </Container>
    </section>
  );
}
