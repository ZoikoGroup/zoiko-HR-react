import React from 'react';

export default function MethodologySection() {
  const cards = [
    {
      number: '01',
      title: 'Factual',
      description: 'Claims describe documented, observable product behaviors.',
      color: 'bg-blue-600',
    },
    {
      number: '02',
      title: 'Dated',
      description: 'Every claim carries a source date and a retrieved date.',
      color: 'bg-emerald-400',
    },
    {
      number: '03',
      title: 'Source-governed',
      description: 'Authority rests with the canonical product source, not this page.',
      color: 'bg-violet-400',
    },
    {
      number: '04',
      title: 'Qualified',
      description: 'Scope, conditions and exceptions remain attached to the claim.',
      color: 'bg-amber-500',
    },
    {
      number: '05',
      title: 'Correctable',
      description: 'Any claim can be disputed and updated through the correction path.',
      color: 'bg-teal-400',
    },
  ];

  return (
    <section className="w-full bg-slate-50 py-20 px-6">
      <div className="max-w-6xl mx-auto flex flex-col justify-start items-start">
        
        {/* Section Header */}
        <div className="flex flex-col gap-2 mb-12">
          <span className="text-indigo-400 text-xs font-semibold font-['IBM_Plex_Sans'] uppercase leading-4 tracking-wider">
            Methodology
          </span>
          <h2 className="text-slate-950 text-3xl font-bold font-['Manrope'] leading-9">
            How this comparison works.
          </h2>
          <p className="text-slate-500 text-base font-normal font-['IBM_Plex_Sans'] leading-6 mt-1">
            Stable criteria with transparent status values.
          </p>
        </div>

        {/* Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full mb-12">
          
          {/* Render Methodology Cards */}
          {cards.map((card, index) => (
            <div 
              key={index} 
              className="p-6 bg-white rounded-2xl outline outline-1 outline-offset-[-1px] outline-black/10 flex flex-col justify-start items-start h-44"
            >
              <div className={`size-9 ${card.color} rounded-full inline-flex justify-center items-center shrink-0`}>
                <span className="text-white text-xs font-bold font-['JetBrains_Mono'] leading-4">
                  {card.number}
                </span>
              </div>
              <div className="pt-4 flex flex-col justify-start items-start">
                <h3 className="text-slate-950 text-base font-bold font-['Manrope'] leading-6">
                  {card.title}
                </h3>
              </div>
              <div className="w-full pt-1 flex flex-col justify-start items-start">
                <p className="text-slate-500 text-sm font-normal font-['IBM_Plex_Sans'] leading-5">
                  {card.description}
                </p>
              </div>
            </div>
          ))}

          {/* Image/Media Card */}
          <div className="relative h-44 bg-sky-950 rounded-2xl overflow-hidden outline outline-1 outline-offset-[-1px] outline-black/10">
            <img 
              className="w-full h-full object-cover object-center" 
              src="/images/compare-hr/comparison work.png" 
              alt="Methodology visual" 
            />
          </div>

        </div>

        {/* Footer Link */}
        <a 
          href="#" 
          className="text-blue-600 text-sm font-semibold font-['Inter'] leading-5 hover:text-blue-700 hover:underline transition-all"
        >
          View full comparison methodology &rarr;
        </a>

      </div>
    </section>
  );
}
