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
    { label: "How It Works", href: "#process" },
    { label: "Packages", href: "#pricing" },
    { label: "FAQ", href: "#faq" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#F7F0E5]/96 backdrop-blur-sm border-b border-[#E7E0D6]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-8 py-4 flex items-center justify-between">

        {/* Logo mark */}
        <a href="#" className="flex items-center gap-2.5 shrink-0">
          <img
            src="/logo.png"
            alt=""
            className="h-8 w-8 object-contain"
            onError={(e) => {
              (e.target as HTMLImageElement).style.display = "none";
            }}
          />
          <div className="leading-none select-none">
            <div className="text-[#0F1B2A] text-sm font-semibold tracking-[0.14em] uppercase">
              Amber
            </div>
            <div className="relative mt-[3px]">
              <div className="h-px bg-[#FF9D08] mb-[4px]" />
              <div className="text-[#9AA7B6] text-[8px] font-medium tracking-[0.38em] uppercase leading-none">
                Studio
              </div>
            </div>
          </div>
        </a>

        {/* Desktop nav links */}
        <div className="hidden md:flex items-center gap-9">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-[#9AA7B6] hover:text-[#0F1B2A] transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>

        {/* Desktop CTAs */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="#pricing"
            className="text-sm text-[#9AA7B6] hover:text-[#0F1B2A] transition-colors"
          >
            See Pricing
          </a>
          <a
            href="#contact"
            className="text-sm bg-[#0F1B2A] hover:bg-[#162435] text-[#F7F0E5] px-5 py-2.5 transition-colors tracking-wide"
          >
            Get in Touch
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-[#0F1B2A]"
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

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-[#F7F0E5] border-t border-[#E7E0D6] px-8 py-6 flex flex-col gap-5">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-sm text-[#9AA7B6] hover:text-[#0F1B2A] transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="text-sm text-center bg-[#0F1B2A] text-[#F7F0E5] py-3.5 transition-colors tracking-wide"
          >
            Get in Touch
          </a>
        </div>
      )}
    </nav>
  );
}
