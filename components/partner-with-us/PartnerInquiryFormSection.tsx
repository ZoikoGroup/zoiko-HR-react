"use client";

import { useState } from "react";
import Link from "next/link";
import { Container, Reveal, PlaceholderImage } from "@/components/ui";
import {
  SectionHeading,
  DARK_FIELD_CLASSES,
  RequiredMark,
  OptionalNote,
} from "./shared";
import { RELATIONSHIP_AREAS } from "./RelationshipAreasSection";

const CONTEXT_LIMIT = 800;

/**
 * Routing regions only — this list is for directing the inquiry, and the
 * design is explicit that it confers no territory eligibility. Replace with
 * the approved routing list when one is supplied.
 */
const REGIONS = [
  "United Kingdom",
  "Ireland",
  "United States",
  "Canada",
  "Australia / New Zealand",
  "India",
  "Singapore",
  "United Arab Emirates",
  "South Africa",
  "Europe — other",
  "Asia Pacific — other",
  "Middle East & Africa — other",
  "Latin America",
  "Other / not listed",
];

const EXISTING_RELATIONSHIPS = [
  "None / not applicable",
  "Current customer",
  "Current partner",
  "Prospective customer in discussion",
  "Prefer not to say",
];

export function PartnerInquiryFormSection() {
  const [context, setContext] = useState("");

  return (
    <section id="partner-inquiry" className="scroll-mt-24 bg-slate-900 py-16">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_331px]">
          <div>
            <SectionHeading
              eyebrow="Partner inquiry form · E4.5"
              title="Send a partner inquiry"
              tone="dark"
            >
              Minimum information only. Do not include employee or customer
              records, credentials, payroll data, or other confidential
              material.
            </SectionHeading>

            <Reveal delay={0.08}>
              <form
                // No approved partner intake endpoint is wired up yet, so
                // submission stays inert rather than silently dropping an inquiry.
                onSubmit={(event) => event.preventDefault()}
                className="mt-8 flex flex-col gap-6"
              >
                <div>
                  <label
                    htmlFor="organization-name"
                    className="block pb-1.5 text-xs font-medium leading-5 text-slate-300"
                  >
                    Organization name
                    <RequiredMark />
                  </label>
                  <input
                    id="organization-name"
                    name="organization-name"
                    type="text"
                    required
                    placeholder="Acme Corp"
                    className={DARK_FIELD_CLASSES}
                  />
                </div>

                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="work-email"
                      className="block pb-1.5 text-xs font-medium leading-5 text-slate-300"
                    >
                      Work email
                      <RequiredMark />
                    </label>
                    <input
                      id="work-email"
                      name="work-email"
                      type="email"
                      required
                      placeholder="you@company.com"
                      className={DARK_FIELD_CLASSES}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="organization-website"
                      className="block pb-1.5 text-xs font-medium leading-5 text-slate-300"
                    >
                      Organization website
                    </label>
                    <input
                      id="organization-website"
                      name="organization-website"
                      type="url"
                      placeholder="https://yourcompany.com"
                      className={DARK_FIELD_CLASSES}
                    />
                  </div>
                </div>

                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="country-region"
                      className="block pb-1.5 text-xs font-medium leading-5 text-slate-300"
                    >
                      Country / region
                      <RequiredMark />
                      <OptionalNote>
                        (for routing — not territory eligibility)
                      </OptionalNote>
                    </label>
                    <select
                      id="country-region"
                      name="country-region"
                      required
                      defaultValue=""
                      className={DARK_FIELD_CLASSES}
                    >
                      <option value="" disabled>
                        Select country / region
                      </option>
                      {REGIONS.map((region) => (
                        <option key={region} value={region}>
                          {region}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label
                      htmlFor="partnership-area"
                      className="block pb-1.5 text-xs font-medium leading-5 text-slate-300"
                    >
                      Partnership area
                      <RequiredMark />
                    </label>
                    <select
                      id="partnership-area"
                      name="partnership-area"
                      required
                      defaultValue=""
                      className={DARK_FIELD_CLASSES}
                    >
                      <option value="" disabled>
                        Select a relationship area
                      </option>
                      {RELATIONSHIP_AREAS.map((area) => (
                        <option key={area.id} value={area.id}>
                          {area.title}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="context"
                    className="block pb-1.5 text-xs font-medium leading-5 text-slate-300"
                  >
                    Anything else we should know?
                    <OptionalNote>
                      (optional · max {CONTEXT_LIMIT} characters)
                    </OptionalNote>
                  </label>
                  <textarea
                    id="context"
                    name="context"
                    rows={4}
                    maxLength={CONTEXT_LIMIT}
                    value={context}
                    onChange={(event) => setContext(event.target.value)}
                    placeholder="Brief, non-confidential context about what you want to explore..."
                    className={`${DARK_FIELD_CLASSES} resize-y`}
                  />
                  <div className="flex flex-wrap items-start justify-between gap-2 pt-1">
                    <p className="text-xs leading-4 text-slate-500">
                      Do not include customer data, employee records,
                      payroll/tax information, credentials, secrets, or
                      vulnerability details.
                    </p>
                    <p className="text-xs leading-4 text-slate-500">
                      {context.length} / {CONTEXT_LIMIT}
                    </p>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="existing-relationship"
                    className="block pb-1.5 text-xs font-medium leading-5 text-slate-300"
                  >
                    Existing Zoiko relationship
                    <OptionalNote>(optional)</OptionalNote>
                  </label>
                  <select
                    id="existing-relationship"
                    name="existing-relationship"
                    defaultValue={EXISTING_RELATIONSHIPS[0]}
                    className={DARK_FIELD_CLASSES}
                  >
                    {EXISTING_RELATIONSHIPS.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="flex flex-col gap-3 pt-1">
                  <div className="flex items-start gap-2.5">
                    <input
                      id="acknowledge"
                      name="acknowledge"
                      type="checkbox"
                      required
                      className="mt-1 size-3 flex-none rounded-xs border border-neutral-500 accent-primary"
                    />
                    <label
                      htmlFor="acknowledge"
                      className="text-xs leading-5 text-slate-400"
                    >
                      I understand this inquiry is not acceptance,
                      certification, a reseller/referral right, territory
                      authorization, endorsement, or a contractual commitment.
                      <RequiredMark />
                    </label>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <input
                      id="partner-updates"
                      name="partner-updates"
                      type="checkbox"
                      className="mt-1 size-3 flex-none rounded-xs border border-neutral-500 accent-primary"
                    />
                    <label
                      htmlFor="partner-updates"
                      className="text-xs leading-5 text-slate-400"
                    >
                      I would like to receive product and partner updates from
                      Zoiko HR. (Optional — not required to submit.)
                    </label>
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="rounded-[10px] bg-primary px-7 py-3 text-base font-semibold text-white transition-colors hover:bg-primary-dark"
                  >
                    Submit partner inquiry
                  </button>
                  <p className="pt-2.5 text-xs leading-4 text-slate-500">
                    By submitting, you agree to our{" "}
                    <Link href="/privacy-notice" className="underline">
                      Privacy Notice
                    </Link>
                    . Security reports should use{" "}
                    <Link href="/security-reporting" className="underline">
                      Security Reporting
                    </Link>
                    .
                  </p>
                </div>
              </form>
            </Reveal>
          </div>

          <Reveal delay={0.16} className="hidden lg:block">
            <PlaceholderImage
              src="/images/partner-with-us/inquiry-form.png"
              alt="A team working together in a bright open-plan office"
              label="Sending a partner inquiry"
              className="h-full min-h-96 w-full rounded-xl border border-slate-900 bg-slate-950"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
