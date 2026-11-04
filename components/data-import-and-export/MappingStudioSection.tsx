"use client";

import Image from "next/image";
import { Container, Reveal } from "@/components/ui";

export function MappingStudioSection() {
  return (
    <section className="bg-white py-16 lg:py-24">
      <Container>
        <div className="space-y-10 max-w-6xl mx-auto">
          <div className="max-w-2xl space-y-3.5">
            <Reveal>
              <h2 className="text-3xl lg:text-4xl font-extrabold text-sky-950 font-['Manrope'] leading-tight">
                A mapped field still isn&apos;t a valid one.
              </h2>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="text-slate-600 text-base font-normal font-['IBM_Plex_Sans'] leading-relaxed">
                Every element in the Mapping &amp; Transformation Studio carries its own version, requiredness, sensitivity and conflict rule — nothing maps silently.
              </p>
            </Reveal>
          </div>

          <div className="grid gap-6 md:grid-cols-3 items-stretch">
            {/* Column 1 */}
            <div className="space-y-6 flex flex-col justify-between">
              <Reveal delay={0.12}>
                <div className="p-5 bg-white rounded-xl border border-slate-200 space-y-2 shadow-sm h-full">
                  <h3 className="text-sky-950 text-sm font-bold font-['IBM_Plex_Sans']">
                    Source field
                  </h3>
                  <p className="text-slate-500 text-xs font-normal font-['IBM_Plex_Sans'] leading-relaxed">
                    Name and reference, source type, sample synthetic value, sensitivity and source authority are shown together — never a bare column name.
                  </p>
                </div>
              </Reveal>

              <Reveal delay={0.2}>
                <div className="p-5 bg-white rounded-xl border border-slate-200 space-y-2 shadow-sm h-full">
                  <h3 className="text-sky-950 text-sm font-bold font-['IBM_Plex_Sans']">
                    Lookup
                  </h3>
                  <p className="text-slate-500 text-xs font-normal font-['IBM_Plex_Sans'] leading-relaxed">
                    References an exact dataset and version, with defined exact-match and fallback behavior. An unknown lookup stays unknown — never guessed.
                  </p>
                </div>
              </Reveal>
            </div>

            {/* Column 2 - Image Card */}
            <Reveal delay={0.16}>
              <div className=" overflow-hidden  flex items-center justify-center  p-2 h-full min-h-[280px]">
                <Image
                  src="/images/data-import-and-export/image 440.png"
                  alt="Mapping & Transformation studio graphic"
                  width={888}
                  height={592}
                  className="object-contain rounded-lg"
                />
              </div>
            </Reveal>

            {/* Column 3 */}
            <div className="space-y-6 flex flex-col justify-between">
              <Reveal delay={0.18}>
                <div className="p-5 bg-white rounded-xl border border-slate-200 space-y-2 shadow-sm h-full">
                  <h3 className="text-sky-950 text-sm font-bold font-['IBM_Plex_Sans']">
                    Default
                  </h3>
                  <p className="text-slate-500 text-xs font-normal font-['IBM_Plex_Sans'] leading-relaxed">
                    Applied only where an approved target rule explicitly allows it. A missing value is never invented to fill a gap.
                  </p>
                </div>
              </Reveal>

              <Reveal delay={0.24}>
                <div className="p-5 bg-white rounded-xl border border-slate-200 space-y-2 shadow-sm h-full">
                  <h3 className="text-sky-950 text-sm font-bold font-['IBM_Plex_Sans']">
                    Version lifecycle
                  </h3>
                  <p className="text-slate-500 text-xs font-normal font-['IBM_Plex_Sans'] leading-relaxed">
                    Draft, review, approved/current, superseded or retired. A running job stays pinned to the exact version it started with.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
