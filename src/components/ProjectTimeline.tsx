"use client";

import { motion } from "framer-motion";

const EASE = [0.16, 1, 0.3, 1] as const;

const phases = [
  {
    num: "01",
    title: "Discover",
    duration: "Week 1",
    desc: "We learn your business, your customers, and your goals. We leave with a clear plan, a fixed quote, and a timeline you can count on.",
    deliverables: ["Project plan", "Strategy document", "Fixed quote"],
    color: "#4555fd",
  },
  {
    num: "02",
    title: "Design",
    duration: "Week 2",
    desc: "We craft the customer experience how it looks, how it feels, and how it guides visitors to buy. You can click through it before we build anything.",
    deliverables: ["Visual design", "Customer journey", "Prototype"],
    color: "#7c3aed",
  },
  {
    num: "03",
    title: "Build",
    duration: "Week 3–5",
    desc: "We bring it to life with weekly progress you can see and test. You get a preview link from day one and a walkthrough every Friday no mystery.",
    deliverables: ["Preview link", "Weekly updates", "Your feedback built in"],
    color: "#db2777",
  },
  {
    num: "04",
    title: "Launch",
    duration: "Week 6",
    desc: "We go live, make sure everything works, and provide 30 days of free support. You own everything your website, your data, your customers.",
    deliverables: ["Go live", "Full ownership", "30-day support"],
    color: "#059669",
  },
];

export default function ProjectTimeline() {
  return (
    <section className="relative overflow-hidden bg-[#f5f6fa] py-16 transition-colors duration-500 dark:bg-[#0f1020] sm:py-24 lg:py-32">
      <div className="mx-auto max-w-5xl px-5 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: EASE }}
          className="mb-12 max-w-2xl sm:mb-16"
        >
          <span className="inline-block text-xs font-medium uppercase tracking-[0.2em] text-[#4e516a] dark:text-white/50">
            How we approach projects
          </span>
          <h2 className="mt-4 text-[28px] font-medium leading-[1.05] tracking-tight text-[#202342] dark:text-white sm:text-[40px] sm:tracking-[-1.5px] lg:text-[48px]">
            Six weeks, four phases, zero surprises.
          </h2>
          <p className="mt-4 text-sm text-[#4e516a] dark:text-white/60 sm:text-base">
            Every project follows the same proven rhythm. You always know
            what&apos;s happening, what&apos;s next, and what you&apos;re
            paying for.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line (desktop) */}
          <div
            aria-hidden
            className="absolute left-[27px] top-4 bottom-4 w-px bg-gradient-to-b from-[#4555fd] via-[#7c3aed] to-[#059669] opacity-30 sm:left-[31px]"
          />

          <div className="space-y-6 sm:space-y-8">
            {phases.map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30, filter: "blur(8px)" }}
                whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, ease: EASE, delay: i * 0.1 }}
                className="relative flex gap-5 sm:gap-7"
              >
                {/* Node */}
                <div className="relative z-10 shrink-0">
                  <div
                    className="flex h-14 w-14 items-center justify-center rounded-2xl text-sm font-bold text-white shadow-lg sm:h-16 sm:w-16 sm:text-base"
                    style={{ backgroundColor: p.color }}
                  >
                    {p.num}
                  </div>
                </div>

                {/* Content card */}
                <div className="flex-1 rounded-2xl border border-[#202342]/10 bg-white p-5 shadow-sm transition-colors duration-300 hover:border-[#4555fd]/30 dark:border-white/10 dark:bg-white/5 dark:hover:border-[#6b78ff]/30 sm:p-7">
                  <div className="flex flex-wrap items-center gap-3">
                    <h3 className="text-lg font-medium text-[#202342] dark:text-white sm:text-xl">
                      {p.title}
                    </h3>
                    <span
                      className="rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-white"
                      style={{ backgroundColor: p.color }}
                    >
                      {p.duration}
                    </span>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-[#4e516a] dark:text-white/60">
                    {p.desc}
                  </p>
                  {/* Deliverables */}
                  <div className="mt-4 flex flex-wrap gap-2">
                    {p.deliverables.map((d) => (
                      <span
                        key={d}
                        className="inline-flex items-center gap-1.5 rounded-full bg-[#202342]/5 px-3 py-1.5 text-xs font-medium text-[#4e516a] dark:bg-white/5 dark:text-white/60"
                      >
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          className="h-3 w-3"
                          style={{ color: p.color }}
                        >
                          <path
                            d="M20 6 9 17l-5-5"
                            stroke="currentColor"
                            strokeWidth="3"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        {d}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
