"use client";

import { motion } from "framer-motion";

const EASE = [0.16, 1, 0.3, 1] as const;

const columns = [
  {
    title: "Your Agency Name",
    highlight: true,
    points: [
      "Senior engineers from day one — every name on your team has shipped at scale.",
      "Working code in week one. Sharp scoping, fewer hand-offs.",
      "Type-safe by default, tested where it counts, hardened infra.",
      "One squad, one Slack channel, one accountable lead.",
      "Live US / UK working hours — same standups, same sprint.",
      "Fixed scope, fixed price. No padded hours.",
    ],
  },
  {
    title: "Typical Agencies",
    highlight: false,
    points: [
      "Juniors quietly swapped in once the engagement starts.",
      "Months of discovery decks before a single line of code.",
      "Hand-off projects riddled with undocumented tech debt.",
      "Five vendors pointing fingers when something breaks.",
      "Async-only with 12-hour reply windows.",
      "Opaque retainers and surprise invoices at month-end.",
    ],
  },
  {
    title: "Hiring In-House",
    highlight: false,
    points: [
      "6+ months to find and close a senior engineer.",
      "Onboarding eats your first quarter of productivity.",
      "Single hire = single point of failure on the codebase.",
      "Permanent salary, benefits, and equity overhead.",
      "Hard to scale capacity up or down with demand.",
      "Recruiting overhead pulls you off shipping product.",
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
            The unfair advantage
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
            Senior operators from day one. Sharp scoping, hardened code, fixed
            pricing. The agency model — rebuilt for teams that need to ship more
            than they need to talk about shipping.
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
                  className={`text-lg font-medium ${
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
