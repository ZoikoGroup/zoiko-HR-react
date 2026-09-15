"use client";

import { useState } from "react";
import Image from "next/image";
import { Container, Reveal } from "@/components/ui";

const SETUP_STEPS = [
  { id: 1, label: "Import purpose" },
  { id: 2, label: "Environment" },
  { id: 3, label: "Source" },
  { id: 4, label: "Object scope" },
  { id: 5, label: "File / payload" },
  { id: 6, label: "Schema version" },
  { id: 7, label: "Mapping version" },
  { id: 8, label: "Effective context" },
  { id: 9, label: "Idempotency key" },
  { id: 10, label: "Review" },
];

export function ImportSetupSection() {
  const [activeStep, setActiveStep] = useState(7);

  return (
    <section id="import-setup" className="bg-sky-950 py-16 lg:py-24 text-white">
      <Container>
        <div className="space-y-10 max-w-6xl mx-auto">
          <div className="max-w-2xl space-y-3.5">
            <Reveal>
              <span className="text-indigo-400 text-xs font-bold uppercase tracking-wider font-['IBM_Plex_Sans']">
                SCREEN B — IMPORT SETUP
              </span>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="text-3xl lg:text-4xl font-extrabold text-white font-['Manrope'] leading-tight">
                Every import starts from the same ten-step setup.
              </h2>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="text-slate-300 text-base font-normal font-['IBM_Plex_Sans'] leading-relaxed">
                File/batch or another approved mode — purpose, environment, source and object scope are all locked in before a single field gets mapped. Nothing here implies a connector or API that isn&apos;t approved.
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.24}>
            <div className="bg-blue-950 rounded-2xl  overflow-hidden  grid lg:grid-cols-12">
              {/* Sidebar Steps */}
              <div className="lg:col-span-4 p-4 bg-slate-900 space-y-1 ">
                {SETUP_STEPS.map((step) => {
                  const isActive = activeStep === step.id;
                  return (
                    <button
                      key={step.id}
                      onClick={() => setActiveStep(step.id)}
                      className={`w-full px-3 py-2.5 rounded-lg flex items-center gap-2.5 text-left text-sm font-semibold transition-colors ${
                        isActive
                          ? "bg-blue-950 text-white"
                          : "text-slate-400 hover:text-slate-200 hover:bg-slate-800/50"
                      }`}
                    >
                      <span
                        className={`w-1.5 h-1.5 rounded-full ${
                          isActive ? "bg-teal-400" : "bg-slate-600"
                        }`}
                      />
                      <span className="w-5 text-right font-['Arial']">{step.id}</span>
                      <span className="font-['Arial'] truncate">{step.label}</span>
                    </button>
                  );
                })}
              </div>

              {/* Right Screenshot Graphic */}
              <div className="lg:col-span-8 bg-slate-900 overflow-hidden flex items-center justify-center p-2">
                <Image
                  src="/images/data-import-and-export/image 439.png"
                  alt="Import setup 10-step UI screenshot"
                  width={958}
                  height={638}
                  className=" object-contain rounded-lg"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
