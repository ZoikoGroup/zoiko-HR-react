"use client";

import Image from "next/image";
import Link from "next/link";
import { Container, Reveal } from "@/components/ui";

const FLOW_STEPS = [
  { actor: "Your integration", action: "Requests scopes" },
  { actor: "Administrator", action: "Approves scopes" },
  { actor: "Scoped credential", action: "Kept in your secret store" },
  { actor: "Zoiko HR API", action: "Checks scope & policy" },
];

const SCOPES = [
  {
    scope: "employees.read",
    description: "Core employee fields",
    badge: "Personal",
    badgeBg: "bg-[#EAF0FF]",
    badgeText: "text-[#475569]",
  },
  {
    scope: "org.read",
    description: "Entities, departments, locations",
    badge: "Standard",
    badgeBg: "bg-[#F1F5F9]",
    badgeText: "text-[#475569]",
  },
  {
    scope: "leave.write",
    description: "Create leave requests",
    badge: "Personal",
    badgeBg: "bg-[#EAF0FF]",
    badgeText: "text-[#475569]",
  },
  {
    scope: "compensation.read",
    description: "Pay-related fields, extra approval",
    badge: "Highly sensitive",
    badgeBg: "bg-[#FEE2E2]",
    badgeText: "text-[#991B1B]",
  },
];

const SECURITY_RULES = [
  "Access tokens or session identifiers",
  "Signing secrets, passwords or private keys",
  "Credentials in screenshots or support tickets",
  "Real employee data in examples",
];

export function AuthenticationSection() {
  return (
    <section id="build" className="bg-white py-20 sm:py-28">
      <Container>
        {/* Chapter Header: Build */}
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          {/* Left: Chapter intro and links */}
          <div>
            <Reveal>
              <span className="text-[14px] font-semibold text-[#305CF8]">
                Build
              </span>
              <h2 className="mt-2.5 text-3xl font-extrabold tracking-tight text-[#0C1234] sm:text-4xl lg:text-[42px] lg:leading-[1.12]">
                Authenticate, explore and<br className="hidden sm:inline" /> model with confidence.
              </h2>
              <p className="mt-3.5 max-w-[520px] text-[15px] sm:text-[16px] leading-[26px] text-[#64748B]">
                Each operation and field shows its state, required scope and<br className="hidden md:inline" /> sensitivity, so you only build on what&apos;s supported.
              </p>
            </Reveal>

            {/* In this chapter links list */}
            <Reveal delay={0.12}>
              <div className="mt-6 border-t border-[#E3E8EF]">
                <a
                  href="#authentication"
                  className="group flex items-center justify-between border-b border-[#E3E8EF] py-3.5 text-sm transition-colors"
                >
                  <span className="font-bold text-[#0C1234] group-hover:text-[#305CF8]">
                    Authentication & authorization
                  </span>
                  <span className="text-[#64748B]">Scopes, not roles</span>
                </a>
                <a
                  href="#reference-explorer"
                  className="group flex items-center justify-between border-b border-[#E3E8EF] py-3.5 text-sm transition-colors"
                >
                  <span className="font-bold text-[#0C1234] group-hover:text-[#305CF8]">
                    Reference explorer
                  </span>
                  <span className="text-[#64748B]">Operations by state</span>
                </a>
                <a
                  href="#resource-schemas"
                  className="group flex items-center justify-between border-b border-[#E3E8EF] py-3.5 text-sm transition-colors"
                >
                  <span className="font-bold text-[#0C1234] group-hover:text-[#305CF8]">
                    Resource schemas
                  </span>
                  <span className="text-[#64748B]">Fields and sensitivity</span>
                </a>
                <a
                  href="#code-examples"
                  className="group flex items-center justify-between border-b border-[#E3E8EF] py-3.5 text-sm transition-colors"
                >
                  <span className="font-bold text-[#0C1234] group-hover:text-[#305CF8]">
                    Examples
                  </span>
                  <span className="text-[#64748B]">Synthetic and labeled</span>
                </a>
              </div>
            </Reveal>
          </div>

          {/* Right: Chapter banner image */}
          <div>
            <Reveal delay={0.16}>
              <div className="relative overflow-hidden rounded-[20px] bg-gradient-to-br from-[#1B2450] to-[#2A4CC8] shadow-[0px_20px_45px_-15px_rgba(12,18,52,0.25)]">
                <Image
                  src="/images/developers/build-banner.png"
                  alt="Developer laptop with code editor open"
                  width={800}
                  height={500}
                  unoptimized
                  className="h-[380px] w-full object-cover sm:h-[420px] lg:h-[436px]"
                />
              </div>
            </Reveal>
          </div>
        </div>

        {/* Section: Access is granted by scope, approved by people */}
        <div id="authentication" className="mt-28">
          <Reveal>
            <h3 className="text-3xl font-bold tracking-tight text-[#0C1234] sm:text-[34px] sm:leading-[38px]">
              Access is granted by scope, approved by<br className="hidden sm:inline" /> people.
            </h3>
            <p className="mt-3 max-w-2xl text-[16px] leading-[26px] text-[#64748B]">
              An integration gets only the scopes an administrator approves. Scopes, data
              sensitivity and your organization&apos;s policy decide what a call can read or change, not
              a job title.
            </p>
          </Reveal>

          {/* 2-Column Grid: Left (Flow + Scopes) & Right (Photo + Security Rules) */}
          <div className="mt-8 grid gap-7 lg:grid-cols-12 lg:items-start">
            {/* Left Card: 4 Flow Cards + Illustrative Scopes */}
            <div className="rounded-2xl border border-[#EEF1F5] bg-white p-6 shadow-[0px_8px_24px_-12px_rgba(12,18,52,0.08)] lg:col-span-7">
              {/* 4 Flow Cards connected by arrows */}
              <div className="flex items-center justify-between gap-1.5 sm:gap-2">
                {/* Step 1: Your integration */}
                <div className="flex flex-1 flex-col items-center rounded-xl border border-[#EEF1F5] bg-white px-2 py-3.5 text-center shadow-[0_1px_2px_rgba(0,0,0,0.02)]">
                  <div className="flex h-[34px] w-[34px] items-center justify-center rounded-[10px] bg-[#EAF0FF] text-[#305CF8]">
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                  </div>
                  <span className="mt-2 text-[13px] font-bold leading-tight text-[#0C1234]">
                    Your<br />integration
                  </span>
                  <span className="mt-1 text-[11px] text-[#64748B]">
                    Requests scopes
                  </span>
                </div>

                <span className="shrink-0 text-sm font-bold text-[#305CF8]">→</span>

                {/* Step 2: Administrator */}
                <div className="flex flex-1 flex-col items-center rounded-xl border border-[#EEF1F5] bg-white px-2 py-3.5 text-center shadow-[0_1px_2px_rgba(0,0,0,0.02)]">
                  <div className="flex h-[34px] w-[34px] items-center justify-center rounded-[10px] bg-[#EAF0FF] text-[#305CF8]">
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <span className="mt-2 text-[13px] font-bold leading-tight text-[#0C1234]">
                    Administrator<br /><span className="invisible text-[1px]">&nbsp;</span>
                  </span>
                  <span className="mt-1 text-[11px] text-[#64748B]">
                    Approves scopes
                  </span>
                </div>

                <span className="shrink-0 text-sm font-bold text-[#305CF8]">→</span>

                {/* Step 3: Scoped credential */}
                <div className="flex flex-1 flex-col items-center rounded-xl border border-[#EEF1F5] bg-white px-2 py-3.5 text-center shadow-[0_1px_2px_rgba(0,0,0,0.02)]">
                  <div className="flex h-[34px] w-[34px] items-center justify-center rounded-[10px] bg-[#EAF0FF] text-[#305CF8]">
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
                    </svg>
                  </div>
                  <span className="mt-2 text-[13px] font-bold leading-tight text-[#0C1234]">
                    Scoped<br />credential
                  </span>
                  <span className="mt-1 text-[11px] text-[#64748B]">
                    Kept in your<br />secret store
                  </span>
                </div>

                <span className="shrink-0 text-sm font-bold text-[#305CF8]">→</span>

                {/* Step 4: Zoiko HR API (Dark) */}
                <div className="flex flex-1 flex-col items-center rounded-xl border border-[#0C1234] bg-[#0C1234] px-2 py-3.5 text-center text-white shadow-md">
                  <div className="flex h-[34px] w-[34px] items-center justify-center rounded-[10px] bg-white/10 text-white">
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <span className="mt-2 text-[13px] font-bold leading-tight text-white">
                    Zoiko HR API<br /><span className="invisible text-[1px]">&nbsp;</span>
                  </span>
                  <span className="mt-1 text-[11px] text-[#AEB7D0]">
                    Checks scope &<br />policy
                  </span>
                </div>
              </div>

              {/* Illustrative scopes sub-table */}
              <div className="mt-5 border-t border-[#EEF1F5] pt-4">
                <span className="text-[13px] font-semibold text-[#64748B]">
                  Illustrative scopes
                </span>

                <div className="mt-2 divide-y divide-dashed divide-[#E3E8EF]">
                  {SCOPES.map((item) => (
                    <div
                      key={item.scope}
                      className="flex items-center justify-between gap-3 py-2.5 text-sm"
                    >
                      <code className="rounded-md bg-[#EAF0FF] px-2 py-0.5 font-mono text-[12.5px] font-bold text-[#1E3A8A]">
                        {item.scope}
                      </code>
                      <span className="flex-1 text-[13.5px] text-[#475569]">
                        {item.description}
                      </span>
                      <span
                        className={`rounded-full px-2.5 py-0.5 text-[11.5px] font-semibold ${item.badgeBg} ${item.badgeText}`}
                      >
                        {item.badge}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Photo + Dark Security Rules Card */}
            <div className="flex flex-col gap-4 lg:col-span-5">
              {/* Photo */}
              <div className="relative overflow-hidden rounded-[18px] shadow-[0px_20px_45px_-15px_rgba(12,18,52,0.25)]">
                <Image
                  src="/images/developers/auth-security.png"
                  alt="Two people working with laptop and phone"
                  width={700}
                  height={400}
                  unoptimized
                  className="h-[215px] w-full object-cover"
                />
              </div>

              {/* Dark Navy Security Rules Card */}
              <div className="rounded-2xl bg-[#0C1234] p-5 text-white shadow-md">
                <div className="flex items-center gap-2.5">
                  <Image
                    src="/images/developers/icons/icon-padlock.svg"
                    alt=""
                    width={18}
                    height={18}
                    className="h-4 w-4 shrink-0"
                  />
                  <h4 className="text-[15px] font-bold text-white">
                    Never in docs, code, URLs or logs
                  </h4>
                </div>

                <ul className="mt-3.5 space-y-2 text-[13.5px] text-[#C3CADF]">
                  {SECURITY_RULES.map((rule) => (
                    <li key={rule} className="flex items-start gap-2.5">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#FDA4AF]" />
                      <span>{rule}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Bottom link: Read the authentication guide */}
          <div className="mt-5">
            <a
              href="#authentication"
              className="group inline-flex items-center gap-1 text-[15px] font-semibold text-[#305CF8] hover:underline"
            >
              Read the authentication guide
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
