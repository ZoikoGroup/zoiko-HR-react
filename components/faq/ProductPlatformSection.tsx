"use client"
import { useState } from "react"
import { FAQ_TOPICS } from "./faqData"

const FAQItem = ({ question, answer, authorityLabel, authorityHref, reviewed, isOpenInitial = false }: { question: string, answer: string, authorityLabel: string, authorityHref: string, reviewed: string, isOpenInitial?: boolean }) => {
  const [isOpen, setIsOpen] = useState(isOpenInitial)
  const hasAnswer = true

  return (
    <div className="border-b border-slate-200 last:border-b-0 bg-white">
      <button 
        onClick={() => hasAnswer && setIsOpen(!isOpen)}
        className={`w-full flex justify-between items-center text-left px-8 py-6 focus:outline-none ${hasAnswer ? 'cursor-pointer hover:bg-slate-50 transition-colors' : 'cursor-default'}`}
      >
        <span className="font-semibold text-[15px] text-slate-900 pr-8">{question}</span>
        {hasAnswer ? (
          <span className="flex-shrink-0 text-blue-600">
            {isOpen ? (
              <svg width="8" height="6" viewBox="0 0 8 6" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 6L0 0H8L4 6Z" />
              </svg>
            ) : (
              <svg width="6" height="8" viewBox="0 0 6 8" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 4L0 8V0L6 4Z" />
              </svg>
            )}
          </span>
        ) : (
          <span className="flex-shrink-0 text-blue-600">
            <svg width="6" height="8" viewBox="0 0 6 8" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 4L0 8V0L6 4Z" />
            </svg>
          </span>
        )}
      </button>
      
      {isOpen && hasAnswer && (
        <div className="px-8 pb-6">
          <p className="text-[14px] text-slate-600 mb-6 leading-relaxed">
            {answer}
          </p>
          <div className="bg-[#fafafa] rounded-md px-4 py-3 flex items-center justify-between border border-slate-100">
            <a href={authorityHref} className="text-[12px] text-blue-500 hover:text-blue-700 font-medium flex items-center group">
              Authority: {authorityLabel} <span className="ml-1 transition-transform group-hover:translate-x-1">→</span>
            </a>
            <span className="text-[12px] text-slate-400">Reviewed {reviewed}</span>
          </div>
        </div>
      )}
    </div>
  )
}

export const ProductPlatformSection = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 mb-3">Product & platform questions.</h2>
          <p className="text-[15px] text-slate-500">Core answers about what Zoiko HR is and how it works.</p>
        </div>
        
        <div className="bg-white rounded-xl shadow-[0_2px_10px_rgba(0,0,0,0.04)] border border-slate-200 overflow-hidden mx-auto">
          {FAQ_TOPICS.find((t) => t.key === "product")!.entries.map((entry, i) => (
            <FAQItem
              key={entry.question}
              question={entry.question}
              answer={entry.answer}
              authorityLabel={entry.authorityLabel}
              authorityHref={entry.authorityHref}
              reviewed={entry.reviewed}
              isOpenInitial={i === 0}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
