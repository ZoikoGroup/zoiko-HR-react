"use client";

import { Container, Reveal } from "@/components/ui";

const STEPS = [
  {
    num: "1",
    circleColor: "outline-blue-600 text-blue-600",
    noteColor: "text-blue-600",
    title: "Identify the job",
    desc: "Start with the workforce process: identity, time, payroll preparation, documents, compliance, migration or another approved need.",
    note: "Purpose is mandatory metadata. Do not start from 'move all HR data.'",
  },
  {
    num: "2",
    circleColor: "outline-sky-500 text-sky-400",
    noteColor: "text-sky-400",
    title: "Confirm authority",
    desc: "Determine which system owns the relevant information and whether Zoiko HR reads, writes, exports or references it.",
    note: "Source-of-truth and write authority are explicit before any connection is configured.",
  },
  {
    num: "3",
    circleColor: "outline-violet-500 text-violet-400",
    noteColor: "text-violet-400",
    title: "Apply boundaries",
    desc: "Authorize only the approved data scope and actions needed for the stated purpose. Minimization applies — only what is required for the job.",
    note: "Permission, purpose and minimization are visible in the connection record.",
  },
  {
    num: "4",
    circleColor: "outline-emerald-500 text-emerald-400",
    noteColor: "text-emerald-400",
    title: "Operate and review",
    desc: "Monitor lifecycle and currentness, handle exceptions and revisit access when the connection changes or the purpose evolves.",
    note: "State/recovery/change history are governed, not inferred from a generic green badge.",
  },
];

export function HowGovernedIntegrationsWorkSection() {
  return (
    <section className="bg-slate-950 py-16 lg:py-24 text-white">
      <Container>
        <div className="space-y-10 max-w-6xl mx-auto">
          <div className="space-y-3">
            <Reveal>
              <span className="text-blue-600 text-xs font-medium uppercase tracking-wider font-['IBM_Plex_Sans']">
                How governed integrations work
              </span>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="text-3xl lg:text-4xl font-extrabold text-white font-['Manrope'] leading-tight max-w-2xl">
                Four steps from workforce need to governed connection
              </h2>
            </Reveal>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {STEPS.map((step, idx) => (
              <Reveal key={idx} delay={0.08 * idx + 0.12}>
                <div className="p-8 bg-slate-900 rounded-xl space-y-4 border border-white/5 flex flex-col justify-between h-full hover:border-white/10 transition-colors">
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-9 h-9 rounded-full outline outline-1 outline-offset-[-1px] flex items-center justify-center font-['JetBrains_Mono'] text-sm font-normal ${step.circleColor}`}
                      >
                        {step.num}
                      </div>
                      <h3 className="text-white text-base font-extrabold font-['Manrope']">
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-white/60 text-sm font-normal font-['Inter'] leading-relaxed">
                      {step.desc}
                    </p>
                  </div>

                  <div className={`pt-3 border-t border-white/10 text-xs font-medium font-['IBM_Plex_Sans'] flex items-start gap-1.5 ${step.noteColor}`}>
                    <span aria-hidden="true">→</span>
                    <span>{step.note}</span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.32}>
            <div className="rounded-xl overflow-hidden border border-white/10 bg-slate-900">
              <img
                src="/images/integration-overview/image 433.png"
                alt="Governed integration step workflow banner"
                className="w-full h-auto object-cover"
              />
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
