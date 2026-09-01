const services = [
  {
    icon: "🧠",
    title: "AI Strategy & Roadmapping",
    description:
      "We assess your business, identify the highest-impact AI opportunities, and build a clear, actionable roadmap — so you invest in what actually matters.",
  },
  {
    icon: "⚙️",
    title: "AI Integration & Automation",
    description:
      "From automating repetitive workflows to integrating LLMs into your existing tools, we handle the full implementation so your team can focus on growth.",
  },
  {
    icon: "🤖",
    title: "Custom AI Agent Development",
    description:
      "We build intelligent agents that handle customer support, lead qualification, data analysis, and more — trained on your business context.",
  },
  {
    icon: "📊",
    title: "Data & Analytics with AI",
    description:
      "Transform raw data into actionable insights with AI-powered dashboards, forecasting models, and automated reporting systems.",
  },
  {
    icon: "🏋️",
    title: "Team AI Training & Enablement",
    description:
      "We train your team to confidently use AI tools, prompt effectively, and build a culture where AI accelerates every role.",
  },
  {
    icon: "🔐",
    title: "AI Governance & Risk",
    description:
      "Navigate compliance, bias, security, and ethical considerations with frameworks that let you move fast without breaking trust.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-zinc-950">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            What We <span className="text-amber-400">Do</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            End-to-end AI consulting — from strategy to deployment — so you get results, not just recommendations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <div
              key={s.title}
              className="bg-black border border-gray-800 hover:border-amber-500/50 rounded-2xl p-6 transition-all hover:-translate-y-1 group"
            >
              <div className="text-3xl mb-4">{s.icon}</div>
              <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-amber-400 transition-colors">
                {s.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">{s.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
