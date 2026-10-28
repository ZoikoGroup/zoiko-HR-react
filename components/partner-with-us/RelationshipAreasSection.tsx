"use client";

import { useState } from "react";
import { Container, Reveal, PlaceholderImage } from "@/components/ui";
import { SectionHeading } from "./shared";

export const RELATIONSHIP_AREAS = [
  {
    id: "technology-integration",
    title: "Technology & Integration",
    description:
      "A product or platform relationship focused on interoperability, integrations, APIs, identity, data exchange, or ecosystem connection.",
  },
  {
    id: "implementation-services",
    title: "Implementation & Services",
    description:
      "A relationship involving implementation, migration, configuration, enablement, training, or related services where approved.",
  },
  {
    id: "advisory-consulting",
    title: "Advisory / Consulting",
    description:
      "A relationship involving advisory, consulting, industry expertise, solution design, or related professional services.",
  },
  {
    id: "referral-channel",
    title: "Referral / Channel",
    description:
      "A relationship involving customer introductions, channel activity, resale or referral only if an approved public program exists.",
  },
  {
    id: "strategic-alliance",
    title: "Strategic Alliance",
    description:
      "A broader ecosystem or commercial relationship with defined scope where approved.",
  },
  {
    id: "other",
    title: "Other / Not Sure",
    description:
      "Not sure which area fits? Provide context and we will route your inquiry to the appropriate team for triage.",
  },
];

export function RelationshipAreasSection() {
  const [selected, setSelected] = useState("");

  return (
    <section id="relationship-areas" className="scroll-mt-24 bg-slate-50 py-16">
      <Container>
        <SectionHeading
          eyebrow="Partnership areas · E4.3"
          title="Choose a relationship area"
          className="max-w-[840px]"
        >
          Only currently public relationship areas are shown. Selecting an area
          does not create a relationship, right, certification, or commitment.
        </SectionHeading>

        {/* Figma runs the option list and the 288px image side by side, both
            ending level — a stretched flex row guarantees that at any height. */}
        <div className="mt-10 lg:flex lg:items-stretch">
          <fieldset className="flex flex-col gap-2 lg:min-w-0 lg:flex-1">
            <legend className="sr-only">Relationship area</legend>
            {RELATIONSHIP_AREAS.map((area, i) => (
              <Reveal key={area.id} delay={Math.min(0.06 + i * 0.04, 0.28)}>
                {/* Spine, then the radio in the open gutter, then the white
                    panel — the three pieces the design keeps separate. */}
                <label className="group flex cursor-pointer items-stretch">
                  <span
                    aria-hidden
                    className={`w-1 flex-none transition-colors ${
                      selected === area.id
                        ? "bg-primary"
                        : "bg-slate-200 group-hover:bg-slate-300"
                    }`}
                  />
                  <span className="flex flex-none items-start px-4 py-5 sm:px-5">
                    <input
                      type="radio"
                      name="relationship-area"
                      value={area.id}
                      checked={selected === area.id}
                      onChange={() => setSelected(area.id)}
                      className="size-4 accent-primary"
                    />
                  </span>
                  <span className="min-w-0 flex-1 bg-white px-1 py-4">
                    <span className="block text-base font-semibold leading-6 text-slate-900">
                      {area.title}
                    </span>
                    <span className="block pt-1 text-xs leading-5 text-slate-500">
                      {area.description}
                    </span>
                  </span>
                </label>
              </Reveal>
            ))}
          </fieldset>

          {/* The image is absolutely positioned so its intrinsic height never
              drives the row — the option list alone sets the height, and the
              image crops to exactly that. */}
          <div className="relative hidden lg:block lg:w-72 lg:flex-none">
            <Reveal delay={0.14} className="absolute inset-0">
              <PlaceholderImage
                src="/images/partner-with-us/relationship-areas.png"
                alt="Colleagues walking together through an office"
                label="Relationship areas"
                className="h-full w-full border-l border-slate-100 bg-indigo-300"
              />
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
