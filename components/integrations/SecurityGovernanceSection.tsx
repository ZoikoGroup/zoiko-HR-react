"use client";

import { Container, Reveal } from "@/components/ui";

export function SecurityGovernanceSection() {
  return (
    <section className="bg-white py-16 lg:py-24">
      <Container>
        <div className="space-y-10 max-w-6xl mx-auto">
          <div className="space-y-3">
            <Reveal>
              <span className="text-blue-600 text-xs font-medium uppercase tracking-wider font-['IBM_Plex_Sans']">
                Security, Privacy &amp; Human Governance
              </span>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="text-3xl lg:text-4xl font-extrabold text-slate-950 font-['Manrope'] leading-tight max-w-2xl">
                Six governing principles — detailed controls belong to Integration Security
              </h2>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="text-slate-600 text-sm font-normal font-['Inter'] leading-relaxed max-w-xl">
                This panel summarizes the trust posture. Detailed authorization architecture, audit evidence and security controls belong to the Integration Security destination.
              </p>
            </Reveal>
          </div>

          <div className="grid gap-6 md:grid-cols-3 items-stretch">
            {/* Column 1 */}
            <div className="space-y-6 flex flex-col justify-between">
              <Reveal delay={0.12}>
                <div className="p-5 bg-slate-50 rounded-xl border border-slate-200 flex items-start gap-4 shadow-sm hover:border-slate-300 transition-colors h-full">
                  <span className="text-blue-600 text-xl font-normal font-['Inter'] shrink-0">
                    ◎
                  </span>
                  <div className="space-y-1.5">
                    <h3 className="text-slate-950 text-sm font-semibold font-['Inter']">
                      Explicit authorization
                    </h3>
                    <p className="text-slate-600 text-xs font-normal font-['Inter'] leading-relaxed">
                      Connections operate only within approved authorization and role boundaries. No default access is implied by being a Zoiko HR customer.
                    </p>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={0.24}>
                <div className="p-5 bg-slate-50 rounded-xl border border-slate-200 flex items-start gap-4 shadow-sm hover:border-slate-300 transition-colors h-full">
                  <span className="text-blue-600 text-xl font-normal font-['Inter'] shrink-0">
                    ◷
                  </span>
                  <div className="space-y-1.5">
                    <h3 className="text-slate-950 text-sm font-semibold font-['Inter']">
                      Auditability
                    </h3>
                    <p className="text-slate-600 text-xs font-normal font-['Inter'] leading-relaxed">
                      Material connection changes should be traceable where the implementation authority provides an audit trail. Retention periods are not invented.
                    </p>
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Column 2 - Center Graphic */}
            <Reveal delay={0.18}>
              <div className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden shadow-sm flex items-center justify-center h-full min-h-[280px]">
                <img
                  src="/images/integration-overview/image 436.png"
                  alt="Security governance graphic"
                  className="w-full h-auto object-cover"
                />
              </div>
            </Reveal>

            {/* Column 3 */}
            <div className="space-y-6 flex flex-col justify-between">
              <Reveal delay={0.16}>
                <div className="p-5 bg-slate-50 rounded-xl border border-slate-200 flex items-start gap-4 shadow-sm hover:border-slate-300 transition-colors h-full">
                  <span className="text-blue-600 text-xl font-normal font-['Inter'] shrink-0">
                    ◈
                  </span>
                  <div className="space-y-1.5">
                    <h3 className="text-slate-950 text-sm font-semibold font-['Inter']">
                      Source-of-truth discipline
                    </h3>
                    <p className="text-slate-600 text-xs font-normal font-['Inter'] leading-relaxed">
                      Connected systems do not silently become authoritative for records they do not own. Source ownership is explicit in every connection boundary record.
                    </p>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={0.28}>
                <div className="p-5 bg-slate-50 rounded-xl border border-slate-200 flex items-start gap-4 shadow-sm hover:border-slate-300 transition-colors h-full">
                  <span className="text-blue-600 text-xl font-normal font-['Inter'] shrink-0">
                    ⊙
                  </span>
                  <div className="space-y-1.5">
                    <h3 className="text-slate-950 text-sm font-semibold font-['Inter']">
                      Human control
                    </h3>
                    <p className="text-slate-600 text-xs font-normal font-['Inter'] leading-relaxed">
                      High-impact access and write permissions require source-approved authorization flows. No autonomous broadening of data scope.
                    </p>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>

          <Reveal delay={0.32}>
            <div className="px-6 py-4 bg-slate-50 rounded-xl border border-slate-200 flex items-center gap-4 text-xs font-['IBM_Plex_Sans'] shadow-sm">
              <span className="text-blue-600 text-lg font-normal shrink-0">→</span>
              <p className="text-slate-600 leading-relaxed">
                Authorization control detail, data minimization specifications, audit architecture and security certification evidence are owned by{" "}
                <span className="text-slate-950 font-semibold">Integration Security</span> — paused pending approval.
              </p>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
