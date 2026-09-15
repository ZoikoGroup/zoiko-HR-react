"use client";

import { Container, Reveal } from "@/components/ui";

const REGISTRY_ITEMS = [
  {
    providerClass: "SAML 2.0 identity provider",
    connectionFamily: "SAML federation",
    availabilityScope: "Enterprise plan · all approved regions",
    reviewDue: "Feb 1, 2027",
    claimState: "APPROVED & CURRENT",
    badgeStyle: "bg-emerald-50 text-teal-600",
  },
  {
    providerClass: "OIDC identity provider",
    connectionFamily: "OIDC federation",
    availabilityScope: "Enterprise plan · all approved regions",
    reviewDue: "Feb 1, 2027",
    claimState: "APPROVED & CURRENT",
    badgeStyle: "bg-emerald-50 text-teal-600",
  },
  {
    providerClass: "Directory-based provider (SCIM)",
    connectionFamily: "Directory sync",
    availabilityScope: "Enterprise plan · approval required",
    reviewDue: "Oct 1, 2026",
    claimState: "REVIEW DUE",
    badgeStyle: "bg-amber-100 text-amber-700",
  },
  {
    providerClass: "Legacy federation provider",
    connectionFamily: "Legacy SAML 1.1",
    availabilityScope: "Migration only · not for new setup",
    reviewDue: "—",
    claimState: "DEPRECATED",
    badgeStyle: "bg-gray-100 text-slate-400",
  },
  {
    providerClass: "Unlisted / custom provider",
    connectionFamily: "Not yet registered",
    availabilityScope: "Requires registry approval",
    reviewDue: "—",
    claimState: "UNAVAILABLE",
    badgeStyle: "bg-gray-100 text-slate-400",
  },
];

export function ProviderRegistrySection() {
  return (
    <section id="provider-registry" className="bg-slate-100 py-16 lg:py-24">
      <Container>
        <div className="space-y-8 max-w-6xl mx-auto">
          <div className="max-w-2xl space-y-3.5">
            <Reveal>
              <h2 className="text-3xl lg:text-4xl font-extrabold text-sky-950 font-['Manrope'] leading-tight">
                Every connection comes from one approved registry.
              </h2>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="text-slate-600 text-base font-normal font-['IBM_Plex_Sans'] leading-relaxed">
                Provider class, connection family, availability and review status are shown exactly as the Identity Provider Registry defines them — nothing here is a logo wall or a sales claim.
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.16}>
            <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse min-w-[700px]">
                  <thead>
                    <tr className="bg-slate-100 text-slate-400 text-xs font-semibold font-['IBM_Plex_Sans'] border-b border-slate-200">
                      <th className="px-5 py-3.5 w-1/4">Provider class</th>
                      <th className="px-5 py-3.5 w-1/5">Connection family</th>
                      <th className="px-5 py-3.5 w-1/4">Availability scope</th>
                      <th className="px-5 py-3.5 w-1/6">Review due</th>
                      <th className="px-5 py-3.5">Public claim state</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100 text-xs font-['IBM_Plex_Sans']">
                    {REGISTRY_ITEMS.map((item, idx) => (
                      <tr key={idx} className="hover:bg-slate-50/50 transition-colors">
                        <td className="px-5 py-4 font-semibold text-sky-950 text-sm">
                          {item.providerClass}
                        </td>
                        <td className="px-5 py-4 text-slate-500 font-normal">
                          {item.connectionFamily}
                        </td>
                        <td className="px-5 py-4 text-slate-500 font-normal">
                          {item.availabilityScope}
                        </td>
                        <td className="px-5 py-4 text-slate-500 font-normal">
                          {item.reviewDue}
                        </td>
                        <td className="px-5 py-4">
                          <span
                            className={`inline-block px-2.5 py-1 rounded-md text-[11px] font-bold ${item.badgeStyle}`}
                          >
                            {item.claimState}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.24}>
            <p className="text-slate-500 text-xs font-normal font-['IBM_Plex_Sans'] leading-5 max-w-3xl">
              Provider names and logos render only from the current approved Identity Provider Registry; connection classes are shown here in place of vendor branding.
            </p>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
