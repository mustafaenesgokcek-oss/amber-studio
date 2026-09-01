"use client";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#F8F5F0]/96 backdrop-blur-sm border-b border-[#DDD5C8]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-8 py-5 flex items-center justify-between">
        <a href="#" className="text-[#1C1714] font-semibold text-base tracking-tight">
          Amber Studio
        </a>

        <div className="hidden md:flex items-center gap-10">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-[#7A6F67] hover:text-[#1C1714] transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className="text-sm text-[#1C1714] border border-[#DDD5C8] hover:border-[#B07628] hover:text-[#B07628] px-5 py-2 transition-colors"
          >
            Book a Review
          </a>
        </div>

        <button
          className="md:hidden text-[#3D3530] hover:text-[#1C1714]"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-[#F8F5F0] border-t border-[#DDD5C8] px-8 py-6 flex flex-col gap-5">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-sm text-[#7A6F67] hover:text-[#1C1714] transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="text-sm text-center text-[#1C1714] border border-[#DDD5C8] py-3 hover:border-[#B07628] hover:text-[#B07628] transition-colors"
          >
            Book a Review
          </a>
        </div>
      )}
    </nav>
  );
}
