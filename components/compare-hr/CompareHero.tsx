import React from 'react';
// import Image from 'next/image'; // Uncomment for Next.js image optimization

export default function CompareHero() {
  return (
    <section className="w-full relative overflow-hidden bg-[#0b1233] min-h-[752px] flex items-center justify-center">
      
      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-6 py-20 w-full flex flex-col lg:flex-row items-center gap-12 lg:gap-8 relative z-10">
        
        {/* Left Column: Content & CTAs */}
        <div className="flex-1 flex flex-col items-start text-left w-full">
          <span className="text-indigo-400 text-xs font-semibold font-['IBM_Plex_Sans'] uppercase leading-4 tracking-wider mb-4">
            Compare Zoiko HR
          </span>
          
          <h1 className="text-white text-2xl md:text-3xl lg:text-4xl font-extrabold font-['Manrope'] leading-tight lg:leading-[48px] mb-6 max-w-2xl">
            Compare Zoiko HR with the<br />facts, dates, and sources<br />visible.
          </h1>
          
          <p className="text-slate-400 text-lg font-normal font-['IBM_Plex_Sans'] leading-7 max-w-xl mb-8">
            Every criterion is sourced, dated and qualified. No aggregate winner score. Missing public evidence is not treated as a negative fact.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4 mb-6 w-full sm:w-auto">
            <button className="w-full sm:w-auto px-6 py-3 bg-blue-600 hover:bg-blue-500 transition-colors rounded-full text-white text-sm font-semibold font-['Inter'] leading-5 text-center">
              Compare by criteria
            </button>
            <button className="w-full sm:w-auto px-6 py-3 rounded-full outline outline-1 outline-white/10 hover:bg-white/5 transition-colors text-slate-300 text-sm font-semibold font-['Inter'] leading-5 text-center">
              Browse approved comparisons
            </button>
            <button className="w-full sm:w-auto px-2 py-3 text-indigo-400 hover:text-indigo-300 transition-colors text-sm font-medium font-['Inter'] underline leading-5 text-center">
              Book a Demo &rarr;
            </button>
          </div>

          {/* Sub-disclaimer */}
          <p className="text-slate-600 text-xs font-normal font-['IBM_Plex_Sans'] leading-4">
            No aggregate winner score. Missing public evidence is not treated as a negative fact.
          </p>
        </div>

        {/* Right Column: Image Presentation */}
        <div className="flex-1 w-full max-w-xl lg:max-w-none flex justify-end">
          <div className="relative w-full aspect-[4/3] lg:w-[480px] lg:h-[500px] bg-sky-950 rounded-2xl outline outline-1 outline-white/10 overflow-hidden shadow-2xl">
            <img 
              className="w-full h-full object-cover object-left absolute inset-0" 
              src="/images/compare-hr/compare zoiko HR.png" 
              alt="Platform Interface Preview" 
            />
          </div>
        </div>

      </div>
    </section>
  );
}
