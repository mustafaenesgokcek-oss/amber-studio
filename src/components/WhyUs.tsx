const problems = [
  {
    title: "Your team uses AI — but everyone does it differently",
    description:
      "Some people use ChatGPT daily. Others have not touched it. There is no shared approach, no guidelines, and the quality of output depends on who is at their desk that day.",
  },
  {
    title: "Time-consuming work is not getting any faster",
    description:
      "Writing reports, onboarding clients, following up on leads — these tasks still eat hours, even when AI could realistically handle parts of them with the right setup.",
  },
  {
    title: "You are not sure what AI is safe for client work",
    description:
      "What goes in a prompt? What should stay out? Without clear guidelines, your team is making judgment calls every time — and that is both a quality risk and a brand risk.",
  },
  {
    title: "Nothing is documented or repeatable",
    description:
      "If the person who figured something out leaves, the knowledge goes with them. There is no system anyone else can follow without starting over.",
  },
];

export default function Problem() {
  return (
    <section className="py-24 bg-[#FAF7F2]">
      <div className="max-w-6xl mx-auto px-8">
        <div className="max-w-2xl mb-16">
          <p className="text-[10px] tracking-[0.25em] text-[#FF9D08] uppercase font-medium mb-5">
            Sound familiar?
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-[#0F1B2A] leading-tight mb-6 tracking-tight">
            Most small agencies are using AI. But not systematically.
          </h2>
          <p className="text-[#0F1B2A]/60 text-lg leading-relaxed">
            Random AI usage is better than nothing. But without structure, it creates
            new problems: inconsistency, risk, and a team that cannot rely on it.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-x-16">
          {problems.map((p) => (
            <div key={p.title} className="border-t border-[#E7E0D6] py-7">
              <h3 className="font-semibold text-[#0F1B2A] mb-2.5 leading-snug text-sm">
                {p.title}
              </h3>
              <p className="text-sm text-[#9AA7B6] leading-relaxed">{p.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
