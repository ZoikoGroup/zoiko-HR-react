"use client";

import Image from "next/image";
import Link from "next/link";
import { Container, Reveal } from "@/components/ui";

const QUICK_START_STEPS = [
  {
    step: 1,
    title: "Confirm entitlement",
    description:
      "Check with your administrator or account team that API access is part of your plan and contract.",
    roleBadge: "Admin · Account team",
  },
  {
    step: 2,
    title: "Register your integration",
    description:
      "Where enabled, an administrator registers the integration and assigns an owner.",
    roleBadge: "HR or IT admin",
  },
  {
    step: 3,
    title: "Choose the documented auth method",
    description:
      "Use the authentication method Developer Documentation lists for your version.",
    roleBadge: "Engineer · Admin approves",
  },
  {
    step: 4,
    title: "Request the narrowest scopes",
    description:
      "Ask only for the scopes your use case needs. Sensitive scopes need extra approval.",
    roleBadge: "Engineer · Admin approves",
  },
  {
    step: 5,
    title: "Make a first read call",
    description:
      "Start with a read-only operation in an environment your registry confirms exists.",
    roleBadge: "Engineer",
  },
  {
    step: 6,
    title: "Plan for errors and versions",
    description:
      "Handle documented errors and subscribe to deprecation notices before going live.",
    roleBadge: "Engineer · Tech lead",
  },
];

export function QuickStartSection() {
  return (
    <section id="get-started" className="bg-[#FAFBFD] py-20 sm:py-28">
      <Container>
        {/* Chapter Header: Get Started */}
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          {/* Left: Chapter intro and links */}
          <div>
            <Reveal>
              <span className="text-[14px] font-semibold text-[#305CF8]">
                Get started
              </span>
              <h2 className="mt-2.5 text-3xl font-extrabold tracking-tight text-[#0C1234] sm:text-4xl lg:text-[42px] lg:leading-[1.12]">
                Know what you can build before you build it.
              </h2>
              <p className="mt-3.5 max-w-[520px] text-[15px] sm:text-[16px] leading-[26px] text-[#64748B]">
                Confirm access, then see which integration surfaces exist and what state each one is in.
              </p>
            </Reveal>

            {/* In this chapter links list */}
            <Reveal delay={0.12}>
              <div className="mt-6 border-t border-[#E3E8EF]">
                <a
                  href="#quick-start"
                  className="group flex items-center justify-between border-b border-[#E3E8EF] py-3.5 text-sm transition-colors"
                >
                  <span className="font-bold text-[#0C1234] group-hover:text-[#305CF8]">
                    Quick start
                  </span>
                  <span className="text-[#64748B]">Six steps to a first call</span>
                </a>
                <a
                  href="#capability-map"
                  className="group flex items-center justify-between border-b border-[#E3E8EF] py-3.5 text-sm transition-colors"
                >
                  <span className="font-bold text-[#0C1234] group-hover:text-[#305CF8]">
                    Capability map
                  </span>
                  <span className="text-[#64748B]">Surfaces and their states</span>
                </a>
              </div>
            </Reveal>
          </div>

          {/* Right: Chapter banner image */}
          <div>
            <Reveal delay={0.16}>
              <div className="relative overflow-hidden rounded-[20px] bg-gradient-to-br from-[#1B2450] to-[#2A4CC8] shadow-[0px_20px_45px_-15px_rgba(12,18,52,0.25)]">
                <Image
                  src="/images/developers/get-started-banner.png"
                  alt="Code on a monitor in a dimly lit workspace"
                  width={800}
                  height={500}
                  unoptimized
                  className="h-[340px] w-full object-cover lg:h-[380px]"
                />
              </div>
            </Reveal>
          </div>
        </div>

        {/* Section: From approval to a first read-only call */}
        <div id="quick-start" className="mt-28">
          <Reveal>
            <h3 className="text-2xl font-bold tracking-tight text-[#0C1234] sm:text-3xl">
              From approval to a first read-only call.
            </h3>
            <p className="mt-3 max-w-2xl text-base text-[#64748B]">
              Integration starts with access, not code. These steps keep credentials safe and scopes
              narrow from the first request.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-10 lg:grid-cols-12 lg:gap-12">
            {/* Left 6-step list */}
            <div className="space-y-4 lg:col-span-7">
              {QUICK_START_STEPS.map((item, idx) => (
                <Reveal key={item.step} delay={idx * 0.06}>
                  <div className="flex items-start gap-4 rounded-xl border border-[#E2E8F0] bg-white p-5 shadow-sm transition-all hover:border-[#305CF8]/30 hover:shadow-md">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#305CF8] text-sm font-bold text-white">
                      {item.step}
                    </span>
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <h4 className="text-base font-bold text-[#0C1234]">{item.title}</h4>
                        <span className="rounded-md bg-[#F1F5F9] px-2.5 py-0.5 text-xs font-semibold text-[#334155]">
                          {item.roleBadge}
                        </span>
                      </div>
                      <p className="mt-2 text-sm leading-relaxed text-[#64748B]">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            {/* Right: Review image and secrets code snippet */}
            <div className="space-y-6 lg:col-span-5">
              <Reveal delay={0.2}>
                <div className="relative overflow-hidden rounded-[18px] bg-gradient-to-br from-[#1B2450] to-[#2A4CC8] shadow-md">
                  <Image
                    src="/images/developers/quickstart-review.png"
                    alt="Engineer and administrator reviewing an integration together"
                    width={700}
                    height={400}
                    unoptimized
                    className="h-[220px] w-full object-cover"
                  />
                </div>
              </Reveal>

              <Reveal delay={0.28}>
                <div className="rounded-[18px] border border-white/10 bg-[#0A0F2C] p-0 shadow-lg">
                  {/* Code box header */}
                  <div className="flex items-center justify-between border-b border-white/[0.08] px-4 py-3">
                    <span className="rounded-full bg-white/[0.06] px-2.5 py-1 text-xs font-semibold text-[#AEB7D0]">
                      Never hard-code secrets
                    </span>
                    <span className="rounded-full bg-white/[0.06] px-2.5 py-1 text-xs font-semibold text-[#AEB7D0]">
                      Illustrative
                    </span>
                  </div>

                  {/* Code snippet */}
                  <div className="overflow-x-auto p-5 font-mono text-[12.5px] leading-relaxed">
                    <div className="text-[#6E7AA8]">
                      # Read credentials from your secret store
                    </div>
                    <div className="text-[#6E7AA8]">
                      # at runtime. Never commit them, log them
                    </div>
                    <div className="text-[#6E7AA8]">
                      # or put them in URLs.
                    </div>
                    <div className="mt-2">
                      <span className="text-[#D6DEFF]">token = secrets.</span>
                      <span className="text-[#8EA6FF]">get</span>
                      <span className="text-[#D6DEFF]">(</span>
                      <span className="text-[#7EE2B8]">&quot;zoiko_hr_token&quot;</span>
                      <span className="text-[#D6DEFF]">)</span>
                    </div>
                  </div>

                  {/* Footer note */}
                  <div className="border-t border-white/[0.08] px-4 py-2.5 text-xs text-[#8A93B2]">
                    Pseudocode. Use your platform&apos;s own secret manager.
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
