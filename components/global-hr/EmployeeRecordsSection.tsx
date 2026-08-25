import Link from "next/link";
import { Container, Reveal, PlaceholderImage } from "@/components/ui";

const CHECKLIST = [
  "Field-level source, owner, and effective-date labels",
  "Change timeline: created, verified, updated, approved, effective, superseded",
  "Permission-sensitive tabs with restriction explanations",
  "Request correction, propose change, and audit history actions",
];

export function EmployeeRecordsSection() {
  return (
    <section className="bg-slate-50/60 py-24">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal y={36}>
            <PlaceholderImage
              src="/images/global-hr/employee-records-review.png"
              alt="Couple reviewing paperwork together at home"
              label="Structured employee records"
              fit="contain"
              className="w-full rounded-2xl shadow-xl shadow-slate-900/10 lg:order-first"
            />
          </Reveal>

          <div>
            <Reveal>
              <span className="text-sm font-semibold uppercase tracking-wide text-primary">
                Section 7 — Employee records
              </span>
              <h2 className="mt-3 text-3xl font-bold leading-tight tracking-tight text-ink sm:text-4xl">
                Keep employee information structured, current, and
                appropriately accessible.
              </h2>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="mt-4 text-ink/60">
                Each employee record captures identity, employment,
                position, contact, documents, lifecycle events, and access
                history — with field-level source, owner, effective date,
                sensitivity, and permission metadata.
              </p>
            </Reveal>

            <ul className="mt-6 space-y-3">
              {CHECKLIST.map((item, i) => (
                <Reveal key={item} delay={0.14 + i * 0.06}>
                  <li className="flex items-start gap-2.5">
                    <span className="mt-0.5 flex h-5 w-5 flex-none items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                      <svg viewBox="0 0 20 20" fill="none" className="h-3 w-3">
                        <path
                          d="M4 10l4 4 8-8"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    <span className="text-sm text-ink/70">{item}</span>
                  </li>
                </Reveal>
              ))}
            </ul>

            <Reveal delay={0.4}>
              <Link
                href="/employee-records"
                className="group mt-7 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-primary-dark"
              >
                View Employee Records
                <span className="transition-transform duration-200 group-hover:translate-x-1">
                  →
                </span>
              </Link>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
