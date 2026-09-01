"use client";

export default function Footer() {
  return (
    <footer className="bg-[#0A1520] py-14">
      <div className="max-w-6xl mx-auto px-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-10 mb-10 pb-10 border-b border-[#1A2D40]">

          {/* Logo */}
          <div className="flex items-center gap-2.5">
            <img
              src="/logo.png"
              alt=""
              className="h-7 w-7 object-contain"
              onError={(e) => {
                (e.target as HTMLImageElement).style.display = "none";
              }}
            />
            <div className="leading-none">
              <div className="text-[#F7F0E5] text-sm font-semibold tracking-[0.14em] uppercase">
                Amber
              </div>
              <div className="relative mt-[3px]">
                <div className="h-px bg-[#FF9D08] mb-[4px]" />
                <div className="text-[#9AA7B6] text-[8px] font-medium tracking-[0.38em] uppercase leading-none">
                  Studio
                </div>
              </div>
            </div>
          </div>

          {/* Nav links */}
          <div className="flex flex-wrap gap-x-10 gap-y-3 text-sm text-[#9AA7B6]">
            <a href="#services" className="hover:text-[#F7F0E5] transition-colors">Services</a>
            <a href="#pricing" className="hover:text-[#F7F0E5] transition-colors">Packages</a>
            <a href="#process" className="hover:text-[#F7F0E5] transition-colors">Process</a>
            <a href="#founder" className="hover:text-[#F7F0E5] transition-colors">About</a>
            <a href="#faq" className="hover:text-[#F7F0E5] transition-colors">FAQ</a>
            <a href="#contact" className="hover:text-[#F7F0E5] transition-colors">Contact</a>
          </div>

        </div>

        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p className="text-xs text-[#9AA7B6]/60">
            &copy; {new Date().getFullYear()} Amber Studio. All rights reserved.
          </p>
          <a
            href="mailto:hello@amberstudio.ai"
            className="text-xs text-[#9AA7B6]/60 hover:text-[#F7F0E5] transition-colors"
          >
            hello@amberstudio.ai
          </a>
        </div>
      </div>
    </footer>
  );
}
