export default function Footer() {
  return (
    <footer className="bg-stone-900 py-14">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 mb-10 pb-10 border-b border-stone-800">
          <div>
            <div className="text-xl font-bold text-white mb-1">
              Amber <span className="text-amber-400">Studio</span>
            </div>
            <p className="text-stone-400 text-sm">Practical AI workflows for small teams.</p>
          </div>

          <div className="flex flex-wrap gap-x-8 gap-y-3 text-sm text-stone-500">
            <a href="#services" className="hover:text-amber-400 transition-colors">
              Services
            </a>
            <a href="#pricing" className="hover:text-amber-400 transition-colors">
              Packages
            </a>
            <a href="#process" className="hover:text-amber-400 transition-colors">
              Process
            </a>
            <a href="#founder" className="hover:text-amber-400 transition-colors">
              About
            </a>
            <a href="#faq" className="hover:text-amber-400 transition-colors">
              FAQ
            </a>
            <a href="#contact" className="hover:text-amber-400 transition-colors">
              Contact
            </a>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-stone-600">
          <p>© {new Date().getFullYear()} Amber AI Studio. All rights reserved.</p>
          <a
            href="mailto:hello@amberstudio.ai"
            className="hover:text-amber-400 transition-colors"
          >
            hello@amberstudio.ai
          </a>
        </div>
      </div>
    </footer>
  );
}
