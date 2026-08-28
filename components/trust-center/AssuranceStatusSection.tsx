import { Container, Reveal } from "@/components/ui";

const STATUSES = [
  { label: "Current", className: "bg-emerald-50 text-teal-600" },
  { label: "Review due", className: "bg-orange-100 text-yellow-600" },
  { label: "Request required", className: "bg-indigo-50 text-primary" },
  { label: "Customer access required", className: "bg-slate-100 text-ink" },
  { label: "Superseded", className: "bg-gray-100 text-slate-400" },
  { label: "Withdrawn", className: "bg-gray-100 text-slate-400" },
  { label: "Unavailable", className: "bg-gray-100 text-slate-400" },
];

export function AssuranceStatusSection() {
  return (
    <section className="py-16 sm:py-24">
      <Container>
        <Reveal className="max-w-2xl">
          <h2 className="text-2xl font-extrabold tracking-tight text-ink sm:text-3xl lg:text-4xl">
            Assurance status &amp; evidence model.
          </h2>
          <p className="mt-4 leading-relaxed text-slate-600">
            Status explains how to interpret a resource — it is never converted
            into a score, grade or badge tier.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-8 flex flex-wrap gap-2.5">
            {STATUSES.map((status) => (
              <span
                key={status.label}
                className={`rounded-full px-3.5 py-2 text-xs font-semibold ${status.className}`}
              >
                {status.label}
              </span>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.16}>
          <p className="mt-6 rounded-xl border border-slate-200 bg-slate-100 px-5 py-5 text-sm leading-relaxed text-slate-600 sm:px-7 sm:py-6">
            Zoiko HR does not calculate a &quot;trust score,&quot; security grade
            or readiness percentage from heterogeneous evidence. Absence of a
            public resource does not imply a negative fact.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
