import Image from "next/image"

export const PricingSection = () => {
  return (
    <section className="py-16 md:py-24 bg-[#0a1628]">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <div className="mb-10">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-3">Pricing & commercial access.</h2>
          <p className="text-[15px] text-slate-400">How pricing works and how to get current commercial detail.</p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-5 mb-5">
          <div className="flex flex-col gap-5">
            <div className="bg-[#213149] rounded-[20px] p-6 hover:bg-[#283a54] transition-colors">
              <h3 className="font-bold text-white text-[15px] mb-3">How is Zoiko HR priced?</h3>
              <p className="text-slate-400 text-[13px] leading-relaxed">Pricing is based on factors including organisation size, modules, regions, and contract terms. Current pricing is available through the sales process.</p>
            </div>
            
            <div className="bg-[#213149] rounded-[20px] p-6 hover:bg-[#283a54] transition-colors">
              <h3 className="font-bold text-white text-[15px] mb-3">Are there different tiers or editions?</h3>
              <p className="text-slate-400 text-[13px] leading-relaxed">Zoiko HR has multiple access tiers. Module and tier availability is confirmed during the commercial evaluation.</p>
            </div>
            
            <div className="bg-[#213149] rounded-[20px] p-6 hover:bg-[#283a54] transition-colors">
              <h3 className="font-bold text-white text-[15px] mb-3">What is included in the subscription?</h3>
              <p className="text-slate-400 text-[13px] leading-relaxed">Subscription scope covers agreed modules, support tier, and implementation services as defined in the contract.</p>
            </div>
          </div>
          
          <div className="relative h-full min-h-[350px] w-full rounded-[24px] overflow-hidden">
            <Image 
              src="/images/faq/FAQPricing.png" 
              alt="Pricing Factors" 
              fill
              className="object-cover"
            />
          </div>
        </div>
        
        <div className="bg-[#213149] rounded-[20px] p-8 mb-8">
          <h3 className="font-bold text-white text-[15px] mb-3">How do I get current pricing?</h3>
          <p className="text-slate-400 text-[13px] leading-relaxed mb-6 max-w-3xl">Request current pricing through the sales team or book a demo to discuss your specific requirements and receive a tailored proposal.</p>
          <div className="flex flex-wrap gap-4">
            <a href="#" className="border border-white/20 text-white hover:bg-white/10 rounded-lg px-6 py-2.5 text-[13px] font-medium transition-colors flex items-center group">
              Request Pricing <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
            </a>
            <a href="#" className="border border-white/20 text-white hover:bg-white/10 rounded-lg px-6 py-2.5 text-[13px] font-medium transition-colors flex items-center group">
              Book a Demo <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
            </a>
          </div>
        </div>
        
        <p className="text-[12px] text-slate-500 text-center font-medium">
          Public FAQ explains pricing factors only. Current commercial truth belongs to Pricing authority.
        </p>
      </div>
    </section>
  )
}
