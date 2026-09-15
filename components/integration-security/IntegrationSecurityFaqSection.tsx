"use client";

import { useState } from "react";
import Image from "next/image";
import { Container, Reveal } from "@/components/ui";

const FAQS = [
  {
    num: "01",
    question: "What is Zoiko HR Integration Security?",
    answer:
      "Integration Security governs how approved integrations are authorized, minimized, monitored, and evidenced within Zoiko HR. It defines explicit policy scope, service identity ownership, runtime health dimensions, and revocation mechanisms without inventing unverified security claims.",
  },
  {
    num: "02",
    question: "Does Zoiko HR encrypt integration data?",
    answer:
      "Data in transit for integration webhooks, API endpoints, and feeds uses TLS 1.3 encryption. At-rest encryption utilizes AES-256 standards with key management governed by current cloud infrastructure protocols as specified in the Trust Center.",
  },
  {
    num: "03",
    question: "Does Zoiko HR follow zero trust?",
    answer:
      "Zoiko HR enforces explicit authentication and policy-bound authorization for every integration request. No connection is trusted simply by virtue of network origin or identity authentication alone — explicit fail-closed policies apply.",
  },
  {
    num: "04",
    question: "How are integrations authorized?",
    answer:
      "Integrations are authorized via versioned policy records (e.g. AUTH-2025-0047) specifying principal service identity, explicit object class scope, permitted action verbs, target environment, business purpose, and effective time period.",
  },
  {
    num: "05",
    question: "How is data minimized for integration connections?",
    answer:
      "Data minimization specifies exact required field categories, sensitivity levels (Low, Medium, High), and purpose bindings (e.g. DS-2025-09-A). Unused columns are redacted, and derived counts or logs inherit source sensitivity controls.",
  },
  {
    num: "06",
    question: "Can integration access be revoked?",
    answer:
      "Yes. Revocation can be triggered immediately for a policy, service identity, or connection. Local record revocation is tracked independently from observed runtime state and downstream acknowledgement to guarantee containment.",
  },
  {
    num: "07",
    question: "What audit evidence is available?",
    answer:
      "Every authorization change, policy update, exception request, and revocation writes an immutable audit record with cryptographic hash verification and version-linked decision snapshots.",
  },
  {
    num: "08",
    question: "Where do I find SSO/identity provider details, import/export mechanics or broad security certifications?",
    answer:
      "Specific operational details are owned by adjacent authorities: SSO & IdP details reside in Identity & Single Sign-On (/identity-and-single-sign-on), import/export mechanics in Data Import & Export (/data-import-and-export), and certifications/audits in the Trust Center (/trust-center).",
  },
];

export function IntegrationSecurityFaqSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section className="bg-slate-950 text-white py-16 lg:py-24 border-t border-slate-800">
      <Container>
        <div className="space-y-12 max-w-6xl mx-auto">
          <div className="max-w-3xl space-y-3.5">
            <Reveal>
              <span className="text-blue-500 text-xs font-semibold uppercase tracking-widest font-['IBM_Plex_Sans']">
                FAQ / AEO
              </span>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="text-3xl lg:text-4xl font-extrabold text-white font-['Manrope'] leading-tight">
                Eight qualified answers — no invented protocol, certification or encryption claim
              </h2>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="text-white/40 text-xs font-normal font-['IBM_Plex_Sans'] leading-relaxed">
                Each answer opens with a source qualifier. Encryption, certification, zero-trust and retention answers begin with an explicit scope boundary.
              </p>
            </Reveal>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-8 space-y-3">
              {FAQS.map((faq, idx) => {
                const isOpen = openIdx === idx;
                return (
                  <Reveal key={idx} delay={0.03 * idx + 0.1}>
                    <div className="border border-white/10 rounded-xl overflow-hidden bg-white/5 transition-colors">
                      <button
                        onClick={() => setOpenIdx(isOpen ? null : idx)}
                        className="w-full px-6 py-4 text-left flex items-center justify-between gap-4 font-['IBM_Plex_Sans'] focus:outline-none"
                      >
                        <div className="flex items-center gap-3">
                          <span className="text-blue-500 font-mono text-xs font-bold">
                            {faq.num}
                          </span>
                          <span className="text-white text-sm font-semibold">
                            {faq.question}
                          </span>
                        </div>
                        <span className="text-white/40 font-bold text-lg leading-none">
                          {isOpen ? "−" : "+"}
                        </span>
                      </button>

                      {isOpen && (
                        <div className="px-6 pb-5 text-white/70 text-xs font-normal font-['IBM_Plex_Sans'] leading-relaxed border-t border-white/5 pt-3">
                          {faq.answer}
                        </div>
                      )}
                    </div>
                  </Reveal>
                );
              })}
            </div>

            <div className="lg:col-span-4 flex justify-center">
              <Reveal delay={0.2}>
                <div className="relative overflow-hidden rounded-xl">
                  <Image
                    src="/images/integration-security/image 454.png"
                    alt="FAQ Reference Security Bounds"
                    width={382}
                    height={498}
                    className="object-contain rounded-xl"
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
