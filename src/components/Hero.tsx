const features = [
  {
    title: "Written deliverables, not software",
    description:
      "You get a report, prompt library, guide, or set of SOPs — not just a tool.",
  },
  {
    title: "Built around your existing workflows",
    description:
      "We start with how your team actually works. Nothing gets added unless it solves a real problem.",
  },
  {
    title: "Fast, practical, no fluff",
    description:
      "Clear steps, quick wins, and systems your team will actually use.",
  },
];

const workflowSteps = [
  { label: "Client inquiry", active: true },
  { label: "Auto-reply sent", active: false },
  { label: "AI processes", active: true },
  { label: "Data extracted", active: false },
  { label: "Team notified", active: true },
  { label: "Ready to review", active: false },
];

const wontDo = [
  "Replace employees or hire for you",
  "Promise full automation",
  "Build software or write custom code",
  "Pretend AI should touch everything",
];

export default function Hero() {
  return (
    <section className="bg-[#F7F0E5] pt-32 pb-24">
      <div className="max-w-6xl mx-auto px-8">
        <div className="grid lg:grid-cols-[1fr_360px] gap-16 items-start">

          {/* Left: main content */}
          <div>
            {/* Eyebrow */}
            <p className="text-[10px] tracking-[0.28em] text-[#FF9D08] uppercase font-medium mb-9">
              AI Workflow Studio
            </p>

            {/* Headline */}
            <h1 className="text-5xl md:text-[58px] lg:text-[62px] font-bold text-[#0F1B2A] leading-[1.06] tracking-tight mb-8">
              We build the workflows.{" "}
              <span className="text-[#C87118]">You run the agency.</span>
            </h1>

            {/* Tagline */}
            <p className="text-[11px] text-[#9AA7B6] tracking-[0.2em] uppercase mb-7">
              Practical AI workflows for small teams.
            </p>

            {/* Paragraph */}
            <p className="text-[17px] text-[#0F1B2A]/65 leading-relaxed mb-10 max-w-[480px]">
              We start with your real workflows — content, reporting, intake,
              follow-up, and internal operations — and build practical AI systems
              around them. Not the other way around.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-start gap-4 mb-10">
              <a
                href="#contact"
                className="bg-[#0F1B2A] hover:bg-[#162435] text-[#F7F0E5] text-sm font-medium px-8 py-4 transition-colors tracking-wide whitespace-nowrap"
              >
                Get a 20-minute workflow review
              </a>
              <a
                href="#pricing"
                className="text-sm text-[#0F1B2A] border border-[#E7E0D6] hover:border-[#FF9D08] hover:text-[#C87118] px-8 py-4 transition-colors tracking-wide whitespace-nowrap"
              >
                See Packages
              </a>
            </div>

            {/* Trust line */}
            <p className="text-[9px] text-[#9AA7B6] tracking-[0.22em] uppercase mb-12">
              Trusted by creative teams, agencies, and operators.
            </p>

            {/* Feature blocks */}
            <div className="border-t border-[#E7E0D6] pt-8 grid sm:grid-cols-3 gap-6">
              {features.map((f) => (
                <div key={f.title}>
                  <div className="text-[11px] font-semibold text-[#0F1B2A] mb-1.5 leading-snug">
                    {f.title}
                  </div>
                  <div className="text-[11px] text-[#9AA7B6] leading-relaxed">
                    {f.description}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: visual cards (desktop only) */}
          <div className="hidden lg:flex flex-col gap-3.5 pt-14">

            {/* Workflow card */}
            <div className="bg-white border border-[#E7E0D6] p-5">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-2 h-2 rounded-full bg-[#FF9D08]" />
                <span className="text-[9px] font-semibold text-[#0F1B2A] tracking-[0.2em] uppercase">
                  Workflow
                </span>
              </div>
              <div className="space-y-2.5">
                {workflowSteps.map((step) => (
                  <div key={step.label} className="flex items-center gap-3">
                    <div
                      className={`w-1.5 h-1.5 rounded-full shrink-0 ${
                        step.active ? "bg-[#FF9D08]" : "bg-[#E7E0D6]"
                      }`}
                    />
                    <span
                      className={`text-xs leading-none ${
                        step.active ? "text-[#0F1B2A]" : "text-[#9AA7B6]"
                      }`}
                    >
                      {step.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Outcome card */}
            <div className="bg-[#0F1B2A] p-5">
              <div className="text-[9px] text-[#9AA7B6] tracking-[0.2em] uppercase mb-3">
                Outcome
              </div>
              <div className="text-sm font-semibold text-[#FF9D08] mb-1 leading-snug">
                Less repetitive work
              </div>
              <div className="text-sm font-semibold text-[#F7F0E5] leading-snug">
                More consistent process
              </div>
            </div>

            {/* What we don't do card */}
            <div className="border border-[#E7E0D6] p-5 bg-[#FAF7F2]">
              <div className="text-[9px] font-semibold text-[#0F1B2A] tracking-[0.2em] uppercase mb-3.5">
                What we don&apos;t do
              </div>
              <ul className="space-y-2">
                {wontDo.map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <span className="text-[#E7E0D6] text-xs shrink-0 leading-snug mt-px">—</span>
                    <span className="text-xs text-[#9AA7B6] leading-snug">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
