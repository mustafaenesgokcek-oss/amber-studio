const pillars = [
  {
    number: "01",
    title: "Map your highest-value AI opportunities",
    description:
      "We look at your actual workflows — content creation, reporting, client intake, follow-up — and identify where AI saves the most time with the least risk.",
  },
  {
    number: "02",
    title: "Design repeatable processes",
    description:
      "We turn one-off AI experiments into step-by-step workflows your whole team can follow consistently, every time — without depending on the one person who figured it out.",
  },
  {
    number: "03",
    title: "Build the prompts and guidelines",
    description:
      "We write the prompts, tone guidelines, and brand-safety rules that make AI outputs reliable and appropriate for client-facing work.",
  },
  {
    number: "04",
    title: "Document everything clearly",
    description:
      "You receive written SOPs, workflow guides, and a custom prompt library — so the knowledge lives in your agency, not in one person's head.",
  },
];

export default function WhatWeDo() {
  return (
    <section className="py-24 bg-stone-50">
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-amber-600 font-semibold text-sm uppercase tracking-widest mb-3">
              What We Do
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-stone-900 leading-tight mb-6">
              We turn scattered AI use into reliable workflows.
            </h2>
            <p className="text-stone-600 text-lg leading-relaxed mb-5">
              Amber Studio works with small agencies to design, document, and implement AI
              workflows that your team can actually use — without guessing, without risk,
              and without one person having to figure it out every time.
            </p>
            <p className="text-stone-500 text-base leading-relaxed">
              We do not sell software. We deliver clear, practical systems built around how
              your agency already works.
            </p>

            <div className="mt-8">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-amber-600 hover:text-amber-700 font-semibold transition-colors"
              >
                Book a free 20-minute review
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>

          <div className="space-y-5">
            {pillars.map((p) => (
              <div key={p.number} className="flex gap-5">
                <div className="shrink-0 w-8 h-8 bg-amber-100 rounded-lg flex items-center justify-center">
                  <span className="text-xs font-bold text-amber-700">{p.number}</span>
                </div>
                <div className="pt-0.5">
                  <h3 className="font-semibold text-stone-900 mb-1">{p.title}</h3>
                  <p className="text-stone-500 text-sm leading-relaxed">{p.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
