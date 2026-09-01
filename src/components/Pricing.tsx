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
    <section id="pricing" className="py-24 bg-[#EDE8DF]">
      <div className="max-w-6xl mx-auto px-8">
        <div className="max-w-2xl mb-16">
          <p className="text-sm text-[#B07628] mb-5">Packages</p>
          <h2 className="text-4xl md:text-5xl font-bold text-[#1C1714] leading-tight mb-6">
            Clear pricing.
          </h2>
          <p className="text-[#3D3530] text-lg leading-relaxed">
            Start with the audit. Add implementation when you are ready.
            Stay on monthly when you want a consistent partner.
          </p>
        </div>

        <div className="border-t border-[#DDD5C8] divide-y divide-[#DDD5C8]">
          {packages.map((pkg) => (
            <div
              key={pkg.name}
              className={`py-10 grid md:grid-cols-[1fr_1.2fr_auto] gap-8 items-start ${
                pkg.featured ? "bg-[#F2E8D6] -mx-4 px-4" : ""
              }`}
            >
              <div>
                <p className="text-xs text-[#9B8C82] mb-2 tracking-wide">{pkg.note}</p>
                <h3 className="text-lg font-semibold text-[#1C1714] mb-2 leading-snug">
                  {pkg.name}
                </h3>
                <p className="text-sm text-[#7A6F67] leading-relaxed">{pkg.description}</p>
              </div>

              <ul className="space-y-2">
                {pkg.includes.map((item) => (
                  <li key={item} className="text-sm text-[#3D3530] flex gap-3 leading-snug">
                    <span className="text-[#B07628] shrink-0 mt-px">—</span>
                    {item}
                  </li>
                ))}
              </ul>

              <div className="flex flex-col items-start md:items-end gap-4">
                <div className="text-2xl font-semibold text-[#1C1714]">{pkg.price}</div>
                <a
                  href="#contact"
                  className="text-sm text-[#1C1714] border border-[#DDD5C8] hover:border-[#1C1714] px-5 py-2.5 transition-colors whitespace-nowrap bg-[#F8F5F0]"
                >
                  Get Started
                </a>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-8 text-xs text-[#9B8C82]">
          Not sure which package fits? The 20-minute review will help you figure that out — at no cost.
        </p>
      </div>
    </section>
  );
}
