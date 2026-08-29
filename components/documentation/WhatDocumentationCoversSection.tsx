import { Container, Reveal } from "@/components/ui";

const STATES = [
  { label: "Current", className: "bg-emerald-50 text-teal-600" },
  { label: "Updated", className: "bg-indigo-50 text-primary" },
  { label: "Under review", className: "bg-orange-100 text-yellow-600" },
  { label: "Deprecated", className: "bg-gray-100 text-slate-400" },
  { label: "Superseded", className: "bg-gray-100 text-slate-400" },
  { label: "Archived", className: "bg-gray-100 text-slate-400" },
  { label: "Restricted", className: "bg-rose-100 text-orange-700" },
  { label: "Unavailable / not established", className: "bg-gray-100 text-slate-400" },
];

export function WhatDocumentationCoversSection() {
  return (
    <section className="py-16 sm:py-24">
      <Container>
        <Reveal className="max-w-3xl">
          <h2 className="text-2xl font-extrabold tracking-tight text-ink sm:text-3xl lg:text-4xl">
            What Documentation covers.
          </h2>
          <p className="mt-4 leading-relaxed text-slate-600">
            Documentation owns product guidance; specialist authorities own
            everything else. Article state and currentness are always visible in
            the text — nothing stays silently stale.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          <Reveal>
            <div className="h-full rounded-xl border border-slate-200 bg-slate-100 p-6 sm:p-7">
              <p className="text-xs font-bold uppercase tracking-wide text-teal-600">
                What this destination owns
              </p>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                General product concepts, setup and how-to guidance,
                configuration, role-aware task guidance, product-level
                reference, troubleshooting, and instruction compatibility —
                where an approved source establishes it.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="h-full rounded-xl border border-slate-200 p-6 sm:p-7">
              <p className="text-xs font-bold uppercase tracking-wide text-slate-400">
                What it does not own
              </p>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                Broad admin governance (Administrator Guide) · APIs, auth &amp;
                webhooks (Developer Documentation) · release history (Product
                Updates) · live availability (Service Status) · ticket intake
                (Contact Support) · support discovery (Help Center).
              </p>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.14}>
          <div className="mt-6 flex flex-wrap gap-2">
            {STATES.map((state) => (
              <span
                key={state.label}
                className={`rounded-full px-3.5 py-2 text-xs font-semibold ${state.className}`}
              >
                {state.label}
              </span>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
