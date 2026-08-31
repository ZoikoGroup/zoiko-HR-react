import Image from "next/image"

export const FaqHeroSection = () => {
  const tags = ["Product & Platform", "Global & Multi-Entity", "Integrations", "Security & Privacy", "Implementation", "Pricing & Access", "Roles", "Support"]

  return (
    <section className="bg-gradient-to-br from-[#0c274b] to-[#0a1628] text-white py-16 md:py-24 overflow-hidden relative">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-8 z-10 relative">
            <div>
              <h1 className="text-[11px] font-bold tracking-[0.15em] text-blue-400 uppercase mb-4">
                ZOIKO HR FAQ
              </h1>
              <h2 className="text-4xl md:text-5xl lg:text-5xl font-bold tracking-tight mb-6 leading-[1.15]">
                Get direct answers about Zoiko HR — and know where to verify the details.
              </h2>
              <p className="text-base text-slate-400 leading-relaxed max-w-xl">
                Every answer is source-governed and reviewed. Where availability varies by region, plan, or configuration, that is stated explicitly.
              </p>
            </div>
            
            <div className="relative max-w-xl">
              <svg className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input 
                type="text" 
                placeholder="Search questions..." 
                className="w-full bg-transparent border border-white/10 rounded-xl outline-none text-white px-4 py-3 pl-12 focus:border-white/30 transition-colors shadow-sm"
              />
            </div>
            
            <div className="flex flex-wrap gap-2 max-w-2xl">
              {tags.map(tag => (
                <button key={tag} className="px-4 py-1.5 bg-transparent border border-white/10 hover:bg-white/5 rounded-full text-[13px] font-medium text-slate-300 transition-colors">
                  {tag}
                </button>
              ))}
            </div>
            
            <div className="pt-8 border-t border-white/10 space-y-3">
              <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-[13px]">
                <span className="text-slate-400">Already using Zoiko HR?</span>
                <a href="#" className="text-blue-400 hover:text-blue-300 font-medium transition-colors">Help Center</a>
                <a href="#" className="text-blue-400 hover:text-blue-300 font-medium transition-colors">Documentation</a>
                <a href="#" className="text-blue-400 hover:text-blue-300 font-medium transition-colors">Service Status</a>
                <a href="#" className="text-blue-400 hover:text-blue-300 font-medium transition-colors">Contact Support</a>
              </div>
              <p className="text-[11px] text-slate-500">
                Current answers are source-governed, reviewed, scoped, and qualified where availability varies.
              </p>
            </div>
          </div>
          
          <div className="relative z-10 w-full aspect-square md:aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-white/5 mx-auto lg:ml-auto max-w-xl">
            <Image 
              src="/images/faq/FAQCoverage.png" 
              alt="Team high five" 
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}
