const reasons = [
  {
    title: "We Speak Business, Not Jargon",
    description:
      "No buzzwords, no technical rabbit holes unless you want them. We translate AI into plain business value.",
  },
  {
    title: "Boutique Attention, Enterprise Thinking",
    description:
      "You work directly with senior consultants — not handed off to juniors after the sale.",
  },
  {
    title: "We've Built It Ourselves",
    description:
      "We don't just consult on AI — we've built AI products. We know what breaks in production.",
  },
  {
    title: "No Lock-In",
    description:
      "We build with open standards and document everything. You're never dependent on us to keep the lights on.",
  },
];

export default function WhyUs() {
  return (
    <section className="py-24 bg-black">
      <div className="max-w-6xl mx-auto px-6">
        {/* CTA Banner */}
        <div className="bg-gradient-to-r from-amber-500/10 via-amber-600/10 to-amber-500/10 border border-amber-500/30 rounded-3xl p-10 md:p-14 text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Why businesses choose{" "}
            <span className="text-amber-400">Amber Studio</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            There are a lot of AI consultants. Here&apos;s what makes us different.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {reasons.map((r) => (
            <div
              key={r.title}
              className="flex gap-4 bg-zinc-950 border border-gray-800 rounded-2xl p-6"
            >
              <div className="shrink-0 w-8 h-8 bg-amber-500/20 rounded-lg flex items-center justify-center">
                <svg className="w-4 h-4 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h3 className="text-white font-semibold text-lg mb-2">{r.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{r.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
