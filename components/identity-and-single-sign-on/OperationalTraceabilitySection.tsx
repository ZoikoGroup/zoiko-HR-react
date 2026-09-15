"use client";

import { Container, Reveal } from "@/components/ui";

const AUDIT_EVENTS = [
  {
    title: "Configuration change",
    desc: "Config version, actor or service, role, reason category, before/after reference, timestamp and timezone.",
  },
  {
    title: "Activation / enforcement",
    desc: "Policy and config versions, scope, current or scheduled effect, actor, result.",
  },
  {
    title: "Runtime issue",
    desc: "Provider and config reference, safe status label, last-known-good timestamp, incident reference where approved.",
  },
];

export function OperationalTraceabilitySection() {
  return (
    <section className="bg-slate-100 py-16 lg:py-24">
      <Container>
        <div className="space-y-8 max-w-6xl mx-auto">
          <div className="max-w-2xl space-y-3.5">
            <Reveal>
              <h2 className="text-3xl lg:text-4xl font-extrabold text-sky-950 font-['Manrope'] leading-tight">
                Every configuration, test and access event leaves a record.
              </h2>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="text-slate-600 text-base font-normal font-['IBM_Plex_Sans'] leading-relaxed">
                Evidence supports operational traceability — never claimed as legal proof of non-repudiation or security assurance on its own.
              </p>
            </Reveal>
          </div>

          <div className="grid items-center gap-8 lg:grid-cols-12">
            <div className="lg:col-span-6">
              <Reveal delay={0.16}>
                <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm flex items-center justify-center">
                  <img
                    src="/images/IDENTITY & SINGLE SIGN-ON/image 429.png"
                    alt="Operational traceability audit record graphic"
                    className="w-full h-auto object-cover"
                  />
                </div>
              </Reveal>
            </div>

            <div className="lg:col-span-6 space-y-4">
              {AUDIT_EVENTS.map((event, idx) => (
                <Reveal key={idx} delay={0.08 * idx + 0.2}>
                  <div className="p-5 bg-white rounded-xl border border-slate-200 space-y-2 shadow-sm hover:border-slate-300 transition-colors">
                    <h3 className="text-sky-950 text-sm font-bold font-['IBM_Plex_Sans']">
                      {event.title}
                    </h3>
                    <p className="text-slate-500 text-xs font-normal font-['IBM_Plex_Sans'] leading-relaxed">
                      {event.desc}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
