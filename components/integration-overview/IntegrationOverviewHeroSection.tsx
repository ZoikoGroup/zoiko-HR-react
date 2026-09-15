"use client";

import Link from "next/link";
import { Container, Reveal } from "@/components/ui";

export function IntegrationOverviewHeroSection() {
  return (
    <section className="relative bg-radial-[at_50%_0%] from-cyan-900 via-sky-950 via-55% to-slate-900 text-white py-16 lg:py-24 overflow-hidden">
      <Container>
        <div className="grid lg:grid-cols-12 gap-12 items-center max-w-6xl mx-auto">
          <div className="lg:col-span-6 space-y-6">
            <Reveal>
              <span className="text-blue-600 text-xs font-medium font-['IBM_Plex_Sans'] uppercase leading-4 tracking-wider">
                Integrations Overview
              </span>
            </Reveal>

            <Reveal delay={0.08}>
              <h1 className="text-4xl sm:text-5xl font-extrabold text-white font-['Manrope'] leading-[56.16px]">
                Connect workforce systems with clear information boundaries.
              </h1>
            </Reveal>

            <Reveal delay={0.12}>
              <p className="text-white/60 text-base font-normal font-['IBM_Plex_Sans'] leading-6">
                See how Zoiko HR can coordinate approved workforce information across connected systems through governed connection models, explicit permissions and source-controlled data boundaries.
              </p>
            </Reveal>

            <Reveal delay={0.16}>
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <Link
                  href="#connection-models"
                  className="px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold font-['IBM_Plex_Sans'] leading-5 rounded-sm transition-colors inline-flex items-center gap-2"
                >
                  <span>Explore connection models </span>
                  <span className="w-3.5 h-3.5 relative overflow-hidden inline-flex items-center justify-center">
                  </span>
                  <span>→</span>
                </Link>
                <Link
                  href="#ecosystem"
                  className="px-5 py-2.5 rounded-sm outline outline-1 outline-offset-[-1.01px] outline-white/20 hover:bg-white/5 text-white/70 hover:text-white text-sm font-semibold font-['IBM_Plex_Sans'] leading-5 transition-colors"
                >
                  Explore Zoiko ecosystem 
                </Link>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="pt-2">
                <Link
                  href="/contact"
                  className="text-blue-600 hover:underline text-xs font-semibold font-['IBM_Plex_Sans'] leading-5 inline-flex items-center gap-1.5"
                >
                  <span>Talk to sales / implementation</span>
                  <span className="w-3 h-3 relative overflow-hidden inline-flex items-center justify-center">
                    <span>→</span>
                  </span>
                </Link>
              </div>
            </Reveal>

            <Reveal delay={0.24}>
              <p className="text-white/30 text-xs font-normal font-['IBM_Plex_Sans'] leading-4 pt-2 max-w-md">
                Permission-controlled information flows. No mandatory suite adoption. Specific availability, data scope and write behavior depend on approved connection configuration.
              </p>
            </Reveal>
          </div>

          <div className="lg:col-span-6">
            <Reveal delay={0.2} y={30}>
              <div className="relative w-full rounded-2xl bg-slate-900 border border-blue-950 shadow-[0px_30px_60px_0px_rgba(0,0,0,0.4)] overflow-hidden">
                <img
                  src="/images/integration-overview/image 431.png"
                  alt="Identity & Single Sign-On preview graphic"
                  className="w-full h-auto object-cover"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}

