"use client";

import { useState } from "react";
import { Container, Reveal, PlaceholderImage } from "@/components/ui";
import { CheckIcon, SectionHeading } from "./shared";

type Role = {
  id: string;
  icon: string;
  label: string;
  /** Null until approved copy exists — the tab renders but can't be selected. */
  content: { examples: string[]; boundary: string } | null;
};

/**
 * Only the Employee tab's content is in the design. The other tabs keep the
 * layout but stay disabled rather than opening onto empty panels.
 */
const ROLES: Role[] = [
  {
    id: "employee",
    icon: "👤",
    label: "Employee",
    content: {
      examples: [
        'Find own policy guidance: "What notice period applies to my location?" → scoped policy answer with source.',
        'Summarize own assigned tasks: "What do I have due before end of cycle?" → task list with due dates.',
        'Draft own request text: "Help me draft a flexible-working request." → labeled Draft for review.',
      ],
      boundary: "No access to other employees' information or manager-only content.",
    },
  },
  { id: "manager", icon: "👷", label: "Manager", content: null },
  { id: "hr-admin", icon: "⚙️", label: "HR Admin", content: null },
  { id: "authorized-leader", icon: "📊", label: "Authorized Leader", content: null },
];

export function RoleExperiencesSection() {
  const [activeId, setActiveId] = useState(ROLES[0].id);
  const active = ROLES.find((role) => role.id === activeId) ?? ROLES[0];

  return (
    <section className="bg-white py-16 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="Role experiences"
          title="Purpose-limited assistance for every role — different examples, same governed model."
          className="max-w-[640px]"
        >
          Role tabs change examples and narrative emphasis only. Real
          authorization is determined by approved use-case scope and current
          context, not by which tab you view.
        </SectionHeading>

        <Reveal delay={0.08}>
          <div role="tablist" aria-label="Role" className="mt-10 flex gap-2 overflow-x-auto pb-1 sm:flex-wrap">
            {ROLES.map((role) => {
              const selected = role.id === activeId;
              return (
                <button
                  key={role.id}
                  type="button"
                  role="tab"
                  id={`ai-role-tab-${role.id}`}
                  aria-selected={selected}
                  aria-controls="ai-role-panel"
                  disabled={!role.content}
                  onClick={() => setActiveId(role.id)}
                  className={`inline-flex flex-none items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-colors ${
                    selected
                      ? "bg-primary text-white shadow-md shadow-primary/30"
                      : "border border-slate-200 bg-slate-50 text-slate-600 enabled:hover:border-primary enabled:hover:text-primary disabled:cursor-not-allowed"
                  }`}
                >
                  <span aria-hidden>{role.icon}</span>
                  {role.label}
                </button>
              );
            })}
          </div>
        </Reveal>

        {active.content && (
          <div
            id="ai-role-panel"
            role="tabpanel"
            aria-labelledby={`ai-role-tab-${active.id}`}
            className="mt-8 grid gap-6 lg:grid-cols-2"
          >
            <Reveal className="flex flex-col gap-4">
              <div className="rounded-2xl border border-slate-200 bg-white p-6">
                <p className="text-sm font-semibold uppercase leading-5 tracking-wide text-primary">
                  Approved assistance examples
                </p>
                <ul className="mt-4 flex flex-col gap-4">
                  {active.content.examples.map((example) => (
                    <li key={example} className="flex items-start gap-2.5">
                      <CheckIcon className="mt-0.5 size-4 flex-none text-primary" />
                      <span className="text-sm leading-6 text-slate-600">{example}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                <p className="text-xs font-semibold leading-5 text-slate-600">Hard boundary</p>
                <p className="mt-2 text-xs leading-5 text-slate-400 sm:text-sm">{active.content.boundary}</p>
              </div>
            </Reveal>

            <Reveal delay={0.1} className="lg:h-full">
              <PlaceholderImage
                src="/images/ai-assistance/role-experiences.png"
                alt="A manager and an employee shaking hands in an office"
                label="Manager and employee meeting"
                loading="lazy"
                className="aspect-[588/345] w-full rounded-2xl border border-slate-200 lg:aspect-auto lg:h-full"
              />
            </Reveal>
          </div>
        )}
      </Container>
    </section>
  );
}
