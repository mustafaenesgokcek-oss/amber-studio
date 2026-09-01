"use client";
import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", agency: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="contact" className="py-24 bg-[#0F1B2A]">
      <div className="max-w-6xl mx-auto px-8">
        <div className="grid lg:grid-cols-2 gap-20 items-start">

          {/* Left */}
          <div>
            <p className="text-[10px] tracking-[0.25em] text-[#FF9D08] uppercase font-medium mb-5">
              Free Review
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-[#F7F0E5] leading-tight tracking-tight mb-6">
              Book a 20-minute AI workflow review
            </h2>
            <p className="text-[#9AA7B6] text-lg leading-relaxed mb-10">
              We will look at one workflow and tell you where AI can realistically help,
              where it should not be used, and what a practical next step could look like.
            </p>

            <div className="border-t border-[#1A2D40] divide-y divide-[#1A2D40]">
              {[
                { label: "Duration", value: "20 minutes" },
                { label: "Cost", value: "No cost. No commitment." },
                { label: "Contact", value: "hello@amberstudio.ai" },
                { label: "Response time", value: "Within one business day" },
              ].map((item) => (
                <div key={item.label} className="py-4 flex gap-8">
                  <span className="text-xs text-[#9AA7B6] w-24 shrink-0 pt-0.5">
                    {item.label}
                  </span>
                  <span className="text-sm text-[#F7F0E5]">{item.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: form */}
          <div>
            {sent ? (
              <div className="border border-[#1A2D40] bg-[#162435] p-10">
                <h3 className="text-xl font-semibold text-[#F7F0E5] mb-3">
                  Request received
                </h3>
                <p className="text-sm text-[#9AA7B6] leading-relaxed">
                  We will be in touch within one business day to schedule your review.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-[9px] text-[#9AA7B6] mb-2 uppercase tracking-[0.18em]">
                      Your name *
                    </label>
                    <input
                      required
                      type="text"
                      placeholder="Jane Smith"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full bg-[#162435] border border-[#1A2D40] focus:border-[#FF9D08] px-4 py-3 text-[#F7F0E5] placeholder-[#9AA7B6]/50 outline-none transition-colors text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-[9px] text-[#9AA7B6] mb-2 uppercase tracking-[0.18em]">
                      Work email *
                    </label>
                    <input
                      required
                      type="email"
                      placeholder="jane@agency.com"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full bg-[#162435] border border-[#1A2D40] focus:border-[#FF9D08] px-4 py-3 text-[#F7F0E5] placeholder-[#9AA7B6]/50 outline-none transition-colors text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[9px] text-[#9AA7B6] mb-2 uppercase tracking-[0.18em]">
                    Agency name
                  </label>
                  <input
                    type="text"
                    placeholder="Your agency"
                    value={form.agency}
                    onChange={(e) => setForm({ ...form, agency: e.target.value })}
                    className="w-full bg-[#162435] border border-[#1A2D40] focus:border-[#FF9D08] px-4 py-3 text-[#F7F0E5] placeholder-[#9AA7B6]/50 outline-none transition-colors text-sm"
                  />
                </div>

                <div>
                  <label className="block text-[9px] text-[#9AA7B6] mb-2 uppercase tracking-[0.18em]">
                    What workflow do you want to review?
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Tell us briefly about a workflow your team does regularly — content creation, client reports, lead follow-up, etc."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full bg-[#162435] border border-[#1A2D40] focus:border-[#FF9D08] px-4 py-3 text-[#F7F0E5] placeholder-[#9AA7B6]/50 outline-none transition-colors resize-none text-sm"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#FF9D08] hover:bg-[#C87118] text-[#0F1B2A] font-semibold py-4 transition-colors text-sm tracking-wide"
                >
                  Request Your Free Review
                </button>

                <p className="text-xs text-[#9AA7B6]/70">
                  We respond within one business day. No sales calls, no spam.
                </p>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
