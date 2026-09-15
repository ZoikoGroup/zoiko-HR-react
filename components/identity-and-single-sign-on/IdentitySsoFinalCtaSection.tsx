"use client";

import Link from "next/link";
import { Container, Reveal } from "@/components/ui";

export function IdentitySsoFinalCtaSection() {
  return (
    <section className="relative overflow-hidden bg-slate-900 py-20 text-white">
      {/* Decorative Radial Glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-blue-600/20 to-transparent rounded-full blur-3xl opacity-50"
      />

      <Container>
        <div className="relative z-10 max-w-3xl mx-auto text-center space-y-6">
          <Reveal>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-['Manrope'] leading-tight text-white">
              Bring approved identity providers and controlled access to Zoiko HR.
            </h2>
          </Reveal>

          <Reveal delay={0.08}>
            <p className="text-slate-400 text-base font-normal font-['IBM_Plex_Sans'] leading-relaxed max-w-xl mx-auto">
              See how provider currentness, configuration, testing, recovery readiness and access boundaries work together — with audit evidence at every step.
            </p>
          </Reveal>

          <Reveal delay={0.16}>
            <div className="flex flex-wrap items-center justify-center gap-4 pt-3">
              <Link
                href="/book-a-demo"
                className="px-8 py-4 bg-blue-600 hover:bg-blue-500 rounded-full text-white text-base font-semibold font-['Arial'] transition-colors"
              >
                Book a Demo
              </Link>
              <Link
                href="/contact-sales"
                className="px-8 py-4 border border-white/30 hover:border-white/60 rounded-full text-white text-base font-semibold font-['Arial'] transition-colors"
              >
                Talk to Security &amp; IT
              </Link>
            </div>
          </Reveal>

          <Reveal delay={0.24}>
            <div className="flex flex-wrap items-center justify-center gap-6 pt-2 text-sm font-semibold font-['IBM_Plex_Sans']">
              <a
                href="/contact-support"
                className="text-indigo-400 hover:text-indigo-300 transition-colors"
              >
                Get Sign-In Help <span aria-hidden="true">→</span>
              </a>
              <a
                href="/documentation"
                className="text-indigo-400 hover:text-indigo-300 transition-colors"
              >
                Visit Documentation <span aria-hidden="true">→</span>
              </a>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
