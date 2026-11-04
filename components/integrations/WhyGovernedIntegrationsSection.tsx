"use client";

import { Container, Reveal } from "@/components/ui";

const PRINCIPLES = [
  {
    num: "01",
    numColor: "text-blue-600/20",
    title: "Connect without replacing everything",
    desc: "Use Zoiko HR with approved Zoiko and third-party systems where supported. Integration is optional and purposeful — not a mandatory suite change.",
    bg: "bg-white",
  },
  {
    num: "02",
    numColor: "text-violet-600/20",
    title: "Know exactly what information moves",
    desc: "Every approved flow has a purpose, a data scope, a direction label, a source-of-truth owner and an explicit write-authority boundary.",
    bg: "bg-slate-50",
  },
  {
    num: "03",
    numColor: "text-emerald-700/20",
    title: "Govern the connection lifecycle",
    desc: "Availability, setup, health, pause, revoke, retire and currentness are distinct, text-labeled states — not a single generic 'connected' badge.",
    bg: "bg-white",
  },
];

export function WhyGovernedIntegrationsSection() {
  return (
    <section className="bg-white py-16 lg:py-24">
      <Container>
        <div className="space-y-10 max-w-6xl mx-auto">
          <div className="space-y-3">
            <Reveal>
              <span className="text-blue-600 text-xs font-medium uppercase tracking-wider font-['IBM_Plex_Sans']">
                Why governed integrations
              </span>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="text-3xl lg:text-4xl font-extrabold text-slate-950 font-['Manrope'] leading-tight max-w-2xl">
                Three principles that make integration decisions trustworthy
              </h2>
            </Reveal>
          </div>

          <div className="grid items-center gap-8 lg:grid-cols-12">
            <div className="lg:col-span-8 space-y-4">
              {PRINCIPLES.map((item, idx) => (
                <Reveal key={idx} delay={0.08 * idx + 0.12}>
                  <div
                    className={`p-6 rounded-xl border border-slate-200 shadow-sm flex items-start gap-6 ${item.bg}`}
                  >
                    <span
                      className={`text-3xl sm:text-4xl font-normal font-['JetBrains_Mono'] leading-none shrink-0 ${item.numColor}`}
                    >
                      {item.num}
                    </span>
                    <div className="space-y-1.5">
                      <h3 className="text-slate-950 text-lg font-extrabold font-['Manrope']">
                        {item.title}
                      </h3>
                      <p className="text-slate-600 text-sm font-normal font-['Inter'] leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            <div className="lg:col-span-4">
              <Reveal delay={0.24}>
                <div className="rounded-xl border border-slate-200 overflow-hidden shadow-sm flex items-center justify-center bg-rose-50 min-h-[320px]">
                  <img
                    src="/images/integration-overview/image 432.png"
                    alt="Why governed integrations graphic"
                    className="w-full h-auto object-cover"
                  />
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
