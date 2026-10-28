"use client";

import { useState } from "react";
import { Container, Reveal } from "@/components/ui";

const CONFIG_STEPS = [
  { id: 1, label: "Select provider" },
  { id: 2, label: "Configure" },
  { id: 3, label: "Map attributes" },
  { id: 4, label: "Validate" },
  { id: 5, label: "Test" },
  { id: 6, label: "Recovery readiness" },
  { id: 7, label: "Impact preview" },
  { id: 8, label: "Activate" },
];

export function ConfiguringSsoSection() {
  const [activeStep, setActiveStep] = useState(5);

  return (
    <section id="sso-setup" className="bg-sky-950 py-16 lg:py-24 text-white">
      <Container>
        <div className="space-y-10 max-w-6xl mx-auto">
          <div className="max-w-2xl space-y-3.5">
            <Reveal>
              <span className="text-indigo-400 text-xs font-bold uppercase tracking-wider font-['IBM_Plex_Sans']">
                PRODUCT PROOF
              </span>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="text-3xl lg:text-4xl font-extrabold text-white font-['Manrope'] leading-tight">
                Configuring SSO is a versioned, tested, reversible sequence.
              </h2>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="text-slate-300 text-base font-normal font-['IBM_Plex_Sans'] leading-relaxed">
                Every step references an explicit configuration version, and required enforcement only activates once validation, testing and recovery readiness all pass.
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.24}>
            <div className="bg-slate-900 rounded-2xl border border-blue-950 overflow-hidden shadow-2xl">
              {/* Header Status Bar */}
              <div className="px-5 py-4 border-b border-blue-950 flex flex-wrap items-center justify-between gap-4 bg-slate-900/90">
                <div className="text-xs font-semibold font-['IBM_Plex_Sans']">
                  <span className="text-white">SAML 2.0 identity provider · config v3-draft </span>
                  <span className="text-slate-400">· unsaved changes</span>
                </div>
                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-2.5 py-1 bg-teal-400/10 rounded-md text-teal-400 text-xs font-semibold">
                    ✓ Config version pinned
                  </span>
                  <span className="px-2.5 py-1 bg-teal-400/10 rounded-md text-teal-400 text-xs font-semibold">
                    ✓ Test evidence recorded
                  </span>
                  <span className="px-2.5 py-1 bg-teal-400/10 rounded-md text-teal-400 text-xs font-semibold">
                    ✓ Recovery readiness confirmed
                  </span>
                </div>
              </div>

              {/* Main Content Area */}
              <div className="grid lg:grid-cols-12 bg-blue-950">
                {/* Step Navigation Sidebar */}
                <div className="lg:col-span-4 p-4 bg-slate-900 space-y-1.5 border-r border-blue-950">
                  {CONFIG_STEPS.map((step) => {
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
                          className={`w-2 h-2 rounded-full ${
                            isActive ? "bg-teal-400" : "bg-slate-600"
                          }`}
                        />
                        <span>{step.id}</span>
                        <span>{step.label}</span>
                      </button>
                    );
                  })}
                </div>

                {/* Right Image Graphic */}
                <div className="lg:col-span-8 bg-slate-900 overflow-hidden flex items-center justify-center p-2">
                  <img
                    src="/images/IDENTITY & SINGLE SIGN-ON/image 426.png"
                    alt="Configuring SSO step proof preview"
                    className="w-full h-auto object-cover rounded-lg"
                  />
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
