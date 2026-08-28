"use client";

import { motion } from "framer-motion";

const EASE = [0.16, 1, 0.3, 1] as const;

const milestones = [
  {
    year: "2021",
    title: "Two people, one laptop",
    desc: "Founded as a two-person team with a simple thesis: AI changes the economics of software. First client shipped in 3 weeks.",
    stat: "1st client",
    color: "#4555fd",
  },
  {
    year: "2022",
    title: "Word gets around",
    desc: "Referrals drove 80% of new business. We hit 30 projects shipped and hired our first designer and DevOps engineer.",
    stat: "30 projects",
    color: "#7c3aed",
  },
  {
    year: "2023",
    title: "Full-service, fixed scope",
    desc: "Expanded into branding, motion, and mobile. Locked in our fixed-scope pricing model — no hourly billing, ever.",
    stat: "80 projects",
    color: "#db2777",
  },
  {
    year: "2024",
    title: "The AI-native pivot",
    desc: "Rebuilt our entire workflow around AI-augmented development. Build times dropped 40%. Lighthouse scores hit 90+ as a standard.",
    stat: "120 projects",
    color: "#ea580c",
  },
  {
    year: "2025",
    title: "150 and counting",
    desc: "8-person senior team across 6 time zones. Clients ranging from pre-seed founders to Series B brands. Still no ping-pong table.",
    stat: "150+ shipped",
    color: "#059669",
  },
];

export default function MilestonesTimeline() {
  return (
    <section className="relative overflow-hidden bg-[#f5f6fa] py-16 transition-colors duration-500 dark:bg-[#0f1020] sm:py-24 lg:py-32">
      {/* Glow accents */}
      <div
        aria-hidden
        className="pointer-events-none absolute top-1/4 left-0 h-[300px] w-[300px] rounded-full bg-[#4555fd]/8 blur-[120px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-1/4 right-0 h-[300px] w-[300px] rounded-full bg-[#7c3aed]/8 blur-[120px]"
      />

      <div className="relative mx-auto max-w-5xl px-5 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: EASE }}
          className="mb-12 max-w-2xl sm:mb-16"
        >
          <span className="inline-block text-xs font-medium uppercase tracking-[0.2em] text-[#4e516a] dark:text-white/50">
            Our journey
          </span>
          <h2 className="mt-4 text-[28px] font-medium leading-[1.05] tracking-tight text-[#202342] dark:text-white sm:text-[40px] sm:tracking-[-1.5px] lg:text-[48px]">
            From two people to 150+ projects.
          </h2>
          <p className="mt-4 text-sm text-[#4e516a] dark:text-white/60 sm:text-base">
            No funding rounds, no pivots to crypto, no pivot to AI consulting
            (we were already there). Just steady, profitable growth.
          </p>
        </motion.div>

        {/* Horizontal scroll timeline (desktop) */}
        <div className="hidden lg:block">
          {/* Line */}
          <div className="relative mb-10 h-px w-full bg-gradient-to-r from-[#4555fd] via-[#7c3aed] to-[#059669] opacity-30" />

          <div className="grid grid-cols-5 gap-4">
            {milestones.map((m, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.6, ease: EASE, delay: i * 0.1 }}
                className="relative"
              >
                {/* Node dot on the line (above the card) */}
                <div className="absolute -top-[52px] left-1/2 -translate-x-1/2">
                  <div
                    className="h-4 w-4 rounded-full border-4 border-[#f5f6fa] dark:border-[#0f1020]"
                    style={{ backgroundColor: m.color }}
                  />
                </div>

                {/* Year */}
                <div
                  className="mb-3 text-center text-2xl font-bold tracking-tight"
                  style={{ color: m.color }}
                >
                  {m.year}
                </div>

                {/* Card */}
                <div className="rounded-2xl border border-[#202342]/10 bg-white p-4 shadow-sm transition-all duration-300 hover:shadow-lg dark:border-white/10 dark:bg-white/5">
                  <h3 className="text-sm font-medium text-[#202342] dark:text-white">
                    {m.title}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-[#4e516a] dark:text-white/55">
                    {m.desc}
                  </p>
                  <div
                    className="mt-3 inline-block rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-white"
                    style={{ backgroundColor: m.color }}
                  >
                    {m.stat}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Vertical timeline (mobile / tablet) */}
        <div className="relative lg:hidden">
          {/* Vertical line */}
          <div
            aria-hidden
            className="absolute left-[19px] top-2 bottom-2 w-px bg-gradient-to-b from-[#4555fd] via-[#7c3aed] to-[#059669] opacity-30"
          />

          <div className="space-y-6">
            {milestones.map((m, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30, filter: "blur(8px)" }}
                whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.6, ease: EASE, delay: i * 0.08 }}
                className="relative flex gap-5"
              >
                {/* Node */}
                <div className="relative z-10 shrink-0">
                  <div
                    className="flex h-10 w-10 items-center justify-center rounded-full text-[10px] font-bold text-white shadow-md"
                    style={{ backgroundColor: m.color }}
                  >
                    {m.year.slice(2)}
                  </div>
                </div>

                {/* Card */}
                <div className="flex-1 rounded-2xl border border-[#202342]/10 bg-white p-5 shadow-sm dark:border-white/10 dark:bg-white/5">
                  <div className="flex items-center gap-3">
                    <h3 className="text-base font-medium text-[#202342] dark:text-white">
                      {m.title}
                    </h3>
                    <span
                      className="rounded-full px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wide text-white"
                      style={{ backgroundColor: m.color }}
                    >
                      {m.stat}
                    </span>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-[#4e516a] dark:text-white/60">
                    {m.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
