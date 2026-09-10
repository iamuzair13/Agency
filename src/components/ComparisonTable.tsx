"use client";

import { motion } from "framer-motion";

const EASE = [0.16, 1, 0.3, 1] as const;

const columns = [
  {
    title: "Your Agency Name",
    highlight: true,
    points: [
      "Senior experts from day one your project is handled by people who've delivered hundreds of times.",
      "See progress in week one. No endless meetings, no mystery, no waiting.",
      "Your product is built to last fast, secure, and ready for growth.",
      "One team, one point of contact, one person accountable for your success.",
      "Live when you need us quick responses, not 12-hour reply windows.",
      "Fixed budget, fixed timeline. No padded hours, no surprise invoices.",
    ],
  },
  {
    title: "Typical Agencies",
    highlight: false,
    points: [
      "Junior staff quietly swapped in once the contract is signed.",
      "Months of meetings and decks before anything actually gets built.",
      "Projects handed over riddled with problems you discover later.",
      "Multiple vendors pointing fingers when something breaks.",
      "Slow responses with 12-hour reply windows and endless email chains.",
      "Opaque retainers and surprise invoices showing up at month-end.",
    ],
  },
  {
    title: "Hiring In-House",
    highlight: false,
    points: [
      "6+ months to find and hire the right people for your team.",
      "Onboarding eats your first quarter of productivity and momentum.",
      "One hire leaving means your entire project stalls or breaks.",
      "Permanent salaries, benefits, and overhead whether you're building or not.",
      "Hard to scale your team up or down as your needs change.",
      "Recruiting pulls you away from actually running your business.",
    ],
  },
];

function CheckIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" className="h-4 w-4 shrink-0">
      <path d="M5 10l3 3 7-7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" className="h-4 w-4 shrink-0">
      <path d="M6 6l8 8M14 6l-8 8" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}

export default function ComparisonTable() {
  return (
    <section className="relative overflow-hidden bg-white py-16 transition-colors duration-500 dark:bg-[#0f1020] sm:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-12 max-w-2xl">
          <motion.span
            initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.7, ease: EASE }}
            className="inline-block text-xs font-medium uppercase tracking-[0.2em] text-[#4e516a] dark:text-white/50"
          >
            How We Work
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.8, ease: EASE, delay: 0.1 }}
            className="mt-4 text-[28px] font-medium leading-[1.1] tracking-tight text-[#202342] dark:text-white sm:text-[40px] sm:tracking-[-1.2px]"
          >
            Engineering you&apos;d hire if you could afford to.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.7, ease: EASE, delay: 0.2 }}
            className="mt-4 text-sm text-[#4e516a] dark:text-white/60 sm:text-base"
          >
            Senior experts from day one. Clear timelines, fixed pricing, and
            pricing. The agency model rebuilt for teams that need to ship more
            that need to grow more than they need to talk about growing.
          </motion.p>
        </div>

        {/* Comparison columns */}
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-3 lg:gap-6">
          {columns.map((col, ci) => (
            <motion.div
              key={col.title}
              initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, ease: EASE, delay: ci * 0.1 }}
              className={`rounded-3xl border p-6 sm:p-8 ${
                col.highlight
                  ? "border-[#4555fd]/30 bg-gradient-to-b from-[#4555fd]/8 to-transparent dark:border-[#6b78ff]/30 dark:from-[#6b78ff]/10 dark:to-transparent"
                  : "border-[#202342]/10 bg-[#f5f6fa] dark:border-white/10 dark:bg-white/5"
              }`}
            >
              <div className="mb-6 flex items-center gap-3">
                <h3
                  className={`text-lg font-medium tracking-wide ${
                    col.highlight
                      ? "text-[#4555fd] dark:text-[#6b78ff]"
                      : "text-[#202342] dark:text-white"
                  }`}
                >
                  {col.title}
                </h3>
                {col.highlight && (
                  <span className="rounded-full bg-[#4555fd] px-3 py-1 text-xs font-bold text-white dark:bg-[#6b78ff]">
                    You
                  </span>
                )}
              </div>
              <ul className="space-y-4">
                {col.points.map((point, pi) => (
                  <li key={pi} className="flex items-start gap-3">
                    <span
                      className={`mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full ${
                        col.highlight
                          ? "bg-[#4555fd]/15 text-[#4555fd] dark:bg-[#6b78ff]/20 dark:text-[#6b78ff]"
                          : "bg-[#202342]/8 text-[#4e516a] dark:bg-white/10 dark:text-white/50"
                      }`}
                    >
                      {col.highlight ? <CheckIcon /> : <XIcon />}
                    </span>
                    <span
                      className={`text-sm leading-relaxed ${
                        col.highlight
                          ? "text-[#202342] dark:text-white/90"
                          : "text-[#4e516a] dark:text-white/50"
                      }`}
                    >
                      {point}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
