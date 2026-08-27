import { Container, Reveal, PlaceholderImage } from "@/components/ui";

const features = [
  {
    iconColor: "bg-blue-600/10 text-blue-600",
    title: "Scope/source authority first",
    description:
      "Define what is in scope and who owns decisions before any configuration begins.",
    imgSrc: "/images/implementation-guide/Scope.png",
    imgAlt: "Scope and authority workflow",
  },
  {
    iconColor: "bg-emerald-400/10 text-emerald-400",
    title: "Validate positive, negative and recovery",
    description:
      "Testing covers expected paths, rejection paths and recovery from failure.",
    imgSrc: "/images/implementation-guide/Recovey.png",
    imgAlt: "Validation and testing processes",
  },
  {
    iconColor: "bg-violet-400/10 text-violet-400",
    title: "Launch is an authorized evidence-based decision",
    description:
      "Go-live requires explicit human approval against documented evidence.",
    imgSrc: "/images/implementation-guide/Authorized.png",
    imgAlt: "Go-live decision governance",
  },
  {
    iconColor: "bg-amber-500/10 text-amber-500",
    title: "Stabilization continues after activation",
    description:
      "Implementation does not end at launch. Adoption and health monitoring follow.",
    imgSrc: "/images/implementation-guide/Activation.png",
    imgAlt: "Post-launch stabilization and monitoring",
  },
];

export function ImplementationOverviewSection() {
  return (
    <section className="bg-white py-20 text-slate-900 sm:py-24">
      <Container>
        <div className="flex flex-col gap-8">
          {/* Top Callout Box */}
          <Reveal>
            <div className="w-full rounded-r-xl border-l-[3px] border-blue-600 bg-slate-50 p-6 md:p-8">
              <h2 className="font-heading text-xl font-extrabold text-sky-950 md:text-2xl">
                What does a Zoiko HR implementation involve?
              </h2>
              <p className="mt-4 leading-7 text-gray-700">
                A Zoiko HR implementation is a structured program covering:
                scope agreement and decision authority establishment; system
                configuration against the agreed scope; data extraction,
                transformation and validated migration; integration connection
                and testing; multi-layer validation including functional,
                access, data and recovery testing; a governed launch gate
                decision; and a post-activation stabilization and adoption
                phase. Every phase produces evidence. Launch requires explicit
                authorization by the accountable party, not an automated
                threshold. No implementation timeline, compliance outcome or
                fixed service scope is implied by this guide.
              </p>
            </div>
          </Reveal>

          {/* 4-Column Feature Grid */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((item, idx) => (
              <div key={idx} className="flex flex-col gap-6">
                {/* Feature Card */}
                <Reveal delay={idx * 0.08}>
                  <div className="flex h-48 flex-col justify-start rounded-2xl bg-slate-50 p-6 ring-1 ring-black/10">
                    <div
                      className={`flex size-10 items-center justify-center rounded-[10px] ${item.iconColor}`}
                    >
                      <span className="text-lg">◈</span>
                    </div>
                    <h3 className="mt-4 text-sm font-bold leading-5 text-sky-950">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-xs leading-5 text-gray-500">
                      {item.description}
                    </p>
                  </div>
                </Reveal>

                {/* Associated Image */}
                <Reveal delay={idx * 0.08 + 0.04}>
                  <PlaceholderImage
                    src={item.imgSrc}
                    alt={item.imgAlt}
                    label={item.title}
                    className="aspect-[3/2] w-full rounded-2xl bg-slate-100"
                  />
                </Reveal>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
