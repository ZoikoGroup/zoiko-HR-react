"use client";

import { Container, Reveal } from "@/components/ui";

const CARDS = [
  {
    title: "Integration Security",
    desc: "Owns authorization, data minimization, secure transfer and integration auditability once approved.",
    badge: "PAUSED — pending approval",
    badgeStyle: "bg-gray-100 text-slate-400",
  },
  {
    title: "Trust Center",
    desc: "Approved security, privacy, governance and availability information for the whole platform.",
    badge: "APPROVED & LOCKED",
    badgeStyle: "bg-emerald-50 text-teal-600",
  },
  {
    title: "Security & Privacy",
    desc: "Access controls, auditability and incident-response detail for Zoiko HR as a whole.",
    badge: "APPROVED & LOCKED",
    badgeStyle: "bg-emerald-50 text-teal-600",
  },
];

export function SecurityBoundarySection() {
  return (
    <section className="bg-white py-16 lg:py-24 border-t border-slate-200">
      <Container>
        <div className="space-y-8 max-w-6xl mx-auto">
          <div className="max-w-3xl space-y-3.5">
            <Reveal>
              <h2 className="text-3xl lg:text-4xl font-extrabold text-sky-950 font-['Manrope'] leading-tight">
                Secure transfer and audit detail belong to Integration Security.
              </h2>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="text-slate-600 text-base font-normal font-['IBM_Plex_Sans'] leading-relaxed">
                This page proves governed data movement — it doesn&apos;t anticipate a security or compliance claim that hasn&apos;t been approved yet.
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.12}>
            <div className="p-4 bg-orange-100/80 rounded-xl border border-orange-200 text-amber-900 text-xs font-semibold font-['IBM_Plex_Sans'] leading-relaxed">
              Feature-truth gate: authorization, data-minimization, secure-transfer and auditability detail is owned by Integration Security once that destination is approved — nothing here duplicates or anticipates those claims.
            </div>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-6 pt-2">
            {CARDS.map((card, idx) => (
              <Reveal key={idx} delay={0.06 * idx + 0.16}>
                <div className="p-6 rounded-xl border border-slate-200 bg-white space-y-4 shadow-sm flex flex-col justify-between h-full">
                  <div className="space-y-3">
                    <div className="w-8 h-0.5 bg-blue-600" />
                    <h3 className="text-sky-950 text-base font-bold font-['Manrope']">
                      {card.title}
                    </h3>
                    <p className="text-slate-500 text-xs font-normal font-['IBM_Plex_Sans'] leading-relaxed">
                      {card.desc}
                    </p>
                  </div>

                  <div className={`px-3 py-2 rounded-md text-xs font-semibold font-['IBM_Plex_Sans'] ${card.badgeStyle}`}>
                    {card.badge}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
