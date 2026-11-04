"use client";

import Image from "next/image";
import { Container, Reveal } from "@/components/ui";

const EVALUATION_QUESTIONS = [
  {
    tag: "authorization",
    tagBg: "bg-blue-500/10 text-blue-600 border-blue-500/20",
    question: "Can every active connection show its current authorization policy version, scope, purpose, identity and environment?",
  },
  {
    tag: "authorization",
    tagBg: "bg-blue-500/10 text-blue-600 border-blue-500/20",
    question: "Are deny rules and sensitivity restrictions explicit — not just implicit from role membership?",
  },
  {
    tag: "minimization",
    tagBg: "bg-violet-500/10 text-violet-600 border-violet-500/20",
    question: "Is each approved data category tied to a current purpose and a named consumer?",
  },
  {
    tag: "minimization",
    tagBg: "bg-violet-500/10 text-violet-600 border-violet-500/20",
    question: "Are counts, previews, facets, logs and derived data governed by the same sensitivity class as the source?",
  },
  {
    tag: "identity",
    tagBg: "bg-sky-500/10 text-sky-700 border-sky-500/20",
    question: "Can every active service identity be traced to an owner, environment, approved scopes and a named escalation route?",
  },
  {
    tag: "environment",
    tagBg: "bg-emerald-500/10 text-emerald-700 border-emerald-500/20",
    question: "Are test and production authorization states and evidence strictly separate?",
  },
  {
    tag: "exception",
    tagBg: "bg-amber-500/10 text-amber-700 border-amber-500/20",
    question: "Is every active exception bounded, expiring, stacking-evaluated and visible to the identity admin and auditor?",
  },
  {
    tag: "revocation",
    tagBg: "bg-rose-500/10 text-rose-600 border-rose-500/20",
    question: "Does revocation distinguish the local record change from the observed runtime and downstream state?",
  },
  {
    tag: "auditability",
    tagBg: "bg-slate-500/10 text-slate-600 border-slate-500/20",
    question: "Can an auditor trace every material security change through immutable, version-linked evidence?",
  },
  {
    tag: "claims",
    tagBg: "bg-slate-900/10 text-slate-950 border-slate-900/20",
    question: "Are all encryption, certification and zero-trust claims approved by the Security Claims Registry?",
  },
];

export function SecurityEvaluationPanelSection() {
  return (
    <section className="bg-white py-16 lg:py-24 border-t border-slate-200">
      <Container>
        <div className="space-y-12 max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-4 space-y-6">
              <Reveal>
                <span className="text-blue-600 text-xs font-semibold uppercase tracking-widest font-['IBM_Plex_Sans']">
                  Security Evaluation Panel
                </span>
              </Reveal>

              <Reveal delay={0.08}>
                <h2 className="text-3xl font-extrabold text-slate-950 font-['Manrope'] leading-tight">
                  Ten evaluation questions for implementation readiness
                </h2>
              </Reveal>

              <Reveal delay={0.12}>
                <p className="text-slate-600 text-sm font-normal font-['IBM_Plex_Sans'] leading-relaxed">
                  Specialist routes — for questions requiring current product, security or privacy authority that this public page does not and cannot answer.
                </p>
              </Reveal>

              <Reveal delay={0.16}>
                <div className="relative overflow-hidden rounded-xl">
                  <Image
                    src="/images/integration-security/image 453.png"
                    alt="Security Evaluation Readiness"
                    width={320}
                    height={401}
                    className="w-full object-contain rounded-xl"
                  />
                </div>
              </Reveal>
            </div>

            <div className="lg:col-span-8 space-y-3">
              {EVALUATION_QUESTIONS.map((q, idx) => (
                <Reveal key={idx} delay={0.03 * idx + 0.1}>
                  <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 flex items-start gap-4 hover:border-slate-300 transition-colors">
                    <span className={`px-2 py-0.5 rounded text-[10px] font-mono uppercase font-bold border shrink-0 ${q.tagBg}`}>
                      {q.tag}
                    </span>
                    <p className="text-slate-950 text-xs font-normal font-['IBM_Plex_Sans'] leading-relaxed">
                      {q.question}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
