"use client";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: "Services", href: "#services" },
    { label: "Packages", href: "#pricing" },
    { label: "Process", href: "#process" },
    { label: "FAQ", href: "#faq" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-stone-100"
          : "bg-amber-50/80 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="flex items-center gap-1.5">
          <span className="text-xl font-bold text-stone-900 tracking-tight">
            Amber <span className="text-amber-500">Studio</span>
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-stone-600 hover:text-amber-600 transition-colors font-medium"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className="text-sm bg-amber-500 hover:bg-amber-600 text-stone-900 font-semibold px-5 py-2.5 rounded-lg transition-colors"
          >
            Book a Review
          </a>
        </div>

        <button
          className="md:hidden text-stone-700 hover:text-amber-500 transition-colors"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-white border-t border-stone-100 px-6 py-5 flex flex-col gap-4 shadow-lg">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-stone-600 hover:text-amber-600 transition-colors font-medium"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="bg-amber-500 hover:bg-amber-600 text-stone-900 font-semibold px-4 py-3 rounded-lg text-center transition-colors"
          >
            Book a Review
          </a>
        </div>
      )}
    </nav>
  );
}
