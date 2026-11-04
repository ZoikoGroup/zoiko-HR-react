"use client";

import Image from "next/image";
import { Container, Reveal } from "@/components/ui";

const STEPS = [
  {
    stepNum: "1",
    numColor: "outline-blue-600 text-blue-600",
    arrowColor: "text-blue-600",
    title: "Identify the job",
    desc: "Start with the workforce process: identity, time, payroll preparation, documents, compliance, migration or another approved need.",
    note: "Purpose is mandatory metadata. Do not start from 'move all HR data.'",
  },
  {
    stepNum: "2",
    numColor: "outline-sky-700 text-sky-700",
    arrowColor: "text-sky-700",
    title: "Confirm authority",
    desc: "Determine which system owns the relevant information and whether Zoiko HR reads, writes, exports or references it.",
    note: "Source-of-truth and write authority are explicit before any connection is configured.",
  },
  {
    stepNum: "3",
    numColor: "outline-violet-600 text-violet-600",
    arrowColor: "text-violet-600",
    title: "Apply boundaries",
    desc: "Authorize only the approved data scope and actions needed for the stated purpose. Minimization applies — only what is required for the job.",
    note: "Permission, purpose and minimization are visible in the connection record.",
  },
  {
    stepNum: "4",
    numColor: "outline-green-700 text-green-700",
    arrowColor: "text-green-700",
    title: "Operate and review",
    desc: "Monitor lifecycle and currentness, handle exceptions and revisit access when the connection changes or the purpose evolves.",
    note: "State/recovery/change history are governed, not inferred from a generic green badge.",
  },
];

export function HowGovernedIntegrationsWorkSection() {
  return (
    <section className="bg-slate-950 text-white py-16 lg:py-24 border-t border-slate-800">
      <Container>
        <div className="space-y-12 max-w-6xl mx-auto">
          <div className="max-w-3xl space-y-3">
            <Reveal>
              <span className="text-blue-600 text-xs font-medium font-['IBM_Plex_Sans'] uppercase leading-4 tracking-wider">
                How governed integrations work
              </span>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="text-3xl lg:text-4xl font-extrabold text-white font-['Manrope'] leading-10 max-w-[560px]">
                Four steps from workforce need to governed connection
              </h2>
            </Reveal>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {STEPS.map((s, idx) => (
              <Reveal key={idx} delay={0.06 * idx + 0.1}>
                <div className="p-8 bg-slate-900 rounded-none space-y-4 shadow-xl h-full flex flex-col justify-between">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <span className={`w-9 h-9 rounded-full outline outline-1 outline-offset-[-1.01px] flex items-center justify-center font-['JetBrains_Mono'] font-normal text-sm leading-5 ${s.numColor}`}>
                        {s.stepNum}
                      </span>
                      <h3 className="text-white text-base font-extrabold font-['Manrope'] leading-6">
                        {s.title}
                      </h3>
                    </div>
                    <p className="text-white/60 text-sm font-normal font-['IBM_Plex_Sans'] leading-6">
                      {s.desc}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-white/10 flex items-start gap-2 text-xs font-['IBM_Plex_Sans']">
                    <span className={`font-normal ${s.arrowColor}`}>→</span>
                    <span className={`font-medium ${s.arrowColor}`}>{s.note}</span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.24}>
            <div className="relative rounded-none overflow-hidden bg-rose-400">
              <Image
                src="/images/integration-overview/image 433.png"
                alt="Four Steps Governed Workflow Graphic"
                width={1280}
                height={771}
                className="w-full h-auto object-cover"
              />
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

