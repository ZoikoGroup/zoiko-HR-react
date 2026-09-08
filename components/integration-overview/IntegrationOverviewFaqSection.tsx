"use client";

import { useState } from "react";
import { Container, Reveal } from "@/components/ui";

const FAQS = [
  {
    num: "01",
    question: "What is Zoiko HR Integrations Overview?",
    answer:
      "Integrations Overview summarizes the connection models, data boundaries, and ecosystem interoperability options available within Zoiko HR. It explains how information flows between modules and external systems without replacing existing infrastructure.",
  },
  {
    num: "02",
    question: "Does Zoiko HR require the full Zoiko suite?",
    answer:
      "No. Zoiko HR is designed for modular adoption. Integration with other Zoiko products (such as ZoikoTime or Zoiko Payroll) is optional and permission-controlled. Zoiko HR operates standalone or connected.",
  },
  {
    num: "03",
    question: "Does Zoiko HR integrate with my payroll, time or identity system?",
    answer:
      "Zoiko HR supports seven catalog-backed connection classes including reference directories, inbound/outbound operational feeds, bidirectional sync, event webhooks, identity federation (SAML/OIDC), and batch file movements. Specific connector availability is listed in the Integration Catalog.",
  },
  {
    num: "04",
    question: "Can integrations write back to another system?",
    answer:
      "Write permissions are explicitly governed per field and object class. Write authority requires explicit administrative configuration and source-of-truth authorization before bidirectional or outbound write-backs occur.",
  },
  {
    num: "05",
    question: "Where do I find SSO and identity provider details?",
    answer:
      "Single sign-on, SAML 2.0 / OIDC configuration, SCIM user provisioning, and identity provider routing details are owned by Identity & Single Sign-On (/identity-and-single-sign-on).",
  },
  {
    num: "06",
    question: "Where do I find import/export templates and migration rules?",
    answer:
      "Data staging, column mapping rules, multi-stage dry-run validation, and file export templates are owned by Data Import & Export (/data-import-and-export).",
  },
  {
    num: "07",
    question: "How is integration security handled?",
    answer:
      "Service identity credentials, RBAC/ABAC authorization policies, cryptographic audit trails, and expiration gates are governed by Integration Security (/integration-security).",
  },
  {
    num: "08",
    question: "How does Zoiko HR avoid becoming a data-sharing free-for-all?",
    answer:
      "Every connection requires mandatory business purpose metadata, explicit data minimization scope, clear directionality labels, and source-of-truth ownership boundaries. Indiscriminate 'collect-all' data flows are blocked by design.",
  },
];

export function IntegrationOverviewFaqSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section className="bg-slate-950 text-white py-16 lg:py-24 border-t border-slate-800">
      <Container>
        <div className="space-y-12 max-w-7xl mx-auto">
          <div className="space-y-3">
            <Reveal>
              <span className="text-blue-600 text-xs font-medium font-['IBM_Plex_Sans'] uppercase leading-4 tracking-wider">
                FAQ / AEO
              </span>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="text-3xl lg:text-4xl font-extrabold text-white font-['Manrope'] leading-10">
                Common questions about Zoiko HR integrations
              </h2>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="text-white/40 text-xs font-normal font-['IBM_Plex_Sans'] leading-5">
                Answers distinguish &quot;connection model exists&quot; from &quot;specific connector is available for your organization.&quot; Specific availability requires approved catalog confirmation.
              </p>
            </Reveal>
          </div>

          <div className="grid md:grid-cols-2 gap-3 align-start">
            <div className="space-y-3">
              {FAQS.slice(0, 4).map((faq, idx) => {
                const globalIdx = idx;
                const isOpen = openIdx === globalIdx;
                return (
                  <Reveal key={globalIdx} delay={0.03 * globalIdx + 0.1}>
                    <div className="bg-white/5 rounded-xl outline outline-1 outline-offset-[-1.01px] outline-white/10 overflow-hidden transition-colors">
                      <button
                        onClick={() => setOpenIdx(isOpen ? null : globalIdx)}
                        className="w-full px-5 py-4 text-left flex items-start justify-between gap-3 focus:outline-none"
                      >
                        <div className="flex items-start gap-3">
                          <span className="text-blue-600 font-['JetBrains_Mono'] text-xs font-normal leading-4 shrink-0 pt-0.5">
                            {faq.num}
                          </span>
                          <span className="text-white text-xs font-semibold font-['IBM_Plex_Sans'] leading-4">
                            {faq.question}
                          </span>
                        </div>
                        <span className="text-white/30 text-xs shrink-0 pt-0.5">
                          {isOpen ? "▲" : "▼"}
                        </span>
                      </button>

                      {isOpen && (
                        <div className="px-5 pb-4 text-white/70 text-xs font-normal font-['IBM_Plex_Sans'] leading-relaxed border-t border-white/5 pt-3">
                          {faq.answer}
                        </div>
                      )}
                    </div>
                  </Reveal>
                );
              })}
            </div>

            <div className="space-y-3">
              {FAQS.slice(4, 8).map((faq, idx) => {
                const globalIdx = idx + 4;
                const isOpen = openIdx === globalIdx;
                return (
                  <Reveal key={globalIdx} delay={0.03 * globalIdx + 0.1}>
                    <div className="bg-white/5 rounded-xl outline outline-1 outline-offset-[-1.01px] outline-white/10 overflow-hidden transition-colors">
                      <button
                        onClick={() => setOpenIdx(isOpen ? null : globalIdx)}
                        className="w-full px-5 py-4 text-left flex items-start justify-between gap-3 focus:outline-none"
                      >
                        <div className="flex items-start gap-3">
                          <span className="text-blue-600 font-['JetBrains_Mono'] text-xs font-normal leading-4 shrink-0 pt-0.5">
                            {faq.num}
                          </span>
                          <span className="text-white text-xs font-semibold font-['IBM_Plex_Sans'] leading-4">
                            {faq.question}
                          </span>
                        </div>
                        <span className="text-white/30 text-xs shrink-0 pt-0.5">
                          {isOpen ? "▲" : "▼"}
                        </span>
                      </button>

                      {isOpen && (
                        <div className="px-5 pb-4 text-white/70 text-xs font-normal font-['IBM_Plex_Sans'] leading-relaxed border-t border-white/5 pt-3">
                          {faq.answer}
                        </div>
                      )}
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

