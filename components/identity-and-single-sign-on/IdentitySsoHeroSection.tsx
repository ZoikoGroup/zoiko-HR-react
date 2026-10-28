"use client";

import Link from "next/link";
import { Container, Reveal } from "@/components/ui";

export function IdentitySsoHeroSection() {
  return (
    <section className="relative overflow-hidden bg-slate-950 bg-radial-[at_50%_0%] from-cyan-900 via-sky-950 via-55% to-slate-900 py-16 lg:py-24 text-white">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-12">
          <div className="lg:col-span-6 space-y-6">
            <Reveal>
              <span className="text-indigo-400 text-xs font-bold uppercase tracking-wider font-['IBM_Plex_Sans']">
                IDENTITY &amp; SINGLE SIGN-ON
              </span>
            </Reveal>

            <Reveal delay={0.08}>
              <h1 className="text-3xl sm:text-4xl lg:text-4xl font-extrabold font-['Manrope'] leading-tight tracking-tight text-white">
                Connect approved identity providers. Keep access decisions controlled.
              </h1>
            </Reveal>

            <Reveal delay={0.16}>
              <p className="text-slate-300 text-base font-normal font-['IBM_Plex_Sans'] leading-relaxed max-w-xl">
                Use current approved identity-provider relationships and governed sign-in controls while keeping authentication, workforce identity, roles, permissions and application access visibly separate.
              </p>
            </Reveal>

            <Reveal delay={0.24}>
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  href="/book-a-demo"
                  className="px-7 py-3.5 bg-blue-600 hover:bg-blue-500 rounded-full text-white text-base font-semibold font-['IBM_Plex_Sans'] transition-colors"
                >
                  Explore Identity Controls
                </Link>
                <a
                  href="#sso-setup"
                  className="px-7 py-3.5 bg-white/10 hover:bg-white/20 rounded-full border border-white/30 text-white text-base font-semibold font-['IBM_Plex_Sans'] transition-colors"
                >
                  See SSO Setup &amp; Testing
                </a>
              </div>
            </Reveal>

            <Reveal delay={0.32}>
              <div className="pt-1">
                <a
                  href="#provider-registry"
                  className="inline-flex items-center gap-1 text-indigo-400 hover:text-indigo-300 text-sm font-semibold font-['IBM_Plex_Sans'] transition-colors"
                >
                  Explore Provider Directory <span aria-hidden="true">→</span>
                </a>
              </div>
            </Reveal>

            <Reveal delay={0.4}>
              <p className="text-slate-400 text-xs font-normal font-['IBM_Plex_Sans'] leading-5 max-w-lg">
                Exact providers, connection methods, MFA and provisioning behavior depend on current approved Zoiko HR identity and product configuration.
              </p>
            </Reveal>
          </div>

          <div className="lg:col-span-6">
            <Reveal delay={0.2} y={30}>
              <div className="relative w-full rounded-2xl bg-slate-900 border border-blue-950 shadow-[0px_30px_60px_0px_rgba(0,0,0,0.4)] overflow-hidden">
                <img
                  src="/images/IDENTITY & SINGLE SIGN-ON/image 423.png"
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
