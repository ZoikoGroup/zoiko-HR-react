"use client";

import Image from "next/image";
import Link from "next/link";
import { Container, Reveal } from "@/components/ui";

export function IntegrationSecurityHeroSection() {
  return (
    <section className="relative bg-radial-[at_50%_0%] from-cyan-900 via-sky-950 via-55% to-slate-900 text-white py-16 lg:py-24 overflow-hidden">
      <Container>
        <div className="grid lg:grid-cols-12 gap-12 items-center max-w-6xl mx-auto">
          <div className="lg:col-span-6 space-y-6">
            <Reveal>
              <span className="text-blue-500 text-xs font-semibold uppercase tracking-widest font-['IBM_Plex_Sans']">
                Integration Security
              </span>
            </Reveal>

            <Reveal delay={0.08}>
              <h1 className="text-4xl sm:text-5xl font-extrabold text-white font-['Manrope'] leading-[1.15]">
                Authorize every connection. Minimize every information flow.
              </h1>
            </Reveal>

            <Reveal delay={0.12}>
              <p className="text-white/70 text-base font-normal leading-relaxed">
                Govern approved Zoiko HR integrations with explicit purpose, authorization, minimum necessary data, service-identity context, revocation and traceable evidence. Exact technical controls and assurance claims must match current approved security and product sources.
              </p>
            </Reveal>

            <Reveal delay={0.16}>
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <Link
                  href="#security-controls"
                  className="px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold rounded-md transition-colors inline-flex items-center gap-2"
                >
                  Explore security controls →
                </Link>
                <Link
                  href="#authorization-model"
                  className="px-5 py-2.5 border border-white/20 hover:border-white/40 text-white/80 hover:text-white text-sm font-semibold rounded-md transition-colors"
                >
                  Review authorization model
                </Link>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="flex items-center gap-4 text-xs font-semibold pt-2">
                <Link href="/trust-center" className="text-blue-500 hover:underline">
                  Security & Privacy / Trust Center →
                </Link>
                <Link href="/contact" className="text-white/50 hover:text-white/80 transition-colors">
                  Book a demo →
                </Link>
              </div>
            </Reveal>

            <Reveal delay={0.24}>
              <p className="text-white/40 text-xs font-normal leading-relaxed pt-2">
                Authorization, data minimization and auditability. Exact controls and assurance claims are source-governed — this page does not invent encryption algorithms, certifications or SLAs.
              </p>
            </Reveal>
          </div>

          <div className="lg:col-span-6 flex justify-center">
            <Reveal delay={0.2}>
              <div className="relative w-full overflow-hidden rounded-xl">
                <Image
                  src="/images/integration-security/image 445.png"
                  alt="Integration Security Interface Overview"
                  width={640}
                  height={540}
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
