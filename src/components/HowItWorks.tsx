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
    <section id="process" className="py-24 bg-[#FAF8F4]">
      <div className="max-w-6xl mx-auto px-8">
        <div className="max-w-2xl mb-16">
          <p className="text-sm text-[#B07628] mb-5">Process</p>
          <h2 className="text-4xl md:text-5xl font-bold text-[#1C1714] leading-tight mb-6">
            How it works
          </h2>
          <p className="text-[#3D3530] text-lg leading-relaxed">
            A straightforward process from first call to finished documentation.
            No long sales cycles or open-ended engagements.
          </p>
        </div>

        <div className="border-t border-[#DDD5C8] divide-y divide-[#DDD5C8] max-w-3xl">
          {steps.map((step) => (
            <div key={step.number} className="py-8 flex gap-8">
              <span className="shrink-0 text-sm font-mono text-[#9B8C82] pt-0.5 w-6">
                {step.number}
              </span>
              <div>
                <h3 className="font-medium text-[#1C1714] mb-2">{step.title}</h3>
                <p className="text-sm text-[#7A6F67] leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
