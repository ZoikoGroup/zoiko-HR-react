import React from 'react';

export default function SourceMethodology() {
  const steps = [
    {
      number: '01',
      title: 'Identify source',
      description: 'Locate a primary or approved secondary authority for the claim.',
    },
    {
      number: '02',
      title: 'Capture snapshot',
      description: 'Record the URL, retrieval date and relevant excerpt.',
    },
    {
      number: '03',
      title: 'Review claim',
      description: 'Match the claim text to the captured evidence and apply a status.',
    },
    {
      number: '04',
      title: 'Show public date',
      description: 'Display source date and review date alongside every claim.',
    },
  ];

  return (
    <section className="w-full bg-slate-50 py-20 px-6">
      <div className="max-w-5xl mx-auto flex flex-col justify-start items-start">
        
        {/* Header Section */}
        <div className="flex flex-col gap-2 mb-12">
          <span className="text-indigo-400 text-xs font-semibold font-['IBM_Plex_Sans'] uppercase leading-4 tracking-wider">
            Source methodology
          </span>
          <h2 className="text-slate-950 text-3xl font-bold font-['Manrope'] leading-9">
            Source and date methodology.
          </h2>
        </div>

        {/* 4-Step Process Flow */}
        <div className="w-full grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-0 mb-16">
          {steps.map((step, index) => (
            <div key={index} className="relative flex flex-col items-center text-center">
              
              {/* Connecting Line (Desktop Only) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-5 left-[50%] w-full h-[2px] bg-indigo-200 z-0" />
              )}

              {/* Number Indicator */}
              <div className="w-10 h-10 relative z-10 bg-blue-600 rounded-full flex justify-center items-center shrink-0">
                <span className="text-white text-xs font-bold font-['JetBrains_Mono'] leading-4">
                  {step.number}
                </span>
              </div>

              {/* Step Content */}
              <div className="mt-3 flex flex-col items-center max-w-[144px]">
                <h3 className="text-slate-950 text-sm font-bold font-['Manrope'] leading-5 mb-1">
                  {step.title}
                </h3>
                <p className="text-slate-500 text-xs font-normal font-['IBM_Plex_Sans'] leading-4">
                  {step.description}
                </p>
              </div>
              
            </div>
          ))}
        </div>

        {/* Image/Media Container */}
        <div className="w-full h-80 relative bg-red-200 rounded-2xl overflow-hidden">
          <img 
            className="w-full h-full object-cover object-center absolute inset-0" 
            src="https://placehold.co/1024x683" 
            alt="Methodology visualization" 
          />
        </div>

      </div>
    </section>
  );
}
