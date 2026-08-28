"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import PixelButton from "@/components/PixelButton";
import { services } from "@/components/ServiceCard";

const EASE = [0.16, 1, 0.3, 1] as const;

// Short tagline per service for the accordion row
const taglines: Record<string, string> = {
  "Frontend Development": "Pixel-perfect UIs that load fast and feel alive.",
  "Backend Development": "APIs & databases engineered for scale and security.",
  "Full Stack Dev": "End-to-end builds from schema to deployed product.",
  "Graphic Designing": "Brand systems that make first impressions count.",
  "UI/UX Design": "Research-driven design that users actually love.",
  "Motion Graphics": "Animated stories that simplify the complex.",
  "Animations": "Micro-interactions & scroll effects at 60fps.",
};

export default function ServiceAccordion() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="relative bg-white py-16 transition-colors duration-500 dark:bg-[#0a0b16] sm:py-24 lg:py-32">
      <div className="mx-auto max-w-5xl px-5 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: EASE }}
          className="mb-12 max-w-2xl sm:mb-16"
        >
          <span className="inline-block text-xs font-medium uppercase tracking-[0.2em] text-[#4e516a] transition-colors duration-500 dark:text-white/50">
            Capabilities
          </span>
          <h2 className="mt-4 text-[28px] font-medium leading-[1.05] tracking-tight text-[#202342] dark:text-white sm:text-[40px] sm:tracking-[-1.5px] lg:text-[48px]">
            Everything you need, one team.
          </h2>
          <p className="mt-4 text-sm text-[#4e516a] dark:text-white/60 sm:text-base">
            Hover or tap a capability to see what&apos;s inside. Seven
            disciplines, one integrated squad — no hand-offs, no silos.
          </p>
        </motion.div>

        {/* Accordion list */}
        <div className="border-t border-[#202342]/10 dark:border-white/10">
          {services.map((s, i) => {
            const isOpen = open === i;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.6, ease: EASE, delay: i * 0.05 }}
                className="border-b border-[#202342]/10 transition-colors duration-500 dark:border-white/10"
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  onMouseEnter={() => setOpen(i)}
                  className="group flex w-full items-center gap-4 py-6 text-left sm:gap-6 sm:py-8"
                >
                  {/* Number */}
                  <span
                    className="shrink-0 font-mono text-sm font-medium transition-colors duration-300 sm:text-base"
                    style={{ color: isOpen ? s.bg : undefined }}
                  >
                    <span className={isOpen ? "" : "text-[#4e516a] dark:text-white/40"}>
                      {s.num}
                    </span>
                  </span>

                  {/* Title */}
                  <span
                    className={`flex-1 text-xl font-medium tracking-tight transition-all duration-300 sm:text-2xl lg:text-3xl ${
                      isOpen
                        ? "text-[#202342] dark:text-white"
                        : "text-[#4e516a] dark:text-white/50 group-hover:text-[#202342] dark:group-hover:text-white/80"
                    }`}
                  >
                    {s.title}
                  </span>

                  {/* Tagline (visible when closed, on desktop) */}
                  <span
                    className={`hidden max-w-xs flex-1 text-right text-sm text-[#4e516a] transition-opacity duration-300 dark:text-white/40 lg:block ${
                      isOpen ? "opacity-0" : "opacity-100"
                    }`}
                  >
                    {taglines[s.title]}
                  </span>

                  {/* Plus / minus icon */}
                  <span
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-all duration-300"
                    style={{
                      borderColor: isOpen ? s.bg : undefined,
                      backgroundColor: isOpen ? s.bg : undefined,
                      color: isOpen ? "#fff" : undefined,
                    }}
                  >
                    <span
                      className={`${
                        isOpen ? "" : "text-[#4e516a] dark:text-white/50"
                      }`}
                    >
                      <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4">
                        <motion.path
                          d="M12 5v14M5 12h14"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          animate={{ opacity: isOpen ? [1, 0] : [0, 1] }}
                          transition={{ duration: 0.2 }}
                          style={{ transformOrigin: "center" }}
                        />
                      </svg>
                    </span>
                  </span>
                </button>

                {/* Expandable content */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: EASE }}
                      className="overflow-hidden"
                    >
                      <div className="grid grid-cols-1 gap-6 pb-8 sm:grid-cols-[1fr_220px] sm:gap-10 sm:pb-10">
                        {/* Feature list */}
                        <ul className="grid grid-cols-1 gap-2.5 sm:grid-cols-2 sm:gap-3">
                          {s.features.map((f, fi) => (
                            <motion.li
                              key={fi}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{
                                duration: 0.4,
                                ease: EASE,
                                delay: fi * 0.05,
                              }}
                              className="flex items-start gap-2.5"
                            >
                              <span
                                className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full"
                                style={{ backgroundColor: `${s.bg}22`, color: s.bg }}
                              >
                                <svg
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  className="h-3 w-3"
                                >
                                  <path
                                    d="M20 6 9 17l-5-5"
                                    stroke="currentColor"
                                    strokeWidth="3"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                </svg>
                              </span>
                              <span className="text-sm leading-relaxed text-[#202342] dark:text-white/75">
                                {f}
                              </span>
                            </motion.li>
                          ))}
                        </ul>

                        {/* CTA chip */}
                        <div className="flex flex-col gap-3 sm:items-end sm:justify-end">
                          <Link
                            href="/contact"
                            className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full px-5 py-2.5 text-sm font-bold text-white"
                            style={{ backgroundColor: s.bg }}
                          >
                            <span
                              className="absolute inset-0 origin-left scale-x-0 rounded-full transition-transform duration-1000 group-hover:scale-x-100"
                              style={{ backgroundColor: "#202342", transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)" }}
                            />
                            <span className="relative z-10 h-5 overflow-hidden">
                              <span
                                className="block h-5 leading-5 text-white transition-all duration-1000 group-hover:-translate-y-full group-hover:scale-110 group-hover:opacity-0"
                                style={{ transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)" }}
                              >
                                Start a project
                              </span>
                              <span
                                className="absolute left-0 top-full block h-5 origin-bottom scale-90 leading-5 text-white transition-all duration-1000 group-hover:-translate-y-full group-hover:scale-100"
                                style={{ transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)" }}
                              >
                                Start a project
                              </span>
                            </span>
                          </Link>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
