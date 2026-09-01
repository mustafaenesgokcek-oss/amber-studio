"use client";
import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", company: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Replace with your form handler (Formspree, Resend, etc.)
    // For now, simulate submission
    setSent(true);
  };

  return (
    <section id="contact" className="py-24 bg-zinc-950">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Let&apos;s <span className="text-amber-400">Talk</span>
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              Book a free 30-minute strategy call. We&apos;ll look at your business together
              and give you honest feedback on where AI can make the biggest difference.
            </p>

            <div className="space-y-5">
              {[
                { icon: "📧", label: "Email", value: "hello@amberstudio.ai" },
                { icon: "📅", label: "Response time", value: "Within 24 hours" },
                { icon: "🌍", label: "We work with", value: "Clients worldwide" },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-4">
                  <span className="text-xl">{item.icon}</span>
                  <div>
                    <div className="text-xs text-gray-600 uppercase tracking-wide">{item.label}</div>
                    <div className="text-gray-300">{item.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Form */}
          <div className="bg-black border border-gray-800 rounded-2xl p-8">
            {sent ? (
              <div className="text-center py-10">
                <div className="text-5xl mb-4">🎉</div>
                <h3 className="text-white text-2xl font-bold mb-2">Message Sent!</h3>
                <p className="text-gray-400">We&apos;ll get back to you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm text-gray-400 mb-1.5">Name *</label>
                    <input
                      required
                      type="text"
                      placeholder="Jane Smith"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full bg-zinc-950 border border-gray-700 focus:border-amber-500 rounded-lg px-4 py-3 text-white placeholder-gray-600 outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-400 mb-1.5">Email *</label>
                    <input
                      required
                      type="email"
                      placeholder="jane@company.com"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full bg-zinc-950 border border-gray-700 focus:border-amber-500 rounded-lg px-4 py-3 text-white placeholder-gray-600 outline-none transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm text-gray-400 mb-1.5">Company</label>
                  <input
                    type="text"
                    placeholder="Your company name"
                    value={form.company}
                    onChange={(e) => setForm({ ...form, company: e.target.value })}
                    className="w-full bg-zinc-950 border border-gray-700 focus:border-amber-500 rounded-lg px-4 py-3 text-white placeholder-gray-600 outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-sm text-gray-400 mb-1.5">What can we help you with? *</label>
                  <textarea
                    required
                    rows={5}
                    placeholder="Tell us about your business and where you're hoping AI can help..."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full bg-zinc-950 border border-gray-700 focus:border-amber-500 rounded-lg px-4 py-3 text-white placeholder-gray-600 outline-none transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-amber-500 hover:bg-amber-400 text-black font-bold py-4 rounded-xl transition-all hover:scale-[1.02] text-lg"
                >
                  Send Message
                </button>

                <p className="text-xs text-gray-600 text-center">
                  No spam. We&apos;ll only reach out about your inquiry.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
