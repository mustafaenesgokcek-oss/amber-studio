const problems = [
  {
    title: "Your team uses AI — but everyone does it differently",
    description:
      "Some people use ChatGPT daily. Others have not touched it. There is no shared approach, no guidelines, and results are inconsistent from person to person.",
  },
  {
    title: "Time-consuming work is not getting any faster",
    description:
      "Writing reports, onboarding clients, following up on leads — these tasks still eat hours, even when AI could realistically handle parts of them.",
  },
  {
    title: "You are not sure what AI is safe for client work",
    description:
      "What goes in a prompt? What should stay out? Without clear guidelines, your team is guessing — and that is a brand and confidentiality risk.",
  },
  {
    title: "Nothing is documented or repeatable",
    description:
      "If the person who figured something out leaves, the knowledge goes with them. There is no system anyone else can follow without asking.",
  },
];

export default function Problem() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="text-amber-600 font-semibold text-sm uppercase tracking-widest mb-3">
            Sound familiar?
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-stone-900 leading-tight mb-5">
            Most small agencies are using AI.
            <br />
            But not systematically.
          </h2>
          <p className="text-stone-500 text-lg max-w-2xl mx-auto">
            Random AI usage is better than nothing. But without structure, it creates new
            problems: inconsistency, risk, and a team that cannot rely on it.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {problems.map((p) => (
            <div
              key={p.title}
              className="flex gap-4 bg-stone-50 border border-stone-100 rounded-2xl p-6"
            >
              <div className="shrink-0 mt-0.5 w-5 h-5 rounded-full bg-red-50 border border-red-100 flex items-center justify-center">
                <svg
                  className="w-3 h-3 text-red-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-stone-900 mb-1.5">{p.title}</h3>
                <p className="text-stone-500 text-sm leading-relaxed">{p.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
