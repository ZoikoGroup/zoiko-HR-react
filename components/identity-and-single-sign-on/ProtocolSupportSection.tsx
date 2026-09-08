"use client";

import { Container, Reveal } from "@/components/ui";

export function ProtocolSupportSection() {
  return (
    <section className="bg-white py-16 lg:py-24">
      <Container>
        <div className="space-y-10 max-w-6xl mx-auto">
          <div className="max-w-2xl space-y-3.5">
            <Reveal>
              <h2 className="text-3xl lg:text-4xl font-extrabold text-sky-950 font-['Manrope'] leading-tight">
                Protocol support is a registry fact, not a default.
              </h2>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="text-slate-600 text-base font-normal font-['IBM_Plex_Sans'] leading-relaxed">
                Each connection family is available only where current product and security authority approve it for your plan and region.
              </p>
            </Reveal>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <Reveal delay={0.12}>
              <div className="h-full p-6 bg-white rounded-xl border border-slate-200 flex flex-col justify-between gap-4 shadow-sm hover:border-slate-300 transition-colors">
                <div className="space-y-3">
                  <div className="w-8 h-0.5 border-t-2 border-blue-600" />
                  <h3 className="text-sky-950 text-base font-bold font-['Manrope']">
                    SAML federation
                  </h3>
                  <p className="text-slate-500 text-sm font-normal font-['IBM_Plex_Sans'] leading-relaxed">
                    Browser-redirect, assertion-based sign-in for enterprise identity providers that support SAML 2.0.
                  </p>
                </div>
                <div className="px-2.5 py-2 bg-amber-100/80 rounded-md text-amber-800 text-xs font-semibold font-['IBM_Plex_Sans'] leading-4">
                  Registry-gated · plan &amp; region dependent
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="h-full p-6 bg-white rounded-xl border border-slate-200 flex flex-col justify-between gap-4 shadow-sm hover:border-slate-300 transition-colors">
                <div className="space-y-3">
                  <div className="w-8 h-0.5 border-t-2 border-blue-600" />
                  <h3 className="text-sky-950 text-base font-bold font-['Manrope']">
                    OIDC federation
                  </h3>
                  <p className="text-slate-500 text-sm font-normal font-['IBM_Plex_Sans'] leading-relaxed">
                    Token-based sign-in for identity providers that support OpenID Connect.
                  </p>
                </div>
                <div className="px-2.5 py-2 bg-amber-100/80 rounded-md text-amber-800 text-xs font-semibold font-['IBM_Plex_Sans'] leading-4">
                  Registry-gated · plan &amp; region dependent
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.28}>
              <div className="h-full min-h-[220px] bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm flex items-center justify-center relative">
                <img
                  src="/images/IDENTITY & SINGLE SIGN-ON/image 424.png"
                  alt="Protocol support graphic"
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
