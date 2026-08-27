import React from 'react';

export default function CommercialCriteria() {
  return (
    <section className="w-full bg-slate-950 py-20 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        
        {/* Left Column: Content & CTA */}
        <div className="flex flex-col justify-start items-start w-full lg:pt-8">
          <span className="text-indigo-400 text-xs font-semibold font-['IBM_Plex_Sans'] uppercase leading-4 tracking-wider mb-3">
            Commercial criteria
          </span>
          <h2 className="text-white text-3xl font-bold font-['Manrope'] leading-9 mb-4">
            Commercial evaluation and pricing criteria.
          </h2>
          <p className="text-slate-400 text-base font-normal font-['IBM_Plex_Sans'] leading-6 mb-8 max-w-lg">
            Commercial information is sourced from published pricing pages or noted as &quot;request pricing&quot; where no public list exists.
          </p>
          
          <button className="px-5 py-3 bg-blue-600 hover:bg-blue-500 transition-colors rounded-xl flex items-center justify-center group">
            <span className="text-white text-sm font-semibold font-['Inter'] leading-5 flex items-center gap-2">
              Request Pricing 
              <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
            </span>
          </button>
        </div>

        {/* Right Column: Image & Alert */}
        <div className="flex flex-col w-full">
          
          {/* Image Container */}
          <div className="relative w-full h-80 md:h-96 bg-sky-950 rounded-2xl outline outline-1 outline-offset-[-1px] outline-white/10 overflow-hidden mb-6">
            <img 
              className="w-full h-full object-cover object-center absolute inset-0" 
              src="https://placehold.co/552x551" 
              alt="Commercial Evaluation Team" 
            />
          </div>

          {/* Alert / Disclaimer Box */}
          <div className="w-full px-4 py-3 bg-amber-50 rounded-xl outline outline-1 outline-offset-[-1px] outline-amber-500 flex flex-col justify-start items-start">
            <p className="text-amber-800 text-xs font-semibold font-['IBM_Plex_Sans'] leading-4">
              No TCO winner — do not calculate total cost or ROI ranking without separately approved equivalent methodology.
            </p>
          </div>
          
        </div>

      </div>
    </section>
  );
}
