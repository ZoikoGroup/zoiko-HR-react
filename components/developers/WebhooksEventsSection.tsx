"use client";

import Image from "next/image";
import Link from "next/link";
import { Container, Reveal } from "@/components/ui";

const EVENTS = [
  {
    name: "employee.updated",
    description: "A core employee field changed. Payload carries identifiers, not sensitive values.",
    type: "preview" as const,
  },
  {
    name: "leave_request.decided",
    description: "A leave request was approved or declined.",
    type: "preview" as const,
  },
  {
    name: "org_unit.changed",
    description: "A department or location was created, renamed or closed.",
    type: "preview" as const,
  },
  {
    name: "document.acknowledged",
    description: "State can't be confirmed right now. Check Developer Documentation before relying on it.",
    type: "unavailable" as const,
  },
];

const DELIVERY_STEPS = [
  {
    title: "Receive",
    description: "Accept the delivery at your registered endpoint.",
    dotColor: "border-[#305CF8] bg-white",
  },
  {
    title: "Verify",
    description: "Check authenticity using the verification method in the docs for your version.",
    dotColor: "border-[#F59E0B] bg-white",
  },
  {
    title: "Deduplicate",
    description: "Use the event identifier so repeated deliveries are processed once.",
    dotColor: "border-[#305CF8] bg-white",
  },
  {
    title: "Fetch, then act",
    description: "Read the current record through the API before changing anything downstream.",
    dotColor: "border-[#10B981] bg-[#10B981]",
  },
];

export function WebhooksEventsSection() {
  return (
    <section id="run-reliably" className="bg-[#FAFBFD] py-20 sm:py-28">
      <Container>
        {/* Chapter Header: Run reliably */}
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          {/* Left: Chapter intro and links */}
          <div>
            <Reveal>
              <span className="text-[14px] font-semibold text-[#305CF8]">
                Run reliably
              </span>
              <h2 className="mt-2.5 text-3xl font-extrabold tracking-tight text-[#0C1234] sm:text-4xl lg:text-[42px] lg:leading-[1.12]">
                Handle events, errors and change without guesswork.
              </h2>
              <p className="mt-3.5 max-w-[520px] text-[15px] sm:text-[16px] leading-[26px] text-[#64748B]">
                Plan for what happens after go-live: event delivery, failures, environments and the
                version lifecycle.
              </p>
            </Reveal>

            {/* In this chapter links list */}
            <Reveal delay={0.12}>
              <div className="mt-6 border-t border-[#E3E8EF]">
                <a
                  href="#webhooks-events"
                  className="group flex items-center justify-between border-b border-[#E3E8EF] py-3.5 text-sm transition-colors"
                >
                  <span className="font-bold text-[#0C1234] group-hover:text-[#305CF8]">
                    Webhooks & events
                  </span>
                  <span className="text-[#64748B]">Verify, then process</span>
                </a>
                <a
                  href="#errors-limits"
                  className="group flex items-center justify-between border-b border-[#E3E8EF] py-3.5 text-sm transition-colors"
                >
                  <span className="font-bold text-[#0C1234] group-hover:text-[#305CF8]">
                    Errors, retries & limits
                  </span>
                  <span className="text-[#64748B]">What to do next</span>
                </a>
                <a
                  href="#environments"
                  className="group flex items-center justify-between border-b border-[#E3E8EF] py-3.5 text-sm transition-colors"
                >
                  <span className="font-bold text-[#0C1234] group-hover:text-[#305CF8]">
                    Environments
                  </span>
                  <span className="text-[#64748B]">Confirmed, not assumed</span>
                </a>
                <a
                  href="#versioning"
                  className="group flex items-center justify-between border-b border-[#E3E8EF] py-3.5 text-sm transition-colors"
                >
                  <span className="font-bold text-[#0C1234] group-hover:text-[#305CF8]">
                    Versioning & deprecation
                  </span>
                  <span className="text-[#64748B]">Lifecycle states</span>
                </a>
              </div>
            </Reveal>
          </div>

          {/* Right: Chapter banner image */}
          <div>
            <Reveal delay={0.16}>
              <div className="relative overflow-hidden rounded-[20px] bg-gradient-to-br from-[#1B2450] to-[#2A4CC8] shadow-[0px_20px_45px_-15px_rgba(12,18,52,0.25)]">
                <Image
                  src="/images/developers/run-reliably-banner.png"
                  alt="Rows of servers in a data center"
                  width={800}
                  height={500}
                  unoptimized
                  className="h-[380px] w-full object-cover sm:h-[420px] lg:h-[436px]"
                />
              </div>
            </Reveal>
          </div>
        </div>

        {/* Section: React to changes with events you can verify */}
        <div id="webhooks-events" className="mt-28">
          <Reveal>
            <h3 className="text-[28px] font-bold leading-tight tracking-[-0.02em] text-[#0C1234] sm:text-[34px] sm:leading-[38px]">
              React to changes with events you can
              <br className="hidden sm:inline" /> verify.
            </h3>
            <p className="mt-3 text-[15px] leading-relaxed text-[#64748B] sm:text-[17px] sm:leading-[27.2px]">
              Subscribe to documented events, verify every delivery with the method your version
              <br className="hidden sm:inline" /> specifies, and fetch current data before acting on it.
            </p>
          </Reveal>

          <div className="mt-10 grid gap-7 lg:grid-cols-2">
            {/* Left Column: Event Catalog */}
            <div className="space-y-4">
              <Reveal delay={0.08}>
                <div className="overflow-hidden rounded-2xl border border-[#EEF1F5] bg-white shadow-[0px_8px_24px_-12px_rgba(12,18,52,0.08)]">
                  <div className="flex items-center justify-between border-b border-[#EEF1F5] bg-white px-6 py-4">
                    <h4 className="text-base font-bold text-[#0C1234]">
                      Event catalog
                    </h4>
                    <span className="inline-flex items-center rounded-full bg-[#F1F5F9] px-2.5 py-1 text-xs font-semibold text-[#64748B]">
                      Illustrative
                    </span>
                  </div>
                  <div className="divide-y divide-[#EEF1F5]">
                    {EVENTS.map((event) => (
                      <div
                        key={event.name}
                        className="p-5 transition-colors hover:bg-[#FAFBFD]/70"
                      >
                        <div className="flex flex-wrap items-center justify-between gap-2">
                          <span className="font-mono text-[13.5px] font-bold text-[#0C1234]">
                            {event.name}
                          </span>
                          {event.type === "preview" ? (
                            <span className="inline-flex items-center gap-1.5 rounded-full bg-[#EDE9FE] px-2.5 py-0.5 text-xs font-semibold text-[#5B21B6]">
                              <span className="h-[7px] w-[7px] rounded-full bg-[#5B21B6]" />
                              Preview
                            </span>
                          ) : (
                            <span className="inline-flex items-center gap-1.5 rounded-full border border-dashed border-[#94A3B8] bg-white px-2.5 py-0.5 text-xs font-semibold text-[#64748B]">
                              <span className="h-[7px] w-[7px] rounded-full bg-[#64748B]" />
                              Registry unavailable
                            </span>
                          )}
                        </div>
                        <p className="mt-1.5 text-[13.5px] leading-[21.6px] text-[#64748B]">
                          {event.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Right Column: Handling a delivery + Code image */}
            <div className="space-y-4">
              {/* Handling a delivery Stepper Card */}
              <Reveal delay={0.16}>
                <div className="rounded-2xl border border-[#EEF1F5] bg-white p-6 shadow-[0px_8px_24px_-12px_rgba(12,18,52,0.08)]">
                  <h4 className="text-base font-bold text-[#0C1234]">
                    Handling a delivery
                  </h4>
                  <div className="mt-5 space-y-0">
                    {DELIVERY_STEPS.map((step, index) => (
                      <div key={step.title} className="relative pb-5 pl-7 last:pb-0">
                        {index < DELIVERY_STEPS.length - 1 && (
                          <div className="absolute bottom-0 left-[5px] top-3.5 w-[2px] bg-[#E3E8EF]" />
                        )}
                        <div
                          className={`absolute left-0 top-1 h-3 w-3 rounded-full border-2 ${step.dotColor}`}
                        />
                        <div>
                          <h5 className="text-[14.5px] font-bold leading-snug text-[#0C1234]">
                            {step.title}
                          </h5>
                          <p className="mt-0.5 text-sm leading-relaxed text-[#475569]">
                            {step.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>

              {/* Code image */}
              <Reveal delay={0.22}>
                <div className="relative overflow-hidden rounded-[18px] bg-gradient-to-br from-[#1B2450] to-[#2A4CC8] shadow-md">
                  <Image
                    src="/images/developers/webhooks-code.png"
                    alt="Code on a screen showing an event handler"
                    width={700}
                    height={350}
                    unoptimized
                    className="h-[180px] w-full object-cover"
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
