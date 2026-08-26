import { Container, Reveal } from "@/components/ui";

const proofStandards = [
  {
    number: "01",
    title: "Consented",
    description:
      "The customer has explicitly approved the publication scope and identity handling before the story is released.",
  },
  {
    number: "02",
    title: "Source-reviewed",
    description:
      "Every claim is traced to a primary source and evaluated for accuracy before labelling.",
  },
  {
    number: "03",
    title: "Defined",
    description:
      "Metrics include numerator, denominator, population, period, and calculation method.",
  },
  {
    number: "04",
    title: "Date-stamped",
    description:
      "Publication date, observation period, and last-verified date are recorded on every story.",
  },
  {
    number: "05",
    title: "Limited",
    description:
      "Each story states what it cannot support and directs readers to authoritative sources for those questions.",
  },
];

export function CustomerStoriesProofStandard() {
  return (
    <section className="bg-[#F5F8FF] py-20 sm:py-24">
      <Container>
        {/* Section Heading */}
        <Reveal>
          <h2 className="text-center font-[Manrope] text-3xl font-bold leading-9 text-slate-950">
            The Zoiko HR proof standard.
          </h2>
        </Reveal>

        {/* Proof Standard Cards */}
        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {proofStandards.map((standard, index) => (
            <Reveal key={standard.number} delay={index * 0.06}>
              <div className="h-full min-h-[196px] rounded-2xl border border-black/10 bg-white p-5 shadow-[0px_1px_2px_-1px_rgba(0,0,0,0.10),0px_1px_3px_0px_rgba(0,0,0,0.10)]">
                {/* Number */}
                <div className="font-[Manrope] text-3xl font-bold leading-9 text-[#315EFB]">
                  {standard.number}
                </div>

                {/* Title */}
                <h3 className="mt-3 font-[IBM_Plex_Sans] text-sm font-bold leading-5 text-slate-950">
                  {standard.title}
                </h3>

                {/* Description */}
                <p className="mt-2 font-[IBM_Plex_Sans] text-xs font-normal leading-5 text-gray-500">
                  {standard.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}