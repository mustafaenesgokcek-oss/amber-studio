const packages = [
  {
    name: "Starter AI Workflow Audit",
    price: "$299–$499",
    note: "Founding client rate",
    description:
      "The right starting point for agencies that want to understand what is possible before committing to implementation.",
    includes: [
      "Discovery questionnaire and intake review",
      "Written AI Workflow Audit Report",
      "One workflow reviewed in depth",
      "Specific, actionable recommendations",
      "Honest notes on what to avoid for your work",
      "20-minute follow-up call to walk through the report",
    ],
    highlight: false,
  },
  {
    name: "AI Workflow Setup Package",
    price: "$950–$1,500",
    note: "Most popular",
    description:
      "For agencies ready to implement. We design and document 2–3 workflows your team can start using right away.",
    includes: [
      "Everything in the Starter Audit",
      "2–3 workflows designed and documented",
      "Custom Prompt Library for your agency",
      "AI Usage and Brand Safety Guidelines",
      "SOP and Process Documentation Pack",
      "30-minute implementation walkthrough call",
    ],
    highlight: true,
  },
  {
    name: "Monthly AI Advisory",
    price: "$750–$1,250/mo",
    note: "Ongoing partnership",
    description:
      "An ongoing advisory relationship for agencies that want consistent AI improvement without managing it alone.",
    includes: [
      "Monthly workflow review and improvement",
      "Monthly AI Progress Summary report",
      "Prompt and guideline updates as your work evolves",
      "Access for questions throughout the month",
      "Quarterly strategic review call",
      "Priority access to new deliverables as they develop",
    ],
    highlight: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-amber-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="text-amber-600 font-semibold text-sm uppercase tracking-widest mb-3">
            Packages
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-stone-900 leading-tight mb-5">
            Clear pricing. No surprises.
          </h2>
          <p className="text-stone-500 text-lg max-w-xl mx-auto">
            Start with the audit. Add implementation when you are ready.
            Stay on monthly when you want a consistent partner.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {packages.map((pkg) => (
            <div
              key={pkg.name}
              className={`relative rounded-2xl p-8 flex flex-col ${
                pkg.highlight
                  ? "bg-stone-900 border-2 border-amber-400 shadow-xl"
                  : "bg-white border border-stone-200"
              }`}
            >
              <div className="mb-6">
                <div
                  className={`inline-block text-xs font-semibold px-3 py-1 rounded-full mb-4 ${
                    pkg.highlight
                      ? "bg-amber-400 text-stone-900"
                      : "bg-amber-50 text-amber-700 border border-amber-200"
                  }`}
                >
                  {pkg.note}
                </div>
                <h3
                  className={`text-xl font-bold mb-2 leading-snug ${
                    pkg.highlight ? "text-white" : "text-stone-900"
                  }`}
                >
                  {pkg.name}
                </h3>
                <div
                  className={`text-3xl font-bold mb-3 ${
                    pkg.highlight ? "text-amber-400" : "text-stone-900"
                  }`}
                >
                  {pkg.price}
                </div>
                <p
                  className={`text-sm leading-relaxed ${
                    pkg.highlight ? "text-stone-400" : "text-stone-500"
                  }`}
                >
                  {pkg.description}
                </p>
              </div>

              <ul className="space-y-3 mb-8 flex-1">
                {pkg.includes.map((item) => (
                  <li key={item} className="flex gap-3 text-sm">
                    <svg
                      className={`shrink-0 w-4 h-4 mt-0.5 ${
                        pkg.highlight ? "text-amber-400" : "text-amber-500"
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2.5}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className={pkg.highlight ? "text-stone-300" : "text-stone-600"}>
                      {item}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`block text-center font-semibold py-3.5 rounded-xl transition-colors ${
                  pkg.highlight
                    ? "bg-amber-400 hover:bg-amber-300 text-stone-900"
                    : "bg-stone-900 hover:bg-stone-800 text-white"
                }`}
              >
                Get Started
              </a>
            </div>
          ))}
        </div>

        <p className="text-center text-stone-400 text-sm mt-8">
          Not sure which package fits? The 20-minute review will help you decide — at no cost.
        </p>
      </div>
    </section>
  );
}
