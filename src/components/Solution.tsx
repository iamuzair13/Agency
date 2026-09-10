"use client";

import { motion } from "framer-motion";
import PixelButton from "@/components/PixelButton";

const EASE = [0.16, 1, 0.3, 1] as const;

const solutions = [
  {
    num: "01",
    bg: "#d0cac6",
    fg: "#1c1917",
    muted: "rgba(28,25,23,0.65)",
    iconBg: "rgba(28,25,23,0.12)",
    tabMargin: "0%",
    tabRadius: "8px 24px 0 0",
    cardRadius: "0 32px 32px 32px",
    icon: (
      <path
        fillRule="evenodd"
        d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
        clipRule="evenodd"
      />
    ),
    title: "Launch in weeks, not months",
    desc: "You go live in 6 weeks, not 16. No endless meetings, no 'just one more revision.' We cut the build time by 40% so you can start generating revenue sooner. Every week your product isn't live is revenue you're leaving on the table.",
  },
  {
    num: "02",
    bg: "#e8ddcf",
    fg: "#1c1917",
    muted: "rgba(28,25,23,0.65)",
    iconBg: "rgba(28,25,23,0.12)",
    tabMargin: "25%",
    tabRadius: "8px 24px 0 0",
    cardRadius: "32px",
    icon: (
      <path
        fillRule="evenodd"
        d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
        clipRule="evenodd"
      />
    ),
    title: "Fixed budget, guaranteed delivery",
    desc: "One quote. No mid-project invoices, no surprise charges, no scope creep. We lock the deliverables and timeline up front what you're getting, when, and exactly what you'll pay. Something changes? You decide before any work starts.",
  },
  {
    num: "03",
    bg: "#0c1530",
    fg: "#fafaf9",
    muted: "rgba(250,250,249,0.65)",
    iconBg: "rgba(250,250,249,0.12)",
    tabMargin: "50%",
    tabRadius: "8px 24px 0 0",
    cardRadius: "32px",
    icon: (
      <path
        fillRule="evenodd"
        d="M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z"
        clipRule="evenodd"
      />
    ),
    title: "You own everything",
    desc: "Full handover on day one your product, your data, your customers, your brand. No vendor lock-in, no hidden dependencies, no hostage situations if you take it in-house later. What we build is yours, completely and forever.",
  },
  {
    num: "04",
    bg: "#dbe4ee",
    fg: "#1c1917",
    muted: "rgba(28,25,23,0.65)",
    iconBg: "rgba(28,25,23,0.12)",
    tabMargin: "75%",
    tabRadius: "8px 24px 0 0",
    cardRadius: "32px 0 32px 32px",
    icon: (
      <path
        fillRule="evenodd"
        d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z"
        clipRule="evenodd"
      />
    ),
    title: "Pricing that grows with you",
    desc: "Built for real business budgets. Milestone-based payments, no massive deposits, no long-term contracts. You pay as your product takes shape, and you can pause at any milestone if priorities shift. We win when your business grows so the math is set up for you, not against you.",
  },
];

export default function Solution() {
  return (
    <section className="relative bg-white pt-16 pb-8 dark:bg-[#0f1020] sm:pt-24 sm:pb-12 lg:pt-32 lg:pb-16">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:gap-14 lg:grid-cols-12 lg:gap-20">
          {/* Left column */}
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-28">
              <motion.div
                initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.8, ease: EASE }}
              >
                {/* Badge */}
                <div className="mb-6 flex items-center gap-4 sm:mb-8">
                  <span className="rounded-full border border-neutral-300 px-4 py-1.5 text-[11px] font-medium tracking-wide text-neutral-600 transition-colors duration-500 dark:border-white/10 dark:text-white/70 sm:px-5 sm:text-xs">
                    The Solution
                  </span>
                  <div className="h-px w-12 bg-neutral-300 transition-colors duration-500 dark:bg-white/15 md:w-16" />
                </div>

                {/* Heading */}
                <h2 className="max-w-xl text-[1.75rem] font-medium leading-[0.98] tracking-tight text-[#111] dark:text-white sm:text-[2.5rem] md:text-[3rem]">
                  We build your product, fast, clean, and ready for customers.
                </h2>

                {/* Paragraph */}
                <p className="mt-5 max-w-md text-[14px] leading-relaxed text-neutral-600 dark:text-white/65 sm:mt-6 sm:text-[15px] md:mt-7 md:text-base">
                  <span className="font-medium text-[#111] dark:text-white">
                    Smart delivery
                  </span>{" "}
                  means we handle the heavy lifting so you can focus on running
                  your business. A small, senior team ships what used to take an
                  entire agency at a fraction of the cost and timeline. We do
                  the work; you see the results.
                </p>

                {/* CTA */}
                <div className="mt-7 sm:mt-8 md:mt-10">
                  <PixelButton
                    href="/contact"
                    bgClassName="bg-black dark:bg-white"
                    textClassName="text-white dark:text-black"
                    arrowBgClassName="bg-white dark:bg-black"
                    arrowColorClassName="text-black dark:text-white"
                    className="shadow-md"
                  >
                    Book a Free Discovery Call
                  </PixelButton>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Right column - sticky stacking cards */}
          <div className="flex flex-col gap-10 md:gap-14 lg:col-span-7">
            {solutions.map((s, i) => (
              <div
                key={i}
                className="sticky"
                style={{ top: i === solutions.length - 1 ? "0" : "7rem", zIndex: i + 1 }}
              >
                <motion.div
                  initial={{ opacity: 0, filter: "blur(8px) brightness(1)" }}
                  whileInView={{ opacity: 1, filter: "blur(0px) brightness(1)" }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.7, ease: EASE, delay: i * 0.05 }}
                >
                  {/* Tab label */}
                  <span
                    className="block w-1/4 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.2em] sm:px-4 sm:text-[10.5px]"
                    style={{
                      backgroundColor: s.bg,
                      color: s.fg,
                      borderRadius: s.tabRadius,
                      marginLeft: s.tabMargin,
                    }}
                  >
                    Solution / {s.num}
                  </span>

                  {/* Card */}
                  <article
                    className="flex flex-col gap-6 overflow-hidden p-8 md:gap-8 md:p-10 lg:p-12"
                    style={{
                      backgroundColor: s.bg,
                      color: s.fg,
                      borderRadius: s.cardRadius,
                    }}
                  >
                    {/* Icon */}
                    <div>
                      <span
                        className="inline-flex h-10 w-10 items-center justify-center rounded-xl md:h-11 md:w-11"
                        style={{ backgroundColor: s.iconBg }}
                      >
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          strokeWidth="0"
                          viewBox="0 0 20 20"
                          className="h-[26px] w-[26px] md:h-[29px] md:w-[29px]"
                        >
                          {s.icon}
                        </svg>
                      </span>
                    </div>

                    {/* Title + description */}
                    <div>
                      <h3 className="max-w-[28rem] text-[1.875rem] font-medium leading-[1.02] tracking-tight sm:text-[2.25rem] md:text-[2.75rem]">
                        {s.title}
                      </h3>
                      <p
                        className="mt-4 max-w-[34rem] text-[15px] leading-relaxed md:mt-5 md:text-base"
                        style={{ color: s.muted }}
                      >
                        {s.desc}
                      </p>
                    </div>
                  </article>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
