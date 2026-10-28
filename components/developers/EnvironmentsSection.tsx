"use client";

import Image from "next/image";
import { Container, Reveal } from "@/components/ui";

const ENVIRONMENTS = [
  {
    title: "Production",
    description: "Your live organization data. Treat every call as real.",
    tag: "Real, governed by policy",
    image: "/images/developers/env-servers.png",
  },
  {
    title: "Test environment",
    description: "Available only where the Environment Registry establishes one for you.",
    tag: "Confirm in registry · Synthetic only",
    image: "/images/developers/env-code.png",
  },
  {
    title: "Private previews",
    description: "Early surfaces shared under specific agreements.",
    tag: "Access · By agreement only",
    image: "/images/developers/env-testing.png",
  },
];

export function EnvironmentsSection() {
  return (
    <section id="environments" className="border-t border-[#E2E8F0] bg-[#FAFBFD] py-20 sm:py-28">
      <Container>
        <Reveal>
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-[#0C1234] sm:text-4xl">
              Use environments your registry confirms, never assumed ones.
            </h2>
            <p className="mt-3 max-w-2xl text-base text-[#64748B]">
              Which environments exist for your organization is set by the Environment Registry and
              your agreement. Don&apos;t assume a sandbox or staging environment is available.
            </p>
          </div>
        </Reveal>

        {/* 3 Environment Cards */}
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {ENVIRONMENTS.map((env, idx) => (
            <Reveal key={env.title} delay={idx * 0.08}>
              <div className="flex h-full flex-col overflow-hidden rounded-2xl border border-[#E2E8F0] bg-white shadow-sm transition-all hover:shadow-md">
                <div className="relative h-48 w-full overflow-hidden bg-slate-100">
                  <Image
                    src={env.image}
                    alt={env.title}
                    width={400}
                    height={240}
                    unoptimized
                    className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-lg font-bold text-[#0C1234]">{env.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#64748B]">
                    {env.description}
                  </p>
                  <div className="mt-auto pt-5">
                    <span className="inline-block rounded-full bg-[#F1F5F9] px-3 py-1 text-xs font-semibold text-[#334155]">
                      {env.tag}
                    </span>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
