import React from 'react';

export default function CompareHero() {
  return (
    <section className="w-full h-[752px] relative bg-[radial-gradient(circle_at_50%_0%,_var(--tw-gradient-stops))] from-cyan-900 via-sky-950 via-55% to-slate-900">
      <div className="w-[752.01px] h-96 left-[102px] top-[175px] absolute inline-flex flex-col justify-start items-start">
        
        {/* Eyebrow / Label */}
        <div className="self-stretch flex flex-col justify-start items-start">
          <span className="justify-start text-indigo-400 text-xs font-semibold font-['IBM_Plex_Sans'] uppercase leading-4 tracking-wider">
            Compare Zoiko HR
          </span>
        </div>

        {/* Main Headline */}
        <div className="w-[752.01px] pt-3 flex flex-col justify-start items-start">
          <h1 className="w-[753px] justify-start text-white text-5xl font-extrabold font-['Manrope'] leading-[60px]">
            Compare Zoiko HR with the facts, dates, and sources visible.
          </h1>
        </div>

        {/* Sub-headline */}
        <div className="w-full pt-5 flex flex-col justify-start items-start">
          <p className="w-[576px] justify-start text-slate-400 text-lg font-normal font-['IBM_Plex_Sans'] leading-7">
            Every criterion is sourced, dated and qualified. No aggregate winner score. Missing public evidence is not treated as a negative fact.
          </p>
        </div>

        {/* Call to Actions */}
        <div className="self-stretch pt-8 flex flex-col justify-start items-start">
          <div className="self-stretch h-11 inline-flex justify-start items-start gap-3">
            <button className="px-5 py-3 bg-blue-600 hover:bg-blue-500 transition-colors rounded-[30px] inline-flex flex-col justify-center items-center">
              <span className="text-center justify-start text-white text-sm font-semibold font-['Inter'] leading-5">
                Compare by criteria
              </span>
            </button>
            <button className="px-5 py-3 rounded-[30px] outline outline-1 outline-offset-[-1px] outline-white/10 hover:bg-white/5 transition-colors inline-flex flex-col justify-center items-center">
              <span className="text-center justify-start text-slate-300 text-sm font-semibold font-['Inter'] leading-5">
                Browse approved comparisons
              </span>
            </button>
            <button className="px-2 py-3 inline-flex flex-col justify-start items-start hover:opacity-80 transition-opacity">
              <span className="justify-start text-indigo-400 text-sm font-medium font-['Inter'] underline leading-5">
                Book a Demo &rarr;
              </span>
            </button>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="w-[752.01px] h-10 pt-6 flex flex-col justify-start items-start">
          <p className="justify-start text-slate-600 text-xs font-normal font-['IBM_Plex_Sans'] leading-4">
            No aggregate winner score. Missing public evidence is not treated as a negative fact.
          </p>
        </div>

      </div>

      {/* Right side image container */}
      <div className="w-[480px] h-[500px] left-[854px] top-[126px] absolute bg-sky-950 rounded-2xl outline outline-1 outline-offset-[-1px] outline-white/10 overflow-hidden">
        <img 
          className="w-[750px] h-[500px] left-[-107px] top-0 absolute object-cover" 
          src="https://placehold.co/750x500" 
          alt="Platform Interface Preview" 
        />
      </div>
    </section>
  );
}
