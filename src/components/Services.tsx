const deliverables = [
  {
    title: "AI Workflow Audit Report",
    description:
      "A written assessment of where AI fits into your current workflows, with specific recommendations and honest notes on what to avoid.",
  },
  {
    title: "Content Workflow Improvement Plan",
    description:
      "A mapped-out plan for how your team can use AI across content creation, editing, repurposing, and scheduling — with guardrails included.",
  },
  {
    title: "Client Reporting Optimization Report",
    description:
      "A plan for using AI to speed up data pulls, first-draft reports, and summaries — while keeping your reporting accurate and on-brand.",
  },
  {
    title: "Client Intake and Onboarding System",
    description:
      "A documented workflow for using AI to collect, organize, and act on new client information — reducing the manual back-and-forth.",
  },
  {
    title: "Follow-Up and Lead Nurture Workflow",
    description:
      "A repeatable system for AI-assisted follow-up messaging, lead responses, and staying in touch — without sounding automated.",
  },
  {
    title: "Custom Prompt Library",
    description:
      "A set of tested, ready-to-use prompts built around your agency's voice, services, and typical work — not generic templates.",
  },
  {
    title: "AI Usage and Brand Safety Guidelines",
    description:
      "Clear rules for what your team can use AI for, what to keep out of prompts, and how to handle AI output before it reaches a client.",
  },
  {
    title: "SOP and Process Documentation Pack",
    description:
      "Written standard operating procedures for your key AI workflows — so any team member can follow them without asking.",
  },
  {
    title: "Website and Offer Clarity Review",
    description:
      "An assessment of how clearly your website communicates your services, with specific copy suggestions to attract better-fit clients.",
  },
  {
    title: "Monthly AI Progress Summary",
    description:
      "A monthly written summary of what changed, what worked, and what to focus on next — so AI stays useful as your agency grows.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="text-amber-600 font-semibold text-sm uppercase tracking-widest mb-3">
            Deliverables
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-stone-900 leading-tight mb-5">
            What you will actually receive
          </h2>
          <p className="text-stone-500 text-lg max-w-2xl mx-auto">
            Every engagement ends with written deliverables your team can use, follow, and
            build on — not just a conversation or general advice.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {deliverables.map((d) => (
            <div
              key={d.title}
              className="group bg-stone-50 border border-stone-100 hover:border-amber-200 hover:bg-amber-50/40 rounded-2xl p-6 transition-all"
            >
              <div className="flex items-start gap-3 mb-3">
                <div className="shrink-0 w-6 h-6 bg-amber-100 rounded-md flex items-center justify-center mt-0.5">
                  <svg
                    className="w-3.5 h-3.5 text-amber-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="font-semibold text-stone-900 group-hover:text-amber-700 transition-colors leading-snug text-sm">
                  {d.title}
                </h3>
              </div>
              <p className="text-stone-500 text-sm leading-relaxed pl-9">{d.description}</p>
            </div>
          ))}
        </div>

        <p className="text-center text-stone-400 text-sm mt-8">
          Not every engagement includes all deliverables. Your package determines which ones apply.
        </p>
      </div>
    </section>
  );
}
