const tags = [
  "Digital marketing",
  "Analytics",
  "AI workflow strategy",
  "Business systems",
  "Content analytics",
  "Economics & statistics",
];

export default function About() {
  return (
    <section id="founder" className="py-24 bg-amber-50">
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-14 items-start">
          <div>
            <div className="w-16 h-16 rounded-2xl bg-amber-200 flex items-center justify-center mb-6">
              <span className="text-xl font-bold text-amber-800">EG</span>
            </div>
            <p className="text-amber-600 font-semibold text-sm uppercase tracking-widest mb-1">
              Founder
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-1">Enes Gokcek</h2>
            <p className="text-stone-500 text-sm mb-8">
              Digital marketing · Analytics · AI workflows · Business systems
            </p>

            <div className="grid grid-cols-2 gap-2.5">
              {tags.map((tag) => (
                <div
                  key={tag}
                  className="bg-white border border-stone-200 rounded-lg px-3 py-2 text-sm text-stone-600 text-center"
                >
                  {tag}
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="space-y-5 text-stone-600 leading-relaxed">
              <p>
                Amber Studio is led by Enes Gokcek, who works across digital marketing, analytics,
                AI workflow strategy, and business systems.
              </p>
              <p>
                His background combines social media growth, affiliate marketing, content analytics,
                economics, applied statistics, and computer science — a mix that does not come from
                a single career track.
              </p>
              <p>
                That combination is what makes Amber Studio useful for small agencies. We understand
                both sides of the work: the creative pressure to produce strong content, and the
                operational pressure to report, organize, follow up, onboard clients, and keep
                everything consistent.
              </p>
              <p>
                Amber Studio is founder-led. When you work with us, you work directly with Enes —
                not a junior account manager or an outsourced team.
              </p>
            </div>

            <div className="mt-8 p-5 bg-white border border-stone-200 rounded-xl">
              <p className="text-stone-500 text-sm italic leading-relaxed">
                &ldquo;Most AI consulting focuses on large enterprises. Small agencies have different
                constraints — fewer people, tighter timelines, and clients who need results, not
                experiments. That is exactly the gap Amber Studio is built to fill.&rdquo;
              </p>
              <p className="text-stone-400 text-xs mt-3">— Enes Gokcek, Founder</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
