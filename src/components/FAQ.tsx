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
    <section id="faq" className="py-24 bg-stone-50">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="text-amber-600 font-semibold text-sm uppercase tracking-widest mb-3">FAQ</p>
          <h2 className="text-4xl md:text-5xl font-bold text-stone-900 leading-tight">
            Common questions
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="bg-white border border-stone-200 rounded-2xl overflow-hidden"
            >
              <button
                className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left cursor-pointer"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span className="font-semibold text-stone-900 text-sm leading-snug">
                  {faq.q}
                </span>
                <svg
                  className={`shrink-0 w-5 h-5 text-amber-500 transition-transform duration-200 ${
                    open === i ? "rotate-180" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {open === i && (
                <div className="px-6 pb-5 pt-1 text-stone-500 text-sm leading-relaxed border-t border-stone-100">
                  <div className="pt-4">{faq.a}</div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
