import Image from "next/image"

export const LeadershipNotice = () => {
  return (
    <section className="py-16 md:py-24 bg-[#0a1628]">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="order-2 md:order-1 space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
              Accountable leadership, published separately.
            </h2>
            <p className="text-[15px] text-slate-400 leading-relaxed">
              Leadership accountability for Zoiko Group and its portfolio entities is documented in the Leadership section of Company. Executive biographies, organizational accountability, and governance context are maintained there, not on this page.
            </p>
            <p className="text-[13px] text-slate-500 italic">
              No executive names appear on this page unless sourced from the Leadership registry and required for group context.
            </p>
          </div>
          
          <div className="order-1 md:order-2 relative aspect-[4/3] w-full rounded-[20px] overflow-hidden border border-white/5 shadow-lg shadow-black/20">
            <Image 
              src="/images/about-group/Leadership.png" 
              alt="Accountable Leadership" 
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
