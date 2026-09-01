export default function Hero() {
  return (
    <section className="relative bg-amber-50 pt-28 pb-24 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-amber-100/60 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-4xl mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-2 bg-white border border-amber-200 rounded-full px-4 py-1.5 mb-8 shadow-sm">
          <span className="w-1.5 h-1.5 bg-amber-500 rounded-full" />
          <span className="text-amber-700 text-sm font-medium">
            Practical AI workflows for small teams
          </span>
        </div>

        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-stone-900 leading-[1.1] tracking-tight mb-6">
          Your agency is already
          <br />
          using AI.{" "}
          <span className="text-amber-500">
            Now make
            <br />
            it work.
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-stone-600 max-w-2xl mx-auto mb-10 leading-relaxed">
          Amber Studio helps small agencies turn scattered AI usage into clear, repeatable
          workflows across content, reporting, client intake, follow-up, and operations.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#contact"
            className="bg-amber-500 hover:bg-amber-600 text-stone-900 font-semibold px-8 py-4 rounded-xl text-lg transition-colors shadow-sm"
          >
            Book a 20-Min AI Workflow Review
          </a>
          <a
            href="#services"
            className="bg-white border border-stone-200 hover:border-amber-300 text-stone-700 hover:text-amber-700 font-semibold px-8 py-4 rounded-xl text-lg transition-colors shadow-sm"
          >
            See What We Deliver
          </a>
        </div>

        <p className="mt-5 text-sm text-stone-400">
          No commitment. We&apos;ll tell you honestly where AI can help — and where it probably should not.
        </p>
      </div>
    </section>
  );
}
