export default function Footer() {
  return (
    <footer className="bg-[#1C1714] py-16">
      <div className="max-w-6xl mx-auto px-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-10 mb-12 pb-12 border-b border-[#3D3530]">
          <div>
            <div className="text-base font-semibold text-[#F8F5F0] mb-1">Amber Studio</div>
            <p className="text-sm text-[#7A6F67]">Practical AI workflows for small teams.</p>
          </div>

          <div className="flex flex-wrap gap-x-10 gap-y-3 text-sm text-[#7A6F67]">
            <a href="#services" className="hover:text-[#F8F5F0] transition-colors">Services</a>
            <a href="#pricing" className="hover:text-[#F8F5F0] transition-colors">Packages</a>
            <a href="#process" className="hover:text-[#F8F5F0] transition-colors">Process</a>
            <a href="#founder" className="hover:text-[#F8F5F0] transition-colors">About</a>
            <a href="#faq" className="hover:text-[#F8F5F0] transition-colors">FAQ</a>
            <a href="#contact" className="hover:text-[#F8F5F0] transition-colors">Contact</a>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p className="text-xs text-[#7A6F67]">
            © {new Date().getFullYear()} Amber AI Studio. All rights reserved.
          </p>
          <a
            href="mailto:hello@amberstudio.ai"
            className="text-xs text-[#7A6F67] hover:text-[#F8F5F0] transition-colors"
          >
            hello@amberstudio.ai
          </a>
        </div>
      </div>
    </footer>
  );
}
