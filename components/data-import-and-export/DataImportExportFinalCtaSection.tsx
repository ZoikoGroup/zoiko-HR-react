"use client";

import Link from "next/link";
import { Container, Reveal } from "@/components/ui";

export function DataImportExportFinalCtaSection() {
  return (
    <section className="bg-slate-900 py-20 lg:py-24 text-white relative overflow-hidden">
      <div className="absolute top-[-100px] right-[-100px] w-[600px] h-[600px] bg-radial from-blue-600/20 to-transparent rounded-full pointer-events-none" />
      <Container>
        <div className="relative z-10 max-w-4xl mx-auto text-center space-y-8">
          <Reveal>
            <h2 className="text-3xl sm:text-4xl lg:text-4xl font-extrabold text-white font-['Manrope'] leading-tight">
              Bring validated, governed data <br className="hidden sm:inline" />
              movement to your rollout.
            </h2>
          </Reveal>

          <Reveal delay={0.08}>
            <p className="text-slate-400 text-base font-normal font-['IBM_Plex_Sans'] leading-relaxed max-w-2xl mx-auto">
              See how source authority, mapping, validation, preview, execution, reconciliation and export governance work together — with audit evidence at every step.
            </p>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 pt-2">
              <Link
                href="/contact"
                className="w-full sm:w-auto px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-semibold font-['Arial'] text-base rounded-full transition-colors text-center"
              >
                Book a Demo
              </Link>
              <Link
                href="/contact"
                className="w-full sm:w-auto px-8 py-4 bg-transparent border border-white/30 hover:border-white/50 text-white font-semibold font-['Arial'] text-base rounded-full transition-colors text-center"
              >
                Talk to Data Migration
              </Link>
            </div>
          </Reveal>

          <Reveal delay={0.16}>
            <div className="flex flex-wrap items-center justify-center gap-6 pt-2 text-indigo-400 text-sm font-semibold font-['IBM_Plex_Sans']">
              <Link href="/contact" className="hover:underline">
                Get Import &amp; Export Help →
              </Link>
              <Link href="/implementation-guide" className="hover:underline">
                Read the Implementation Guide →
              </Link>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
