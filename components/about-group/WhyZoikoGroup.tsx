import Image from "next/image"

export const WhyZoikoGroup = () => {
  return (
    <section className="py-16 md:py-24 bg-[#f8fafe]">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="order-2 md:order-1 space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
              Why Zoiko Group exists.
            </h2>
            <p className="text-[15px] text-slate-600 leading-relaxed">
              Zoiko Group exists to enable focused, accountable businesses within a coherent portfolio — not to create a single product monolith. Each entity operates with clear ownership, defined scope, and governed connections.
            </p>
            <p className="text-[13px] text-slate-400 italic">
              Design mandate: No &quot;all-in-one&quot; or &quot;seamless ecosystem&quot; claims are made. Each connection is explicitly scoped and approved.
            </p>
          </div>
          
          <div className="order-1 md:order-2 relative aspect-[4/3] w-full rounded-[16px] overflow-hidden border border-blue-600 shadow-[0_4px_20px_rgba(37,99,235,0.15)] bg-white">
            <Image 
              src="/images/about-group/WhyZoikoGroup.png" 
              alt="Why Zoiko Group exists" 
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
