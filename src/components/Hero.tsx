export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black pt-20">
      {/* Amber glow background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/4 w-[300px] h-[300px] bg-amber-700/10 rounded-full blur-2xl" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/30 rounded-full px-4 py-1.5 mb-8">
          <span className="w-2 h-2 bg-amber-400 rounded-full animate-pulse" />
          <span className="text-amber-400 text-sm font-medium">AI Consulting & Strategy</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-6">
          Turn AI Into Your{" "}
          <span className="text-amber-400">Competitive Edge</span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto mb-10 leading-relaxed">
          Amber Studio helps businesses cut through the AI hype and implement solutions
          that actually drive growth, efficiency, and real results.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#contact"
            className="bg-amber-500 hover:bg-amber-400 text-black font-bold px-8 py-4 rounded-xl text-lg transition-all hover:scale-105 shadow-lg shadow-amber-500/20"
          >
            Book a Free Strategy Call
          </a>
          <a
            href="#services"
            className="border border-gray-700 hover:border-amber-500 text-gray-300 hover:text-amber-400 font-semibold px-8 py-4 rounded-xl text-lg transition-all"
          >
            See Our Services
          </a>
        </div>

        {/* Stats row */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-3 gap-8 border-t border-gray-800 pt-12">
          {[
            { value: "10+", label: "AI Projects Delivered" },
            { value: "3x", label: "Average ROI for Clients" },
            { value: "100%", label: "Tailored Solutions" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-amber-400 mb-1">{stat.value}</div>
              <div className="text-sm text-gray-500">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
