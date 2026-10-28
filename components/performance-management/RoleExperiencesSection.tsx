"use client";

import { useState } from "react";
import { Container, Reveal, PlaceholderImage } from "@/components/ui";
import { CheckIcon, SectionHeading } from "./shared";

type Role = {
  id: string;
  icon: string;
  label: string;
  /** Null until approved copy exists — the tab renders but can't be selected. */
  access: { can: string[]; cannot: string[] } | null;
};

/**
 * The design only shows the Employee tab's content. The other roles keep
 * their tabs so the layout matches, but stay disabled until their copy lands
 * rather than opening onto empty panels.
 */
const ROLES: Role[] = [
  {
    id: "employee",
    icon: "👤",
    label: "Employee",
    access: {
      can: [
        "View own goals, review criteria and due dates",
        "Complete self-review within the cycle window",
        "Provide approved feedback within configured rules",
        "Acknowledge outcomes and request clarification where configured",
        "Track own development actions and update progress",
      ],
      cannot: [
        "Edit manager's review input",
        "View other employees' restricted performance data",
        "Change the review framework or criteria",
        "Access calibration session before permitted stage",
      ],
    },
  },
  { id: "manager", icon: "👷", label: "Manager", access: null },
  { id: "hr-admin", icon: "⚙️", label: "HR Admin", access: null },
  { id: "authorized-leader", icon: "📊", label: "Authorized Leader", access: null },
];

export function RoleExperiencesSection() {
  const [activeId, setActiveId] = useState(ROLES[0].id);
  const active = ROLES.find((role) => role.id === activeId) ?? ROLES[0];

  return (
    <section className="border-y border-slate-200 bg-slate-50 py-16 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="Role experiences"
          title="One platform, purpose-limited access for every role."
          className="max-w-[640px]"
        />

        <Reveal delay={0.08}>
          <div
            role="tablist"
            aria-label="Role"
            className="mt-10 flex gap-2 overflow-x-auto pb-1 sm:flex-wrap"
          >
            {ROLES.map((role) => {
              const selected = role.id === activeId;
              return (
                <button
                  key={role.id}
                  type="button"
                  role="tab"
                  id={`role-tab-${role.id}`}
                  aria-selected={selected}
                  aria-controls="role-panel"
                  disabled={!role.access}
                  onClick={() => setActiveId(role.id)}
                  className={`inline-flex flex-none items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-colors ${
                    selected
                      ? "bg-primary text-white shadow-md shadow-primary/30"
                      : "border border-slate-200 bg-white/60 text-slate-600 enabled:hover:border-primary enabled:hover:text-primary disabled:cursor-not-allowed"
                  }`}
                >
                  <span aria-hidden>{role.icon}</span>
                  {role.label}
                </button>
              );
            })}
          </div>
        </Reveal>

        {active.access && (
          <div
            id="role-panel"
            role="tabpanel"
            aria-labelledby={`role-tab-${active.id}`}
            className="mt-8 grid gap-6 lg:grid-cols-2"
          >
            <Reveal className="lg:h-full">
              <PlaceholderImage
                src="/images/performance-management/role-experiences.png"
                alt="A team reviewing documents together around a meeting table"
                label="Team reviewing documents together"
                loading="lazy"
                className="aspect-[588/401] w-full rounded-2xl border border-slate-200 lg:aspect-auto lg:h-full"
              />
            </Reveal>

            <Reveal delay={0.1} className="flex flex-col gap-4">
              <div className="rounded-2xl border border-green-300 bg-green-50 p-5">
                <h3 className="text-sm font-semibold leading-5 text-green-900">What I can do</h3>
                <ul className="mt-3 flex flex-col gap-2">
                  {active.access.can.map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <CheckIcon className="mt-1 size-4 flex-none text-green-700" />
                      <span className="text-sm leading-6 text-slate-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white/60 p-5">
                <h3 className="text-sm font-semibold leading-5 text-slate-600">
                  What I cannot do in this role
                </h3>
                <ul className="mt-3 flex flex-col gap-2">
                  {active.access.cannot.map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <span aria-hidden className="mt-0.5 flex-none text-slate-300">
                        —
                      </span>
                      <span className="text-sm leading-6 text-slate-500">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        )}
      </Container>
    </section>
  );
}
