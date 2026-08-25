import { Container, Reveal } from "@/components/ui";

export function CustomerStoriesParticipation() {
  return (
    <section className="bg-slate-50 py-20 sm:py-24">
      <Container>
        {/* Section Heading */}
        <Reveal>
          <h2 className="font-[Manrope] text-3xl font-bold leading-9 text-slate-950">
            Customer participation and representation.
          </h2>
        </Reveal>

        {/* Main Content */}
        <div className="mt-10 grid gap-8 lg:grid-cols-2">
          {/* Form Card */}
          <Reveal delay={0.08}>
            <div className="rounded-2xl border border-black/10 bg-white p-6">
              <div className="pb-4">
                <h3 className="font-[IBM_Plex_Sans] text-lg font-bold leading-7 text-slate-950">
                  Share your story
                </h3>
              </div>

              <form className="space-y-3">
                {/* Name */}
                <input
                  type="text"
                  placeholder="Name"
                  className="h-10 w-full rounded-lg border border-black/10 bg-slate-100 px-3 py-2.5 font-[IBM_Plex_Sans] text-sm font-normal text-slate-950/50 outline-none placeholder:text-slate-950/50 focus:border-blue-600"
                />

                {/* Email */}
                <input
                  type="email"
                  placeholder="Email"
                  className="h-10 w-full rounded-lg border border-black/10 bg-slate-100 px-3 py-2.5 font-[IBM_Plex_Sans] text-sm font-normal text-slate-950/50 outline-none placeholder:text-slate-950/50 focus:border-blue-600"
                />

                {/* Company */}
                <input
                  type="text"
                  placeholder="Company"
                  className="h-10 w-full rounded-lg border border-black/10 bg-slate-100 px-3 py-2.5 font-[IBM_Plex_Sans] text-sm font-normal text-slate-950/50 outline-none placeholder:text-slate-950/50 focus:border-blue-600"
                />

                {/* Role */}
                <input
                  type="text"
                  placeholder="Role"
                  className="h-10 w-full rounded-lg border border-black/10 bg-slate-100 px-3 py-2.5 font-[IBM_Plex_Sans] text-sm font-normal text-slate-950/50 outline-none placeholder:text-slate-950/50 focus:border-blue-600"
                />

                {/* Relationship / Context */}
                <textarea
                  placeholder="Relationship / context (how you use Zoiko HR)"
                  rows={2}
                  className="h-16 w-full resize-none rounded-lg border border-black/10 bg-slate-100 px-3 py-2.5 font-[IBM_Plex_Sans] text-sm font-normal leading-5 text-slate-950/50 outline-none placeholder:text-slate-950/50 focus:border-blue-600"
                />

                {/* Button */}
                <button
                  type="button"
                  className="mt-4 h-10 rounded-lg bg-blue-600 px-5 font-[IBM_Plex_Sans] text-sm font-semibold leading-5 text-white transition-colors duration-200 hover:bg-blue-700"
                >
                  Inquire →
                </button>
              </form>

              <p className="mt-4 font-[IBM_Plex_Sans] text-xs font-normal leading-4 text-gray-400">
                Inquiry only — no publication commitment. Participation is
                voluntary and not tied to pricing, renewal, support, or
                product access.
              </p>
            </div>
          </Reveal>

          {/* Image */}
          <Reveal delay={0.16} y={24}>
            <div className="h-full min-h-[400px] overflow-hidden rounded-2xl border border-black/10 bg-white">
              <img
                src="/images/customer-stories/customer-participation.png"
                alt="Customer participation and representation"
                className="h-full w-full object-cover"
              />
            </div>
          </Reveal>
        </div>

        {/* Bottom Disclaimer */}
        <Reveal delay={0.2}>
          <p className="mt-8 text-center font-[IBM_Plex_Sans] text-xs font-normal leading-4 text-gray-400">
            Participation is voluntary and not tied to pricing, renewal,
            support, or product access.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}