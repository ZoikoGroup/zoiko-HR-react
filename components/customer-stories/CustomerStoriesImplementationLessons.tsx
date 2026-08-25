import { Container, Reveal } from "@/components/ui";

const lessons = [
  {
    title: "Core HR / Employee Records",
    accent: "border-blue-600",
    validation:
      "What record structure constraints apply to your jurisdiction and entity type?",
    nextStep: "Implementation Guide →",
    nextStepHref: "/implementation-guide",
  },
  {
    title: "Workflows & Approvals",
    accent: "border-violet-400",
    validation:
      "Which approval chains are required by your governance or compliance context?",
    nextStep: "HR Guides →",
    nextStepHref: "/hr-guides",
  },
  {
    title: "Global / Multi-Entity",
    accent: "border-indigo-400",
    validation:
      "How many legal entities and jurisdictions are in scope at your organization?",
    nextStep: "Implementation Guide →",
    nextStepHref: "/implementation-guide",
  },
];

export function CustomerStoriesImplementationLessons() {
  return (
    <section className="bg-slate-100 py-20 sm:py-24">
      <Container>
        {/* Heading */}
        <Reveal>
          <h2 className="font-[Manrope] text-3xl font-bold leading-9 text-slate-950">
            Implementation lessons from customer context.
          </h2>
        </Reveal>

        {/* Lesson Cards */}
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {lessons.map((lesson, index) => (
            <Reveal key={lesson.title} delay={index * 0.08}>
              <article className="overflow-hidden rounded-2xl border border-black/10 bg-white">
                {/* Card Header */}
                <div
                  className={`border-t-2 bg-slate-50 px-5 py-3 ${lesson.accent}`}
                >
                  <h3 className="font-[IBM_Plex_Sans] text-xs font-semibold leading-4 text-slate-950">
                    {lesson.title}
                  </h3>
                </div>

                {/* Card Content */}
                <div className="p-5">
                  {/* What customer did */}
                  <div>
                    <p className="font-[IBM_Plex_Sans] text-xs font-semibold leading-4 text-gray-700">
                      What this customer did:
                    </p>

                    <p className="pt-1 font-[IBM_Plex_Sans] text-xs font-normal leading-4 text-gray-400">
                      Evidence pending — no approved customer content.
                    </p>
                  </div>

                  {/* Validation */}
                  <div className="pt-4">
                    <p className="font-[IBM_Plex_Sans] text-xs font-semibold leading-4 text-gray-700">
                      What to validate for your organization:
                    </p>

                    <p className="pt-1 font-[IBM_Plex_Sans] text-xs font-normal leading-4 text-gray-500">
                      {lesson.validation}
                    </p>
                  </div>

                  {/* Next Step */}
                  <div className="pt-4">
                    <p className="font-[IBM_Plex_Sans] text-xs font-semibold leading-4 text-gray-700">
                      Authoritative next step:
                    </p>

                    <a
                      href={lesson.nextStepHref}
                      className="mt-1 inline-block font-[IBM_Plex_Sans] text-xs font-semibold leading-4 text-[#315EFB] transition-colors hover:text-[#315EFB]/80"
                    >
                      {lesson.nextStep}
                    </a>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        {/* Disclaimer */}
        <Reveal delay={0.3}>
          <p className="mt-8 font-[IBM_Plex_Sans] text-xs font-normal leading-4 text-gray-400">
            Lessons describe approved customer decisions, not universal
            prescriptions. Validate applicability in your operating context
            before acting.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}