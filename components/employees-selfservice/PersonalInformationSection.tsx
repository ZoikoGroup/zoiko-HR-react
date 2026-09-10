"use client";

import { useState } from "react";
import { Container, Reveal, PlaceholderImage } from "@/components/ui";
import { SectionHeading, MarkedItem } from "./shared";

/**
 * The design publishes the "View" panel only. The other two restate governance
 * this page already states — the configured/approval split in this section's
 * lede and the request status model below — and name no specific field.
 */
const TABS = [
  {
    tab: "View",
    title: "See your permitted information",
    body: "Employees can view the personal and employment information their role is permitted to access. What is visible depends on the organization's configuration and data governance policy.",
    items: [
      "Personal details and contact information",
      "Employment record and role information",
      "Documents and assigned acknowledgments",
      "Relevant HR workflow status",
    ],
  },
  {
    tab: "Edit directly",
    title: "Update what is configured as directly editable",
    body: "Where the organization has configured a field as directly editable, employees can update it themselves. Every change is written to the employee record and stays subject to the same access and data governance policy.",
    items: [
      "Only fields the organization marks as directly editable",
      "Changes recorded against the employee record",
      "No approval step where none is configured",
      "Same access, retention and audit rules apply",
    ],
  },
  {
    tab: "Request change",
    title: "Route everything else through an approval",
    body: "Fields that are not directly editable are changed by submitting a request. The request follows the configured workflow, shows its current status and records the outcome.",
    items: [
      "Configured request type for the information involved",
      "Routed to HR or the designated approver",
      "Status visible from submission through to outcome",
      "Outcome recorded in request history",
    ],
  },
];

export function PersonalInformationSection() {
  const [active, setActive] = useState(0);
  const panel = TABS[active];

  return (
    <section className="bg-white py-16 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow="Personal information"
          title="Review, update and route changes safely."
          className="max-w-[580px]"
        >
          Self-service must not mean uncontrolled editing. The experience
          distinguishes clearly between what employees can view, edit directly
          and request a change to.
        </SectionHeading>

        <Reveal delay={0.08}>
          <div
            role="tablist"
            aria-label="Personal information actions"
            // Block grid rather than inline-grid: an inline-grid shrink-to-fits
            // to max-content, so the three tabs came out uneven instead of
            // filling the 384px control the design draws.
            className="mt-8 grid w-full max-w-[384px] overflow-hidden rounded-xl border border-slate-200 sm:grid-cols-3"
          >
            {TABS.map((item, i) => (
              <button
                key={item.tab}
                type="button"
                role="tab"
                id={`pi-tab-${i}`}
                aria-selected={i === active}
                aria-controls="pi-panel"
                onClick={() => setActive(i)}
                className={`min-h-11 px-4 py-2.5 text-xs font-semibold leading-5 transition-colors ${
                  i > 0 ? "border-t border-slate-200 sm:border-l sm:border-t-0" : ""
                } ${
                  i === active
                    ? "bg-primary text-white"
                    : "bg-white text-gray-500 hover:bg-slate-50"
                }`}
              >
                {item.tab}
              </button>
            ))}
          </div>
        </Reveal>

        <div className="mt-6 grid items-stretch gap-6 lg:grid-cols-2">
          <Reveal delay={0.12} className="h-full">
            <div
              role="tabpanel"
              id="pi-panel"
              aria-labelledby={`pi-tab-${active}`}
              className="h-full rounded-2xl border border-slate-200 bg-slate-50 p-7"
            >
              <p className="break-words text-xl font-extrabold leading-7 text-slate-950">
                {panel.title}
              </p>
              <p className="pt-3 break-words text-sm leading-6 text-slate-600">
                {panel.body}
              </p>
              <ul className="mt-5 flex flex-col gap-2.5">
                {panel.items.map((item) => (
                  <MarkedItem key={item} mark="✓" markClass="text-primary">
                    {item}
                  </MarkedItem>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.16} className="h-full">
            <PlaceholderImage
              src="/images/employees-selfservice/personal-information.webp"
              alt="Colleagues in conversation in an open office"
              label="Personal information"
              className="aspect-[604/302] w-full rounded-2xl border border-primary/20 bg-primary/5 lg:aspect-auto lg:h-full"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
