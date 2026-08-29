import React from 'react';

export default function FAQSection() {
  const faqQuestions = [
    "Does Zoiko HR produce an overall winner score?",
    "What happens when evidence for a comparison subject cannot be found?",
    "How are comparison criteria defined?",
    "Can Zoiko HR compare any HR platform?",
    "How often are comparison claims updated?",
    "Can I submit a competitor product for comparison?",
    "Does a \"Limited/conditional\" status mean the feature is unavailable?",
  ];

  return (
    <section className="w-full bg-slate-100 py-20 px-6">
      <div className="max-w-3xl mx-auto flex flex-col justify-start items-start w-full">
        
        {/* Header Section */}
        <div className="flex flex-col gap-2 mb-8 w-full">
          <span className="text-indigo-400 text-xs font-semibold font-['IBM_Plex_Sans'] uppercase leading-4 tracking-wider">
            FAQ
          </span>
          <h2 className="text-slate-950 text-3xl font-bold font-['Manrope'] leading-9">
            Comparison method questions.
          </h2>
        </div>

        {/* FAQ Accordion List */}
        <div className="flex flex-col gap-3 w-full">
          {faqQuestions.map((question, index) => (
            <button 
              key={index} 
              className="w-full bg-white rounded-2xl outline outline-1 outline-offset-[-1px] outline-black/10 px-5 py-4 flex justify-between items-center text-left hover:bg-slate-50 hover:outline-black/20 transition-all group"
            >
              <span className="text-slate-950 text-base font-semibold font-['Manrope'] leading-6 pr-4">
                {question}
              </span>
              <span className="text-blue-600 text-xl font-normal font-['Inter'] leading-7 shrink-0 group-hover:scale-110 transition-transform">
                +
              </span>
            </button>
          ))}
        </div>

      </div>
    </section>
  );
}
