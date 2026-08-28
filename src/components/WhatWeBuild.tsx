"use client";

import { motion } from "framer-motion";

const EASE = [0.16, 1, 0.3, 1] as const;

const items = [
  "SaaS Platforms",
  "AI Applications",
  "Marketplaces",
  "Fintech Systems",
  "E-commerce Stores",
  "CRM Systems",
  "Mobile Apps",
  "Dashboards",
];

const row1 = [...items, ...items];
const row2 = [...[...items].reverse(), ...[...items].reverse()];

export default function WhatWeBuild() {
  return (
    <section className="relative overflow-hidden bg-[#f5f6fa] py-16 transition-colors duration-500 dark:bg-[#0f1020] sm:py-24">
      {/* ambient glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute top-1/2 left-1/4 h-[200px] w-[300px] -translate-y-1/2 rounded-full bg-[#4555fd]/10 blur-[100px] sm:h-[400px] sm:w-[500px] sm:blur-[150px]"
      />

      <div className="relative mx-auto mb-10 max-w-3xl px-5 text-center sm:px-6">
        <motion.span
          initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.7, ease: EASE }}
          className="inline-block text-xs font-medium uppercase tracking-[0.2em] text-[#4e516a] dark:text-white/50"
        >
          What we build
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.8, ease: EASE, delay: 0.1 }}
          className="mx-auto mt-4 max-w-xl text-[28px] font-medium leading-[1.1] tracking-tight text-[#202342] dark:text-white sm:text-[40px] sm:tracking-[-1.2px]"
        >
          Products across every domain
        </motion.h2>
      </div>

      {/* Row 1 — left to right */}
      <div className="relative flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_6%,black_94%,transparent)]">
        <div className="www-marquee-1 flex w-max items-center gap-3 pl-3 sm:gap-4 sm:pl-4">
          {row1.map((item, i) => (
            <span
              key={i}
              className="shrink-0 rounded-full border border-[#202342]/12 bg-white px-6 py-3 text-sm font-medium text-[#202342] dark:border-white/12 dark:bg-white/5 dark:text-white/80 sm:px-8 sm:py-4 sm:text-base"
            >
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* Row 2 — right to left (reverse direction) */}
      <div className="relative mt-3 flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_6%,black_94%,transparent)] sm:mt-4">
        <div className="www-marquee-2 flex w-max items-center gap-3 pl-3 sm:gap-4 sm:pl-4">
          {row2.map((item, i) => (
            <span
              key={i}
              className="shrink-0 rounded-full border border-[#202342]/12 bg-white px-6 py-3 text-sm font-medium text-[#202342] dark:border-white/12 dark:bg-white/5 dark:text-white/80 sm:px-8 sm:py-4 sm:text-base"
            >
              {item}
            </span>
          ))}
        </div>
      </div>

      <style jsx>{`
        .www-marquee-1 {
          animation: www-scroll-left 30s linear infinite;
          will-change: transform;
        }
        .www-marquee-2 {
          animation: www-scroll-right 30s linear infinite;
          will-change: transform;
        }
        @keyframes www-scroll-left {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
        @keyframes www-scroll-right {
          from {
            transform: translateX(-50%);
          }
          to {
            transform: translateX(0);
          }
        }
      `}</style>
    </section>
  );
}
