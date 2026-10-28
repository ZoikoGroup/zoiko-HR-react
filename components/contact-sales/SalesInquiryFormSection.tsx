"use client";

import Link from "next/link";
import { Container, Reveal } from "@/components/ui";
import { SectionHeading, RequiredMark, OptionalNote, FIELD_CLASSES } from "./shared";

/** Routing regions only — replace with the approved routing list when supplied. */
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

const ROLES = [
  "HR / People",
  "IT / Technology",
  "Finance / Procurement",
  "Operations",
  "Legal / Compliance",
  "Executive / Leadership",
  "Other",
];

export function SalesInquiryFormSection() {
  return (
    <section id="sales-inquiry" className="scroll-mt-24 bg-slate-900 py-16">
      <Container>
        <div className="mx-auto max-w-[760px]">
          <SectionHeading
            eyebrow="Sales inquiry form · E5"
            title="Send a sales inquiry"
            tone="dark"
          >
            Four required fields plus the topic you selected above. Optional
            context fields appear based on your topic.
          </SectionHeading>

          <Reveal delay={0.08}>
            <form
              // No approved sales intake endpoint is wired up yet, so submission
              // stays inert rather than silently dropping an inquiry.
              onSubmit={(event) => event.preventDefault()}
              className="mt-8 rounded-2xl bg-white px-6 py-8 shadow-[0px_8px_48px_0px_rgba(0,0,0,0.24)] sm:px-10 sm:py-9"
            >
              <div className="rounded-lg border border-amber-200 bg-amber-50 px-4 py-3">
                <p className="text-xs leading-5 text-amber-800">
                  Select an evaluation topic in the section above to see relevant
                  context fields before submitting.
                </p>
              </div>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="first-name"
                    className="block pb-1.5 text-xs font-medium leading-5 text-gray-700"
                  >
                    First name
                    <RequiredMark />
                  </label>
                  <input
                    id="first-name"
                    name="first-name"
                    type="text"
                    required
                    placeholder="First"
                    className={FIELD_CLASSES}
                  />
                </div>
                <div>
                  <label
                    htmlFor="last-name"
                    className="block pb-1.5 text-xs font-medium leading-5 text-gray-700"
                  >
                    Last name
                    <RequiredMark />
                  </label>
                  <input
                    id="last-name"
                    name="last-name"
                    type="text"
                    required
                    placeholder="Last"
                    className={FIELD_CLASSES}
                  />
                </div>

                <div>
                  <label
                    htmlFor="work-email"
                    className="block pb-1.5 text-xs font-medium leading-5 text-gray-700"
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
                    className={FIELD_CLASSES}
                  />
                </div>
                <div>
                  <label
                    htmlFor="organization"
                    className="block pb-1.5 text-xs font-medium leading-5 text-gray-700"
                  >
                    Organization
                    <RequiredMark />
                  </label>
                  <input
                    id="organization"
                    name="organization"
                    type="text"
                    required
                    placeholder="Your company"
                    className={FIELD_CLASSES}
                  />
                </div>

                <div>
                  <label
                    htmlFor="role"
                    className="block pb-1.5 text-xs font-medium leading-5 text-gray-700"
                  >
                    Role or function
                    <OptionalNote>(optional)</OptionalNote>
                  </label>
                  <select
                    id="role"
                    name="role"
                    defaultValue=""
                    className={FIELD_CLASSES}
                  >
                    <option value="">Select a role</option>
                    {ROLES.map((role) => (
                      <option key={role} value={role}>
                        {role}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="country-region"
                    className="block pb-1.5 text-xs font-medium leading-5 text-gray-700"
                  >
                    Country or region
                    <OptionalNote>(routing context only)</OptionalNote>
                  </label>
                  <select
                    id="country-region"
                    name="country-region"
                    defaultValue=""
                    className={FIELD_CLASSES}
                  >
                    <option value="">Select country / region</option>
                    {REGIONS.map((region) => (
                      <option key={region} value={region}>
                        {region}
                      </option>
                    ))}
                  </select>
                  <p className="pt-[3px] text-xs leading-4 text-gray-400">
                    Used to route your inquiry; does not confirm product
                    availability.
                  </p>
                </div>
              </div>

              <div className="mt-8 border-t border-slate-100 pt-4">
                <p className="text-xs leading-5 text-gray-500">
                  By submitting, your information is handled per the Zoiko HR{" "}
                  <Link href="/privacy-notice" className="text-primary underline">
                    Privacy Notice
                  </Link>{" "}
                  for the purpose of routing and responding to your inquiry. No
                  response-time guarantee is made.
                </p>

                <div className="flex items-start gap-2 pt-2.5">
                  <input
                    id="product-updates"
                    name="product-updates"
                    type="checkbox"
                    className="mt-0.5 size-3 flex-none rounded-xs border border-neutral-500 accent-primary"
                  />
                  <label
                    htmlFor="product-updates"
                    className="text-xs leading-4 text-gray-500"
                  >
                    I would like to receive product updates and news from Zoiko
                    HR. (Optional — not required to submit.)
                  </label>
                </div>
              </div>

              <button
                type="submit"
                className="mt-6 w-full rounded-[10px] bg-primary px-6 py-3.5 text-base font-semibold text-white transition-colors hover:bg-primary-dark"
              >
                Send sales inquiry
              </button>
            </form>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
