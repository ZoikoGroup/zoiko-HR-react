"use client";

import { useState } from "react";
import Image from "next/image";
import { Container, Reveal } from "@/components/ui";

const ACTIVATION_STATES = [
  { id: 0, label: "Not configured", color: "bg-slate-500" },
  { id: 1, label: "Configured", color: "bg-sky-600" },
  { id: 2, label: "Test pending", color: "bg-amber-600" },
  { id: 3, label: "Test passed", color: "bg-sky-600" },
  { id: 4, label: "Authorization pending", color: "bg-amber-600" },
  { id: 5, label: "Ready for activation", color: "bg-emerald-600" },
  { id: 6, label: "Active — authorized", color: "bg-emerald-500" },
  { id: 7, label: "Degraded", color: "bg-rose-600" },
  { id: 8, label: "Suspended / revoked", color: "bg-violet-600" },
];

export function ActivationSafetySection() {
  const [selectedIdx, setSelectedIdx] = useState(6);

  return (
    <section className="bg-slate-900 text-white py-16 lg:py-24 border-t border-slate-800">
      <Container>
        <div className="space-y-12 max-w-6xl mx-auto">
          <div className="max-w-3xl space-y-3.5">
            <Reveal>
              <span className="text-blue-500 text-xs font-semibold uppercase tracking-widest font-['IBM_Plex_Sans']">
                Environment & Activation Safety
              </span>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="text-3xl lg:text-4xl font-extrabold text-white font-['Manrope'] leading-tight">
                Nine activation states — test success is never production authorization
              </h2>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="text-slate-400 text-sm font-normal font-['IBM_Plex_Sans'] leading-relaxed">
                Configuration, test, authorization, activation, runtime health and revocation are distinct states with distinct implications. Select a stage to see its criteria and implication.
              </p>
            </Reveal>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-4 space-y-2">
              {ACTIVATION_STATES.map((st) => {
                const isSelected = selectedIdx === st.id;
                return (
                  <Reveal key={st.id} delay={0.03 * st.id + 0.1}>
                    <button
                      onClick={() => setSelectedIdx(st.id)}
                      className={`w-full px-4 py-2.5 rounded-xl border text-left flex items-center gap-3 transition-all ${
                        isSelected
                          ? "bg-white/10 border-emerald-500 text-white shadow-lg"
                          : "bg-slate-950/40 border-white/10 text-white/60 hover:border-white/20 hover:text-white"
                      }`}
                    >
                      <span className={`w-2.5 h-2.5 rounded-full ${st.color}`} />
                      <span className="text-xs font-medium font-['IBM_Plex_Sans']">
                        {st.label}
                      </span>
                    </button>
                  </Reveal>
                );
              })}
            </div>

            <div className="lg:col-span-8 flex justify-center">
              <Reveal delay={0.2}>
                <div className="relative overflow-hidden w-full rounded-xl">
                  <Image
                    src="/images/integration-security/image 450.png"
                    alt="Nine Activation States Detail"
                    width={1060}
                    height={1060}
                    className=" object-contain rounded-xl"
                  />
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
