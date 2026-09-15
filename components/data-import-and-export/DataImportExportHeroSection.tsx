"use client";

import Image from "next/image";
import { Container, Reveal } from "@/components/ui";

export function DataImportExportHeroSection() {
  return (
    <section className="relative overflow-hidden bg-slate-950 bg-radial-[at_50%_0%] from-cyan-900 via-sky-950 via-55% to-slate-900 py-16 lg:py-24 text-white">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-12 max-w-6xl mx-auto">
          <div className="lg:col-span-6 space-y-6">
            <Reveal>
              <span className="text-indigo-400 text-xs font-bold uppercase tracking-wider font-['IBM_Plex_Sans']">
                DATA IMPORT &amp; EXPORT
              </span>
            </Reveal>

            <Reveal delay={0.08}>
              <h1 className="text-4xl sm:text-4xl font-extrabold font-['Manrope'] leading-[1.18] text-white">
                Move workforce information <br className="hidden sm:inline" />
                with validation before <br className="hidden sm:inline" />
                change.
              </h1>
            </Reveal>

            <Reveal delay={0.16}>
              <p className="text-slate-300 text-base font-normal font-['IBM_Plex_Sans'] leading-relaxed max-w-xl">
                Prepare, map, validate, preview, migrate, import and export approved workforce information with clear source authority, privacy, execution, reconciliation and audit boundaries.
              </p>
            </Reveal>

            <Reveal delay={0.24}>
              <div className="flex flex-row items-center gap-3.5 pt-2">
                <a
                  href="#import-setup"
                  className="px-6 py-3 bg-blue-600 hover:bg-blue-500 rounded-full text-white text-base font-semibold font-['IBM_Plex_Sans'] transition-colors inline-block text-center"
                >
                  Explore the Data Movement Model
                </a>
                <a
                  href="#validation-preview"
                  className="px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/30 rounded-full text-white text-base font-semibold font-['IBM_Plex_Sans'] transition-colors inline-block text-center"
                >
                  See Validation &amp; Preview
                </a>
              </div>
            </Reveal>

            <Reveal delay={0.32}>
              <p className="text-slate-400 text-xs font-normal font-['IBM_Plex_Sans'] leading-relaxed max-w-lg pt-1">
                Supported formats, objects, volumes, transformations, migration modes, connectors and export destinations depend on current approved product capability records.
              </p>
            </Reveal>
          </div>

          <div className="lg:col-span-6 flex justify-center">
            <Reveal delay={0.2} y={30}>
              <div className="relative w-full rounded-2xl bg-slate-900 border border-blue-950 shadow-[0px_30px_60px_0px_rgba(0,0,0,0.35)] overflow-hidden p-2">
                <Image
                  src="/images/data-import-and-export/image 437.png"
                  alt="Data Import & Export platform graphic"
                  width={683}
                  height={450}
                  className=" object-contain rounded-xl"
                  priority
                />
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
