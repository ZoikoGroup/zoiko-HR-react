"use client";

import { Container, Reveal } from "@/components/ui";

export function AttributeMappingSection() {
  return (
    <section className="bg-white py-16 lg:py-24">
      <Container>
        <div className="space-y-10 max-w-6xl mx-auto">
          <div className="max-w-2xl space-y-3.5">
            <Reveal>
              <h2 className="text-3xl lg:text-4xl font-extrabold text-sky-950 font-['Manrope'] leading-tight">
                A mapped attribute is never automatic business authority.
              </h2>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="text-slate-600 text-base font-normal font-['IBM_Plex_Sans'] leading-relaxed">
                Every attribute or claim follows a versioned, owned mapping — with an explicit conflict rule and an effective state before it touches any account.
              </p>
            </Reveal>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="space-y-6">
              <Reveal delay={0.12}>
                <div className="p-5 bg-white rounded-xl border border-slate-200 space-y-2 shadow-sm">
                  <h3 className="text-sky-950 text-sm font-bold font-['IBM_Plex_Sans']">
                    Mapping identity
                  </h3>
                  <p className="text-slate-500 text-xs font-normal font-['IBM_Plex_Sans'] leading-relaxed">
                    Every mapping carries a stable ID and version — nothing maps silently or anonymously.
                  </p>
                </div>
              </Reveal>

              <Reveal delay={0.2}>
                <div className="p-5 bg-white rounded-xl border border-slate-200 space-y-2 shadow-sm">
                  <h3 className="text-sky-950 text-sm font-bold font-['IBM_Plex_Sans']">
                    Conflict handling
                  </h3>
                  <p className="text-slate-500 text-xs font-normal font-['IBM_Plex_Sans'] leading-relaxed">
                    A declared source wins, or the conflict is blocked for manual review — never resolved by a &quot;most recent timestamp&quot; shortcut.
                  </p>
                </div>
              </Reveal>
            </div>

            <div className="space-y-6">
              <Reveal delay={0.16}>
                <div className="p-5 bg-white rounded-xl border border-slate-200 space-y-2 shadow-sm">
                  <h3 className="text-sky-950 text-sm font-bold font-['IBM_Plex_Sans']">
                    Source &amp; target
                  </h3>
                  <p className="text-slate-500 text-xs font-normal font-['IBM_Plex_Sans'] leading-relaxed">
                    An approved source attribute class maps to a specific, approved Zoiko HR identity field — exact sensitive values stay out of public proof.
                  </p>
                </div>
              </Reveal>

              <Reveal delay={0.24}>
                <div className="p-5 bg-white rounded-xl border border-slate-200 space-y-2 shadow-sm">
                  <h3 className="text-sky-950 text-sm font-bold font-['IBM_Plex_Sans']">
                    Effective state
                  </h3>
                  <p className="text-slate-500 text-xs font-normal font-['IBM_Plex_Sans'] leading-relaxed">
                    Draft, current, scheduled or retired — each mapping’s state is visible before it affects any account.
                  </p>
                </div>
              </Reveal>
            </div>

            <Reveal delay={0.28}>
              <div className="h-full bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm flex items-center justify-center min-h-[240px]">
                <img
                  src="/images/IDENTITY & SINGLE SIGN-ON/image 427.png"
                  alt="Attribute mapping preview"
                  className="w-full h-full object-cover"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
