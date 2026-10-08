"use client";

import { Container, Reveal } from "@/components/ui";

const ERRORS = [
  {
    status: "400",
    meaning: "The request is malformed.",
    whatToDo: "Fix the request using the error details.",
    retry: "No",
  },
  {
    status: "401",
    meaning: "Credential missing or expired.",
    whatToDo: "Obtain a fresh credential from your secret store flow.",
    retry: "After fixing",
  },
  {
    status: "403",
    meaning: "Scope or policy doesn't allow this.",
    whatToDo: "Request the scope from an administrator. The response won't reveal what's hidden.",
    retry: "No",
  },
  {
    status: "404",
    meaning: "Not found, or not visible to you.",
    whatToDo: "Check the identifier and your scope.",
    retry: "No",
  },
  {
    status: "409",
    meaning: "Conflicts with the current state.",
    whatToDo: "Re-read the record, then decide.",
    retry: "After re-reading",
  },
  {
    status: "429",
    meaning: "Too many requests.",
    whatToDo: "Slow down and follow the retry guidance in the response and docs.",
    retry: "Follow retry-after",
  },
  {
    status: "5xx",
    meaning: "Temporary service problem.",
    whatToDo: "Retry with backoff and check Service Status.",
    retry: "Retry with backoff",
  },
];

const GUIDANCE = [
  {
    title: "Idempotency",
    description:
      "Where an operation supports idempotency keys, send one with each create request so a retry can't create duplicates.",
  },
  {
    title: "Pagination",
    description:
      "Follow the pagination method documented for each list operation rather than assuming page sizes.",
  },
  {
    title: "Diagnostics without secrets",
    description:
      "When contacting support, share request identifiers and timestamps, never tokens or employee data.",
  },
];

export function ErrorsAndLimitsSection() {
  return (
    <section id="errors-limits" className="border-t border-[#E2E8F0] bg-white py-20 sm:py-28">
      <Container>
        <Reveal>
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-[#0C1234] sm:text-4xl">
              Know what each error means and what to do next.
            </h2>
            <p className="mt-3 max-w-2xl text-base text-[#64748B]">
              Errors are documented with a clear next action. Rate limits and retry windows are
              published per surface in Developer Documentation. Don&apos;t rely on guessed values.
            </p>
          </div>
        </Reveal>

        {/* Error Table */}
        <Reveal delay={0.1}>
          <div className="mt-10 overflow-hidden rounded-2xl border border-[#E2E8F0] bg-white shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="border-b border-[#E2E8F0] bg-[#FAFBFD] text-xs font-bold uppercase tracking-wider text-[#64748B]">
                    <th className="px-6 py-4">Status</th>
                    <th className="px-6 py-4">Meaning</th>
                    <th className="px-6 py-4">What to do</th>
                    <th className="px-6 py-4">Retry?</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#E2E8F0]">
                  {ERRORS.map((err) => (
                    <tr key={err.status} className="transition-colors hover:bg-slate-50/70">
                      <td className="px-6 py-4 font-mono font-bold text-[#0C1234] sm:text-base">
                        {err.status}
                      </td>
                      <td className="px-6 py-4 text-xs font-medium text-[#334155] sm:text-sm">
                        {err.meaning}
                      </td>
                      <td className="px-6 py-4 text-xs text-[#64748B] sm:text-sm">
                        {err.whatToDo}
                      </td>
                      <td className="px-6 py-4 text-xs font-semibold text-[#2147C9]">
                        {err.retry}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </Reveal>

        {/* 3 Guidance Cards */}
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {GUIDANCE.map((item, idx) => (
            <Reveal key={item.title} delay={idx * 0.08}>
              <div className="rounded-xl border border-[#E2E8F0] bg-[#FAFBFD] p-6 shadow-sm">
                <h3 className="text-base font-bold text-[#0C1234]">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#64748B]">
                  {item.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
