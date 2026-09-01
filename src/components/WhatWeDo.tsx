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

const wontDo = [
  "Replace employees or hire for you",
  "Promise full automation or guarantee ROI",
  "Make legal or compliance guarantees",
  "Take over client communication on your behalf",
  "Force unnecessary AI tools into your process",
  "Build software or write custom code",
  "Pretend AI should touch everything",
];

export default function WhatWeDo() {
  return (
    <section className="py-24 bg-[#F7F0E5]">
      <div className="max-w-6xl mx-auto px-8">
        <div className="grid lg:grid-cols-2 gap-20 items-start">

          {/* Left */}
          <div>
            <p className="text-[10px] tracking-[0.25em] text-[#FF9D08] uppercase font-medium mb-5">
              What We Do
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-[#0F1B2A] leading-tight tracking-tight mb-7">
              We turn scattered AI use into reliable workflows.
            </h2>
            <p className="text-[#0F1B2A]/65 text-lg leading-relaxed mb-5">
              Amber Studio works with small agencies to design, document, and implement
              AI workflows your team can actually use — without guessing, without risk,
              and without one person having to figure it out every time.
            </p>
            <p className="text-[#9AA7B6] text-base leading-relaxed mb-10">
              We do not sell software. We deliver clear, practical systems built around
              how your agency already works.
            </p>
            <a
              href="#contact"
              className="inline-block text-sm text-[#FF9D08] hover:text-[#C87118] transition-colors underline underline-offset-4 decoration-[#E7E0D6] hover:decoration-[#C87118]"
            >
              Book a free 20-minute review
            </a>
          </div>

          {/* Right */}
          <div>
            <div className="divide-y divide-[#E7E0D6]">
              {pillars.map((p) => (
                <div key={p.number} className="py-6 flex gap-6">
                  <span className="shrink-0 text-[10px] font-mono text-[#9AA7B6] pt-0.5 w-6">
                    {p.number}
                  </span>
                  <div>
                    <h3 className="font-semibold text-sm text-[#0F1B2A] mb-2 leading-snug">
                      {p.title}
                    </h3>
                    <p className="text-sm text-[#9AA7B6] leading-relaxed">{p.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* What we don't do */}
            <div className="mt-8 border-t border-[#E7E0D6] pt-8">
              <p className="text-[10px] font-semibold text-[#0F1B2A] tracking-[0.2em] uppercase mb-4">
                What we don&apos;t do
              </p>
              <ul className="space-y-2">
                {wontDo.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="text-[#E7E0D6] text-xs shrink-0 mt-px leading-snug">—</span>
                    <span className="text-xs text-[#9AA7B6] leading-snug">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
