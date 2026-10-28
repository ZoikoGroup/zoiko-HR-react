"use client";

import Image from "next/image";
import Link from "next/link";
import { Container, Reveal } from "@/components/ui";

export function AdjacentProductsSection() {
  return (
    <section className="bg-white py-16 lg:py-24">
      <Container>
        <div className="space-y-12 max-w-7xl mx-auto">
          <div className="max-w-3xl space-y-3.5">
            <Reveal>
              <h2 className="text-3xl lg:text-4xl font-extraextrabold text-sky-950 font-['Manrope'] leading-tight">
                Identity &amp; SSO stays in its lane.
              </h2>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="text-slate-600 text-base font-normal font-['IBM_Plex_Sans'] leading-relaxed">
                Adjacent products and destinations each own their own detail — Identity &amp; Single Sign-On never duplicates or substitutes for their authority.
              </p>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 ">
            {/* Left Column */}
            <div className="space-y-6 flex flex-col justify-between">
              <Reveal delay={0.12}>
                <Link
                  href="/integrations"
                  className="block p-6 bg-slate-50 hover:bg-slate-100/80 rounded-2xl border border-slate-200/70 transition-all h-full"
                >
                  <h3 className="text-sky-950 text-base font-extrabold font-['Manrope'] mb-2">
                    Integrations Overview
                  </h3>
                  <p className="text-slate-500 text-xs sm:text-xs font-normal font-['IBM_Plex_Sans'] leading-relaxed">
                    Owns the general connection-model summary; this page does not duplicate setup or access detail already covered there.
                  </p>
                </Link>
              </Reveal>

              <Reveal delay={0.18}>
                <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200/70 h-full">
                  <h3 className="text-sky-950 text-base font-extrabold font-['Manrope'] mb-2">
                    Controlled Interoperability
                  </h3>
                  <p className="text-slate-500 text-xs sm:text-xs font-normal font-['IBM_Plex_Sans'] leading-relaxed">
                    Owns the broader permission-controlled information-flow posture and optional suite adoption.
                  </p>
                </div>
              </Reveal>
            </div>

            {/* Center Column: Image */}
            <Reveal delay={0.24}>
              <div className="relative rounded-2xl overflow-hidden border border-slate-200/70 h-full min-h-[220px] shadow-sm">
                <Image
                  src="/images/IDENTITY & SINGLE SIGN-ON/image 430.png"
                  alt="Identity & SSO Strategy Execution"
                  fill
                  className="object-cover"
                />
              </div>
            </Reveal>

            {/* Right Column */}
            <div className="space-y-3 flex flex-col justify-between">
              <Reveal delay={0.3}>
                <Link
                  href="/data-import-and-export"
                  className="block p-6 bg-slate-50 hover:bg-slate-100/80 rounded-2xl border border-slate-200/70 transition-all h-full"
                >
                  <h3 className="text-sky-950 text-base font-extrabold font-['Manrope'] mb-2">
                    Data Import &amp; Export
                  </h3>
                  <p className="text-slate-500 text-xs sm:text-xs font-normal font-['IBM_Plex_Sans'] leading-relaxed">
                    Owns general migration and data preparation — provider configuration here is never treated as a migration tool.
                  </p>
                </Link>
              </Reveal>

              <Reveal delay={0.36}>
                <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200/70 h-full">
                  <h3 className="text-sky-950 text-base font-extrabold font-['Manrope'] mb-2">
                    ZoikoID
                  </h3>
                  <p className="text-slate-500 text-xs sm:text-xs font-normal font-['IBM_Plex_Sans'] leading-relaxed">
                    An ecosystem identity and access reference — not a mandatory suite adoption or an exclusive identity provider.
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
