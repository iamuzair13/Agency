"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { siteConfig } from "@/config/site";
import { useTheme } from "@/components/ThemeProvider";

const EASE = "cubic-bezier(0.16, 1, 0.3, 1)";

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="group block h-6 overflow-hidden">
      <span
        className="block h-6 leading-6 text-base font-normal text-white transition-all duration-300"
        style={{ transitionTimingFunction: EASE }}
      >
        <span className="block h-6 leading-6 transition-all duration-300 group-hover:-translate-y-full group-hover:scale-110 group-hover:opacity-0" style={{ transitionTimingFunction: EASE }}>
          {children}
        </span>
        <span className="block h-6 leading-6 transition-all duration-300 group-hover:-translate-y-full" style={{ transitionTimingFunction: EASE }}>
          {children}
        </span>
      </span>
    </Link>
  );
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme, toggle } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -90, scale: 0.92 }}
        animate={{ y: 0, scale: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
        className="fixed left-0 right-0 top-3 z-50 flex justify-center px-3 sm:top-5 sm:px-4"
      >
        <motion.nav
          animate={{
            scale: scrolled ? 0.9 : 1,
            maxWidth: scrolled ? "905px" : "1100px",
            boxShadow: scrolled
              ? "0_8px_30px_rgba(0,0,0,0.12)"
              : "0_0px_0px_rgba(0,0,0,0)",
          }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className={`flex w-full max-w-[1100px] items-center justify-between gap-2 rounded-[50px] bg-[#202342] dark:bg-white/10 backdrop-blur-md sm:gap-4 sm:rounded-[70px] sm:pl-4 ${
            scrolled
              ? "py-1 pl-4 pr-2 sm:py-1 sm:pl-4 sm:pr-1"
              : "py-1 pl-3 pr-1"
          }`}
          style={{ maxWidth: "min(1100px, 100%)" }}
        >
          {/* left: logo */}
          <Link href="/" className="flex min-w-0 shrink-0 items-center gap-2 sm:gap-2.5">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-fuchsia-400 to-purple-600 sm:h-9 sm:w-9">
              <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4 text-white sm:h-5 sm:w-5">
                <path d="M12 5V19M5 12H19" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
              </svg>
            </div>
            <span className="truncate text-sm font-semibold text-white xs:text-base sm:text-lg">
              {siteConfig.agencyName}
            </span>
          </Link>

          {/* center: nav menu (desktop only) */}
          <ul className="hidden flex-1 items-center justify-center gap-8 md:flex">
            <li><NavLink href="/">Home</NavLink></li>
            <li><NavLink href="/services">Solutions</NavLink></li>
            <li><NavLink href="/work">Work</NavLink></li>
            <li><NavLink href="/about">About</NavLink></li>
          </ul>

          {/* right: toggle + CTA + mobile menu button */}
          <div className="flex shrink-0 items-center gap-1.5 sm:gap-2">
            <button
              onClick={toggle}
              aria-label="Toggle dark mode"
              className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/10 text-white transition-colors duration-300 hover:bg-white/20 sm:h-10 sm:w-10"
            >
              <motion.div
                key={theme}
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              >
                {theme === "dark" ? (
                  <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4 sm:h-5 sm:w-5">
                    <circle cx="12" cy="12" r="4.5" stroke="currentColor" strokeWidth="1.8" />
                    <path d="M12 2v2.5M12 19.5V22M2 12h2.5M19.5 12H22M4.9 4.9l1.8 1.8M17.3 17.3l1.8 1.8M19.1 4.9l-1.8 1.8M6.7 17.3l-1.8 1.8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                  </svg>
                ) : (
                  <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4 sm:h-5 sm:w-5">
                    <path d="M21 12.8A9 9 0 1111.2 3a7 7 0 009.8 9.8z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )}
              </motion.div>
            </button>

            {/* Get Started button - arrow only on mobile, full on desktop */}
            <Link
              href="/contact"
              className="group relative inline-flex h-8 items-center gap-1 overflow-hidden rounded-full bg-[#4e516a] dark:bg-white/15 py-1 pl-1 pr-1 sm:min-h-[54px] sm:gap-3 sm:rounded-[27px] sm:pl-[18px] sm:pr-[7px]"
            >
              <span className="relative hidden h-5 overflow-hidden sm:block">
                <span className="block h-5 leading-5 text-sm font-medium text-white transition-all duration-300 group-hover:-translate-y-full group-hover:scale-110 group-hover:opacity-0" style={{ transitionTimingFunction: EASE }}>
                  Get Started
                </span>
                <span className="absolute left-0 top-full block h-5 origin-bottom scale-90 leading-5 text-sm font-medium text-white transition-all duration-300 group-hover:-translate-y-full group-hover:scale-100" style={{ transitionTimingFunction: EASE }}>
                  Get Started
                </span>
              </span>
              <span className="relative flex h-6 w-6 items-center justify-center overflow-hidden rounded-full bg-white dark:bg-[#202342] sm:h-10 sm:w-10">
                <span className="absolute inset-0 flex items-center justify-center transition-all duration-300 group-hover:translate-x-full" style={{ transitionTimingFunction: EASE }}>
                  <Image src="/images/arrow-up-right-white.svg" alt="" width={16} height={16} className="h-3.5 w-3.5 dark:invert sm:h-4 sm:w-4" />
                </span>
                <span className="absolute inset-0 flex -translate-x-full items-center justify-center transition-all duration-300 group-hover:translate-x-0" style={{ transitionTimingFunction: EASE }}>
                  <Image src="/images/arrow-up-right-white.svg" alt="" width={16} height={16} className="h-3.5 w-3.5 dark:invert sm:h-4 sm:w-4" />
                </span>
              </span>
            </Link>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setMenuOpen((o) => !o)}
              aria-label="Toggle menu"
              className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/10 text-white transition-colors duration-300 hover:bg-white/20 sm:h-9 sm:w-9 md:hidden"
            >
              <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
                {menuOpen ? (
                  <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                ) : (
                  <path d="M4 8h16M4 16h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                )}
              </svg>
            </button>
          </div>
        </motion.nav>
      </motion.header>

      {/* Mobile dropdown menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="fixed left-3 right-3 top-[60px] z-40 rounded-3xl bg-[#202342] p-5 shadow-2xl backdrop-blur-md dark:bg-[#1a1c35] sm:top-[68px] sm:p-6 md:hidden"
          >
            <ul className="flex flex-col gap-5">
              {[
                { href: "/", label: "Home" },
                { href: "/services", label: "Solutions" },
                { href: "/work", label: "Work" },
                { href: "/about", label: "About" },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className="block text-lg font-medium text-white transition-colors hover:text-[#8b94ff]"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
