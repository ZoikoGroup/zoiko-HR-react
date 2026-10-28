import React from 'react';

export default function TermsOfServiceHero() {
  return (
    <div className="w-[1425px] h-[688px] relative bg-[radial-gradient(ellipse_at_50%_0%,_#22406B_0%,_#102A43_55%,_#0A1B2E_100%)] overflow-hidden">
      {/* Left Content Container */}
      <div className="w-[612.32px] pb-[0.80px] left-[133px] top-[147px] absolute inline-flex flex-col justify-start items-start gap-4">
        
        {/* Category Label */}
        <div className="self-stretch flex flex-col justify-start items-start">
          <div className="self-stretch text-[#7FA6FF] text-xs font-bold font-['IBM_Plex_Sans'] uppercase tracking-wider">
            LEGAL
          </div>
        </div>

        {/* Title */}
        <div className="self-stretch pt-[4.80px] flex flex-col justify-start items-start">
          <div className="self-stretch text-white text-4xl font-extrabold font-['Manrope'] leading-10">
            Terms of Service
          </div>
        </div>

        {/* Primary Description */}
        <div className="w-[560px] max-w-[560px] pt-1 flex flex-col justify-start items-start">
          <div className="text-[#DCE4F2] text-base font-normal font-['IBM_Plex_Sans'] leading-7">
            Review the current standard terms that govern covered Zoiko HR services<br />
            where applicable, together with the documents that may control your<br />
            organization&apos;s specific relationship with us.
          </div>
        </div>

        {/* Secondary Description */}
        <div className="w-[560px] max-w-[560px] flex flex-col justify-start items-start">
          <div className="text-[#8FA3C4] text-sm font-normal font-['IBM_Plex_Sans'] leading-5">
            If your organization has an executed agreement, Order Form, service schedule, or<br />
            amendment with Zoiko HR, those documents may govern or modify these standard terms.
          </div>
        </div>

        {/* Action Buttons */}
        <div className="self-stretch pt-3 pb-[3.20px] inline-flex justify-start items-center gap-3.5">
          <button className="px-6 py-3.5 bg-[#315EFB] hover:bg-[#2850d9] transition-colors rounded-[100px] inline-flex flex-col justify-start items-start cursor-pointer">
            <span className="text-white text-base font-semibold font-['IBM_Plex_Sans']">
              Review Agreement Hierarchy
            </span>
          </button>
          
          <button className="px-7 py-3.5 bg-white/10 hover:bg-white/15 transition-colors rounded-[100px] outline outline-1 outline-offset-[-1px] outline-white/30 inline-flex flex-col justify-start items-start cursor-pointer">
            <span className="text-white text-base font-semibold font-['IBM_Plex_Sans']">
              Ask a Contract Question
            </span>
          </button>
        </div>

        {/* Link Footer */}
        <div className="text-[#7FA6FF] hover:text-[#9bb8ff] transition-colors text-sm font-semibold font-['IBM_Plex_Sans'] cursor-pointer">
          Review Acceptable Use Policy →
        </div>
      </div>

      {/* Right Image Container */}
      <div className="w-[496px] h-[463px] left-[797px] top-[112px] absolute bg-[#0A1B2E] rounded-2xl outline outline-1 outline-offset-[-1px] outline-[#1E3450] overflow-hidden shadow-2xl">
        <img 
          className="w-[496px] h-[496px] left-0 top-[-17px] absolute object-cover" 
          src="/images/terms-of-service/image 568.png" 
          alt="Zoiko HR Meeting" 
        />
      </div>
    </div>
  );
}