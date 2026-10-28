"use client";

import Link from "next/link";
import { Container, Reveal } from "@/components/ui";

export function IntegrationOverviewFinalCtaSection() {
  return (
    <section className="bg-[#0b1329] py-16 lg:py-24 text-white border-t border-white/10">
      <Container>
        <div className="flex flex-col lg:flex-row items-start justify-between gap-12 max-w-6xl mx-auto">
          {/* Left Text Column */}
          <div className="flex-1 max-w-2xl space-y-4">
            <Reveal>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-['Manrope'] leading-[1.2]">
                Connect the systems your workforce operations depend on — with boundaries you can explain.
              </h2>
            </Reveal>

            <Reveal delay={0.08}>
              <p className="text-white/60 text-sm sm:text-base font-normal font-['IBM_Plex_Sans'] leading-relaxed">
                Review approved connection models, understand information scope and confirm the right implementation path for your organization.
              </p>
            </Reveal>

            <Reveal delay={0.12}>
              <p className="text-white/30 text-xs font-normal font-['IBM_Plex_Sans'] leading-relaxed pt-2">
                No &quot;connect anything,&quot; &quot;works with every system,&quot; &quot;instant setup,&quot; &quot;zero configuration,&quot; &quot;fully automated&quot; or mandatory Zoiko-suite claim.
              </p>
            </Reveal>
          </div>

          {/* Right Button Column Stack */}
          <div className="w-full lg:w-72 shrink-0 pt-2">
            <Reveal delay={0.16}>
              <div className="flex flex-col gap-3">
                <Link
                  href="/contact"
                  className="w-full px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-semibold font-['IBM_Plex_Sans'] text-sm leading-5 rounded-md transition-colors text-center block"
                >
                  Talk to sales / implementation
                </Link>
                <Link
                  href="/integration-security"
                  className="w-full px-6 py-3 rounded-md border border-white/20 hover:border-white/40 text-white/70 hover:text-white font-semibold font-['IBM_Plex_Sans'] text-sm leading-5 transition-colors text-center block"
                >
                  Review Integration Security
                </Link>
                <Link
                  href="#connection-models"
                  className="text-blue-500 hover:underline text-xs font-semibold font-['IBM_Plex_Sans'] text-center block pt-1 transition-colors"
                >
                  Explore connection models ↑
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}


