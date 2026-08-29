"use client";

import React from 'react';

export default function CorrectionsSection() {
  return (
    <section className="w-full bg-slate-50 py-20 px-6">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
        
        {/* Left Column: Text & Form */}
        <div className="flex-1 flex flex-col w-full">
          
          {/* Section Header */}
          <span className="text-indigo-400 text-xs font-semibold font-['IBM_Plex_Sans'] uppercase leading-4 tracking-wider mb-2">
            Corrections
          </span>
          <h2 className="text-slate-950 text-3xl font-bold font-['Manrope'] leading-9 mb-6">
            Report an outdated or inaccurate comparison.
          </h2>
          <p className="text-slate-500 text-base font-normal font-['IBM_Plex_Sans'] leading-6 mb-8 max-w-lg">
            A submission does not itself change the public claim. Reports are reviewed against primary sources before any update is made.
          </p>

          {/* Form */}
          <form className="flex flex-col gap-5 w-full max-w-lg" onSubmit={(e) => e.preventDefault()}>
            
            {/* Issue Type (Select) */}
            <div className="flex flex-col gap-1.5">
              <label htmlFor="issue-type" className="text-slate-900 text-sm font-semibold font-['IBM_Plex_Sans'] leading-5">
                Issue type
              </label>
              <select 
                id="issue-type" 
                className="w-full px-4 py-3 bg-white rounded-xl border border-black/10 focus:outline-none focus:ring-2 focus:ring-blue-500 text-slate-900 text-sm font-normal font-['Inter'] appearance-none"
              >
                <option>Outdated source date</option>
                <option>Inaccurate claim</option>
                <option>Missing nuance/condition</option>
                <option>Other</option>
              </select>
            </div>

            {/* Brief Explanation (Textarea) */}
            <div className="flex flex-col gap-1.5">
              <label htmlFor="explanation" className="text-slate-900 text-sm font-semibold font-['IBM_Plex_Sans'] leading-5">
                Brief explanation
              </label>
              <textarea 
                id="explanation" 
                rows="3" 
                placeholder="Describe the inaccuracy…" 
                className="w-full px-4 py-3 bg-white rounded-xl border border-black/10 focus:outline-none focus:ring-2 focus:ring-blue-500 text-slate-900 text-sm font-normal font-['Inter'] placeholder:text-slate-400 resize-none"
              />
            </div>

            {/* Optional Source URL (Input) */}
            <div className="flex flex-col gap-1.5">
              <label htmlFor="source-url" className="text-slate-900 text-sm font-semibold font-['IBM_Plex_Sans'] leading-5">
                Optional source URL
              </label>
              <input 
                type="url" 
                id="source-url" 
                placeholder="https://…" 
                className="w-full px-4 py-3 bg-white rounded-xl border border-black/10 focus:outline-none focus:ring-2 focus:ring-blue-500 text-slate-900 text-sm font-normal font-['Inter'] placeholder:text-slate-400"
              />
            </div>

            {/* Contact Email (Input) */}
            <div className="flex flex-col gap-1.5">
              <label htmlFor="email" className="text-slate-900 text-sm font-semibold font-['IBM_Plex_Sans'] leading-5">
                Contact email (optional)
              </label>
              <input 
                type="email" 
                id="email" 
                placeholder="you@example.com" 
                className="w-full px-4 py-3 bg-white rounded-xl border border-black/10 focus:outline-none focus:ring-2 focus:ring-blue-500 text-slate-900 text-sm font-normal font-['Inter'] placeholder:text-slate-400"
              />
            </div>

            {/* Submit Button & Disclaimer */}
            <div className="flex flex-col gap-4 mt-2">
              <button 
                type="submit" 
                className="w-[180px] h-11 bg-blue-600 hover:bg-blue-700 transition-colors rounded-xl flex items-center justify-center group"
              >
                <span className="text-white text-sm font-semibold font-['Inter'] leading-5 flex items-center gap-2">
                  Submit report 
                  <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
                </span>
              </button>
              <p className="text-slate-400 text-xs font-normal font-['IBM_Plex_Sans'] leading-4">
                Contact email is used only for factual follow-up. Not used for marketing.
              </p>
            </div>

          </form>
        </div>

        {/* Right Column: Image Container */}
        <div className="flex-1 w-full relative min-h-[400px] lg:min-h-[600px] rounded-xl overflow-hidden shadow-sm outline outline-1 outline-black/10">
          <img 
            className="absolute inset-0 w-full h-full object-cover object-center" 
            src="/images/compare-hr/corrections.png" 
            alt="Factual review process" 
          />
        </div>

      </div>
    </section>
  );
}
