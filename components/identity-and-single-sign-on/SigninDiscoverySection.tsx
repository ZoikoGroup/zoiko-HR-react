"use client";

import { useState } from "react";
import { Container, Reveal } from "@/components/ui";

const SECURITY_RULES = [
  {
    title: "Input collected",
    desc: "Only the routing identifier needed to find an approved sign-in path — minimized and not retained longer than required.",
  },
  {
    title: "Successful match",
    desc: "Routes to the correct approved sign-in experience without exposing provider or tenant metadata.",
  },
  {
    title: "No match",
    desc: "Shows a generic response — never confirms or denies that an account or tenant exists.",
  },
  {
    title: "Multiple matches",
    desc: "Never disclosed automatically; resolved only through authorized administrator review.",
  },
  {
    title: "Rate limiting",
    desc: "An accessible anti-abuse control — never an inaccessible CAPTCHA-only blocker.",
  },
  {
    title: "What is logged",
    desc: "A safe outcome category only; raw email or domain values are excluded from general analytics.",
  },
];

export function SigninDiscoverySection() {
  const [email, setEmail] = useState("");

  return (
    <section className="bg-slate-100 py-16 lg:py-24">
      <Container>
        <div className="space-y-10 max-w-6xl mx-auto">
          <div className="max-w-2xl space-y-3.5">
            <Reveal>
              <h2 className="text-3xl lg:text-4xl font-extrabold text-sky-950 font-['Manrope'] leading-tight">
                Routing a sign-in never reveals who else is a customer.
              </h2>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="text-slate-600 text-base font-normal font-['IBM_Plex_Sans'] leading-relaxed">
                Entering a work email routes people to the right sign-in experience — a non-match or a conflict never confirms or denies an account, tenant or provider.
              </p>
            </Reveal>
          </div>

          <div className="grid items-start gap-8 lg:grid-cols-12">
            {/* Left Mockup */}
            <div className="lg:col-span-5 space-y-4 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
              <Reveal delay={0.12}>
                <div className="space-y-3">
                  <span className="text-slate-400 text-xs font-bold font-['IBM_Plex_Sans'] uppercase tracking-wide">
                    SIGN-IN DISCOVERY
                  </span>
                  <p className="text-slate-600 text-sm font-normal font-['IBM_Plex_Sans']">
                    Continue with your company email
                  </p>
                  <input
                    type="email"
                    placeholder="you@company.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3.5 py-3 rounded-lg border border-slate-200 text-sm font-['IBM_Plex_Sans'] text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600"
                  />
                  <button
                    type="button"
                    className="w-full p-3 bg-blue-600 hover:bg-blue-500 rounded-lg text-white text-sm font-semibold font-['IBM_Plex_Sans'] transition-colors text-center"
                  >
                    Continue
                  </button>
                  <p className="text-slate-400 text-xs font-normal font-['IBM_Plex_Sans'] leading-relaxed">
                    We&apos;ll route you to your organization&apos;s approved sign-in method — no account or tenant status is revealed here.
                  </p>
                </div>
              </Reveal>

              <Reveal delay={0.2}>
                <div className="rounded-xl overflow-hidden border border-slate-100 bg-rose-50 mt-4">
                  <img
                    src="/images/IDENTITY & SINGLE SIGN-ON/image 425.png"
                    alt="Sign-in discovery graphic"
                    className="w-full h-auto object-cover"
                  />
                </div>
              </Reveal>
            </div>

            {/* Right Rules List */}
            <div className="lg:col-span-7 bg-white p-4 rounded-2xl border border-slate-200 space-y-2.5 shadow-sm">
              {SECURITY_RULES.map((rule, idx) => (
                <Reveal key={idx} delay={0.08 * idx}>
                  <div className="p-4 rounded-xl border border-slate-200 hover:border-slate-300 transition-colors space-y-1">
                    <h4 className="text-sky-950 text-xs font-semibold font-['IBM_Plex_Sans']">
                      {rule.title}
                    </h4>
                    <p className="text-slate-500 text-xs font-normal font-['IBM_Plex_Sans'] leading-relaxed">
                      {rule.desc}
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
