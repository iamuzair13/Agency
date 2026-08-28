"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const EASE = [0.16, 1, 0.3, 1] as const;

const steps = [
  {
    num: "01",
    timeframe: "Within 24 hours",
    title: "We review your brief",
    desc: "A senior lead reads your message — not a bot, not an intern. We check fit, scope, and whether we can genuinely help.",
    icon: (
      <>
        <path d="M3 8l9 6 9-6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.8" />
      </>
    ),
  },
  {
    num: "02",
    timeframe: "Day 2–3",
    title: "Discovery call (30 min)",
    desc: "A focused video call to dig into goals, constraints, and timeline. You leave with a clear picture of next steps — no sales pitch.",
    icon: (
      <>
        <rect x="2" y="6" width="14" height="12" rx="2" stroke="currentColor" strokeWidth="1.8" />
        <path d="M16 10l6-3v10l-6-3" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      </>
    ),
  },
  {
    num: "03",
    timeframe: "Day 3–5",
    title: "Fixed quote + timeline",
    desc: "You get a written proposal with a locked scope, milestone breakdown, and a fixed price. No hourly billing, no surprise invoices.",
    icon: (
      <>
        <path d="M9 11l3 3L22 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </>
    ),
  },
  {
    num: "04",
    timeframe: "Week 1",
    title: "Kickoff & first commit",
    desc: "Contract signed, repo created, staging URL live by end of week one. You see real code before you pay the second milestone.",
    icon: (
      <>
        <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.8" />
      </>
    ),
  },
];

export default function WhatHappensNext() {
  // Live "currently online" indicator that toggles to feel alive
  const [online, setOnline] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setOnline((o) => o);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative overflow-hidden bg-white py-16 transition-colors duration-500 dark:bg-[#0a0b16] sm:py-24 lg:py-32">
      <div className="mx-auto max-w-5xl px-5 sm:px-6 lg:px-8">
        {/* Heading + availability badge */}
        <motion.div
          initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: EASE }}
          className="mb-12 flex flex-col gap-6 sm:mb-16 sm:flex-row sm:items-end sm:justify-between"
        >
          <div className="max-w-2xl">
            <span className="inline-block text-xs font-medium uppercase tracking-[0.2em] text-[#4e516a] dark:text-white/50">
              After you hit send
            </span>
            <h2 className="mt-4 text-[28px] font-medium leading-[1.05] tracking-tight text-[#202342] dark:text-white sm:text-[40px] sm:tracking-[-1.5px] lg:text-[48px]">
              What happens next.
            </h2>
            <p className="mt-4 text-sm text-[#4e516a] dark:text-white/60 sm:text-base">
              No black holes, no &ldquo;we&apos;ll be in touch.&rdquo;
              Here&apos;s the exact path from your message to your first
              commit.
            </p>
          </div>

          {/* Live availability indicator */}
          <div className="flex items-center gap-3 rounded-2xl border border-[#202342]/10 bg-[#f5f6fa] px-5 py-3.5 dark:border-white/10 dark:bg-white/5">
            <span className="relative flex h-3 w-3">
              {online && (
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75" />
              )}
              <span
                className={`relative inline-flex h-3 w-3 rounded-full ${
                  online ? "bg-green-500" : "bg-amber-500"
                }`}
              />
            </span>
            <div className="flex flex-col">
              <span className="text-sm font-medium text-[#202342] dark:text-white">
                {online ? "Online now" : "Back soon"}
              </span>
              <span className="text-[11px] text-[#4e516a] dark:text-white/40">
                Avg. reply &lt; 4 hours
              </span>
            </div>
          </div>
        </motion.div>

        {/* Timeline steps */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:gap-6">
          {steps.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, ease: EASE, delay: i * 0.1 }}
              className="group relative overflow-hidden rounded-2xl border border-[#202342]/10 bg-[#f5f6fa] p-6 transition-all duration-300 hover:border-[#4555fd]/30 hover:shadow-lg dark:border-white/10 dark:bg-white/5 dark:hover:border-[#6b78ff]/30 sm:p-7"
            >
              {/* Big number watermark */}
              <span className="pointer-events-none absolute -right-2 -top-4 text-[80px] font-bold leading-none text-[#202342]/[0.04] transition-colors duration-500 dark:text-white/[0.04] sm:text-[100px]">
                {s.num}
              </span>

              <div className="relative flex items-start gap-4">
                {/* Icon */}
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#4555fd]/10 text-[#4555fd] transition-transform duration-300 group-hover:scale-110 dark:bg-[#6b78ff]/15 dark:text-[#6b78ff]">
                  <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
                    {s.icon}
                  </svg>
                </span>

                <div className="flex-1">
                  <span className="text-[11px] font-bold uppercase tracking-wide text-[#4555fd] dark:text-[#6b78ff]">
                    {s.timeframe}
                  </span>
                  <h3 className="mt-1 text-lg font-medium text-[#202342] dark:text-white">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#4e516a] dark:text-white/60">
                    {s.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
