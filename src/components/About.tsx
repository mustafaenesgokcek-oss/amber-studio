export default function About() {
  return (
    <section id="about" className="py-24 bg-zinc-950">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              About <span className="text-amber-400">Amber Studio</span>
            </h2>
            <div className="space-y-5 text-gray-400 text-lg leading-relaxed">
              <p>
                Amber Studio was founded with one belief: most businesses are leaving enormous
                value on the table because AI feels complicated, overhyped, or hard to trust.
              </p>
              <p>
                We cut through the noise. We don&apos;t sell software — we partner with companies
                to understand their specific context and build AI systems that actually work in
                the real world.
              </p>
              <p>
                Our approach is hands-on, practical, and results-focused. Every project ends
                with your team empowered, not dependent.
              </p>
            </div>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="bg-amber-500 hover:bg-amber-400 text-black font-bold px-6 py-3 rounded-xl transition-all text-center"
              >
                Work With Us
              </a>
            </div>
          </div>

          {/* Right: Values */}
          <div className="grid grid-cols-2 gap-4">
            {[
              { icon: "🎯", title: "Results First", desc: "Every decision is tied to measurable business outcomes." },
              { icon: "🤝", title: "True Partnership", desc: "We work with you, not just for you." },
              { icon: "🔍", title: "No Hype", desc: "Honest about what AI can and can't do for your business." },
              { icon: "⚡", title: "Move Fast", desc: "From idea to working prototype in days, not months." },
            ].map((v) => (
              <div
                key={v.title}
                className="bg-black border border-gray-800 rounded-2xl p-5"
              >
                <div className="text-2xl mb-3">{v.icon}</div>
                <h4 className="text-white font-semibold mb-1">{v.title}</h4>
                <p className="text-gray-500 text-sm">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
