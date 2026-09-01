export default function About() {
  return (
    <section id="founder" className="py-24 bg-[#F7F0E5]">
      <div className="max-w-6xl mx-auto px-8">
        <div className="grid lg:grid-cols-2 gap-20 items-start">

          <div>
            <p className="text-[10px] tracking-[0.25em] text-[#FF9D08] uppercase font-medium mb-5">
              Founder
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0F1B2A] mb-1 leading-tight tracking-tight">
              Enes Gokcek
            </h2>
            <p className="text-sm text-[#9AA7B6] mb-8">
              Digital marketing &middot; Analytics &middot; AI workflow strategy &middot; Business systems
            </p>

            <div className="space-y-5 text-[#0F1B2A]/65 text-base leading-relaxed">
              <p>
                Amber Studio is led by Enes Gokcek, who works across digital marketing,
                analytics, AI workflow strategy, and business systems.
              </p>
              <p>
                His background combines social media growth, affiliate marketing, content
                analytics, economics, applied statistics, and computer science — a mix
                that does not come from a single career track.
              </p>
              <p>
                That combination is what makes Amber Studio useful for small agencies.
                We understand both sides of the work: the creative pressure to produce
                strong content, and the operational pressure to report, organize, follow
                up, onboard clients, and keep everything consistent.
              </p>
              <p>
                Amber Studio is founder-led. When you work with us, you work directly
                with Enes — not a junior account manager or an outsourced team.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-8">
            <blockquote className="border-l-2 border-[#FF9D08] pl-6">
              <p className="text-[#0F1B2A]/70 text-base leading-relaxed italic">
                &ldquo;Most AI consulting focuses on large enterprises. Small agencies have
                different constraints — fewer people, tighter timelines, and clients who
                need results, not experiments. That is exactly the gap Amber Studio is
                built to fill.&rdquo;
              </p>
              <p className="text-xs text-[#9AA7B6] mt-4">— Enes Gokcek, Founder</p>
            </blockquote>

            <div className="border-t border-[#E7E0D6] pt-8">
              <p className="text-[9px] text-[#9AA7B6] uppercase tracking-[0.2em] mb-4">
                Background
              </p>
              <div className="flex flex-wrap gap-2">
                {[
                  "Digital marketing",
                  "Analytics",
                  "AI workflow strategy",
                  "Business systems",
                  "Content analytics",
                  "Economics & statistics",
                  "Computer science",
                  "Affiliate marketing",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="text-xs text-[#9AA7B6] border border-[#E7E0D6] px-3 py-1"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
