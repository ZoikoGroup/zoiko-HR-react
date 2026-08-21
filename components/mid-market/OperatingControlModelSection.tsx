import { Container, Reveal, PlaceholderImage } from "@/components/ui";

const AREAS = [
  { title: "Records", description: "Structured workforce information." },
  { title: "Structure", description: "Organizations, teams, roles." },
  { title: "Delegation", description: "Scoped responsibility." },
  { title: "Service", description: "Visible work queues." },
];

export function OperatingControlModelSection() {
  return (
    <section className="bg-[#0C2036] py-20 text-white">
      <Container>
        <Reveal>
          <span className="text-xs font-bold uppercase tracking-wider text-[#7FA6FF]">
            The Operating-Control Model
          </span>
          <h2 className="mt-4 max-w-[700px] font-heading text-3xl font-extrabold">
            Eight areas that standardize without flattening legitimate
            differences.
          </h2>
          <p className="mt-5 max-w-[700px] leading-6 text-[#B9C6DC]">
            Each area carries its own owner, states and evidence. Click a
            card for its role in the model.
          </p>
        </Reveal>

        <div className="mt-10 grid items-start gap-6 lg:grid-cols-2 xl:grid-cols-[1fr_612px]">
          <div className="grid gap-6 sm:grid-cols-2">
            {AREAS.map((area, i) => (
              <Reveal key={area.title} delay={i * 0.06}>
                <div className="h-full rounded-xl border border-[#16385A] bg-[#102A43] p-5">
                  <p className="font-heading font-bold text-white">
                    {area.title}
                  </p>
                  <p className="mt-2 text-xs leading-5 text-[#8FA3C4]">
                    {area.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.16} y={36}>
            <PlaceholderImage
              src="/images/mid-market-organizations/operating-model.png"
              alt="A colleague presenting from a laptop to a seated team"
              label="The operating-control model"
              className="h-48 w-full rounded-xl border border-[#16385A] bg-[#102A43]"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
