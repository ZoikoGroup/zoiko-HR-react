"use client";

import { useState } from "react";
import Image from "next/image";
import { Container, Reveal } from "@/components/ui";

const STEPS = ["Before revocation", "Executing", "After — observed"];

export function RevocationContainmentSection() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="bg-white py-16 lg:py-24 border-t border-slate-200">
      <Container>
        <div className="space-y-12 max-w-6xl mx-auto">
          <div className="max-w-3xl space-y-3.5">
            <Reveal>
              <span className="text-blue-600 text-xs font-semibold uppercase tracking-widest font-['IBM_Plex_Sans']">
                Revocation & Containment
              </span>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="text-3xl lg:text-4xl font-extrabold text-slate-950 font-['Manrope'] leading-tight">
                Requested revocation and observed downstream outcome are always distinct states
              </h2>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="text-slate-600 text-sm font-normal font-['IBM_Plex_Sans'] leading-relaxed">
                Authorization revoke, identity revoke, connection suspend and scope reduction are separate operations with different downstream consequences. Outstanding work is surfaced and handled explicitly — not silently abandoned.
              </p>
            </Reveal>

            <Reveal delay={0.16}>
              <div className="flex items-center gap-2 pt-2">
                {STEPS.map((s, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveStep(idx)}
                    className={`px-4 py-2 rounded-full text-xs font-medium font-['IBM_Plex_Sans'] transition-all ${
                      activeStep === idx
                        ? "bg-slate-950 text-white font-bold"
                        : "bg-slate-100 text-slate-600 hover:bg-slate-200 border border-slate-200"
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </Reveal>
          </div>

          <div className="grid md:grid-cols-3 gap-6 items-stretch">
            {/* Card 1: Review impact */}
            <Reveal delay={0.1}>
              <div className="p-6 bg-blue-50/50 rounded-xl border border-blue-200 space-y-4 h-full flex flex-col justify-between">
                <div className="space-y-3">
                  <span className="text-blue-600 text-xs font-semibold uppercase tracking-wider font-['IBM_Plex_Sans']">
                    1 · Review impact
                  </span>
                  <h3 className="text-slate-950 text-sm font-semibold font-['Manrope']">
                    Before acting: see what would be affected
                  </h3>

                  <div className="space-y-2 text-xs font-['IBM_Plex_Sans'] divide-y divide-slate-200/80 pt-1">
                    <div className="pt-2 flex justify-between">
                      <span className="text-slate-600">Active connections using identity</span>
                      <span className="font-mono text-slate-950 font-bold">2</span>
                    </div>
                    <div className="pt-2 flex justify-between">
                      <span className="text-slate-600">In-flight data exchange jobs</span>
                      <span className="font-mono text-slate-950 font-bold">1 pending</span>
                    </div>
                    <div className="pt-2 flex justify-between">
                      <span className="text-slate-600">Scheduled sync tasks</span>
                      <span className="font-mono text-slate-950 font-bold">3 queued</span>
                    </div>
                    <div className="pt-2 flex justify-between">
                      <span className="text-slate-600">Downstream dependencies</span>
                      <span className="font-mono text-slate-950 font-bold">1 known</span>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Card 2: Execute & observe */}
            <Reveal delay={0.16}>
              <div className="p-6 bg-slate-50 rounded-xl border border-slate-200 space-y-4 h-full flex flex-col justify-between">
                <div className="space-y-3">
                  <span className="text-amber-700 text-xs font-semibold uppercase tracking-wider font-['IBM_Plex_Sans']">
                    2 · Execute & observe
                  </span>
                  <h3 className="text-slate-950 text-sm font-semibold font-['Manrope']">
                    Requested action vs observed result
                  </h3>

                  <div className="space-y-2 text-xs font-['IBM_Plex_Sans'] pt-1">
                    <div className="p-2 bg-green-50 rounded border border-green-200 flex justify-between items-center">
                      <span className="text-green-950">Local record</span>
                      <span className="text-green-800 font-bold">Revoked ✓</span>
                    </div>
                    <div className="p-2 bg-amber-50 rounded border border-amber-200 flex justify-between items-center">
                      <span className="text-amber-900">Runtime auth state</span>
                      <span className="text-amber-800 font-medium">Observing…</span>
                    </div>
                    <div className="p-2 bg-amber-50 rounded border border-amber-200 flex justify-between items-center">
                      <span className="text-amber-900">Downstream target</span>
                      <span className="text-amber-800 font-medium">Pending ack</span>
                    </div>
                  </div>
                </div>

                <div className="p-2 bg-rose-50 rounded border border-rose-200 text-rose-900 text-xs leading-relaxed font-['IBM_Plex_Sans']">
                  Local revoke ≠ session/job termination. Observation required.
                </div>
              </div>
            </Reveal>

            {/* Card 3: Observed outcome image */}
            <Reveal delay={0.22}>
              <div className="overflow-hidden h-full flex flex-col justify-center rounded-xl">
                <Image
                  src="/images/integration-security/image 452.png"
                  alt="Observed Downstream State"
                  width={469}
                  height={313}
                  className="w-full object-contain rounded-xl"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
