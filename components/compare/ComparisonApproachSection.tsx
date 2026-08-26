import React from 'react';

export default function ComparisonApproachSection() {
  return (
    <section className="w-full bg-white py-20 flex flex-col justify-start items-center">
      {/* 1024px Container (Matches Figma's width and centers it instead of absolute left-208px) */}
      <div className="w-full max-w-5xl flex flex-col gap-10">
        
        {/* Answer Callout Box */}
        <div className="w-full p-6 bg-blue-50 rounded-tr-2xl rounded-br-2xl border-l-[3px] border-blue-600 flex flex-col justify-start items-start">
          <div className="w-full flex flex-col justify-start items-start">
            <h2 className="text-slate-950 text-xl font-bold font-['Manrope'] leading-7">
              How does Zoiko HR approach software comparisons?
            </h2>
          </div>
          
          <div className="w-full pt-3 flex flex-col justify-start items-start">
            <p className="text-gray-700 text-base font-normal font-['IBM_Plex_Sans'] leading-6">
              Zoiko HR publishes comparisons that source each claim to a dated, named authority. Criteria are defined before results are recorded. Status values are non-binary — a claim may be verified, limited, not applicable, or under review. No aggregate score is produced. The goal is to give evaluators factual, qualified, correctable information without manufacturing a winner.
            </p>
          </div>
        </div>

        {/* Image / Video Container */}
        <div className="w-full h-80 relative bg-slate-100 rounded-lg overflow-hidden">
          <img 
            className="w-full h-full object-cover object-center" 
            src="https://placehold.co/1024x586" 
            alt="Comparison Software Preview"
          />
        </div>

      </div>
    </section>
  );
}
