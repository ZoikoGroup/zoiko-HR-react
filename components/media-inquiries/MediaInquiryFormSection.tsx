"use client";

import { useState } from "react";
import Link from "next/link";
import { Container, Reveal, PlaceholderImage } from "@/components/ui";
import {
  SectionHeading,
  DARK_FIELD_CLASSES,
  RequiredMark,
  FieldNote,
  ChipGroup,
} from "./shared";
import { REQUEST_TYPES } from "./RequestTypesSection";

const MESSAGE_LIMIT = 1500;

const MEDIA_IDENTITIES = [
  "Outlet / organization",
  "Independent",
  "Freelance",
  "Student publication",
];

const DEADLINES = [
  "Today",
  "Within 2 business days",
  "This week",
  "No fixed deadline",
  "Exact date/time",
];

export function MediaInquiryFormSection() {
  const [identity, setIdentity] = useState(MEDIA_IDENTITIES[0]);
  const [deadline, setDeadline] = useState("");
  const [message, setMessage] = useState("");

  return (
    <section
      id="media-inquiry-form"
      className="scroll-mt-24 bg-slate-900 py-16"
    >
      <Container>
        {/* The heading spans the full width and the image starts level with the
            first field, as the design lays it out. */}
        <SectionHeading
          eyebrow="Press inquiry form · E10"
          title="Submit a media inquiry"
          tone="dark"
        >
          Six fields, plus topic and up to two request-specific context fields.
          No corporate domain required. No attachments.
        </SectionHeading>

        <Reveal delay={0.08}>
          <form
            // No approved press intake endpoint is wired up yet, so
            // submission stays inert rather than silently dropping a request.
            onSubmit={(event) => event.preventDefault()}
          >
            {/* The image sits beside the fields only — the submit block below
                runs full width, as the design lays it out. */}
            <div className="mt-8 grid gap-10 lg:grid-cols-[minmax(0,1fr)_331px]">
              <div className="flex flex-col gap-5">
                <div>
                  <label
                    htmlFor="media-full-name"
                    className="block pb-1.5 text-xs font-medium leading-5 text-slate-300"
                  >
                    Full name
                    <RequiredMark />
                  </label>
                  <input
                    id="media-full-name"
                    name="full-name"
                    type="text"
                    required
                    placeholder="Your name"
                    className={DARK_FIELD_CLASSES}
                  />
                </div>

                <div>
                  <label
                    htmlFor="media-email"
                    className="block pb-1.5 text-xs font-medium leading-5 text-slate-300"
                  >
                    Email address
                    <RequiredMark />
                    <FieldNote>No corporate domain required.</FieldNote>
                  </label>
                  <input
                    id="media-email"
                    name="email"
                    type="email"
                    required
                    placeholder="you@outlet.com or personal@email.com"
                    className={DARK_FIELD_CLASSES}
                  />
                </div>

                <div>
                  <p className="text-xs font-medium leading-5 text-slate-300">
                    Media identity
                    <RequiredMark />
                  </p>
                  <div className="py-2">
                    <ChipGroup
                      name="Media identity"
                      options={MEDIA_IDENTITIES}
                      value={identity}
                      onChange={setIdentity}
                    />
                  </div>
                  <label htmlFor="outlet-name" className="sr-only">
                    Publication or outlet name
                  </label>
                  <input
                    id="outlet-name"
                    name="outlet-name"
                    type="text"
                    placeholder="Publication or outlet name"
                    className={DARK_FIELD_CLASSES}
                  />
                </div>

                <div>
                  <label
                    htmlFor="request-type"
                    className="block pb-1.5 text-xs font-medium leading-5 text-slate-300"
                  >
                    Request type
                    <RequiredMark />
                  </label>
                  <select
                    id="request-type"
                    name="request-type"
                    required
                    defaultValue=""
                    className={DARK_FIELD_CLASSES}
                  >
                    <option value="" disabled>
                      Select a request type
                    </option>
                    {REQUEST_TYPES.map((type) => (
                      <option key={type.title} value={type.title}>
                        {type.title}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <p className="text-xs font-medium leading-5 text-slate-300">
                    Deadline / timing
                    <RequiredMark />
                    <FieldNote>No response time is guaranteed.</FieldNote>
                  </p>
                  <div className="pt-1.5">
                    <ChipGroup
                      name="Deadline / timing"
                      options={DEADLINES}
                      value={deadline}
                      onChange={setDeadline}
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="media-message"
                    className="block pb-1.5 text-xs font-medium leading-5 text-slate-300"
                  >
                    Message / context
                    <RequiredMark />
                    <FieldNote>
                      Do not include passwords, credentials, employee records,
                      health information, private customer content, or other
                      sensitive personal data.
                    </FieldNote>
                  </label>
                  <textarea
                    id="media-message"
                    name="message"
                    required
                    rows={5}
                    maxLength={MESSAGE_LIMIT}
                    value={message}
                    onChange={(event) => setMessage(event.target.value)}
                    placeholder="Brief, non-confidential context about your request. Do not send sensitive/embargoed material through this form."
                    className={`${DARK_FIELD_CLASSES} resize-y`}
                  />
                  <p className="pt-1 text-xs leading-4 text-slate-500">
                    {message.length.toLocaleString()} /{" "}
                    {MESSAGE_LIMIT.toLocaleString()} characters
                  </p>
                </div>

              </div>

              {/* Absolutely positioned so the image's intrinsic height never
                  drives the row — the fields set the height, image crops to it. */}
              <div className="relative hidden lg:block">
                <Reveal delay={0.16} className="absolute inset-0">
                  <PlaceholderImage
                    src="/images/media-inquiries/inquiry-form.png"
                    alt="Colleagues smiling while working at a laptop"
                    label="Submitting a media inquiry"
                    className="h-full w-full rounded-xl border border-slate-900 bg-slate-950"
                  />
                </Reveal>
              </div>
            </div>

            <div className="pt-7">
              <button
                type="submit"
                className="rounded-[10px] bg-primary px-7 py-3 text-base font-semibold text-white transition-colors hover:bg-primary-dark"
              >
                Submit media inquiry
              </button>
              <p className="pt-2.5 text-xs leading-4 text-slate-500">
                By submitting, you agree to our{" "}
                <Link href="/privacy-notice" className="underline">
                  Privacy Notice
                </Link>
                . Do not send sensitive, confidential, or embargoed material.{" "}
                <Link href="/security-reporting" className="underline">
                  Security reports
                </Link>{" "}
                use a separate route.
              </p>
            </div>
          </form>
        </Reveal>
      </Container>
    </section>
  );
}
