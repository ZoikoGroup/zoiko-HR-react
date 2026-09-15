"use client";

import Image from "next/image";
import Link from "next/link";
import { Container, Reveal } from "@/components/ui";

const POSTURE_ROWS = [
  {
    state: "Approved public connector",
    dotBg: "bg-green-700",
    badgeBg: "bg-green-700/10 text-green-700",
    treatment: "Name, supported purpose/model, currentness and boundary summary from the approved Integration Catalog.",
    cta: "Open approved detail / setup / docs route",
    ctaColor: "text-blue-600 font-medium",
    href: "/documentation",
  },
  {
    state: "Supported model — vendor not public",
    dotBg: "bg-sky-700",
    badgeBg: "bg-sky-700/10 text-sky-700",
    treatment: "Describe the connection class and information boundary only. No vendor name or specific compatibility claim.",
    cta: "Talk to implementation / review docs",
    ctaColor: "text-sky-700 font-medium",
    href: "/contact",
  },
  {
    state: "Needs confirmation",
    dotBg: "bg-amber-700",
    badgeBg: "bg-amber-700/10 text-amber-700",
    treatment: "Availability depends on configuration, market, plan or provider. State this plainly without implying yes.",
    cta: "Confirm compatibility",
    ctaColor: "text-amber-700 font-medium",
    href: "/contact",
  },
  {
    state: "Not supported",
    dotBg: "bg-red-600",
    badgeBg: "bg-red-600/10 text-red-600",
    treatment: "Say so plainly when an approved source establishes this. No workaround language unless an approved alternative exists.",
    cta: "Alternative / manual path if approved",
    ctaColor: "text-gray-500 font-medium",
    href: "/contact",
  },
  {
    state: "Retired / superseded",
    dotBg: "bg-gray-500",
    badgeBg: "bg-gray-500/10 text-gray-500",
    treatment: "Do not present as current. Show replacement or history link when approved by the Integration Catalog.",
    cta: "Open current option",
    ctaColor: "text-blue-600 font-medium",
    href: "/documentation",
  },
];

export function ExternalConnectionPostureSection() {
  return (
    <section className="bg-white py-16 lg:py-24 border-t border-slate-200">
      <Container>
        <div className="space-y-12 max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-4 space-y-6">
              <Reveal>
                <span className="text-blue-600 text-xs font-medium font-['IBM_Plex_Sans'] uppercase leading-4 tracking-wider">
                  External Connection Posture
                </span>
              </Reveal>

              <Reveal delay={0.08}>
                <h2 className="text-3xl font-extrabold text-slate-950 font-['Manrope'] leading-10 max-w-[288px]">
                  Third-party compatibility — five states, no invented vendor directory
                </h2>
              </Reveal>

              <Reveal delay={0.16}>
                <div className="relative rounded-lg overflow-hidden bg-rose-300">
                  <Image
                    src="/images/integration-overview/image 435.png"
                    alt="External Third Party Compatibility States"
                    width={300}
                    height={450}
                    className="w-full h-auto object-cover rounded-lg"
                  />
                </div>
              </Reveal>
            </div>

            <div className="lg:col-span-8">
              <Reveal delay={0.12}>
                <div className="bg-white rounded-xl outline outline-1 outline-offset-[-1.01px] outline-slate-200 overflow-hidden">
                  <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                      <thead>
                        <tr className="border-b border-slate-200 bg-slate-50 text-xs font-medium text-slate-950 font-['IBM_Plex_Sans'] leading-5">
                          <th className="py-3 px-5">Availability state</th>
                          <th className="py-3 px-5">Public treatment</th>
                          <th className="py-3 px-5">CTA</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100 text-xs font-['IBM_Plex_Sans']">
                        {POSTURE_ROWS.map((row, idx) => (
                          <tr key={idx} className="hover:bg-slate-50/60 transition-colors">
                            <td className="py-5 px-5 whitespace-nowrap">
                              <span className={`px-2.5 py-1 rounded-full text-xs font-medium font-['IBM_Plex_Sans'] leading-4 inline-flex items-center gap-1.5 ${row.badgeBg}`}>
                                <span className={`w-1.5 h-1.5 rounded-full ${row.dotBg}`} />
                                {row.state}
                              </span>
                            </td>
                            <td className="py-5 px-5 text-slate-600 text-xs font-normal font-['IBM_Plex_Sans'] leading-5 max-w-sm">
                              {row.treatment}
                            </td>
                            <td className="py-5 px-5 whitespace-nowrap">
                              <Link href={row.href} className={`text-xs font-['IBM_Plex_Sans'] leading-4 hover:underline ${row.ctaColor}`}>
                                {row.cta}
                              </Link>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

