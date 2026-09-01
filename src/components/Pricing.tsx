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
    featured: false,
  },
  {
    name: "AI Workflow Setup Package",
    price: "$950–$1,500",
    note: "Most requested",
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
    featured: true,
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
    featured: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-[#F7F0E5]">
      <div className="max-w-6xl mx-auto px-8">

        <div className="max-w-2xl mb-16">
          <p className="text-[10px] tracking-[0.25em] text-[#FF9D08] uppercase font-medium mb-5">
            Packages
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-[#0F1B2A] leading-tight tracking-tight mb-6">
            Clear pricing.
          </h2>
          <p className="text-[#0F1B2A]/65 text-lg leading-relaxed">
            Start with the audit. Add implementation when you are ready.
            Stay on monthly when you want a consistent partner.
          </p>
        </div>

        <div className="divide-y divide-[#E7E0D6] border-t border-[#E7E0D6]">
          {packages.map((pkg) => (
            <div
              key={pkg.name}
              className={`py-10 grid md:grid-cols-[1fr_1.2fr_auto] gap-8 items-start transition-colors ${
                pkg.featured
                  ? "relative"
                  : ""
              }`}
            >
              {pkg.featured && (
                <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-[#FF9D08]" />
              )}

              <div className={pkg.featured ? "pl-5" : ""}>
                <p className="text-[9px] tracking-[0.2em] uppercase font-medium mb-2 text-[#FF9D08]">
                  {pkg.note}
                </p>
                <h3 className="text-base font-semibold text-[#0F1B2A] mb-2 leading-snug tracking-tight">
                  {pkg.name}
                </h3>
                <p className="text-sm text-[#9AA7B6] leading-relaxed">{pkg.description}</p>
              </div>

              <ul className={`space-y-2.5 ${pkg.featured ? "" : ""}`}>
                {pkg.includes.map((item) => (
                  <li key={item} className="text-sm text-[#0F1B2A]/75 flex gap-3 leading-snug">
                    <span className="text-[#FF9D08] shrink-0 mt-px">—</span>
                    {item}
                  </li>
                ))}
              </ul>

              <div className="flex flex-col items-start md:items-end gap-4">
                <div className="text-2xl font-bold text-[#0F1B2A] tracking-tight">
                  {pkg.price}
                </div>
                <a
                  href="#contact"
                  className={`text-sm px-5 py-2.5 transition-colors whitespace-nowrap tracking-wide ${
                    pkg.featured
                      ? "bg-[#0F1B2A] text-[#F7F0E5] hover:bg-[#162435]"
                      : "border border-[#E7E0D6] text-[#0F1B2A] hover:border-[#0F1B2A]"
                  }`}
                >
                  Get Started
                </a>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-8 text-xs text-[#9AA7B6]">
          Not sure which package fits? The 20-minute review will help you figure that out — at no cost.
        </p>
      </div>
    </section>
  );
}
