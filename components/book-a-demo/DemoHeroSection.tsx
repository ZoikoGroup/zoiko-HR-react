"use client";

import Link from "next/link";
import { Container, Reveal } from "@/components/ui";
import { FIELD_CLASSES } from "./shared";

const PROMISES = [
  "A session scoped to the entities, records or workflows you actually manage.",
  "Time with someone who can answer security, access and implementation questions.",
  "A clear view of what setup and rollout would realistically involve.",
  "No pressure to decide anything on the call.",
];

const ROLES = [
  "HR / People Ops",
  "IT / Technology",
  "Finance / Procurement",
  "Operations",
  "Legal / Compliance",
  "Executive / Leadership",
  "Other",
];

const SIZES = [
  "1–50 employees",
  "51–200 employees",
  "201–1,000 employees",
  "1,001–5,000 employees",
  "5,000+ employees",
];

export function DemoHeroSection() {
  return (
    <section className="bg-[radial-gradient(at_50%_0%,#164e63_0%,#082f49_55%,#0f172a_100%)] py-16 sm:py-20">
      <Container>
        <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-14">
          <div>
            <Reveal>
              <p className="text-xs font-bold uppercase tracking-[0.1em] text-indigo-400">
                Book a demo
              </p>
            </Reveal>

            <Reveal delay={0.06}>
              <h1 className="mt-5 text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl lg:leading-[47px]">
                See Zoiko HR working the way your organization actually operates.
              </h1>
            </Reveal>

            <Reveal delay={0.12}>
              <p className="mt-5 max-w-[480px] leading-7 text-slate-300">
                Tell us a little about your team and we&apos;ll tailor a
                walkthrough to the records, workflows, access and reporting you
                care about most — not a generic tour.
              </p>
            </Reveal>

            <Reveal delay={0.18}>
              <ul className="mt-7 flex flex-col gap-3.5">
                {PROMISES.map((promise) => (
                  <li key={promise} className="flex items-start gap-3">
                    <span
                      aria-hidden
                      className="mt-px flex size-5 flex-none items-center justify-center rounded-full bg-teal-400/20 text-xs font-bold text-teal-400"
                    >
                      ✓
                    </span>
                    <span className="text-sm leading-5 text-slate-200">
                      {promise}
                    </span>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={0.24}>
              <p className="mt-6 max-w-[460px] text-xs leading-5 text-slate-400">
                No cost, no contract and no obligation to buy. Already a
                customer?{" "}
                <Link
                  href="/help-center"
                  className="text-indigo-400 transition-colors hover:text-indigo-300"
                >
                  Go to Help Center
                </Link>{" "}
                instead of booking a demo.
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.1}>
            <form
              // No approved demo-request endpoint is wired up yet, so submission
              // stays inert rather than silently dropping a request.
              onSubmit={(event) => event.preventDefault()}
              className="rounded-2xl bg-white p-6 shadow-[0_30px_60px_rgba(0,0,0,0.35)] sm:p-8"
            >
              <h2 className="text-lg font-extrabold text-sky-950">
                Tell us about your organization
              </h2>
              <p className="mt-1.5 text-xs text-slate-400">
                Takes about a minute.
              </p>

              <div className="mt-4 grid gap-3.5 sm:grid-cols-2">
                <div>
                  <label htmlFor="demo-name" className="sr-only">
                    Full name
                  </label>
                  <input
                    id="demo-name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    placeholder="Full name"
                    className={FIELD_CLASSES}
                  />
                </div>
                <div>
                  <label htmlFor="demo-email" className="sr-only">
                    Work email
                  </label>
                  <input
                    id="demo-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="Work email"
                    className={FIELD_CLASSES}
                  />
                </div>
              </div>

              <div className="mt-3.5">
                <label htmlFor="demo-org" className="sr-only">
                  Organization name
                </label>
                <input
                  id="demo-org"
                  name="organization"
                  type="text"
                  autoComplete="organization"
                  placeholder="Organization name"
                  className={FIELD_CLASSES}
                />
              </div>

              <div className="mt-3.5 grid gap-3.5 sm:grid-cols-2">
                <div>
                  <label htmlFor="demo-role" className="sr-only">
                    Your role
                  </label>
                  <select
                    id="demo-role"
                    name="role"
                    defaultValue={ROLES[0]}
                    className={FIELD_CLASSES}
                  >
                    {ROLES.map((role) => (
                      <option key={role}>{role}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="demo-size" className="sr-only">
                    Organization size
                  </label>
                  <select
                    id="demo-size"
                    name="size"
                    defaultValue={SIZES[0]}
                    className={FIELD_CLASSES}
                  >
                    {SIZES.map((size) => (
                      <option key={size}>{size}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="mt-3.5">
                <label htmlFor="demo-region" className="sr-only">
                  Country or region
                </label>
                <input
                  id="demo-region"
                  name="region"
                  type="text"
                  autoComplete="country-name"
                  placeholder="Country or region"
                  className={FIELD_CLASSES}
                />
              </div>

              <div className="mt-3.5">
                <label htmlFor="demo-goal" className="sr-only">
                  What are you hoping to solve?
                </label>
                <textarea
                  id="demo-goal"
                  name="goal"
                  rows={3}
                  placeholder="What are you hoping to solve? (optional)"
                  className={`${FIELD_CLASSES} resize-y`}
                />
              </div>

              <button
                type="submit"
                className="mt-4 w-full rounded-lg bg-primary p-3.5 text-base font-semibold text-white transition-colors hover:bg-primary-dark"
              >
                Request my demo
              </button>

              <p className="mt-4 text-xs leading-4 text-slate-400">
                By submitting, you agree to be contacted about Zoiko HR. See our{" "}
                <Link
                  href="/privacy-notice"
                  className="text-primary transition-colors hover:text-primary-dark"
                >
                  Privacy Notice
                </Link>
                . No credit card required.
              </p>
            </form>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
