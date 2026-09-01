const pillars = [
  {
    number: "01",
    title: "Map your highest-value opportunities",
    description:
      "We look at your actual workflows — content, reporting, intake, follow-up — and identify where AI saves the most time with the least risk.",
  },
  {
    number: "02",
    title: "Design repeatable processes",
    description:
      "We turn one-off experiments into step-by-step workflows anyone on your team can follow — consistently, every time.",
  },
  {
    number: "03",
    title: "Build the prompts and guidelines",
    description:
      "We write the prompts, tone rules, and brand-safety guidelines that make AI output reliable and appropriate for client-facing work.",
  },
  {
    number: "04",
    title: "Document everything clearly",
    description:
      "You receive written SOPs, workflow guides, and a prompt library — so the knowledge lives in your agency, not in one person's head.",
  },
];

export default function WhatWeDo() {
  return (
    <section className="py-24 bg-[#EDE8DF]">
      <div className="max-w-6xl mx-auto px-8">
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          <div>
            <p className="text-sm text-[#B07628] mb-5">What We Do</p>
            <h2 className="text-4xl md:text-5xl font-bold text-[#1C1714] leading-tight mb-7">
              We turn scattered AI use into reliable workflows.
            </h2>
            <p className="text-[#3D3530] text-lg leading-relaxed mb-5">
              Amber Studio works with small agencies to design, document, and implement AI
              workflows your team can actually use — without guessing, without risk, and
              without one person having to figure it out every time.
            </p>
            <p className="text-[#7A6F67] text-base leading-relaxed mb-10">
              We do not sell software. We deliver clear, practical systems built around
              how your agency already works.
            </p>
            <a
              href="#contact"
              className="text-sm text-[#B07628] hover:text-[#1C1714] underline underline-offset-4 decoration-[#DDD5C8] hover:decoration-[#1C1714] transition-colors"
            >
              Book a free 20-minute review
            </a>
          </div>

          <div className="divide-y divide-[#DDD5C8]">
            {pillars.map((p) => (
              <div key={p.number} className="py-6 flex gap-6">
                <span className="shrink-0 text-xs font-mono text-[#9B8C82] pt-0.5 w-5">{p.number}</span>
                <div>
                  <h3 className="font-medium text-[#1C1714] mb-2">{p.title}</h3>
                  <p className="text-sm text-[#7A6F67] leading-relaxed">{p.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
