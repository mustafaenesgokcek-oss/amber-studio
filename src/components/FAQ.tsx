"use client";
import { useState } from "react";

const faqs = [
  {
    q: "What happens in the 20-minute AI workflow review?",
    a: "We pick one workflow your team is currently doing — a report, a content process, a client onboarding step — and look at it together. We tell you where AI can realistically help, where it probably should not, and what a sensible next step looks like. You leave with something specific and useful, not a vague overview of AI possibilities.",
  },
  {
    q: "We already use ChatGPT. Do we actually need this?",
    a: "Most agencies we talk to are already using AI in some form — usually a mix of personal ChatGPT use, some team sharing, and a few things nobody documented. That is a starting point, not a system. Amber Studio turns that scattered usage into something consistent, repeatable, and safe for client work.",
  },
  {
    q: "How long does a typical engagement take?",
    a: "The Starter Audit takes about a week from intake to delivery. The Setup Package typically runs 2–4 weeks depending on scope. Monthly Advisory is ongoing from the day we start.",
  },
  {
    q: "Do we need to be technical to work with you?",
    a: "No. We work with the people who do the actual work — writers, account managers, strategists. If you can describe what your team does day to day, that is everything we need to get started.",
  },
  {
    q: "What if AI does not turn out to be a good fit for our agency?",
    a: "We will tell you that directly. The 20-minute review is specifically designed to be honest: we will say where AI makes sense, where it does not, and what a useful next step looks like either way. We would rather give you the right answer than sell you something that will not deliver.",
  },
  {
    q: "What do deliverables look like in practice?",
    a: "Written reports in plain language, prompt libraries in a format your team can open and use immediately, SOPs anyone on your team can follow without asking, and brand safety guidelines clear enough for the whole agency. Everything is documented so it does not depend on us being involved forever.",
  },
  {
    q: "How is the Starter Audit different from the Setup Package?",
    a: "The Starter Audit tells you what to do. The Setup Package does it with you — we design the workflows, write the prompts, build the documentation, and walk your team through the implementation. The Audit is the right starting point if you want to understand what is realistic before committing more budget.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 bg-[#FAF7F2]">
      <div className="max-w-4xl mx-auto px-8">

        <div className="max-w-xl mb-14">
          <p className="text-[10px] tracking-[0.25em] text-[#FF9D08] uppercase font-medium mb-5">
            FAQ
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-[#0F1B2A] leading-tight tracking-tight">
            Common questions
          </h2>
        </div>

        <div className="border-t border-[#E7E0D6] divide-y divide-[#E7E0D6]">
          {faqs.map((faq, i) => (
            <div key={i}>
              <button
                className="w-full flex items-center justify-between gap-6 py-6 text-left cursor-pointer"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span className="font-semibold text-[#0F1B2A] leading-snug text-sm">
                  {faq.q}
                </span>
                <svg
                  className={`shrink-0 w-4 h-4 text-[#9AA7B6] transition-transform duration-200 ${
                    open === i ? "rotate-180" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {open === i && (
                <p className="pb-6 text-sm text-[#9AA7B6] leading-relaxed max-w-2xl">
                  {faq.a}
                </p>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
