"use client";

import Image from "next/image";
import Link from "next/link";
import { Container, Reveal } from "@/components/ui";

const GOVERNANCE_CARDS = [
  {
    icon: "◎",
    title: "Explicit authorization",
    desc: "Connections operate only within approved authorization and role boundaries. No default access is implied by being a Zoiko HR customer.",
  },
  {
    icon: "◈",
    title: "Source-of-truth discipline",
    desc: "Connected systems do not silently become authoritative for records they do not own. Source ownership is explicit in every connection boundary record.",
  },
  {
    icon: "◷",
    title: "Auditability",
    desc: "Material connection changes should be traceable where the implementation authority provides an audit trail. Retention periods are not invented.",
  },
  {
    icon: "⊙",
    title: "Human control",
    desc: "High-impact access and write permissions require source-approved authorization flows. No autonomous broadening of data scope.",
  },
];

export function HumanGovernanceSection() {
  return (
    <section className="bg-white py-16 lg:py-24 border-t border-slate-200">
      <Container>
        <div className="space-y-12 max-w-6xl mx-auto">
          <div className="space-y-3">
            <Reveal>
              <span className="text-blue-600 text-xs font-medium font-['IBM_Plex_Sans'] uppercase leading-4 tracking-wider">
                Security, Privacy & Human Governance
              </span>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="text-3xl lg:text-4xl font-extrabold text-slate-950 font-['Manrope'] leading-10 max-w-[560px]">
                Six governing principles — detailed controls belong to Integration Security
              </h2>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="text-slate-600 text-sm font-normal font-['IBM_Plex_Sans'] leading-5 max-w-[520px]">
                This panel summarizes the trust posture. Detailed authorization architecture, audit evidence and security controls belong to the Integration Security destination.
              </p>
            </Reveal>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 items-center">
            {/* Left 2 Cards */}
            <div className="lg:col-span-4 space-y-6">
              <Reveal delay={0.14}>
                <div className="p-5 bg-slate-50 rounded-xl outline outline-1 outline-offset-[-1.01px] outline-slate-200 space-y-2 flex items-start gap-4">
                  <span className="text-blue-600 font-normal font-['IBM_Plex_Sans'] text-xl leading-8 shrink-0">{GOVERNANCE_CARDS[0].icon}</span>
                  <div className="space-y-1.5">
                    <h3 className="text-slate-950 text-sm font-semibold font-['IBM_Plex_Sans'] leading-5">{GOVERNANCE_CARDS[0].title}</h3>
                    <p className="text-slate-600 text-xs font-normal font-['IBM_Plex_Sans'] leading-5">{GOVERNANCE_CARDS[0].desc}</p>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={0.18}>
                <div className="p-5 bg-slate-50 rounded-xl outline outline-1 outline-offset-[-1.01px] outline-slate-200 space-y-2 flex items-start gap-4">
                  <span className="text-blue-600 font-normal font-['IBM_Plex_Sans'] text-xl leading-8 shrink-0">{GOVERNANCE_CARDS[2].icon}</span>
                  <div className="space-y-1.5">
                    <h3 className="text-slate-950 text-sm font-semibold font-['IBM_Plex_Sans'] leading-5">{GOVERNANCE_CARDS[2].title}</h3>
                    <p className="text-slate-600 text-xs font-normal font-['IBM_Plex_Sans'] leading-5">{GOVERNANCE_CARDS[2].desc}</p>
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Center Image */}
            <div className="lg:col-span-4 flex justify-center">
              <Reveal delay={0.16}>
                <div className="relative rounded-xl outline outline-1 outline-offset-[-1.01px] outline-slate-200 bg-slate-50 overflow-hidden">
                  <Image
                    src="/images/integration-overview/image 436.png"
                    alt="Governance Principles Visual"
                    width={413}
                    height={516}
                    className=" object-cover rounded-xl"
                  />
                </div>
              </Reveal>
            </div>

            {/* Right 2 Cards */}
            <div className="lg:col-span-4 space-y-6">
              <Reveal delay={0.16}>
                <div className="p-5 bg-slate-50 rounded-xl outline outline-1 outline-offset-[-1.01px] outline-slate-200 space-y-2 flex items-start gap-4">
                  <span className="text-blue-600 font-normal font-['IBM_Plex_Sans'] text-xl leading-8 shrink-0">{GOVERNANCE_CARDS[1].icon}</span>
                  <div className="space-y-1.5">
                    <h3 className="text-slate-950 text-sm font-semibold font-['IBM_Plex_Sans'] leading-5">{GOVERNANCE_CARDS[1].title}</h3>
                    <p className="text-slate-600 text-xs font-normal font-['IBM_Plex_Sans'] leading-5">{GOVERNANCE_CARDS[1].desc}</p>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={0.2}>
                <div className="p-5 bg-slate-50 rounded-xl outline outline-1 outline-offset-[-1.01px] outline-slate-200 space-y-2 flex items-start gap-4">
                  <span className="text-blue-600 font-normal font-['IBM_Plex_Sans'] text-xl leading-8 shrink-0">{GOVERNANCE_CARDS[3].icon}</span>
                  <div className="space-y-1.5">
                    <h3 className="text-slate-950 text-sm font-semibold font-['IBM_Plex_Sans'] leading-5">{GOVERNANCE_CARDS[3].title}</h3>
                    <p className="text-slate-600 text-xs font-normal font-['IBM_Plex_Sans'] leading-5">{GOVERNANCE_CARDS[3].desc}</p>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>

          <Reveal delay={0.24}>
            <div className="px-6 py-4 bg-slate-50 rounded-xl outline outline-1 outline-offset-[-1.01px] outline-slate-200 flex items-center gap-4">
              <span className="text-blue-600 text-lg font-normal font-['IBM_Plex_Sans'] leading-7">→</span>
              <p className="text-xs font-medium font-['IBM_Plex_Sans'] leading-5">
                <span className="text-slate-600">Authorization control detail, data minimization specifications, audit architecture and security certification evidence are owned by </span>
                <Link href="/integration-security" className="text-slate-950 font-medium hover:underline">
                  Integration Security
                </Link>
                <span className="text-slate-600"> — paused pending approval.</span>
              </p>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

