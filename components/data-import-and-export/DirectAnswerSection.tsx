"use client";

import Image from "next/image";
import { Container, Reveal } from "@/components/ui";

const PILLARS = [
  {
    title: "FORMATS",
    desc: "Only current approved registry formats are ever claimed — never CSV, XLSX or JSON by default.",
  },
  {
    title: "MIGRATION",
    desc: "Support depends on approved source, scope and cutover model — no universal migration promise.",
  },
  {
    title: "ROLLBACK",
    desc: "Classified per change: direct, restore, compensating or manual — never assumed reversible.",
  },
  {
    title: "EXPORT",
    desc: "Scope, fields and recipient depend on current authorization and privacy classification.",
  },
];

export function DirectAnswerSection() {
  return (
    <section className="bg-white py-16 lg:py-24 border-b border-gray-100">
      <Container>
        <div className="grid items-start gap-8 lg:grid-cols-12 max-w-6xl mx-auto">
          <div className="lg:col-span-8 space-y-6">
            <div className="space-y-3">
              <Reveal>
                <span className="text-blue-600 text-xs font-bold uppercase tracking-wider font-['IBM_Plex_Sans']">
                  DIRECT ANSWER
                </span>
              </Reveal>
              <Reveal delay={0.08}>
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-sky-950 font-['Manrope']">
                  What is Data Import &amp; Export in Zoiko HR?
                </h2>
              </Reveal>
              <Reveal delay={0.16}>
                <p className="text-slate-600 text-base font-normal font-['IBM_Plex_Sans'] leading-relaxed">
                  It&apos;s a governed way to prepare, map, validate, preview, import, migrate or export approved workforce information according to the product capabilities and access rules currently enabled for your organization — not a generic file uploader, bulk editor or backup tool.
                </p>
              </Reveal>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 pt-2">
              {PILLARS.map((pillar, idx) => (
                <Reveal key={idx} delay={0.08 * idx + 0.2}>
                  <div className="p-4 bg-slate-100/90 rounded-xl border border-slate-200 space-y-1.5 h-full flex flex-col justify-between hover:border-slate-300 transition-colors">
                    <span className="text-blue-600 text-xs font-bold uppercase tracking-wide font-['IBM_Plex_Sans'] block">
                      {pillar.title}
                    </span>
                    <p className="text-slate-500 text-xs font-normal font-['IBM_Plex_Sans'] leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <div className="lg:col-span-4 flex justify-center">
            <Reveal delay={0.24}>
              <div className="w-full rounded-xl border border-slate-200 overflow-hidden shadow-sm flex items-center justify-center bg-slate-50 p-2">
                <Image
                  src="/images/data-import-and-export/image 438.png"
                  alt="Data import and export answer graphic"
                  width={320}
                  height={288}
                  className=" object-contain rounded-lg"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
