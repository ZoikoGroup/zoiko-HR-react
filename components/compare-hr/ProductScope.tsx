import React from 'react';

export default function ProductScope() {
  const cards = [
    {
      title: 'Platform Overview',
      description: 'Core architecture, deployment and platform capability.',
    },
    {
      title: 'Core HR',
      description: 'Employee records, organization structure and HR processes.',
    },
    {
      title: 'Global HR',
      description: 'Multi-entity, localisation and cross-region administration.',
    },
    {
      title: 'Onboarding & Lifecycle',
      description: 'Hire-to-retire workflows, documents and task management.',
    },
    {
      title: 'Pricing',
      description: 'Published plan information and commercial availability.',
    },
  ];

  return (
    <section className="w-full bg-slate-900 py-20 px-6">
      <div className="max-w-6xl mx-auto flex flex-col justify-start items-start">
        
        {/* Header Section */}
        <div className="flex flex-col gap-2 mb-12">
          <span className="text-indigo-400 text-xs font-semibold font-['IBM_Plex_Sans'] uppercase leading-4 tracking-wider">
            Product scope
          </span>
          <h2 className="text-white text-3xl font-bold font-['Manrope'] leading-9">
            Zoiko HR product scope — what we can compare.
          </h2>
          <p className="text-slate-400 text-base font-normal font-['IBM_Plex_Sans'] leading-6 mt-1">
            Zoiko HR comparison claims remain anchored to canonical approved product sources.
          </p>
        </div>

        {/* CSS Grid Layout */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Card 1: Platform Overview */}
          <ScopeCard {...cards[0]} />
          
          {/* Card 2: Core HR */}
          <ScopeCard {...cards[1]} />
          
          {/* Card 3: Global HR */}
          <ScopeCard {...cards[2]} />

          {/* Card 4: Onboarding & Lifecycle */}
          <ScopeCard {...cards[3]} />

          {/* Large Image (Spans 2 columns and 2 rows on large screens) */}
          <div className="relative w-full min-h-[18rem] md:min-h-full bg-sky-950 rounded-xl border border-white/10 border-t-2 overflow-hidden lg:col-span-2 lg:row-span-2">
            <img 
              className="w-full h-full object-cover object-top absolute inset-0" 
              src="/images/compare-hr/product scope.png" 
              alt="Platform Preview" 
            />
          </div>

          {/* Card 5: Pricing */}
          <ScopeCard {...cards[4]} />

        </div>
      </div>
    </section>
  );
}

// Reusable Card Component
function ScopeCard({ title, description }) {
  return (
    <div className="w-full p-5 bg-sky-950 rounded-xl border border-white/10 border-t-2 flex flex-col justify-between items-start min-h-[9rem]">
      <div className="flex flex-col gap-1 w-full">
        <h3 className="text-white text-base font-bold font-['Manrope'] leading-6">
          {title}
        </h3>
        <p className="text-slate-400 text-sm font-normal font-['IBM_Plex_Sans'] leading-5">
          {description}
        </p>
      </div>
      
      <div className="w-full pt-4 inline-flex flex-wrap items-center gap-4 mt-auto">
        <a 
          href="#" 
          className="text-indigo-400 hover:text-indigo-300 text-xs font-semibold font-['Inter'] leading-4 transition-colors"
        >
          Compare this area &rarr;
        </a>
        <a 
          href="#" 
          className="text-slate-500 hover:text-slate-300 text-xs font-semibold font-['Inter'] leading-4 transition-colors"
        >
          View documentation &rarr;
        </a>
      </div>
    </div>
  );
}
