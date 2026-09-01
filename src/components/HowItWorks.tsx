const steps = [
  {
    number: "01",
    title: "Book a 20-minute AI workflow review",
    description:
      "We look at one workflow your team is currently doing. No pitch, no pressure — just an honest conversation about what AI can realistically do for that specific task.",
  },
  {
    number: "02",
    title: "Receive a written audit and recommendations",
    description:
      "You get a clear written report: where AI fits, where it does not, and what a practical next step looks like. Specific to your agency — not a generic overview.",
  },
  {
    number: "03",
    title: "Decide what to implement",
    description:
      "If the audit surfaces opportunities worth acting on, we scope a Setup Package or Advisory engagement. If not, the report still gives you something useful. No pressure either way.",
  },
  {
    number: "04",
    title: "Your team gets the documentation",
    description:
      "Everything we design or recommend is written up in plain language — prompts, SOPs, guidelines, workflow maps — so your team can follow it without us in the room.",
  },
];

export default function HowItWorks() {
  return (
    <section id="process" className="py-24 bg-[#FAF7F2]">
      <div className="max-w-6xl mx-auto px-8">

        <div className="max-w-2xl mb-16">
          <p className="text-[10px] tracking-[0.25em] text-[#FF9D08] uppercase font-medium mb-5">
            Process
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-[#0F1B2A] leading-tight tracking-tight mb-6">
            How it works
          </h2>
          <p className="text-[#0F1B2A]/65 text-lg leading-relaxed">
            A straightforward process from first call to finished documentation.
            No long sales cycles or open-ended engagements.
          </p>
        </div>

        <div className="border-t border-[#E7E0D6] divide-y divide-[#E7E0D6] max-w-3xl">
          {steps.map((step) => (
            <div key={step.number} className="py-8 flex gap-8">
              <span className="shrink-0 text-[10px] font-mono text-[#9AA7B6] pt-1 w-6">
                {step.number}
              </span>
              <div>
                <h3 className="font-semibold text-sm text-[#0F1B2A] mb-2 leading-snug">
                  {step.title}
                </h3>
                <p className="text-sm text-[#9AA7B6] leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
