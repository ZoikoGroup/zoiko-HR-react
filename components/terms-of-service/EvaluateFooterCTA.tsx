import React from "react";

export default function EvaluateFooterCTA() {
  return (
    <div className="w-full max-w-[1424.80px] h-80 relative bg-[#0A1B2E] overflow-hidden mx-auto flex items-center justify-center">
      {/* Content Container */}
      <div className="w-[760px] max-w-[760px] inline-flex flex-col justify-start items-center gap-3.5">
        {/* Main Heading */}
        <div className="self-stretch flex flex-col justify-start items-center">
          <h2 className="text-center text-white text-3xl font-extrabold font-['Manrope'] leading-8">
            Evaluate Zoiko HR with clear contractual terms.
          </h2>
        </div>

        {/* Description Text */}
        <div className="w-[520px] max-w-[520px] flex flex-col justify-start items-center">
          <p className="text-center text-slate-400 text-base font-normal font-['IBM_Plex_Sans'] leading-6">
            Review the Trust Center, product architecture, and commercial
            options
            <br />
            without changing the contract authority above.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="self-stretch pt-3 inline-flex justify-center items-start gap-3.5 flex-wrap">
          <button className="px-5 py-3 bg-blue-600 hover:bg-blue-700 transition-colors rounded-[100px] inline-flex flex-col justify-start items-center cursor-pointer">
            <span className="text-center text-white text-sm font-semibold font-['IBM_Plex_Sans']">
              Review the Trust Center →
            </span>
          </button>
          <button className="px-6 py-3.5 bg-white/5 hover:bg-white/10 transition-colors rounded-[100px] outline outline-1 outline-offset-[-1px] outline-white/20 inline-flex flex-col justify-start items-center cursor-pointer">
            <span className="text-center text-indigo-400 text-sm font-semibold font-['IBM_Plex_Sans']">
              Request Pricing →
            </span>
          </button>
          <button className="px-6 py-3.5 bg-white/5 hover:bg-white/10 transition-colors rounded-[100px] outline outline-1 outline-offset-[-1px] outline-white/20 inline-flex flex-col justify-start items-center cursor-pointer">
            <span className="text-center text-indigo-400 text-sm font-semibold font-['IBM_Plex_Sans']">
              Book a Demo →
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
