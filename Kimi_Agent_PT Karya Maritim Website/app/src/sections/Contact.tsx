import { useState } from "react";
import type { FormEvent } from "react";
import { ArrowRight, CheckIcon } from "@/components/icons";

export function Contact() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="contact" className="relative">
      {/* Curved transition into the contact band */}
      <svg
        viewBox="0 0 1440 90"
        preserveAspectRatio="none"
        aria-hidden="true"
        className="block w-full h-[60px] md:h-[90px] text-ink"
      >
        <path
          fill="currentColor"
          d="M0,90 C360,0 1080,0 1440,90 L1440,90 L0,90 Z"
        />
      </svg>

      <div className="bg-ink text-white pb-24 pt-6">
        <div className="shell grid lg:grid-cols-2 gap-14 items-start">
          <div>
            <p className="eyebrow reveal !text-aqua">Get in touch</p>
            <h2 className="reveal reveal-d1 mt-4 font-display font-bold text-4xl sm:text-5xl leading-tight">
              Tell us what you need.
              <br />
              We will quote by tomorrow.
            </h2>
            <p className="reveal reveal-d2 mt-6 text-white/60 max-w-md">
              One message reaches both our trading desk and our processing
              plant. Expect a real reply from a real person, with real prices.
            </p>
            <dl className="reveal reveal-d3 mt-10 space-y-5 text-white/80">
              <div>
                <dt className="text-xs font-bold uppercase tracking-[0.18em] text-white/40">Trading desk</dt>
                <dd className="mt-1 font-semibold">sales@karyamaritim.co.id</dd>
              </div>
              <div>
                <dt className="text-xs font-bold uppercase tracking-[0.18em] text-white/40">Phone and WhatsApp</dt>
                <dd className="mt-1 font-semibold">+62 812 3456 7890</dd>
              </div>
              <div>
                <dt className="text-xs font-bold uppercase tracking-[0.18em] text-white/40">Processing plant</dt>
                <dd className="mt-1 font-semibold">
                  Jalan Pelabuhan Perikanan No. 8, Surabaya, East Java
                </dd>
              </div>
            </dl>
          </div>

          <div className="reveal reveal-d1 bg-white text-ink rounded-[1.75rem] p-7 sm:p-9 shadow-soft">
            {sent ? (
              <div className="py-16 text-center">
                <CheckIcon className="w-14 h-14 text-aqua mx-auto" />
                <h3 className="mt-6 font-display font-bold text-2xl">Message received.</h3>
                <p className="mt-3 text-ink/60 max-w-xs mx-auto">
                  Our trading desk will reply within one business day with
                  availability and pricing.
                </p>
                <button
                  type="button"
                  onClick={() => setSent(false)}
                  className="btn-ghost mt-8 text-sm !py-2.5"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="space-y-5" noValidate={false}>
                <div className="grid sm:grid-cols-2 gap-5">
                  <label className="block">
                    <span className="text-sm font-bold text-ink/70">Your name</span>
                    <input
                      required
                      type="text"
                      name="name"
                      autoComplete="name"
                      placeholder="Ayu Paramita"
                      className="mt-2 w-full rounded-xl border border-ink/15 bg-foam px-4 py-3 text-ink placeholder:text-ink/35 focus:border-aqua outline-none transition-colors"
                    />
                  </label>
                  <label className="block">
                    <span className="text-sm font-bold text-ink/70">Company</span>
                    <input
                      type="text"
                      name="company"
                      autoComplete="organization"
                      placeholder="Warung Laut Makmur"
                      className="mt-2 w-full rounded-xl border border-ink/15 bg-foam px-4 py-3 text-ink placeholder:text-ink/35 focus:border-aqua outline-none transition-colors"
                    />
                  </label>
                </div>
                <label className="block">
                  <span className="text-sm font-bold text-ink/70">Email</span>
                  <input
                    required
                    type="email"
                    name="email"
                    autoComplete="email"
                    placeholder="you@company.com"
                    className="mt-2 w-full rounded-xl border border-ink/15 bg-foam px-4 py-3 text-ink placeholder:text-ink/35 focus:border-aqua outline-none transition-colors"
                  />
                </label>
                <label className="block">
                  <span className="text-sm font-bold text-ink/70">I am interested in</span>
                  <select
                    name="interest"
                    defaultValue="Fresh fish"
                    className="mt-2 w-full rounded-xl border border-ink/15 bg-foam px-4 py-3 text-ink focus:border-aqua outline-none transition-colors cursor-pointer"
                  >
                    <option>Fresh fish</option>
                    <option>Frozen products</option>
                    <option>Export partnership</option>
                    <option>Custom processing</option>
                  </select>
                </label>
                <label className="block">
                  <span className="text-sm font-bold text-ink/70">Message</span>
                  <textarea
                    required
                    name="message"
                    rows={4}
                    placeholder="Volumes, sizes, delivery city, anything that helps us quote fast."
                    className="mt-2 w-full rounded-xl border border-ink/15 bg-foam px-4 py-3 text-ink placeholder:text-ink/35 focus:border-aqua outline-none transition-colors resize-y"
                  />
                </label>
                <button type="submit" className="btn-primary w-full">
                  Request a quote
                  <ArrowRight />
                </button>
                <p className="text-xs text-ink/45 text-center">
                  This demo form stores nothing. It simply confirms your message
                  on screen.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
