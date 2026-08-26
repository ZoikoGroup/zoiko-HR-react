export default function CustomerStoriesFinalCtaSection() {
  return (
    <section className="w-full overflow-hidden bg-gradient-to-br from-slate-950 to-slate-900 py-20 sm:py-24">
      <div className="mx-auto flex w-full max-w-3xl flex-col items-center px-6">

        {/* Heading */}
        <h2 className="text-center font-[Manrope] text-3xl font-bold leading-tight text-white sm:text-4xl sm:leading-10">
          Build a stronger foundation for global people operations.
        </h2>

        {/* Description */}
        <p className="mt-4 text-center font-[IBM_Plex_Sans] text-base font-normal leading-7 text-white/60 sm:text-lg">
          Zoiko HR gives HR teams the record structure, workflow operations, and
          implementation support to run people operations reliably — across
          entities, jurisdictions, and growth stages.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex w-full flex-wrap items-center justify-center gap-4">

          {/* Book a Demo */}
          <button
            type="button"
            className="flex h-[50px] items-center justify-center rounded-lg bg-white px-7 py-3"
          >
            <span className="text-center font-[IBM_Plex_Sans] text-base font-semibold leading-6 text-slate-950">
              Book a Demo
            </span>
          </button>

          {/* Request Pricing */}
          <button
            type="button"
            className="flex h-[50px] items-center justify-center rounded-lg border border-white/40 px-7 py-3"
          >
            <span className="text-center font-[IBM_Plex_Sans] text-base font-semibold leading-6 text-white">
              Request Pricing
            </span>
          </button>

          {/* Product Tour */}
          <button
            type="button"
            className="flex h-[50px] items-center justify-center px-7 py-3"
          >
            <span className="text-center font-[IBM_Plex_Sans] text-base font-semibold leading-6 text-white/70">
              Take the Product Tour →
            </span>
          </button>

        </div>

        {/* Privacy Text */}
        <p className="mt-6 text-center font-[IBM_Plex_Sans] text-xs font-normal leading-4 text-white/30">
          No commitment required. Your information is handled in accordance with
          our Privacy Policy.
        </p>

      </div>
    </section>
  );
}
