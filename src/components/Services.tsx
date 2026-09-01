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
    <section id="services" className="py-24 bg-[#F8F5F0]">
      <div className="max-w-6xl mx-auto px-8">
        <div className="max-w-2xl mb-16">
          <p className="text-sm text-[#B07628] mb-5">Deliverables</p>
          <h2 className="text-4xl md:text-5xl font-bold text-[#1C1714] leading-tight mb-6">
            What you will actually receive
          </h2>
          <p className="text-[#3D3530] text-lg leading-relaxed">
            Every engagement ends with written deliverables your team can use, follow,
            and build on — not just a conversation or general advice.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-x-16">
          {deliverables.map((d, i) => (
            <div key={d.title} className="border-t border-[#DDD5C8] py-6 flex gap-6">
              <span className="shrink-0 text-xs font-mono text-[#9B8C82] pt-0.5 w-5">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="font-medium text-[#1C1714] mb-1.5 leading-snug">{d.title}</h3>
                <p className="text-sm text-[#7A6F67] leading-relaxed">{d.description}</p>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-10 text-xs text-[#9B8C82] border-t border-[#DDD5C8] pt-6">
          Not every engagement includes all deliverables. Your package determines which ones apply.
        </p>
      </div>
    </section>
  );
}
