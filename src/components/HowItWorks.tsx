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
    <section id="process" className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="text-amber-600 font-semibold text-sm uppercase tracking-widest mb-3">
            Process
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-stone-900 leading-tight mb-5">
            How it works
          </h2>
          <p className="text-stone-500 text-lg max-w-xl mx-auto">
            A straightforward process from first call to finished documentation.
            No long sales cycles or open-ended engagements.
          </p>
        </div>

        <div className="space-y-4">
          {steps.map((step) => (
            <div
              key={step.number}
              className="flex gap-6 bg-stone-50 border border-stone-100 rounded-2xl p-6 md:p-8"
            >
              <div className="shrink-0 w-10 h-10 bg-amber-100 rounded-xl flex items-center justify-center">
                <span className="text-xs font-bold text-amber-700">{step.number}</span>
              </div>
              <div className="pt-1">
                <h3 className="font-semibold text-stone-900 text-lg mb-2">{step.title}</h3>
                <p className="text-stone-500 text-sm leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
