"use client";

import Image from "next/image";
import { Container, Reveal } from "@/components/ui";

const PREVIEW_CARDS = [
  {
    title: "Snapshot identity",
    desc: "Input snapshot, mapping version, transform version, target schema version, validation run ID and timestamp are all shown together.",
  },
  {
    title: "Outcome counts",
    desc: "New, update, no-change, skip, warning and block counts — delete/deactivate shown only where explicitly supported.",
  },
  {
    title: "Field-level compare",
    desc: "Before/after values for approved fields, with restricted values masked and source/authority still visible.",
  },
  {
    title: "Effective-state compare",
    desc: "Current vs. proposed vs. scheduled state, shown wherever the object supports effective dating.",
  },
];

export function SnapshotPreviewSection() {
  return (
    <section id="validation-preview" className="bg-white py-16 lg:py-24">
      <Container>
        <div className="space-y-10 max-w-6xl mx-auto">
          <div className="max-w-2xl space-y-3.5">
            <Reveal>
              <h2 className="text-3xl lg:text-4xl font-extrabold text-sky-950 font-['Manrope'] leading-tight">
                Preview shows exactly what the validated snapshot will do.
              </h2>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="text-slate-600 text-base font-normal font-['IBM_Plex_Sans'] leading-relaxed">
                Any change to the source, mapping, schema or policy after validation invalidates this preview — there is no hidden rebase.
              </p>
            </Reveal>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {PREVIEW_CARDS.map((card, idx) => (
              <Reveal key={idx} delay={0.08 * idx + 0.12}>
                <div className="p-5 bg-white rounded-xl border border-slate-200 space-y-2 shadow-sm hover:border-slate-300 transition-colors">
                  <h3 className="text-sky-950 text-sm font-bold font-['IBM_Plex_Sans']">
                    {card.title}
                  </h3>
                  <p className="text-slate-500 text-xs font-normal font-['IBM_Plex_Sans'] leading-relaxed">
                    {card.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.28}>
            <div className="rounded-xl border border-slate-200 overflow-hidden shadow-sm bg-slate-50 flex items-center justify-center p-2">
              <Image
                src="/images/data-import-and-export/image 442.png"
                alt="Validated snapshot preview graphic"
                width={1240}
                height={743}
                className="w-full h-auto object-contain rounded-lg"
              />
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
