"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import PixelButton from "@/components/PixelButton";
import { siteConfig } from "@/config/site";

const EASE = [0.16, 1, 0.3, 1] as const;

const mainLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/work", label: "Works" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
];

const socials = [
  { href: "https://twitter.com", label: "Twitter" },
  { href: "https://linkedin.com", label: "LinkedIn" },
  { href: "https://instagram.com", label: "Instagram" },
  { href: "https://dribbble.com", label: "Dribbble" },
];

export default function Footer() {
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    setSubscribed(true);
  };

  return (
    <footer className="relative overflow-hidden bg-[#f5f6fa] pt-20 pb-8 transition-colors duration-500 dark:bg-[#0a0b16] sm:pt-28 lg:pt-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* CTA banner */}
        <motion.div
          initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: EASE }}
          className="text-center"
        >
          <span className="inline-block text-xs font-medium uppercase tracking-[0.2em] text-[#4e516a] transition-colors duration-500 dark:text-white/50">
            Start building now
          </span>
          <h2 className="mx-auto mt-4 max-w-3xl text-[2rem] font-medium leading-[1.05] tracking-tight text-[#202342] transition-colors duration-500 dark:text-white sm:text-[2.75rem] md:text-[3.5rem] md:leading-[1.02]">
            Site into something exceptional design
          </h2>
          <p className="mx-auto mt-4 max-w-md text-sm text-[#4e516a] transition-colors duration-500 dark:text-white/50 sm:text-base">
            Ready to see real results? Let&apos;s build your brand into
            something unforgettable.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
            <PixelButton href="/contact">Book a call</PixelButton>
            <PixelButton href="/contact" variant="secondary" showArrow={false}>
              Let&apos;s Contact
            </PixelButton>
          </div>
        </motion.div>

        {/* Divider */}
        <div className="mt-16 h-px w-full bg-gradient-to-r from-transparent via-[#202342]/10 to-transparent transition-colors duration-500 dark:via-white/10 sm:mt-24 lg:mt-32" />

        {/* Footer link grid */}
        <div className="mt-12 grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-4 lg:gap-8">
          {/* Office */}
          <div className="col-span-2 sm:col-span-1">
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#4e516a] transition-colors duration-500 dark:text-white/40">
              Office
            </h4>
            <p className="mt-4 text-sm leading-relaxed text-[#202342] transition-colors duration-500 dark:text-white/70">
              11 Garden, Town Hills
              <br />
              Dubai, UAE 13690
            </p>
          </div>

          {/* Email */}
          <div className="col-span-2 sm:col-span-1">
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#4e516a] transition-colors duration-500 dark:text-white/40">
              Email
            </h4>
            <a
              href={`mailto:${siteConfig.email}`}
              className="mt-4 block text-sm text-[#202342] transition-colors duration-300 hover:text-[#4555fd] dark:text-white/70 dark:hover:text-[#6b78ff]"
            >
              {siteConfig.email}
            </a>
          </div>

          {/* Main */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#4e516a] transition-colors duration-500 dark:text-white/40">
              Main
            </h4>
            <ul className="mt-4 space-y-2.5">
              {mainLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#202342] transition-colors duration-300 hover:text-[#4555fd] dark:text-white/70 dark:hover:text-[#6b78ff]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Socials */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#4e516a] transition-colors duration-500 dark:text-white/40">
              Socials
            </h4>
            <ul className="mt-4 space-y-2.5">
              {socials.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-[#202342] transition-colors duration-300 hover:text-[#4555fd] dark:text-white/70 dark:hover:text-[#6b78ff]"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="mt-12 border-t border-[#202342]/10 pt-8 transition-colors duration-500 dark:border-white/10 sm:mt-16">
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
            <div>
              <h4 className="text-sm font-medium text-[#202342] transition-colors duration-500 dark:text-white">
                Newsletter for updates
              </h4>
              <p className="mt-1 text-xs text-[#4e516a] transition-colors duration-500 dark:text-white/50">
                Subscribe to get more updates
              </p>
            </div>
            {subscribed ? (
              <div className="flex items-center gap-3 rounded-full bg-green-500/10 px-5 py-3">
                <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5 text-green-500">
                  <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className="text-sm font-medium text-green-600 dark:text-green-400">
                  Thanks for subscribing!
                </span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex w-full max-w-md items-center gap-2">
                <input
                  type="email"
                  required
                  placeholder="Enter your email"
                  className="h-11 w-full rounded-full border border-[#202342]/15 bg-white px-5 text-sm text-[#202342] placeholder:text-[#4e516a]/50 outline-none transition-colors duration-300 focus:border-[#4555fd] dark:border-white/15 dark:bg-white/5 dark:text-white dark:placeholder:text-white/40 dark:focus:border-[#6b78ff]"
                />
                <button
                  type="submit"
                  className="group relative h-11 shrink-0 overflow-hidden rounded-full bg-[#202342] px-5 text-sm font-medium text-white dark:bg-white dark:text-[#202342]"
                >
                  <span
                    className="absolute inset-0 origin-left scale-x-0 rounded-full bg-[#4555fd] transition-transform duration-1000 group-hover:scale-x-100"
                    style={{ transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)" }}
                  />
                  <span className="relative z-10 h-5 overflow-hidden">
                    <span
                      className="block h-5 leading-5 text-white dark:text-[#202342] transition-all duration-1000 group-hover:-translate-y-full group-hover:scale-110 group-hover:opacity-0"
                      style={{ transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)" }}
                    >
                      Subscribe
                    </span>
                    <span
                      className="absolute left-0 top-full block h-5 origin-bottom scale-90 leading-5 text-white dark:text-[#202342] transition-all duration-1000 group-hover:-translate-y-full group-hover:scale-100"
                      style={{ transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)" }}
                    >
                      Subscribe
                    </span>
                  </span>
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-[#202342]/10 py-8 transition-colors duration-500 dark:border-white/10 sm:flex-row">
          <div className="flex items-center gap-2">
            <div className="flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-fuchsia-400 to-purple-600">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                className="h-3.5 w-3.5 text-white"
              >
                <path
                  d="M12 5V19M5 12H19"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
              </svg>
            </div>
            <span className="text-sm font-semibold text-[#202342] transition-colors duration-500 dark:text-white">
              {siteConfig.agencyName}
            </span>
          </div>
          <p className="text-xs text-[#4e516a] transition-colors duration-500 dark:text-white/40">
            &copy; {new Date().getFullYear()} {siteConfig.agencyName}. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
