"use client";

import { useState } from "react";
import Link from "next/link";
import { Container, Reveal, PlaceholderImage } from "@/components/ui";
import { SectionHeading } from "./shared";

const MESSAGE_LIMIT = 4000;

const FIELD_CLASSES =
  "w-full rounded-lg border border-slate-300 bg-white px-3.5 py-3 text-sm text-ink outline-none transition-colors placeholder:text-slate-400 focus:border-primary focus:ring-1 focus:ring-primary/30";

function RequiredMark() {
  return (
    <span aria-hidden className="text-red-400">
      {" "}
      *
    </span>
  );
}

function OptionalTag() {
  return <span className="ml-1 font-normal text-slate-400">(optional)</span>;
}

const TEXT_FIELDS = [
  { id: "full-name", label: "Full name", type: "text", required: true },
  { id: "email", label: "Email address", type: "email", required: true },
  { id: "organization", label: "Organization", type: "text", required: false },
  { id: "subject", label: "Subject", type: "text", required: true },
];

export function InquiryFormSection() {
  const [message, setMessage] = useState("");

  return (
    <section id="general-inquiry" className="scroll-mt-24 bg-white py-16">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_320px]">
          <div>
            <SectionHeading
              eyebrow="03 / General Inquiry Form"
              title="Send a general inquiry"
            >
              For questions that don&apos;t fit a specialized path. Fill only
              what&apos;s needed.
            </SectionHeading>

            <Reveal delay={0.08}>
              <form
                // No approved inquiry intake endpoint is wired up yet, so
                // submission stays inert rather than silently dropping a message.
                onSubmit={(event) => event.preventDefault()}
                className="mt-7 flex flex-col gap-4"
              >
                {TEXT_FIELDS.map((field) => (
                  <div key={field.id}>
                    <label
                      htmlFor={field.id}
                      className="block pb-1.5 text-xs font-semibold leading-5 text-slate-900"
                    >
                      {field.label}
                      {field.required ? <RequiredMark /> : <OptionalTag />}
                    </label>
                    <input
                      id={field.id}
                      name={field.id}
                      type={field.type}
                      required={field.required}
                      className={FIELD_CLASSES}
                    />
                  </div>
                ))}

                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs font-semibold leading-5 text-slate-900"
                  >
                    Message
                    <RequiredMark />
                  </label>
                  <p className="pb-1.5 pt-1 text-xs leading-4 text-slate-500">
                    Please describe your question without including passwords,
                    payment details, government identifiers, payroll files, or
                    other sensitive records.
                  </p>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    maxLength={MESSAGE_LIMIT}
                    value={message}
                    onChange={(event) => setMessage(event.target.value)}
                    className={`${FIELD_CLASSES} resize-y`}
                  />
                  <p className="pt-1 text-right text-xs leading-4 text-slate-400">
                    {message.length.toLocaleString()} /{" "}
                    {MESSAGE_LIMIT.toLocaleString()}
                  </p>
                </div>

                <div className="flex items-start gap-2.5 pt-1">
                  <input
                    id="product-news"
                    name="product-news"
                    type="checkbox"
                    className="mt-0.5 size-4 flex-none rounded-xs border border-neutral-500 accent-primary"
                  />
                  <label
                    htmlFor="product-news"
                    className="text-xs leading-5 text-slate-600"
                  >
                    I&apos;d like to receive product news and updates from Zoiko
                    HR.
                    <OptionalTag />
                  </label>
                </div>

                <div className="rounded-lg border border-slate-200 bg-gray-50 px-3.5 py-3">
                  <p className="text-xs leading-5 text-slate-600">
                    By submitting this form, your inquiry is processed in
                    accordance with the{" "}
                    <Link
                      href="/privacy-notice"
                      className="text-primary underline"
                    >
                      Zoiko HR Privacy Policy
                    </Link>
                    . We use the information you provide to respond to your
                    inquiry and route it to the appropriate team.
                  </p>
                </div>

                <button
                  type="submit"
                  className="w-full rounded-[10px] bg-primary px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-primary-dark"
                >
                  Send inquiry
                </button>
              </form>
            </Reveal>
          </div>

          <Reveal delay={0.16} className="hidden lg:block">
            <PlaceholderImage
              src="/images/contact-zoiko-hr/inquiry-form.png"
              alt="Two people shaking hands across a meeting table"
              label="Sending an inquiry"
              className="h-full min-h-96 w-full rounded-xl border border-slate-200 bg-gray-50"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
