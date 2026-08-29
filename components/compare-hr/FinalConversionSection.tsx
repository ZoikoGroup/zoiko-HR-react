import React from 'react';

export default function FinalConversionSection() {
  return (
    <section className="w-full bg-gradient-to-br from-slate-950 to-slate-900 py-24 px-6 flex items-center justify-center min-h-[500px]">
      <div className="max-w-3xl w-full flex flex-col items-center justify-center text-center">
        
        {/* Heading */}
        <h2 className="text-white text-3xl md:text-4xl font-extrabold font-['Manrope'] leading-9 md:leading-[40px] mb-4">
          Evaluate Zoiko HR against the requirements that matter to your organization.
        </h2>
        
        {/* Subheading */}
        <p className="text-slate-400 text-lg font-normal font-['IBM_Plex_Sans'] leading-7 max-w-2xl mb-10">
          Start with a structured product tour, request current pricing, or speak directly with a solutions consultant — no aggregate score, no urgency.
        </p>
        
        {/* Call to Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10 w-full sm:w-auto">
          <button className="w-full sm:w-auto px-6 py-3 bg-white hover:bg-slate-100 transition-colors rounded-xl text-slate-950 text-sm font-semibold font-['Inter'] leading-5">
            Book a Demo
          </button>
          
          <button className="w-full sm:w-auto px-6 py-3 rounded-xl border border-white hover:bg-white/10 transition-colors text-white text-sm font-semibold font-['Inter'] leading-5">
            Request Pricing
          </button>
          
          <button className="w-full sm:w-auto px-2 py-3 text-indigo-400 hover:text-indigo-300 transition-colors text-sm font-medium font-['Inter'] underline leading-5">
            Take the Product Tour &rarr;
          </button>
        </div>
        
        {/* Support Links */}
        <div className="text-slate-600 text-sm font-normal font-['IBM_Plex_Sans'] leading-5 mb-2">
          Already using Zoiko HR?{' '}
          <a href="#" className="text-indigo-400 hover:text-indigo-300 underline transition-colors">
            Go to Help Center
          </a>
          {' / '}
          <a href="#" className="text-indigo-400 hover:text-indigo-300 underline transition-colors">
            Contact Support
          </a>
        </div>
        
        {/* Disclaimer */}
        <p className="text-slate-700 text-xs font-normal font-['IBM_Plex_Sans'] leading-4">
          No urgency. Your information is used only to fulfil your request in line with our Privacy Policy.
        </p>
        
      </div>
    </section>
  );
}
