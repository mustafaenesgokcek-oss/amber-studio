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
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-14 items-start">
          <div>
            <p className="text-amber-600 font-semibold text-sm uppercase tracking-widest mb-3">
              Free Review
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-stone-900 leading-tight mb-5">
              Book a 20-minute AI workflow review
            </h2>
            <p className="text-stone-600 text-lg leading-relaxed mb-10">
              We will look at one workflow and tell you where AI can realistically help,
              where it should not be used, and what a practical next step could look like.
            </p>

            <div className="space-y-6">
              {[
                {
                  label: "Duration",
                  value: "20 minutes",
                  icon: (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  ),
                },
                {
                  label: "Contact",
                  value: "hello@amberstudio.ai",
                  icon: (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  ),
                },
                {
                  label: "Cost",
                  value: "No cost. No commitment.",
                  icon: (
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  ),
                },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-4">
                  <div className="shrink-0 w-8 h-8 bg-amber-100 rounded-lg flex items-center justify-center">
                    <svg
                      className="w-4 h-4 text-amber-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      {item.icon}
                    </svg>
                  </div>
                  <div>
                    <div className="text-xs text-stone-400 uppercase tracking-wide mb-0.5">
                      {item.label}
                    </div>
                    <div className="text-stone-700 font-medium text-sm">{item.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-stone-50 border border-stone-200 rounded-2xl p-8">
            {sent ? (
              <div className="text-center py-8">
                <div className="w-14 h-14 bg-amber-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-7 h-7 text-amber-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-stone-900 text-xl font-bold mb-2">Request received</h3>
                <p className="text-stone-500 text-sm leading-relaxed">
                  We will be in touch within one business day to schedule your review.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-stone-700 mb-1.5">
                      Your name *
                    </label>
                    <input
                      required
                      type="text"
                      placeholder="Jane Smith"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full bg-white border border-stone-200 focus:border-amber-400 focus:ring-2 focus:ring-amber-100 rounded-lg px-4 py-3 text-stone-900 placeholder-stone-400 outline-none transition-all text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-stone-700 mb-1.5">
                      Work email *
                    </label>
                    <input
                      required
                      type="email"
                      placeholder="jane@agency.com"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full bg-white border border-stone-200 focus:border-amber-400 focus:ring-2 focus:ring-amber-100 rounded-lg px-4 py-3 text-stone-900 placeholder-stone-400 outline-none transition-all text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-1.5">
                    Agency name
                  </label>
                  <input
                    type="text"
                    placeholder="Your agency"
                    value={form.agency}
                    onChange={(e) => setForm({ ...form, agency: e.target.value })}
                    className="w-full bg-white border border-stone-200 focus:border-amber-400 focus:ring-2 focus:ring-amber-100 rounded-lg px-4 py-3 text-stone-900 placeholder-stone-400 outline-none transition-all text-sm"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-1.5">
                    What workflow do you want to review?
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Tell us briefly about a workflow your team does regularly — content creation, client reports, lead follow-up, etc."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full bg-white border border-stone-200 focus:border-amber-400 focus:ring-2 focus:ring-amber-100 rounded-lg px-4 py-3 text-stone-900 placeholder-stone-400 outline-none transition-all resize-none text-sm"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-amber-500 hover:bg-amber-600 text-stone-900 font-semibold py-4 rounded-xl transition-colors text-base"
                >
                  Request Your Free Review
                </button>

                <p className="text-xs text-stone-400 text-center">
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
