"use client";

import { useState } from "react";
import { Container, Reveal } from "@/components/ui";

const FAQ_ITEMS = [
  {
    q: "Which identity providers does Zoiko HR support?",
    a: "Zoiko HR lists only identity providers that are current and approved in its Identity Provider Registry for your product scope — this page does not establish support for any specific provider by itself.",
  },
  {
    q: "Does Zoiko HR support SAML or OIDC?",
    a: "Yes, SAML 2.0 and OpenID Connect (OIDC) protocols are supported where current registry configuration and region policy explicitly authorize them.",
  },
  {
    q: "Does signing in with SSO give a user access to HR data?",
    a: "No. Authentication establishes identity only; application roles, domain permissions, and access controls remain strictly governed inside Zoiko HR separately.",
  },
  {
    q: "Does Zoiko HR support automatic account provisioning?",
    a: "Automatic provisioning via SCIM or directory sync is supported only when an approved provisioning capability is licensed and configured for your plan.",
  },
  {
    q: "What happens if the identity provider is unavailable?",
    a: "Designated administrative break-glass credentials and fallback authentication procedures ensure access recovery during third-party identity outages.",
  },
  {
    q: "Is ZoikoID required to use single sign-on?",
    a: "No. ZoikoID is an ecosystem identity reference, not a mandatory prerequisite for connecting third-party SAML or OIDC providers.",
  },
];

export function IdentitySsoFaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First open by default as in Figma design

  const toggleFaq = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="bg-slate-100 py-16 lg:py-24">
      <Container>
        <div className="max-w-4xl mx-auto space-y-10">
          <div className="space-y-3.5">
            <Reveal>
              <span className="text-blue-600 text-xs font-bold uppercase tracking-wider font-['IBM_Plex_Sans']">
                QUESTIONS
              </span>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="text-3xl lg:text-4xl font-extrabold text-sky-950 font-['Manrope'] leading-tight">
                Direct answers about Identity &amp; Single Sign-On.
              </h2>
            </Reveal>
          </div>

          <div className="border-t border-stone-200 divide-y divide-stone-200">
            {FAQ_ITEMS.map((item, idx) => {
              const isOpen = openIndex === idx;
              return (
                <Reveal key={idx} delay={0.05 * idx}>
                  <div className="py-5 transition-colors">
                    <button
                      onClick={() => toggleFaq(idx)}
                      className="w-full flex items-center justify-between text-left focus:outline-none gap-4"
                    >
                      <span className="text-gray-800 text-base font-bold font-['Arial'] leading-snug">
                        {item.q}
                      </span>
                      <span className="text-slate-500 text-lg font-normal font-['Arial'] shrink-0">
                        {isOpen ? "−" : "+"}
                      </span>
                    </button>
                    {isOpen && (
                      <div className="pt-3 text-slate-500 text-sm font-normal font-['IBM_Plex_Sans'] leading-relaxed max-w-3xl">
                        {item.a}
                      </div>
                    )}
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
