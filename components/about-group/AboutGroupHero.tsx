import Image from "next/image"

export const AboutGroupHero = () => {
  return (
    <section className="bg-gradient-to-br from-[#1a2b42] via-[#0f1b2e] to-[#081121] py-16 md:py-24 min-h-[600px] flex items-center">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="space-y-6 md:pr-8">
            <div className="inline-block px-3 py-1 border border-blue-500/30 rounded-full mb-2">
              <span className="text-[10px] font-bold text-blue-400 uppercase tracking-widest">
                ZOIKO GROUP
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-[56px] leading-[1.1] font-bold tracking-tight text-white mb-6">
              Built as a group, designed to work with clarity.
            </h1>
            
            <p className="text-[15px] text-slate-400 leading-relaxed mb-8 max-w-xl">
              Zoiko Group provides the broader portfolio context for Zoiko HR. This page explains how Zoiko HR relates to the wider group and where to find verified company, leadership, partnership, careers, and news information.
            </p>
            
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mb-8 pt-2">
              <a href="#" className="inline-flex items-center justify-center px-6 py-2.5 bg-blue-600 text-white text-[14px] font-medium rounded-full hover:bg-blue-700 transition-colors shadow-lg shadow-blue-900/20">
                Explore the portfolio <span className="ml-2 font-normal">→</span>
              </a>
              <a href="#" className="inline-flex items-center justify-center text-slate-400 hover:text-slate-300 transition-colors text-[14px] font-medium underline underline-offset-4 decoration-slate-600 hover:decoration-slate-400 group">
                About Zoiko HR <span className="ml-2 transition-transform group-hover:translate-x-1 no-underline">→</span>
              </a>
            </div>

            <p className="text-[11px] text-slate-500 mt-8">
              All group relationships and portfolio facts are source-governed and periodically reviewed.
            </p>
          </div>
          
          <div className="relative aspect-[4/3] w-full rounded-[24px] overflow-hidden shadow-2xl border border-white/5">
            <Image 
              src="/images/about-group/GroupAtAGlance.png" 
              alt="Zoiko Group Overview" 
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

