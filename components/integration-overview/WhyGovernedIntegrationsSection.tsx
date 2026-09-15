"use client";

import Image from "next/image";
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
    numColor: "text-green-700/20",
    title: "Govern the connection lifecycle",
    desc: "Availability, setup, health, pause, revoke, retire and currentness are distinct, text-labeled states — not a single generic 'connected' badge.",
    bg: "bg-white",
  },
];

export function WhyGovernedIntegrationsSection() {
  return (
    <section className="bg-white py-16 lg:py-24 border-b border-slate-200">
      <Container>
        <div className="space-y-12 max-w-6xl mx-auto">
          <div className="max-w-3xl space-y-3">
            <Reveal>
              <span className="text-blue-600 text-xs font-medium font-['IBM_Plex_Sans'] uppercase leading-4 tracking-wider">
                Why Governed Integrations
              </span>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="text-3xl lg:text-4xl font-extrabold text-slate-950 font-['Manrope'] leading-10">
                Three principles that make integration decisions trustworthy
              </h2>
            </Reveal>
          </div>

          <div className="grid lg:grid-cols-12 gap-5 items-center">
            <div className="lg:col-span-8 space-y-4">
              {PRINCIPLES.map((p, idx) => (
                <Reveal key={idx} delay={0.06 * idx + 0.1}>
                  <div className={`p-6 rounded-xl outline outline-1 outline-offset-[-1.01px] outline-slate-200 ${p.bg} flex gap-6 items-start hover:border-slate-300 transition-colors`}>
                    <div className="shrink-0 pt-1">
                      <span className={`text-4xl font-normal font-['JetBrains_Mono'] leading-10 ${p.numColor}`}>
                        {p.num}
                      </span>
                    </div>
                    <div className="space-y-1">
                      <h3 className="text-slate-950 text-lg font-extrabold font-['Manrope'] leading-7">
                        {p.title}
                      </h3>
                      <p className="text-slate-600 text-sm font-normal font-['IBM_Plex_Sans'] leading-6">
                        {p.desc}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            <div className="lg:col-span-4 flex justify-center">
              <Reveal delay={0.2}>
                <div className="relative rounded-[10px] overflow-hidden bg-rose-400">
                  <Image
                    src="/images/integration-overview/image 432.png"
                    alt="Why Governed Integrations Principles"
                    width={720}
                    height={720}
                    className=" object-cover rounded-[10px]"
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

