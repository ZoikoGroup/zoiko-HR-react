"use client";

import Image from "next/image";
import Link from "next/link";
import { Container, Reveal } from "@/components/ui";

const ROLE_CARDS = [
  {
    role: "Software engineer",
    image: "/images/developers/role-software-engineer.png",
    description: "Find approved surfaces and prerequisites before writing code.",
    linkText: "Quick start →",
    href: "#quick-start",
  },
  {
    role: "Integration engineer",
    image: "/images/developers/role-integration-engineer.png",
    description: "Understand authentication and permission scopes.",
    linkText: "Authentication →",
    href: "#authentication",
  },
  {
    role: "Enterprise architect",
    image: "/images/developers/role-enterprise-architect.png",
    description: "Browse operations and schemas with version and state.",
    linkText: "Reference →",
    href: "#reference-explorer",
  },
  {
    role: "Security engineer",
    image: "/images/developers/role-security-engineer.png",
    description: "Review environments, credentials, versioning and deprecation.",
    linkText: "Versioning →",
    href: "#versioning",
  },
];

export function OverviewSection() {
  return (
    <section id="overview" className="bg-white py-20 sm:py-28">
      <Container>
        {/* Part 1: Architecture & Purpose */}
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-12">
          {/* Left Column */}
          <div className="lg:col-span-7">
            <Reveal>
              <h2 className="text-3xl font-bold leading-tight tracking-tight text-[#0C1234] sm:text-4xl lg:text-[40px]">
                A developer hub that tells you what&apos;s supported, and where to confirm it.
              </h2>
            </Reveal>

            <Reveal delay={0.08}>
              <div className="mt-8 border-l-[3px] border-[#305CF8] pl-5">
                <p className="text-lg leading-relaxed text-[#0C1234]">
                  The Zoiko HR developer hub is the public entry point to Developer Documentation.
                  It helps engineers find approved integration surfaces and their technical contracts
                  without implying entitlement, live availability or unsupported protocol details.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.16}>
              <p className="mt-6 text-base leading-relaxed text-[#64748B]">
                Documentation describes what exists. Whether your organization can use it depends
                on your plan, contract and configuration, which your administrator and account team
                confirm.
              </p>
            </Reveal>
          </div>

          {/* Right Column: Team Image */}
          <div className="lg:col-span-5">
            <Reveal delay={0.2}>
              <div className="relative overflow-hidden rounded-[20px] bg-gradient-to-br from-[#1B2450] to-[#2A4CC8] shadow-[0px_20px_40px_-15px_rgba(12,18,52,0.2)]">
                <Image
                  src="/images/developers/hero-team.png"
                  alt="Engineering team working together at laptops"
                  width={800}
                  height={500}
                  unoptimized
                  className="h-[360px] w-full object-cover"
                />
              </div>
            </Reveal>
          </div>
        </div>

        {/* 3 Status Cards in a Horizontal Bar with exact Figma SVG icons */}
        <Reveal delay={0.24}>
          <div className="mt-14 rounded-2xl border border-[#E2E8F0] bg-white p-6 shadow-sm">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:divide-x md:divide-[#E2E8F0]">
              <div className="flex flex-col justify-between pr-0 md:pr-6">
                <div>
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#EBF2FE]">
                      <Image
                        src="/images/developers/icons/icon-docs.svg"
                        alt=""
                        width={20}
                        height={20}
                        unoptimized
                      />
                    </div>
                    <h3 className="text-lg font-bold text-[#0C1234]">Developer Documentation</h3>
                  </div>
                  <p className="mt-2.5 text-sm text-[#64748B]">
                    Owns the current technical contract.
                  </p>
                </div>
                <Link
                  href="#reference-explorer"
                  className="mt-4 inline-flex items-center text-sm font-semibold text-[#305CF8] hover:underline"
                >
                  Open docs →
                </Link>
              </div>

              <div className="flex flex-col justify-between pl-0 md:pl-6 pr-0 md:pr-6">
                <div>
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#EBF2FE]">
                      <Image
                        src="/images/developers/icons/icon-updates.svg"
                        alt=""
                        width={20}
                        height={20}
                        unoptimized
                      />
                    </div>
                    <h3 className="text-lg font-bold text-[#0C1234]">Product Updates</h3>
                  </div>
                  <p className="mt-2.5 text-sm text-[#64748B]">
                    Owns release history and chronology.
                  </p>
                </div>
                <Link
                  href="/product-updates"
                  className="mt-4 inline-flex items-center text-sm font-semibold text-[#305CF8] hover:underline"
                >
                  See updates →
                </Link>
              </div>

              <div className="flex flex-col justify-between pl-0 md:pl-6">
                <div>
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#EBF2FE]">
                      <Image
                        src="/images/developers/icons/icon-status.svg"
                        alt=""
                        width={20}
                        height={20}
                        unoptimized
                      />
                    </div>
                    <h3 className="text-lg font-bold text-[#0C1234]">Service Status</h3>
                  </div>
                  <p className="mt-2.5 text-sm text-[#64748B]">
                    Owns live availability and incidents.
                  </p>
                </div>
                <Link
                  href="/service-status"
                  className="mt-4 inline-flex items-center text-sm font-semibold text-[#305CF8] hover:underline"
                >
                  Check status →
                </Link>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Warning Banner */}
        <Reveal delay={0.28}>
          <div className="mt-6 flex items-start gap-3 rounded-[14px] border border-[#FDE68A] bg-[#FEF3C7]/40 p-4 text-[#92400E]">
            <Image
              src="/images/developers/icons/icon-warning.svg"
              alt=""
              width={18}
              height={18}
              unoptimized
              className="mt-0.5 shrink-0"
            />
            <p className="text-sm font-medium leading-relaxed">
              Documentation being public doesn&apos;t mean a surface is available to your organization
              or in production. Confirm entitlement with your administrator or account team.
            </p>
          </div>
        </Reveal>

        {/* Part 2: Start Where Your Job Starts (Roles) */}
        <div className="mt-24">
          <Reveal>
            <div className="text-center sm:text-left">
              <h2 className="text-3xl font-bold tracking-tight text-[#0C1234] sm:text-4xl">
                Start where your job starts.
              </h2>
              <p className="mt-3 text-base text-[#64748B]">
                Pick the role closest to yours and jump to the part of the hub that answers your first question.
              </p>
            </div>
          </Reveal>

          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {ROLE_CARDS.map((card, idx) => (
              <Reveal key={card.role} delay={idx * 0.08}>
                <div className="flex h-full flex-col overflow-hidden rounded-2xl border border-[#E2E8F0] bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-md">
                  <div className="relative h-44 w-full overflow-hidden bg-slate-100">
                    <Image
                      src={card.image}
                      alt={card.role}
                      width={400}
                      height={240}
                      unoptimized
                      className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-5">
                    <h3 className="text-lg font-bold text-[#0C1234]">{card.role}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-[#64748B]">
                      {card.description}
                    </p>
                    <div className="mt-auto pt-4">
                      <a
                        href={card.href}
                        className="inline-flex items-center text-sm font-semibold text-[#305CF8] hover:underline"
                      >
                        {card.linkText}
                      </a>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
