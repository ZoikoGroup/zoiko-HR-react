
"use client";

import Link from "next/link";
import { Container, Reveal } from "@/components/ui";

export function IntegrationSecurityFinalCtaSection() {
  return (
    <section className="bg-[#0b1329] py-16 lg:py-24 text-white border-t border-white/10">
      <Container>
        <div className="flex flex-col lg:flex-row items-start justify-between gap-12 max-w-6xl mx-auto">
          {/* Left Text Column */}
          <div className="flex-1 max-w-2xl space-y-4">
            <Reveal>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-['Manrope'] leading-[1.2]">
                Govern every approved integration with explicit authorization, minimum data, service identity and traceable evidence.
              </h2>
            </Reveal>

            <Reveal delay={0.08}>
              <p className="text-white/60 text-sm sm:text-base font-normal font-['IBM_Plex_Sans'] leading-relaxed">
                Security and trust information are never gated. Technical controls and assurance details come from current approved security sources.
              </p>
            </Reveal>

            <Reveal delay={0.12}>
              <p className="text-white/30 text-xs font-normal font-['IBM_Plex_Sans'] leading-relaxed pt-2">
                No &quot;bank-grade,&quot; &quot;military-grade,&quot; &quot;zero trust,&quot; &quot;encrypted everywhere,&quot; &quot;breach-proof,&quot; &quot;certified&quot; or response-time claim is made on this page without a current approved Security Claims Registry source.
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
                  Book a demo
                </Link>
                <Link
                  href="/integration-security"
                  className="w-full px-6 py-3 rounded-md border border-white/20 hover:border-white/40 text-white/70 hover:text-white font-semibold font-['IBM_Plex_Sans'] text-sm leading-5 transition-colors text-center block"
                >
 Security & Privacy / Trust Center                </Link>
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


