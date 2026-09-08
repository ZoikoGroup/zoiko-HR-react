"use client";

import { Container, Reveal } from "@/components/ui";

const PROVISIONING_ITEMS = [
  {
    title: "Create",
    desc: "A source request produces a target result tracked to a usable or unknown state — a create request is never itself treated as a usable account.",
  },
  {
    title: "Disable",
    desc: "A request is tracked separately from its observed effect on application access or sessions.",
  },
  {
    title: "Manual exception",
    desc: "Carries an owner, a reason and a review or expiry date, and stays visible in currentness reporting.",
  },
];

export function AutomaticProvisioningSection() {
  return (
    <section className="bg-slate-100 py-16 lg:py-24">
      <Container>
        <div className="space-y-8 max-w-6xl mx-auto">
          <div className="max-w-2xl space-y-3.5">
            <Reveal>
              <h2 className="text-3xl lg:text-4xl font-extrabold text-sky-950 font-['Manrope'] leading-tight">
                Automatic provisioning is shown only when it&apos;s actually approved.
              </h2>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="text-slate-600 text-base font-normal font-['IBM_Plex_Sans'] leading-relaxed">
                If directory-driven account lifecycle events are supported, each one is tracked as a separate, observed outcome — never assumed as a universal &quot;synced&quot; success.
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.16}>
            <div className="p-4 bg-amber-100/90 rounded-xl border border-amber-200/90 text-amber-900 text-xs font-semibold font-['IBM_Plex_Sans'] leading-relaxed shadow-sm">
              Feature-truth gate: a provisioning or lifecycle-sync interface appears only where a separately approved product capability confirms it — nothing here implies automatic account creation, updates or deprovisioning by default.
            </div>
          </Reveal>

          <div className="grid items-start gap-8 lg:grid-cols-12">
            <div className="lg:col-span-6 space-y-4">
              {PROVISIONING_ITEMS.map((item, idx) => (
                <Reveal key={idx} delay={0.08 * idx + 0.2}>
                  <div className="p-5 bg-white rounded-xl border border-slate-200 space-y-2 shadow-sm hover:border-slate-300 transition-colors">
                    <h3 className="text-sky-950 text-sm font-bold font-['IBM_Plex_Sans']">
                      {item.title}
                    </h3>
                    <p className="text-slate-500 text-xs font-normal font-['IBM_Plex_Sans'] leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>

            <div className="lg:col-span-6">
              <Reveal delay={0.24}>
                <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm flex items-center justify-center">
                  <img
                    src="/images/IDENTITY & SINGLE SIGN-ON/image 428.png"
                    alt="Automatic provisioning preview graphic"
                    className="w-full h-auto object-cover"
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
