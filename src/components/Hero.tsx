export default function Hero() {
  return (
    <section className="bg-[#F8F5F0] pt-36 pb-28">
      <div className="max-w-6xl mx-auto px-8">
        <p className="text-sm text-[#B07628] mb-10 tracking-wide">
          Practical AI workflows for small teams
        </p>

        <h1 className="text-5xl md:text-6xl lg:text-[64px] font-bold text-[#1C1714] leading-[1.07] tracking-tight mb-8 max-w-3xl">
          Your agency is already using AI. Now make it work.
        </h1>

        <p className="text-lg md:text-xl text-[#3D3530] max-w-lg leading-relaxed mb-12">
          Amber Studio helps small agencies turn scattered AI usage into clear, repeatable
          workflows — across content, reporting, client intake, follow-up, and operations.
        </p>

        <div className="flex flex-col sm:flex-row items-start gap-5">
          <a
            href="#contact"
            className="bg-[#1C1714] hover:bg-[#2D2520] text-[#F8F5F0] text-sm font-medium px-7 py-3.5 transition-colors"
          >
            Book a 20-Minute Workflow Review
          </a>
          <a
            href="#services"
            className="text-sm text-[#7A6F67] hover:text-[#1C1714] underline underline-offset-4 decoration-[#DDD5C8] hover:decoration-[#B07628] transition-colors py-3.5"
          >
            See what we deliver
          </a>
        </div>

        <p className="mt-8 text-xs text-[#9B8C82]">
          No commitment. We will tell you honestly where AI can help — and where it probably should not.
        </p>

        <div className="mt-20 pt-8 border-t border-[#DDD5C8] grid grid-cols-2 md:grid-cols-3 gap-8 max-w-lg">
          {[
            { value: "Founder-led", label: "You work directly with Enes, not a junior team." },
            { value: "Written deliverables", label: "Every engagement produces something your team can actually use." },
            { value: "Honest scope", label: "We tell you when AI is not the right answer." },
          ].map((s) => (
            <div key={s.value}>
              <div className="text-sm font-semibold text-[#1C1714] mb-1">{s.value}</div>
              <div className="text-xs text-[#9B8C82] leading-snug">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
