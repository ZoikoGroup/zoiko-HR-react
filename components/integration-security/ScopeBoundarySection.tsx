"use client";

import Image from "next/image";
import Link from "next/link";
import { Container, Reveal } from "@/components/ui";

const ADJACENT_BOUNDARIES = [
  {
    type: "out",
    text: "Which integrations exist or which connectors are available — owned by Integrations Overview.",
    href: "/integrations",
  },
  {
    type: "out",
    text: "SSO configuration, identity-provider support or account recovery — owned by Identity & Single Sign-On.",
    href: "/identity-and-single-sign-on",
  },
  {
    type: "out",
    text: "Import/export mapping, migration mechanics or execution — owned by Data Import & Export.",
    href: "/data-import-and-export",
  },
  {
    type: "out",
    text: "Certifications, encryption algorithms, incident program or broad security posture — owned by Security & Privacy / Trust Center.",
    href: "/trust-center",
  },
];

export function ScopeBoundarySection() {
  return (
    <section className="bg-white py-16 lg:py-24 border-b border-slate-200" id="security-controls">
      <Container>
        <div className="grid lg:grid-cols-12 gap-12 items-start max-w-6xl mx-auto">
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-3">
              <Reveal>
                <span className="text-blue-600 text-xs font-semibold uppercase tracking-widest font-['IBM_Plex_Sans']">
                  What Integration Security means
                </span>
              </Reveal>
              <Reveal delay={0.08}>
                <h2 className="text-3xl lg:text-4xl font-extrabold text-slate-950 font-['Manrope'] leading-tight">
                  Integration Security governs how an approved connection is authorized, minimized, monitored and evidenced.
                </h2>
              </Reveal>
            </div>

            <Reveal delay={0.16}>
              <div className="relative overflow-hidden rounded-xl">
                <Image
                  src="/images/integration-security/image 446.png"
                  alt="Scope Boundary Overview"
                  width={616}
                  height={411}
                  className="w-full object-contain rounded-xl"
                />
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-6 space-y-4">
            <Reveal>
              <span className="text-slate-400 text-xs font-semibold uppercase tracking-wider font-['IBM_Plex_Sans']">
                Scope boundary — what this page does and does not own
              </span>
            </Reveal>

            <Reveal delay={0.08}>
              <div className="p-4 bg-green-50 rounded-xl border border-green-200/80 flex items-start gap-3">
                <span className="text-green-800 font-bold text-base leading-none">✓</span>
                <p className="text-green-950 text-xs font-normal leading-relaxed">
                  Authorization, purpose, minimum necessary data, service identity, runtime state, exception, revocation and evidence for approved integrations.
                </p>
              </div>
            </Reveal>

            {ADJACENT_BOUNDARIES.map((item, idx) => (
              <Reveal key={idx} delay={0.05 * idx + 0.12}>
                <Link
                  href={item.href}
                  className="group block p-4 bg-red-50/70 hover:bg-red-50 rounded-xl border border-red-200/80 transition-colors"
                >
                  <div className="flex items-start gap-3">
                    <span className="text-red-800 font-bold text-base leading-none group-hover:translate-x-0.5 transition-transform">
                      →
                    </span>
                    <p className="text-red-950 text-xs font-normal leading-relaxed group-hover:underline">
                      {item.text}
                    </p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
