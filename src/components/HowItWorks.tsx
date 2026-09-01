const steps = [
  {
    number: "01",
    title: "Discovery Call",
    description:
      "We start with a free 30-minute call to understand your business, goals, and current challenges. No pitch — just honest conversation.",
  },
  {
    number: "02",
    title: "AI Audit & Strategy",
    description:
      "We audit your workflows, data, and tech stack. Then we deliver a prioritized AI strategy with clear ROI projections.",
  },
  {
    number: "03",
    title: "Build & Implement",
    description:
      "Our team builds and integrates the solutions — whether that's an AI agent, automation pipeline, or analytics system.",
  },
  {
    number: "04",
    title: "Train & Hand Off",
    description:
      "We train your team, document everything, and stay on as a partner. You own the results and know how to scale them.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-black">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            How It <span className="text-amber-400">Works</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A clear, structured process from first call to full deployment — no surprises.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <div key={step.number} className="relative">
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-full w-full h-px bg-gradient-to-r from-amber-500/50 to-transparent z-0" />
              )}
              <div className="relative z-10 bg-zinc-950 border border-gray-800 rounded-2xl p-6">
                <div className="text-4xl font-black text-amber-500/30 mb-4">{step.number}</div>
                <h3 className="text-white font-semibold text-lg mb-2">{step.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
