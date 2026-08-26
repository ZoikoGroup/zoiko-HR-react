import React from 'react';

export default function Limitations() {
  const limitations = [
    {
      title: 'Customer-specific fit',
      description: 'Comparison cannot determine suitability for your particular organization, processes or data model.',
    },
    {
      title: 'Jurisdiction/legal outcome',
      description: 'Comparison does not constitute legal, compliance or regulatory advice in any jurisdiction.',
    },
    {
      title: 'Roadmap/future behavior',
      description: 'Comparison covers current documented behavior — not promised or anticipated future functionality.',
    },
    {
      title: 'Independent suitability determination',
      description: 'Only you, your advisors and your evaluation process can determine fit for your requirements.',
    },
  ];

  return (
    <section className="w-full bg-white py-20 px-6">
      <div className="max-w-5xl mx-auto flex flex-col gap-10">
        
        {/* Header Section */}
        <div className="flex flex-col gap-2">
          <span className="text-indigo-400 text-xs font-semibold font-['IBM_Plex_Sans'] uppercase leading-4 tracking-wider">
            Limitations
          </span>
          <h2 className="text-slate-950 text-3xl md:text-4xl font-extrabold font-['Manrope'] leading-9 md:leading-10">
            What this comparison cannot tell you.
          </h2>
        </div>

        {/* Content Layout (Cards + Image) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          
          {/* Left Column: Limitation Cards */}
          <div className="flex flex-col gap-4">
            {limitations.map((item, index) => (
              <div 
                key={index} 
                className="w-full p-5 bg-slate-50 rounded-2xl outline outline-1 outline-offset-[-1px] outline-black/10 flex flex-col justify-center items-start min-h-[7rem]"
              >
                <h3 className="text-slate-950 text-base font-bold font-['Manrope'] leading-6 mb-1">
                  {item.title}
                </h3>
                <p className="text-slate-500 text-sm font-normal font-['IBM_Plex_Sans'] leading-5">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          {/* Right Column: Image Container */}
          <div className="relative w-full h-[400px] lg:h-auto min-h-[300px] bg-slate-50 rounded-2xl outline outline-1 outline-offset-[-1px] outline-black/10 overflow-hidden">
            <img 
              src="https://placehold.co/731x488" 
              alt="Team discussing limitations" 
              className="w-full h-full object-cover object-center absolute inset-0" 
            />
          </div>

        </div>

        {/* Footer Call-to-Action Bar */}
        <div className="w-full px-6 py-5 bg-blue-50 rounded-xl outline outline-1 outline-offset-[-1px] outline-blue-600 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <p className="text-blue-900 text-sm font-semibold font-['IBM_Plex_Sans'] leading-5">
            Verify current requirements and authoritative sources before any decision.
          </p>
          <div className="flex items-center gap-6 shrink-0">
            <a 
              href="#" 
              className="text-blue-600 text-sm font-semibold font-['Inter'] leading-5 hover:text-blue-700 transition-colors"
            >
              Product Tour &rarr;
            </a>
            <a 
              href="#" 
              className="text-blue-600 text-sm font-semibold font-['Inter'] leading-5 hover:text-blue-700 transition-colors"
            >
              Pricing &rarr;
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
