"use client";

import { useState } from "react";
import { Container, Reveal, Button, PlaceholderImage } from "@/components/ui";

const CHECKLIST_GROUPS = [
  {
    category: "For HR leaders",
    image: "/images/standardize-hr-operations/checklist-hr-leaders-cd1995.png",
    imageAlt: "HR leaders discussing priorities",
    questions: [
      { id: "q1", text: "Which processes most need a common baseline today?" },
      { id: "q2", text: "Where is local variation legitimate, and who approves it?" },
      { id: "q3", text: "What evidence would you need to show how a decision was made?" },
      { id: "q4", text: "Which decisions must always stay with a named person?" },
    ],
  },
  {
    category: "For HR administrators & operations",
    image: "/images/standardize-hr-operations/checklist-hr-admins-db9844.png",
    imageAlt: "HR administrator working at a computer",
    questions: [
      { id: "q5", text: "Who owns each policy, structure and workflow today?" },
      { id: "q6", text: "How will delegation be granted, scoped and ended?" },
      { id: "q7", text: "Which records need effective dates and correction history?" },
      { id: "q8", text: "What reporting must stay scoped to each role's authorized view?" },
    ],
  },
  {
    category: "For IT & integration owners",
    image: "/images/standardize-hr-operations/checklist-it-owners-71849b.png",
    imageAlt: "Laptop showing system data on screen",
    questions: [
      { id: "q9", text: "Which system is authoritative for each data set—HR, time, payroll, identity?" },
      { id: "q10", text: "How should source conflicts be surfaced and resolved?" },
      { id: "q11", text: "What remains customer-owned or jurisdiction-dependent?" },
      { id: "q12", text: "Which security and privacy evidence do you need from the Trust Center?" },
    ],
  },
];

export function EvaluationChecklistSection() {
  const [checkedIds, setCheckedIds] = useState<Record<string, boolean>>({});

  const toggleCheck = (id: string) => {
    setCheckedIds((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const totalCount = 12;
  const checkedCount = Object.values(checkedIds).filter(Boolean).length;
  const progressPercent = Math.round((checkedCount / totalCount) * 100);

  return (
    <section className="bg-white py-20 lg:py-28">
      <Container>
        <div className="max-w-3xl">
          <Reveal>
            <h2 className="text-3xl font-bold leading-tight tracking-[-0.02em] text-[#0C1234] sm:text-4xl lg:text-[40px]">
              Questions to settle before you commit.
            </h2>
          </Reveal>

          <Reveal delay={0.08}>
            <p className="mt-4 text-base leading-relaxed text-[#64748B]">
              Use this checklist with your team, then bring it to a demo.
              Ticking items here stays in your browser—nothing is sent anywhere.
            </p>
          </Reveal>
        </div>

        {/* 3 Checklist Columns */}
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {CHECKLIST_GROUPS.map((group, groupIdx) => (
            <Reveal key={groupIdx} delay={0.12 + groupIdx * 0.08} className="flex">
              <div className="flex w-full flex-col overflow-hidden rounded-[16px] border border-[#EEF1F5] bg-white shadow-[0px_8px_24px_-12px_rgba(12,18,52,0.08),0px_1px_2px_0px_rgba(12,18,52,0.04)]">
                {/* Header Image */}
                <div className="h-[146px] w-full overflow-hidden bg-gradient-to-br from-[#1B2450] to-[#2A4CC8]">
                  <PlaceholderImage
                    src={group.image}
                    alt={group.imageAlt}
                    className="h-full w-full object-cover"
                  />
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-lg font-bold tracking-tight text-[#0C1234]">
                    {group.category}
                  </h3>

                  {/* Checklist Items */}
                  <div className="mt-6 flex-1 space-y-4">
                    {group.questions.map((q) => {
                      const isChecked = !!checkedIds[q.id];
                      return (
                        <label
                          key={q.id}
                          className="flex cursor-pointer items-start gap-3 border-t border-[#EEF1F5] pt-3 text-sm transition-colors hover:text-[#0C1234]"
                        >
                          <input
                            type="checkbox"
                            checked={isChecked}
                            onChange={() => toggleCheck(q.id)}
                            className="mt-0.5 h-4 w-4 rounded border-[#CBD5E1] text-[#305CF8] focus:ring-[#305CF8]"
                          />
                          <span
                            className={`leading-snug transition-all ${
                              isChecked
                                ? "text-[#94A3B8] line-through"
                                : "text-[#475569]"
                            }`}
                          >
                            {q.text}
                          </span>
                        </label>
                      );
                    })}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Bottom Progress Bar & CTA */}
        <Reveal delay={0.3}>
          <div className="mt-10 flex flex-wrap items-center justify-between gap-6 rounded-[16px] border border-[#EEF1F5] bg-white p-5 shadow-[0px_8px_24px_-12px_rgba(12,18,52,0.08)] sm:p-6">
            <div className="w-full sm:flex-1">
              <div className="flex items-center justify-between text-sm font-semibold text-[#64748B]">
                <span>
                  {checkedCount} of {totalCount} questions reviewed
                </span>
                <span>{progressPercent}%</span>
              </div>
              <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-[#EEF1F5]">
                <div
                  className="h-full bg-[#305CF8] transition-all duration-300"
                  style={{ width: `${progressPercent}%` }}
                />
              </div>
            </div>

            <Button
              href="/book-a-demo"
              className="w-full sm:w-auto !bg-[#305CF8] !px-7 !py-3 !text-sm !font-semibold text-white shadow-[0px_8px_20px_-8px_rgba(48,92,248,0.6)] hover:!bg-[#2547CE]"
            >
              Bring this list to a demo
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
