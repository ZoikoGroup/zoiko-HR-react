"use client";

import Image from "next/image";
import { Container, Reveal } from "@/components/ui";

const LIFECYCLE_STAGES = [
  {
    title: "Queued / generating",
    desc: "Shows a progress category; never a fabricated ETA unless the timing is actually governed.",
  },
  {
    title: "Download",
    desc: "Permission is revalidated at the moment of download; one-time or expiring mechanics only where actually implemented.",
  },
  {
    title: "Expired",
    desc: "Artifact becomes unavailable; regenerating requires current authorization and the current definition.",
  },
  {
    title: "Failed",
    desc: "No partial, unsafe artifact is ever produced; retry is safe and traceable.",
  },
];

export function ExportLifecycleSection() {
  return (
    <section className="bg-white py-16 lg:py-24 border-t border-slate-200">
      <Container>
        <div className="space-y-12 max-w-6xl mx-auto">
          <div className="max-w-2xl space-y-3.5">
            <Reveal>
              <h2 className="text-3xl lg:text-4xl font-extrabold text-sky-950 font-['Manrope'] leading-tight">
                Generating a file is not the same as authorizing who receives it.
              </h2>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="text-slate-600 text-base font-normal font-['IBM_Plex_Sans'] leading-relaxed">
                Every export job carries its own lifecycle — download, delivery, expiry and revocation are each tracked on their own.
              </p>
            </Reveal>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6 space-y-4">
              {LIFECYCLE_STAGES.map((stage, idx) => (
                <Reveal key={idx} delay={0.06 * idx + 0.1}>
                  <div className="p-5 bg-white rounded-xl border border-slate-200 shadow-sm hover:border-slate-300 transition-all space-y-2">
                    <h3 className="text-sky-950 text-sm font-bold font-['IBM_Plex_Sans']">
                      {stage.title}
                    </h3>
                    <p className="text-slate-500 text-xs font-normal font-['IBM_Plex_Sans'] leading-relaxed">
                      {stage.desc}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>

            <div className="lg:col-span-6 flex justify-center">
              <Reveal delay={0.2}>
                <div className="relative rounded-xl overflow-hidden border border-slate-200 shadow-sm bg-slate-50 p-2">
                  <Image
                    src="/images/data-import-and-export/image 443.png"
                    alt="Export Lifecycle Management"
                    width={667}
                    height={845}
                    className=" object-contain rounded-lg"
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
